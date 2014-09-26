/* 
	*** Simple example that shows how to use the Wunderbar Bridge module
    *** to connect an Ardino to the relayr open sensor cloud.

    The application wait for receiving data from the Bridge and shows the
    received value in a Grove Module
 */

#include <SoftwareSerial.h>
#include <WunderbarBridge.h>

#define BRIDGE_DEBUG true

const int DEBUG_TX = 11;
const int DEBUG_RX = 10;

/*  Config the bridge module, the 3rd parameter is the baudrate,
    which has to be the same used in the PC serial monitor application*/
Bridge bridge = Bridge(DEBUG_RX, DEBUG_TX, 115200); 

const int led = 9;
const int button = 2;

void setup() {
  pinMode(button,INPUT_PULLUP);
  bridge.begin();
}

/* Main Loop */
void loop() {
	 
  static uint8_t dataOut[2] = {1, 2};
  static bridge_payload_t rxPayload;
  
  if (digitalRead(button) == LOW) {
        
      bridge.sendData(dataOut, 2);

	digitalWrite(led, HIGH);
	delay(1000);
	digitalWrite(led, LOW);
  }
}

/* the serialEvent() handler is called on every received data 
from the serial port. */
void serialEvent() {
	bridge.processSerial();
}



