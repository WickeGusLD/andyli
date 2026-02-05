import React, { useState } from 'react';
import Section from './Section';
import { PortfolioItem } from '../types';
import { X, ExternalLink, ArrowRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import ThreeDDocument from './ThreeDDocument';

const Portfolio: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const { t } = useLanguage();

  return (
    <Section id="works" className="bg-white">
      <div className="text-center mb-16">
        <h2 className="text-sm font-bold tracking-widest text-teal-600 uppercase mb-3">{t.portfolio.subtitle}</h2>
        <h3 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6">{t.portfolio.title}</h3>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          {t.portfolio.description}
        </p>
      </div>

      {/* ELAT Highlight */}
      <div className="mb-12 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-2xl p-8 text-white flex flex-col md:flex-row items-center justify-between shadow-lg">
        <div>
          <h4 className="text-2xl font-bold mb-2">{t.portfolio.elatTitle}</h4>
          <p className="text-teal-100">{t.portfolio.elatDesc}</p>
        </div>
        <div className="mt-6 md:mt-0">
          <ThreeDDocument 
             href="https://drive.google.com/file/d/18OknAdTFtVZeW4MRgxi9NIsZey_yiCU_/view?usp=sharing"
             label={t.portfolio.viewFull}
             className="bg-transparent"
          />
        </div>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {t.portfolioItems.map((item) => (
          <div 
            key={item.id} 
            className="group cursor-pointer bg-white rounded-xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-2"
            onClick={() => setSelectedItem(item)}
          >
            <div className="relative h-64 overflow-hidden">
              <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute top-4 left-4 z-20">
                <span className="px-3 py-1 bg-white/95 backdrop-blur-sm text-xs font-bold text-slate-800 rounded-full shadow-sm group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
                  {item.category}
                </span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start">
                <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-teal-700 transition-colors duration-300 pr-4">
                  {item.title}
                </h4>
                <div className="opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300 text-teal-500">
                  <ArrowRight size={20} />
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {item.tags.slice(0, 3).map(tag => (
                  <span 
                    key={tag} 
                    className="text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded transition-colors duration-300 group-hover:bg-teal-50 group-hover:text-teal-700"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" onClick={() => setSelectedItem(null)}></div>
          
          <div className="bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative z-10 shadow-2xl animate-fade-in-up">
            <button 
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-20 p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors"
            >
              <X size={24} className="text-slate-600" />
            </button>

            <div className="h-64 sm:h-80 w-full relative">
              <img src={selectedItem.image} alt={selectedItem.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <div className="text-white">
                  <div className="text-sm font-bold opacity-80 uppercase tracking-wider mb-2">{selectedItem.category}</div>
                  <h3 className="text-3xl md:text-4xl font-serif font-bold">{selectedItem.title}</h3>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedItem.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-teal-50 text-teal-700 text-sm font-medium rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="prose prose-slate max-w-none text-slate-600 mb-8">
                <p>{selectedItem.description}</p>
              </div>

              {selectedItem.link && (
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">Certifications & Documents</p>
                  <ThreeDDocument 
                    href={selectedItem.link} 
                    label={selectedItem.linkText || t.portfolio.viewProject} 
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </Section>
  );
};

export default Portfolio;