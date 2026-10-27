import { UploadCloud } from "lucide-react";
import { useDropzone } from "react-dropzone";

import usePersonnelImport from "../../../shared/hooks/usePersonnelImport";

export default function PersonnelUploader() {
  const { importPersonnel } = usePersonnelImport();

  const onDrop = async (acceptedFiles) => {
    const file = acceptedFiles[0];

    if (!file) return;

    await importPersonnel(file);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    accept: {
      "application/vnd.ms-excel": [".xls"],

      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [
        ".xlsx",
      ],

      "text/csv": [".csv"],
    },
  });

  return (
    <div className="bg-white rounded-3xl p-4 sm:p-6 xl:p-8 shadow-sm">
      <div
        {...getRootProps()}
        className={`
          border-2 border-dashed rounded-2xl p-12 text-center cursor-pointer transition

          ${
            isDragActive
              ? "border-blue-600 bg-blue-50"
              : "border-slate-300 hover:border-blue-500"
          }
        `}>
        <input {...getInputProps()} />

        <UploadCloud size={50} className="mx-auto text-blue-600" />

        <h3 className="mt-4 text-xl font-bold">Import Personnel</h3>

        <p className="text-slate-500 mt-2">
          Importez votre liste interne du personnel.
        </p>

        {isDragActive ? (
          <p className="mt-4 text-blue-600 font-semibold">
            Déposez votre fichier ici...
          </p>
        ) : (
          <p className="mt-4 text-slate-500">
            Glissez-déposez un fichier ou cliquez pour le sélectionner
          </p>
        )}

        <button
          type="button"
          className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
          Choisir un fichier
        </button>

        <p className="text-xs text-slate-400 mt-4">
          Formats supportés : .xlsx, .xls, .csv
        </p>
      </div>
    </div>
  );
}
