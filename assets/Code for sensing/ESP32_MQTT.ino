/* this code is first creditted to UROP team who is working with us. This is modified to able to log humidity and atmospheric temperature at the same time 
#include <WiFi.h> 
#include <PubSubClient.h>
#include <WiFiClientSecure.h>
#include "Thermocouple.h"
#include "config.h"
#include "DHT.h"

#define DHTPIN 2        
#define DHTTYPE DHT11 
#define solarPin 32
#define comparePin 33

// DHT variables
DHT dht(DHTPIN, DHTTYPE);

// wifi variables
WiFiClientSecure wifiClient;

// mqtt variables
const char* topic = "thermocouple-readings";
PubSubClient mqttClient(wifiClient);

// sensor variables
Thermocouple solarSensor("solar");
Thermocouple compareSensor("compare");

static int invalid_count = 0;
const int invalid_max = 10;

void connectWiFi() {
  delay(10);
  Serial.println();
  Serial.print("Connecting to ");
  Serial.println(ssid);

  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.println("WiFi connected");
}

void connectBroker() {
  while (!mqttClient.connected()) {
    Serial.print("Connecting to broker...");
    // esp32 is the mqtt client id
    if (mqttClient.connect("esp32", mqtt_username, mqtt_password)) {
      Serial.println("Connected");
      mqttClient.subscribe("setup1/temp");
    } else {
      Serial.print("Connection failed, state: ");
      Serial.println(mqttClient.state());
      Serial.println("Try again in 3 seconds...");
      delay(3000);
    }
  }
}

// this is for incoming messages
void callback(char* topic, byte* payload, unsigned int len) {
  Serial.print("Topic name: ");
  Serial.println(topic);
  Serial.print("Message: ");
  for (int i = 0; i < len; i++) {
    Serial.print((char)payload[i]);
  }
  Serial.println();
}

void setup() {
  Serial.begin(115200);
  // connect wifi
  connectWiFi();
  // set sensors
  solarSensor.setupSensor(solarPin);
  compareSensor.setupSensor(comparePin);
  // set time and wait for sync
  configTime(0, 0, "pool.ntp.org", "time.nist.gov");
  setenv("TZ", "UTC-8", 1);
  tzset();
  while (time(nullptr) < 1000000) {
    // time is beyond 1000000s after 1970, likely synchronised lol
    Serial.print(".");
    delay(1000);
  }
  Serial.println("\nTime is synchronised");
  // set mqtt
  wifiClient.setInsecure();
  Serial.println("set insecure");
  mqttClient.setServer(mqtt_server, mqtt_port);
  Serial.println("set server");
  mqttClient.setKeepAlive(120);
  mqttClient.setCallback(callback);
  Serial.println("set callback");
  dht.begin();
}

bool isDayTime() {
  time_t now;
  struct tm timeinfo;
  time(&now);
  localtime_r(&now, &timeinfo);
  return (timeinfo.tm_hour >= 0 && timeinfo.tm_hour <= 24);
}

String getTimeNow() {
  time_t now;
  struct tm timeinfo;
  char timestamp[32];
  time(&now);
  localtime_r(&now, &timeinfo);
  strftime(timestamp, sizeof(timestamp), "%Y%m%d %H%M%S", &timeinfo);
  // Serial.println(timestamp);
  return String(timestamp);
}

// use deep copy here to avoid unsafe internal pointers
void publishMessage(Thermocouple& sensor1,Thermocouple& sensor2, const char* topic) {
  float temp1 = sensor1.getTemperature();
  float temp2 = sensor2.getTemperature();
  float hum = dht.readHumidity();
  float temph = dht.readTemperature();
  if (temp1 == 85.0 || temp1 == -127.0 || temp2 == 85.0 || temp2 == -127.0|| isnan(hum) || isnan(temph)) {
    invalid_count += 1;
    continue
  }
  String payload = "{";
  payload += "\"temp_" + String(sensor1.sensorName)+"\":" + String(temp1) + ",";
  payload += "\"temp_" + String(sensor2.sensorName)+"\":" + String(temp2) + ",";
  payload += "\"humidity\":" + String(hum) + ",";
  payload += "\"atm_temp\":" + String(temph) + ",";
  payload += "\"time\":\"" + getTimeNow() + "\"}";
  mqttClient.publish(topic, payload.c_str());
  Serial.print("Published to ");
  Serial.print(topic);
  Serial.println(": " + payload);
}

void loop() {
  // if sensor connection is disrupted, then reboot
  if (invalid_count >= invalid_max) {
    Serial.println("Too many invalid data, reboot device to refresh connection");
    delay(1000);
    esp_restart();
  }

  // only send data in daytime 0700-1900
  if (isDayTime()) {
    if (!mqttClient.connected()) {
      connectBroker();
    }
    mqttClient.loop();
    publishMessage(solarSensor,compareSensor,topic);
    delay(10000);
  } else {
    Serial.println("Off work, go sleep...");
    // delay 10 minutes
    delay(600000);
  }
}*/