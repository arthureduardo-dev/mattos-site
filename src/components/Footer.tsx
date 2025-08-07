import React from 'react';
import { Instagram, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 bg-primary-900">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center space-x-3 mb-6">
          <img src="https://res.cloudinary.com/dtuacdvn6/image/upload/v1753749129/Novo_Projeto_kwc45y.png" alt="Grupo Mattos Logo" className="h-12" />
        </div>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
          Sua conexão com o futuro começa aqui.
        </p>
        <div className="flex justify-center space-x-4 mb-10">
          <a href="https://www.instagram.com/grupo.mattos" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors duration-300">
            <Instagram className="h-5 w-5" />
          </a>
          <a href="https://wa.me/555135421667" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors duration-300">
            <MessageCircle className="h-5 w-5" />
          </a>
        </div>
        <div className="border-t border-white/10 pt-8 mt-8">
          <p className="text-gray-500 text-sm">
            © 2025 GRUPO MATTOS. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;