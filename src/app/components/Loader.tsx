import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface LoaderProps {
  onComplete: () => void;
}

const loaderText = [
  '> Initialisation du système...',
  '> Connexion au réseau temporel...',
  "> Chargement des archives d'ARPANET...",
  '> Récupération des données de la Wayback Machine...',
  '> Décompression des souvenirs numériques...',
  '> Activation des protocoles TCP/IP...',
  "> Synchronisation avec l'Internet d'avant...",
  "> Préparation de l'expérience immersive...",
  '> Tous les systèmes sont opérationnels.',
  '> Prêt à voyager dans le temps.',
];

export default function Loader({ onComplete }: LoaderProps) {
  const [lines, setLines] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dots, setDots] = useState('');

  const [randomValues] = useState(() => {
    return [...Array(20)].map(() => ({
      left: Math.random() * 95,
      duration: 3 + Math.random() * 2,
      delay: Math.random() * 2,
      chars: Array(20)
        .fill(0)
        .map(() => String.fromCharCode(33 + Math.random() * 94))
        .join('\n'),
    }));
  });

  useEffect(() => {
    if (currentIndex < loaderText.length) {
      const timer = setTimeout(
        () => {
          setLines((prev) => [...prev, loaderText[currentIndex]]);
          setCurrentIndex(currentIndex + 1);
        },
        300 + Math.random() * 200,
      );

      return () => clearTimeout(timer);
    } else {
      const finalTimer = setTimeout(() => {
        onComplete();
      }, 1000);
      return () => clearTimeout(finalTimer);
    }
  }, [currentIndex, onComplete]);

  // Animated dots for loading effect
  useEffect(() => {
    const dotsInterval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? '' : prev + '.'));
    }, 500);

    return () => clearInterval(dotsInterval);
  }, []);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center overflow-hidden">
      {/* Matrix-like rain effect */}
      <div className="absolute inset-0 opacity-20">
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

      {/* Terminal window */}
      <div className="relative z-10 w-full max-w-3xl mx-4">
        <div className="bg-black border-2 border-green-500 rounded-lg shadow-lg shadow-green-500/50">
          {/* Terminal header */}
          <div className="bg-green-500 text-black px-4 py-2 flex items-center justify-between">
            <span className="font-mono text-sm font-bold">IAVANT_SYSTEM.EXE</span>
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-black rounded-full"></div>
              <div className="w-3 h-3 bg-black rounded-full"></div>
              <div className="w-3 h-3 bg-black rounded-full"></div>
            </div>
          </div>

          {/* Terminal content */}
          <div className="p-6 font-mono text-green-500 min-h-[400px]">
            {lines.map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.1 }}
                className="mb-2"
              >
                {line}
              </motion.div>
            ))}
            {currentIndex < loaderText.length && (
              <motion.div
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="mt-2"
              >
                {`> Chargement${dots}`}
              </motion.div>
            )}
            {currentIndex >= loaderText.length && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-4 text-green-400"
              >
                █
              </motion.div>
            )}
          </div>
        </div>

        {/* Loading bar */}
        <div className="mt-4 w-full bg-gray-900 h-2 rounded-full overflow-hidden border border-green-500">
          <motion.div
            className="h-full bg-green-500"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 3, ease: 'linear' }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mt-4 text-center text-green-500 font-mono text-sm"
        >
          Préparation de votre voyage dans le temps numérique...
        </motion.div>
      </div>
    </div>
  );
}
