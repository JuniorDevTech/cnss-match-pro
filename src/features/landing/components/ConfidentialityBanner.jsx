import { ShieldCheck } from "lucide-react";

export default function ConfidentialityBanner() {
  return (
    <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
      <div className="flex gap-4 items-start">
        <ShieldCheck size={28} className="text-green-600 shrink-0" />

        <div>
          <h3 className="font-bold text-green-800 mb-2">
            Confidentialité garantie
          </h3>

          <p className="text-green-700">
            Toutes les données CNSS restent dans votre navigateur. Aucun fichier
            n'est envoyé à un serveur externe.
          </p>
        </div>
      </div>
    </div>
  );
}
