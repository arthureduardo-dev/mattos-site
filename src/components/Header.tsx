import React from 'react';
import { Menu, X, Wifi } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50">
      <div className="absolute inset-x-0 top-0 h-20 bg-primary-900/50 backdrop-blur-xl border-b border-white/10"></div>
      <div className="container mx-auto px-4 py-4 relative z-10">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="bg-accent-600 p-2 rounded-lg">
              <Wifi className="h-6 w-6 text-primary-900" />
            </div>
            <h1 className="text-2xl font-bold tracking-wider">MATTOS</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-white transition-colors">Início</button>
            <button onClick={() => scrollToSection('internet-plans')} className="text-gray-300 hover:text-white transition-colors">Planos</button>
            <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-white transition-colors">Serviços</button>
            <button onClick={() => scrollToSection('contact')} className="bg-white/10 hover:bg-white/20 text-white px-5 py-2 rounded-full font-medium transition-all border border-white/20">Contato</button>
          </nav>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 p-4 bg-primary-800/90 backdrop-blur-md rounded-lg space-y-2">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left py-2 px-2 rounded hover:bg-white/10">Início</button>
            <button onClick={() => scrollToSection('internet-plans')} className="block w-full text-left py-2 px-2 rounded hover:bg-white/10">Planos</button>
            <button onClick={() => scrollToSection('services')} className="block w-full text-left py-2 px-2 rounded hover:bg-white/10">Serviços</button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 px-2 rounded hover:bg-white/10">Contato</button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;