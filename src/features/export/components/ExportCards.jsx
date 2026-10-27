import {
  Download,
  Building2,
  CheckCircle2,
  AlertTriangle,
  FileSpreadsheet,
  TrendingUp,
} from "lucide-react";

import useAnalysisStore from "../../../store/analysisStore";
import useExport from "../../../shared/hooks/useExport";

export default function ExportCards() {
  const results = useAnalysisStore((state) => state.results);

  const { exportProject } = useExport();

  if (!results.length) {
    return (
      <div
        className="
          rounded-3xl
          border
          border-slate-100
          bg-white
          p-12
          text-center
          shadow-lg
          shadow-slate-200/40
        ">
        <div
          className="
            mx-auto
            flex
            h-20
            w-20
            items-center
            justify-center
            rounded-3xl
            bg-slate-100
          ">
          <FileSpreadsheet size={36} className="text-slate-500" />
        </div>

        <h3 className="mt-5 text-xl font-bold text-slate-900">
          Aucun rapport disponible
        </h3>

        <p className="mt-2 text-slate-500">
          Lancez une analyse afin de générer des fichiers exportables.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 xl:grid-cols-1 sm:grid-cols-2 gap-6">
      {results.map((project) => {
        const status =
          project.coverage >= 90
            ? {
                label: "Excellent",
                bg: "bg-green-50",
                color: "text-green-700",
              }
            : project.coverage >= 70
              ? {
                  label: "Conforme",
                  bg: "bg-amber-50",
                  color: "text-amber-700",
                }
              : {
                  label: "Critique",
                  bg: "bg-red-50",
                  color: "text-red-700",
                };

        return (
          <div
            key={project.id}
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
              className="
                absolute
                -right-10
                -top-10
                h-32
                w-32
                rounded-full
                bg-green-500/10
                blur-3xl
              "
            />

            <div className="relative">
              {/* HEADER */}
              <div className="flex items-start justify-between">
                <div>
                  <div
                    className={`
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
                    <TrendingUp size={12} />
                    {status.label}
                  </div>

                  <h3 className="mt-3 text-xl font-bold text-slate-900">
                    {project.project}
                  </h3>

                  <div className="mt-2 flex items-center gap-2 text-slate-500">
                    <Building2 size={15} />
                    {project.company}
                  </div>
                </div>

                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-green-50
                  ">
                  <FileSpreadsheet size={28} className="text-green-600" />
                </div>
              </div>

              {/* COVERAGE */}
              <div className="mt-6">
                <div className="mb-2 flex justify-between">
                  <span className="text-sm text-slate-500">Couverture</span>

                  <span className="font-bold text-slate-900">
                    {project.coverage}%
                  </span>
                </div>

                <div className="h-3 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="
                      h-full
                      rounded-full
                      bg-gradient-to-r
                      from-green-500
                      via-emerald-500
                      to-green-600
                    "
                    style={{
                      width: `${project.coverage}%`,
                    }}
                  />
                </div>
              </div>

              {/* KPI */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div
                  className="
                    rounded-2xl
                    border
                    border-green-100
                    bg-green-50
                    p-4
                  ">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-green-600" />

                    <span className="text-sm text-green-700">Trouvés</span>
                  </div>

                  <p className="mt-2 text-2xl font-bold text-green-700">
                    {project.foundCount}
                  </p>
                </div>

                <div
                  className="
                    rounded-2xl
                    border
                    border-red-100
                    bg-red-50
                    p-4
                  ">
                  <div className="flex items-center gap-2">
                    <AlertTriangle size={16} className="text-red-600" />

                    <span className="text-sm text-red-700">Introuvables</span>
                  </div>

                  <p className="mt-2 text-2xl font-bold text-red-700">
                    {project.missingCount}
                  </p>
                </div>
              </div>

              {/* ACTION */}
              <button
                onClick={() => exportProject(project)}
                className="
                  mt-6
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-2xl
                  bg-gradient-to-r
                  from-green-600
                  to-emerald-600
                  px-4
                  py-4
                  font-semibold
                  text-white
                  shadow-lg
                  shadow-green-600/20
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                ">
                <Download size={20} />
                Exporter le rapport Excel
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
