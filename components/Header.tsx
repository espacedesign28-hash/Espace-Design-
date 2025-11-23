import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Réalisations', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className="flex items-center gap-2">
              <div className={`w-10 h-10 border-2 flex items-center justify-center font-serif text-xl font-bold ${isScrolled ? 'border-brand-dark text-brand-dark' : 'border-brand-gold text-brand-gold bg-black/50'}`}>
                ED
              </div>
              <span className={`font-serif text-2xl font-bold hidden sm:block ${isScrolled ? 'text-brand-dark' : 'text-white drop-shadow-md'}`}>
                {COMPANY_INFO.name}
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors hover:text-brand-gold ${isScrolled ? 'text-gray-800' : 'text-white drop-shadow-sm'}`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              className="bg-brand-gold text-brand-dark px-5 py-2 rounded-full font-bold hover:bg-yellow-300 transition-transform transform hover:scale-105"
            >
              Devis Gratuit
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${isScrolled ? 'text-gray-800' : 'text-white'}`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden absolute w-full bg-white shadow-xl transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-3 py-2 text-lg font-medium text-gray-800 hover:text-brand-gold"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="flex gap-4 mt-4 pt-4 border-t w-full justify-center">
            <a href={`tel:${COMPANY_INFO.phone}`} className="p-2 bg-gray-100 rounded-full text-brand-dark">
              <Phone size={20} />
            </a>
            <a href={`mailto:${COMPANY_INFO.email}`} className="p-2 bg-gray-100 rounded-full text-brand-dark">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;