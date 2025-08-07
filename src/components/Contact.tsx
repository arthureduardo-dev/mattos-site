import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="py-20 bg-primary-800/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Fale Conosco</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Precisa de um plano personalizado? Nossa equipe está pronta para ajudar.
          </p>
        </div>
        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white">Canais de Atendimento</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3"><Phone className="h-5 w-5 text-accent-400" /><p className="text-gray-300">51 3542-1667</p></div>
                <div className="flex items-center space-x-3"><Mail className="h-5 w-5 text-accent-400" /><p className="text-gray-300">suporte@mattosnet.net.br</p></div>
                <div className="flex items-center space-x-3"><MapPin className="h-5 w-5 text-accent-400" /><p className="text-gray-300">R. Arnaldo da Costa Bard, 2932 - Centro, Taquara - RS</p></div>
                <div className="flex items-center space-x-3"><Clock className="h-5 w-5 text-accent-400" /><p className="text-gray-300">Seg à Sex: 08h às 12:00 e 13:30 às 18:00 | Sáb: 08:00 às 11:30</p></div>
              </div>
            </div>
            <div>
              {isSubmitted ? (
                <div className="text-center p-6 bg-green-500/20 rounded-lg h-full flex flex-col justify-center items-center"><Send className="h-10 w-10 text-accent-400 mb-4" /><h4 className="text-xl font-semibold text-white">Mensagem Enviada!</h4></div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input type="text" name="name" required onChange={handleChange} className="w-full px-4 py-2.5 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-accent-500 transition placeholder:text-gray-400 text-sm" placeholder="Nome Completo *" />
                  <input type="tel" name="phone" required onChange={handleChange} className="w-full px-4 py-2.5 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-accent-500 transition placeholder:text-gray-400 text-sm" placeholder="Telefone *" />
                  <textarea name="message" required rows={4} onChange={handleChange} className="w-full px-4 py-2.5 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-accent-500 transition resize-none placeholder:text-gray-400 text-sm" placeholder="Sua Mensagem *"></textarea>
                  <button type="submit" className="w-full bg-accent-600 hover:bg-accent-500 text-primary-900 px-8 py-3 rounded-lg font-semibold text-base transition transform hover:scale-105">Enviar Mensagem</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;