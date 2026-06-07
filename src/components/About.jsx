import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaDownload, FaCalendar, FaMapMarkerAlt, FaEnvelope, FaBriefcase } from 'react-icons/fa';
import { HiLightningBolt } from 'react-icons/hi';
import SectionWrapper from './SectionWrapper.jsx';
import SectionHeading from './SectionHeading.jsx';
import { personalInfo } from '../data/index.js';
import { staggerContainer, staggerItem, fadeUp } from '../utils/animations.js';

const InfoItem = ({ icon: Icon, label, value }) => (
  <div className="flex items-start gap-3">
    <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
      <Icon className="text-primary" size={13} />
    </div>
    <div>
      <p className="font-mono text-[11px] text-white/30 tracking-widest uppercase">{label}</p>
      <p className="font-body text-white/80 text-sm mt-0.5">{value}</p>
    </div>
  </div>
);

const About = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  const stats = [
    { value: '3+', label: 'Years Exp.' },
    { value: '50+', label: 'Projects' },
    { value: '30+', label: 'Clients' },
    { value: '100%', label: 'Satisfaction' },
  ];

  return (
    <SectionWrapper id="about">
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <SectionHeading
          
          title="Who I"
          highlight="Am"
          description="Front-End Developer passionate about building modern, responsive, and user-focused web experiences that combine clean design with seamless functionality."
        />

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-start">
          {/* Left: Text */}
          <motion.div variants={staggerItem} className="space-y-6">
            <div className="glass-card rounded-2xl p-6 border border-white/5">
              <div className="flex items-center gap-2 mb-4">
                <HiLightningBolt className="text-primary" size={16} />
                <span className="font-mono text-xs text-primary tracking-widest uppercase">
                  My Story
                </span>
              </div>
              {personalInfo.longBio.split('\n\n').map((paragraph, i) => (
                <p key={i} className="font-body text-white/55 text-sm leading-relaxed mb-4 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Mini stats */}
            <div className="grid grid-cols-4 gap-3">
              {stats.map(({ value, label }) => (
                <div key={label} className="glass-card rounded-xl p-3 border border-white/5 text-center">
                  <div className="font-display font-800 gradient-text text-xl mb-0.5">{value}</div>
                  <div className="font-mono text-[10px] text-white/35 tracking-wide">{label}</div>
                </div>
              ))}
            </div>

            <a
              href={personalInfo.resumeLink}
              download
              className="border border-[#202E45] p-4 inline-flex items-center gap-2 text-sm"
            >
              <FaDownload size={12} />
              Download CV
            </a>
          </motion.div>

          {/* Right: Info */}
          <motion.div variants={staggerItem} className="space-y-4">
            <div className="glass-card rounded-2xl p-6 border border-white/5 space-y-4">
              <p className="font-mono text-[11px] text-white/30 tracking-widest uppercase mb-2">
                Personal Details
              </p>
              <InfoItem icon={FaCalendar} label="Available From" value="Immediately" />
              <InfoItem icon={FaBriefcase} label="Position" value={personalInfo.title} />
              <InfoItem icon={FaMapMarkerAlt} label="Location" value={personalInfo.location} />
              <InfoItem icon={FaEnvelope} label="Email" value={personalInfo.email} />
            </div>

            {/* Skills summary */}
            <div className="glass-card rounded-2xl p-6 border border-white/5">
              <p className="font-mono text-[11px] text-white/30 tracking-widest uppercase mb-4">
                Core Expertise
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  'React.js', 'Node.js', 'Next.js', 'MongoDB',
                  'JavaScript', 'Tailwind CSS', 'Redux',
                  'REST APIs', 'Git & GitHub', 'Responsive Design', 'Framer Motion',
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full glass-card border border-white/8 font-mono text-xs text-white/55 hover:text-primary hover:border-primary/25 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default About;
