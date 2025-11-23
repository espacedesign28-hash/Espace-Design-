import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold text-brand-dark mb-4">Nos Expertises</h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Une approche globale pour transformer chaque mètre carré en un lieu d'exception.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300 border-b-4 border-transparent hover:border-brand-gold group"
            >
              <div className="w-14 h-14 bg-brand-light rounded-full flex items-center justify-center mb-6 text-brand-dark group-hover:bg-brand-gold group-hover:text-white transition-colors">
                <service.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl font-bold text-brand-dark mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;