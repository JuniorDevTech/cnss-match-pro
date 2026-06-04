import DashboardLayout from "../../../layouts/DashboardLayout";

import BDSStats from "../components/BDSStats";
import BDSUploader from "../components/BDSUploader";
import BDSFilesTable from "../components/BDSFilesTable";

import FloatingAssistant from "../../assistant/components/FloatingAssistant";

export default function BDSPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Gestion des fichiers BDS</h1>

          <p className="text-slate-500">
            Importez les fichiers CNSS à analyser.
          </p>
        </div>

        <FloatingAssistant page="bds" />

        <BDSStats />

        <BDSUploader />

        <BDSFilesTable />
      </div>
    </DashboardLayout>
  );
}
