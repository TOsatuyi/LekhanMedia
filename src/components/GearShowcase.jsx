import React from 'react';
import { motion } from 'framer-motion';
import './GearShowcase.css';

const GearShowcase = () => {
  const products = [
    {
      id: 1,
      category: "Imaging Systems",
      title: "Professional Cameras & Bodies",
      desc: "High-resolution mirrorless systems and industry-standard digital cinema cameras sourced from leading brands, configured for elite production standards.",
      img: "/gear-bg.png",
      // Camera inline SVG
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="product-icon-badge">
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
          <circle cx="12" cy="13" r="4"></circle>
        </svg>
      ),
      features: ["Full-Frame & Super35 Sensors", "Authorized Dealer Support", "Production-Ready Kits"]
    },
    {
      id: 2,
      category: "Optics & Glass",
      title: "Cine & Photographic Lenses",
      desc: "Premium prime sets and high-speed zoom lenses selected for superior resolving power, color consistency, and artistic highlight rolloff.",
      img: "/wedding-bg.png",
      // Aperture/Lens inline SVG
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="product-icon-badge">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="14.31" y1="8" x2="20.05" y2="17.94"></line>
          <line x1="9.69" y1="8" x2="21.17" y2="8"></line>
          <line x1="7.38" y1="12" x2="13.12" y2="2.06"></line>
          <line x1="9.69" y1="16" x2="3.95" y2="6.06"></line>
          <line x1="14.31" y1="16" x2="2.83" y2="16"></line>
          <line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>
        </svg>
      ),
      features: ["Anamorphic & Spherical Optics", "Ultra-Fast T-Stops", "PL, EF & E-Mount Options"]
    },
    {
      id: 3,
      category: "Studio Supports",
      title: "Tripods & Stabilization Gear",
      desc: "Heavy-duty carbon fiber tripods, fluid heads with precise counterbalance, and advanced electronic stabilizers for smooth, steady tracking shots.",
      img: "/hero-bg.png",
      // Tripod/Layers inline SVG
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="product-icon-badge">
          <polygon points="12 2 2 22 22 22"></polygon>
          <line x1="12" y1="2" x2="12" y2="22"></line>
        </svg>
      ),
      features: ["Carbon Fiber Construction", "Fluid Counterbalance Heads", "Quick-Release Baseplates"]
    }
  ];

  return (
    <section id="store" className="section gear-showcase-section">
      <div className="container">
        <h2 className="section-title">Equipment <span className="text-gradient">Sales & Supply</span></h2>
        <p className="section-subtitle">We partner with leading manufacturers to supply creators with the highest grade cameras, optics, and studio supports.</p>

        <div className="products-grid">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="product-card glass-panel viewfinder-container"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="viewfinder-corner viewfinder-top-left" style={{ width: '10px', height: '10px' }}></div>
              <div className="viewfinder-corner viewfinder-top-right" style={{ width: '10px', height: '10px' }}></div>
              <div className="viewfinder-corner viewfinder-bottom-left" style={{ width: '10px', height: '10px' }}></div>
              <div className="viewfinder-corner viewfinder-bottom-right" style={{ width: '10px', height: '10px' }}></div>

              <div className="product-image-frame">
                <img src={product.img} alt={product.title} className="product-img" />
                <span className="product-category-label">
                  {product.icon}
                  {product.category}
                </span>
              </div>

              <div className="product-details">
                <h3 className="product-title">{product.title}</h3>
                <p className="product-desc">{product.desc}</p>
                
                <ul className="product-features">
                  {product.features.map((feature, i) => (
                    <li key={i} className="feature-item">
                      <span className="feature-dot"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a href="#contact" className="btn btn-outline product-btn">
                  Inquire via Socials
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GearShowcase;
