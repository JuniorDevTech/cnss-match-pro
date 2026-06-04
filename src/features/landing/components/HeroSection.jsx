import StartButton from "./StartButton";

export default function HeroSection() {
  return (
    <section className="text-center">
      <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium mb-6">
        Outil de rapprochement CNSS
      </span>

      <h1 className="text-5xl font-bold text-slate-900 leading-tight max-w-4xl mx-auto">
        Vérifiez les déclarations CNSS de vos projets en quelques secondes
      </h1>

      <p className="text-slate-600 text-lg max-w-2xl mx-auto mt-6">
        Importez vos fichiers BDS et votre liste du personnel, lancez l'analyse
        et identifiez immédiatement les agents déclarés ou introuvables.
      </p>

      <div className="mt-10">
        <StartButton />
      </div>
    </section>
  );
}
