import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface NetworkAnimationProps {
  onComplete: () => void;
}

interface Node {
  id: number;
  x: number;
  y: number;
}

export default function NetworkAnimation({ onComplete }: NetworkAnimationProps) {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [connections, setConnections] = useState<[number, number][]>([]);
  const [zoom, setZoom] = useState(1);
  const [showTitle, setShowTitle] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Generate nodes progressively
    const nodeCount = 30;
    let currentNodes: Node[] = [];
    let hasCompletedOnce = false;

    const nodeInterval = setInterval(() => {
      if (currentNodes.length < nodeCount) {
        const newNode: Node = {
          id: currentNodes.length,
          x: Math.random() * 100,
          y: Math.random() * 100,
        };
        currentNodes = [...currentNodes, newNode];
        setNodes([...currentNodes]);

        // Create connections to nearby nodes
        if (currentNodes.length > 1) {
          const newConnections: [number, number][] = [];
          currentNodes.forEach((node, i) => {
            const connectionsPerNode = Math.floor(Math.random() * 3) + 1;
            for (let j = 0; j < connectionsPerNode && j < i; j++) {
              const targetIndex = Math.floor(Math.random() * i);
              if (Math.random() > 0.5) {
                newConnections.push([node.id, currentNodes[targetIndex].id]);
              }
            }
          });
          setConnections((prev) => [...prev, ...newConnections]);
        }
      } else if (!hasCompletedOnce) {
        hasCompletedOnce = true;
        clearInterval(nodeInterval);
        // Start zoom out after all nodes are created
        setTimeout(() => {
          setZoom(0.3);
          setTimeout(() => {
            setShowTitle(true);
            setTimeout(() => {
              setShowButton(true);
            }, 1500);
          }, 1500);
        }, 500);
      }
    }, 100);

    return () => clearInterval(nodeInterval);
  }, []);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center overflow-hidden z-[9999]">
      {/* Network visualization */}
      <motion.div
        className="absolute inset-0"
        style={{
          transformOrigin: 'center center',
        }}
        animate={{
          scale: zoom,
        }}
        transition={{
          duration: 2,
          ease: 'easeInOut',
        }}
      >
        {/* SVG for connections */}
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
                stroke="rgba(34, 197, 94, 0.3)"
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.02 }}
              />
            );
          })}
        </svg>

        {/* Nodes */}
        {nodes.map((node) => (
          <motion.div
            key={node.id}
            className="absolute w-4 h-4 bg-green-500 rounded-full shadow-lg shadow-green-500/50"
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              transform: 'translate(-50%, -50%)',
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, type: 'spring' }}
          >
            {/* Pulsing effect */}
            <motion.div
              className="absolute inset-0 bg-green-500 rounded-full"
              animate={{
                scale: [1, 2, 1],
                opacity: [0.8, 0, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: node.id * 0.1,
              }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Title overlay */}
      {showTitle && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: 'spring' }}
          className="relative z-10 text-center px-4"
        >
          <motion.h1
            className="text-5xl sm:text-6xl md:text-8xl font-bold text-green-500 font-mono tracking-wider"
            style={{
              textShadow: '0 0 20px rgba(34, 197, 94, 0.8), 0 0 40px rgba(34, 197, 94, 0.5)',
            }}
          >
            L'INTERNET
          </motion.h1>
          <motion.h2
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-green-400 font-mono tracking-wider mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            style={{
              textShadow: '0 0 20px rgba(74, 222, 128, 0.8), 0 0 40px rgba(74, 222, 128, 0.5)',
            }}
          >
            D'AVANT
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-6 sm:mt-8 text-green-500 font-mono text-sm md:text-base"
          >
            Un voyage dans l'histoire numérique
          </motion.div>

          {/* Button to continue */}
          {showButton && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              onClick={onComplete}
              className="mt-8 sm:mt-12 px-8 sm:px-10 py-3 sm:py-4 bg-green-500 text-black font-mono font-bold text-base sm:text-lg rounded border-2 border-green-400 hover:bg-green-400 hover:border-green-300 transition-all hover:scale-105 active:scale-95"
              style={{
                boxShadow:
                  '0 0 20px rgba(34, 197, 94, 0.6), inset 0 0 10px rgba(255, 255, 255, 0.2)',
              }}
            >
              ENTRER &gt;&gt;
            </motion.button>
          )}
        </motion.div>
      )}

      {/* Scanlines effect */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, rgba(0, 255, 0, 0.1) 0px, transparent 1px, transparent 2px, rgba(0, 255, 0, 0.1) 3px)',
        }}
      />
    </div>
  );
}
