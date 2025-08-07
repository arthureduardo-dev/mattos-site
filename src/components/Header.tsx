import React, { useState } from 'react';
import { Menu, X, Wifi, Shield, Phone } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-primary-900 text-primary-100 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="bg-accent-600 p-2 rounded-lg">
              <Wifi className="h-6 w-6 text-primary-900" />
            </div>
            <h1 className="text-2xl font-bold">GRUPO MATTOS</h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="hover:text-accent-500 transition-colors duration-300 font-medium"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('internet-plans')}
              className="hover:text-accent-500 transition-colors duration-300 font-medium"
            >
              Planos de Internet
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="hover:text-accent-500 transition-colors duration-300 font-medium"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="hover:text-accent-500 transition-colors duration-300 font-medium"
            >
              Contato
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 space-y-4">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left hover:text-accent-500 transition-colors duration-300 font-medium py-2"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('internet-plans')}
              className="block w-full text-left hover:text-accent-500 transition-colors duration-300 font-medium py-2"
            >
              Planos de Internet
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left hover:text-accent-500 transition-colors duration-300 font-medium py-2"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left hover:text-accent-500 transition-colors duration-300 font-medium py-2"
            >
              Contato
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;