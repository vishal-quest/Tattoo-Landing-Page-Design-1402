import React from 'react';
import { motion } from 'framer-motion';
import { FaPalette, FaHeart, FaEdit, FaShieldAlt } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: FaPalette,
      title: 'Custom Tattoos',
      description: 'Unique designs created specifically for you, from concept to completion.',
      price: 'Starting at $150'
    },
    {
      icon: FaHeart,
      title: 'Traditional Tattoos',
      description: 'Classic American traditional and neo-traditional styles with bold lines.',
      price: 'Starting at $120'
    },
    {
      icon: FaEdit,
      title: 'Cover-ups',
      description: 'Transform old tattoos into beautiful new artwork with expert cover-up techniques.',
      price: 'Starting at $200'
    },
    {
      icon: FaShieldAlt,
      title: 'Touch-ups',
      description: 'Free touch-ups within 6 months to keep your tattoo looking fresh.',
      price: 'Complimentary'
    }
  ];

  return (
    <section id="services" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
            Our Services
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professional tattoo services with the highest standards of artistry and safety
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-emerald-400 transition-all duration-300"
            >
              <div className="text-emerald-400 text-4xl mb-4">
                <service.icon />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-4 leading-relaxed">{service.description}</p>
              <div className="text-emerald-400 font-semibold">{service.price}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="bg-emerald-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-emerald-600 transition-colors"
          >
            Get Quote
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;