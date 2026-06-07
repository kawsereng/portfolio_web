import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFacebook, FaHeart } from 'react-icons/fa';
import { navLinks, personalInfo } from '../data/index.js';

const Footer = () => {
  const socials = [
    { icon: FaGithub, href: personalInfo.github, label: 'GitHub' },
    { icon: FaLinkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: FaFacebook, href: personalInfo.facebook, label: 'Facebook' },
  ];

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/5 pt-12 pb-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-96 h-40 bg-primary/3 blur-3xl rounded-full" />

      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-display font-bold text-white text-sm">
                
              </div>
              <span className="font-display font-700 text-white text-lg">
                KAWSER
              </span>
            </div>
            <p className="font-body text-white/40 text-sm leading-relaxed mb-5">
              Front-end Developer from Bangladesh, building modern digital experiences with passion and precision.
            </p>
            <div className="flex items-center gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg glass-card border border-white/8 flex items-center justify-center text-white/40 hover:text-primary hover:border-primary/25 transition-all duration-200"
                  whileHover={{ y: -2, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={14} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-mono text-[11px] text-white/30 tracking-widest uppercase mb-4">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-1.5">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-left font-body text-white/40 text-sm hover:text-primary transition-colors duration-200 py-1"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono text-[11px] text-white/30 tracking-widest uppercase mb-4">
              Let's Connect
            </h4>
            <div className="space-y-2">
              <p className="font-body text-white/40 text-sm">{personalInfo.email}</p>
              
              <p className="font-body text-white/40 text-sm">{personalInfo.location}</p>
              <div className="pt-2">
                <span className="inline-flex items-center gap-1.5 bg-green-500/10 border border-green-500/20 rounded-full px-3 py-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="font-mono text-[10px] text-green-400 tracking-wide">Available for projects</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-white/8 to-transparent mb-6" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 ">
          <p className="font-mono text-[11px]  text-white/25">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
