import toast from "react-hot-toast";

import usePersonnelStore from "../../store/personnelStore";

import { parsePersonnelFile } from "../../features/personnel/services/parsePersonnelFile";
import { validatePersonnelFile } from "../../features/personnel/services/validatePersonnelFile";

export default function usePersonnelImport() {
  const addPersonnel = usePersonnelStore((state) => state.addPersonnel);

  const importPersonnel = async (file) => {
    try {
      const result = await parsePersonnelFile(file);

      if (!result.success) {
        throw new Error(result.error);
      }

      const columns = validatePersonnelFile(result.rows);

      const normalized = result.rows.map((row) => ({
        cnss: row[columns.cnss] || "",
        name: row[columns.name] || "",
        project: row[columns.project] || "",
        company: row[columns.company] || "",
        payrollDate: row[columns.payrollDate] || "",
      }));

      const before = usePersonnelStore.getState().personnel.length;

      addPersonnel(normalized);

      const after = usePersonnelStore.getState().personnel.length;

      const added = after - before;

      toast.success(`${added} nouveaux agents importés`);

      return {
        success: true,
        data: normalized,
      };
    } catch (error) {
      toast.error(error.message);

      return {
        success: false,
        error: error.message,
      };
    }
  };

  return {
    importPersonnel,
  };
}
