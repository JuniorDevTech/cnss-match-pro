import { create } from "zustand";
import { persist } from "zustand/middleware";

const useBDSStore = create(
  persist(
    (set) => ({
      files: [],

      addFile: (file) =>
        set((state) => {
          const alreadyExists = state.files.some(
            (item) =>
              item.name === file.name &&
              item.period === file.period &&
              item.company === file.company,
          );

          if (alreadyExists) {
            return state;
          }

          return {
            files: [...state.files, file],
          };
        }),

      removeFile: (id) =>
        set((state) => ({
          files: state.files.filter((file) => file.id !== id),
        })),

      clearFiles: () =>
        set({
          files: [],
        }),
    }),
    {
      name: "bds-storage",
    },
  ),
);

export default useBDSStore;
