import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import Artists from '../components/Artists';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Artists />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;