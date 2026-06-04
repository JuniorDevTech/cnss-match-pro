import { Download } from "lucide-react";
import * as XLSX from "xlsx";

export default function PersonnelFullExampleButton() {
  const downloadExample = () => {
    const data = [
      ["CNSS", "Nom", "Projet", "Société", "Date début paie"],

      ["1001", "KOUASSI Jean", "Projet Alpha", "GROUPE KIRKOS", "10/2025"],
      ["1002", "YAO Marie", "Projet Alpha", "GROUPE KIRKOS", "10/2025"],
      ["1004", "BAKAYOKO Ali", "Projet Alpha", "GROUPE KIRKOS", "10/2025"],

      ["2001", "KONE Mariam", "Pont Cocody", "SOGEA SATOM", "11/2025"],
      ["2002", "TRAORE Ibrahim", "Pont Cocody", "SOGEA SATOM", "11/2025"],
      ["2004", "BAKAYOKO Ali", "Pont Cocody", "SOGEA SATOM", "11/2025"],
    ];

    const worksheet = XLSX.utils.aoa_to_sheet(data);

    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook, worksheet, "Exemple Complet");

    XLSX.writeFile(workbook, "exemple_personnel_complet.xlsx");
  };

  return (
    <button
      onClick={downloadExample}
      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 transition">
      <Download size={16} />
      Télécharger un exemple complet
    </button>
  );
}
