import { create } from "zustand";
import { persist } from "zustand/middleware";

const useExportStore = create(
  persist(
    (set) => ({
      history: [],

      addExport: (item) =>
        set((state) => ({
          history: [item, ...state.history],
        })),

      clearHistory: () =>
        set({
          history: [],
        }),
    }),
    {
      name: "export-storage",
    },
  ),
);

export default useExportStore;
