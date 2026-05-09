# 10 - Stratégie de Test

## 1. Philosophie

- Tester les comportements critiques, pas les détails d'implémentation.
- Priorité à l'accessibilité et au parcours utilisateur.

## 2. Types de Tests

- **Unitaires (60%) :** Logique N.E.O., calculs de progression, formatage des dates historiques.
- **Intégration (30%) :** Interaction entre les composants React et le store Zustand.
- **E2E / Smoke (10%) :** Parcours complet Accueil -> Ère 1 -> Fin.

## 3. Standards de Validation

- Couverture de code > 70% sur les fonctions utilitaires.
- Score Lighthouse Accessibilité = 100 sur les pages clés.
- Zéro erreur de console en production.
