import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import { LanguageProvider } from './LanguageContext';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="relative">
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