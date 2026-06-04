import { PlayCircle, Sparkles, ShieldCheck } from "lucide-react";

import useAnalysis from "../../../shared/hooks/useAnalysis";

export default function AnalysisToolbar() {
  const { runAnalysis } = useAnalysis();

  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-slate-100
        bg-white
        p-6
        shadow-lg
        shadow-slate-200/40
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
          bg-blue-500/10
          blur-3xl
        "
      />

      <div className="relative">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          {/* Texte */}
          <div>
            <div className="flex items-center gap-2">
              <Sparkles size={16} className="text-blue-600" />

              <span className="text-xs font-semibold uppercase tracking-widest text-blue-600">
                Moteur d'analyse CNSS
              </span>
            </div>

            <h2 className="mt-2 text-2xl font-bold text-slate-900">
              Réconciliation automatique
            </h2>

            <p className="mt-2 max-w-2xl text-slate-500">
              Lancez l'analyse pour comparer les données BDS avec les
              déclarations CNSS et identifier instantanément les agents
              retrouvés et les anomalies.
            </p>
          </div>

          {/* CTA */}
          <button
            onClick={runAnalysis}
            className="
              group
              flex
              items-center
              justify-center
              gap-3
              rounded-2xl
              bg-gradient-to-r
              from-blue-600
              via-blue-700
              to-indigo-700
              px-8
              py-4
              font-semibold
              text-white
              shadow-lg
              shadow-blue-600/30
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-xl
              hover:shadow-blue-600/40
            ">
            <PlayCircle
              size={22}
              className="
                transition-transform
                duration-300
                group-hover:scale-110
              "
            />

            <span>Lancer l'analyse</span>
          </button>
        </div>

        {/* Footer */}
        <div className="mt-6 flex flex-wrap gap-4 border-t border-slate-100 pt-5">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <ShieldCheck size={16} className="text-green-600" />
            Vérification CNSS
          </div>

          <div className="flex items-center gap-2 text-sm text-slate-500">
            <ShieldCheck size={16} className="text-green-600" />
            Détection automatique
          </div>

          <div className="flex items-center gap-2 text-sm text-slate-500">
            <ShieldCheck size={16} className="text-green-600" />
            Rapport instantané
          </div>
        </div>
      </div>
    </div>
  );
}
