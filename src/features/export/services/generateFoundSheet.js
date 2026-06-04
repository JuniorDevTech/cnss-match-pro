import * as XLSX from "xlsx";

export function generateFoundSheet(workbook, project) {
  const data = project.foundEmployees.map((employee) => ({
    CNSS: employee.cnss,
    Nom: employee.name,
    Projet: employee.project,
    Société: employee.company,
  }));

  const worksheet = XLSX.utils.json_to_sheet(data);

  XLSX.utils.book_append_sheet(workbook, worksheet, "Agents trouvés");
}
