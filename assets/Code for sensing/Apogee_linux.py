"""
Python 3 driver for Apogee USB sensors (e.g., SP-420 pyranometer, SQ-420/SQ-520 quantum)
Now adapted for Linux (e.g., Raspberry Pi 4). It automatically logs readings every 1 second.

Usage:
    pip install pyserial
    python3 apogee_rpi_logger.py

It will auto-detect the USB port and continuously print and save readings (timestamp, value, volts) to a CSV file in the current directory.
"""
import struct
import time
import csv
import serial #type: ignore
from serial.tools import list_ports #type: ignore
from datetime import datetime

# Commands
GET_VOLT = b'\x55!'
READ_CALIBRATION = b'\x83!'

class ApogeeUSB:
    def __init__(self, port=None, baud=115200, timeout=0.5):
        self.port = port or self.auto_detect_port()
        if not self.port:
            raise IOError("No Apogee USB sensor detected.")
        self.ser = serial.Serial(self.port, baud, timeout=timeout)
        time.sleep(0.1)
        self.multiplier, self.offset = self.read_calibration()

    def auto_detect_port(self):
        ports = list_ports.comports()
        for p in ports:
            if 'USB' in p.device or 'tty' in p.device:
                return p.device
        return None

    def read_bytes(self, cmd, length):
        self.ser.reset_input_buffer()
        self.ser.write(cmd)
        data = self.ser.read(length)
        if len(data) != length:
            raise IOError(f"Timeout or incomplete read ({len(data)} bytes)")
        return data

    def read_calibration(self):
        data = self.read_bytes(READ_CALIBRATION, 9)
        multiplier = struct.unpack('<f', data[1:5])[0]
        offset = struct.unpack('<f', data[5:9])[0]
        print(f"Calibration: multiplier={multiplier:.6f}, offset={offset:.6f} V")
        return multiplier, offset

    def read_voltage(self):
        data = self.read_bytes(GET_VOLT, 5)
        volts = struct.unpack('<f', data[1:5])[0]
        return volts

    def read_value(self):
        volts = self.read_voltage()
        value = (volts - self.offset) * self.multiplier * 1000.0
        if value < 0:
            value = 0
        return value, volts

if __name__ == '__main__':
    device = ApogeeUSB()
    print(f"Connected to: {device.port}")

    filename = f"apogee_log_{datetime.now().strftime('%Y%m%d_%H%M%S')}.csv"
    with open(filename, 'w', newline='') as f:
        writer = csv.writer(f)
        writer.writerow(['Timestamp', 'Value', 'Voltage (V)'])

        print(f"Logging started. Saving to {filename} ...")
        try:
            while True:
                val, volts = device.read_value()
                ts = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
                writer.writerow([ts, f"{val:.3f}", f"{volts:.6f}"])
                f.flush()
                print(f"{ts} | {val:.3f} | {volts:.6f} V")
                time.sleep(1)
        except KeyboardInterrupt:
            print("\nLogging stopped.")
