import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronLeft, ChevronRight, Menu, X } from 'lucide-react';

interface MuseumNavProps {
  currentEra: number;
  style?: 'terminal' | 'dos' | 'html' | 'geocities' | 'web2' | 'modern';
}

export default function MuseumNav({ currentEra, style = 'modern' }: MuseumNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const totalEras = 6;

  // Style adapté à chaque ère
  const getNavStyle = () => {
    switch (style) {
      case 'terminal':
        return 'bg-black border-2 border-green-500 text-green-500 font-mono shadow-[0_0_20px_rgba(0,255,0,0.3)]';
      case 'dos':
        return 'bg-blue-900 border-2 border-gray-400 text-yellow-400 font-mono';
      case 'html':
        return 'bg-gray-300 border-2 border-white text-black';
      case 'geocities':
        return 'bg-gradient-to-b from-blue-600 to-blue-900 border-4 border-yellow-500 rounded-lg shadow-lg';
      case 'web2':
        return 'bg-gradient-to-b from-white to-gray-100 border border-gray-300 rounded-3xl shadow-xl';
      default: // modern
        return 'bg-white/95 backdrop-blur-lg border border-black/10 rounded-full shadow-2xl';
    }
  };

  const getButtonStyle = () => {
    switch (style) {
      case 'terminal':
        return 'border border-green-500 text-green-500 hover:bg-green-500 hover:text-black transition-colors px-3 py-2 text-xs sm:px-4 sm:py-2 sm:text-sm';
      case 'dos':
        return 'bg-gray-400 border-2 border-white text-blue-900 font-bold px-3 py-2 text-xs sm:px-4 sm:py-2 sm:text-sm';
      case 'html':
        return 'bg-gray-200 border-2 border-white text-black px-3 py-2 text-xs sm:px-4 sm:py-2 sm:text-sm';
      case 'geocities':
        return 'bg-gradient-to-b from-blue-300 to-blue-500 border-2 border-white rounded-lg text-black font-bold px-3 py-2 text-xs sm:px-4 sm:py-2 sm:text-sm';
      case 'web2':
        return 'bg-gradient-to-b from-blue-500 to-blue-700 text-white font-bold rounded-2xl shadow-lg px-3 py-2 text-xs sm:px-4 sm:py-2 sm:text-sm';
      default: // modern
        return 'bg-gradient-to-br from-purple-500 to-purple-700 text-white font-semibold rounded-full hover:scale-105 transition-transform shadow-lg px-3 py-2 text-xs sm:px-4 sm:py-2 sm:text-sm flex items-center gap-1 sm:gap-2';
    }
  };

  const navStyle = getNavStyle();
  const buttonStyle = getButtonStyle();

  return (
    <>
      {/* Desktop Navigation */}
      <nav
        className={`fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-40 px-3 py-2 sm:px-6 sm:py-3 hidden sm:flex gap-2 sm:gap-3 ${navStyle}`}
      >
        {/* Restart button */}
        <Link to="/" className="no-underline">
          <button className={buttonStyle}>
            {style === 'modern' && <Home size={16} />}
            <span className="hidden sm:inline">
              {style === 'terminal'
                ? '[RESTART]'
                : style === 'dos'
                  ? 'F1:Restart'
                  : style === 'html'
                    ? 'Restart'
                    : style === 'modern'
                      ? 'Restart'
                      : '🔄 Restart'}
            </span>
            <span className="sm:hidden">{style === 'modern' ? '' : 'R'}</span>
          </button>
        </Link>

        {/* Previous button */}
        {currentEra > 1 && (
          <Link to={`/era/${currentEra - 1}`} className="no-underline">
            <button className={buttonStyle}>
              {style === 'modern' && <ChevronLeft size={16} />}
              <span className="hidden sm:inline">
                {style === 'terminal'
                  ? '[<<]'
                  : style === 'dos'
                    ? 'F2:Prev'
                    : style === 'html'
                      ? '← Précédent'
                      : style === 'modern'
                        ? 'Précédent'
                        : '← Salle précédente'}
              </span>
              <span className="sm:hidden">{'<'}</span>
            </button>
          </Link>
        )}

        {/* Era indicator */}
        <div className={`${buttonStyle} cursor-default opacity-60`}>
          {style === 'terminal'
            ? `[${currentEra}/${totalEras}]`
            : style === 'dos'
              ? `SALLE ${currentEra}/${totalEras}`
              : `Salle ${currentEra}/${totalEras}`}
        </div>

        {/* Next button */}
        {currentEra < totalEras && (
          <Link to={`/era/${currentEra + 1}`} className="no-underline">
            <button className={buttonStyle}>
              <span className="hidden sm:inline">
                {style === 'terminal'
                  ? '[>>]'
                  : style === 'dos'
                    ? 'F3:Next'
                    : style === 'html'
                      ? 'Suivant →'
                      : style === 'modern'
                        ? 'Suivant'
                        : 'Salle suivante →'}
              </span>
              <span className="sm:hidden">{'>'}</span>
              {style === 'modern' && <ChevronRight size={16} />}
            </button>
          </Link>
        )}
      </nav>

      {/* Mobile Navigation - Hamburger Menu */}
      <div className="sm:hidden fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`p-3 ${navStyle} ${buttonStyle}`}
          aria-label="Menu navigation"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div
            className={`absolute bottom-16 right-0 ${navStyle} p-4 flex flex-col gap-3 min-w-[200px]`}
          >
            <Link to="/" className="no-underline" onClick={() => setIsOpen(false)}>
              <button className={`${buttonStyle} w-full justify-center`}>
                <Home size={16} />
                <span>Recommencer</span>
              </button>
            </Link>

            {currentEra > 1 && (
              <Link
                to={`/era/${currentEra - 1}`}
                className="no-underline"
                onClick={() => setIsOpen(false)}
              >
                <button className={`${buttonStyle} w-full justify-center`}>
                  <ChevronLeft size={16} />
                  <span>Ère précédente</span>
                </button>
              </Link>
            )}

            <div className={`${buttonStyle} w-full justify-center cursor-default opacity-60`}>
              Ère {currentEra}/{totalEras}
            </div>

            {currentEra < totalEras && (
              <Link
                to={`/era/${currentEra + 1}`}
                className="no-underline"
                onClick={() => setIsOpen(false)}
              >
                <button className={`${buttonStyle} w-full justify-center`}>
                  <span>Ère suivante</span>
                  <ChevronRight size={16} />
                </button>
              </Link>
            )}
          </div>
        )}
      </div>
    </>
  );
}
