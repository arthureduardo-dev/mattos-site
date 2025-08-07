import React from 'react';
import { Wifi, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary-900 text-primary-100">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-accent-600 p-2 rounded-lg">
                <Wifi className="h-6 w-6 text-primary-900" />
              </div>
              <h3 className="text-2xl font-bold">GRUPO MATTOS</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Há mais de uma década conectando pessoas e empresas com soluções completas 
              em internet, monitoramento e telecomunicações. Sua conexão com o futuro começa aqui.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-primary-800 hover:bg-accent-600 p-3 rounded-lg transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-primary-800 hover:bg-accent-600 p-3 rounded-lg transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-primary-800 hover:bg-accent-600 p-3 rounded-lg transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-accent-500">Links Rápidos</h4>
            <nav className="space-y-3">
              <button
                onClick={() => scrollToSection('home')}
                className="block hover:text-accent-500 transition-colors duration-300"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection('internet-plans')}
                className="block hover:text-accent-500 transition-colors duration-300"
              >
                Planos de Internet
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block hover:text-accent-500 transition-colors duration-300"
              >
                Monitoramento & VoIP
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block hover:text-accent-500 transition-colors duration-300"
              >
                Contato
              </button>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-accent-500">Nossos Serviços</h4>
            <ul className="space-y-3 text-gray-300">
              <li>Internet Banda Larga</li>
              <li>Fibra Óptica</li>
              <li>Câmeras de Segurança</li>
              <li>Sistemas de Alarme</li>
              <li>VoIP Empresarial</li>
              <li>Suporte Técnico 24/7</li>
            </ul>
          </div>
        </div>

        {/* Contact Info Bar */}
        <div className="border-t border-primary-800 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-accent-600" />
              <div>
                <p className="text-sm text-gray-400">Central de Atendimento</p>
                <p className="font-semibold">(XX) XXXX-XXXX</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-accent-600" />
              <div>
                <p className="text-sm text-gray-400">E-mail</p>
                <p className="font-semibold">contato@grupomattos.com.br</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-accent-600" />
              <div>
                <p className="text-sm text-gray-400">Endereço</p>
                <p className="font-semibold">Centro - Cidade/Estado</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 GRUPO MATTOS. Todos os direitos reservados.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-accent-500 transition-colors duration-300">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-accent-500 transition-colors duration-300">
                Termos de Serviço
              </a>
              <a href="#" className="text-gray-400 hover:text-accent-500 transition-colors duration-300">
                LGPD
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;