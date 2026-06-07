import Hero from '../components/Hero.jsx';
import About from '../components/About.jsx';
import Resume from '../components/Resume.jsx';
import Skills from '../components/Skills.jsx';
import Services from '../components/Services.jsx';
import Portfolio from '../components/Portfolio.jsx';
import Stats from '../components/Stats.jsx';
import Testimonials from '../components/Testimonials.jsx';
import Contact from '../components/Contact.jsx';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      {/* <Resume /> */}
      <Skills />
      <Stats />
      <Services />
      <Portfolio />
      {/* <Testimonials /> */}
      <Contact />
    </>
  );
};

export default Home;
