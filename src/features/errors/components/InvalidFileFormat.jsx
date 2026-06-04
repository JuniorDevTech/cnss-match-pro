export default function InvalidFileFormat() {
  return (
    <div className="bg-red-50 border border-red-200 rounded-2xl p-5">
      <h3 className="font-bold text-red-700">Format invalide</h3>

      <p className="text-red-600 mt-2">
        Seuls les formats XLSX, XLS et CSV sont acceptés.
      </p>
    </div>
  );
}
