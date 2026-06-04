import { detectPersonnelColumns } from "./detectPersonnelColumns";

export function validatePersonnelFile(rows) {
  const columns = detectPersonnelColumns(rows);

  if (!columns.cnss) {
    throw new Error("Colonne CNSS introuvable");
  }

  if (!columns.project) {
    throw new Error("Colonne Projet introuvable");
  }

  return columns;
}
