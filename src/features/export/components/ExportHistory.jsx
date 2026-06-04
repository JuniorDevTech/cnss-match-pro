import {
  History,
  FileSpreadsheet,
  CalendarDays,
  Building2,
  Download,
} from "lucide-react";

import useExportStore from "../../../store/exportStore";

export default function ExportHistory() {
  const history = useExportStore((state) => state.history);

  if (!history.length) {
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
          <History size={36} className="text-slate-500" />
        </div>

        <h3 className="mt-5 text-xl font-bold text-slate-900">
          Aucun export enregistré
        </h3>

        <p className="mt-2 text-slate-500">
          Les rapports générés apparaîtront ici automatiquement.
        </p>
      </div>
    );
  }

  return (
    <div
      className="
        overflow-hidden
        rounded-3xl
        border
        border-slate-100
        bg-white
        shadow-lg
        shadow-slate-200/40
      ">
      {/* HEADER */}
      <div className="border-b border-slate-100 p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
              Traçabilité
            </p>

            <h2 className="mt-1 text-2xl font-bold text-slate-900">
              Historique des exports
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Suivi des rapports générés et téléchargés.
            </p>
          </div>

          <div
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              bg-blue-50
            ">
            <History size={28} className="text-blue-600" />
          </div>
        </div>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[750px]">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                Date
              </th>

              <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                Projet
              </th>

              <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                Société
              </th>

              <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                Statut
              </th>
            </tr>
          </thead>

          <tbody>
            {history.map((item) => (
              <tr
                key={item.id}
                className="
                  border-t
                  border-slate-100
                  transition
                  hover:bg-slate-50
                ">
                {/* DATE */}
                <td className="px-6 py-5">
                  <div className="flex items-center gap-2">
                    <CalendarDays size={16} className="text-slate-400" />

                    <span className="text-slate-700">{item.date}</span>
                  </div>
                </td>

                {/* PROJET */}
                <td className="px-6 py-5">
                  <div className="flex items-center gap-3">
                    <div
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-xl
                        bg-blue-50
                      ">
                      <FileSpreadsheet size={18} className="text-blue-600" />
                    </div>

                    <div>
                      <p className="font-semibold text-slate-900">
                        {item.project}
                      </p>

                      <p className="text-xs text-slate-400">Rapport CNSS</p>
                    </div>
                  </div>
                </td>

                {/* SOCIETE */}
                <td className="px-6 py-5">
                  <div className="flex items-center gap-2">
                    <Building2 size={16} className="text-slate-400" />

                    <span className="text-slate-700">{item.company}</span>
                  </div>
                </td>

                {/* STATUS */}
                <td className="px-6 py-5">
                  <span
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      bg-green-50
                      px-3
                      py-1.5
                      text-xs
                      font-semibold
                      text-green-700
                    ">
                    <Download size={12} />
                    Exporté
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* FOOTER */}
      <div
        className="
          flex
          items-center
          justify-between
          border-t
          border-slate-100
          bg-slate-50
          px-6
          py-4
        ">
        <span className="text-sm text-slate-500">
          {history.length} export
          {history.length > 1 ? "s" : ""}
          enregistré
          {history.length > 1 ? "s" : ""}
        </span>

        <span className="text-sm text-slate-400">
          Historique conservé automatiquement
        </span>
      </div>
    </div>
  );
}
