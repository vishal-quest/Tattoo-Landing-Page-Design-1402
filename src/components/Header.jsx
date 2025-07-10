import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaInstagram, FaFacebook } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-emerald-400"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Ink & Soul
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['Home', 'About', 'Services', 'Gallery', 'Artists', 'Contact'].map((item) => (
              <motion.button
                key={item}
                whileHover={{ scale: 1.1, color: '#34d399' }}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-white hover:text-emerald-400 transition-colors font-medium"
              >
                {item}
              </motion.button>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="hidden md:flex space-x-4">
            <motion.a
              whileHover={{ scale: 1.2, color: '#34d399' }}
              href="#"
              className="text-white hover:text-emerald-400 transition-colors"
            >
              <FaInstagram size={20} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, color: '#34d399' }}
              href="#"
              className="text-white hover:text-emerald-400 transition-colors"
            >
              <FaFacebook size={20} />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-emerald-400 transition-colors"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4 border-t border-gray-800"
          >
            <nav className="flex flex-col space-y-4 mt-4">
              {['Home', 'About', 'Services', 'Gallery', 'Artists', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-white hover:text-emerald-400 transition-colors text-left"
                >
                  {item}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;