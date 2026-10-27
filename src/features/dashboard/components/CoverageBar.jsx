import { ShieldCheck, TrendingUp } from "lucide-react";

import useDashboardStats from "../../../shared/hooks/useDashboardStats";

export default function CoverageBar() {
  const { coverage } = useDashboardStats();

  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-3xl
        bg-white
        p-6
        shadow-lg
        shadow-slate-200/60
        border
        border-slate-100
      ">
      {/* Background decoration */}
      <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-green-100 blur-3xl opacity-70" />

      <div className="relative">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
              Performance Globale
            </p>

            <h3 className="mt-2 text-xl font-bold text-slate-900">
              Taux de couverture CNSS
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Niveau de correspondance entre les données BDS et CNSS
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
              bg-green-50
            ">
            <ShieldCheck size={28} className="text-green-600" />
          </div>
        </div>

        {/* Score */}
        <div className="mt-8 flex items-end gap-3">
          <span className="text-5xl font-extrabold text-slate-900">
            {coverage}
          </span>

          <span className="text-2xl font-bold text-green-600 mb-1">%</span>

          <div className="mb-2 flex items-center gap-1 rounded-full bg-green-50 px-3 py-1">
            <TrendingUp size={14} className="text-green-600" />

            <span className="text-xs font-semibold text-green-700">
              Excellent
            </span>
          </div>
        </div>

        {/* Progress */}
        <div className="mt-6">
          <div className="mb-2 flex justify-between text-xs text-slate-500">
            <span>Progression</span>
            <span>{coverage}% complété</span>
          </div>

          <div className="h-4 overflow-hidden rounded-full bg-slate-100">
            <div
              className="
                h-full
                rounded-full
                bg-gradient-to-r
                from-green-500
                via-emerald-500
                to-green-600
                transition-all
                duration-1000
                ease-out
                shadow-lg
                shadow-green-500/30
              "
              style={{
                width: `${coverage}%`,
              }}
            />
          </div>
        </div>

        {/* Footer stats */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 border-t border-slate-100 pt-5">
          <div>
            <p className="text-xs text-slate-400">Statut</p>

            <p className="font-semibold text-green-600">Conforme</p>
          </div>

          <div>
            <p className="text-xs text-slate-400">Qualité</p>

            <p className="font-semibold text-slate-800">Élevée</p>
          </div>

          <div>
            <p className="text-xs text-slate-400">Mise à jour</p>

            <p className="font-semibold text-slate-800">Temps réel</p>
          </div>
        </div>
      </div>
    </div>
  );
}
