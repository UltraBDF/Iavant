# 03 - Sécurité & Stratégie CI/CD

## 1. Approche Sécurité

- **Prévention XSS :** Pas de `dangerouslySetInnerHTML`.
- **CORS & CSP :** Politique stricte pour les scripts et assets externes.
- **Audit Dépendances :** `npm audit` régulier en CI.

## 2. Pipeline CI (GitHub Actions)

Chaque PR doit passer les "Quality Gates" :

1. **Lint & Style :** ESLint et Prettier.
2. **Type Check :** `tsc --noEmit`.
3. **Unit Tests :** Vitest (cible 70% couverture).
4. **Accessibility Scan :** Audit `axe-core` automatisé.

## 3. Déploiement (CD)

- **Environnements Preview :** Déploiement automatique des PR.
- **Production :** Merge sur `main` après validation manuelle et auto.
- **Cache :** Stratégie agressive pour les modèles `.glb`.
