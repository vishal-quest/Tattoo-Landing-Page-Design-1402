import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaFacebook, FaTwitter, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-3xl font-bold text-emerald-400 mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Ink & Soul
            </motion.div>
            <p className="text-gray-400 mb-4">
              Where art meets skin. A new studio with experienced artistry and a commitment to excellence.
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.2, color: '#34d399' }}
                href="#"
                className="text-gray-400 hover:text-emerald-400 transition-colors"
              >
                <FaInstagram size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, color: '#34d399' }}
                href="#"
                className="text-gray-400 hover:text-emerald-400 transition-colors"
              >
                <FaFacebook size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, color: '#34d399' }}
                href="#"
                className="text-gray-400 hover:text-emerald-400 transition-colors"
              >
                <FaTwitter size={20} />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Gallery'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => document.getElementById(link.toLowerCase()).scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-400 hover:text-emerald-400 transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Custom Tattoos</li>
              <li>Traditional Tattoos</li>
              <li>Cover-ups</li>
              <li>Touch-ups</li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white font-semibold mb-4">Hours</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Monday - Friday: 10AM - 8PM</li>
              <li>Saturday: 10AM - 6PM</li>
              <li>Sunday: Closed</li>
              <li className="text-emerald-400">Walk-ins Welcome</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            Made with <FaHeart className="text-red-500 mx-2" /> by Ink & Soul Studio
          </p>
          <p className="text-gray-500 text-sm mt-2">
            © 2024 Ink & Soul Tattoo Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;