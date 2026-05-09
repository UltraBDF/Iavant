import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Loader from './components/Loader';
import NetworkAnimation from './components/NetworkAnimation';
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
import Tooltip from './components/Tooltip';

export default function App() {
  const [loadingComplete, setLoadingComplete] = useState(() => {
    return localStorage.getItem('hasSeenIntro') === 'true';
  });
  const [networkComplete, setNetworkComplete] = useState(() => {
    return localStorage.getItem('hasSeenIntro') === 'true';
  });
  const [showNEO, setShowNEO] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

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

  // Applique les paramètres NEO au chargement
  useEffect(() => {
    const savedSettings = localStorage.getItem('neo-settings');
    if (savedSettings) {
      const settings = JSON.parse(savedSettings);

      // Font size
      if (settings.fontSize) {
        document.documentElement.style.fontSize = `${settings.fontSize}px`;
      }

      // High contrast
      if (settings.highContrast) {
        document.body.classList.add('high-contrast');
      }

      // Dyslexic font
      if (settings.dyslexicFont) {
        document.body.style.fontFamily = 'OpenDyslexic, Arial, sans-serif';
        document.body.classList.add('dyslexic-font');
      }
    }
  }, []);

  const showMainContent = loadingComplete && networkComplete;

  return (
    <>
      {!loadingComplete && <Loader onComplete={handleLoadingComplete} />}
      {loadingComplete && !networkComplete && (
        <NetworkAnimation onComplete={handleNetworkComplete} />
      )}

      {showMainContent && (
        <div className="relative min-h-screen">
          <Router>
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
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Router>

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

          {showNEO && <NEO onClose={() => setShowNEO(false)} />}
        </div>
      )}
    </>
  );
}
