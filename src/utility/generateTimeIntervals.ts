export default function generateTimeIntervals() {
  const times = [];
  const startTime = new Date(0, 0, 0, 0, 0, 0); // Start at 00:00:00
  const endTime = new Date(0, 0, 0, 23, 45, 0); // End at 23:45:00
  const interval = 15; // 30 minutes interval

  while (startTime <= endTime) {
    let hours = startTime.getHours();
    const minutes = String(startTime.getMinutes()).padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    const rawTime = `${String(hours).padStart(2, "0")}:${minutes}:00`;
    hours = hours % 12 || 12; // Convert to 12-hour format and handle midnight as 12
    const label = `${String(hours).padStart(2, "0")}:${minutes} ${ampm}`;

    times.push({
      label: label,
      value: rawTime,
    });

    startTime.setMinutes(startTime.getMinutes() + interval);
  }

  return times;
}
