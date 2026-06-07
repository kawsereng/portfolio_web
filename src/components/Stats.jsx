import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

const StatItem = ({ stat, index }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  const colors = ['#00D4FF', '#7B2FFF', '#FF6B35', '#FFD700'];
  const color = colors[index % colors.length];

  return (
    <motion.div
      ref={ref}
      className="relative glass-card rounded-2xl p-6 border border-white/5 text-center overflow-hidden group hover:border-white/10 transition-colors duration-300"
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.12 }}
    >
      {/* Glow bg */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl"
        style={{ background: `radial-gradient(circle at 50% 50%, ${color}08, transparent 70%)` }}
      />

      {/* Bottom line */}
      <div
        className="absolute bottom-0 left-6 right-6 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-400"
        style={{ background: `linear-gradient(to right, transparent, ${color}, transparent)` }}
      />

      <div className="relative">
        <div
          className="font-display font-800 mb-2"
          style={{
            fontSize: 'clamp(2.2rem, 5vw, 3rem)',
            lineHeight: 1,
            background: `linear-gradient(135deg, ${color}, ${color}80)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          {inView ? (
            <CountUp
              start={0}
              end={stat.value}
              duration={2}
              suffix={stat.suffix}
            />
          ) : (
            `0${stat.suffix}`
          )}
        </div>
        <p className="font-body text-white/50 text-sm font-medium">{stat.label}</p>
      </div>
    </motion.div>
  );
};

const Stats = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/3 via-secondary/3 to-accent/3" />
      <div className="absolute inset-0 border-y border-white/4" />

      <div className="relative">
        <motion.div
          ref={ref}
          className="grid grid-cols-2 xl:grid-cols-4 gap-4"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >

        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
