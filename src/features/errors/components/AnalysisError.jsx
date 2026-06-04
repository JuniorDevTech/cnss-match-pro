export default function AnalysisError() {
  return (
    <div className="bg-red-50 border border-red-200 rounded-2xl p-5">
      <h3 className="font-bold text-red-700">Analyse impossible</h3>

      <p className="text-red-600 mt-2">
        Importez au moins un fichier BDS et une liste du personnel avant de
        lancer l'analyse.
      </p>
    </div>
  );
}
