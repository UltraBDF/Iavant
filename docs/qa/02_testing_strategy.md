# 02 - Stratégie de Test

## 1. Tests Unitaires

- **Target :** `src/app/stores/` et `src/app/utils/`.
- **Exemple :** Vérifier que `useMuseumStore` incrémente correctement le nombre d'artefacts vus.

## 2. Tests d'Intégration

- **Target :** Interaction N.E.O. -> UI.
- **Exemple :** Cliquer sur "Police Dyslexique" et vérifier la présence de la classe CSS sur le `body`.

## 3. Tests de Rendu 3D

- **Target :** `src/app/components/Artifact.tsx`.
- **Exemple :** Vérifier que le canvas Three.js ne crash pas si le modèle `.glb` est manquant (fallback image).

## 4. Tests E2E

- **Target :** Chemin critique.
- **Scénario :** Accueil -> Intro -> Ère 1 -> Ère 2 -> Fin.
