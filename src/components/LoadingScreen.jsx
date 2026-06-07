import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ isLoading }) => {
  return (
    <>
    
    <AnimatePresence>
  {isLoading && (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#050816]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6 } }}
    >
      {/* glow background */}
      <div className="absolute w-[400px] h-[400px] bg-cyan-500/10 blur-3xl rounded-full" />
      <div className="absolute w-[300px] h-[300px] bg-purple-500/10 blur-3xl rounded-full animate-pulse" />

      <div className="relative flex flex-col items-center text-center">
        
        {/* Logo / Name */}
        <motion.div
          className="text-white text-2xl md:text-3xl font-bold tracking-widest"
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          MD KAWSER MIA
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="text-white/40 text-xs md:text-sm tracking-[6px] uppercase mt-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Loading Portfolio Experience
        </motion.p>

        {/* Loader dots */}
        <div className="flex gap-2 mt-6">
          <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" />
          <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-150" />
          <span className="w-2 h-2 bg-pink-400 rounded-full animate-bounce delay-300" />
        </div>

        {/* Progress bar */}
        <div className="w-[220px] h-[3px] bg-white/10 rounded-full mt-6 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.2, ease: "easeInOut" }}
          />
        </div>

        {/* small text */}
        <motion.span
          className="text-white/20 text-[10px] tracking-[3px] mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Please wait...
        </motion.span>
      </div>
    </motion.div>
  )}
</AnimatePresence>
    </>
  );
};

export default LoadingScreen;
