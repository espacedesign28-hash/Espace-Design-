import React from 'react';
import { PROJECTS } from '../constants';
import BeforeAfterSlider from './BeforeAfterSlider';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="font-serif text-4xl font-bold text-brand-dark mb-4">Nos Réalisations</h2>
          <div className="w-24 h-1 bg-brand-gold mb-6"></div>
          <p className="text-gray-600 max-w-2xl text-lg">
            Découvrez comment nous métamorphosons les lieux. Chaque projet est une histoire unique d'élégance et de fonctionnalité.
          </p>
        </div>

        {/* Featured Before/After */}
        <div className="mb-20">
          <h3 className="text-2xl font-serif font-bold mb-6 flex items-center gap-3">
            <span className="bg-brand-gold text-white px-3 py-1 text-base rounded-sm">Vedette</span>
            La Magie de la Rénovation
          </h3>
          <div className="rounded-xl overflow-hidden shadow-2xl border-4 border-white">
             {/* Note: Using picsum for demo. In production, use real before/after images */}
            <BeforeAfterSlider 
              beforeImage="https://images.unsplash.com/photo-1534349762913-96c87130f6bf?q=80&w=1600&auto=format&fit=crop"
              afterImage="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1600&auto=format&fit=crop"
            />
          </div>
          <p className="mt-4 text-center text-gray-500 italic">
            Faites glisser le curseur pour voir la transformation
          </p>
        </div>

        {/* Masonry Grid for standard projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-lg shadow-md aspect-[4/3] cursor-pointer">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-brand-gold font-bold text-sm tracking-wider uppercase mb-1">
                  {project.category}
                </span>
                <h3 className="text-white font-serif text-2xl font-bold">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;