import { AlertTriangle, Trash2, ShieldAlert } from "lucide-react";

import useSettings from "../../../shared/hooks/useSettings";
import SettingCard from "./SettingCard";

export default function DangerZone() {
  const { resetApplication } = useSettings();

  const handleReset = () => {
    const confirmed = window.confirm(
      "Cette action supprimera définitivement toutes les données importées, analyses et exports. Continuer ?",
    );

    if (!confirmed) return;

    resetApplication();
  };

  return (
    <SettingCard
      title="Zone Dangereuse"
      description="Actions critiques et irréversibles">
      <div
        className="
          overflow-hidden
          rounded-3xl
          border
          border-red-200
          bg-gradient-to-r
          from-red-50
          via-white
          to-red-50
        ">
        {/* HEADER */}
        <div className="border-b border-red-100 p-6">
          <div className="flex items-start gap-4">
            <div
              className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                bg-red-100
              ">
              <ShieldAlert size={28} className="text-red-600" />
            </div>

            <div>
              <h3 className="text-lg font-bold text-red-700">
                Réinitialisation complète
              </h3>

              <p className="mt-2 text-sm text-slate-600">
                Cette opération supprimera définitivement toutes les données
                enregistrées dans l'application.
              </p>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-6">
          <div
            className="
              rounded-2xl
              border
              border-red-100
              bg-red-50
              p-4
            ">
            <div className="flex gap-3">
              <AlertTriangle size={20} className="mt-0.5 text-red-600" />

              <div>
                <p className="font-semibold text-red-700">Conséquences</p>

                <ul className="mt-2 space-y-1 text-sm text-red-600">
                  <li>• Suppression des fichiers BDS</li>

                  <li>• Suppression des analyses</li>

                  <li>• Suppression de l'historique des exports</li>

                  <li>• Réinitialisation complète de l'application</li>
                </ul>
              </div>
            </div>
          </div>

          {/* ACTION */}
          <div className="mt-6 flex justify-end">
            <button
              onClick={handleReset}
              className="
                flex
                items-center
                gap-3
                rounded-2xl
                bg-red-600
                px-6
                py-3
                font-semibold
                text-white
                shadow-lg
                shadow-red-600/20
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-red-700
                hover:shadow-xl
              ">
              <Trash2 size={18} />
              Réinitialiser les données
            </button>
          </div>
        </div>
      </div>
    </SettingCard>
  );
}
