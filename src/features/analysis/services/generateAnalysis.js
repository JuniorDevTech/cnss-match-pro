import { groupEmployees } from "./groupEmployees";
import { matchEmployees } from "./matchEmployees";
import { calculateCoverage } from "./calculateCoverage";

export function generateAnalysis(personnel, bdsFiles) {
  const grouped = groupEmployees(personnel);

  const results = [];

  Object.entries(grouped).forEach(([key, employees]) => {
    const [project, company, payrollDate] = key.split("|");

    const matchingFiles = bdsFiles.filter(
      (file) => file.period === payrollDate,
    );

    const { found, missing } = matchEmployees(employees, matchingFiles);

    results.push({
      id: crypto.randomUUID(),

      project,
      company,
      payrollDate,

      total: employees.length,

      foundCount: found.length,

      missingCount: missing.length,

      coverage: calculateCoverage(employees.length, found.length),

      foundEmployees: found,

      missingEmployees: missing,
    });
  });

  return results;
}
