const COMPANY_MAPPINGS = {
  kirkos: "GROUPE KIRKOS",
  guardium: "GK GUARDIUM",
  gk: "GK GUARDIUM",

  sogea: "SOGEA SATOM",
  colas: "COLAS",
};

export function extractCompany(fileName) {
  const normalized = fileName.toLowerCase();

  const match = Object.keys(COMPANY_MAPPINGS).find((key) =>
    normalized.includes(key),
  );

  if (!match) {
    return "À renseigner";
  }

  return COMPANY_MAPPINGS[match];
}
