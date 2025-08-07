import React from 'react';
import { Shield, Phone, Package } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Shield,
      title: 'Monitoramento',
      description: 'Instalação de câmeras e sistemas de alarme com acesso remoto via app.'
    },
    {
      icon: Phone,
      title: 'Telefonia Digital (VoIP)',
      description: 'Configuramos o serviço de telefonia (SIP) no seu equipamento para receber ligações.'
    },
    {
      icon: Package,
      title: 'Soluções Unificadas',
      description: 'Combos de internet, monitoramento e telefonia com suporte integrado.'
    }
  ];

  return (
    <div className="py-20 pb-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Soluções Completas</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Além da internet, oferecemos serviços que protegem e conectam seu ambiente.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 text-center transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-white/10 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <service.icon className="h-10 w-10 text-accent-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-accent-400">{service.title}</h3>
              <p className="text-gray-300 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;