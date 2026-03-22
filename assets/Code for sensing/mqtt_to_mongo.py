import json
import os
import signal
import sys
import time
import ssl
from datetime import datetime
from typing import Optional

from dotenv import load_dotenv  # type: ignore
from pymongo import MongoClient  # type: ignore
from pymongo.errors import PyMongoError  # type: ignore
import paho.mqtt.client as mqtt  # type: ignore

# ---------- Config ----------
load_dotenv()

MQTT_HOST = os.getenv("MQTT_HOST", "localhost")
MQTT_PORT = int(os.getenv("MQTT_PORT", "8883"))
MQTT_USERNAME = os.getenv("MQTT_USERNAME") or None
MQTT_PASSWORD = os.getenv("MQTT_PASSWORD") or None
MQTT_TOPICS = [t.strip() for t in os.getenv("MQTT_TOPICS", "test/topic").split(",") if t.strip()]
MQTT_QOS = int(os.getenv("MQTT_QOS", "0"))
MQTT_CLIENT_ID = os.getenv("MQTT_CLIENT_ID", "mqtt-to-mongo-subscriber")
MONGO_URI = os.getenv("MONGO_URI", "mongodb://localhost:27017")
MONGO_DATA = "Sensor_data"
MONGO_COLL = datetime.now().strftime("%Y-%m-%d") #need loop check

# ---------- Mongo ----------
mongo_client = MongoClient(MONGO_URI, uuidRepresentation="standard")
collection = mongo_client[MONGO_DATA][MONGO_COLL]

# idempotent indexes
try:
    collection.create_index([("topic", 1), ("time", -1)])
except Exception as e:
    print(f"[Mongo] index warning: {e}")

# ---------- Transform ----------
def transform(message: dict | str, topic: str) -> dict:
    if isinstance(message, dict):
        timenow= message.get("time").split(" ")[1]
        message["time_only"] = int(timenow)
        return message

# ---------- MQTT Callbacks ----------
def on_connect(client: mqtt.Client, userdata, flags, rc, properties=None):
    if rc == 0:
        print(f"[MQTT] Connected to {MQTT_HOST}:{MQTT_PORT}")
        # Subscribe to each topic with configured QoS
        for t in MQTT_TOPICS:
            client.subscribe(t, qos=MQTT_QOS)
            print(f"[MQTT] Subscribed to '{t}' (QoS {MQTT_QOS})")
    else:
        print(f"[MQTT] Connection failed (rc={rc})")

def on_disconnect(client: mqtt.Client, userdata, rc, properties=None):
    print(f"[MQTT] Disconnected (rc={rc}). Paho will try to reconnect...")

def on_message(client: mqtt.Client, userdata, msg: mqtt.MQTTMessage):
    try:
        payload = msg.payload.decode("utf-8", errors="replace")
        try:
            parsed = json.loads(payload)
        except json.JSONDecodeError:
            parsed = payload

        doc = transform(parsed, msg.topic)
        collection.insert_one(doc)
        # lightweight confirmation
        print(f"[Mongo] Inserted doc from topic '{msg.topic}'")
    except PyMongoError as e:
        print(f"[Mongo] insert error: {e}")
    except Exception as e:
        print(f"[ERROR] on_message: {e}")

# ---------- Setup MQTT ----------
def setup_mqtt() -> mqtt.Client:
    client = mqtt.Client(client_id=MQTT_CLIENT_ID, protocol=mqtt.MQTTv311)
    if MQTT_USERNAME:
        client.username_pw_set(MQTT_USERNAME, MQTT_PASSWORD)

    # Enable TLS for HiveMQ Cloud (port 8883)
    # If you have a custom/self-signed CA, set ca_certs="path/to/ca.crt"
    client.tls_set(
        cert_reqs=ssl.CERT_REQUIRED,
        tls_version=ssl.PROTOCOL_TLS
    )
    # Do NOT set tls_insecure_set(True) unless you're testing self-signed certs.

    client.on_connect = on_connect
    client.on_disconnect = on_disconnect
    client.on_message = on_message

    # Backoff for reconnects
    client.reconnect_delay_set(min_delay=1, max_delay=30)
    return client

# ---------- Graceful exit ----------
mqtt_client: Optional[mqtt.Client] = None

def handle_exit(signum, frame):
    print("\n[SYS] Shutting down…")
    try:
        if mqtt_client is not None:
            mqtt_client.loop_stop()
            mqtt_client.disconnect()
    except Exception:
        pass
    try:
        mongo_client.close()
    except Exception:
        pass
    sys.exit(0)

signal.signal(signal.SIGINT, handle_exit)
signal.signal(signal.SIGTERM, handle_exit)

# ---------- Main ----------
if __name__ == "__main__":
    mqtt_client = setup_mqtt()
    mqtt_client.connect(MQTT_HOST, MQTT_PORT, keepalive=60)

    # Run MQTT loop in background so we control shutdown cleanly
    mqtt_client.loop_start()
    print("[SYS] MQTT → Mongo bridge running. Press Ctrl+C to stop.")

    # Keep main thread alive
    try:
        while True:
            if datetime.now().strftime("%Y-%m-%d") != MONGO_COLL: os.execv(sys.executable, [sys.executable] + sys.argv)
            time.sleep(1)
    except KeyboardInterrupt:
        handle_exit(None, None)
