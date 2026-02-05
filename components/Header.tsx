import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.intro, href: '#intro' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.exp, href: '#exp' },
    { name: t.nav.works, href: '#works' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-4 border-slate-200/50' 
          : 'bg-transparent py-6 border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#intro" className="text-2xl font-bold font-serif text-slate-900 tracking-tighter">
          Andy<span className="text-teal-600">LI.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          {/* Language Toggle */}
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200 hover:border-teal-500 hover:text-teal-600 transition-all text-xs font-bold text-slate-600 tracking-wide"
            aria-label="Switch Language"
          >
            <Globe size={14} />
            <span>{language === 'en' ? 'EN' : '繁'}</span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-1 px-3 py-1 rounded-full bg-slate-100 text-xs font-bold text-slate-600"
          >
            {language === 'en' ? 'EN' : '繁'}
          </button>
          <button className="text-slate-800" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav with Animation */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-slate-100 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 visible' : 'max-h-0 opacity-0 invisible'}`}
      >
        <div className="p-6 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-lg font-medium text-slate-800 py-2 border-b border-slate-50 last:border-0 hover:text-teal-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;