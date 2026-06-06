import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, Play, Pause, Volume2, RotateCcw, X, Tv, Info, ChevronLeft, ChevronRight } from 'lucide-react';
import './Portfolio.css';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playTime, setPlayTime] = useState(0);
  const containerRef = useRef(null);

  const filters = ['All', 'Weddings', 'Portraits', 'Commercial', 'Cinematic'];
  
  const projects = [
    { 
      id: 1, 
      title: 'Ethereal Romance', 
      category: 'Weddings', 
      img: '/wedding-bg.png', 
      size: 'large',
      director: "Aarav Lekhan",
      camera: "RED V-Raptor 8K",
      lens: "Zeiss Supreme Prime 50mm",
      duration: "04:12"
    },
    { 
      id: 2, 
      title: 'Neon Shadows', 
      category: 'Portraits', 
      img: '/hero-bg.png', 
      size: 'small',
      director: "Aarav Lekhan",
      camera: "Sony FX6",
      lens: "Sigma Art 85mm f/1.4",
      duration: "02:45"
    },
    { 
      id: 3, 
      title: 'Tech Vision', 
      category: 'Commercial', 
      img: '/gear-bg.png', 
      size: 'medium',
      director: "Aarav Lekhan",
      camera: "ARRI Alexa Mini LF",
      lens: "Cooke S7/i Prime 32mm",
      duration: "01:30"
    },
    { 
      id: 4, 
      title: 'Soulful Vows', 
      category: 'Weddings', 
      img: '/wedding-bg.png', 
      size: 'small',
      director: "Nisha Sen",
      camera: "Sony FX3",
      lens: "Sony G-Master 35mm f/1.4",
      duration: "03:50"
    },
    { 
      id: 5, 
      title: 'Midnight Drive', 
      category: 'Cinematic', 
      img: '/hero-bg.png', 
      size: 'large',
      director: "Aarav Lekhan",
      camera: "RED V-Raptor 8K",
      lens: "Zeiss Supreme Prime 21mm",
      duration: "05:10"
    },
    { 
      id: 6, 
      title: 'Studio Flow', 
      category: 'Portraits', 
      img: '/gear-bg.png', 
      size: 'medium',
      director: "Nisha Sen",
      camera: "Sony FX6",
      lens: "Sony G-Master 50mm f/1.2",
      duration: "02:15"
    },
  ];

  // Simulating play scrubber progress
  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setPlayTime(prev => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const formatScrubTime = (percent, durationStr) => {
    if (!percent) return "00:00";
    const [minStr, secStr] = durationStr.split(":");
    const totalSec = parseInt(minStr) * 60 + parseInt(secStr);
    const currentSec = Math.floor((percent / 100) * totalSec);
    const cMin = Math.floor(currentSec / 60);
    const cSec = currentSec % 60;
    return `${cMin.toString().padStart(2, '0')}:${cSec.toString().padStart(2, '0')}`;
  };

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -420, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 420, behavior: 'smooth' });
    }
  };

  return (
    <section id="portfolio" className="section portfolio-section">
      <div className="container">
        <h2 className="section-title">Selected <span className="text-gradient">Masterpieces</span></h2>
        <p className="section-subtitle">A glimpse into our visual storytelling journey.</p>
        
        <div className="portfolio-filters">
          {filters.map(filter => (
            <button 
              key={filter} 
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
              style={{ position: 'relative' }}
            >
              {activeFilter === filter && (
                <motion.span 
                  layoutId="activeFilterBg" 
                  className="filter-btn-bg"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="filter-btn-text">{filter}</span>
            </button>
          ))}
        </div>

        {/* Horizontal Film Strip Carousel */}
        <div className="film-strip-slider-container">
          <button className="film-strip-arrow left" onClick={scrollLeft}>
            <ChevronLeft size={22} />
          </button>
          
          <div className="film-strip-row" ref={containerRef}>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                className="film-strip-card"
                onClick={() => {
                  setSelectedProject(project);
                  setIsPlaying(false);
                  setPlayTime(0);
                }}
              >
                <div className="film-strip-inner viewfinder-container">
                  <div className="viewfinder-corner viewfinder-top-left" style={{ width: '8px', height: '8px' }}></div>
                  <div className="viewfinder-corner viewfinder-bottom-right" style={{ width: '8px', height: '8px' }}></div>
                  
                  <img src={project.img} alt={project.title} className="film-strip-img" />
                  
                  <div className="film-strip-overlay">
                    <div className="film-overlay-text">
                      <span className="film-strip-cat">{project.category}</span>
                      <h3 className="film-strip-title">{project.title}</h3>
                    </div>
                    <div className="film-strip-play-btn">
                      <Play size={16} fill="white" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <button className="film-strip-arrow right" onClick={scrollRight}>
            <ChevronRight size={22} />
          </button>
        </div>
        
        <div className="text-center mt-4">
           <a href="#contact" className="btn btn-outline" style={{ marginTop: '3rem' }}>View Full Archive</a>
        </div>
      </div>

      {/* Cinematic Theater Lightbox */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              className="lightbox-window glass-panel"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="lightbox-close" onClick={() => setSelectedProject(null)}>
                <X size={24} />
              </button>

              <div className="lightbox-theater-screen">
                <div className={`lightbox-cinematic-frame ${isPlaying ? 'playing' : ''}`}>
                  <img 
                    src={selectedProject.img} 
                    alt={selectedProject.title} 
                    className="lightbox-main-img" 
                  />
                  
                  {/* Subtle noise lines overlay when playing */}
                  <div className="lightbox-cinema-lines"></div>
                  
                  {/* Play overlay overlay */}
                  {!isPlaying && (
                    <div className="lightbox-play-overlay" onClick={() => setIsPlaying(true)}>
                      <div className="play-button-glowing">
                        <Play size={36} fill="white" />
                      </div>
                    </div>
                  )}

                  {/* Top Cine HUD */}
                  <div className="lightbox-cine-hud-top">
                    <div className="hud-badge"><span className="rec-dot"></span> REC</div>
                    <div className="hud-spec">24 FPS | ProRes 422</div>
                  </div>

                  {/* Cinema Aspect Bars */}
                  <div className="cine-bar-top"></div>
                  <div className="cine-bar-bottom"></div>
                </div>

                {/* Custom simulated player scrub controls */}
                <div className="lightbox-player-controls">
                  <button className="control-btn" onClick={() => setIsPlaying(!isPlaying)}>
                    {isPlaying ? <Pause size={18} fill="white" /> : <Play size={18} fill="white" />}
                  </button>
                  
                  <button className="control-btn" onClick={() => setPlayTime(0)}>
                    <RotateCcw size={18} />
                  </button>

                  <div className="progress-container">
                    <div className="progress-bar-total">
                      <div 
                        className="progress-bar-current" 
                        style={{ width: `${playTime}%` }}
                      ></div>
                    </div>
                  </div>

                  <span className="player-time">
                    {formatScrubTime(playTime, selectedProject.duration)} / {selectedProject.duration}
                  </span>

                  <div className="sound-control">
                    <Volume2 size={18} />
                    <div className="sound-slider-fake"></div>
                  </div>
                </div>
              </div>

              {/* Movie production info */}
              <div className="lightbox-details-grid">
                <div className="detail-header-block">
                  <span className="detail-tag">{selectedProject.category}</span>
                  <h3 className="detail-title">{selectedProject.title}</h3>
                  <p className="detail-description">
                    A cinematic narrative study exploring the boundary of shadow, light, and depth. Crafted to evoke a profound emotional response and visual permanence.
                  </p>
                </div>
                
                <div className="detail-specifications glass-panel">
                  <div className="spec-item">
                    <span className="spec-label"><Tv size={14} style={{ marginRight: '6px' }} /> Camera Rig</span>
                    <span className="spec-val">{selectedProject.camera}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label"><Maximize2 size={14} style={{ marginRight: '6px' }} /> Optics</span>
                    <span className="spec-val">{selectedProject.lens}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label"><Info size={14} style={{ marginRight: '6px' }} /> Director</span>
                    <span className="spec-val">{selectedProject.director}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
