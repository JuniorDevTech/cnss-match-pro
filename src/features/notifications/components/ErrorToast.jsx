import { XCircle } from "lucide-react";

export default function ErrorToast({ message }) {
  return (
    <div className="flex items-center gap-3">
      <XCircle size={20} className="text-red-600" />

      <span>{message}</span>
    </div>
  );
}
