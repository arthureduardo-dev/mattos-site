import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Calendar } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 bg-primary-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Entre em Contato
          </h2>
          <p className="text-xl text-primary-700 max-w-3xl mx-auto leading-relaxed">
            Estamos prontos para atendê-lo. Entre em contato para esclarecer dúvidas, 
            solicitar orçamentos ou agendar uma consultoria gratuita.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-primary-900 mb-6">Informações de Contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-accent-600 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-primary-900" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-900 mb-1">Telefone</h4>
                    <p className="text-primary-700">(XX) XXXX-XXXX</p>
                    <p className="text-primary-700">(XX) 9XXXX-XXXX</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-accent-600 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-primary-900" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-900 mb-1">E-mail</h4>
                    <p className="text-primary-700">contato@grupomattos.com.br</p>
                    <p className="text-primary-700">comercial@grupomattos.com.br</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-accent-600 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary-900" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-900 mb-1">Endereço</h4>
                    <p className="text-primary-700">
                      Rua Principal, 123<br />
                      Centro - Cidade/Estado<br />
                      CEP: 00000-000
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-accent-600 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-primary-900" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-900 mb-1">Horário de Atendimento</h4>
                    <p className="text-primary-700">Segunda à Sexta: 8h às 18h</p>
                    <p className="text-primary-700">Sábado: 8h às 12h</p>
                    <p className="text-primary-700">Suporte 24/7 para clientes</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-accent-600/10 p-8 rounded-2xl border border-accent-600/20">
              <h4 className="text-xl font-bold text-primary-900 mb-4 flex items-center space-x-3">
                <Calendar className="h-6 w-6 text-accent-600" />
                <span>Agendamento de Consultor</span>
              </h4>
              <p className="text-primary-700 mb-6 leading-relaxed">
                Prefere falar diretamente com um de nossos consultores? Agende uma visita gratuita 
                para análise técnica e orçamento personalizado.
              </p>
              <button className="bg-accent-600 hover:bg-accent-500 text-primary-900 px-6 py-3 rounded-lg font-semibold transition-all duration-300 w-full">
                Agendar Visita Gratuita
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-primary-900 mb-6">Envie sua Mensagem</h3>
            
            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <div className="bg-green-500 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Send className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-green-800 mb-2">Mensagem Enviada!</h4>
                <p className="text-green-700">
                  Obrigado pelo contato. Nossa equipe entrará em contato em breve.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-primary-900 mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-600 focus:border-transparent transition-all duration-300"
                      placeholder="Seu nome"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-primary-900 mb-2">
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-600 focus:border-transparent transition-all duration-300"
                      placeholder="(XX) XXXXX-XXXX"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-primary-900 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-600 focus:border-transparent transition-all duration-300"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-primary-900 mb-2">
                    Serviço de Interesse
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-600 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Selecione um serviço</option>
                    <option value="internet">Planos de Internet</option>
                    <option value="monitoring">Sistema de Monitoramento</option>
                    <option value="voip">VoIP Empresarial</option>
                    <option value="combo">Planos Combo</option>
                    <option value="support">Suporte Técnico</option>
                    <option value="other">Outros</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-primary-900 mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-600 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Descreva sua necessidade ou dúvida..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-900 hover:bg-primary-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-3"
                >
                  <Send className="h-5 w-5" />
                  <span>Enviar Mensagem</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;