# 06 - Optimisation des Assets & 3D

## 1. Pipeline Assets 3D

- **Format :** `.glb` (GL Transmission Format).
- **Compression :** Draco pour la géométrie.
- **Textures :** `.webp` limité à 1024x1024.

## 2. Chargement Dynamique

- **LOD (Level of Detail) :** Réduction de la complexité des modèles selon la distance.
- **Initialisation Paresseuse :** Le canvas 3D ne démarre que lors de l'entrée dans le musée.

## 3. Optimisations Rendu

- **Instanced Rendering :** Pour les éléments répétitifs (réseau de particules).
- **Frame Rate Throttling :** Réduction du rendu si l'onglet est inactif.
