# 09 - Standards de Code

## 1. Style TypeScript

- **Pas de `any` :** L'usage de `any` entraîne un échec immédiat du lint.
- **Interfaces :** Préférées aux types pour les définitions d'objets.
- **Typage des Props :** Chaque composant React doit avoir son interface `Props`.

## 2. Conventions de Nommage

- **Fichiers :** `snake_case.ts` ou `PascalCase.tsx` pour les composants.
- **Composants :** Toujours en PascalCase (`MuseumNav.tsx`).
- **Fonctions :** camelCase (`fetchArtifacts`).
- **Constantes :** SCREAMING_SNAKE_CASE.

## 3. Organisation des Fichiers

```
src/
  app/
    components/  # Composants réutilisables
    pages/       # Vues principales (Ères)
    stores/      # Zustand
    hooks/       # Hooks personnalisés
  styles/        # CSS & Thèmes
  assets/        # Modèles 3D, Images, Sons
```
