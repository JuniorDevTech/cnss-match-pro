import { Search, Bell, CalendarDays, ChevronDown } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 flex min-h-16 w-full items-center justify-end gap-2 border-b border-slate-200 bg-white/95 px-4 py-3 backdrop-blur sm:gap-3 sm:px-6 xl:px-8">
      <div className="relative hidden min-w-0 flex-1 sm:block sm:max-w-xs lg:max-w-md">
        <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
        <input type="search" placeholder="Rechercher..." aria-label="Rechercher" className="h-10 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-3 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100" />
      </div>
      <button type="button" className="hidden h-10 items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 text-sm sm:flex" aria-label="Période sélectionnée">
        <CalendarDays size={17} className="shrink-0 text-blue-600" />
        <span className="whitespace-nowrap font-medium text-slate-700">Période</span>
        <ChevronDown size={15} className="text-slate-400" />
      </button>
      <button type="button" aria-label="Notifications" className="relative grid size-10 shrink-0 place-items-center rounded-xl text-slate-500 transition hover:bg-slate-100">
        <Bell size={20} /><span className="absolute right-2 top-2 size-2 rounded-full bg-red-500" />
      </button>
      <button type="button" className="flex min-w-0 items-center gap-2 rounded-xl p-1.5 text-left transition hover:bg-slate-100 sm:gap-3 sm:px-2" aria-label="Profil utilisateur">
        <span className="grid size-9 shrink-0 place-items-center rounded-full bg-blue-600 text-xs font-semibold text-white sm:size-10">AM</span>
        <span className="hidden min-w-0 sm:block"><span className="block truncate text-sm font-semibold text-slate-900">Ahmed Mansouri</span><span className="block truncate text-xs text-slate-500">RH Manager</span></span>
        <ChevronDown size={15} className="hidden shrink-0 text-slate-400 sm:block" />
      </button>
    </header>
  );
}
