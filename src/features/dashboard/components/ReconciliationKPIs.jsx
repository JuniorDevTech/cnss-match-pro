import {
  Users,
  CheckCircle2,
  AlertTriangle,
  Percent,
  TrendingUp,
} from "lucide-react";

import useDashboardStats from "../../../shared/hooks/useDashboardStats";

export default function ReconciliationKPIs() {
  const { totalEmployees, totalFound, totalMissing, coverage } =
    useDashboardStats();

  const stats = [
    {
      title: "Agents Vérifiés",
      value: totalEmployees,
      subtitle: "Effectif analysé",
      icon: Users,
      bg: "bg-blue-50",
      iconColor: "text-blue-600",
      badge: "bg-blue-100 text-blue-700",
      glow: "bg-blue-500/10",
    },

    {
      title: "Déclarés CNSS",
      value: totalFound,
      subtitle: "Correspondances trouvées",
      icon: CheckCircle2,
      bg: "bg-green-50",
      iconColor: "text-green-600",
      badge: "bg-green-100 text-green-700",
      glow: "bg-green-500/10",
    },

    {
      title: "Introuvables",
      value: totalMissing,
      subtitle: "À régulariser",
      icon: AlertTriangle,
      bg: "bg-red-50",
      iconColor: "text-red-600",
      badge: "bg-red-100 text-red-700",
      glow: "bg-red-500/10",
    },

    {
      title: "Couverture",
      value: `${coverage}%`,
      subtitle: "Performance globale",
      icon: Percent,
      bg: "bg-amber-50",
      iconColor: "text-amber-600",
      badge: "bg-amber-100 text-amber-700",
      glow: "bg-amber-500/10",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-6">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
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
            {/* Glow Effect */}
            <div
              className={`
                absolute
                -right-10
                -top-10
                h-32
                w-32
                rounded-full
                blur-3xl
                ${item.glow}
              `}
            />

            <div className="relative">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div
                  className={`
                    h-14
                    w-14
                    rounded-2xl
                    flex
                    items-center
                    justify-center
                    ${item.bg}
                  `}>
                  <Icon size={28} className={item.iconColor} />
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
                    ${item.badge}
                  `}>
                  <TrendingUp size={12} />
                  Temps réel
                </div>
              </div>

              {/* Content */}
              <div className="mt-6">
                <p className="text-sm font-medium text-slate-500">
                  {item.title}
                </p>

                <h2 className="mt-2 text-4xl font-extrabold text-slate-900">
                  {item.value}
                </h2>

                <p className="mt-2 text-sm text-slate-400">{item.subtitle}</p>
              </div>

              {/* Mini Progress Line */}
              <div className="mt-5 h-1.5 rounded-full bg-slate-100 overflow-hidden">
                <div
                  className={`
                    h-full rounded-full
                    ${
                      item.iconColor.includes("blue")
                        ? "bg-blue-500"
                        : item.iconColor.includes("green")
                          ? "bg-green-500"
                          : item.iconColor.includes("red")
                            ? "bg-red-500"
                            : "bg-amber-500"
                    }
                  `}
                  style={{
                    width:
                      item.title === "Couverture" ? `${coverage}%` : "100%",
                  }}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
