import * as XLSX from "xlsx";

export async function parseBDSFile(file) {
  try {
    const buffer = await file.arrayBuffer();

    const workbook = XLSX.read(buffer, {
      type: "array",
    });

    const firstSheetName = workbook.SheetNames[0];

    const worksheet = workbook.Sheets[firstSheetName];

    const rows = XLSX.utils.sheet_to_json(worksheet, {
      defval: "",
      raw: false,
    });

    return {
      success: true,
      sheetName: firstSheetName,
      rows,
      totalRows: rows.length,
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      error: "Impossible de lire le fichier Excel.",
    };
  }
}
