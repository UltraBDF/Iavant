# 04 - Modèles de Données

## 1. Artefact

Représente une pièce de musée.

```typescript
interface Artifact {
  id: string;
  title: string;
  description: string;
  modelPath: string; // Chemin vers le .glb
  era: number;
  tags: string[];
}
```

## 2. Configuration N.E.O.

Stocké dans le `localStorage`.

```typescript
interface NEOSettings {
  fontSize: number; // 12 à 24
  highContrast: boolean;
  dyslexicFont: boolean;
  reducedMotion: boolean;
  audioVolume: number; // 0.0 à 1.0
}
```

## 3. Contenu d'Ère

```typescript
interface EraData {
  id: number;
  title: string;
  period: string;
  aesthetic: 'terminal' | 'retro-web' | 'modern' | 'future';
  content: string; // Markdown
}
```
