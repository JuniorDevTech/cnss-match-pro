export default function StatCard({ title, value, color }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h3 className="text-slate-500 text-sm">{title}</h3>

      <p className={`text-3xl font-bold mt-2 ${color}`}>{value}</p>
    </div>
  );
}
