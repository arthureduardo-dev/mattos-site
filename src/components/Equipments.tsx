import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const equipments = [
  {
    name: 'Roteador Wi-Fi 6',
    description: 'Experimente o desempenho incomparável dos nossos equipamentos com a mais recente tecnologia Wi-Fi 6, garantindo uma experiência de conectividade superior.',
    image: 'https://backend.intelbras.com/sites/default/files/2024-10/sr1041f-persp-esq.png',
  },
  {
    name: 'Câmera de Vigilância',
    description: 'Descubra a excelência em segurança com nossa seleção dos melhores equipamentos disponíveis no mercado, proporcionando uma experiência de vigilância incomparável.',
    image: 'https://res.cloudinary.com/dtuacdvn6/image/upload/v1754589716/Hikvision.ColorVu_family_v2.5d39d13b0b407_hskhgy.avif',
    badge: 'Segurança Avançada'
  }
];

const Equipments: React.FC = () => {
  return (
    <div className="bg-primary-900" id="equipments">
      {equipments.map((equipment, index) => (
        <div 
          key={index} 
          className={`overflow-hidden ${index % 2 !== 0 ? 'equipment-bg-reverse' : 'equipment-bg'}`}
        >
          <div className="container mx-auto px-4 py-24">
            <div className={`flex flex-col md:flex-row items-center justify-center gap-16 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              
              <div className="w-full md:w-1/2 lg:w-5/12">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="relative" 
                >
                  <img src={equipment.image} alt={equipment.name} className="w-full h-auto image-glow" />
                  
                  {equipment.badge && index === 0 && (
                    <div className="absolute top-[15%] left-[30%] bg-accent-600 text-primary-900 px-3 py-1 rounded-lg shadow-lg font-bold text-xs -translate-x-1/2 -translate-y-1/2">
                      {equipment.badge}
                    </div>
                  )}
                  
                  {equipment.badge && index !== 0 && (
                    <div className="absolute -bottom-4 right-4 bg-accent-600 text-primary-900 px-4 py-2 rounded-lg shadow-lg font-bold text-sm">
                       {equipment.badge}
                    </div>
                  )}
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: index % 2 !== 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                className="w-full md:w-1/2 lg:w-5/12 text-center md:text-left"
              >
                <span className="text-sm font-bold bg-primary-800 text-accent-400 px-3 py-1 rounded">TECNOLOGIA DE PONTA</span>
                <h2 className="text-4xl lg:text-5xl font-extrabold text-white my-5">{equipment.name}</h2>
                <p className="text-lg text-gray-300 mb-10 leading-relaxed">{equipment.description}</p>
                <a href="#contact"
                   className="inline-flex items-center gap-3 bg-accent-600 text-primary-900 font-bold py-3 px-8 rounded-full hover:bg-accent-500 transition-all duration-300 transform hover:scale-105">
                  Saiba Mais
                  <ArrowRight className="w-5 h-5" />
                </a>
              </motion.div>

            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Equipments;