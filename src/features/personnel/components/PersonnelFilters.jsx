import { Search, Users, Sparkles } from "lucide-react";

export default function PersonnelFilters({ search, setSearch }) {
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
      {/* Background Glow */}
      <div
        className="
          absolute
          -right-10
          -top-10
          h-32
          w-32
          rounded-full
          bg-blue-500/10
          blur-3xl
        "
      />

      <div className="relative">
        {/* HEADER */}
        <div className="mb-5 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
              Recherche avancée
            </p>

            <h3 className="mt-1 text-lg font-bold text-slate-900">
              Personnel analysé
            </h3>
          </div>

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
            <Users size={24} className="text-blue-600" />
          </div>
        </div>

        {/* SEARCH */}
        <div className="relative">
          <Search
            size={20}
            className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              text-slate-400
            "
          />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Rechercher par nom, CNSS, projet ou société..."
            className="
              w-full
              rounded-2xl
              border
              border-slate-200
              bg-slate-50
              py-4
              pl-12
              pr-14
              text-slate-700
              outline-none
              transition-all
              duration-300
              focus:border-blue-500
              focus:bg-white
              focus:ring-4
              focus:ring-blue-100
            "
          />

          <div
            className="
              absolute
              right-4
              top-1/2
              -translate-y-1/2
              flex
              items-center
              gap-1
              rounded-full
              bg-blue-100
              px-3
              py-1
              text-xs
              font-semibold
              text-blue-700
            ">
            <Sparkles size={12} />
            IA
          </div>
        </div>

        {/* FOOTER */}
        <div className="mt-4 flex items-center justify-between">
          <p className="text-sm text-slate-500">
            Recherchez rapidement un agent dans l'ensemble des données
            importées.
          </p>

          {search && (
            <button
              onClick={() => setSearch("")}
              className="
                text-sm
                font-medium
                text-blue-600
                hover:text-blue-700
              ">
              Réinitialiser
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
