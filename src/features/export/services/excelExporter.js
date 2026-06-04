import * as XLSX from "xlsx";

import { generateFoundSheet } from "./generateFoundSheet";
import { generateMissingSheet } from "./generateMissingSheet";
import { generateSummarySheet } from "./generateSummarySheet";

export function exportProjectExcel(project) {
  const workbook = XLSX.utils.book_new();

  generateFoundSheet(workbook, project);

  generateMissingSheet(workbook, project);

  generateSummarySheet(workbook, project);

  const filename = `${project.project}_${project.payrollDate}.xlsx`;

  XLSX.writeFile(workbook, filename);
}
