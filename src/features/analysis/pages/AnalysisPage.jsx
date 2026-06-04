import DashboardLayout from "../../../layouts/DashboardLayout";

import AnalysisToolbar from "../components/AnalysisToolbar";
import AnalysisSummary from "../components/AnalysisSummary";
import ProjectCard from "../components/ProjectCard";
import FloatingAssistant from "../../assistant/components/FloatingAssistant";

import useAnalysisStore from "../../../store/analysisStore";

export default function AnalysisPage() {
  const results = useAnalysisStore((state) => state.results);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* HEADER */}
        <div>
          <h1 className="text-3xl font-bold">Analyse CNSS</h1>

          <p className="text-slate-500 mt-1">
            Lancez le rapprochement entre les fichiers BDS et la liste du
            personnel.
          </p>
        </div>

        <FloatingAssistant page="analysis" />

        {/* ACTIONS */}
        <AnalysisToolbar />

        {/* KPI ANALYSE */}
        <AnalysisSummary />

        {/* RÉSULTATS */}
        {results.length > 0 ? (
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {results.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-12 text-center shadow-sm">
            <h3 className="text-xl font-semibold">Aucun résultat disponible</h3>

            <p className="text-slate-500 mt-2">
              Importez vos fichiers BDS et votre liste du personnel, puis lancez
              l'analyse.
            </p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
