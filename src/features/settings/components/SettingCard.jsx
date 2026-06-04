import { Settings2 } from "lucide-react";

export default function SettingCard({ title, description, children }) {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-slate-100
        bg-white
        shadow-lg
        shadow-slate-200/40
        transition-all
        duration-300
        hover:shadow-xl
      ">
      {/* Glow Effect */}
      <div
        className="
          absolute
          -right-10
          -top-10
          h-32
          w-32
          rounded-full
          bg-blue-500/5
          blur-3xl
        "
      />

      {/* Header */}
      <div className="relative border-b border-slate-100 p-6">
        <div className="flex items-start gap-4">
          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              bg-blue-50
            ">
            <Settings2 size={22} className="text-blue-600" />
          </div>

          <div className="flex-1">
            <h3 className="text-xl font-bold text-slate-900">{title}</h3>

            <p className="mt-1 text-sm text-slate-500">{description}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative p-6">{children}</div>
    </div>
  );
}
