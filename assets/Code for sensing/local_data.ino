/*#include "Thermocouple.h"
#include "config.h"
#include "DHT.h"

#define DHTPIN 2        
#define DHTTYPE DHT11 
#define solarPin 32
#define comparePin 33

// DHT variables
DHT dht(DHTPIN, DHTTYPE);

// sensor variables
Thermocouple solarSensor("solar");
Thermocouple compareSensor("compare");

static int invalid_count = 0;
const int invalid_max = 10;

void setup() { 
  Serial.begin(115200);
  solarSensor.setupSensor(solarPin);
  compareSensor.setupSensor(comparePin);
  dht.begin();
}

// use deep copy here to avoid unsafe internal pointers
void publishMessage() {
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
  Serial.println(payload);
}

void loop() {
  // if sensor connection is disrupted, then reboot
  if (invalid_count >= invalid_max) {
    Serial.println("Too many invalid data, reboot device to refresh connection");
    delay(1000);
    esp_restart();
  }
  publishMessage()
  delay(5000)
}*/