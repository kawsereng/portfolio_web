import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaArrowDown, FaCode, FaRocket } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';
import { staggerContainer, staggerItem } from '../utils/animations.js';
import { personalInfo } from '../data/index.js';

const FloatingOrb = ({ className, delay = 0 }) => (
  <motion.div
    className={`float-shape ${className}`}
    animate={{ y: [0, -30, 0], scale: [1, 1.1, 1], opacity: [0.08, 0.15, 0.08] }}
    transition={{ duration: 8 + delay, repeat: Infinity, ease: 'easeInOut', delay }}
  />
);

const Hero = () => {
  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden mesh-bg grid-bg"
    >
      {/* Background orbs */}
      <FloatingOrb className="w-96 h-96 bg-primary -top-20 -left-20" delay={0} />
      <FloatingOrb className="w-80 h-80 bg-secondary top-1/3 -right-10" delay={2} />
      <FloatingOrb className="w-64 h-64 bg-accent bottom-10 left-1/4" delay={4} />

      {/* Particle dots */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary/40 rounded-full"
          style={{
            left: `${10 + i * 8}%`,
            top: `${20 + (i % 4) * 20}%`,
          }}
          animate={{ opacity: [0.2, 1, 0.2], y: [0, -15, 0] }}
          transition={{ duration: 3 + i * 0.3, repeat: Infinity, delay: i * 0.2 }}
        />
      ))}

      <div className="relative z-10 w-full">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Badge */}
          <motion.div
            variants={staggerItem}
            className="inline-flex items-center gap-2 glass-card rounded-full px-5 py-2.5 border border-primary/20 mb-8"
          >
            <HiSparkles className="text-primary" size={14} />
            <span className="font-mono text-xs text-primary/80 tracking-[2px] uppercase">
              Available for Hire
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          </motion.div>

          {/* Name */}
          <motion.p
            variants={staggerItem}
            className="font-mono text-sm text-white/40 tracking-[4px] uppercase mb-3"
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            variants={staggerItem}
            className="font-display text-white mb-4"
            style={{
              fontSize: '80px',
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: '-2px',
            }}
          >
            {personalInfo.name.split(' ').map((word, i) => (
              <span key={i}>
                {i === 2 ? <span className="gradient-text">{word}</span> : word}
                {i < 2 ? ' ' : ''}
              </span>
            ))}
          </motion.h1>

          {/* Typing animation */}
          <motion.div
            variants={staggerItem}
            className="flex items-center gap-3 mb-6"
          >
            <div />
            <div className="font-mono text-base  font-medium text-[20px]">
              <TypeAnimation
                sequence={[
                  'Frontend Developer',
                  2000,
                  'React Specialist',
                  2000,
                  'Node.js Developer',
                  2000,
                ]}
                repeat={Infinity}
                speed={50}
              />
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={staggerItem}
            className="font-body text-white/50 leading-relaxed mb-10 max-w-lg"
            style={{ fontSize: 'clamp(15px, 2vw, 17px)' }}
          >
            I craft exceptional digital experiences with modern technologies.
            Passionate about building scalable, performant web applications that
            make a real difference.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={staggerItem}
            className="flex flex-wrap items-center gap-4 mb-14"
          >
            <motion.button
              onClick={scrollToContact}
              className="border border-[#202E45] flex items-center gap-2 text-sm py-3.5 px-7"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <FaRocket size={13} />
              Hire Me Now
            </motion.button>
            <motion.button
              onClick={scrollToPortfolio}
              className="border border-[#202E45] flex items-center gap-2 text-sm py-3.5 px-7"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <FaCode size={13} />
              View Projects
            </motion.button>
          </motion.div>

          {/* Tech stack badges */}
          <motion.div variants={staggerItem}>
            <p className="font-mono text-[11px] text-white text-[20px] tracking-widest uppercase mb-3">
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {['Html5','Css3','JavaScript','Bootstrap','React', 'Node.js','Tailwind CSS'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-full glass-card border border-white/8 font-mono text-xs text-white/50 hover:text-primary hover:border-primary/30 transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 right-0 flex flex-col items-center gap-2 text-white/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5 }}
        >
          <span className="font-mono text-[10px] tracking-widest uppercase rotate-90 mb-6">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <FaArrowDown size={12} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
