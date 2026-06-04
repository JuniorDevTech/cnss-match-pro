import toast from "react-hot-toast";

import useBDSStore from "../../store/bdsStore";

import { parseBDSFile } from "../../features/bds/services/parseBDSFile";
import { validateBDSFile } from "../../features/bds/services/validateBDSFile";
import { extractCompany } from "../../features/bds/services/extractCompany";
import { extractPeriod } from "../../features/bds/services/extractPeriod";

export default function useBDSImport() {
  const files = useBDSStore((state) => state.files);
  const addFile = useBDSStore((state) => state.addFile);

  const importBDS = async (file) => {
    try {
      const company = extractCompany(file.name);
      const period = extractPeriod(file.name);

      const alreadyExists = files.some(
        (item) =>
          item.name === file.name &&
          item.company === company &&
          item.period === period,
      );

      if (alreadyExists) {
        toast.error("Ce fichier BDS est déjà importé");

        return {
          success: false,
        };
      }

      const result = await parseBDSFile(file);

      if (!result.success) {
        throw new Error(result.error);
      }

      const rows = result.rows;

      const cnssColumn = validateBDSFile(rows);

      const bdsFile = {
        id: crypto.randomUUID(),

        name: file.name,

        company,

        period,

        employees: result.totalRows,

        sheetName: result.sheetName,

        cnssColumn,

        rows,

        uploadedAt: new Date().toISOString(),

        status: "ready",
      };

      addFile(bdsFile);

      toast.success(
        `✓ ${bdsFile.company}
         • ${bdsFile.period}
         • ${bdsFile.employees} agents`,
      );

      return {
        success: true,
        data: bdsFile,
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
    importBDS,
  };
}
