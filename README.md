# Virtual Internet Museum

Par BOUDES Enzo, BOURLARD Alan, DAUGÉ Alexis, DAUX Marc-Antoine

## 🚀 Développement

1. Installer les dépendances :
   ```bash
   npm install
   ```
2. Lancer le serveur de développement :
   ```bash
   npm run dev
   ```

## 🛠️ Qualité & CI/CD

- **Linting :** `npm run lint` (ESLint)
- **Type-check :** `npm run type-check` (TypeScript)
- **Formatage :** `npm run format` (Prettier)
- **Tests :** `npm run test` (Vitest)
- **Build :** `npm run build`

Le projet utilise **GitHub Actions** pour valider chaque PR (lint, type-check, tests, build).

## 🐳 Déploiement Pro (Docker)

Le projet est prêt pour une mise en production via Docker :

1. Construire et lancer l'image localement :
   ```bash
   docker-compose up --build
   ```
2. Accéder à l'application sur `http://localhost:8080`.

Lorsqu'un tag (ex: `v1.0.0`) est poussé sur GitHub, une image Docker est automatiquement publiée sur le **GitHub Container Registry (GHCR)**.
