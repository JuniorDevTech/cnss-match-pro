import { useState } from "react";
import { NavLink } from "react-router-dom";
import useDashboardStats from "../shared/hooks/useDashboardStats";

import {
  LayoutDashboard,
  FileSpreadsheet,
  Users,
  Search,
  Download,
  Settings,
  Shield,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";

const links = [
  {
    name: "Tableau de bord",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Fichiers BDS",
    path: "/bds",
    icon: FileSpreadsheet,
  },
  {
    name: "Liste du Personnel",
    path: "/personnel",
    icon: Users,
  },
  {
    name: "Résultats d'Analyse",
    path: "/analysis",
    icon: Search,
  },
  {
    name: "Exports",
    path: "/exports",
    icon: Download,
  },
  {
    name: "Paramètres",
    path: "/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const { coverage, totalEmployees, totalFound } = useDashboardStats();

  return (
    <>
      {/* MOBILE BUTTON */}
      <button
        onClick={() => setIsOpen(true)}
        className="
          lg:hidden
          fixed
          top-4
          left-4
          z-[60]
          p-3
          rounded-xl
          bg-[#06122B]
          text-white
          shadow-lg
        ">
        <Menu size={22} />
      </button>

      {/* OVERLAY */}
      <div
        onClick={() => setIsOpen(false)}
        className={`
          fixed inset-0 z-40 bg-black/50 backdrop-blur-sm
          transition-opacity duration-300
          lg:hidden
          ${
            isOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
        `}
      />

      {/* SIDEBAR */}
      <aside
        className={`
          fixed lg:sticky
          top-0 left-0
          z-50
          h-screen

          w-72
          md:w-24
          xl:w-72

          bg-[#06122B]
          border-r border-white/10

          flex flex-col

          transition-all duration-300

          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}>
        {/* HEADER */}
        <div className="border-b border-white/10 px-5 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  bg-gradient-to-br
                  from-blue-500
                  to-blue-700
                  shadow-lg
                  shadow-blue-600/30
                ">
                <Shield size={24} />
              </div>

              <div className="hidden xl:block">
                <h1 className="font-bold text-white text-lg">CNSS Match Pro</h1>

                <p className="text-slate-400 text-sm">Réconciliation Paie</p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="lg:hidden text-slate-400 hover:text-white">
              <X size={22} />
            </button>
          </div>
        </div>

        {/* NAVIGATION */}
        <nav
          className="
            flex-1
            overflow-y-auto
            px-3
            py-5
            scrollbar-thin
          ">
          <div className="space-y-2">
            {links.map((link) => {
              const Icon = link.icon;

              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `
                    group
                    flex
                    items-center
                    justify-between
                    rounded-2xl
                    px-4
                    py-3
                    transition-all
                    duration-300

                    ${
                      isActive
                        ? "bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg shadow-blue-900/40"
                        : "hover:bg-white/5"
                    }
                  `
                  }>
                  {({ isActive }) => (
                    <>
                      <div className="flex items-center gap-3">
                        <Icon
                          size={20}
                          className={`
                            ${
                              isActive
                                ? "text-white"
                                : "text-slate-400 group-hover:text-white"
                            }
                          `}
                        />

                        <span
                          className={`
                            hidden xl:block
                            text-sm
                            font-medium

                            ${
                              isActive
                                ? "text-white"
                                : "text-slate-300 group-hover:text-white"
                            }
                          `}>
                          {link.name}
                        </span>
                      </div>

                      {isActive && (
                        <ChevronRight
                          size={18}
                          className="hidden xl:block text-white"
                        />
                      )}
                    </>
                  )}
                </NavLink>
              );
            })}
          </div>
        </nav>

        {/* FOOTER CARD */}
        <div className="p-4 border-t border-white/10">
          <div
            className="
              rounded-3xl
              bg-gradient-to-br
              from-blue-600/20
              via-slate-800
              to-slate-900
              p-5
            ">
            <div className="hidden xl:block">
              <p className="text-xs uppercase tracking-widest text-slate-400">
                Statut Analyse
              </p>

              <h3 className="mt-2 text-2xl font-bold">{coverage}%</h3>

              <p className="mt-1 text-sm text-slate-300">
                {totalFound} agents trouvés sur {totalEmployees}
              </p>

              <div className="mt-4 h-2 rounded-full bg-slate-700 overflow-hidden">
                <div
                  className="
                    h-full
                    rounded-full
                    bg-gradient-to-r
                    from-green-400
                    to-green-500
                    transition-all
                    duration-700
                  "
                  style={{
                    width: `${coverage}%`,
                  }}
                />
              </div>

              <div className="mt-4 flex justify-between text-xs text-slate-400">
                <span>CNSS</span>
                <span>Temps réel</span>
              </div>
            </div>

            <div className="hidden md:flex xl:hidden justify-center">
              <div
                className="
                  h-12
                  w-12
                  rounded-full
                  bg-blue-600
                  flex
                  items-center
                  justify-center
                  font-bold
                ">
                {coverage}%
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
