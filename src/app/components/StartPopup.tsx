import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface StartPopupProps {
  onStart: () => void;
}

export default function StartPopup({ onStart }: StartPopupProps) {
  const [isBlinking, setIsBlinking] = useState(true);

  const [randomValues] = useState(() => {
    return [...Array(30)].map(() => ({
      left: Math.random() * 95,
      duration: 4 + Math.random() * 3,
      delay: Math.random() * 3,
      chars: Array(30)
        .fill(0)
        .map(() => String.fromCharCode(0x30a0 + Math.random() * 96))
        .join('\n'),
    }));
  });

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking((prev) => !prev);
    }, 500);

    return () => clearInterval(blinkInterval);
  }, []);

  const handleStart = () => {
    const savedSettings = localStorage.getItem('neo-settings');
    const soundEnabled = savedSettings ? JSON.parse(savedSettings).soundEnabled ?? true : true;

    if (soundEnabled) {
      const audio = new Audio('/assets/sound/Modem 56k.mp3');
      audio.volume = 0.8;
      audio.play().catch(() => {});
      setTimeout(() => {
        audio.pause();
        audio.currentTime = 0;
      }, 5000);
    }

    setTimeout(() => {
      onStart();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center overflow-hidden">
      {/* Scanlines effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, rgba(0, 255, 0, 0.03) 0px, transparent 1px, transparent 2px, rgba(0, 255, 0, 0.03) 3px)',
          }}
        />
      </div>

      {/* Matrix rain background */}
      <div className="absolute inset-0 opacity-10">
        {randomValues.map((val, i) => (
          <motion.div
            key={i}
            className="absolute text-green-500 font-mono text-xs"
            style={{
              left: `${val.left}%`,
              top: '-100px',
            }}
            animate={{
              y: ['0vh', '110vh'],
            }}
            transition={{
              duration: val.duration,
              repeat: Infinity,
              ease: 'linear',
              delay: val.delay,
            }}
          >
            {val.chars}
          </motion.div>
        ))}
      </div>

      {/* Terminal popup */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, type: 'spring' }}
        className="relative z-10"
      >
        <div className="bg-black border-4 border-green-500 rounded-lg shadow-2xl shadow-green-500/50 max-w-2xl mx-4">
          {/* Terminal header */}
          <div className="bg-green-500 text-black px-4 py-3 flex items-center justify-between">
            <span className="font-mono text-sm font-bold">C:\IAVANT\WELCOME.EXE</span>
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-black rounded"></div>
              <div className="w-3 h-3 bg-black rounded"></div>
              <div className="w-3 h-3 bg-black rounded"></div>
            </div>
          </div>

          {/* Terminal content */}
          <div className="p-8 font-mono text-green-500 space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              {'>'} Bienvenue dans le passé numérique...
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="text-sm"
            >
              Vous êtes sur le point d'entrer dans une expérience immersive
              <br />
              retraçant l'histoire d'Internet depuis ses origines.
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
              className="pt-4 border-t border-green-500/30"
            >
              {'>'} Des années 1950 à aujourd'hui
              <br />
              {'>'} Des artefacts authentiques
              <br />
              {'>'} Des témoignages poignants
              <br />
              {'>'} Une expérience sensorielle unique
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="pt-6 flex justify-center"
            >
              <button
                onClick={handleStart}
                className={`
                  px-8 py-4 bg-green-500 text-black font-bold text-xl
                  border-4 border-green-400
                  transition-all duration-200
                  hover:bg-green-400 hover:scale-105
                  active:scale-95
                  shadow-lg shadow-green-500/50
                  ${isBlinking ? 'opacity-100' : 'opacity-70'}
                `}
                style={{
                  boxShadow: isBlinking
                    ? '0 0 20px rgba(34, 197, 94, 0.8)'
                    : '0 0 10px rgba(34, 197, 94, 0.4)',
                }}
              >
                [ START ]
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="text-center text-xs text-green-500/70 pt-4"
            >
              Cliquez pour lancer la connexion...
              <br />
              <span className="text-green-500/50">(Son du modem 56k inclus)</span>
            </motion.div>
          </div>
        </div>

        {/* Glowing corners effect */}
        <div className="absolute -top-2 -left-2 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
        <div
          className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full animate-pulse"
          style={{ animationDelay: '0.5s' }}
        ></div>
        <div
          className="absolute -bottom-2 -left-2 w-4 h-4 bg-green-500 rounded-full animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
        <div
          className="absolute -bottom-2 -right-2 w-4 h-4 bg-green-500 rounded-full animate-pulse"
          style={{ animationDelay: '1.5s' }}
        ></div>
      </motion.div>

      {/* Bottom text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 text-center text-green-500 font-mono text-sm"
      >
        <div className="mb-2">L'IA - L'Internet d'Avant</div>
        <div className="text-xs text-green-500/70">Projet TransDisciplinaire IAVANT</div>
      </motion.div>
    </div>
  );
}
