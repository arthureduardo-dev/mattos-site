import React from 'react';

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
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-white animate-fade-in-up">
            Internet de Verdade.
            <span className="text-accent-400 block">Conexão sem Limites.</span>
          </h1>
          <p className="text-lg md:text-xl mb-10 text-gray-300 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Experimente a estabilidade e a velocidade da fibra óptica, com soluções completas de segurança e suporte que você pode confiar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <button
              onClick={scrollToContact}
              className="bg-accent-600 hover:bg-accent-500 text-primary-900 px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Fale com um Especialista
            </button>
            <button
              onClick={() => document.getElementById('internet-plans')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-lg text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 border border-white/20"
            >
              Conheça os Planos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;