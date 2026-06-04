export function groupEmployees(employees) {
  const groups = {};

  employees.forEach((employee) => {
    const key = `${employee.project}|${employee.company}|${employee.payrollDate}`;

    if (!groups[key]) {
      groups[key] = [];
    }

    groups[key].push(employee);
  });

  return groups;
}
