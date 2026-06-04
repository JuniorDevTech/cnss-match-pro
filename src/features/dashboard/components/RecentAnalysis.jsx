import {
  Activity,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Building2,
} from "lucide-react";

import useAnalysisStore from "../../../store/analysisStore";

export default function RecentAnalysis() {
  const results = useAnalysisStore((state) => state.results);

  const getStatus = (coverage) => {
    if (coverage >= 90) {
      return {
        label: "Excellent",
        color: "text-green-600",
        bg: "bg-green-50",
        icon: CheckCircle2,
      };
    }

    if (coverage >= 70) {
      return {
        label: "À surveiller",
        color: "text-amber-600",
        bg: "bg-amber-50",
        icon: AlertTriangle,
      };
    }

    return {
      label: "Critique",
      color: "text-red-600",
      bg: "bg-red-50",
      icon: XCircle,
    };
  };

  if (!results.length) {
    return (
      <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-lg shadow-slate-200/50">
        <h3 className="text-lg font-bold text-slate-900">Analyses récentes</h3>

        <p className="mt-4 text-slate-500">Aucune analyse disponible.</p>
      </div>
    );
  }

  return (
    <div
      className="
        rounded-3xl
        border
        border-slate-100
        bg-white
        shadow-lg
        shadow-slate-200/40
        overflow-hidden
      ">
      {/* HEADER */}
      <div className="flex items-center justify-between border-b border-slate-100 p-6">
        <div>
          <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold">
            Activité récente
          </p>

          <h3 className="mt-1 text-xl font-bold text-slate-900">
            Dernières analyses effectuées
          </h3>
        </div>

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50">
          <Activity size={28} className="text-blue-600" />
        </div>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[850px]">
          <thead>
            <tr className="bg-slate-50">
              <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                Projet
              </th>

              <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                Société
              </th>

              <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                Période
              </th>

              <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                Statut
              </th>

              <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                Couverture
              </th>
            </tr>
          </thead>

          <tbody>
            {results.map((item) => {
              const status = getStatus(item.coverage);
              const StatusIcon = status.icon;

              return (
                <tr
                  key={item.id}
                  className="
                    border-t
                    border-slate-100
                    transition-all
                    duration-200
                    hover:bg-slate-50
                  ">
                  {/* PROJET */}
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div
                        className="
                          h-10
                          w-10
                          rounded-xl
                          bg-blue-50
                          flex
                          items-center
                          justify-center
                        ">
                        <Activity size={18} className="text-blue-600" />
                      </div>

                      <div>
                        <p className="font-semibold text-slate-900">
                          {item.project}
                        </p>

                        <p className="text-xs text-slate-400">Analyse CNSS</p>
                      </div>
                    </div>
                  </td>

                  {/* SOCIETE */}
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2">
                      <Building2 size={16} className="text-slate-400" />

                      <span className="font-medium text-slate-700">
                        {item.company}
                      </span>
                    </div>
                  </td>

                  {/* DATE */}
                  <td className="px-6 py-5 text-slate-600">
                    {item.payrollDate}
                  </td>

                  {/* STATUT */}
                  <td className="px-6 py-5">
                    <span
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
                      <StatusIcon size={14} />
                      {status.label}
                    </span>
                  </td>

                  {/* COUVERTURE */}
                  <td className="px-6 py-5 min-w-[220px]">
                    <div className="flex items-center gap-4">
                      <div className="flex-1">
                        <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                          <div
                            className={`
                              h-full
                              rounded-full
                              ${
                                item.coverage >= 90
                                  ? "bg-green-500"
                                  : item.coverage >= 70
                                    ? "bg-amber-500"
                                    : "bg-red-500"
                              }
                            `}
                            style={{
                              width: `${item.coverage}%`,
                            }}
                          />
                        </div>
                      </div>

                      <span
                        className={`
                          font-bold
                          ${
                            item.coverage >= 90
                              ? "text-green-600"
                              : item.coverage >= 70
                                ? "text-amber-600"
                                : "text-red-600"
                          }
                        `}>
                        {item.coverage}%
                      </span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
