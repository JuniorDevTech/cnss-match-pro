export function extractPeriod(fileName) {
  const match = fileName.match(/(\d{2})[-_/](\d{4})/);

  if (!match) {
    return "À renseigner";
  }

  const [, month, year] = match;

  return `${month}/${year}`;
}
