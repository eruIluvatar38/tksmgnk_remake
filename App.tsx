import React from 'react';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import InfoSection from './components/InfoSection';
import ScheduleAndAccessSection from './components/ScheduleAndAccessSection';
import NewsSection from './components/NewsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { LanguageProvider } from './components/LanguageContext';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-brand-50 text-slate-800 overflow-x-hidden">
        <NavBar />
        
        <main>
          <div id="home">
            <HeroSection />
          </div>
          
          <div id="about">
            <AboutSection />
          </div>
          
          <div id="services">
            <ServicesSection />
          </div>
          
          <div id="info">
            <InfoSection />
          </div>
          
          <div id="schedule">
            <ScheduleAndAccessSection />
          </div>
          
          <div id="news">
            <NewsSection />
          </div>
          
          <div id="contact">
            <ContactSection />
          </div>
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;