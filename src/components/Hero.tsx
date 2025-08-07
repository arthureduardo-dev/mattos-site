import React from 'react';
import { Wifi, Shield, Zap, Users } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-primary-100 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Conectando o Futuro,
            <span className="text-accent-500 block">Protegendo o Presente</span>
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-gray-300 leading-relaxed">
            Soluções completas em internet de alta velocidade, monitoramento e telecomunicações 
            para residências e empresas em toda região.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button
              onClick={scrollToContact}
              className="bg-accent-600 hover:bg-accent-500 text-primary-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Fale com um Consultor
            </button>
            <button
              onClick={() => document.getElementById('internet-plans')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-accent-600 hover:bg-accent-600 hover:text-primary-900 text-accent-500 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Ver Planos
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="bg-accent-600/20 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Wifi className="h-8 w-8 text-accent-500" />
              </div>
              <h3 className="font-semibold mb-2">Internet Rápida</h3>
              <p className="text-sm text-gray-400">Velocidades até 1GB</p>
            </div>
            <div className="text-center">
              <div className="bg-accent-600/20 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-accent-500" />
              </div>
              <h3 className="font-semibold mb-2">Monitoramento</h3>
              <p className="text-sm text-gray-400">Segurança 24/7</p>
            </div>
            <div className="text-center">
              <div className="bg-accent-600/20 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-accent-500" />
              </div>
              <h3 className="font-semibold mb-2">Estabilidade</h3>
              <p className="text-sm text-gray-400">99,9% de uptime</p>
            </div>
            <div className="text-center">
              <div className="bg-accent-600/20 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-accent-500" />
              </div>
              <h3 className="font-semibold mb-2">Suporte</h3>
              <p className="text-sm text-gray-400">Atendimento local</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;