import {
  FileSpreadsheet,
  Users,
  Building2,
  CalendarRange,
  TrendingUp,
} from "lucide-react";

import useBDSStore from "../../../store/bdsStore";

export default function BDSStats() {
  const files = useBDSStore((state) => state.files);

  const totalFiles = files.length;

  const totalEmployees = files.reduce((sum, file) => sum + file.employees, 0);

  const companies = new Set(files.map((file) => file.company)).size;

  const periods = new Set(files.map((file) => file.period)).size;

  const stats = [
    {
      title: "Fichiers BDS",
      value: totalFiles,
      subtitle: "Documents importés",
      icon: FileSpreadsheet,
      bg: "bg-blue-50",
      iconColor: "text-blue-600",
      badge: "bg-blue-100 text-blue-700",
      glow: "bg-blue-500/10",
    },

    {
      title: "Agents détectés",
      value: totalEmployees.toLocaleString(),
      subtitle: "Effectif analysé",
      icon: Users,
      bg: "bg-green-50",
      iconColor: "text-green-600",
      badge: "bg-green-100 text-green-700",
      glow: "bg-green-500/10",
    },

    {
      title: "Sociétés",
      value: companies,
      subtitle: "Entreprises suivies",
      icon: Building2,
      bg: "bg-violet-50",
      iconColor: "text-violet-600",
      badge: "bg-violet-100 text-violet-700",
      glow: "bg-violet-500/10",
    },

    {
      title: "Périodes",
      value: periods,
      subtitle: "Cycles de paie",
      icon: CalendarRange,
      bg: "bg-amber-50",
      iconColor: "text-amber-600",
      badge: "bg-amber-100 text-amber-700",
      glow: "bg-amber-500/10",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 sm:grid-cols-2 2xl:grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
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
                -top-10
                -right-10
                h-32
                w-32
                rounded-full
                blur-3xl
                ${stat.glow}
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
                    ${stat.bg}
                  `}>
                  <Icon size={28} className={stat.iconColor} />
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
                    ${stat.badge}
                  `}>
                  <TrendingUp size={12} />
                  Actif
                </div>
              </div>

              {/* Content */}
              <div className="mt-6">
                <p className="text-sm font-medium text-slate-500">
                  {stat.title}
                </p>

                <h2 className="mt-2 text-4xl font-extrabold text-slate-900">
                  {stat.value}
                </h2>

                <p className="mt-2 text-sm text-slate-400">{stat.subtitle}</p>
              </div>

              {/* Decorative line */}
              <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-slate-100">
                <div
                  className={`
                    h-full
                    rounded-full
                    ${
                      stat.iconColor.includes("blue")
                        ? "bg-blue-500"
                        : stat.iconColor.includes("green")
                          ? "bg-green-500"
                          : stat.iconColor.includes("violet")
                            ? "bg-violet-500"
                            : "bg-amber-500"
                    }
                  `}
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
