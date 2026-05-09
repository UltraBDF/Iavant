# Epic 5 - Polissage et CI/CD

## Story 5.1 : Optimisation des Assets 3D

**EN TANT QUE** Développeur,
**JE VEUX** compresser et optimiser tous les modèles GLB,
**AFIN DE** garantir un chargement rapide même sur connexion mobile.

**Critères d'Acceptation :**

- Passage de tous les modèles dans `gltf-pipeline` (Draco).
- Textures converties en WebP (max 1024px).
- Audit de poids : < 5MB pour l'ère la plus lourde.

## Story 5.2 : Mise en place du Pipeline GitHub Actions

**EN TANT QUE** Responsable Qualité,
**JE VEUX** que chaque commit soit testé automatiquement,
**AFIN D'** éviter les régressions sur l'accessibilité et les fonctionnalités.

**Critères d'Acceptation :**

- Workflow `.github/workflows/ci.yml` créé.
- Étape `lint` et `type-check` bloquantes.
- Étape `test` (Vitest) exécutée à chaque PR.

## Story 5.3 : Rapport de Fin de Projet

**EN TANT QU'** Utilisateur,
**JE VEUX** voir un récapitulatif de ma visite à la fin,
**AFIN DE** conserver une trace pédagogique.

**Critères d'Acceptation :**

- Génération d'un résumé des artefacts visités.
- Bouton de partage social stylisé.
- Crédits de l'équipe projet ENSC.
