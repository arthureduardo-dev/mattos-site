import React from 'react';
import { ShieldCheck, Camera, BellRing } from 'lucide-react';

const Monitoring: React.FC = () => {
  return (
    <div className="py-20" id="monitoring">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Monitoramento Inteligente para sua Segurança</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Proteja o que mais importa com nossas soluções de vigilância e alarme de última geração.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 text-center transition-all duration-300 hover:border-accent-400 hover:-translate-y-2">
            <div className="bg-white/10 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Camera className="h-10 w-10 text-accent-400" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-accent-400">Câmeras de Alta Definição</h3>
            <p className="text-gray-300 text-sm">Instalação de câmeras com acesso remoto e gravação em nuvem para cobertura completa.</p>
          </div>
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 text-center transition-all duration-300 hover:border-accent-400 hover:-translate-y-2">
            <div className="bg-white/10 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <BellRing className="h-10 w-10 text-accent-400" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-accent-400">Alarmes Monitorados 24h</h3>
            <p className="text-gray-300 text-sm">Sistemas de alarme inteligentes com notificação instantânea e resposta rápida.</p>
          </div>
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 text-center transition-all duration-300 hover:border-accent-400 hover:-translate-y-2">
            <div className="bg-white/10 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <ShieldCheck className="h-10 w-10 text-accent-400" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-accent-400">Suporte Especializado</h3>
            <p className="text-gray-300 text-sm">Nossa equipe está sempre pronta para agir, garantindo sua tranquilidade a qualquer momento.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Monitoring;