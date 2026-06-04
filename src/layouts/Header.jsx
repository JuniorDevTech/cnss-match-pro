import { Search, Bell, CalendarDays, ChevronDown } from "lucide-react";

export default function Header() {
  return (
    <header className="h-20 bg-[#F8FAFC] border-b border-slate-200 px-8 flex items-center justify-between">
      {/* LEFT */}
      <div>
        <p className="text-sm text-slate-500 mt-1"></p>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-5">
        {/* SEARCH */}
        <div className="relative w-[280px]">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Rechercher..."
            className="h-11 w-full rounded-2xl border border-slate-200 bg-slate-100/80 pl-11 pr-14 text-sm text-slate-700 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
          />

          {/* Shortcut */}
          <div className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md bg-slate-200 px-2 py-1 text-xs font-medium text-slate-500">
            ⌘K
          </div>
        </div>

        {/* DATE */}
        <button className="flex h-11 items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 transition hover:bg-slate-50">
          <CalendarDays size={18} className="text-blue-600" />

          <span className="font-medium text-slate-800">Mai 2025</span>

          <ChevronDown size={16} className="text-slate-400" />
        </button>

        {/* NOTIFICATION */}
        <button className="relative rounded-xl p-2.5 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700">
          <Bell size={20} />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
        </button>

        {/* USER */}
        <button className="flex items-center gap-3 rounded-2xl px-2 py-1.5 transition hover:bg-slate-100">
          {/* Avatar */}
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white shadow-md shadow-blue-200">
            AM
          </div>

          {/* Infos */}
          <div className="text-left">
            <p className="text-sm font-semibold text-slate-900">
              Ahmed Mansouri
            </p>

            <p className="text-xs text-slate-500">RH Manager</p>
          </div>

          <ChevronDown size={16} className="text-slate-400" />
        </button>
      </div>
    </header>
  );
}
