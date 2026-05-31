# Epic 1 - Fondation et Intro

## Story 1.1 : Initialisation du Projet

**EN TANT QUE** Développeur,
**JE VEUX** une structure de projet React/Vite propre avec Tailwind 4,
**AFIN DE** commencer le développement sans friction technique.

**Critères d'Acceptation :**

- Repo initialisé avec TypeScript.
- Dossiers `docs/`, `src/app/components`, `src/app/pages` créés.
- Scripts `npm run dev` et `npm run build` fonctionnels.
- Linter ESLint et Prettier configurés selon les standards `docs/architecture/09_coding_standards.md`.

## Story 1.2 : Écran de Chargement (AppLoader)

**EN TANT QU'** Utilisateur,
**JE VEUX** voir une progression claire du chargement des assets 3D,
**AFIN DE** patienter pendant la préparation de l'expérience immersive.

**Critères d'Acceptation :**

- Utilisation de `THREE.DefaultLoadingManager` pour traquer les assets.
- Affichage du pourcentage en temps réel.
- Animation de transition fluide vers la scène d'introduction.

## Story 1.3 : Animation de Réseau Initiale

**EN TANT QU'** Utilisateur,
**JE VEUX** être accueilli par une animation Three.js symbolisant l'interconnexion,
**AFIN D'** entrer immédiatement dans l'univers technologique du projet.

**Critères d'Acceptation :**

- Scène de particules 3D interactive (réagit à la souris).
- Bouton "Entrer dans le Musée" apparaissant après l'animation.
