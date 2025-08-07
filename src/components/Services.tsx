import React from 'react';
import { Shield, Phone, Package, Users, Clock, Award } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Shield,
      title: 'Sistemas de Monitoramento',
      description: 'Câmeras de segurança HD, sistemas de alarme e monitoramento 24/7 para residências e empresas.',
      features: ['Câmeras HD/4K', 'Acesso remoto via app', 'Gravação em nuvem', 'Detecção de movimento']
    },
    {
      icon: Phone,
      title: 'VoIP Empresarial',
      description: 'Telefonia moderna com recursos avançados para empresas de todos os portes.',
      features: ['Ramais ilimitados', 'Conferência de voz', 'Gravação de chamadas', 'Relatórios detalhados']
    },
    {
      icon: Package,
      title: 'Planos Combo',
      description: 'Combinações personalizadas de internet, monitoramento e telefonia com desconto especial.',
      features: ['Desconto progressivo', 'Instalação única', 'Suporte unificado', 'Fatura consolidada']
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-primary-900 to-primary-800 text-primary-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Monitoramento, VoIP e Combos
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Soluções completas e integradas para segurança, comunicação e conectividade. 
            Cada projeto é personalizado para atender suas necessidades específicas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-primary-800/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-700/30 hover:border-accent-600/50 transition-all duration-300">
              <div className="bg-accent-600/20 p-4 rounded-full w-20 h-20 flex items-center justify-center mb-6">
                <service.icon className="h-10 w-10 text-accent-500" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-accent-500">{service.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
              
              <div className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent-600 rounded-full"></div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-accent-600/10 rounded-3xl p-12 text-center border border-accent-600/20">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="bg-accent-600/20 p-4 rounded-full">
                <Users className="h-12 w-12 text-accent-500" />
              </div>
            </div>
            
            <h3 className="text-3xl font-bold mb-6 text-accent-500">
              Consultoria Personalizada Obrigatória
            </h3>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Para garantir a solução perfeita para suas necessidades, todos os serviços de monitoramento, 
              VoIP e combos requerem uma consulta prévia com nossos especialistas.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              <div className="flex items-center justify-center space-x-3">
                <Clock className="h-6 w-6 text-accent-500" />
                <span className="text-gray-300">Análise técnica gratuita</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Award className="h-6 w-6 text-accent-500" />
                <span className="text-gray-300">Projeto personalizado</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Users className="h-6 w-6 text-accent-500" />
                <span className="text-gray-300">Orçamento detalhado</span>
              </div>
            </div>

            <button
              onClick={scrollToContact}
              className="bg-accent-600 hover:bg-accent-500 text-primary-900 px-10 py-5 rounded-xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Agendar Consultoria Gratuita
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;