import * as XLSX from "xlsx";

export function generateMissingSheet(workbook, project) {
  const data = project.missingEmployees.map((employee) => ({
    CNSS: employee.cnss,
    Nom: employee.name,
    Projet: employee.project,
    Société: employee.company,
    Statut: "INTROUVABLE",
  }));

  const worksheet = XLSX.utils.json_to_sheet(data);

  XLSX.utils.book_append_sheet(workbook, worksheet, "Agents introuvables");
}
