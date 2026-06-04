import * as XLSX from "xlsx";

export async function parsePersonnelFile(file) {
  try {
    const buffer = await file.arrayBuffer();

    const workbook = XLSX.read(buffer, {
      type: "array",
    });

    const sheetName = workbook.SheetNames[0];

    const worksheet = workbook.Sheets[sheetName];

    const rows = XLSX.utils.sheet_to_json(worksheet, {
      defval: "",
      raw: false,
    });

    return {
      success: true,
      rows,
      totalRows: rows.length,
      sheetName,
    };
  } catch {
    return {
      success: false,
      error: "Impossible de lire le fichier.",
    };
  }
}
