import { useState } from "react";

import {
  Building2,
  Users,
  CheckCircle2,
  AlertTriangle,
  Eye,
  Download,
  TrendingUp,
} from "lucide-react";

import CoverageDonut from "./CoverageDonut";
import ProjectDetailsModal from "./ProjectDetailsModal";
import useExport from "../../../shared/hooks/useExport";

export default function ProjectCard({ project }) {
  const [open, setOpen] = useState(false);

  const { exportProject } = useExport();

  const status =
    project.coverage >= 90
      ? {
          label: "Excellent",
          color: "text-green-700",
          bg: "bg-green-50",
        }
      : project.coverage >= 70
        ? {
            label: "À surveiller",
            color: "text-amber-700",
            bg: "bg-amber-50",
          }
        : {
            label: "Critique",
            color: "text-red-700",
            bg: "bg-red-50",
          };

  return (
    <>
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
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-xl
        ">
        {/* Glow */}
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
          <div className="flex items-start justify-between">
            <div>
              <div
                className={`
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  px-3
                  py-1
                  text-xs
                  font-semibold
                  ${status.bg}
                  ${status.color}
                `}>
                <TrendingUp size={12} />
                {status.label}
              </div>

              <h3 className="mt-3 text-xl font-bold text-slate-900">
                {project.project}
              </h3>

              <div className="mt-2 flex items-center gap-2 text-slate-500">
                <Building2 size={15} />
                <span>{project.company}</span>
              </div>
            </div>

            <CoverageDonut coverage={project.coverage} />
          </div>

          {/* KPI */}
          <div className="mt-8 grid grid-cols-3 gap-4">
            <Stat
              icon={Users}
              label="Agents"
              value={project.total}
              color="text-blue-600"
              bg="bg-blue-50"
            />

            <Stat
              icon={CheckCircle2}
              label="Trouvés"
              value={project.foundCount}
              color="text-green-600"
              bg="bg-green-50"
            />

            <Stat
              icon={AlertTriangle}
              label="Introuvables"
              value={project.missingCount}
              color="text-red-600"
              bg="bg-red-50"
            />
          </div>

          {/* Progress */}
          <div className="mt-6">
            <div className="mb-2 flex justify-between text-sm">
              <span className="text-slate-500">Taux de couverture</span>

              <span className="font-semibold text-slate-900">
                {project.coverage}%
              </span>
            </div>

            <div className="h-3 overflow-hidden rounded-full bg-slate-100">
              <div
                className="
                  h-full
                  rounded-full
                  bg-gradient-to-r
                  from-blue-500
                  via-indigo-500
                  to-blue-600
                "
                style={{
                  width: `${project.coverage}%`,
                }}
              />
            </div>
          </div>

          {/* ACTIONS */}
          <div className="mt-8 flex gap-3">
            <button
              onClick={() => setOpen(true)}
              className="
                flex-1
                flex
                items-center
                justify-center
                gap-2
                rounded-2xl
                bg-blue-600
                px-4
                py-3
                font-medium
                text-white
                transition
                hover:bg-blue-700
              ">
              <Eye size={18} />
              Voir détails
            </button>

            <button
              onClick={() => exportProject(project)}
              className="
                flex-1
                flex
                items-center
                justify-center
                gap-2
                rounded-2xl
                border
                border-green-200
                bg-green-50
                px-4
                py-3
                font-medium
                text-green-700
                transition
                hover:bg-green-100
              ">
              <Download size={18} />
              Exporter
            </button>
          </div>
        </div>
      </div>

      {open && (
        <ProjectDetailsModal project={project} onClose={() => setOpen(false)} />
      )}
    </>
  );
}

function Stat({ icon: Icon, label, value, color, bg }) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-slate-100
        p-4
      ">
      <div
        className={`
          mb-3
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-xl
          ${bg}
        `}>
        <Icon size={18} className={color} />
      </div>

      <p className="text-xs text-slate-500">{label}</p>

      <h4 className="mt-1 text-xl font-bold text-slate-900">{value}</h4>
    </div>
  );
}
