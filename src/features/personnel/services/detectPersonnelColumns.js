const mappings = {
  cnss: ["cnss", "immatriculation", "matricule"],

  name: ["nom", "nom prénom", "nom et prénom"],

  project: ["projet", "chantier", "marché"],

  company: ["société", "entreprise"],

  payrollDate: ["date début", "date paie", "date"],
};

export function detectPersonnelColumns(rows) {
  if (!rows.length) return null;

  const headers = Object.keys(rows[0]);

  const detected = {};

  Object.entries(mappings).forEach(([key, keywords]) => {
    const match = headers.find((header) =>
      keywords.some((keyword) => header.toLowerCase().includes(keyword)),
    );

    detected[key] = match || null;
  });

  return detected;
}
