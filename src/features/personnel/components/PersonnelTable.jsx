import { useState } from "react";
import usePersonnelStore from "../../../store/personnelStore";
import PersonnelRow from "./PersonnelRow";

export default function PersonnelTable() {
  const personnel = usePersonnelStore((state) => state.personnel);

  const [search, setSearch] = useState("");

  const filteredPersonnel = personnel.filter((employee) =>
    Object.values(employee)
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase()),
  );

  if (!personnel.length) {
    return (
      <div className="bg-white rounded-3xl p-12 text-center shadow-sm">
        <h3 className="text-lg font-semibold">Aucun agent importé</h3>

        <p className="text-slate-500 mt-2">
          Importez votre fichier personnel pour commencer.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
      {/* Search */}
      <div className="p-4 border-b border-slate-200">
        <input
          type="text"
          placeholder="Rechercher un agent..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
        />
      </div>

      <table className="w-full">
        <thead className="bg-slate-50">
          <tr>
            <th className="text-left px-4 py-4">CNSS</th>

            <th className="text-left px-4 py-4">Nom</th>

            <th className="text-left px-4 py-4">Projet</th>

            <th className="text-left px-4 py-4">Société</th>

            <th className="text-left px-4 py-4">Date Periode </th>
          </tr>
        </thead>

        <tbody>
          {filteredPersonnel.map((employee, index) => (
            <PersonnelRow key={index} employee={employee} />
          ))}
        </tbody>
      </table>

      {!filteredPersonnel.length && (
        <div className="p-8 text-center text-slate-500">
          Aucun résultat trouvé.
        </div>
      )}
    </div>
  );
}
