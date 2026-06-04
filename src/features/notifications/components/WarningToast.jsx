import { AlertTriangle } from "lucide-react";

export default function WarningToast({ message }) {
  return (
    <div className="flex items-center gap-3">
      <AlertTriangle size={20} className="text-amber-500" />

      <span>{message}</span>
    </div>
  );
}
