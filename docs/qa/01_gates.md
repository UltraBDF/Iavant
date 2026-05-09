# 01 - Quality Gates

## 1. Portes Automatisées (GitHub Actions)

- **Gate : Static Analysis**
  - Commande : `npm run lint && npm run type-check`
  - Critère : Zéro erreur autorisée.
- **Gate : Core Logic**
  - Commande : `npm test`
  - Critère : 100% de réussite sur les tests unitaires.
- **Gate : Accessibility Audit**
  - Commande : `playwright test --project=accessibility`
  - Critère : Score Lighthouse > 95 sur la Home et une Ère type.

## 2. Portes Manuelles (Revue de Code)

- **Vérification N.E.O. :** Est-ce que le nouveau composant supporte le changement de police et de contraste ?
- **Vérification Assets :** Le poids des nouveaux modèles 3D est-il justifié et optimisé ?
- **Vérification Historique :** Le contenu textuel est-il conforme aux recherches de l'ENSC ?
