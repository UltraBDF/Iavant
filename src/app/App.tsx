import { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';

import Loader from './components/Loader';
import NetworkAnimation from './components/NetworkAnimation';
import StartPopup from './components/StartPopup';
import NEO from './components/NEO';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import Era1 from './pages/Era1';
import Era2 from './pages/Era2';
import Era3 from './pages/Era3';
import Era4 from './pages/Era4';
import Era5 from './pages/Era5';
import Era6 from './pages/Era6';
import EndPage from './pages/EndPage';
import GestionProjet from './pages/GestionProjet';
import Tooltip from './components/Tooltip';

interface Settings {
  fontSize: number;
  highContrast: boolean;
  dyslexicFont: boolean;
  soundEnabled: boolean;
  keyboardNav: boolean;
}

const DEFAULT_SETTINGS: Settings = {
  fontSize: 16,
  highContrast: false,
  dyslexicFont: false,
  soundEnabled: true,
  keyboardNav: true,
};

function KeyboardNavigation({ disabled }: { disabled: boolean }) {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (disabled) return;

      const savedSettings = localStorage.getItem('neo-settings');
      const settings = savedSettings ? JSON.parse(savedSettings) : { keyboardNav: true };

      if (!settings.keyboardNav) return;

      if (
        document.activeElement?.tagName === 'INPUT' ||
        document.activeElement?.tagName === 'TEXTAREA'
      ) {
        return;
      }

      const path = window.location.pathname;
      const eraMatch = path.match(/\/era\/(\d+)/);

      if (eraMatch) {
        const currentEra = parseInt(eraMatch[1]);
        if (e.key === 'ArrowRight') {
          if (currentEra < 6) {
            navigate(`/era/${currentEra + 1}`);
          } else {
            navigate('/end');
          }
        } else if (e.key === 'ArrowLeft') {
          if (currentEra > 1) {
            navigate(`/era/${currentEra - 1}`);
          } else {
            navigate('/');
          }
        }
      } else if (path === '/' && e.key === 'ArrowRight') {
        navigate('/era/1');
      } else if (path === '/end' && e.key === 'ArrowLeft') {
        navigate('/era/6');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate, disabled]);

  return null;
}

export default function App() {
  const [startComplete, setStartComplete] = useState(() => {
    return localStorage.getItem('hasSeenIntro') === 'true';
  });
  const [loadingComplete, setLoadingComplete] = useState(() => {
    return localStorage.getItem('hasSeenIntro') === 'true';
  });
  const [networkComplete, setNetworkComplete] = useState(() => {
    return localStorage.getItem('hasSeenIntro') === 'true';
  });
  const [showNEO, setShowNEO] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  const [settings, setSettings] = useState<Settings>(() => {
    const saved = localStorage.getItem('neo-settings');
    return saved ? { ...DEFAULT_SETTINGS, ...JSON.parse(saved) } : DEFAULT_SETTINGS;
  });

  const refreshSettings = useCallback(() => {
    const saved = localStorage.getItem('neo-settings');
    if (saved) {
      setSettings(JSON.parse(saved));
    }
  }, []);

  const handleStartComplete = () => {
    setStartComplete(true);
  };

  const handleLoadingComplete = () => {
    setLoadingComplete(true);
  };

  const handleNetworkComplete = () => {
    setNetworkComplete(true);
    localStorage.setItem('hasSeenIntro', 'true');
  };

  const toggleNEO = () => {
    setShowNEO(!showNEO);
  };

  // Applique les paramètres NEO au chargement et au changement de settings
  useEffect(() => {
    // Font size
    document.documentElement.style.fontSize = `${settings.fontSize}px`;

    // High contrast
    if (settings.highContrast) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }

    // Dyslexic font
    if (settings.dyslexicFont) {
      document.body.style.fontFamily = 'OpenDyslexic, Arial, sans-serif';
      document.body.classList.add('dyslexic-font');
    } else {
      document.body.style.fontFamily = '';
      document.body.classList.remove('dyslexic-font');
    }
  }, [settings]);

  const showMainContent = loadingComplete && networkComplete;


  return (
    <>
      {!startComplete && <StartPopup onStart={handleStartComplete} />}
      {startComplete && !loadingComplete && <Loader onComplete={handleLoadingComplete} />}
      {loadingComplete && !networkComplete && (
        <NetworkAnimation onComplete={handleNetworkComplete} />
      )}

      {showMainContent && (
        <div className="relative min-h-screen">
          <Router>
            <KeyboardNavigation disabled={showNEO} />
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/era/1" element={<Era1 />} />
              <Route path="/era/2" element={<Era2 />} />
              <Route path="/era/3" element={<Era3 />} />
              <Route path="/era/4" element={<Era4 />} />
              <Route path="/era/5" element={<Era5 />} />
              <Route path="/era/6" element={<Era6 />} />
              <Route path="/end" element={<EndPage />} />
              <Route path="/gestion-projet" element={<GestionProjet />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>

            <div>
              <Tooltip
                visible={showTooltip}
                message="Coucou ! Je suis NEO, votre assistant de navigation."
                duration={30000} // 30 secondes
                onHide={() => setShowTooltip(false)}
                className="fixed bottom-20 left-5 bg-green-500 text-black px-4 py-2 rounded shadow-lg"
              />
            </div>
            <button
              onClick={toggleNEO}
              className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-400 rounded-full flex items-center justify-center shadow-lg shadow-green-500/50 transition-all hover:scale-110"
              aria-label="Navigation Égalitaire et Optimisée"
            >
              <span className="text-black text-xl font-bold">N</span>
            </button>

            <AnimatePresence>
              {showNEO && (
                <NEO
                  onClose={() => {
                    setShowNEO(false);
                    refreshSettings();
                  }}
                />
              )}
            </AnimatePresence>
          </Router>
        </div>
      )}
    </>
  );
}
