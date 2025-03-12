
import React, { useEffect, useState } from 'react';
import NewsletterSignup from './NewsletterSignup';
import { useIntersectionObserver, MouseParallax } from '../utils/animations';

// Set the launch date to exactly 30 days from now
const calculateLaunchDate = () => {
  const launchDate = new Date();
  launchDate.setDate(launchDate.getDate() + 30);
  return launchDate;
};

const CountdownSection: React.FC = () => {
  const launchDate = calculateLaunchDate();
  const [timeRemaining, setTimeRemaining] = useState({
    days: 30,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  const [titleRef, isTitleVisible] = useIntersectionObserver();
  const [countdownRef, isCountdownVisible] = useIntersectionObserver();

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const now = new Date();
      const difference = launchDate.getTime() - now.getTime();
      
      if (difference <= 0) {
        setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      setTimeRemaining({ days, hours, minutes, seconds });
    };
    
    calculateTimeRemaining();
    const timer = setInterval(calculateTimeRemaining, 1000);
    
    return () => clearInterval(timer);
  }, [launchDate]);

  const CountdownUnit: React.FC<{ value: number; label: string }> = ({ value, label }) => (
    <div className="flex flex-col items-center">
      <div className="backdrop-blur-xl relative px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5 rounded-xl text-center min-w-[70px] sm:min-w-[80px] md:min-w-[110px] bg-gradient-to-b from-white/10 to-white/5 border border-white/20 shadow-lg">
        <div className="text-xl sm:text-2xl md:text-5xl font-bold text-white">
          {value.toString().padStart(2, '0')}
        </div>
        <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-lockora-emerald/30 to-transparent"></div>
        <div className="absolute -bottom-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </div>
      <span className="text-xs sm:text-sm mt-2 sm:mt-3 font-medium text-lockora-silver">{label}</span>
    </div>
  );

  return (
    <section id="countdown" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* New background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-lockora-navy to-lockora-dark"></div>
        
        {/* Enhanced particle background */}
        <div className="absolute inset-0" style={{ 
          background: 'radial-gradient(circle at 20% 80%, rgba(54, 179, 126, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(77, 168, 255, 0.05) 0%, transparent 50%)',
          backgroundSize: '100% 100%',
          opacity: 0.8 
        }}></div>
        
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 right-1/3 w-96 h-96 rounded-full bg-lockora-emerald/10 blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full bg-lockora-accent/10 blur-[100px] animate-pulse-slow" style={{animationDelay: '-2s'}}></div>
      </div>
      
      <div className="container-padding mx-auto relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <div
            ref={titleRef as React.RefObject<HTMLDivElement>}
            className={`transition-all duration-700 ${isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="inline-flex items-center justify-center py-1.5 px-4 rounded-full bg-gradient-to-r from-lockora-emerald/20 to-lockora-accent/20 text-sm font-medium text-lockora-emerald mb-4 md:mb-6 border border-lockora-emerald/20">
              <span className="animate-pulse mr-2 h-2 w-2 rounded-full bg-lockora-emerald"></span>
              Coming Soon
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 text-white">
              We're Launching <span className="gradient-text">Soon</span>
            </h2>
            <p className="text-lockora-silver text-base md:text-lg max-w-xl mx-auto px-4 sm:px-0">
              Our team is working hard to bring you the ultimate privacy solution. 
              Join our waitlist to get early access.
            </p>
          </div>
        </div>
        
        <div
          ref={countdownRef as React.RefObject<HTMLDivElement>}
          className={`transition-all duration-700 delay-100 ${isCountdownVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <MouseParallax factor={0.01}>
            <div className="flex justify-center gap-2 sm:gap-3 md:space-x-8 mb-10 md:mb-16">
              <CountdownUnit value={timeRemaining.days} label="Days" />
              <CountdownUnit value={timeRemaining.hours} label="Hours" />
              <CountdownUnit value={timeRemaining.minutes} label="Minutes" />
              <CountdownUnit value={timeRemaining.seconds} label="Seconds" />
            </div>
          </MouseParallax>
          
          {/* Redesigned Calendar Icon */}
          <div className="flex justify-center mb-10 md:mb-16">
            <div className="w-20 h-20 sm:w-24 sm:h-24 relative animate-float">
              <div className="absolute inset-0 bg-lockora-emerald/30 rounded-xl blur-xl"></div>
              <div className="relative w-full h-full bg-gradient-to-b from-white/15 to-white/5 backdrop-blur-xl rounded-xl border border-white/20 flex flex-col items-center justify-center overflow-hidden shadow-lg">
                <div className="bg-gradient-to-r from-lockora-emerald to-lockora-emerald/80 w-full py-1 sm:py-2 text-xs text-white font-semibold">
                  {launchDate.toLocaleString('default', { month: 'short' })}
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-white mt-1 sm:mt-2">
                  {launchDate.getDate()}
                </div>
              </div>
            </div>
          </div>
          
          {/* Newsletter signup with updated styling */}
          <div className="max-w-xl mx-auto bg-gradient-to-b from-white/10 to-transparent backdrop-blur-lg p-5 sm:p-8 rounded-2xl border border-white/10 shadow-lg">
            <NewsletterSignup />
          </div>
          
          {/* Social Media Icons with improved design */}
          <div className="mt-10 md:mt-16 text-center">
            <p className="text-lockora-silver mb-4 md:mb-6 font-medium">Follow our journey</p>
            <div className="flex justify-center space-x-4 md:space-x-6">
              {['twitter', 'facebook', 'instagram', 'youtube'].map((platform) => (
                <a 
                  key={platform}
                  href="#" 
                  className="group relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-gradient-to-b from-white/10 to-transparent rounded-full hover:from-lockora-emerald/20 hover:to-lockora-emerald/5 transition-all duration-300 border border-white/10"
                >
                  <span className="sr-only">{platform}</span>
                  {platform === 'twitter' && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-white group-hover:text-lockora-emerald transition-colors" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                    </svg>
                  )}
                  {platform === 'facebook' && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-white group-hover:text-lockora-emerald transition-colors" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h8.615v-6.96h-2.338v-2.725h2.338v-2c0-2.325 1.42-3.592 3.5-3.592.699-.002 1.399.034 2.095.107v2.42h-1.435c-1.128 0-1.348.538-1.348 1.325v1.735h2.697l-.35 2.725h-2.348V21H20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z" />
                    </svg>
                  )}
                  {platform === 'instagram' && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-white group-hover:text-lockora-emerald transition-colors" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.802c-2.67 0-2.986.01-4.04.059-.976.045-1.505.207-1.858.344-.466.182-.8.398-1.15.748-.35.35-.566.684-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.055-.059 1.37-.059 4.04 0 2.668.01 2.985.059 4.04.044.975.207 1.504.344 1.857.182.466.398.8.748 1.15.35.35.684.566 1.15.748.353.137.882.3 1.857.344 1.054.046 1.37.058 4.04.058 2.67 0 2.986-.01 4.04-.058.975-.045 1.504-.207 1.857-.344.466-.182.8-.398 1.15-.748.35-.35.566-.684.748-1.15.137-.353.3-.882.344-1.857.047-1.055.059-1.37.059-4.04 0-2.67-.01-2.986-.059-4.04-.044-.976-.207-1.505-.344-1.858-.182-.466-.398-.8-.748-1.15-.35-.35-.684-.566-1.15-.748-.353-.137-.882-.3-1.857-.344-1.054-.047-1.37-.059-4.04-.059zm0 3.064A5.139 5.139 0 0 1 17.134 12 5.139 5.139 0 0 1 12 17.134 5.139 5.139 0 0 1 6.866 12 5.139 5.139 0 0 1 12 6.866zm0 8.468A3.334 3.334 0 0 0 15.334 12 3.334 3.334 0 0 0 12 8.666 3.334 3.334 0 0 0 8.666 12 3.334 3.334 0 0 0 12 15.334zm5.339-8.693a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4z" />
                    </svg>
                  )}
                  {platform === 'youtube' && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-white group-hover:text-lockora-emerald transition-colors" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  )}
                  <span className="absolute inset-0 rounded-full bg-lockora-emerald/20 opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700"></span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountdownSection;
