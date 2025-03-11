
import React from 'react';
import { useIntersectionObserver } from '../utils/animations';

const RebrandingBanner: React.FC = () => {
  const [bannerRef, isBannerVisible] = useIntersectionObserver();

  return (
    <div 
      ref={bannerRef as React.RefObject<HTMLDivElement>}
      className={`glass-panel rounded-xl py-4 px-6 mx-auto max-w-4xl mt-[-40px] relative z-20 transition-all duration-500 ${
        isBannerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="flex flex-col sm:flex-row items-center justify-between">
        <div className="flex items-center mb-3 sm:mb-0">
          <div className="mr-4 bg-lockora-navy p-2 rounded-lg">
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-xs font-medium">
                V
              </div>
              <svg viewBox="0 0 32 32" className="w-8 h-8 text-lockora-emerald/30">
                <circle cx="16" cy="16" r="15.5" fill="none" stroke="currentColor" strokeWidth="1" />
                <path d="M8,16 L14,22 L24,10" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
          <div className="text-sm sm:text-base">
            <p className="text-lockora-silver">
              <span className="text-white font-medium">Vaultify</span> is now <span className="text-lockora-emerald font-medium">Lockora</span>
            </p>
          </div>
        </div>
        <a 
          href="#" 
          className="text-lockora-emerald text-sm hover:text-lockora-emerald2 transition-colors flex items-center"
        >
          Learn about our rebrand
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default RebrandingBanner;
