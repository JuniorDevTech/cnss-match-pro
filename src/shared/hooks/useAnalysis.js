import toast from "react-hot-toast";

import useBDSStore from "../../store/bdsStore";
import usePersonnelStore from "../../store/personnelStore";
import useAnalysisStore from "../../store/analysisStore";

import { generateAnalysis } from "../../features/analysis/services/generateAnalysis";

export default function useAnalysis() {
  const files = useBDSStore((state) => state.files);

  const personnel = usePersonnelStore((state) => state.personnel);

  const setResults = useAnalysisStore((state) => state.setResults);

  const runAnalysis = () => {
    if (!files.length) {
      return toast.error("Importez un fichier BDS");
    }

    if (!personnel.length) {
      return toast.error("Importez la liste du personnel");
    }

    const results = generateAnalysis(personnel, files);

    setResults(results);

    toast.success("Analyse terminée");
  };

  return {
    runAnalysis,
  };
}
