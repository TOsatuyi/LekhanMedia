import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Services.css';

const Services = () => {
  const [activeTab, setActiveTab] = useState(0);

  const servicesData = [
    {
      id: 0,
      title: "Photography",
      desc: "High-end portrait, wedding, and commercial photography tailored to your brand. We frame fleeting glances and artistic silhouettes in timeless crystal quality.",
      img: "/wedding-bg.png",
      gear: {
        camera: "Sony Alpha 7R V (61 Megapixels)",
        lens: "Sony G-Master 85mm f/1.2 & 35mm f/1.4",
        lighting: "Profoto D2 Studio Pack & Reflector Softboxes"
      }
    },
    {
      id: 1,
      title: "Cinematic Videography",
      desc: "Story-driven, visually stunning video production with industry-standard cinema cameras. We capture movement, atmosphere, and auditory rhythm to sculpt absolute emotion.",
      img: "/gear-bg.png",
      gear: {
        camera: "RED V-Raptor 8K VV / ARRI Alexa Mini LF",
        lens: "Zeiss Supreme Prime 21mm, 35mm & 50mm T1.5",
        lighting: "Aputure 600d Pro & Nova P600c Soft Panels"
      }
    },
    {
      id: 2,
      title: "Creative Direction",
      desc: "Comprehensive visual strategy, set design, and artistic guidance for your campaigns. We align lenses, lighting, and wardrobe with absolute brand intent.",
      img: "/hero-bg.png",
      gear: {
        camera: "Bespoke Set Design Mockups",
        lens: "Pre-Visualization Digital Storyboards",
        lighting: "Atmosphere & Color Temperature Maps"
      }
    },
    {
      id: 3,
      title: "Post-Production",
      desc: "Professional color grading, sound design, and master retouching for flawless, theater-level results. We treat each raw frame with chemical-grade color precision.",
      img: "/gear-bg.png",
      gear: {
        camera: "DaVinci Resolve Studio Grading Suite",
        lens: "Calibrated Flanders Scientific OLED Reference",
        lighting: "Dolby Atmos Spatial Audio Reference Mix"
      }
    }
  ];

  return (
    <section id="services" className="section craft-section">
      <div className="container">
        <h2 className="section-title text-center">The <span className="text-gradient">Craft</span> & Arsenal</h2>
        <p className="section-subtitle">A unified study of visual methods and premium cinema equipment.</p>

        <div className="craft-grid">
          {/* Left Tabs List */}
          <div className="craft-tabs-list">
            {servicesData.map((service, index) => (
              <button
                key={service.id}
                className={`craft-tab-btn ${activeTab === index ? 'active' : ''}`}
                onClick={() => setActiveTab(index)}
              >
                <span className="craft-tab-num">0{index + 1} //</span>
                <span className="craft-tab-name">{service.title}</span>
              </button>
            ))}
          </div>

          {/* Right Showcase Card */}
          <div className="craft-showcase-panel">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="craft-details-card glass-panel viewfinder-container"
              >
                <div className="viewfinder-corner viewfinder-top-left"></div>
                <div className="viewfinder-corner viewfinder-top-right"></div>
                <div className="viewfinder-corner viewfinder-bottom-left"></div>
                <div className="viewfinder-corner viewfinder-bottom-right"></div>

                <div className="craft-showcase-grid">
                  {/* Left Column: Details */}
                  <div className="craft-info-pane">
                    <span className="craft-category-badge">METHODOLOGY 0{activeTab + 1}</span>
                    <h3 className="craft-title">{servicesData[activeTab].title}</h3>
                    <p className="craft-desc">{servicesData[activeTab].desc}</p>

                    {/* Gear specifications block */}
                    <div className="craft-gear-specs">
                      <h4 className="gear-specs-heading">THE CHOSEN ARSENAL</h4>
                      <div className="gear-spec-row">
                        <span className="spec-label">RIG SYSTEM:</span>
                        <span className="spec-value">{servicesData[activeTab].gear.camera}</span>
                      </div>
                      <div className="gear-spec-row">
                        <span className="spec-label">OPTICS:</span>
                        <span className="spec-value">{servicesData[activeTab].gear.lens}</span>
                      </div>
                      <div className="gear-spec-row">
                        <span className="spec-label">LIGHTING & AUX:</span>
                        <span className="spec-value">{servicesData[activeTab].gear.lighting}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Visual Frame */}
                  <div className="craft-visual-pane">
                    <img 
                      src={servicesData[activeTab].img} 
                      alt={servicesData[activeTab].title} 
                      className="craft-visual-img" 
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
