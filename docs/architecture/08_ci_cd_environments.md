# 08 - CI/CD et Environnements

## 1. Environnements

| Nom          | Usage            | URL                           |
| ------------ | ---------------- | ----------------------------- |
| `local`      | Développement    | `localhost:5173`              |
| `preview`    | Validation de PR | URL générée par GitHub/Vercel |
| `production` | Public           | URL finale du projet          |

## 2. Pipeline CI (GitHub Actions)

À chaque Pull Request :

1. **Linting :** `npm run lint` (ESLint + Prettier).
2. **Type-Check :** `tsc --noEmit`.
3. **Build Test :** `npm run build`.
4. **Tests Unitaires :** `npm test` (Vitest).
5. **Audit Accessibilité :** Scan Playwright automatique.

## 3. Déploiement CD

- Auto-déploiement sur l'environnement de production lors du merge sur `main`.
- Invalidation automatique du cache pour les nouveaux assets 3D.
