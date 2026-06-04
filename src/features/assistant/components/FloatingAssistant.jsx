import { useState } from "react";
import { X } from "lucide-react";

import useAssistant from "../hooks/useAssistant";
import AIChat from "./AIChat";
import AIButton from "./AIButton";

export default function FloatingAssistant({ page }) {
  const [open, setOpen] = useState(false);

  const { ask } = useAssistant();

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <AIButton onClick={() => setOpen(!open)} label="IA" />
      </div>

      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-96 bg-white rounded-3xl shadow-xl border border-slate-200 p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-lg">Assistant IA</h3>

            <button
              onClick={() => setOpen(false)}
              className="p-1 rounded-lg hover:bg-slate-100">
              <X size={18} />
            </button>
          </div>

          <AIChat message={ask(page)} />
        </div>
      )}
    </>
  );
}
