# 07 - Pipeline de Rendu & Shaders

## 1. Structure de Scène

- **Scène Globale :** Éclairage partagé.
- **Scènes d'Ères :** Montées/Démontées dynamiquement avec leur propre Skybox.

## 2. Stack Post-Processing

- **Bloom :** Éclat rétro pour l'Ère 1 et futuriste pour l'Ère 6.
- **Chromatic Aberration :** Utilisé pendant les transitions temporelles.
- **Vignette :** Focus sur les artefacts.

## 3. Shaders Personnalisés

- **RetroTerminalShader :** Effet CRT, lignes de scan et scintillement pour l'Ère 1.
- **NetworkWaveShader :** Animation des impulsions de données.
- **DistortionShader :** Appliqué lors des chargements.
