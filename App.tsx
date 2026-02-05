import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import { LanguageProvider } from './LanguageContext';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time to ensure fonts and layout are stable
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-slate-50 z-[100] flex flex-col items-center justify-center transition-opacity duration-500">
        <div className="animate-pulse flex flex-col items-center">
          <div className="text-4xl font-bold font-serif text-slate-900 tracking-tighter mb-4">
            Andy<span className="text-teal-600">LI.</span>
          </div>
          <div className="h-1 w-16 bg-teal-600 rounded-full animate-bounce"></div>
          <p className="mt-4 text-sm text-slate-400 font-bold tracking-widest uppercase">Loading Portfolio</p>
        </div>
      </div>
    );
  }

  return (
    <LanguageProvider>
      <div className="relative animate-fade-in-up">
        <Header />
        <main>
          <Hero />
          <About />
          <Timeline />
          <Portfolio />
        </main>
        <Contact />
      </div>
    </LanguageProvider>
  );
};

export default App;