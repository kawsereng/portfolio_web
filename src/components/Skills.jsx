import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { VscVscode } from "react-icons/vsc";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub
} from 'react-icons/fa';

import {
  SiTailwindcss,
  SiNextdotjs,
} from 'react-icons/si';


import SectionWrapper from './SectionWrapper.jsx';
import SectionHeading from './SectionHeading.jsx';
import { skills } from '../data/index.js';
import { staggerContainer, staggerItem } from '../utils/animations.js';

const iconMap = {
  html: { icon: FaHtml5, color: '#E34F26' },
  css: { icon: FaCss3Alt, color: '#1572B6' },
  bootstrap: { icon: FaBootstrap, color: '#7952B3' },
  tailwind: { icon: SiTailwindcss, color: '#06B6D4' },

  js: { icon: FaJs, color: '#F7DF1E' },
  react: { icon: FaReact, color: '#61DAFB' },
  nextjs: { icon: SiNextdotjs, color: '#FFFFFF' },

  node: { icon: FaNodeJs, color: '#339933' },

  git: { icon: FaGitAlt, color: '#F05032' },
  github: { icon: FaGithub, color: '#FFFFFF' },
  vscode: { icon: VscVscode, color: '#007ACC' },
};

const SkillBar = ({ name, level, icon, delay = 0 }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  const { icon: Icon, color } = iconMap[icon] || { icon: FaReact, color: '#00D4FF' };

  return (
    <motion.div
      ref={ref}
      className="group"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2.5">
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ background: `${color}18`, border: `1px solid ${color}30` }}
          >
            <Icon size={14} style={{ color }} />
          </div>
          <span className="font-body text-white/70 text-sm font-medium group-hover:text-white transition-colors">
            {name}
          </span>
        </div>
        <span className="font-mono text-xs text-primary font-medium">{level}%</span>
      </div>
      <div className="skill-bar">
        <motion.div
          className="skill-fill"
          initial={{ width: '0%' }}
          animate={inView ? { width: `${level}%` } : { width: '0%' }}
          transition={{ duration: 1.5, delay: delay + 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
      </div>
    </motion.div>
  );
};

const SkillSection = ({ title, items, color = '#00D4FF', gradient, index }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      className="glass-card rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-colors duration-300"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div
          className="w-1.5 h-8 rounded-full"
          style={{ background: gradient || `linear-gradient(to bottom, ${color}, transparent)` }}
        />
        <div>
          <h3 className="font-display font-700 text-white text-base">{title}</h3>
          {/*   Backend Development [data/index.js] */}

          <p className="font-mono text-[10px] text-white/30 tracking-widest uppercase mt-0.5">
            {items.length} Technologies
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {items.map((skill, i) => (
          <SkillBar
            key={skill.name}
            name={skill.name}
            level={skill.level}
            icon={skill.icon}
            delay={i * 0.08}
          />
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <SectionWrapper id="skills">
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <SectionHeading
         
          title="My Technical"
          highlight="Expertise"
          description="Technologies I work with daily to build modern, performant web applications."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <SkillSection
            title="Frontend Development"
            items={skills.frontend}
            color="#00D4FF"
            gradient="linear-gradient(to bottom, #00D4FF, #7B2FFF)"
            index={0}
          />
          {/* Backend Development */}

          {/* <SkillSection
            title="Backend Development"
            items={skills.backend}
            color="#7B2FFF"
            gradient="linear-gradient(to bottom, #7B2FFF, #FF6B35)"
            index={1}
          /> */}

          <SkillSection
            title="Tools & Workflow"
            items={skills.tools}
            color="#FF6B35"
            gradient="linear-gradient(to bottom, #FF6B35, #FFD700)"
            index={2}
          />
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default Skills;
