export default function getBDSExplanation(files) {
  return `
Cette page permet d'importer les fichiers BDS transmis par les entreprises.

📁 Fichiers importés : ${files.length}

Le système détecte automatiquement :

• Les numéros CNSS
• La société concernée
• La période de paie

Ces données serviront à réaliser le rapprochement avec votre liste du personnel.
`;
}
