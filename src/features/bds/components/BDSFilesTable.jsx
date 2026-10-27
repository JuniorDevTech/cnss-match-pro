import { FileSpreadsheet, Database, UploadCloud } from "lucide-react";

import BDSFileRow from "./BDSFileRow";
import useBDSStore from "../../../store/bdsStore";

export default function BDSFilesTable() {
  const files = useBDSStore((state) => state.files);

  if (files.length === 0) {
    return (
      <div
        className="
          rounded-3xl
          border
          border-slate-100
          bg-white
          p-12
          shadow-lg
          shadow-slate-200/40
        ">
        <div className="flex flex-col items-center">
          <div
            className="
              mb-5
              flex
              h-20
              w-20
              items-center
              justify-center
              rounded-3xl
              bg-blue-50
            ">
            <UploadCloud size={40} className="text-blue-600" />
          </div>

          <h3 className="text-xl font-bold text-slate-900">
            Aucun fichier importé
          </h3>

          <p className="mt-3 max-w-md text-center text-slate-500">
            Importez votre premier fichier BDS afin de lancer les analyses et la
            réconciliation CNSS.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="
        overflow-hidden
        rounded-3xl
        border
        border-slate-100
        bg-white
        shadow-lg
        shadow-slate-200/40
      ">
      {/* HEADER */}
      <div className="border-b border-slate-100 p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
              Gestion documentaire
            </p>

            <h2 className="mt-1 text-2xl font-bold text-slate-900">
              Fichiers BDS Importés
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Consultez et gérez les fichiers utilisés pour les analyses CNSS.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div
              className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                bg-blue-50
              ">
              <Database size={26} className="text-blue-600" />
            </div>

            <div>
              <p className="text-xs text-slate-400">Total Fichiers</p>

              <p className="text-2xl font-bold text-slate-900">
                {files.length}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px]">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                Fichier
              </th>

              <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                Société
              </th>

              <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                Période
              </th>

              <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                Effectif
              </th>

              <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                Statut
              </th>

              <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {files.map((file) => (
              <BDSFileRow key={file.id} file={file} />
            ))}
          </tbody>
        </table>
      </div>

      {/* FOOTER */}
      <div
        className="
          flex
          flex-col
          gap-2
          items-start
          sm:flex-row
          sm:items-center
          sm:justify-between
          border-t
          border-slate-100
          bg-slate-50
          px-4
          py-4
          sm:px-6
        ">
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <FileSpreadsheet size={16} />
          <span>
            {files.length} fichier
            {files.length > 1 ? "s" : ""} disponible
            {files.length > 1 ? "s" : ""}
          </span>
        </div>

        <div className="text-xs text-slate-400 sm:text-sm">
          Dernière synchronisation : Temps réel
        </div>
      </div>
    </div>
  );
}
