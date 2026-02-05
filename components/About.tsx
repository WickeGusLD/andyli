import React from 'react';
import Section from './Section';
import { Download, Brain, Code, PenTool } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';
import { useLanguage } from '../LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  const getIcon = (category: string) => {
    switch(category) {
      case 'pedagogy': return <Brain className="w-5 h-5" />;
      case 'tech': return <Code className="w-5 h-5" />;
      case 'creative': return <PenTool className="w-5 h-5" />;
      default: return <Brain className="w-5 h-5" />;
    }
  };

  const getCategoryName = (cat: string) => {
    switch(cat) {
      case 'pedagogy': return t.about.catPedagogy;
      case 'tech': return t.about.catTech;
      case 'creative': return t.about.catCreative;
      default: return cat;
    }
  };

  return (
    <Section id="about" className="bg-white">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Education Philosophy (Left Column) */}
        <div className="space-y-8">
          <h2 className="text-sm font-bold tracking-widest text-teal-600 uppercase mb-2">{t.about.title}</h2>
          
          {/* Philosophy 1: Teaching */}
          <div>
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 leading-tight mb-4">
              <span className="text-teal-600">{t.about.phil1.highlight}</span>{t.about.phil1.rest}
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed text-justify">
              {t.about.phil1.content}
            </p>
          </div>

          {/* Philosophy 2: Nurturing */}
          <div>
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 leading-tight mb-4">
              <span className="text-orange-500">{t.about.phil2.highlight}</span>{t.about.phil2.rest}
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed text-justify">
              {t.about.phil2.content}
            </p>
          </div>

          <div className="pt-4">
             <a 
               href={SOCIAL_LINKS.cv} 
               target="_blank" 
               rel="noopener noreferrer"
               className="inline-flex items-center gap-2 px-6 py-3 bg-teal-50 text-teal-700 font-semibold rounded-lg hover:bg-teal-100 transition-colors border border-teal-200"
             >
               <Download size={20} />
               {t.about.cv}
             </a>
          </div>
        </div>

        {/* Expertise / Skills (Right Column) */}
        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 sticky top-24">
          <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
            {t.about.expertise}
          </h3>
          <div className="space-y-6">
             {['pedagogy', 'tech', 'creative'].map(cat => (
               <div key={cat}>
                 <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">{getCategoryName(cat)}</h4>
                 <div className="flex flex-wrap gap-3">
                   {t.skills.filter(s => s.category === cat).map(skill => (
                     <span key={skill.name} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white text-slate-700 rounded-md shadow-sm border border-slate-200 text-sm">
                       {getIcon(skill.category)}
                       {skill.name}
                     </span>
                   ))}
                 </div>
               </div>
             ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;