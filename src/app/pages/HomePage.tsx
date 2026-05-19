import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface Node {
  id: number;
  x: number;
  y: number;
}

export default function HomePage() {
  const [nodes] = useState<Node[]>(() => {
    const nodeCount = 30;
    const generatedNodes: Node[] = [];
    for (let i = 0; i < nodeCount; i++) {
      generatedNodes.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
      });
    }
    return generatedNodes;
  });

  const [connections] = useState<[number, number][]>(() => {
    const newConnections: [number, number][] = [];
    nodes.forEach((node, i) => {
      const connectionsPerNode = Math.floor(Math.random() * 3) + 1;
      for (let j = 0; j < connectionsPerNode && j < i; j++) {
        const targetIndex = Math.floor(Math.random() * i);
        if (Math.random() > 0.5) {
          newConnections.push([node.id, nodes[targetIndex].id]);
        }
      }
    });
    return newConnections;
  });

  return (
    <div className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 opacity-20" style={{ transform: 'scale(0.5)' }}>
        <svg className="absolute inset-0 w-full h-full">
          {connections.map((conn, index) => {
            const fromNode = nodes.find((n) => n.id === conn[0]);
            const toNode = nodes.find((n) => n.id === conn[1]);
            if (!fromNode || !toNode) return null;

            return (
              <motion.line
                key={index}
                x1={`${fromNode.x}%`}
                y1={`${fromNode.y}%`}
                x2={`${toNode.x}%`}
                y2={`${toNode.y}%`}
                stroke="rgba(34, 197, 94, 0.4)"
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1, delay: index * 0.01 }}
              />
            );
          })}
        </svg>

        {nodes.map((node) => (
          <motion.div
            key={node.id}
            className="absolute w-3 h-3 bg-green-500 rounded-full"
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              transform: 'translate(-50%, -50%)',
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.6 }}
            transition={{ duration: 0.3, delay: node.id * 0.02 }}
          >
            <motion.div
              className="absolute inset-0 bg-green-500 rounded-full"
              animate={{
                scale: [1, 1.8, 1],
                opacity: [0.6, 0, 0.6],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: node.id * 0.1,
              }}
            />
          </motion.div>
        ))}
      </div>

      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, rgba(0, 255, 0, 0.1) 0px, transparent 1px, transparent 2px, rgba(0, 255, 0, 0.1) 3px)',
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1
            className="text-6xl md:text-8xl lg:text-9xl font-bold text-green-500 font-mono tracking-wider mb-4"
            style={{
              textShadow: '0 0 30px rgba(34, 197, 94, 0.8), 0 0 60px rgba(34, 197, 94, 0.4)',
            }}
          >
            L'INTERNET D'AVANT
          </h1>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent mb-8 mx-auto max-w-2xl"
            style={{
              boxShadow: '0 0 10px rgba(34, 197, 94, 0.8)',
            }}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-2xl text-green-400 font-mono mb-4 leading-relaxed"
        >
          Un musée virtuel immersif retraçant l'histoire d'Internet
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-base md:text-xl text-green-500/80 font-mono mb-12 leading-relaxed max-w-3xl mx-auto"
        >
          Parcourez 6 ères chronologiques (1950-2010+) et découvrez l'évolution des technologies qui
          ont façonné notre monde numérique. Chaque époque conserve son style visuel authentique
          pour une expérience pédagogique et culturelle unique.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-base md:text-xl text-green-500/80 font-mono mb-12 leading-relaxed max-w-3xl mx-auto"
        >
          ⚠️ Attention ⚠️
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-base md:text-xl text-green-500/80 font-mono mb-12 leading-relaxed max-w-3xl mx-auto"
        >
          Vous vous apprêtez à plonger dans un voyage temporel numérique. Pour faciliter votre
          expérience, nous vous informons que ce musée se décompose en 6 ères chronologiques,
          chacune correspondant à une période clé de l'histoire d'Internet. Chaque ère est conçue
          pour être immersive et fidèle à son époque, avec des éléments visuels et interactifs
          spécifiques. Mais chacune des ères ne représente qu'une seule page web, si vous souhaitez
          poursuivre référez-vous aux boutons en bas de l'écran pour naviguer d'ère en ère.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="space-y-12"
        >
          {/* Option 1: Parcours Immersif */}
          <div>
            <p className="text-green-500/60 font-mono text-sm mb-6 uppercase tracking-[0.2em]">
              Option 1 : L'Expérience Complète
            </p>
            <Link to="/era/1">
              <motion.button
                className="group relative px-12 py-5 bg-green-500 text-black font-mono font-bold text-xl rounded-lg overflow-hidden transition-all hover:bg-green-400"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  boxShadow:
                    '0 0 30px rgba(34, 197, 94, 0.6), inset 0 0 20px rgba(255, 255, 255, 0.2)',
                }}
              >
                <span className="relative z-10 flex items-center gap-3">
                  COMMENCER LE PARCOURS
                  <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
                </span>

                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  initial={{ x: '-100%' }}
                  animate={{ x: '200%' }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1,
                    ease: 'linear',
                  }}
                />
              </motion.button>
            </Link>
          </div>

          {/* Option 2: Accès Direct */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="pt-8 border-t border-green-500/20"
          >
            <p className="text-green-500/60 font-mono text-sm mb-8 uppercase tracking-[0.2em]">
              Option 2 : Accès Rapide aux Époques
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <Link key={num} to={`/era/${num}`}>
                  <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(34, 197, 94, 0.2)' }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 px-4 border border-green-500/40 rounded text-green-500 font-mono text-sm transition-colors hover:border-green-500"
                  >
                    Ère {num}
                  </motion.button>
                </Link>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mt-8 text-green-500/60 font-mono text-sm"
        >
          Cliquez pour commencer votre voyage dans le temps numérique
        </motion.p>
      </motion.div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-500/10 rounded-full blur-3xl" />
      </div>
    </div>
  );
}
