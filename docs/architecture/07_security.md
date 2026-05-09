# 07 - Sécurité

## 1. Posture de Sécurité

Bien que l'application soit majoritairement statique, nous appliquons des principes de durcissement (hardening).

## 2. Contrôles Appliqués

- **Sanitisation :** Toutes les données issues de fichiers JSON/Markdown externes sont nettoyées avant rendu pour éviter les injections XSS.
- **CSP (Content Security Policy) :** Configuration stricte via meta-tags pour bloquer les scripts tiers non autorisés.
- **Zéro Secret :** Aucune clé API ou secret n'est présent dans le code source. Les éventuelles configurations sensibles passent par des variables d'environnement Vite (`VITE_`).
- **Audit de Dépendances :** Utilisation de `npm audit` en CI pour détecter les bibliothèques vulnérables.

## 3. Respect de la Vie Privée

- Aucun tracking utilisateur intrusif.
- Stockage local uniquement (`localStorage`).
- Pas de cookies de session.
