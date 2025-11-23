import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop" 
          alt="Interior Design Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl animate-fade-in-up">
          <div className="inline-block border-l-4 border-brand-gold pl-4 mb-6">
            <p className="text-brand-gold font-bold tracking-widest uppercase">
              Architecture & Rénovation
            </p>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            L'élégance <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-200">
              prend forme
            </span>
          </h1>
          <p className="text-gray-200 text-lg md:text-xl mb-8 max-w-2xl font-light">
            De la conception 3D à la réalisation finale, nous sculptons vos espaces intérieurs et extérieurs pour sublimer votre quotidien.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="group bg-brand-gold text-brand-dark px-8 py-4 rounded-none font-bold text-lg hover:bg-white transition-all duration-300 flex items-center justify-center gap-2"
            >
              Démarrer votre projet
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#portfolio" 
              className="px-8 py-4 border border-white text-white font-bold text-lg hover:bg-white hover:text-brand-dark transition-all duration-300 text-center"
            >
              Voir nos réalisations
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-brand-gold rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;