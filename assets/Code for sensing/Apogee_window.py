import sys as _sys
import time as _time
import csv as _csv
import struct as _struct
from datetime import datetime as _dt
import serial as _serial #type: ignore
from serial.tools import list_ports as _list_ports #type: ignore

GET_VOLT = b'\x55!'
READ_CALIBRATION = b'\x83!'

class _ApogeeUSBWin:
    def __init__(self, port: str | None = None, baud: int = 115200, timeout: float = 0.5):
        self.port = port or self._auto_detect_port()
        if not self.port:
            raise IOError("No Apogee USB sensor detected on any COM port.")
        self.ser = _serial.Serial(self.port, baud, timeout=timeout)
        _time.sleep(0.1)
        self.multiplier, self.offset = self._read_calibration()

    def _auto_detect_port(self) -> str | None:
        # Prefer ports that look like real USB serial adapters
        candidates = []
        for p in _list_ports.comports():
            dev = (p.device or "").upper()
            desc = (p.description or "").lower()
            if dev.startswith("COM"):
                # Weight FTDI/USB descriptions higher
                score = 0
                if any(k in desc for k in ["ftdi", "usb", "serial", "apogee"]):
                    score += 1
                candidates.append((score, dev))
        if candidates:
            candidates.sort(reverse=True)
            return candidates[0][1]
        return None

    def _read_exact(self, cmd: bytes, n: int) -> bytes:
        self.ser.reset_input_buffer()
        self.ser.write(cmd)
        data = b""
        deadline = _time.time() + 1.0
        while len(data) < n and _time.time() < deadline:
            chunk = self.ser.read(n - len(data))
            if chunk:
                data += chunk
        if len(data) != n:
            raise IOError(f"Short read: expected {n}, got {len(data)}")
        return data

    def _read_calibration(self) -> tuple[float, float]:
        raw = self._read_exact(READ_CALIBRATION, 9)
        mult = _struct.unpack('<f', raw[1:5])[0]
        offs = _struct.unpack('<f', raw[5:9])[0]
        print(f"Calibration -> multiplier={mult:.6f}, offset={offs:.6f} V")
        return mult, offs

    def read_voltage(self) -> float:
        raw = self._read_exact(GET_VOLT, 5)
        return _struct.unpack('<f', raw[1:5])[0]

    def read_value(self) -> tuple[float, float]:
        volts = self.read_voltage()
        value = (volts - self.offset) * self.multiplier * 1000.0
        if 0 > value > -1e-6:
            value = 0.0
        return value, volts

if __name__ == "__main__":
    port = _sys.argv[1] if len(_sys.argv) > 1 else None
    dev = _ApogeeUSBWin(port)
    print(f"Connected on {dev.port}")

    fname = f"apogee_log_win_{_dt.now().strftime('%Y%m%d_%H%M%S')}.csv"
    with open(fname, 'w', newline='') as f:
        w = _csv.writer(f)
        w.writerow(["Timestamp", "Value", "Voltage (V)"])
        print(f"Logging every 1 s -> {fname}")
        try:
            while True:
                val, v = dev.read_value()
                ts = _dt.now().strftime('%Y-%m-%d %H:%M:%S')
                w.writerow([ts, f"{val:.3f}", f"{v:.6f}"])
                f.flush()
                print(f"{ts} | {val:.3f} | {v:.6f} V")
                _time.sleep(1)
        except KeyboardInterrupt:
            print("\nStopped.")
