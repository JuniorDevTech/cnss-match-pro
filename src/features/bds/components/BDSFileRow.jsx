import {
  Trash2,
  FileSpreadsheet,
  Building2,
  CalendarDays,
  Users,
  CheckCircle2,
} from "lucide-react";

import useBDSStore from "../../../store/bdsStore";

export default function BDSFileRow({ file }) {
  const removeFile = useBDSStore((state) => state.removeFile);

  return (
    <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors duration-200">
      {/* FICHIER */}
      <td className="py-5 px-4">
        <div className="flex items-center gap-3">
          <div
            className="
              h-11
              w-11
              rounded-2xl
              bg-blue-50
              flex
              items-center
              justify-center
            ">
            <FileSpreadsheet size={22} className="text-blue-600" />
          </div>

          <div>
            <p className="font-semibold text-slate-900">{file.name}</p>

            <p className="text-xs text-slate-400">Fichier BDS importé</p>
          </div>
        </div>
      </td>

      {/* SOCIETE */}
      <td className="px-4">
        <div className="flex items-center gap-2">
          <Building2 size={16} className="text-slate-400" />

          {file.company === "À renseigner" ? (
            <span className="px-2 py-1 text-xs rounded-full bg-amber-100 text-amber-700">
              Société non détectée
            </span>
          ) : (
            <span className="font-medium text-slate-700">{file.company}</span>
          )}
        </div>
      </td>

      {/* PERIODE */}
      <td className="px-4">
        <div className="flex items-center gap-2">
          <CalendarDays size={16} className="text-slate-400" />

          <span className="text-slate-700">{file.period}</span>
        </div>
      </td>

      {/* EMPLOYES */}
      <td className="px-4">
        <div className="flex items-center gap-2">
          <Users size={16} className="text-slate-400" />

          <span className="font-semibold text-slate-900">{file.employees}</span>
        </div>
      </td>

      {/* STATUT */}
      <td className="px-4">
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
          <CheckCircle2 size={14} />
          Prêt à analyser
        </span>
      </td>

      {/* ACTION */}
      <td className="px-4">
        <button
          onClick={() => removeFile(file.id)}
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            border
            border-red-100
            bg-red-50
            text-red-600
            transition-all
            duration-200
            hover:bg-red-600
            hover:text-white
            hover:border-red-600
          ">
          <Trash2 size={18} />
        </button>
      </td>
    </tr>
  );
}
