import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function StartButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/dashboard")}
      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition">
      Commencer l'analyse
      <ArrowRight size={18} />
    </button>
  );
}
