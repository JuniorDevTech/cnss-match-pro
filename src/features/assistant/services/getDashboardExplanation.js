export default function getDashboardExplanation(stats) {
  return `
Bienvenue sur le tableau de bord CNSS Match Pro.

Cette page vous donne une vue globale de vos données.

📊 Agents analysés : ${stats.totalEmployees}

✅ Agents retrouvés : ${stats.totalFound}

❌ Agents introuvables : ${stats.totalMissing}

📈 Couverture globale : ${stats.coverage}%

Utilisez ces indicateurs pour évaluer rapidement le niveau de conformité des déclarations CNSS.
`;
}
