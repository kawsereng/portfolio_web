import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGlobe, FaMobileAlt, FaPlug, FaCode, FaServer, FaPalette } from 'react-icons/fa';
import SectionWrapper from './SectionWrapper.jsx';
import SectionHeading from './SectionHeading.jsx';
import { services } from '../data/index.js';
import { staggerContainer, staggerItem } from '../utils/animations.js';

const iconMap = {
  web: FaGlobe,
  responsive: FaMobileAlt,
  api: FaPlug,
  frontend: FaCode,
  fullstack: FaServer,
  uiux: FaPalette,
};

const gradients = [
  'from-[#00D4FF]/20 to-[#7B2FFF]/20',
  'from-[#7B2FFF]/20 to-[#FF6B35]/20',
  'from-[#FF6B35]/20 to-[#FFD700]/20',
  'from-[#FFD700]/20 to-[#00D4FF]/20',
  'from-[#00D4FF]/20 to-[#FF6B35]/20',
  'from-[#7B2FFF]/20 to-[#00D4FF]/20',
];

const iconColors = ['#00D4FF', '#7B2FFF', '#FF6B35', '#FFD700', '#00D4FF', '#7B2FFF'];

const ServiceCard = ({ service, index }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const Icon = iconMap[service.icon] || FaCode;

  return (
    <motion.div
      ref={ref}
      className="glass-card-hover rounded-2xl p-6 border border-white/5 relative overflow-hidden group"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Background gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradients[index]} opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl`}
      />

      {/* Corner decoration */}
      <div className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-5 transition-opacity duration-400">
        <Icon size={96} style={{ color: iconColors[index] }} />
      </div>

      <div className="relative z-10">
        {/* Icon */}
        <motion.div
          className="service-icon-wrap mb-5"
          whileHover={{ rotate: 5, scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 300 }}
          style={{ borderColor: `${iconColors[index]}20` }}
        >
          <Icon size={24} style={{ color: iconColors[index] }} />
        </motion.div>

        {/* Number */}
        <p className="font-mono text-[11px] text-white/20 tracking-widest mb-2">
          {String(index + 1).padStart(2, '0')}
        </p>

        <h3 className="font-display font-700 text-white text-lg mb-3 group-hover:text-white transition-colors">
          {service.title}
        </h3>

        <p className="font-body text-white/50 text-sm leading-relaxed mb-5">
          {service.description}
        </p>

        {/* Features */}
        <div className="grid grid-cols-2 gap-1.5">
          {service.features.map((feature) => (
            <div key={feature} className="flex items-center gap-1.5">
              <div
                className="w-1 h-1 rounded-full flex-shrink-0"
                style={{ background: iconColors[index] }}
              />
              <span className="font-mono text-[10px] text-white/40">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <SectionWrapper id="services">
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <SectionHeading
          
          title="What I"
          highlight="Offer"
          description="Comprehensive web development services tailored to your unique needs and goals."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default Services;
