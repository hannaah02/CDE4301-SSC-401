import os
import time #type: ignore
import serial  #type: ignore
from datetime import datetime
from openpyxl import Workbook  #type: ignore
from pathlib import Path

# ----------------- USER CONFIG -----------------
PORT = "/dev/ttyUSB0" #"/dev/ttyACM0" #"COM4"    # or '/dev/ttyUSB0' for CH340 clones
BAUD = 115200
DELIM = ","               # change to " " if your data is space-separated
LOG_DIR = Path("C:/Users/thuan/Downloads")
SAVE_EVERY_N_ROWS = 10    # reduce SD wear; workbook saved every N rows
HEADERS = ["Temp_solar","Temp_control","Humidity","Atm_temp","Time_only"]            # e.g., ["Temperature (°C)", "Pressure (hPa)", "Humidity (%)",time]
# ------------------------------------------------

LOG_DIR.mkdir(parents=True, exist_ok=True)

def new_excel_path_for_today():
    """Create a fresh filename that never reuses/overwrites an existing file."""
    date_str = datetime.now().strftime("%Y-%m-%d")
    base = LOG_DIR / f"arduino_{date_str}.xlsx"
    if not base.exists():
        return base
    # If a file for today already exists, add a time suffix
    time_str = datetime.now().strftime("%H%M%S")
    return LOG_DIR / f"arduino_{date_str}_{time_str}.xlsx"

def create_new_workbook(headers, first_row=None):
    wb = Workbook()
    ws = wb.active
    if headers is None:
        # If no headers supplied, infer generic column titles from first_row length
        n = len(first_row) if first_row else 0
        headers_to_write = [f"col{i+1}" for i in range(n)] if n > 0 else ["col1"]
    else:
        headers_to_write = headers
    ws.append(headers_to_write)
    return wb, ws

def parse_line(line):
    # Split & strip; ignore empty chunks
    parts = [p.strip() for p in line.split(DELIM)]
    parts[0] = parts[0][1:]
    parts.pop(-1)
    lis = []
    nams = []
    print(parts)
    for i in range(len(parts)):
        k,v = parts[i].split(":")
        lis.append(v)
        nams.append(k)
    lis.append(datetime.now().strftime("%H%M%S"))
    nams.append("Time_only")
    print(lis)
    return lis, nams

def main():
    # Connect to Arduino serial
    ser = serial.Serial(PORT, BAUD, timeout=1)
    time.sleep(2)  # allow Arduino to reset
    hour = datetime.now().hour

    # Skip logging outside 7AM–7P

    current_day = datetime.now().date()
    wb = None
    ws = None
    excel_path = None
    rows_since_save = 0

    print("Listening on", PORT, "-> writing daily Excel files in", str(LOG_DIR))

    while True:
        try:
            raw = ser.readline().decode("utf-8", errors="ignore").strip()
            if not raw:
                continue
            if "sensor request temperature" in raw.lower():
                continue  # ignore these lines completely
            if hour > 6 or hour >= 19:
                print(" Nighttime (7PM–7AM) — pausing data logging...")
                time.sleep(3600)  # check again every minute
                continue
            # Day rollover check (at midnight) -> start new file
            now = datetime.now()
            if now.date() != current_day or wb is None:
                # Close out old file by saving if any
                if wb and excel_path:
                    wb.save(excel_path)
                    print(f"[Rolled] Saved and closed: {excel_path}")

                # Create a brand-new file for the (new) day
                excel_path = new_excel_path_for_today()
                # Use the first row to infer headers if HEADERS is None
                first_parts = parse_line(raw)[0]
                wb, ws = create_new_workbook(HEADERS)
                # Immediately write the first parsed row
                ws.append(first_parts)
                wb.save(excel_path)
                rows_since_save = 0
                current_day = now.date()
                print(f"[New Day] Started file: {excel_path}")
                continue

            # Normal appends (same day)
            parts = parse_line(raw)[0]
            ws.append(parts)
            rows_since_save += 1

            # Save periodically to avoid data loss
            if rows_since_save >= SAVE_EVERY_N_ROWS:
                wb.save(excel_path)
                rows_since_save = 0
                print(f"[Saved] {excel_path}")

        except KeyboardInterrupt:
            print("Stopping…")
            break
        except Exception as e:
            # Keep running on transient errors
            print("Error:", e)
            time.sleep(0.5)

    # Final save on exit
    if wb and excel_path:
        wb.save(excel_path)
        print(f"[Exit] Final save: {excel_path}")

if __name__ == "__main__":
    main()
