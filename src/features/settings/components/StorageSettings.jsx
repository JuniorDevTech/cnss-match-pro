import {
  HardDrive,
  FileSpreadsheet,
  Users,
  BarChart3,
  ShieldCheck,
} from "lucide-react";

import useBDSStore from "../../../store/bdsStore";
import usePersonnelStore from "../../../store/personnelStore";
import useAnalysisStore from "../../../store/analysisStore";

import SettingCard from "./SettingCard";

export default function StorageSettings() {
  const files = useBDSStore((state) => state.files);

  const personnel = usePersonnelStore((state) => state.personnel);

  const results = useAnalysisStore((state) => state.results);

  const stats = [
    {
      label: "Fichiers BDS",
      value: files.length,
      icon: FileSpreadsheet,
      color: "text-blue-600",
      bg: "bg-blue-50",
    },

    {
      label: "Agents",
      value: personnel.length.toLocaleString(),
      icon: Users,
      color: "text-green-600",
      bg: "bg-green-50",
    },

    {
      label: "Analyses",
      value: results.length,
      icon: BarChart3,
      color: "text-violet-600",
      bg: "bg-violet-50",
    },
  ];

  return (
    <SettingCard
      title="Stockage Local"
      description="Données enregistrées dans votre navigateur">
      <div className="space-y-5">
        {/* Banner */}
        <div
          className="
            flex
            items-start
            gap-4
            rounded-2xl
            border
            border-blue-100
            bg-blue-50
            p-4
          ">
          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              bg-white
            ">
            <HardDrive size={22} className="text-blue-600" />
          </div>

          <div>
            <h4 className="font-semibold text-slate-900">
              Stockage local sécurisé
            </h4>

            <p className="mt-1 text-sm text-slate-600">
              Toutes les données restent sur l'appareil et ne sont pas envoyées
              à un serveur externe.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid gap-4 md:grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="
                  rounded-2xl
                  border
                  border-slate-100
                  p-4
                  transition-all
                  duration-300
                  hover:shadow-md
                ">
                <div
                  className={`
                    mb-4
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-2xl
                    ${item.bg}
                  `}>
                  <Icon size={22} className={item.color} />
                </div>

                <p className="text-sm text-slate-500">{item.label}</p>

                <h3 className="mt-2 text-3xl font-bold text-slate-900">
                  {item.value}
                </h3>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div
          className="
            flex
            items-center
            gap-3
            rounded-2xl
            border
            border-green-100
            bg-green-50
            p-4
          ">
          <ShieldCheck size={18} className="text-green-600" />

          <p className="text-sm text-green-700">
            Les données sont conservées localement pour garantir confidentialité
            et sécurité.
          </p>
        </div>
      </div>
    </SettingCard>
  );
}
