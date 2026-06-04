import DashboardLayout from "../../../layouts/DashboardLayout";

import PersonnelStats from "../components/PersonnelStats";
import PersonnelUploader from "../components/PersonnelUploader";
import PersonnelTable from "../components/PersonnelTable";

import FloatingAssistant from "../../assistant/components/FloatingAssistant";

import PersonnelTemplateButton from "../components/PersonnelTemplateButton";
import PersonnelExampleButton from "../components/PersonnelExampleButton";
import PersonnelFullExampleButton from "../components/PersonnelFullExampleButton";

import { useState } from "react";

import PersonnelFilters from "../components/PersonnelFilters";

export default function PersonnelPage() {
  const [search, setSearch] = useState("");
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Liste du Personnel</h1>

            <p className="text-slate-500 mt-1">
              Importez la liste interne des agents.
            </p>
          </div>

          <div className="flex gap-3 flex-wrap">
            <PersonnelTemplateButton />
            <PersonnelExampleButton />
            <PersonnelFullExampleButton />
          </div>
        </div>
        <FloatingAssistant page="personnel" />

        <PersonnelFilters search={search} setSearch={setSearch} />

        <PersonnelStats />

        <PersonnelUploader />

        <PersonnelTable />
      </div>
    </DashboardLayout>
  );
}
