import {
  Building2,
  FolderKanban,
  CalendarDays,
  BadgeCheck,
} from "lucide-react";

export default function PersonnelRow({ employee }) {
  return (
    <tr
      className="
        border-b
        border-slate-100
        transition-all
        duration-200
        hover:bg-slate-50
      ">
      {/* CNSS */}
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
            <BadgeCheck size={18} className="text-blue-600" />
          </div>

          <div>
            <p className="font-semibold text-slate-900">{employee.cnss}</p>

            <p className="text-xs text-slate-400">Numéro CNSS</p>
          </div>
        </div>
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
              bg-slate-100
              font-semibold
              text-slate-700
            ">
            {employee.name?.charAt(0)?.toUpperCase()}
          </div>

          <div>
            <p className="font-semibold text-slate-900">{employee.name}</p>

            <p className="text-xs text-slate-400">Agent déclaré</p>
          </div>
        </div>
      </td>

      {/* PROJET */}
      <td className="px-6 py-5">
        <div className="flex items-center gap-2">
          <FolderKanban size={16} className="text-violet-500" />

          <span className="font-medium text-slate-700">{employee.project}</span>
        </div>
      </td>

      {/* SOCIETE */}
      <td className="px-6 py-5">
        <div className="flex items-center gap-2">
          <Building2 size={16} className="text-slate-400" />

          <span className="text-slate-700">{employee.company}</span>
        </div>
      </td>

      {/* PERIODE */}
      <td className="px-6 py-5">
        <div className="flex items-center gap-2">
          <CalendarDays size={16} className="text-slate-400" />

          <span className="text-slate-600">{employee.payrollDate}</span>
        </div>
      </td>
    </tr>
  );
}
