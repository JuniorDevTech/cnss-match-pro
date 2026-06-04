export function calculateCoverage(total, found) {
  if (!total) return 0;

  return Number(((found / total) * 100).toFixed(2));
}
