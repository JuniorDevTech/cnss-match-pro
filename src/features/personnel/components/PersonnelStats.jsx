import { Users, FolderKanban, Building2, TrendingUp } from "lucide-react";

import usePersonnelStore from "../../../store/personnelStore";

export default function PersonnelStats() {
  const personnel = usePersonnelStore((state) => state.personnel);

  const totalEmployees = personnel.length;

  const projects = new Set(personnel.map((p) => p.project)).size;

  const companies = new Set(personnel.map((p) => p.company)).size;

  const stats = [
    {
      title: "Agents",
      value: totalEmployees.toLocaleString(),
      subtitle: "Personnel analysé",
      icon: Users,
      bg: "bg-blue-50",
      iconColor: "text-blue-600",
      badge: "bg-blue-100 text-blue-700",
      glow: "bg-blue-500/10",
    },

    {
      title: "Projets",
      value: projects,
      subtitle: "Chantiers suivis",
      icon: FolderKanban,
      bg: "bg-violet-50",
      iconColor: "text-violet-600",
      badge: "bg-violet-100 text-violet-700",
      glow: "bg-violet-500/10",
    },

    {
      title: "Sociétés",
      value: companies,
      subtitle: "Entreprises concernées",
      icon: Building2,
      bg: "bg-emerald-50",
      iconColor: "text-emerald-600",
      badge: "bg-emerald-100 text-emerald-700",
      glow: "bg-emerald-500/10",
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
          -top-10
          -right-10
          h-32
          w-32
          rounded-full
          blur-3xl
          ${glow}
        `}
      />

      <div className="relative">
        {/* HEADER */}
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
            Actif
          </div>
        </div>

        {/* CONTENT */}
        <div className="mt-6">
          <p className="text-sm font-medium text-slate-500">{title}</p>

          <h2 className="mt-2 text-4xl font-extrabold text-slate-900">
            {value}
          </h2>

          <p className="mt-2 text-sm text-slate-400">{subtitle}</p>
        </div>

        {/* DECORATIVE LINE */}
        <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-slate-100">
          <div
            className={`
              h-full
              rounded-full
              ${
                iconColor.includes("blue")
                  ? "bg-blue-500"
                  : iconColor.includes("violet")
                    ? "bg-violet-500"
                    : "bg-emerald-500"
              }
            `}
            style={{ width: "100%" }}
          />
        </div>
      </div>
    </div>
  );
}
