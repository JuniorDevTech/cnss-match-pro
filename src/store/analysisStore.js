import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAnalysisStore = create(
  persist(
    (set) => ({
      results: [],

      setResults: (results) =>
        set({
          results,
        }),

      clearResults: () =>
        set({
          results: [],
        }),
    }),
    {
      name: "analysis-storage",
    },
  ),
);

export default useAnalysisStore;
