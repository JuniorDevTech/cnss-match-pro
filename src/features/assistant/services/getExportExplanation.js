export default function getExportExplanation(exportsCount) {
  return `
Cette page permet de générer des rapports Excel.

📤 Exports réalisés : ${exportsCount}

Chaque export contient :

• Une feuille Agents trouvés
• Une feuille Agents introuvables
• Une feuille Résumé

Ces rapports peuvent être transmis aux équipes RH ou aux contrôleurs CNSS.
`;
}
