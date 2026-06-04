import { ShieldCheck, Lock, CheckCircle2 } from "lucide-react";

import SettingCard from "./SettingCard";

export default function GeneralSettings() {
  return (
    <SettingCard
      title="Paramètres Généraux"
      description="Configuration principale de l'application">
      <div
        className="
          rounded-2xl
          border
          border-slate-100
          bg-slate-50
          p-5
        ">
        <div className="flex items-start justify-between gap-4">
          <div className="flex gap-4">
            <div
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-2xl
                bg-blue-50
              ">
              <ShieldCheck size={24} className="text-blue-600" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-semibold text-slate-900">
                  Mode local uniquement
                </h4>

                <span
                  className="
                    inline-flex
                    items-center
                    gap-1
                    rounded-full
                    bg-green-50
                    px-2.5
                    py-1
                    text-xs
                    font-semibold
                    text-green-700
                  ">
                  <CheckCircle2 size={12} />
                  Actif
                </span>
              </div>

              <p className="mt-2 text-sm text-slate-500">
                Toutes les données sont stockées localement sur l'appareil.
                Aucun transfert vers un serveur externe.
              </p>
            </div>
          </div>

          {/* Toggle Premium */}
          <div
            className="
              relative
              h-7
              w-14
              rounded-full
              bg-blue-600
              shadow-inner
            ">
            <div
              className="
                absolute
                right-1
                top-1
                h-5
                w-5
                rounded-full
                bg-white
                shadow-sm
              "
            />
          </div>
        </div>

        {/* Footer */}
        <div
          className="
            mt-5
            flex
            items-center
            gap-2
            border-t
            border-slate-200
            pt-4
            text-sm
            text-slate-500
          ">
          <Lock size={14} className="text-green-600" />
          Sécurité renforcée et confidentialité des données.
        </div>
      </div>
    </SettingCard>
  );
}
