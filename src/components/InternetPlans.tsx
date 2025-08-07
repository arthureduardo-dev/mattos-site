import React from 'react';
import { Wifi, Check } from 'lucide-react';

const InternetPlans: React.FC = () => {
  const plans = [
    {
      speed: '70MB',
      title: 'Plano Essencial',
      description: 'Ideal para navegação, redes sociais e streaming em SD.',
      features: ['Download 70 Mbps', 'Upload 35 Mbps', 'Instalação Grátis']
    },
    {
      speed: '500MB',
      title: 'Plano Família',
      description: 'Perfeito para streaming 4K, jogos e múltiplos dispositivos.',
      features: ['Download 500 Mbps', 'Upload 250 Mbps', 'Wi-Fi 5 de Alta Performance'],
      special: true
    },
    {
      speed: '1 Giga',
      title: 'Plano Giga+',
      description: 'Velocidade máxima para uso intenso e profissional.',
      features: ['Download 1 Gbps', 'Upload 500 Mbps', 'Suporte Prioritário']
    }
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="py-20 bg-primary-800/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Planos de Internet Fibra</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            A velocidade que você precisa com a estabilidade que você merece.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.title}
              className={`flex flex-col bg-white/5 backdrop-blur-xl rounded-3xl p-6 transition-all duration-300 border border-white/10 animate-fade-in-up ${
                plan.special ? 'ring-2 ring-accent-400' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {plan.special && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent-600 text-primary-900 px-5 py-1.5 rounded-full font-semibold text-sm shadow-lg">
                  Mais Popular
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-3xl font-bold text-white mb-2">{plan.speed}</h3>
                <h4 className="text-lg font-semibold text-accent-400 mb-3">{plan.title}</h4>
                <p className="text-gray-300 text-sm h-12">{plan.description}</p>
              </div>
              <div className="space-y-3 mb-6 mt-auto">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={scrollToContact}
                className={`w-full mt-4 py-3 rounded-xl font-semibold text-base transition-all duration-300 ${
                  plan.special
                    ? 'bg-accent-600 hover:bg-accent-500 text-primary-900'
                    : 'bg-white/20 hover:bg-white/30 text-white'
                }`}
              >
                Contratar Agora
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InternetPlans;