# 05 - Gestion de l'État Global

## 1. Stratégie d'État

Utilisation de **Zustand** pour une gestion légère et réactive.

### 1.1 Store : `useMuseumStore`

- **Ère Actuelle :** 1-6.
- **Artefacts Visités :** Tracking de progression.
- **Scores Quiz :** Résultats par ère.

### 1.2 Store : `useNEOSettings`

- **Taille Police :** 12-24.
- **Contraste Élevé :** Boolean.
- **Police Dyslexique :** Boolean.
- **Langue :** 'FR' | 'EN'.

## 2. Synchronisation 3D/UI

- La scène 3D émet des événements vers le store global.
- Les composants UI s'abonnent aux sélecteurs pour éviter les re-renders inutiles.
