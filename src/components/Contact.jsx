import React from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, MapPin, Mail } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="contact-grid">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="contact-info"
          >
            <h2 className="section-title text-left">The <br/><span className="text-gradient">Co-Creation</span> Studio</h2>
            <p className="contact-desc">
              Whether it's a grand outdoor wedding, a cinematic commercial campaign, or a tailored editorial session, we're ready to bring your vision to life.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon"><Phone size={20} /></div>
                <div>
                  <h4>WhatsApp / Call</h4>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><Mail size={20} /></div>
                <div>
                  <h4>Email</h4>
                  <p>hello@lekhanmedia.com</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><MapPin size={20} /></div>
                <div>
                  <h4>Studio Location</h4>
                  <p>123 Cinematic Blvd, Creative District, NY 10001</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="contact-form-wrapper glass-panel"
          >
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <input type="text" placeholder="Your Name" required className="form-input" />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required className="form-input" />
              </div>
              <div className="form-group">
                <select className="form-input">
                  <option value="">Select Service</option>
                  <option value="wedding">Wedding Cinematography</option>
                  <option value="commercial">Commercial Shoot</option>
                  <option value="portrait">Portrait Session</option>
                  <option value="other">Other Inquiry</option>
                </select>
              </div>
              <div className="form-group">
                <textarea placeholder="Tell us about your project..." rows="5" required className="form-input"></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Send Inquiry <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
