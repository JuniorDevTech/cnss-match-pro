import { useState } from "react";

import {
  X,
  FileSearch,
  CheckCircle2,
  AlertTriangle,
  BarChart3,
  Building2,
} from "lucide-react";

import FoundEmployeesTab from "./FoundEmployeesTab";
import MissingEmployeesTab from "./MissingEmployeesTab";
import SummaryTab from "./SummaryTab";

export default function ProjectDetailsModal({ project, onClose }) {
  const [tab, setTab] = useState("summary");

  const tabs = [
    {
      id: "summary",
      label: "Résumé",
      icon: BarChart3,
    },

    {
      id: "found",
      label: "Trouvés",
      icon: CheckCircle2,
    },

    {
      id: "missing",
      label: "Introuvables",
      icon: AlertTriangle,
    },
  ];

  return (
    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-slate-950/60
        backdrop-blur-sm
        p-4
      ">
      <div
        className="
          relative
          w-full
          max-w-6xl
          max-h-[95vh]
          overflow-hidden
          rounded-3xl
          bg-white
          shadow-2xl
        ">
        {/* HEADER */}
        <div
          className="
            bg-gradient-to-r
            from-blue-700
            via-blue-800
            to-indigo-900
            p-4 sm:p-6 xl:p-8
            text-white
          ">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-3">
                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-white/10
                  ">
                  <FileSearch size={28} />
                </div>

                <div>
                  <p className="text-blue-200 text-sm">Analyse CNSS</p>

                  <h2 className="text-3xl font-bold">{project.project}</h2>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2 text-blue-100">
                <Building2 size={16} />

                <span>{project.company}</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-xl
                bg-white/10
                transition
                hover:bg-white/20
              ">
              <X size={20} />
            </button>
          </div>

          {/* KPI QUICK VIEW */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            <div className="rounded-2xl bg-white/10 p-4">
              <p className="text-blue-200 text-sm">Couverture</p>

              <h3 className="mt-1 text-3xl font-bold">{project.coverage}%</h3>
            </div>

            <div className="rounded-2xl bg-white/10 p-4">
              <p className="text-blue-200 text-sm">Trouvés</p>

              <h3 className="mt-1 text-3xl font-bold">{project.foundCount}</h3>
            </div>

            <div className="rounded-2xl bg-white/10 p-4">
              <p className="text-blue-200 text-sm">Introuvables</p>

              <h3 className="mt-1 text-3xl font-bold">
                {project.missingCount}
              </h3>
            </div>
          </div>
        </div>

        {/* TABS */}
        <div className="border-b border-slate-100 px-6">
          <div className="flex gap-2 overflow-x-auto py-4">
            {tabs.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.id}
                  onClick={() => setTab(item.id)}
                  className={`
                    flex
                    items-center
                    gap-2
                    rounded-xl
                    px-4
                    py-3
                    text-sm
                    font-medium
                    transition-all

                    ${
                      tab === item.id
                        ? "bg-blue-600 text-white shadow-lg"
                        : "text-slate-600 hover:bg-slate-100"
                    }
                  `}>
                  <Icon size={16} />
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* CONTENT */}
        <div
          className="
            max-h-[55vh]
            overflow-y-auto
            p-6
          ">
          {tab === "summary" && <SummaryTab project={project} />}

          {tab === "found" && (
            <FoundEmployeesTab employees={project.foundEmployees} />
          )}

          {tab === "missing" && (
            <MissingEmployeesTab employees={project.missingEmployees} />
          )}
        </div>
      </div>
    </div>
  );
}
