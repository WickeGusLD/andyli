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
      greeting: "Greetings!",
      iAm: "I am",
      namePart1: "Zhanhong",
      namePart2: "Li Andy",
      cta: "View Portfolio"
    },
    zh: {
      words: BG_WORDS_ZH,
      bgClassBase: "text-slate-600",
      bgClassOverlay: "text-slate-400",
      greeting: "你好！",
      iAm: "我是",
      namePart1: "李展鴻",
      namePart2: "Andy",
      cta: "查看作品集"
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

    const handleMouseMove = (e: MouseEvent) => {
      // Calculate position relative to the container
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Update the clip-path directly
      spotlight.style.clipPath = `circle(250px at ${x}px ${y}px)`;
    };

    const handleMouseEnter = () => {
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      // Reset spotlight to center or hidden
      spotlight.style.clipPath = `circle(0px at 50% 50%)`;
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []); // Empty dependency array ensures listeners are attached once

  // Helper to render background words
  const renderBackgroundPattern = (words: string[], colorClass: string) => {
    // Increased repetition to ensure dense packing
    const repeatedContent = Array(40).fill(words).flat();
    return (
      <div 
        className={`absolute inset-0 overflow-hidden px-4 py-6 text-justify opacity-60 select-none pointer-events-none ${colorClass}`}
        style={{ lineHeight: '1.6' }}
      >
        {repeatedContent.map((word, i) => (
          <React.Fragment key={i}>
            <span className="inline-block mx-2 my-1 text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter whitespace-nowrap opacity-30">
              {word}
            </span>
            {' '}
          </React.Fragment>
        ))}
      </div>
    );
  };

  return (
    <section 
      id="intro" 
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden cursor-none md:cursor-default"
    >
      {/* 
        LAYER 1: BASE LAYER
        Light Theme (White BG)
        Displays content in CURRENT selected language.
      */}
      <div className={`absolute inset-0 bg-slate-50 flex items-center justify-center transition-opacity duration-300 ${isHovering ? 'opacity-20' : 'opacity-100'}`}>
        {renderBackgroundPattern(baseContent.words, baseContent.bgClassBase)}
        
        <div className="relative z-10 max-w-6xl px-6 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-black text-slate-900 tracking-tighter leading-none mb-6">
            {baseContent.greeting}<br />
            {baseContent.iAm} <span className="text-orange-500">{baseContent.namePart1}</span><br />
            <span className="text-orange-500">{baseContent.namePart2}</span>
          </h1>
          
          <div className="flex justify-center gap-4 mt-12 pointer-events-auto">
             <a href="#works" className="px-8 py-3 bg-slate-900 text-white font-bold tracking-widest text-sm hover:bg-orange-500 transition-colors">
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
      */}
      <div 
        ref={spotlightRef}
        className="absolute inset-0 bg-slate-900 flex items-center justify-center pointer-events-none"
        style={{
          // Initial state (hidden)
          clipPath: `circle(0px at 50% 50%)`,
          transition: 'clip-path 0.05s linear' // Very fast transition for smoother follow, or 'none' for instant
        }}
      >
        {renderBackgroundPattern(overlayContent.words, "text-slate-700")}

        <div className="relative z-10 max-w-6xl px-6 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-black text-white tracking-tighter leading-none mb-6 font-sans">
            {overlayContent.greeting}<br />
            {overlayContent.iAm} <span className="text-orange-500">{overlayContent.namePart1}</span><br />
            <span className="text-orange-500">{overlayContent.namePart2}</span>
          </h1>
          
          {/* 
            Button in Overlay
            Must align perfectly with the button in Layer 1.
            Since this layer is pointer-events-none, clicks pass through to Layer 1.
            Visually, we just need to show it.
          */}
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