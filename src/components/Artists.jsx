import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaTwitter } from 'react-icons/fa';

const Artists = () => {
  const artists = [
    {
      name: 'Marcus Steel',
      specialty: 'Traditional & Neo-Traditional',
      experience: '15 years',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      instagram: '@marcussteel_ink',
      twitter: '@marcussteelart',
      role: 'Lead Artist & Owner'
    },
    {
      name: 'Luna Rodriguez',
      specialty: 'Realistic & Portrait',
      experience: '8 years',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      instagram: '@luna_ink_art',
      twitter: '@lunarodriguezart',
      role: 'Senior Artist'
    },
    {
      name: 'Jake Thompson',
      specialty: 'Geometric & Minimalist',
      experience: '6 years',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      instagram: '@jake_geometric',
      twitter: '@jakethompsonink',
      role: 'Artist'
    }
  ];

  return (
    <section id="artists" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
            Meet Our Artists
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Experienced artists bringing their expertise to our new studio
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artists.map((artist, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-emerald-400 transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">{artist.name}</h3>
                <p className="text-emerald-400 font-medium mb-2">{artist.role}</p>
                <p className="text-purple-400 font-medium mb-2">{artist.specialty}</p>
                <p className="text-gray-400 mb-4">{artist.experience} experience</p>
                
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
                    <FaTwitter size={20} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Artists;