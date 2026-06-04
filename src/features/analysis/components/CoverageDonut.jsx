import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export default function CoverageDonut({ coverage }) {
  const data = [
    {
      name: "Couvert",
      value: coverage,
    },
    {
      name: "Reste",
      value: 100 - coverage,
    },
  ];

  const status =
    coverage >= 90
      ? {
          label: "Excellent",
          color: "#16a34a",
          bg: "bg-green-50",
          text: "text-green-700",
        }
      : coverage >= 70
        ? {
            label: "Conforme",
            color: "#f59e0b",
            bg: "bg-amber-50",
            text: "text-amber-700",
          }
        : {
            label: "Critique",
            color: "#dc2626",
            bg: "bg-red-50",
            text: "text-red-700",
          };

  return (
    <div className="relative flex flex-col items-center">
      {/* Donut */}
      <div className="relative h-36 w-36">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              startAngle={90}
              endAngle={-270}
              innerRadius={45}
              outerRadius={58}
              stroke="none">
              <Cell fill={status.color} />
              <Cell fill="#e5e7eb" />
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        {/* Center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-20 w-20 flex-col items-center justify-center rounded-full bg-white shadow-lg">
            <span className="text-2xl font-extrabold">{coverage}</span>

            <span className="text-xs text-slate-500">%</span>
          </div>
        </div>
      </div>

      {/* Status */}
      <div
        className={`
          mt-2
          inline-flex
          items-center
          rounded-full
          px-3
          py-1
          text-xs
          font-semibold
          ${status.bg}
          ${status.text}
        `}>
        {status.label}
      </div>
    </div>
  );
}
