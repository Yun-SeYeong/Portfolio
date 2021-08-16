import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Careers from './Career/Careers';

import { PortfolioProvider } from '../context/context';

import {
  heroData,
  aboutData,
  projectsData,
  contactData,
  footerData,
  careersData,
} from '../mock/data';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});
  const [careers, setCareer] = useState([]);

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
    setCareer([...careersData]);
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, careers, projects, contact, footer }}>
      <Hero />
      <About />
      <Careers />
      <Projects />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
