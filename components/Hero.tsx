import React, { useRef, useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const BG_WORDS_EN = [
  "Bachelor of Education", "Passionate", "Chinese Language Teaching", "/Slasher/", 
  "Enthusiasts", "EdTech", "Innovation", "Creative teaching", "Educator", "Future",
  "AI", "VR/AR", "Inspiring", "Human-centered", "Humanistic Tech", "Caring", 
  "Broadening the Way", "Student-Oriented", "Achieving Aspirations", "Perseverance", "Trust",
  "Education Paramount", "Teaching & Learning", "Humble Teacher", "Great Student", "Virtuous Cultivation"
];

const BG_WORDS_ZH = [
  "教育學士", "熱誠", "中文教學", "／斜槓族／", 
  "愛好者", "教育科技", "創新", "創意教學", "教育者", "未來",
  "AI", "VR/AR", "啟發", "以人為本", "人文科技", "關愛", 
  "人能弘道", "教以學生出發", "育以人生達志", "不懈", "信任",
  "唯教是大", "教學相長", "教者雖小", "學者成大", "施德育人"
];

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage(); 
  const [isHovering, setIsHovering] = useState(false);

  // Define content configurations based on language
  // We want the "Base" layer to reflect the current selected language
  // The "Overlay" layer (Spotlight) reflects the alternate language
  
  const contentConfig = {
    en: {
      words: BG_WORDS_EN,
      bgClassBase: "text-slate-400",
      bgClassOverlay: "text-slate-500", // Slightly different for overlay
      greeting: "GREETINGS!",
      iAm: "I am",
      namePart1: "Zhanhong",
      namePart2: "Li Andy",
      nameSuffix: "",
      cta: "View Portfolio",
      headingClass: "text-5xl md:text-7xl lg:text-9xl"
    },
    zh: {
      words: BG_WORDS_ZH,
      bgClassBase: "text-slate-600",
      bgClassOverlay: "text-slate-400",
      greeting: <>一期一會，會者定離。<br />難得一面，世當珍惜。</>,
      iAm: "我是",
      namePart1: "李展鴻 Andy",
      namePart2: "", // Empty to avoid the break between part 1 and 2
      nameSuffix: <>，<br />辛會！</>,
      cta: "查看履歷",
      headingClass: "text-3xl md:text-5xl lg:text-7xl"
    }
  };

  const baseLang = language;
  const overlayLang = language === 'en' ? 'zh' : 'en';

  const baseContent = contentConfig[baseLang];
  const overlayContent = contentConfig[overlayLang];

  // Direct DOM manipulation for performance (avoids React re-renders on mousemove)
  useEffect(() => {
    const container = containerRef.current;
    const spotlight = spotlightRef.current;

    if (!container || !spotlight) return;

    // Mouse Events
    const handleMouseMove = (e: MouseEvent) => {
      // Disable logic on non-desktop screens
      if (window.innerWidth < 1024) return;

      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      spotlight.style.clipPath = `circle(250px at ${x}px ${y}px)`;
    };

    const handleMouseEnter = () => {
      // Only enable hover state on desktop
      if (window.innerWidth >= 1024) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      spotlight.style.clipPath = `circle(0px at 50% 50%)`;
    };

    // Add Listeners
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Helper to get rotated words for a specific row to ensure deterministic rendering
  const getRowContent = (words: string[], rowIndex: number) => {
    // Rotate words based on row index to create visual variety
    const shift = (rowIndex * 3) % words.length;
    const rotated = [...words.slice(shift), ...words.slice(0, shift)];
    // Duplicate twice to ensure seamless looping and coverage of wide screens
    // Each set needs to be wide enough to fill the screen width
    return [...rotated, ...rotated, ...rotated]; 
  };

  // Helper to render background pattern
  const renderBackgroundPattern = (words: string[], colorClass: string) => {
    // Create fixed number of rows to cover vertical height
    const rows = Array.from({ length: 18 });

    return (
      <div className={`absolute inset-0 flex flex-col justify-between overflow-hidden opacity-60 select-none pointer-events-none ${colorClass} py-4`}>
        {rows.map((_, i) => (
          <div key={i} className="flex w-full overflow-hidden">
            <div 
               className={`flex whitespace-nowrap ${i % 2 === 0 ? 'animate-scroll-left' : 'animate-scroll-right'}`}
               style={{ width: 'fit-content' }}
            >
               {getRowContent(words, i).map((word, wIndex) => (
                 <span key={wIndex} className="inline-block mx-6 text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter opacity-30">
                   {word}
                 </span>
               ))}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section 
      id="intro" 
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden cursor-default lg:cursor-none"
    >
      {/* 
        LAYER 1: BASE LAYER
        Light Theme (White BG)
        Displays content in CURRENT selected language.
      */}
      <div className={`absolute inset-0 bg-slate-50 flex items-center justify-center transition-opacity duration-300 ${isHovering ? 'opacity-20' : 'opacity-100'}`}>
        {renderBackgroundPattern(baseContent.words, baseContent.bgClassBase)}
        
        <div className="relative z-10 max-w-7xl px-6 text-center">
          <h1 className={`${baseContent.headingClass} font-black text-slate-900 tracking-tighter leading-tight mb-6`}>
            {baseContent.greeting}<br />
            {baseContent.iAm} <span className="text-orange-500">{baseContent.namePart1}</span>
            {baseContent.namePart2 && (
              <>
                <br />
                <span className="text-orange-500">{baseContent.namePart2}</span>
              </>
            )}
            {baseContent.nameSuffix}
          </h1>
          
          <div className="flex justify-center gap-4 mt-12 pointer-events-auto">
             <a href="#about" className="px-8 py-3 bg-slate-900 text-white font-bold tracking-widest text-sm hover:bg-orange-500 transition-colors">
               {baseContent.cta}
             </a>
          </div>
        </div>
      </div>

      {/* 
        LAYER 2: OVERLAY / SPOTLIGHT LAYER
        Dark Theme (Dark BG)
        Displays content in ALTERNATE language.
        Revealed by clip-path.
        HIDDEN on Mobile/Tablet (lg breakpoint and below)
      */}
      <div 
        ref={spotlightRef}
        className={`hidden lg:flex absolute inset-0 bg-slate-900 items-center justify-center pointer-events-none transition-opacity duration-300 ${isHovering ? 'opacity-100' : 'opacity-0'}`}
        style={{
          // Initial state (hidden)
          clipPath: `circle(0px at 50% 50%)`,
          // On mobile, we might want this snappy, but a tiny delay helps smoothness
          transition: 'clip-path 0.05s linear' 
        }}
      >
        {renderBackgroundPattern(overlayContent.words, "text-slate-700")}

        <div className="relative z-10 max-w-7xl px-6 text-center">
          <h1 className={`${overlayContent.headingClass} font-black text-white tracking-tighter leading-tight mb-6 font-sans`}>
            {overlayContent.greeting}<br />
            {overlayContent.iAm} <span className="text-orange-500">{overlayContent.namePart1}</span>
            {overlayContent.namePart2 && (
              <>
                <br />
                <span className="text-orange-500">{overlayContent.namePart2}</span>
              </>
            )}
            {overlayContent.nameSuffix}
          </h1>
          
          <div className="flex justify-center gap-4 mt-12">
             <span className="px-8 py-3 bg-white text-slate-900 font-bold tracking-widest text-sm">
               {overlayContent.cta}
             </span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-400 z-20 pointer-events-auto mix-blend-difference transition-opacity duration-300 ${isHovering ? 'opacity-0' : 'opacity-100'}`}>
        <a href="#about" aria-label="Scroll down">
            <ArrowDown size={32} />
        </a>
      </div>

    </section>
  );
};

export default Hero;