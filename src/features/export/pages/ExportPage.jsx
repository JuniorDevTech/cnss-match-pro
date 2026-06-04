import DashboardLayout from "../../../layouts/DashboardLayout";

import ExportCards from "../components/ExportCards";
import ExportHistory from "../components/ExportHistory";

import FloatingAssistant from "../../assistant/components/FloatingAssistant";

export default function ExportPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Centre d'Export</h1>

          <p className="text-slate-500">
            Exportez les rapports CNSS par projet.
          </p>
        </div>

        <FloatingAssistant page="export" />

        <ExportCards />

        <ExportHistory />
      </div>
    </DashboardLayout>
  );
}
