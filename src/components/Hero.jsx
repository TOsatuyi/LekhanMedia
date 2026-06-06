import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="overlay"></div>
        <div className="glow-orb glow-orb-primary" style={{ top: '10%', left: '10%' }}></div>
        <div className="glow-orb glow-orb-secondary" style={{ bottom: '15%', right: '15%' }}></div>
      </div>

      <div className="container hero-container-grid">
        {/* Left Editorial Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="hero-left-column"
        >
          <div className="hero-editorial-badge">
            <span className="editorial-mini-line"></span>
            <span className="editorial-badge-text">CINEMATIC STORIES</span>
          </div>

          <h1 className="hero-editorial-title">
            Where <br/>
            <span className="text-gradient">Vision</span> <br/>
            Becomes <br/>
            Timeless.
          </h1>

          <p className="hero-editorial-subtitle">
            Lekhan Media Filmworks. A globally respected creative media house crafting premium visual stories and breathing life into artistic frames.
          </p>

          <div className="hero-actions-editorial">
            <a href="#services" className="btn btn-primary btn-editorial">
              Explore Services <ChevronRight size={18} />
            </a>
            <a href="#portfolio" className="btn btn-outline btn-editorial">
              View Showcase
            </a>
          </div>
        </motion.div>

        {/* Right Framed Artwork Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="hero-right-column"
        >
          <div className="editorial-artwork-frame viewfinder-container">
            <div className="viewfinder-corner viewfinder-top-left"></div>
            <div className="viewfinder-corner viewfinder-top-right"></div>
            <div className="viewfinder-corner viewfinder-bottom-left"></div>
            <div className="viewfinder-corner viewfinder-bottom-right"></div>
            
            <img src="/hero-bg.png" alt="Outdoor sunlit valley" className="hero-framed-image" />
          </div>

          {/* Rotating Film Badge */}
          <div className="film-badge-wrapper">
            <svg viewBox="0 0 100 100" className="film-badge-svg">
              <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
              <text>
                <textPath href="#circlePath" fill="var(--accent-gold-dark)" letterSpacing="2.5px" fontSize="7.5">
                  LEKHAN MEDIA • FILMWORKS • EST. 2016 •
                </textPath>
              </text>
            </svg>
            <div className="badge-center-dot"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
