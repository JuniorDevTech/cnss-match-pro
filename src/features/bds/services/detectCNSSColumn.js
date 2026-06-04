const keywords = ["cnss", "immatriculation", "matricule"];

export function detectCNSSColumn(rows) {
  if (!rows.length) return null;

  const headers = Object.keys(rows[0]);

  const found = headers.find((header) =>
    keywords.some((keyword) => header.toLowerCase().includes(keyword)),
  );

  return found || null;
}
