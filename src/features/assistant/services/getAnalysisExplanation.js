export default function getAnalysisExplanation(results) {
  if (!results.length) {
    return `
Aucune analyse n'a encore été effectuée.

Importez :
• Les fichiers BDS
• La liste du personnel

Puis lancez l'analyse.
`;
  }

  const totalProjects = results.length;

  const found = results.reduce((sum, item) => sum + item.foundCount, 0);

  const missing = results.reduce((sum, item) => sum + item.missingCount, 0);

  return `
Cette page réalise le rapprochement CNSS.

📂 Projets analysés : ${totalProjects}

✅ Agents retrouvés : ${found}

❌ Agents introuvables : ${missing}

Les agents introuvables nécessitent généralement une vérification des déclarations ou des fichiers importés.
`;
}
