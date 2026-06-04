import DashboardLayout from "../../../layouts/DashboardLayout";

import GeneralSettings from "../components/GeneralSettings";
import LanguageSettings from "../components/LanguageSettings";
import StorageSettings from "../components/StorageSettings";
import DangerZone from "../components/DangerZone";

import FloatingAssistant from "../../assistant/components/FloatingAssistant";

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Paramètres</h1>

          <p className="text-slate-500">Configuration de l'application</p>
        </div>
        <FloatingAssistant page="settings" />

        <GeneralSettings />

        <LanguageSettings />

        <StorageSettings />

        <DangerZone />
      </div>
    </DashboardLayout>
  );
}
