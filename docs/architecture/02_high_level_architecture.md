# 02 - Architecture de Haut Niveau

## 1. Vue d'Ensemble

L'architecture suit un modèle de **Composants d'Ères** pilotés par un **Store Global**.

```
Visiteur (Navigateur)
        │
        ▼
┌─────────────────────────────────────────┐
│           App Shell (React)             │
│  - Routage (React Router)               │
│  - Moteur d'Accessibilité (N.E.O.)      │
│  - Store d'État (Zustand)               │
└──────────────┬──────────────────────────┘
               │ orchestre
               ▼
┌─────────────────────────────────────────┐
│          Système d'Ères (Module)        │
│  - Scène 3D (R3F)                       │
│  - Mise en page (EraLayout)             │
│  - Artefacts (Interactifs)              │
└──────────────┬──────────────────────────┘
               │ consomme
               ▼
┌─────────────────────────────────────────┐
│          Assets & Contenus              │
│  - Modèles GLB (Draco)                  │
│  - Textures WebP                        │
│  - Données JSON (Histoire)              │
└─────────────────────────────────────────┘
```

## 2. Décisions Architecturales Clés

- **Client-Side Only :** Maximise la rapidité et simplifie le déploiement.
- **Shaders Personnalisés :** Pour recréer les effets d'époque (scintillement CRT).
- **Zustand :** Pour une gestion d'état légère sans le boilerplate de Redux.
