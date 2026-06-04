import {
  FileSpreadsheet,
  Building2,
  CalendarDays,
  FolderKanban,
  CheckCircle2,
  Download,
  X,
  ShieldCheck,
} from "lucide-react";

export default function ExportPreviewModal({ project, onConfirm, onClose }) {
  if (!project) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-slate-950/60
        backdrop-blur-sm
        p-4
      ">
      <div
        className="
          relative
          w-full
          max-w-2xl
          overflow-hidden
          rounded-3xl
          bg-white
          shadow-2xl
        ">
        {/* HEADER */}
        <div
          className="
            bg-gradient-to-r
            from-green-600
            via-emerald-600
            to-green-700
            p-8
            text-white
          ">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div
                className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-3xl
                  bg-white/10
                ">
                <FileSpreadsheet size={30} />
              </div>

              <div>
                <p className="text-green-100 text-sm">Génération de rapport</p>

                <h2 className="text-3xl font-bold">Prévisualisation Export</h2>
              </div>
            </div>

            <button
              onClick={onClose}
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                bg-white/10
                hover:bg-white/20
                transition
              ">
              <X size={18} />
            </button>
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-8">
          {/* Infos projet */}
          <div className="grid md:grid-cols-3 gap-4">
            <InfoCard
              icon={FolderKanban}
              label="Projet"
              value={project.project}
              color="text-blue-600"
              bg="bg-blue-50"
            />

            <InfoCard
              icon={Building2}
              label="Société"
              value={project.company}
              color="text-violet-600"
              bg="bg-violet-50"
            />

            <InfoCard
              icon={CalendarDays}
              label="Période"
              value={project.payrollDate}
              color="text-amber-600"
              bg="bg-amber-50"
            />
          </div>

          {/* Contenu export */}
          <div
            className="
              mt-8
              rounded-3xl
              border
              border-slate-100
              bg-slate-50
              p-6
            ">
            <div className="flex items-center gap-2 mb-5">
              <ShieldCheck size={20} className="text-green-600" />

              <h3 className="font-bold text-slate-900">
                Contenu du rapport Excel
              </h3>
            </div>

            <div className="space-y-3">
              <SheetItem title="Agents trouvés" />
              <SheetItem title="Agents introuvables" />
              <SheetItem title="Résumé exécutif" />
            </div>
          </div>

          {/* Notice */}
          <div
            className="
              mt-6
              rounded-2xl
              bg-green-50
              border
              border-green-100
              p-4
            ">
            <p className="text-sm text-green-700">
              Le rapport sera généré au format Excel avec toutes les données
              nécessaires à l'audit et à la réconciliation CNSS.
            </p>
          </div>

          {/* ACTIONS */}
          <div className="mt-8 flex flex-col-reverse sm:flex-row justify-end gap-3">
            <button
              onClick={onClose}
              className="
                rounded-2xl
                border
                border-slate-200
                px-6
                py-3
                font-medium
                text-slate-700
                hover:bg-slate-50
                transition
              ">
              Annuler
            </button>

            <button
              onClick={onConfirm}
              className="
                flex
                items-center
                justify-center
                gap-2
                rounded-2xl
                bg-gradient-to-r
                from-green-600
                to-emerald-600
                px-6
                py-3
                font-semibold
                text-white
                shadow-lg
                shadow-green-600/20
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
              ">
              <Download size={18} />
              Exporter le rapport
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoCard({ icon: Icon, label, value, color, bg }) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-slate-100
        p-4
      ">
      <div
        className={`
          mb-3
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-xl
          ${bg}
        `}>
        <Icon size={18} className={color} />
      </div>

      <p className="text-xs text-slate-500">{label}</p>

      <p className="mt-1 font-semibold text-slate-900">{value}</p>
    </div>
  );
}

function SheetItem({ title }) {
  return (
    <div className="flex items-center gap-3">
      <CheckCircle2 size={18} className="text-green-600" />

      <span className="text-slate-700">{title}</span>
    </div>
  );
}
