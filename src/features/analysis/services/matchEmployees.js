export function matchEmployees(employees, bdsFiles) {
  const found = [];
  const missing = [];

  const cnssSet = new Set();

  bdsFiles.forEach((file) => {
    file.rows.forEach((row) => {
      const value = row[file.cnssColumn];

      if (value) {
        cnssSet.add(String(value).trim());
      }
    });
  });

  employees.forEach((employee) => {
    const cnss = String(employee.cnss).trim();

    if (cnssSet.has(cnss)) {
      found.push(employee);
    } else {
      missing.push(employee);
    }
  });

  return {
    found,
    missing,
  };
}
