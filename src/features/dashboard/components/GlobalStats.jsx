import {
  FolderKanban,
  FileSpreadsheet,
  Building2,
  Download,
  TrendingUp,
} from "lucide-react";

import useDashboardStats from "../../../shared/hooks/useDashboardStats";

export default function GlobalStats() {
  const { projects, filesCount, companies, exportsCount } = useDashboardStats();

  const stats = [
    {
      label: "Projets Actifs",
      value: projects,
      icon: FolderKanban,
      color: "blue",
      description: "Analyses en cours",
    },
    {
      label: "Fichiers BDS",
      value: filesCount,
      icon: FileSpreadsheet,
      color: "emerald",
      description: "Documents importés",
    },
    {
      label: "Sociétés",
      value: companies,
      icon: Building2,
      color: "violet",
      description: "Entreprises suivies",
    },
    {
      label: "Exports",
      value: exportsCount,
      icon: Download,
      color: "amber",
      description: "Rapports générés",
    },
  ];

  const colorClasses = {
    blue: {
      bg: "bg-blue-50",
      icon: "text-blue-600",
      badge: "bg-blue-100 text-blue-700",
      glow: "bg-blue-400/20",
    },
    emerald: {
      bg: "bg-emerald-50",
      icon: "text-emerald-600",
      badge: "bg-emerald-100 text-emerald-700",
      glow: "bg-emerald-400/20",
    },
    violet: {
      bg: "bg-violet-50",
      icon: "text-violet-600",
      badge: "bg-violet-100 text-violet-700",
      glow: "bg-violet-400/20",
    },
    amber: {
      bg: "bg-amber-50",
      icon: "text-amber-600",
      badge: "bg-amber-100 text-amber-700",
      glow: "bg-amber-400/20",
    },
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
      {stats.map((item) => {
        const Icon = item.icon;
        const colors = colorClasses[item.color];

        return (
          <div
            key={item.label}
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
                ${colors.glow}
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
                    ${colors.bg}
                  `}>
                  <Icon size={28} className={colors.icon} />
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
                    ${colors.badge}
                  `}>
                  <TrendingUp size={12} />
                  Actif
                </div>
              </div>

              {/* Content */}
              <div className="mt-6">
                <p className="text-sm font-medium text-slate-500">
                  {item.label}
                </p>

                <h2 className="mt-2 text-4xl font-extrabold text-slate-900">
                  {item.value}
                </h2>

                <p className="mt-2 text-sm text-slate-400">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
