# Architecture Document - Index

Référence technique pour le développement de l'application.

## Sommaire des Shards

1. **[Introduction & Portée](architecture/01_introduction.md)**
2. **[Architecture de Haut Niveau](architecture/02_high_level_architecture.md)**
3. **[Stack Technique](architecture/03_tech_stack.md)**
4. **[Modèles de Données](architecture/04_data_models.md)**
5. **[Composants Système](architecture/05_components.md)**
6. **[Workflows Coeurs](architecture/06_core_workflows.md)**
7. **[Sécurité & Hardening](architecture/07_security.md)**
8. **[CI/CD & Environnements](architecture/08_ci_cd_environments.md)**
9. **[Standards de Code](architecture/09_coding_standards.md)**
10. **[Stratégie de Test](10_test_strategy.md)**

## Principes Directeurs

- **Modulaire :** Chaque ère est isolée.
- **Déterministe :** Rendu prévisible sans dépendances réseau bloquantes pendant la navigation.
- **Secure-by-default :** Protection contre les injections de scripts et scripts tiers.
