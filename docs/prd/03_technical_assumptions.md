# 03 - Hypothèses Techniques

## 1. Structure du Dépôt

Monorepo React (Vite) avec une organisation par "shards" de documentation et composants.

## 2. Architecture du Service

- **Framework :** React 18+ pour la gestion de l'UI réactive.
- **Moteur Graphique :** Three.js via @react-three/fiber pour les scènes immersives.
- **Transitions :** Framer Motion pour les changements d'ères fluides.
- **État Global :** Zustand pour persister les réglages de N.E.O. et la progression.

## 3. Fournisseurs de Données

- **Fichiers Locaux :** Les contenus historiques sont stockés en JSON/Markdown pour éviter des appels API externes lents.
- **Assets 3D :** Formats `.glb` compressés avec Draco.

## 4. Tests

- Vitest pour la logique métier (N.E.O., calculs de progression).
- Playwright pour les tests de bout en bout et les audits d'accessibilité automatiques.
