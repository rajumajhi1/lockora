
import React, { useEffect, useRef } from 'react';
import AnimatedModel from './AnimatedModel';
import { useIntersectionObserver, MouseParallax } from '../utils/animations';

const HeroSection: React.FC = () => {
  const [headingRef, isHeadingVisible] = useIntersectionObserver();
  const [subheadingRef, isSubheadingVisible] = useIntersectionObserver();
  const [ctaRef, isCtaVisible] = useIntersectionObserver();
  const [modelRef, isModelVisible] = useIntersectionObserver();
  
  const backgroundRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Background parallax effect on scroll
    const handleScroll = () => {
      if (!backgroundRef.current) return;
      const scrollY = window.scrollY;
      const background = backgroundRef.current;
      background.style.transform = `translateY(${scrollY * 0.1}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden pt-20 pb-16 flex items-center">
      {/* Background Elements */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 z-0 overflow-hidden"
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-hero-pattern"></div>
        
        {/* Decorative grid */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMxQTFGMkMiIGQ9Ik0wIDAgaDYwIHY2MCBIMHoiLz48cGF0aCBkPSJNNjAgMzBhMzAgMzAgMCAxMS02MCAwIDMwIDMwIDAgMDE2MCAweiIgc3Ryb2tlPSIjMkEzMDRBIiBzdHJva2Utd2lkdGg9Ii41Ii8+PC9nPjwvc3ZnPg==')] opacity-5"></div>
        
        {/* Gradient overlay at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-lockora-dark to-transparent"></div>
        
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-lockora-emerald/10 blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 rounded-full bg-lockora-accent/10 blur-[80px] animate-pulse-slow" style={{animationDelay: '-2s'}}></div>
      </div>

      <div className="container-padding mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div 
              ref={headingRef as React.RefObject<HTMLDivElement>}
              className={`transition-all duration-700 ${isHeadingVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                Your Privacy, <span className="gradient-text">Perfected.</span>
              </h1>
            </div>
            
            <div 
              ref={subheadingRef as React.RefObject<HTMLDivElement>}
              className={`transition-all duration-700 delay-100 ${isSubheadingVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}
            >
              <p className="text-lg text-lockora-silver mb-8 max-w-lg mx-auto lg:mx-0">
                Lockora is the premium solution for securing your most sensitive data with military-grade encryption, biometric protection, and intuitive privacy controls.
              </p>
            </div>
            
            <div 
              ref={ctaRef as React.RefObject<HTMLDivElement>}
              className={`transition-all duration-700 delay-200 ${isCtaVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}
            >
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#countdown" className="primary-button">
                  Get Early Access
                </a>
                <a href="#features" className="secondary-button">
                  Explore Features
                </a>
              </div>
            </div>
          </div>
          
          <MouseParallax factor={0.02} className="flex justify-center order-1 lg:order-2">
            <div 
              ref={modelRef as React.RefObject<HTMLDivElement>}
              className={`transition-all duration-1000 ${isModelVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
            >
              <AnimatedModel />
            </div>
          </MouseParallax>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
