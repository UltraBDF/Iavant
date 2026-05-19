import { useState } from 'react';
import { motion } from 'motion/react';
import { X, Volume2, VolumeX, Type, Eye, Keyboard, Languages } from 'lucide-react';

interface NEOProps {
  onClose: () => void;
}

export default function NEO({ onClose }: NEOProps) {
  const [fontSize, setFontSize] = useState(() => {
    const saved = localStorage.getItem('neo-settings');
    return saved ? JSON.parse(saved).fontSize || 16 : 16;
  });
  const [highContrast, setHighContrast] = useState(() => {
    const saved = localStorage.getItem('neo-settings');
    return saved ? JSON.parse(saved).highContrast || false : false;
  });
  const [dyslexicFont, setDyslexicFont] = useState(() => {
    const saved = localStorage.getItem('neo-settings');
    return saved ? JSON.parse(saved).dyslexicFont || false : false;
  });
  const [soundEnabled, setSoundEnabled] = useState(() => {
    const saved = localStorage.getItem('neo-settings');
    if (!saved) return true;
    const settings = JSON.parse(saved);
    return settings.soundEnabled ?? true;
  });
  const [keyboardNav, setKeyboardNav] = useState(() => {
    const saved = localStorage.getItem('neo-settings');
    if (!saved) return true;
    const settings = JSON.parse(saved);
    return settings.keyboardNav ?? true;
  });

  const applySettings = () => {
    // Apply font size
    document.documentElement.style.fontSize = `${fontSize}px`;

    // Apply high contrast
    if (highContrast) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }

    // Apply dyslexic font
    if (dyslexicFont) {
      document.body.style.fontFamily = 'OpenDyslexic, Arial, sans-serif';
      document.body.classList.add('dyslexic-font');
    } else {
      document.body.style.fontFamily = '';
      document.body.classList.remove('dyslexic-font');
    }

    // Store in localStorage
    localStorage.setItem(
      'neo-settings',
      JSON.stringify({
        fontSize,
        highContrast,
        dyslexicFont,
        soundEnabled,
        keyboardNav,
      }),
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-black border-4 border-green-500 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl shadow-green-500/50"
      >
        {/* Header */}
        <div className="bg-green-500 text-black px-6 py-4 flex items-center justify-between sticky top-0 z-10">
          <div>
            <h2 className="text-2xl font-bold font-mono">N.E.O.</h2>
            <p className="text-sm">Navigation Égalitaire et Optimisée</p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center hover:bg-black hover:text-green-500 rounded transition-colors"
            aria-label="Fermer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 text-green-500 font-mono">
          {/* Introduction */}
          <div className="bg-green-500/10 border border-green-500/30 rounded p-4">
            <p className="text-sm leading-relaxed">
              L'accessibilité n'est pas une option, c'est une priorité. N.E.O. est votre assistant
              virtuel pour adapter l'expérience à vos besoins spécifiques.
            </p>
          </div>

          {/* Font Size */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Type className="w-5 h-5 text-green-400" />
              <label className="text-lg">Taille du texte</label>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setFontSize(Math.max(12, fontSize - 2))}
                className="px-4 py-2 bg-green-500/20 hover:bg-green-500/30 border border-green-500 rounded transition-colors"
              >
                A-
              </button>
              <span className="flex-1 text-center">{fontSize}px</span>
              <button
                onClick={() => setFontSize(Math.min(24, fontSize + 2))}
                className="px-4 py-2 bg-green-500/20 hover:bg-green-500/30 border border-green-500 rounded transition-colors"
              >
                A+
              </button>
            </div>
          </div>

          {/* High Contrast */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Eye className="w-5 h-5 text-green-400" />
              <label className="text-lg">Contraste élevé</label>
            </div>
            <button
              onClick={() => setHighContrast(!highContrast)}
              className={`w-full px-4 py-3 rounded border transition-all ${
                highContrast
                  ? 'bg-green-500 text-black border-green-400'
                  : 'bg-green-500/20 border-green-500'
              }`}
            >
              {highContrast ? '✓ Activé' : 'Désactivé'}
            </button>
          </div>

          {/* Dyslexic Font */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Languages className="w-5 h-5 text-green-400" />
              <label className="text-lg">Police dyslexique</label>
            </div>
            <button
              onClick={() => setDyslexicFont(!dyslexicFont)}
              className={`w-full px-4 py-3 rounded border transition-all ${
                dyslexicFont
                  ? 'bg-green-500 text-black border-green-400'
                  : 'bg-green-500/20 border-green-500'
              }`}
            >
              {dyslexicFont ? '✓ Activée (OpenDyslexic)' : 'Désactivée'}
            </button>
            <p className="text-xs text-green-500/70">
              Police spécialement conçue pour faciliter la lecture
            </p>
          </div>

          {/* Sound Control */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              {soundEnabled ? (
                <Volume2 className="w-5 h-5 text-green-400" />
              ) : (
                <VolumeX className="w-5 h-5 text-green-400" />
              )}
              <label className="text-lg">Sons et audio</label>
            </div>
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className={`w-full px-4 py-3 rounded border transition-all ${
                soundEnabled
                  ? 'bg-green-500 text-black border-green-400'
                  : 'bg-green-500/20 border-green-500'
              }`}
            >
              {soundEnabled ? '✓ Sons activés' : 'Sons désactivés'}
            </button>
            <p className="text-xs text-green-500/70">
              Contrôle les sons immersifs (modem, notifications, etc.)
            </p>
          </div>

          {/* Keyboard Navigation */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Keyboard className="w-5 h-5 text-green-400" />
              <label className="text-lg">Navigation clavier</label>
            </div>
            <button
              onClick={() => setKeyboardNav(!keyboardNav)}
              className={`w-full px-4 py-3 rounded border transition-all ${
                keyboardNav
                  ? 'bg-green-500 text-black border-green-400'
                  : 'bg-green-500/20 border-green-500'
              }`}
            >
              {keyboardNav ? '✓ Mode clavier activé' : 'Mode clavier désactivé'}
            </button>
            <div className="text-xs text-green-500/70 space-y-1">
              <p>• Tab / Shift+Tab : Navigation entre éléments</p>
              <p>• Espace / Entrée : Activation</p>
              <p>• Flèches : Déplacement</p>
              <p>• Échap : Fermeture de popups</p>
            </div>
          </div>

          {/* Screen Reader Info */}
          <div className="bg-blue-500/10 border border-blue-500/30 rounded p-4">
            <h3 className="text-lg mb-2 text-blue-400">Lecteurs d'écran</h3>
            <p className="text-sm text-green-500/80 leading-relaxed">
              Ce site est compatible avec les lecteurs d'écran (NVDA, JAWS, VoiceOver). Tous les
              éléments interactifs possèdent des descriptions ARIA appropriées.
            </p>
          </div>

          {/* Guide des Époques (Nouveau) */}
          <div className="bg-purple-500/10 border border-purple-500/30 rounded p-4 space-y-3">
            <h3 className="text-lg text-purple-400">Guide du Voyageur</h3>
            <div className="text-xs space-y-2 text-green-500/80">
              <p>
                <strong>Ère 1 (1950-79)</strong> : Mainframes, ARPANET, cartes perforées.
              </p>
              <p>
                <strong>Ère 2 (1980s)</strong> : BBS, Protocoles TCP/IP, DNS, Newsgroups.
              </p>
              <p>
                <strong>Ère 3 (1990s)</strong> : Naissance du Web, HTML pur, Netscape, Yahoo.
              </p>
              <p>
                <strong>Ère 4 (1995-04)</strong> : MSN, Forums, Skyblog, Napster (P2P).
              </p>
              <p>
                <strong>Ère 5 (2004-10)</strong> : Web 2.0, Facebook, YouTube, Twitter.
              </p>
              <p>
                <strong>Ère 6 (2010+)</strong> : Cloud, IA, IoT, Smartphone universel.
              </p>
            </div>
            <p className="text-[10px] italic text-purple-300/60">
              Conseil : Utilisez les boutons en bas de l'écran pour naviguer.
            </p>
          </div>

          {/* Apply Button */}
          <div className="pt-4 border-t border-green-500/30">
            <button
              onClick={() => {
                applySettings();
                onClose();
              }}
              className="w-full px-6 py-4 bg-green-500 text-black font-bold text-lg rounded hover:bg-green-400 transition-all transform hover:scale-105 active:scale-95"
            >
              Appliquer les paramètres
            </button>
          </div>

          {/* Reset Button */}
          <button
            onClick={() => {
              setFontSize(16);
              setHighContrast(false);
              setDyslexicFont(false);
              setSoundEnabled(true);
              setKeyboardNav(true);
              localStorage.removeItem('neo-settings');
            }}
            className="w-full px-4 py-2 text-sm text-green-500/70 hover:text-green-500 border border-green-500/30 hover:border-green-500 rounded transition-colors"
          >
            Réinitialiser aux valeurs par défaut
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
