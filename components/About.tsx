import React from 'react';
import { COMPANY_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-gold/20 rounded-tl-3xl -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-brand-dark/5 rounded-br-3xl -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop" 
              alt="Atelier Espace Design" 
              className="w-full h-[500px] object-cover rounded-xl shadow-lg"
            />
            <div className="absolute bottom-8 left-8 bg-white p-6 rounded-lg shadow-xl max-w-xs hidden md:block border-l-4 border-brand-gold">
              <p className="font-serif text-2xl font-bold text-brand-dark mb-1">Notre Vision</p>
              <p className="text-gray-600 font-medium text-sm">Allier l'esthétique à la technique pour des espaces qui durent.</p>
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2">
            <div className="inline-block px-3 py-1 bg-brand-light text-brand-gold font-bold text-sm tracking-widest uppercase mb-4 rounded-full">
              Qui sommes-nous
            </div>
            <h2 className="font-serif text-4xl font-bold text-brand-dark mb-6">
              L'Histoire d'<span className="text-brand-gold">{COMPANY_INFO.name}</span>
            </h2>
            <h3 className="text-xl font-medium text-gray-800 mb-6 border-l-4 border-brand-gold pl-4">
              "Tout commence par une vision : celle de transformer des lieux ordinaires en espaces d'exception."
            </h3>
            
            <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
              <p>
                Née d'une passion inconditionnelle pour l'architecture et l'harmonie des volumes, <strong>Espace Design</strong> a vu le jour avec une ambition simple : rendre le beau accessible et fonctionnel.
              </p>
              <p>
                Ce qui a débuté comme une initiative personnelle dédiée à la rénovation s'est transformé, au fil des projets et des rencontres, en un véritable studio de création. Nous avons appris à écouter les murs, à dompter la lumière et, surtout, à comprendre les aspirations profondes de ceux qui nous confient leur lieu de vie.
              </p>
              <p>
                Aujourd'hui, notre approche combine rigueur technique et sensibilité artistique. Des premiers croquis sur un coin de table aux plans 3D ultra-réalistes, notre histoire s'écrit à travers chaque chantier réussi et chaque sourire client.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-100">
               <p className="font-serif italic text-gray-500 text-lg">
                "Sculpter les espaces, sublimer les vies."
               </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;