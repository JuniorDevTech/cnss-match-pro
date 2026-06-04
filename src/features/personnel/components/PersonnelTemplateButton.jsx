import { Download } from "lucide-react";
import * as XLSX from "xlsx";

export default function PersonnelTemplateButton() {
  const downloadTemplate = () => {
    const data = [["CNSS", "Nom", "Projet", "Société", "Date début paie"]];

    const worksheet = XLSX.utils.aoa_to_sheet(data);

    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook, worksheet, "Personnel");

    XLSX.writeFile(workbook, "modele_personnel.xlsx");
  };

  return (
    <button
      onClick={downloadTemplate}
      className="flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-300 hover:bg-slate-50">
      <Download size={16} />
      Télécharger le modèle vierge
    </button>
  );
}
