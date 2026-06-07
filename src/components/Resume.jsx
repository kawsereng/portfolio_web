import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaBriefcase, FaCheckCircle } from 'react-icons/fa';
import SectionWrapper from './SectionWrapper.jsx';
import SectionHeading from './SectionHeading.jsx';
import { education, experience } from '../data/index.js';
import { staggerContainer, staggerItem } from '../utils/animations.js';

const TimelineCard = ({ item, type, index }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const isEdu = type === 'education';

  return (
    <motion.div
      ref={ref}
      className="relative pl-10"
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-2 flex flex-col items-center">
        <div className="timeline-dot z-10" />
        {index < (isEdu ? education.length - 1 : experience.length - 1) && (
          <div className="w-[2px] h-full mt-2 bg-gradient-to-b from-primary/30 to-transparent" style={{ minHeight: '60px' }} />
        )}
      </div>

      {/* Card */}
      <div className="glass-card-hover rounded-2xl p-5 border border-white/5 mb-6 group">
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
          <div>
            <h3 className="font-display font-700 text-white text-base leading-tight mb-1">
              {isEdu ? item.degree : item.role}
            </h3>
            <p className="font-body text-primary text-sm font-medium">
              {isEdu ? item.institution : item.company}
            </p>
          </div>
          <div className="text-right">
            <span className="inline-block bg-primary/10 border border-primary/20 text-primary font-mono text-[10px] tracking-wide px-3 py-1 rounded-full">
              {item.period}
            </span>
            {!isEdu && (
              <p className="font-mono text-[10px] text-white/30 mt-1.5 tracking-wider">{item.type}</p>
            )}
          </div>
        </div>

        {/* Location */}
        <p className="font-mono text-[11px] text-white/30 tracking-widest uppercase mb-3">
          📍 {item.location}
        </p>

        {/* Description */}
        <p className="font-body text-white/50 text-sm leading-relaxed mb-3">
          {item.description}
        </p>

        {/* Grade or Achievements */}
        {isEdu && item.grade && (
          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-primary" size={11} />
            <span className="font-mono text-xs text-primary/70">{item.grade}</span>
          </div>
        )}
        {!isEdu && item.achievements && (
          <div className="space-y-1.5">
            {item.achievements.map((ach, i) => (
              <div key={i} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                <p className="font-body text-white/45 text-xs">{ach}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

const Resume = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <SectionWrapper id="resume">
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <SectionHeading
          subtitle="02 — Resume"
          title="My"
          highlight="Journey"
          description="A timeline of my educational background and professional experience."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div variants={staggerItem}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center">
                <FaGraduationCap className="text-primary" size={16} />
              </div>
              <div>
                <h3 className="font-display font-700 text-white text-lg">Education</h3>
                <p className="font-mono text-[11px] text-white/30 tracking-widest uppercase">Academic Background</p>
              </div>
            </div>
            <div className="relative">
              <div className="timeline-line" />
              {education.map((item, index) => (
                <TimelineCard key={item.id} item={item} type="education" index={index} />
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div variants={staggerItem}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/5 border border-secondary/20 flex items-center justify-center">
                <FaBriefcase className="text-secondary" size={16} />
              </div>
              <div>
                <h3 className="font-display font-700 text-white text-lg">Experience</h3>
                <p className="font-mono text-[11px] text-white/30 tracking-widest uppercase">Work History</p>
              </div>
            </div>
            <div className="relative">
              <div className="timeline-line" style={{ background: 'linear-gradient(to bottom, #7B2FFF, #FF6B35, transparent)' }} />
              {experience.map((item, index) => (
                <TimelineCard key={item.id} item={item} type="experience" index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default Resume;
