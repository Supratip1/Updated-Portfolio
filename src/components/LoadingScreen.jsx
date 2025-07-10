import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Eyes from './Eyes';

const LoadingScreen = ({ show, onFinish }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (show) {
      setProgress(0);
      let start;
      const duration = 2500; // 2.5 seconds
      const animate = (timestamp) => {
        if (!start) start = timestamp;
        const elapsed = timestamp - start;
        const percent = Math.min((elapsed / duration) * 100, 100);
        setProgress(percent);
        if (percent < 100) {
          requestAnimationFrame(animate);
        } else {
          setTimeout(() => {
            onFinish && onFinish();
          }, 500); // slight delay for slide up
        }
      };
      requestAnimationFrame(animate);
    }
  }, [show, onFinish]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] bg-[#222] flex items-center justify-center"
        >
          <Eyes minimal progress={progress} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen; 