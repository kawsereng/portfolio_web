import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import SectionWrapper from './SectionWrapper.jsx';
import SectionHeading from './SectionHeading.jsx';
import { testimonials } from '../data/index.js';
import { staggerContainer } from '../utils/animations.js';

const StarRating = ({ rating, color }) => (
  <div className="flex items-center gap-0.5">
    {[...Array(5)].map((_, i) => (
      <FaStar
        key={i}
        size={13}
        style={{ color: i < rating ? '#FFD700' : 'rgba(255,255,255,0.1)' }}
      />
    ))}
  </div>
);

const Avatar = ({ name, color }) => {
  const initials = name.split(' ').map((n) => n[0]).join('').slice(0, 2);
  return (
    <div
      className="w-12 h-12 rounded-xl flex items-center justify-center font-display font-700 text-white text-sm flex-shrink-0"
      style={{ background: `linear-gradient(135deg, ${color}, ${color}80)` }}
    >
      {initials}
    </div>
  );
};

const TestimonialCard = ({ testimonial, index }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      className="glass-card rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-colors duration-300 relative group overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Background glow */}
      <div
        className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-400"
        style={{ background: `${testimonial.color}15` }}
      />

      <div className="relative">
        {/* Quote icon */}
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
          style={{ background: `${testimonial.color}12`, border: `1px solid ${testimonial.color}25` }}
        >
          <FaQuoteLeft size={14} style={{ color: testimonial.color }} />
        </div>

        {/* Rating */}
        <StarRating rating={testimonial.rating} />

        {/* Text */}
        <p className="font-body text-white/55 text-sm leading-relaxed mt-4 mb-5">
          "{testimonial.text}"
        </p>

        {/* Author */}
        <div className="flex items-center gap-3 pt-4 border-t border-white/5">
          <Avatar name={testimonial.name} color={testimonial.color} />
          <div>
            <p className="font-display font-600 text-white text-sm">{testimonial.name}</p>
            <p className="font-mono text-[11px] text-white/35 tracking-wide mt-0.5">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <SectionWrapper id="testimonials">
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <SectionHeading
          subtitle="06 — Testimonials"
          title="Client"
          highlight="Reviews"
          description="What people say about working with me."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default Testimonials;
