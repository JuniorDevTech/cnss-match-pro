import { Bot } from "lucide-react";

export default function AIButton({ onClick, label = "Assistant IA" }) {
  return (
    <button
      onClick={onClick}
      className="
        flex items-center gap-2
        px-4 py-2
        bg-blue-600
        hover:bg-blue-700
        text-white
        rounded-xl
        transition
        shadow-sm
      ">
      <Bot size={18} />

      <span>{label}</span>
    </button>
  );
}
