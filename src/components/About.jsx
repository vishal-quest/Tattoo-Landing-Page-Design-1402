import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaClock, FaUsers } from 'react-icons/fa';

const About = () => {
  const stats = [
    { icon: FaAward, number: '15+', label: 'Years Experience' },
    { icon: FaUsers, number: '500+', label: 'Happy Clients' },
    { icon: FaClock, number: '24/7', label: 'Aftercare Support' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
              Our Story
            </h2>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Founded in 2023, Ink & Soul is a fresh studio built on years of artistic expertise. 
              Our lead artist brings over 15 years of experience to create exceptional tattoo art that tells your unique story.
            </p>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Though we're new to the scene, our commitment to excellence, creativity, and your vision drives everything we do. 
              From your first consultation to the final touch-up, we ensure the highest standards of artistry and safety.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="text-center"
                >
                  <stat.icon className="text-emerald-400 text-3xl mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Tattoo artist at work"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            
            {/* Floating Element */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-6 -right-6 bg-emerald-400 text-black p-6 rounded-lg shadow-xl"
            >
              <div className="text-2xl font-bold">100%</div>
              <div className="text-sm font-medium">Sterile Equipment</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;