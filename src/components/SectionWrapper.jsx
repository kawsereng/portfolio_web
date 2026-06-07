import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeUp,  } from '../utils/animations.js';

const SectionWrapper = ({ id, children, className = '' }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.section
      id={id}
      ref={ref}
      className={`py-20 ${className}`}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
