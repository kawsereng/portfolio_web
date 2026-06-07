import { motion } from 'framer-motion';
import { fadeUp } from '../utils/animations.js';

const SectionHeading = ({ subtitle, title, highlight, description }) => {
  return (
    <motion.div className="mb-14" variants={fadeUp}>
      <p className="section-subtitle mb-4">{subtitle}</p>
      <h2 className="section-title text-white text-[30px] mb-5">
        {title}{' '}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {description && (
        <p className="text-white/50 font-body text-base leading-relaxed max-w-xl">
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
