import { useState } from "react";
import { Languages, Check, Globe2 } from "lucide-react";

import SettingCard from "./SettingCard";

export default function LanguageSettings() {
  const [language, setLanguage] = useState("fr");

  const languages = [
    {
      code: "fr",
      label: "Français",
      description: "Langue principale de l'application",
      flag: "🇫🇷",
    },

    {
      code: "en",
      label: "English",
      description: "International version",
      flag: "🇬🇧",
    },
  ];

  return (
    <SettingCard
      title="Langue"
      description="Choisissez la langue de l'interface">
      <div className="space-y-4">
        {/* Header */}
        <div
          className="
            flex
            items-center
            gap-3
            rounded-2xl
            bg-blue-50
            p-4
          ">
          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              bg-white
            ">
            <Languages size={24} className="text-blue-600" />
          </div>

          <div>
            <h4 className="font-semibold text-slate-900">
              Langue de l'interface
            </h4>

            <p className="text-sm text-slate-500">
              Modifiez la langue utilisée dans l'application.
            </p>
          </div>
        </div>

        {/* Language Cards */}
        <div className="space-y-3">
          {languages.map((item) => (
            <button
              key={item.code}
              onClick={() => setLanguage(item.code)}
              className={`
                w-full
                rounded-2xl
                border
                p-4
                text-left
                transition-all
                duration-300

                ${
                  language === item.code
                    ? "border-blue-500 bg-blue-50 shadow-md"
                    : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
                }
              `}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="text-2xl">{item.flag}</div>

                  <div>
                    <h5 className="font-semibold text-slate-900">
                      {item.label}
                    </h5>

                    <p className="text-sm text-slate-500">{item.description}</p>
                  </div>
                </div>

                {language === item.code && (
                  <div
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      bg-blue-600
                    ">
                    <Check size={16} className="text-white" />
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Footer */}
        <div
          className="
            flex
            items-center
            gap-2
            rounded-2xl
            border
            border-slate-100
            bg-slate-50
            p-4
            text-sm
            text-slate-500
          ">
          <Globe2 size={16} />
          Les modifications seront appliquées à l'ensemble de l'interface
          utilisateur.
        </div>
      </div>
    </SettingCard>
  );
}
