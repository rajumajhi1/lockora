
import React, { useEffect } from 'react';
import NavBar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import RebrandingBanner from '../components/RebrandingBanner';
import FeaturesGrid from '../components/FeaturesGrid';
import CountdownSection from '../components/CountdownSection';
import Footer from '../components/Footer';
import { initScrollAnimations } from '../utils/animations';

const Index: React.FC = () => {
  // Initialize scroll animations
  initScrollAnimations();
  
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen">
      <NavBar />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <div className="container-padding mx-auto">
          <RebrandingBanner />
        </div>
        <FeaturesGrid />
        <CountdownSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
