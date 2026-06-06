import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section manifesto-section">
      <div className="container">
        <div className="manifesto-grid">
          {/* Column 1: Manifesto Title */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="manifesto-col-title"
          >
            <span className="col-num">01 / BRAND MANIFESTO</span>
            <h2 className="manifesto-heading">
              Crafting <br/>
              Visual <br/>
              <span className="text-gradient">Legends</span>
            </h2>
          </motion.div>

          {/* Column 2: Manifesto Text */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="manifesto-col-text"
          >
            <p className="manifesto-paragraph">
              Lekhan Media Filmworks is more than a production company; it is an institution of storytelling. We blend cutting-edge cinematic technology with artistic vision to create timeless memories and striking visual brands.
            </p>
            <p className="manifesto-paragraph">
              From breathtaking wedding films to high-end commercial productions, our approach is defined by meticulous attention to detail, emotional depth, and a commitment to visual excellence.
            </p>
          </motion.div>

          {/* Column 3: Stats Focus Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="manifesto-col-stats"
          >
            <div className="manifesto-stat-card viewfinder-container">
              <div className="viewfinder-corner viewfinder-top-left" style={{ width: '8px', height: '8px' }}></div>
              <div className="viewfinder-corner viewfinder-bottom-right" style={{ width: '8px', height: '8px' }}></div>
              
              <h3 className="manifesto-stat-num">10+</h3>
              <span className="manifesto-stat-label">YEARS OF EXCELLENCE</span>
            </div>

            <div className="manifesto-stat-card viewfinder-container">
              <div className="viewfinder-corner viewfinder-top-left" style={{ width: '8px', height: '8px' }}></div>
              <div className="viewfinder-corner viewfinder-bottom-right" style={{ width: '8px', height: '8px' }}></div>
              
              <h3 className="manifesto-stat-num">500+</h3>
              <span className="manifesto-stat-label">STORIES CINEMATIZED</span>
            </div>

            <div className="manifesto-stat-card viewfinder-container">
              <div className="viewfinder-corner viewfinder-top-left" style={{ width: '8px', height: '8px' }}></div>
              <div className="viewfinder-corner viewfinder-bottom-right" style={{ width: '8px', height: '8px' }}></div>
              
              <h3 className="manifesto-stat-num">20+</h3>
              <span className="manifesto-stat-label">GLOBAL FILM AWARDS</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
