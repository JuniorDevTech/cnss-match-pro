import { detectCNSSColumn } from "./detectCNSSColumn";

export function validateBDSFile(rows) {
  const cnssColumn = detectCNSSColumn(rows);

  if (!cnssColumn) {
    throw new Error("Colonne CNSS introuvable");
  }

  return cnssColumn;
}
