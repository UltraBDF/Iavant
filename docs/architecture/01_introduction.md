# 01 - Introduction et Portée

## 1. Objectif

Ce document définit l'architecture logicielle de "L'Internet d'Avant", une application web interactive. L'objectif est de servir de guide de référence pour le développement, garantissant la cohérence des choix techniques et la clarté des frontières entre composants.

## 2. Portée

L'application est une Single Page Application (SPA) riche en graphismes 3D. Elle ne nécessite pas de backend complexe pour la V1, les données étant servies de manière statique.

## 3. Attributs de Qualité

- **UX Fluide :** Pas de saccades pendant les transitions 3D.
- **Accessibilité Native :** L'accessibilité n'est pas une option ajoutée à la fin, mais le cœur du moteur de rendu.
- **Performance :** Optimisation agressive des assets pour un chargement rapide.
