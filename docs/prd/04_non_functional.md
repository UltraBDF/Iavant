# 04 - Exigences Techniques & Non-Fonctionnelles

## 1. Performance (NFR)

- **NFR1.1 (FCP) :** First Contentful Paint < 1.0s.
- **NFR1.2 (LCP) :** Largest Contentful Paint < 2.5s.
- **NFR1.3 (Asset Size) :** Bundle principal < 300kB, Assets 3D optimisés via Draco.

## 2. Accessibilité (NFR)

- **NFR2.1 :** 100% de conformité WCAG 2.1 AA.
- **NFR2.2 :** Support des lecteurs d'écran (NVDA/JAWS/VoiceOver).
- **NFR2.3 :** Mode "Sans Mouvement" pour les troubles vestibulaires.

## 3. Fiabilité (NFR)

- **NFR3.1 :** Compatible avec les 2 dernières versions de Chrome, Safari, Firefox.
- **NFR3.2 :** Fallback gracieux si Three.js échoue (version 2D).
- **NFR3.3 :** Immuabilité des contenus face à un internet inconstant.
