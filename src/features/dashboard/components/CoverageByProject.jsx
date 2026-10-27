import {
  FolderKanban,
  CheckCircle2,
  AlertTriangle,
  XCircle,
} from "lucide-react";

import useAnalysisStore from "../../../store/analysisStore";

export default function CoverageByProject() {
  const results = useAnalysisStore((state) => state.results);

  if (!results.length) {
    return (
      <div className="rounded-3xl border border-slate-100 bg-white p-4 sm:p-6 xl:p-8 shadow-lg shadow-slate-200/50">
        <h3 className="font-bold text-slate-900 text-lg">
          Couverture par projet
        </h3>

        <p className="mt-4 text-slate-500">
          Aucune analyse disponible pour le moment.
        </p>
      </div>
    );
  }

  const getStatus = (coverage) => {
    if (coverage >= 90) {
      return {
        label: "Excellent",
        color: "text-green-600",
        bg: "bg-green-50",
        icon: CheckCircle2,
        progress: "from-green-500 via-emerald-500 to-green-600",
      };
    }

    if (coverage >= 70) {
      return {
        label: "À surveiller",
        color: "text-amber-600",
        bg: "bg-amber-50",
        icon: AlertTriangle,
        progress: "from-amber-400 via-amber-500 to-orange-500",
      };
    }

    return {
      label: "Critique",
      color: "text-red-600",
      bg: "bg-red-50",
      icon: XCircle,
      progress: "from-red-500 via-red-500 to-rose-600",
    };
  };

  return (
    <div
      className="
        rounded-3xl
        border
        border-slate-100
        bg-white
        p-6
        shadow-lg
        shadow-slate-200/50
      ">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold">
            Analyse détaillée
          </p>

          <h3 className="mt-1 text-xl font-bold text-slate-900">
            Couverture par projet
          </h3>
        </div>

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50">
          <FolderKanban size={28} className="text-blue-600" />
        </div>
      </div>

      {/* PROJECTS */}
      <div className="space-y-6">
        {results.map((project) => {
          const status = getStatus(project.coverage);
          const StatusIcon = status.icon;

          return (
            <div
              key={project.id}
              className="
                rounded-2xl
                border
                border-slate-100
                p-5
                transition-all
                duration-300
                hover:shadow-md
                hover:border-slate-200
              ">
              {/* TOP */}
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-semibold text-slate-900">
                    {project.project}
                  </h4>

                  <div
                    className={`
                      mt-2
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      px-3
                      py-1
                      text-xs
                      font-semibold
                      ${status.bg}
                      ${status.color}
                    `}>
                    <StatusIcon size={14} />
                    {status.label}
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-3xl font-extrabold text-slate-900">
                    {project.coverage}%
                  </p>

                  <p className="text-xs text-slate-400">Couverture</p>
                </div>
              </div>

              {/* PROGRESS BAR */}
              <div className="mt-5">
                <div className="h-3 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className={`
                      h-full
                      rounded-full
                      bg-gradient-to-r
                      ${status.progress}
                      transition-all
                      duration-1000
                      shadow-lg
                    `}
                    style={{
                      width: `${project.coverage}%`,
                    }}
                  />
                </div>
              </div>

              {/* STATS */}
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 border-t border-slate-100 pt-4">
                <div>
                  <p className="text-xs text-slate-400">Correspondances</p>

                  <p className="font-bold text-green-600">
                    {project.foundCount}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-400">Introuvables</p>

                  <p className="font-bold text-red-500">
                    {project.missingCount}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-400">Performance</p>

                  <p className={`font-bold ${status.color}`}>{status.label}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
