import { ShieldCheck, Loader2, Database, SearchCheck } from "lucide-react";

export default function AnalysisLoader() {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-slate-100
        bg-white
        p-8
        shadow-xl
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
        {/* HEADER */}
        <div className="flex items-center gap-4">
          <div
            className="
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-3xl
              bg-blue-50
            ">
            <Loader2
              size={30}
              className="
                text-blue-600
                animate-spin
              "
            />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">
              Analyse intelligente
            </p>

            <h3 className="mt-1 text-2xl font-bold text-slate-900">
              Réconciliation CNSS en cours
            </h3>
          </div>
        </div>

        {/* Progress */}
        <div className="mt-8">
          <div className="mb-3 flex justify-between">
            <span className="text-sm text-slate-500">Progression</span>

            <span className="font-semibold text-blue-600">65%</span>
          </div>

          <div className="h-4 overflow-hidden rounded-full bg-slate-100">
            <div
              className="
                h-full
                rounded-full
                bg-gradient-to-r
                from-blue-500
                via-blue-600
                to-indigo-600
                transition-all
                duration-1000
              "
              style={{
                width: "65%",
              }}
            />
          </div>
        </div>

        {/* Message */}
        <div
          className="
            mt-6
            rounded-2xl
            bg-slate-50
            p-4
          ">
          <p className="text-slate-600">
            Vérification des déclarations CNSS, rapprochement des agents et
            détection automatique des anomalies...
          </p>
        </div>

        {/* Steps */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div
            className="
              flex
              items-center
              gap-3
              rounded-2xl
              border
              border-slate-100
              p-4
            ">
            <Database size={20} className="text-blue-600" />

            <span className="text-sm text-slate-700">Lecture des données</span>
          </div>

          <div
            className="
              flex
              items-center
              gap-3
              rounded-2xl
              border
              border-slate-100
              p-4
            ">
            <SearchCheck size={20} className="text-blue-600" />

            <span className="text-sm text-slate-700">Vérification CNSS</span>
          </div>

          <div
            className="
              flex
              items-center
              gap-3
              rounded-2xl
              border
              border-slate-100
              p-4
            ">
            <ShieldCheck size={20} className="text-green-600" />

            <span className="text-sm text-slate-700">Contrôle conformité</span>
          </div>
        </div>
      </div>
    </div>
  );
}
