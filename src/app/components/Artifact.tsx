import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface ArtifactProps {
  title: string;
  description: string;
  children?: ReactNode;
  delay?: number;
}

export default function Artifact({ title, description, children, delay = 0 }: ArtifactProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-gray-500 transition-colors"
    >
      <h3 className="text-2xl mb-3">{title}</h3>
      <p className="text-gray-300 mb-4 leading-relaxed">{description}</p>
      {children && <div className="mt-4">{children}</div>}
    </motion.div>
  );
}
