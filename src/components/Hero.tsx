import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative py-20">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://res.cloudinary.com/dtuacdvn6/image/upload/v1753729918/jonas-leupe-NmVC9Le16eo-unsplash_ax9mk5.jpg')` }}>
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/70 to-transparent"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-white"
          >
            Internet de Verdade. Segurança Total.
            <span className="text-accent-400 block">Conexão e Monitoramento para você.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
            className="text-lg md:text-xl mb-10 text-gray-300 max-w-2xl mx-auto"
          >
            Experimente a estabilidade da fibra óptica aliada a soluções de vigilância, com suporte completo que você pode confiar.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={scrollToContact}
              className="bg-accent-600 hover:bg-accent-500 text-primary-900 px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Fale com um Especialista
            </button>
            <button
              onClick={() => document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white/10 backdrop-blur-lg text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 border border-white/20"
            >
              Conheça os Planos
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;