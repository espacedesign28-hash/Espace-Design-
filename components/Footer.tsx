import React from 'react';
import { COMPANY_INFO } from '../constants';
import { Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
                <div className="font-serif text-2xl font-bold text-brand-gold mb-2">{COMPANY_INFO.name}</div>
                <p className="text-gray-400 text-sm max-w-md">
                    {COMPANY_INFO.tagline}
                </p>
            </div>

            <div className="flex gap-6">
                <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors">
                    <Instagram size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors">
                    <Facebook size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors">
                    <Linkedin size={24} />
                </a>
            </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. Tous droits réservés.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
                <a href="#" className="hover:text-white">Mentions légales</a>
                <a href="#" className="hover:text-white">Politique de confidentialité</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;