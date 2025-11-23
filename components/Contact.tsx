import React from 'react';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-brand-dark text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl -ml-48 -mb-48"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="font-serif text-4xl font-bold mb-6">Parlons de votre projet</h2>
            <p className="text-gray-400 mb-10 text-lg">
              Contactez-nous dès aujourd'hui pour donner vie à vos idées ! Devis gratuit et personnalisé.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-brand-gold/10 rounded-lg flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-dark transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Téléphone</h4>
                  <a href={`tel:${COMPANY_INFO.phone}`} className="text-gray-300 hover:text-brand-gold transition-colors">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-brand-gold/10 rounded-lg flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-dark transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Email</h4>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-gray-300 hover:text-brand-gold transition-colors">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-brand-gold/10 rounded-lg flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-dark transition-colors">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Zone d'intervention</h4>
                  <p className="text-gray-300">
                    {COMPANY_INFO.address}
                  </p>
                </div>
              </div>
            </div>

            {/* QR Code Placeholder (Visual Element) */}
            <div className="mt-12 p-6 bg-white/5 rounded-xl border border-white/10 inline-block">
                <div className="flex items-center gap-4">
                    <div className="w-24 h-24 bg-white p-2 rounded-lg">
                        {/* Simulating QR Code */}
                        <div className="w-full h-full bg-black flex items-center justify-center text-white text-xs text-center">
                            SCAN ME <br/> Instagram
                        </div>
                    </div>
                    <div>
                        <p className="font-serif text-xl font-bold text-brand-gold mb-1">Suivez-nous</p>
                        <div className="flex items-center gap-2 text-gray-300">
                            <Instagram size={18} />
                            <span>{COMPANY_INFO.instagram}</span>
                        </div>
                    </div>
                </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-2xl text-gray-800">
            <h3 className="text-2xl font-bold mb-6 font-serif">Envoyez-nous un message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all outline-none"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all outline-none"
                    placeholder="Votre numéro"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all outline-none"
                  placeholder="votre@email.com"
                />
              </div>
              <div>
                <label htmlFor="project" className="block text-sm font-medium text-gray-700 mb-1">Type de projet</label>
                <select 
                  id="project" 
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all outline-none"
                >
                  <option>Architecture d'intérieur</option>
                  <option>Rénovation complète</option>
                  <option>Aménagement extérieur</option>
                  <option>Plans 2D/3D uniquement</option>
                  <option>Autre</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all outline-none resize-none"
                  placeholder="Décrivez votre projet..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-brand-gold text-brand-dark font-bold py-4 rounded-lg hover:bg-yellow-400 transition-colors transform hover:scale-[1.01] duration-200 shadow-lg"
              >
                Envoyer la demande
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;