export default function getPersonnelExplanation(personnel) {
  return `
Cette page contient la liste interne du personnel.

👥 Agents importés : ${personnel.length}

Chaque agent doit contenir :

• Un numéro CNSS
• Un nom
• Un projet
• Une société
• Une période

Ces informations seront utilisées lors de l'analyse CNSS.
`;
}
