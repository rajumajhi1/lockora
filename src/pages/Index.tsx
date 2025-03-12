
import React, { useEffect } from 'react';
import NavBar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import RebrandingBanner from '../components/RebrandingBanner';
import FeaturesGrid from '../components/FeaturesGrid';
import CountdownSection from '../components/CountdownSection';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { initScrollAnimations } from '../utils/animations';

const Index: React.FC = () => {
  // Initialize scroll animations and scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
    initScrollAnimations();
  }, []);

  return (
    <>
      <SEO 
        title="Premium Privacy & Security Solution"
        description="Lockora is the premium solution for securing your most sensitive data with military-grade encryption, biometric protection, and intuitive privacy controls."
        keywords="privacy, security, data protection, encryption, biometric, cloud sync"
      />
      
      <div className="relative min-h-screen">
        <header>
          <NavBar />
        </header>
        
        {/* Main Content */}
        <main>
          <HeroSection />
          <article className="container-padding mx-auto">
            <RebrandingBanner />
          </article>
          <FeaturesGrid />
          <CountdownSection />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Index;
