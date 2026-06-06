import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah & James",
      role: "Wedding Clients",
      content: "Lekhan Media Filmworks captured our wedding perfectly. The cinematic quality and emotional depth of their work is unparalleled. It truly feels like a movie.",
      rating: 5
    },
    {
      id: 2,
      name: "Elevate Brand Co.",
      role: "Commercial Partner",
      content: "Their creative direction and visual execution brought our campaign to life in ways we never imagined. Professional, visionaries, and absolute perfectionists.",
      rating: 5
    },
    {
      id: 3,
      name: "Michael T.",
      role: "Musician",
      content: "The music video they produced for me was beyond expectations. The lighting, the mood, the editing—everything was world-class.",
      rating: 5
    }
  ];

  // Auto-play option
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handlePrev = () => {
    setActiveIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setActiveIndex(prev => (prev + 1) % testimonials.length);
  };

  return (
    <section className="section testimonials-section">
      <div className="container">
        <h2 className="section-title text-center">Client <span className="text-gradient">Diaries</span></h2>
        <p className="section-subtitle">A collection of creative visual narratives and personal testimonials.</p>

        <div className="carousel-wrapper">
          <button className="carousel-arrow left" onClick={handlePrev}>
            <ChevronLeft size={24} />
          </button>
          
          <div className="carousel-content-box">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="testimonial-slide glass-panel"
              >
                <div className="quote-icon-bg">
                  <Quote size={120} />
                </div>
                <div className="stars">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star key={i} size={18} fill="var(--accent-orange)" color="var(--accent-orange)" />
                  ))}
                </div>
                <p className="testimonial-content">"{testimonials[activeIndex].content}"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    {testimonials[activeIndex].name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="author-name">{testimonials[activeIndex].name}</h4>
                    <p className="author-role">{testimonials[activeIndex].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button className="carousel-arrow right" onClick={handleNext}>
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="carousel-dots">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              className={`carousel-dot ${activeIndex === idx ? 'active' : ''}`}
              onClick={() => setActiveIndex(idx)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
