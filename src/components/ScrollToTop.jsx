import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';
import { useScrollToTop } from '../hooks/useScrollToTop.js';

const ScrollToTop = () => {
  const { showButton, scrollToTop } = useScrollToTop();

  return (
    <AnimatePresence>
      {showButton && (
        <motion.button
          className="scroll-top w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-shadow"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ y: -3, scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll to top"
        >
          <FaArrowUp size={14} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
