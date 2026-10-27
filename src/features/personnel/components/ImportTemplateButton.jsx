import * as XLSX from "xlsx";
import { Download, FileSpreadsheet, Sparkles } from "lucide-react";

export default function ImportTemplateButton() {
  const downloadTemplate = () => {
    const template = [
      {
        CNSS: "100150602",
        Nom: "BERRAKHLI KHEIRA",
        Projet: "Projet Anfa Mall",
        Société: "GROUPE KIRKOS",
        "Date début paie": "06/2025",
      },
    ];

    const worksheet = XLSX.utils.json_to_sheet(template);

    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook, worksheet, "Personnel");

    XLSX.writeFile(workbook, "modele_personnel.xlsx");
  };

  return (
    <button
      onClick={downloadTemplate}
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        bg-gradient-to-r
        from-emerald-600
        via-green-600
        to-emerald-700
        px-6
        py-4
        text-white
        shadow-lg
        shadow-green-600/25
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
        hover:shadow-green-600/35
      ">
      {/* Glow */}
      <div
        className="
          absolute
          -right-8
          -top-4 sm:p-6 xl:p-8
          h-24
          w-24
          rounded-full
          bg-white/10
          blur-2xl
        "
      />

      <div className="relative flex items-center gap-4">
        {/* Icon */}
        <div
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-xl
            bg-white/15
            backdrop-blur-sm
          ">
          <FileSpreadsheet size={24} />
        </div>

        {/* Text */}
        <div className="text-left">
          <div className="flex items-center gap-2">
            <p className="font-semibold">Modèle Excel Personnel</p>

            <Sparkles size={14} />
          </div>

          <p className="text-xs text-green-100">
            Télécharger le format officiel
          </p>
        </div>

        {/* Download Icon */}
        <Download
          size={20}
          className="
            ml-2
            transition-transform
            duration-300
            group-hover:translate-y-1
          "
        />
      </div>
    </button>
  );
}
