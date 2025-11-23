import React from 'react';
import { Quote, Star } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-brand-light relative overflow-hidden">
       {/* Abstract Background Element */}
       <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
          <div className="absolute top-10 -left-10 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-brand-gold/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold text-brand-dark mb-4">Témoignages</h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            La satisfaction de nos clients est notre plus belle réussite.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative group cursor-default"
            >
              <div className="absolute -top-4 right-8 bg-brand-gold text-white p-3 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Quote size={20} fill="currentColor" />
              </div>

              <div className="flex gap-1 text-brand-gold mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              <p className="text-gray-600 mb-6 italic leading-relaxed text-lg">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-serif font-bold text-brand-dark text-xl group-hover:bg-brand-dark group-hover:text-brand-gold transition-colors duration-300">
                    {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark">{testimonial.name}</h4>
                  <p className="text-sm text-brand-gold font-medium uppercase tracking-wide">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;