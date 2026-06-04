import * as XLSX from "xlsx";

export function generateSummarySheet(workbook, project) {
  const data = [
    {
      Projet: project.project,
      Société: project.company,
      Période: project.payrollDate,
      Total: project.total,
      Trouvés: project.foundCount,
      Introuvables: project.missingCount,
      Couverture: `${project.coverage}%`,
    },
  ];

  const worksheet = XLSX.utils.json_to_sheet(data);

  XLSX.utils.book_append_sheet(workbook, worksheet, "Résumé");
}
