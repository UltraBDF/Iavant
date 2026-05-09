import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface EraLayoutProps {
  eraNumber: number;
  title: string;
  subtitle: string;
  period: string;
  bgColor: string;
  children: ReactNode;
}

export default function EraLayout({
  eraNumber,
  title,
  subtitle,
  period,
  bgColor,
  children,
}: EraLayoutProps) {
  const prevEra = eraNumber > 1 ? eraNumber - 1 : null;
  const nextEra = eraNumber < 6 ? eraNumber + 1 : null;

  return (
    <div className={`min-h-screen ${bgColor} text-white`}>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <Link to="/timeline">
            <motion.button
              className="px-4 py-2 bg-slate-800/50 hover:bg-slate-700/50 rounded-lg flex items-center gap-2 transition-colors backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft className="w-4 h-4" />
              Timeline
            </motion.button>
          </Link>

          <div className="flex gap-2">
            {prevEra && (
              <Link to={`/era/${prevEra}`}>
                <motion.button
                  className="px-4 py-2 bg-slate-800/50 hover:bg-slate-700/50 rounded-lg flex items-center gap-2 transition-colors backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ArrowLeft className="w-4 h-4" />
                  Ère {prevEra}
                </motion.button>
              </Link>
            )}
            {nextEra && (
              <Link to={`/era/${nextEra}`}>
                <motion.button
                  className="px-4 py-2 bg-slate-800/50 hover:bg-slate-700/50 rounded-lg flex items-center gap-2 transition-colors backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Ère {nextEra}
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
            )}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="text-sm text-gray-400 mb-2">{period}</div>
          <h1 className="text-5xl md:text-6xl mb-4">
            Ère {eraNumber}: {title}
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-8">{subtitle}</h2>
        </motion.div>

        {children}
      </div>
    </div>
  );
}
