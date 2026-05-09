# 06 - Workflows Coeurs

## 1. Initialisation de l'Application

1. Chargement des réglages N.E.O. depuis `localStorage`.
2. Vérification de `hasSeenIntro`.
3. Si non vu : Lancement de `NetworkAnimation`.
4. Si vu : Redirection vers `HomePage` (Timeline).

## 2. Transition entre Ères

1. Déclenchement via `MuseumNav`.
2. Lancement de la transition Framer Motion (fade out).
3. Déchargement de la scène 3D actuelle pour libérer la mémoire.
4. Chargement de la nouvelle ère et de ses assets.
5. Fade in de la nouvelle interface.

## 3. Mise à jour de l'Accessibilité

1. L'utilisateur change un paramètre dans le menu N.E.O.
2. Le store Zustand met à jour l'état.
3. Les composants abonnés réagissent (ex: changement de police).
4. Le store sauvegarde les changements dans `localStorage`.
