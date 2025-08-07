import React from 'react';
import { Wifi, Check, Camera, Repeat } from 'lucide-react';

const InternetPlans: React.FC = () => {
  const plans = [
    {
      speed: '70MB',
      title: 'Plano Essencial',
      description: 'Ideal para navegação básica, redes sociais e streaming em qualidade padrão.',
      features: ['Download 70 Mbps', 'Upload 35 Mbps', 'Instalação grátis', 'Suporte técnico']
    },
    {
      speed: '400MB',
      title: 'Plano Família',
      description: 'Perfeito para famílias que usam múltiplos dispositivos simultaneamente.',
      features: ['Download 400 Mbps', 'Upload 200 Mbps', 'Wi-Fi de alta performance', 'Suporte prioritário']
    },
    {
      speed: '500MB',
      title: 'Plano Avançado',
      description: 'Para usuários que precisam de velocidade superior para trabalho e entretenimento.',
      features: ['Download 500 Mbps', 'Upload 250 Mbps', 'Roteador premium', 'Instalação expressa']
    },
    {
      speed: '700MB',
      title: 'Plano Profissional',
      description: 'Velocidade profissional para home office e empresas pequenas.',
      features: ['Download 700 Mbps', 'Upload 350 Mbps', 'IP dedicado', 'SLA garantido']
    },
    {
      speed: '850MB',
      title: 'Plano Premium',
      description: 'Alta performance para uso intensivo e múltiplos usuários.',
      features: ['Download 850 Mbps', 'Upload 425 Mbps', 'Suporte 24/7', 'Redundância de rede']
    },
    {
      speed: '1000MB',
      title: 'Plano Ultra + Segurança',
      description: 'Máxima velocidade com kit de segurança completo incluído.',
      features: ['Download 1 Gbps', 'Upload 500 Mbps', 'Câmera Wi-Fi incluída', 'Repetidor premium'],
      special: true
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="internet-plans" className="py-20 bg-primary-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Planos de Internet
          </h2>
          <p className="text-xl text-primary-700 max-w-3xl mx-auto leading-relaxed">
            Escolha o plano ideal para sua necessidade. Todos os planos incluem instalação gratuita, 
            Wi-Fi de alta qualidade e suporte técnico especializado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                plan.special ? 'ring-4 ring-accent-600 relative' : ''
              }`}
            >
              {plan.special && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-accent-600 text-primary-900 px-6 py-2 rounded-full font-semibold text-sm flex items-center space-x-2">
                    <Camera className="h-4 w-4" />
                    <span>Kit Segurança</span>
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <div className="bg-accent-600/10 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Wifi className="h-10 w-10 text-accent-600" />
                </div>
                <h3 className="text-3xl font-bold text-primary-900 mb-2">{plan.speed}</h3>
                <h4 className="text-xl font-semibold text-accent-600 mb-4">{plan.title}</h4>
                <p className="text-gray-600 leading-relaxed">{plan.description}</p>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-accent-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
                {plan.special && (
                  <>
                    <div className="flex items-center space-x-3">
                      <Camera className="h-5 w-5 text-accent-600 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">Câmera Wi-Fi HD incluída</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Repeat className="h-5 w-5 text-accent-600 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">Repetidor Wi-Fi premium</span>
                    </div>
                  </>
                )}
              </div>

              <button
                onClick={scrollToContact}
                className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                  plan.special
                    ? 'bg-accent-600 hover:bg-accent-500 text-primary-900'
                    : 'bg-primary-900 hover:bg-primary-800 text-white'
                }`}
              >
                Contratar Agora
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-primary-700 mb-6">
            Precisa de um plano personalizado ou tem dúvidas sobre qual escolher?
          </p>
          <button
            onClick={scrollToContact}
            className="bg-accent-600 hover:bg-accent-500 text-primary-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg"
          >
            Fale com um Especialista
          </button>
        </div>
      </div>
    </section>
  );
};

export default InternetPlans;