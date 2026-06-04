import { create } from "zustand";
import { persist } from "zustand/middleware";

const usePersonnelStore = create(
  persist(
    (set) => ({
      personnel: [],

      addPersonnel: (data) =>
        set((state) => {
          const existingKeys = new Set(
            state.personnel.map(
              (employee) =>
                `${employee.cnss}-${employee.project}-${employee.payrollDate}`,
            ),
          );

          const newPersonnel = data.filter(
            (employee) =>
              !existingKeys.has(
                `${employee.cnss}-${employee.project}-${employee.payrollDate}`,
              ),
          );

          return {
            personnel: [...state.personnel, ...newPersonnel],
          };
        }),

      removePersonnel: (cnss) =>
        set((state) => ({
          personnel: state.personnel.filter(
            (employee) => employee.cnss !== cnss,
          ),
        })),

      clearPersonnel: () =>
        set({
          personnel: [],
        }),
    }),
    {
      name: "personnel-storage",
    },
  ),
);

export default usePersonnelStore;
