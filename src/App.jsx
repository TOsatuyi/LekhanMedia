import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import GearShowcase from './components/GearShowcase';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <div className="film-grain"></div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <div className="editorial-line"></div>
        <Services />
        <div className="editorial-line"></div>
        <Portfolio />
        <div className="editorial-line"></div>
        <GearShowcase />
        <div className="editorial-line"></div>
        <Testimonials />
        <div className="editorial-line"></div>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
