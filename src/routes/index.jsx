import { createBrowserRouter } from "react-router-dom";

import LandingPage from "../features/landing/pages/LandingPage";

import DashboardPage from "../features/dashboard/pages/DashboardPage";
import BDSPage from "../features/bds/pages/BDSPage";
import PersonnelPage from "../features/personnel/pages/PersonnelPage";
import AnalysisPage from "../features/analysis/pages/AnalysisPage";
import ExportPage from "../features/export/pages/ExportPage";
import SettingsPage from "../features/settings/pages/SettingsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },

  {
    path: "/dashboard",
    element: <DashboardPage />,
  },

  {
    path: "/bds",
    element: <BDSPage />,
  },

  {
    path: "/personnel",
    element: <PersonnelPage />,
  },

  {
    path: "/analysis",
    element: <AnalysisPage />,
  },

  {
    path: "/exports",
    element: <ExportPage />,
  },

  {
    path: "/settings",
    element: <SettingsPage />,
  },
]);
