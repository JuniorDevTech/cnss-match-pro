import toast from "react-hot-toast";

import useBDSStore from "../../store/bdsStore";
import usePersonnelStore from "../../store/personnelStore";
import useAnalysisStore from "../../store/analysisStore";
import useExportStore from "../../store/exportStore";

export default function useSettings() {
  const clearFiles = useBDSStore((state) => state.clearFiles);

  const clearPersonnel = usePersonnelStore((state) => state.clearPersonnel);

  const clearResults = useAnalysisStore((state) => state.clearResults);

  const history = useExportStore((state) => state.history);

  const clearExports = useExportStore((state) => state.clearHistory);

  const resetApplication = () => {
    clearFiles();
    clearPersonnel();
    clearResults();

    if (clearExports) {
      clearExports();
    }

    localStorage.removeItem("bds-storage");

    localStorage.removeItem("personnel-storage");

    localStorage.removeItem("analysis-storage");

    localStorage.removeItem("export-storage");

    toast.success("Application réinitialisée");
  };

  const getStorageInfo = () => {
    return {
      totalExports: history?.length || 0,
    };
  };

  return {
    resetApplication,
    getStorageInfo,
  };
}
