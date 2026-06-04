import useBDSStore from "../../../store/bdsStore";
import usePersonnelStore from "../../../store/personnelStore";
import useAnalysisStore from "../../../store/analysisStore";
import useExportStore from "../../../store/exportStore";

import getDashboardExplanation from "../../assistant/services/getDashboardExplanation";
import getBDSExplanation from "../../assistant/services/getBDSExplanation";
import getPersonnelExplanation from "../../assistant/services/getPersonnelExplanation";
import getAnalysisExplanation from "../../assistant/services/getAnalysisExplanation";
import getExportExplanation from "../../assistant/services/getExportExplanation";
import getSettingsExplanation from "../../assistant/services/getSettingsExplanation";

export default function useAssistant() {
  const files = useBDSStore((state) => state.files);

  const personnel = usePersonnelStore((state) => state.personnel);

  const results = useAnalysisStore((state) => state.results);

  const exportsHistory = useExportStore((state) => state.history);

  const totalEmployees = personnel.length;

  const totalFound = results.reduce((sum, item) => sum + item.foundCount, 0);

  const totalMissing = results.reduce(
    (sum, item) => sum + item.missingCount,
    0,
  );

  const coverage =
    totalEmployees > 0 ? ((totalFound / totalEmployees) * 100).toFixed(2) : 0;

  const ask = (page) => {
    switch (page) {
      case "dashboard":
        return getDashboardExplanation({
          totalEmployees,
          totalFound,
          totalMissing,
          coverage,
        });

      case "bds":
        return getBDSExplanation(files);

      case "personnel":
        return getPersonnelExplanation(personnel);

      case "analysis":
        return getAnalysisExplanation(results);

      case "export":
        return getExportExplanation(exportsHistory.length);

      case "settings":
        return getSettingsExplanation();

      default:
        return `
Bienvenue dans CNSS Match Pro.

Cette application permet de comparer les déclarations CNSS avec votre liste du personnel afin de mesurer le niveau de couverture des agents.
`;
    }
  };

  return {
    ask,
  };
}
