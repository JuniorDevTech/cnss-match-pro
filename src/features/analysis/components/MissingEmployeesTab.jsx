import { AlertTriangle, FolderKanban, BadgeX } from "lucide-react";

export default function MissingEmployeesTab({ employees }) {
  if (!employees?.length) {
    return (
      <div
        className="
          rounded-3xl
          border
          border-green-100
          bg-green-50
          p-10
          text-center
        ">
        <div
          className="
            mx-auto
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-2xl
            bg-green-100
          ">
          <BadgeX size={30} className="text-green-600" />
        </div>

        <h3 className="mt-4 text-xl font-bold text-slate-900">
          Aucun agent introuvable
        </h3>

        <p className="mt-2 text-slate-500">
          Tous les agents ont été retrouvés dans les données CNSS.
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
        border-red-100
        bg-white
      ">
      {/* HEADER */}
      <div className="border-b border-red-100 bg-red-50 p-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-red-500">
              Anomalies détectées
            </p>

            <h3 className="mt-1 text-xl font-bold text-slate-900">
              Agents introuvables
            </h3>
          </div>

          <div
            className="
              flex
              items-center
              gap-2
              rounded-full
              bg-red-100
              px-4
              py-2
              text-sm
              font-semibold
              text-red-700
            ">
            <AlertTriangle size={16} />
            {employees.length} anomalie
            {employees.length > 1 ? "s" : ""}
          </div>
        </div>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[700px]">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                CNSS
              </th>

              <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                Agent
              </th>

              <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                Projet
              </th>

              <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                Statut
              </th>
            </tr>
          </thead>

          <tbody>
            {employees.map((employee, index) => (
              <tr
                key={index}
                className="
                  border-t
                  border-slate-100
                  hover:bg-red-50/30
                  transition
                ">
                {/* CNSS */}
                <td className="px-6 py-5">
                  <span className="font-semibold text-slate-900">
                    {employee.cnss}
                  </span>
                </td>

                {/* NOM */}
                <td className="px-6 py-5">
                  <div className="flex items-center gap-3">
                    <div
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        bg-red-100
                        font-semibold
                        text-red-700
                      ">
                      {employee.name?.charAt(0)?.toUpperCase()}
                    </div>

                    <div>
                      <p className="font-semibold text-slate-900">
                        {employee.name}
                      </p>

                      <p className="text-xs text-slate-400">
                        Agent non déclaré
                      </p>
                    </div>
                  </div>
                </td>

                {/* PROJET */}
                <td className="px-6 py-5">
                  <div className="flex items-center gap-2">
                    <FolderKanban size={16} className="text-violet-500" />

                    <span className="text-slate-700">{employee.project}</span>
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
                      bg-red-50
                      px-3
                      py-1.5
                      text-xs
                      font-semibold
                      text-red-700
                    ">
                    <AlertTriangle size={13} />
                    Introuvable
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
