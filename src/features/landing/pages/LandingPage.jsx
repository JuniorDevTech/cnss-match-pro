import HeroSection from "../components/HeroSection";
import ConfidentialityBanner from "../components/ConfidentialityBanner";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* NAVBAR */}

        <header className="h-20 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-slate-900">CNSS Match Pro</h1>

          <button className="px-5 py-2 rounded-xl border border-slate-300 hover:bg-slate-100">
            Documentation
          </button>
        </header>

        {/* HERO */}

        <div className="py-20">
          <HeroSection />
        </div>

        {/* CONFIDENTIALITÉ */}

        <div className="max-w-4xl mx-auto">
          <ConfidentialityBanner />
        </div>

        {/* FEATURES */}

        <section className="py-20">
          <div className="grid md:grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            <FeatureCard
              title="Importer"
              description="Importez les fichiers BDS et les listes du personnel au format Excel."
            />

            <FeatureCard
              title="Analyser"
              description="Comparez automatiquement les agents déclarés et les agents attendus."
            />

            <FeatureCard
              title="Exporter"
              description="Générez des rapports Excel détaillés par projet."
            />
          </div>
        </section>
      </div>
    </div>
  );
}

function FeatureCard({ title, description }) {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-sm">
      <h3 className="font-bold text-xl mb-3">{title}</h3>

      <p className="text-slate-600">{description}</p>
    </div>
  );
}
