import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';
import SectionWrapper from './SectionWrapper.jsx';
import SectionHeading from './SectionHeading.jsx';
import { projects, personalInfo } from '../data/index.js';
import { staggerContainer } from '../utils/animations.js';

const categories = ['All'];

const ProjectCard = ({ project, index }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const colors = {
    '#00D4FF': 'from-[#00D4FF]/20 to-[#0A0A12]',
    '#7B2FFF': 'from-[#7B2FFF]/20 to-[#0A0A12]',
    '#FF6B35': 'from-[#FF6B35]/20 to-[#0A0A12]',
    '#FFD700': 'from-[#FFD700]/20 to-[#0A0A12]',
  };

  return (
    <motion.div
      ref={ref}
      className="portfolio-card group"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      layout
    >
      {/* Project visual / placeholder */}
      <div className={`relative h-52 bg-gradient-to-br ${colors[project.color] || colors['#00D4FF']} flex items-center justify-center overflow-hidden`}>
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(${project.color}30 1px, transparent 1px), linear-gradient(90deg, ${project.color}30 1px, transparent 1px)`,
            backgroundSize: '25px 25px',
          }}
        />

        {/* Center icon */}
        <motion.div
          className="relative z-10 flex flex-col items-center gap-3"
          whileHover={{ scale: 1.1 }}
        >
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center"
            style={{ background: `${project.color}20`, border: `1px solid ${project.color}40` }}
          >
            <FaCode size={28} style={{ color: project.color }} />
          </div>
          <div className="font-mono text-xs tracking-widest uppercase" style={{ color: project.color }}>
            {project.tags[0]}
          </div>
        </motion.div>

        {/* Overlay */}
        <div className="overlay" />

        {/* Actions */}
        <div className="card-actions z-20">
          <div className="flex items-center gap-3">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className=" flex items-center gap-2 text-xs py-2.5 px-4 hover:border border-[#202E45]"
              onClick={(e) => e.stopPropagation()}
            >
              <FaExternalLinkAlt size={11} />
              Live Demo
            </a>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline flex items-center gap-2 text-xs py-2.5 px-4"
              onClick={(e) => e.stopPropagation()}
            >
              <FaGithub size={11} />
              Code
            </a>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 rounded-md font-mono text-[10px] tracking-wide"
              style={{
                background: `${project.color}12`,
                color: project.color,
                border: `1px solid ${project.color}25`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="font-display font-700 text-white text-base mb-2 group-hover:text-primary transition-colors duration-200">
          {project.title}
        </h3>

        <p className="font-body text-white/45 text-sm leading-relaxed">
          {project.description.length > 100
            ? `${project.description.substring(0, 100)}...`
            : project.description}
        </p>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category.includes(activeFilter));

  return (
    <SectionWrapper id="portfolio">
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <SectionHeading
          title="Recent Projects"
          description="A showcase of my best work "
        />

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`filter-btn px-5 py-2 rounded-full font-mono text-xs font-medium tracking-wide border transition-all duration-300 ${
                activeFilter === cat
                  ? 'active border-transparent text-white shadow-lg shadow-primary/20'
                  : 'border-white/10 text-white/40 hover:text-white hover:border-white/20'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5"
          layout
        >
          <AnimatePresence>
            {filtered.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View more */}
        <motion.div className="text-center mt-10">
          <a
            href={`https://github.com/${personalInfo?.github?.split('/').pop() || ''}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2 text-sm"
          >
            <FaGithub size={14} />
            View All on GitHub
          </a>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
};

export default Portfolio;
