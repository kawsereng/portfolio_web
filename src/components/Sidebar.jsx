// Sidebar component for displaying user information and social links
// Includes avatar, name, title, bio, location, email, and download CV button

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFacebook, FaMapMarkerAlt, FaEnvelope, FaDownload } from 'react-icons/fa';
import { personalInfo } from '../data/index.js';
import { slideLeft } from '../utils/animations.js';
import Logo from '../assets/Logo.webp';
const Avatar = () => (
  <div className="relative mx-auto w-32 h-32 mb-5">
    {/* Spinning ring */}
    <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30 animate-spin-slow" />
    {/* Glow */}
    <div className="absolute inset-2 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-sm" />
    {/* Avatar */}
    <div className="relative w-full h-full bg-cover rounded-full bg-gradient-to-br from-dark-600 to-dark-700 border-2 border-primary/20 flex items-center justify-center overflow-hidden">
        <img src={Logo} alt="Logo" />
    </div>
    {/* Status dot */}
    <div className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-green-400 border-2 border-dark-800 shadow-lg shadow-green-400/50" />
  </div>
);

const Sidebar = () => {
  const socials = [
    { icon: FaGithub, href: personalInfo.github, label: 'GitHub', color: '#fff' },
    { icon: FaLinkedin, href: personalInfo.linkedin, label: 'LinkedIn', color: '#0A66C2' },
    { icon: FaFacebook, href: personalInfo.facebook, label: 'Facebook', color: '#1877F2' },
  ];

  return (
    <motion.aside
      className="w-full lg:w-[300px] lg:sticky lg:top-24 lg:self-start"
      variants={slideLeft}
      initial="hidden"
      animate="visible"
      transition={{ delay: 2.8 }}
    >
      <div className="glass-card rounded-3xl p-7 border border-white/5 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />

        <div className="relative text-center">
          <Avatar />

          <h2 className="font-display font-700 text-2xl text-white mb-1">
            {personalInfo.name}
          </h2>
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-4">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-primary font-mono text-xs font-500 tracking-wide">
              {personalInfo.title}
            </span>
          </div>

          <p className="text-white/50 font-body text-sm leading-relaxed mb-6">
            {personalInfo.bio}
          </p>

          {/* Info items */}
          <div className="space-y-3 mb-6 text-left">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <FaMapMarkerAlt className="text-primary" size={12} />
              </div>
              <div>
                <p className="text-white/30 font-mono text-[10px] tracking-widest uppercase">Location</p>
                <p className="text-white/80 font-body text-sm">{personalInfo.location}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <FaEnvelope className="text-primary" size={12} />
              </div>
              <div>
                <p className="text-white/30 font-mono text-[10px] tracking-widest uppercase">Email</p>
                <p className="text-white/80 font-body text-sm truncate">{personalInfo.email}</p>
              </div>
            </div>
          </div>

          {/* Socials */}
          <div className="flex items-center justify-center gap-3 mb-6">
            {socials.map(({ icon: Icon, href, label, color }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-xl glass-card border border-white/8 flex items-center justify-center text-white/50 hover:text-white transition-all duration-300 hover:border-primary/30 hover:bg-primary/5"
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </div>

          {/* Buttons */}
          <div className="space-y-3">
            <a
              href={personalInfo.resumeLink}
              download
              className="border border-[#202E45] py-2 w-full flex items-center justify-center gap-2"
            >
              <FaDownload size={13} />
              Download Resume
            </a>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border border-[#202E45] py-2 w-full flex items-center justify-center gap-2"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </motion.aside>
  );
};

export default Sidebar;
