import { CheckCircle2 } from "lucide-react";

export default function SuccessToast({ message }) {
  return (
    <div className="flex items-center gap-3">
      <CheckCircle2 size={20} className="text-green-600" />

      <span>{message}</span>
    </div>
  );
}
