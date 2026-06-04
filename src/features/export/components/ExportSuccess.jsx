import {
  CheckCircle2,
  Download,
  Sparkles,
  FileSpreadsheet,
} from "lucide-react";

export default function ExportSuccess({ projectName }) {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-green-100
        bg-white
        p-6
        shadow-lg
        shadow-green-100/50
      ">
      {/* Glow */}
      <div
        className="
          absolute
          -right-10
          -top-10
          h-40
          w-40
          rounded-full
          bg-green-500/10
          blur-3xl
        "
      />

      <div className="relative">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
          {/* Icon */}
          <div
            className="
              flex
              h-20
              w-20
              items-center
              justify-center
              rounded-3xl
              bg-green-50
            ">
            <CheckCircle2 size={42} className="text-green-600" />
          </div>

          {/* Content */}
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <Sparkles size={16} className="text-green-600" />

              <span className="text-xs font-semibold uppercase tracking-widest text-green-600">
                Export terminé
              </span>
            </div>

            <h3 className="mt-2 text-2xl font-bold text-slate-900">
              Rapport généré avec succès
            </h3>

            <p className="mt-2 text-slate-600">
              Le fichier Excel du projet <strong>{projectName}</strong> a été
              créé et téléchargé avec succès.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-green-50
                  px-3
                  py-1.5
                  text-sm
                  font-medium
                  text-green-700
                ">
                <Download size={14} />
                Téléchargé
              </div>

              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-blue-50
                  px-3
                  py-1.5
                  text-sm
                  font-medium
                  text-blue-700
                ">
                <FileSpreadsheet size={14} />
                Format Excel
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          className="
            mt-6
            rounded-2xl
            border
            border-green-100
            bg-green-50
            p-4
          ">
          <p className="text-sm text-green-700">
            Le rapport contient les agents trouvés, les agents introuvables
            ainsi que le résumé complet de l'analyse CNSS.
          </p>
        </div>
      </div>
    </div>
  );
}
