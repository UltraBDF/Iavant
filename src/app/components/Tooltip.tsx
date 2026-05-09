import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface TooltipProps {
  message: string;
  duration?: number; // en millisecondes
  visible: boolean;
  onHide: () => void;
  className: string;
}

export default function Tooltip({
  message,
  duration = 30000,
  visible,
  onHide,
  className,
}: TooltipProps) {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(onHide, duration);
      return () => clearTimeout(timer);
    }
  }, [visible, duration, onHide]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 3 }}
          className={className}
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
