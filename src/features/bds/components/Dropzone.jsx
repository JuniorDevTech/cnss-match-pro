import { useState } from "react";
import { UploadCloud, Loader2 } from "lucide-react";
import { useDropzone } from "react-dropzone";

import useBDSImport from "../../../shared/hooks/useBDSImport";

export default function Dropzone() {
  const [loading, setLoading] = useState(false);

  const { importBDS } = useBDSImport();

  const onDrop = async (acceptedFiles) => {
    const file = acceptedFiles[0];

    if (!file || loading) return;

    try {
      setLoading(true);

      await importBDS(file);
    } finally {
      setLoading(false);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    disabled: loading,
    accept: {
      "application/vnd.ms-excel": [".xls"],
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [
        ".xlsx",
      ],
      "text/csv": [".csv"],
    },
  });

  return (
    <div className="bg-white rounded-3xl shadow-sm p-4 sm:p-6 xl:p-8">
      <div
        {...getRootProps()}
        className={`
          border-2 border-dashed rounded-2xl p-12 text-center transition
          ${loading ? "cursor-not-allowed opacity-70" : "cursor-pointer"}
          ${
            isDragActive
              ? "border-blue-600 bg-blue-50"
              : "border-slate-300 hover:border-blue-500"
          }
        `}>
        <input {...getInputProps()} />

        {loading ? (
          <Loader2 size={52} className="mx-auto text-blue-600 animate-spin" />
        ) : (
          <UploadCloud size={52} className="mx-auto text-blue-600" />
        )}

        <h3 className="mt-5 text-xl font-bold">Déposer vos fichiers BDS</h3>

        <p className="text-slate-500 mt-2">
          Formats supportés : .xlsx, .xls, .csv
        </p>

        {loading ? (
          <p className="mt-4 text-blue-600 font-semibold">
            Importation en cours...
          </p>
        ) : isDragActive ? (
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
          disabled={loading}
          className="
            mt-6 px-6 py-3 rounded-xl text-white
            bg-blue-600 hover:bg-blue-700
            disabled:bg-slate-400
            disabled:cursor-not-allowed
            transition
          ">
          {loading ? "Importation..." : "Choisir un fichier"}
        </button>

        <p className="text-xs text-slate-400 mt-4">
          Les données restent dans votre navigateur.
        </p>
      </div>
    </div>
  );
}
