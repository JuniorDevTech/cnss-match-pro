import DashboardLayout from "../../../layouts/DashboardLayout";

import ReconciliationKPIs from "../components/ReconciliationKPIs";
import GlobalStats from "../components/GlobalStats";
import CoverageBar from "../components/CoverageBar";
import CoverageByProject from "../components/CoverageByProject";
import RecentAnalysis from "../components/RecentAnalysis";
import FloatingAssistant from "../../assistant/components/FloatingAssistant";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>

          <p className="text-slate-500 mt-1">
            Vue globale du rapprochement CNSS
          </p>
        </div>

        <FloatingAssistant page="dashboard" />

        <ReconciliationKPIs />

        <GlobalStats />

        <CoverageBar />

        <div className="grid grid-cols-2 gap-6">
          <CoverageByProject />

          <RecentAnalysis />
        </div>
      </div>
    </DashboardLayout>
  );
}
