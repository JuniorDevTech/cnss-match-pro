export default function MissingCNSSColumn() {
  return (
    <div className="bg-red-50 border border-red-200 rounded-2xl p-5">
      <h3 className="font-bold text-red-700">Colonne CNSS introuvable</h3>

      <p className="text-red-600 mt-2">
        Vérifiez que votre fichier contient une colonne CNSS, Matricule ou
        Immatriculation.
      </p>
    </div>
  );
}
