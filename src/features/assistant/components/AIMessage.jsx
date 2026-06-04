export default function AIMessage({ content, type = "assistant" }) {
  const isAssistant = type === "assistant";

  return (
    <div className={`flex ${isAssistant ? "justify-start" : "justify-end"}`}>
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
          isAssistant ? "bg-slate-100 text-slate-800" : "bg-blue-600 text-white"
        }`}>
        {content}
      </div>
    </div>
  );
}
