import {
  FolderKanban,
  CheckCircle2,
  AlertTriangle,
  TrendingUp,
} from "lucide-react";

import useAnalysisStore from "../../../store/analysisStore";

export default function AnalysisSummary() {
  const results = useAnalysisStore((state) => state.results);

  const totalProjects = results.length;

  const totalFound = results.reduce((sum, r) => sum + r.foundCount, 0);

  const totalMissing = results.reduce((sum, r) => sum + r.missingCount, 0);

  const stats = [
    {
      title: "Projets Analysés",
      value: totalProjects,
      subtitle: "Analyses réalisées",
      icon: FolderKanban,
      bg: "bg-blue-50",
      iconColor: "text-blue-600",
      badge: "bg-blue-100 text-blue-700",
      glow: "bg-blue-500/10",
    },

    {
      title: "Agents Déclarés",
      value: totalFound.toLocaleString(),
      subtitle: "Correspondances CNSS",
      icon: CheckCircle2,
      bg: "bg-green-50",
      iconColor: "text-green-600",
      badge: "bg-green-100 text-green-700",
      glow: "bg-green-500/10",
    },

    {
      title: "Introuvables",
      value: totalMissing.toLocaleString(),
      subtitle: "Cas à régulariser",
      icon: AlertTriangle,
      bg: "bg-red-50",
      iconColor: "text-red-600",
      badge: "bg-red-100 text-red-700",
      glow: "bg-red-500/10",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
      {stats.map((stat) => (
        <StatCard key={stat.title} {...stat} />
      ))}
    </div>
  );
}

function StatCard({
  title,
  value,
  subtitle,
  icon: Icon,
  bg,
  iconColor,
  badge,
  glow,
}) {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-slate-100
        bg-white
        p-6
        shadow-lg
        shadow-slate-200/40
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
      ">
      {/* Glow */}
      <div
        className={`
          absolute
          -right-10
          -top-10
          h-32
          w-32
          rounded-full
          blur-3xl
          ${glow}
        `}
      />

      <div className="relative">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div
            className={`
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              ${bg}
            `}>
            <Icon size={28} className={iconColor} />
          </div>

          <div
            className={`
              flex
              items-center
              gap-1
              rounded-full
              px-3
              py-1
              text-xs
              font-semibold
              ${badge}
            `}>
            <TrendingUp size={12} />
            Temps réel
          </div>
        </div>

        {/* Content */}
        <div className="mt-6">
          <p className="text-sm font-medium text-slate-500">{title}</p>

          <h2 className="mt-2 text-4xl font-extrabold text-slate-900">
            {value}
          </h2>

          <p className="mt-2 text-sm text-slate-400">{subtitle}</p>
        </div>

        {/* Decorative line */}
        <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-slate-100">
          <div
            className={`
              h-full
              rounded-full
              ${
                iconColor.includes("blue")
                  ? "bg-blue-500"
                  : iconColor.includes("green")
                    ? "bg-green-500"
                    : "bg-red-500"
              }
            `}
            style={{ width: "100%" }}
          />
        </div>
      </div>
    </div>
  );
}
