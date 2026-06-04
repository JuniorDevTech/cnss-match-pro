import toast from "react-hot-toast";

import useExportStore from "../../store/exportStore";

import { exportProjectExcel } from "../../features/export/services/excelExporter";

export default function useExport() {
  const addExport = useExportStore((state) => state.addExport);

  const exportProject = (project) => {
    exportProjectExcel(project);

    addExport({
      id: crypto.randomUUID(),
      date: new Date().toLocaleString(),
      project: project.project,
      company: project.company,
    });

    toast.success("Export généré");
  };

  return {
    exportProject,
  };
}
