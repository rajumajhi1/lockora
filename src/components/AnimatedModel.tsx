
import React, { useEffect, useRef } from 'react';
import { useIntersectionObserver } from '../utils/animations';

const AnimatedModel: React.FC = () => {
  const [modelRef, isVisible] = useIntersectionObserver();
  const floatingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add subtle floating animation
    const element = floatingRef.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 20;
      const yPos = (clientY / window.innerHeight - 0.5) * 20;
      
      element.style.transform = `rotateY(${xPos}deg) rotateX(${-yPos}deg)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      ref={floatingRef as React.RefObject<HTMLDivElement>} 
      className="w-full max-w-[400px] h-[500px] mx-auto perspective-1000 transition-transform duration-300 ease-out"
      style={{ 
        transformStyle: 'preserve-3d',
        transform: 'rotateY(0deg) rotateX(0deg)'
      }}
    >
      <div 
        ref={modelRef as React.RefObject<HTMLDivElement>}
        className={`relative w-full h-full ${isVisible ? 'animate-float' : 'opacity-0'}`}
      >
        {/* Phone Mockup */}
        <div className="absolute inset-0 bg-lockora-navy rounded-[40px] border-4 border-[#2A304A] shadow-lg transform-gpu translate-z-20">
          {/* Screen */}
          <div className="absolute inset-[10px] bg-gradient-to-br from-lockora-blue to-lockora-dark rounded-[30px] overflow-hidden">
            {/* App UI */}
            <div className="w-full h-full p-6 flex flex-col">
              {/* App Header */}
              <div className="flex justify-between items-center mb-6">
                <div className="text-xl font-semibold text-white">Lockora</div>
                <div className="w-8 h-8 rounded-full bg-lockora-emerald flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              
              {/* Vault UI */}
              <div className="bg-[#1D2437] rounded-xl p-4 mb-4 border border-white/5">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-lockora-emerald/20 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-lockora-emerald" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white text-sm font-medium">Personal Vault</div>
                    <div className="text-gray-400 text-xs">4 items · Last updated 2h ago</div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="h-2 w-3/4 bg-white/5 rounded"></div>
                  <div className="h-2 w-1/2 bg-white/5 rounded"></div>
                </div>
              </div>
              
              <div className="bg-[#1D2437] rounded-xl p-4 mb-4 border border-white/5">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-lockora-accent/20 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-lockora-accent" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white text-sm font-medium">Work Documents</div>
                    <div className="text-gray-400 text-xs">12 items · Last updated 1d ago</div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="h-2 w-4/5 bg-white/5 rounded"></div>
                  <div className="h-2 w-2/3 bg-white/5 rounded"></div>
                </div>
              </div>
              
              {/* Bottom Bar */}
              <div className="mt-auto bg-[#1D2437]/50 h-14 rounded-lg flex justify-around items-center border-t border-white/5">
                <div className="flex flex-col items-center">
                  <div className="w-6 h-6 mb-1 bg-lockora-emerald rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                  </div>
                  <div className="text-white text-[10px]">Home</div>
                </div>
                <div className="flex flex-col items-center opacity-50">
                  <div className="w-6 h-6 mb-1 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="text-gray-400 text-[10px]">Search</div>
                </div>
                <div className="flex flex-col items-center opacity-50">
                  <div className="w-6 h-6 mb-1 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="text-gray-400 text-[10px]">Settings</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Phone Button */}
          <div className="absolute h-14 w-1 bg-[#2A304A] rounded-full right-[-3px] top-1/3"></div>
        </div>
        
        {/* Reflection/Shadow */}
        <div className="absolute bottom-[-50px] left-0 right-0 h-20 bg-gradient-radial from-lockora-emerald/20 to-transparent blur-xl opacity-70"></div>
      </div>
    </div>
  );
};

export default AnimatedModel;
