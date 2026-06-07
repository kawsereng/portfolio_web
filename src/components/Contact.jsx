import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaPaperPlane,
} from 'react-icons/fa';
import { HiCheckCircle } from 'react-icons/hi';
import SectionWrapper from './SectionWrapper.jsx';
import SectionHeading from './SectionHeading.jsx';
import { personalInfo } from '../data/index.js';
import { staggerContainer, staggerItem } from '../utils/animations.js';
import emailjs from "@emailjs/browser";

const ContactItem = ({ icon: Icon, label, value, href, color }) => (
  <motion.a
    href={href}
    target={href?.startsWith('http') ? '_blank' : undefined}
    rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
    className="group flex items-center gap-4 p-4 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all duration-300"
    whileHover={{ y: -3 }}
  >
    <div
      className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
      style={{ background: `${color}15`, border: `1px solid ${color}30` }}
    >
      <Icon size={16} style={{ color }} />
    </div>

    <div>
      <p className="text-[10px] tracking-[3px] uppercase text-white/30 font-mono">
        {label}
      </p>
      <p className="text-sm text-white/80 group-hover:text-white transition">
        {value}
      </p>
    </div>
  </motion.a>
);

const Contact = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const [formData, setFormData] = useState({
    name: '', email: '',  message: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));

  // Gmail msg sender
const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    await emailjs.send(
      "service_epqrrgn",      // Service ID
      "template_flvmuom",     // Template ID
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      "USbnbW6FiXvcWxJiK"     // Public Key
    );

    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => setSubmitted(false), 4000);
  } catch (error) {
    console.log("Email error:", error);
    alert("Message send failed!");
  }

  setLoading(false);
};


  return (
    <SectionWrapper id="contact">
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <SectionHeading
          
          title="Let’s"
          highlight="Connect"
          description="Have a project idea? I’m always open to freelance & collaboration."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          
          {/* LEFT SIDE */}
          <motion.div variants={staggerItem} className="lg:col-span-2 space-y-5">

            <div className="rounded-2xl p-6 border border-white/5 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl">
              <h3 className="text-white text-lg font-semibold mb-2">
                Let’s build something amazing 🚀
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Available for freelance work, remote jobs and collaborations.
                Feel free to contact anytime.
              </p>
            </div>


            <ContactItem
              icon={FaEnvelope}
              label="Email"
              value={personalInfo.email}
              href={`mailto:${personalInfo.email}`}
              color="#00D4FF"
            />
{/* 
            <ContactItem
              icon={FaWhatsapp}
              label="WhatsApp"
              value={personalInfo.phone}
              href={`https://wa.me/${personalInfo.whatsapp}`}
              color="#25D366"
            /> */}

            <ContactItem
              icon={FaMapMarkerAlt}
              label="Location"
              value={personalInfo.location}
              href="https://maps.google.com"
              color="#FF6B35"
            />
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div variants={staggerItem} className="lg:col-span-3">

            <div className="relative rounded-2xl p-6 border border-white/5 bg-white/5 backdrop-blur-xl overflow-hidden">
              
              {/* glow */}
              <div className="absolute -top-20 -right-20 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full" />

              {submitted ? (
                <motion.div
                  className="flex flex-col items-center justify-center py-16 text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <HiCheckCircle className="text-green-400 mb-3" size={40} />
                  <h3 className="text-white text-xl font-semibold">
                    Message Sent 🎉
                  </h3>
                  <p className="text-white/50 text-sm mt-2">
                    I’ll reply as soon as possible.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="input-modern border border-white/5 bg-white/5 p-2"
                      required
                    />

                    <input 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Address"
                      className="input-modern border border-white/5 bg-white/5 p-2"
                      required
                    />
                  </div>



                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message..."
                    rows={5}
                    className="input-modern resize-none border border-white/5 bg-white/5 w-full p-2"
                    required
                  />

                  <motion.button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 rounded-xl font-medium flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:opacity-90 transition"
                    whileHover={!loading ? { scale: 1.02 } : {}}
                    whileTap={!loading ? { scale: 0.98 } : {}}
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane size={13} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default Contact;