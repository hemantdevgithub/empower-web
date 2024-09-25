import { useState } from "react";

export default function RevenueSummary() {
  const revenueData = [
    { month: "Jan", value: 10 },
    { month: "Feb", value: 20 },
    { month: "Mar", value: 15 },
    { month: "Apr", value: 25 },
    { month: "May", value: 22 },
    { month: "Jun", value: 30 },
    { month: "Jul", value: 35 },
    { month: "Aug", value: 28 },
    { month: "Sep", value: 20 },
    { month: "Oct", value: 25 },
    { month: "Nov", value: 30 },
    { month: "Dec", value: 35 },
  ];

  const RevenueChart = () => {
    const maxValue = Math.max(...revenueData.map((d) => d.value));
    const highlightMonth = "Jul";

    return (
      <svg className="h-64 w-full" viewBox="0 0 1200 300">
        {revenueData.map((data, index) => {
          const barHeight = (data.value / maxValue) * 250;
          const x = (index / (revenueData.length - 1)) * 1150 + 25;
          return (
            <g key={data.month}>
              <rect x={x - 20} y={300 - barHeight} width={40} height={barHeight} className="fill-blue-500 opacity-75" />
              {data.month === highlightMonth && (
                <circle cx={x} cy={300 - barHeight - 10} r="6" className="fill-yellow-400" />
              )}
              <text x={x} y="300" dy="15" textAnchor="middle" className="fill-gray-400 text-xs">
                {data.month}
              </text>
            </g>
          );
        })}
      </svg>
    );
  };
  const [activeTab, setActiveTab] = useState("Monthly");

  return (
    <div className="rounded-lg bg-gray-900 p-6 shadow-lg">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white">Revenue Stream Summary</h2>
        <div className="flex space-x-2">
          {["Monthly", "Weekly", "Monthly"].map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(tab)}
              className={`rounded-md px-4 py-2 text-sm transition-colors ${
                activeTab === tab ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      <p className="mb-4 text-sm text-gray-400">Revealing risks and growth in investments</p>
      <RevenueChart />
    </div>
  );
}
