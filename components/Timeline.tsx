import React from 'react';
import Section from './Section';
import { Briefcase, GraduationCap, Award } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import ThreeDDocument from './ThreeDDocument';

const Timeline: React.FC = () => {
  const { t } = useLanguage();

  return (
    <Section id="exp" className="bg-slate-50">
      <div className="grid lg:grid-cols-2 gap-16">
        
        {/* Experience Column */}
        <div>
          <div className="flex items-center gap-3 mb-10">
            <div className="p-3 bg-teal-100 text-teal-700 rounded-lg">
              <Briefcase size={24} />
            </div>
            <h2 className="text-3xl font-serif font-bold text-slate-900">{t.timeline.workTitle}</h2>
          </div>

          <div className="space-y-12 relative border-l-2 border-slate-200 ml-4 pl-8 md:pl-12 py-2">
            {t.experience.map((item) => (
              <div key={item.id} className="relative">
                {/* Dot */}
                <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-5 h-5 bg-white border-4 border-teal-500 rounded-full"></div>
                
                <div className="group">
                  <span className="text-xs font-bold tracking-widest text-teal-600 uppercase mb-1 block">{item.date}</span>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors">{item.title}</h3>
                  <div className="text-sm font-semibold text-slate-500 mb-2">{item.role}</div>
                  <p className="text-slate-600 leading-relaxed mb-4">{item.description}</p>
                  
                  {item.link && (
                    <div className="mt-6">
                      <ThreeDDocument 
                        href={item.link} 
                        label={item.linkText || t.timeline.viewDetails} 
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Awards Column */}
        <div className="space-y-16">
          
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <div className="p-3 bg-indigo-100 text-indigo-700 rounded-lg">
                <GraduationCap size={24} />
              </div>
              <h2 className="text-3xl font-serif font-bold text-slate-900">{t.timeline.eduTitle}</h2>
            </div>

            <div className="space-y-12 relative border-l-2 border-slate-200 ml-4 pl-8 md:pl-12 py-2">
              {t.education.map((item) => (
                <div key={item.id} className="relative">
                  <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-5 h-5 bg-white border-4 border-indigo-500 rounded-full"></div>
                  
                  <div>
                    <span className="text-xs font-bold tracking-widest text-indigo-600 uppercase mb-1 block">{item.date}</span>
                    <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                    <div className="text-sm font-semibold text-slate-500 mb-2">{item.subtitle}</div>
                    <p className="text-slate-600">{item.role}</p>
                    {item.description && <p className="text-slate-500 text-sm mt-2">{item.description}</p>}
                    
                    {item.link && (
                      <div className="mt-4">
                        <ThreeDDocument 
                           href={item.link} 
                           label={item.linkText || t.timeline.learnMore} 
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Awards */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-amber-100 text-amber-700 rounded-lg">
                <Award size={24} />
              </div>
              <h2 className="text-2xl font-serif font-bold text-slate-900">{t.timeline.awardsTitle}</h2>
            </div>
            
            <div className="grid gap-6">
              {t.awards.map((award) => (
                <div key={award.id} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h4 className="font-bold text-slate-800 text-lg mb-1">{award.title}</h4>
                      <p className="text-sm text-slate-500 mb-3">{award.issuer}</p>
                    </div>
                  </div>
                  
                  {award.link && (
                    <div className="mt-4">
                       <ThreeDDocument 
                         href={award.link} 
                         label={t.timeline.viewCertificate} 
                       />
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Language Proficiency */}
             <div className="mt-8 bg-white p-6 rounded-xl border border-slate-200">
               <h3 className="text-lg font-bold text-slate-800 mb-6">{t.timeline.langTitle}</h3>
               
               <div className="space-y-8">
                 {t.timeline.languages.map((lang, index) => (
                   <div key={index} className={index > 0 ? "pt-6 border-t border-slate-100" : ""}>
                     <h4 className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-3">{lang.subtitle}</h4>
                     <div className="flex items-baseline justify-between mb-2">
                       <span className="font-medium text-slate-700">{lang.name}</span>
                       {lang.score && <span className="text-2xl font-bold text-teal-600">{lang.score}</span>}
                     </div>
                     {lang.description && <p className="text-sm text-slate-500 mb-1">{lang.description}</p>}
                     <div className="mt-2 text-xs text-slate-400">{lang.issuer}</div>
                   </div>
                 ))}
               </div>
             </div>
          </div>

        </div>
      </div>
    </Section>
  );
};

export default Timeline;