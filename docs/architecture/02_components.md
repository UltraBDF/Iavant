# 02 - Architecture des Composants

## 1. Catégories de Composants

### 1.1 Layout

- **EraLayout :** Wrapper maître pour toutes les ères. Gère le SEO, la navigation et le fond.
- **MuseumNav :** Barre de navigation globale contextuelle.

### 1.2 Fonctionnalités

- **NEO Assistant :** Overlay d'accessibilité centralisé (Singleton-like).
- **Artifact :** Unité atomique de contenu. Affiche un item en 3D ou 2D.

### 1.3 Système

- **AppLoader :** Orchestre le pré-chargement des assets.
- **GlobalErrorBoundary :** Fallback en cas de crash 3D.

## 2. Design Pattern : Le Module d'Ère

Chaque ère suit une structure stricte :

```typescript
interface EraModule {
  theme: EraTheme; // Classes Tailwind ou variables CSS
  artifacts: Artifact[]; // Liste des pièces de musée
  background: ReactNode; // Scène 3D ou Canvas
  transition: Transition; // Transition Framer Motion spécifique
}
```
