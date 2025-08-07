import React from 'react';
import { Wifi, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 bg-primary-900">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center space-x-3 mb-6">
          <div className="bg-accent-600 p-2 rounded-lg">
            <Wifi className="h-6 w-6 text-primary-900" />
          </div>
          <h3 className="text-2xl font-bold">GRUPO MATTOS</h3>
        </div>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
          Sua conexão com o futuro começa aqui.
        </p>
        <div className="flex justify-center space-x-4 mb-10">
          <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors duration-300"><Facebook className="h-5 w-5" /></a>
          <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors duration-300"><Instagram className="h-5 w-5" /></a>
          <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors duration-300"><Linkedin className="h-5 w-5" /></a>
        </div>
        <div className="border-t border-white/10 pt-8 mt-8">
          <p className="text-gray-500 text-sm">
            © 2024 GRUPO MATTOS. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;