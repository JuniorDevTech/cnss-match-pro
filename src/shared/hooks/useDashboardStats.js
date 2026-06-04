import useBDSStore from "../../store/bdsStore";
import usePersonnelStore from "../../store/personnelStore";
import useAnalysisStore from "../../store/analysisStore";
import useExportStore from "../../store/exportStore";

export default function useDashboardStats() {
  const files = useBDSStore((state) => state.files);

  const personnel = usePersonnelStore((state) => state.personnel);

  const results = useAnalysisStore((state) => state.results);

  const exports = useExportStore((state) => state.history);

  const totalEmployees = personnel.length;

  const totalFound = results.reduce((sum, item) => sum + item.foundCount, 0);

  const totalMissing = results.reduce(
    (sum, item) => sum + item.missingCount,
    0,
  );

  const coverage =
    totalEmployees > 0 ? ((totalFound / totalEmployees) * 100).toFixed(2) : 0;

  const projects = results.length;

  const companies = new Set(
    files
      .filter((file) => file.company && file.company !== "À renseigner")
      .map((file) => file.company),
  ).size;

  return {
    filesCount: files.length,
    totalEmployees,
    totalFound,
    totalMissing,
    coverage,
    projects,
    companies,
    exportsCount: exports.length,
  };
}
