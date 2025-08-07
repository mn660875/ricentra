"use client";
import { useEffect, useState } from "react";

export default function BatteryStatus() {
  const [batteryInfo, setBatteryInfo] = useState(null);

  useEffect(() => {
    if (typeof navigator !== "undefined" && "getBattery" in navigator) {
      navigator.getBattery().then((battery) => {
        const updateBatteryInfo = () => {
          setBatteryInfo({
            charging: battery.charging,
            level: battery.level,
          });
        };

        updateBatteryInfo();

        battery.addEventListener("chargingchange", updateBatteryInfo);
        battery.addEventListener("levelchange", updateBatteryInfo);

        // Cleanup
        return () => {
          battery.removeEventListener("chargingchange", updateBatteryInfo);
          battery.removeEventListener("levelchange", updateBatteryInfo);
        };
      });
    }
  }, []);

  if (!batteryInfo) {
    return <p>Loading battery info...</p>;
  }

  return (
    <div className="p-2 flex items-center gap-3">
      <p className="font-semibold">Battery level: {batteryInfo.level * 100}%</p>
      <p className="font-semibold">Charging: {batteryInfo.charging ? "Yes" : "No"}</p>
    </div>
  );
}
