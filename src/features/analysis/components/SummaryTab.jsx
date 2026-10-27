import {
  FolderKanban,
  Building2,
  CalendarDays,
  Users,
  CheckCircle2,
  AlertTriangle,
  Percent,
} from "lucide-react";

export default function SummaryTab({ project }) {
  const stats = [
    {
      label: "Projet",
      value: project.project,
      icon: FolderKanban,
      color: "text-blue-600",
      bg: "bg-blue-50",
    },

    {
      label: "Société",
      value: project.company,
      icon: Building2,
      color: "text-violet-600",
      bg: "bg-violet-50",
    },

    {
      label: "Période",
      value: project.payrollDate,
      icon: CalendarDays,
      color: "text-amber-600",
      bg: "bg-amber-50",
    },

    {
      label: "Agents",
      value: project.total,
      icon: Users,
      color: "text-slate-700",
      bg: "bg-slate-100",
    },

    {
      label: "Trouvés",
      value: project.foundCount,
      icon: CheckCircle2,
      color: "text-green-600",
      bg: "bg-green-50",
    },

    {
      label: "Introuvables",
      value: project.missingCount,
      icon: AlertTriangle,
      color: "text-red-600",
      bg: "bg-red-50",
    },
  ];

  return (
    <div className="space-y-6">
      {/* COVERAGE HERO */}
      <div
        className="
          rounded-3xl
          bg-gradient-to-r
          from-blue-600
          via-blue-700
          to-indigo-700
          p-6
          text-white
          shadow-xl
        ">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-blue-100 text-sm">Taux de couverture</p>

            <h2 className="mt-2 text-5xl font-extrabold">
              {project.coverage}%
            </h2>

            <p className="mt-2 text-blue-100">Niveau de correspondance CNSS</p>
          </div>

          <div
            className="
              flex
              h-20
              w-20
              items-center
              justify-center
              rounded-3xl
              bg-white/10
              backdrop-blur-sm
            ">
            <Percent size={38} />
          </div>
        </div>

        <div className="mt-6 h-3 overflow-hidden rounded-full bg-white/20">
          <div
            className="h-full rounded-full bg-white transition-all duration-1000"
            style={{
              width: `${project.coverage}%`,
            }}
          />
        </div>
      </div>

      {/* DETAILS */}
      <div className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-2 gap-4">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="
                rounded-2xl
                border
                border-slate-100
                bg-white
                p-5
                shadow-sm
                transition-all
                duration-300
                hover:shadow-md
              ">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-2xl
                      ${item.bg}
                    `}>
                    <Icon size={22} className={item.color} />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">{item.label}</p>

                    <p className="font-semibold text-slate-900">{item.value}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
