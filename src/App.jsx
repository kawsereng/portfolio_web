import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import Sidebar from './components/Sidebar.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import LoadingScreen from './components/LoadingScreen.jsx';
import Home from './pages/Home.jsx';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Noise overlay */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Loading Screen */}
      <LoadingScreen isLoading={isLoading} />

      {/* Main App */}
      <AnimatePresence>
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Navbar />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row gap-8 pt-24 lg:pt-28">
                {/* Sidebar */}
                <div className="lg:w-[300px] flex-shrink-0">
                  <Sidebar />
                </div>

                {/* Main Content */}
                <main className="flex-1 min-w-0">
                  <Routes>
                    <Route path="/" element={<Home />} />
                  </Routes>
                  <Footer />
                </main>
              </div>
            </div>

            <ScrollToTop />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default App;
