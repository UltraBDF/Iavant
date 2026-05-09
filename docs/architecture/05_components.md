# 05 - Composants Système

## 1. `AppLoader` (`/components/Loader.tsx`)

- Calcule le poids total des assets 3D via `THREE.DefaultLoadingManager`.
- Affiche une barre de progression stylisée selon l'ère de destination.

## 2. `NEO` (`/components/NEO.tsx`)

- Composant singleton persistant sur toutes les pages.
- Applique dynamiquement des classes au `body` (ex: `.font-dyslexic`, `.high-contrast`).

## 3. `EraLayout` (`/components/EraLayout.tsx`)

- Gère la structure commune : Titre, Navigation, Container 3D.
- Injecte les variables CSS spécifiques à l'ère.

## 4. `ArtifactView` (`/components/Artifact.tsx`)

- Encapsule le canvas R3F pour un artefact spécifique.
- Gère l'interaction (rotation, zoom, focus).
