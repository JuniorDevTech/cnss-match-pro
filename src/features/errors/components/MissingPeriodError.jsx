export default function MissingPeriodError() {
  return (
    <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
      <h3 className="font-bold text-amber-700">Période non détectée</h3>

      <p className="text-amber-600 mt-2">
        La période n'a pas pu être extraite du fichier. Vérifiez le nom du
        document.
      </p>
    </div>
  );
}
