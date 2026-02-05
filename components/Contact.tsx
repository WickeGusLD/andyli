import React from 'react';
import Section from './Section';
import { SOCIAL_LINKS } from '../constants';
import { Mail, MessageCircle, ArrowUp } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300">
      <Section id="contact" className="py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-teal-500 uppercase mb-4">{t.contact.subtitle}</h2>
            <p className="text-3xl md:text-4xl font-serif font-bold text-white leading-tight mb-6">
              <u>{t.contact.heading1}</u>{t.contact.headingText1}<br />
              <u>{t.contact.heading2}</u>{t.contact.headingText2}<br />
              <u>{t.contact.heading3}</u>{t.contact.headingText3}
            </p>
          </div>
          <div className="flex flex-col gap-4">
             <a 
               href={`mailto:${SOCIAL_LINKS.email}`} 
               className="flex items-center gap-4 p-6 bg-slate-800 rounded-xl hover:bg-slate-700 transition-colors group"
             >
               <div className="p-3 bg-teal-900/50 text-teal-400 rounded-lg group-hover:scale-110 transition-transform">
                 <Mail size={24} />
               </div>
               <div>
                 <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{t.contact.emailLabel}</div>
                 <div className="text-lg font-medium text-white group-hover:text-teal-300 transition-colors">{SOCIAL_LINKS.email}</div>
               </div>
             </a>
             
             <a 
               href={SOCIAL_LINKS.whatsapp} 
               target="_blank"
               rel="noopener noreferrer"
               className="flex items-center gap-4 p-6 bg-slate-800 rounded-xl hover:bg-slate-700 transition-colors group"
             >
               <div className="p-3 bg-green-900/50 text-green-400 rounded-lg group-hover:scale-110 transition-transform">
                 <MessageCircle size={24} />
               </div>
               <div>
                 <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{t.contact.whatsappLabel}</div>
                 <div className="text-lg font-medium text-white group-hover:text-green-300 transition-colors">+852 9273 6338</div>
               </div>
             </a>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">{t.contact.rights}</p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm font-bold text-teal-500 hover:text-teal-400 uppercase tracking-widest transition-colors"
          >
            {t.contact.backToTop} <ArrowUp size={16} />
          </button>
        </div>
      </Section>
    </footer>
  );
};

export default Contact;