
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useIntersectionObserver } from "../utils/animations";
import SEO from "../components/SEO";

const NotFound = () => {
  const location = useLocation();
  const [contentRef, isContentVisible] = useIntersectionObserver();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <SEO 
        title="Page Not Found"
        description="The page you're looking for does not exist or has been moved to a secure vault."
      />
      
      <div className="min-h-screen flex items-center justify-center bg-lockora-dark relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-hero-pattern"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-lockora-emerald/10 blur-[100px] animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/3 w-64 h-64 rounded-full bg-lockora-accent/10 blur-[80px] animate-pulse-slow"></div>
        </div>
        
        <main>
          <div 
            ref={contentRef as React.RefObject<HTMLDivElement>}
            className={`glass-panel rounded-xl p-10 text-center max-w-md mx-4 relative z-10 transition-all duration-700 ${
              isContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-lockora-glass flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-lockora-emerald" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"></path>
                <line x1="1" y1="1" x2="23" y2="23"></line>
              </svg>
            </div>
            
            <h1 className="text-4xl font-bold mb-2 text-white">404</h1>
            <p className="text-xl text-lockora-silver mb-6">
              This page is locked away
            </p>
            <p className="text-lockora-silver mb-8">
              The page you're looking for does not exist or has been moved to a secure vault.
            </p>
            <a 
              href="/" 
              className="primary-button inline-flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
              Return to Home
            </a>
          </div>
        </main>
      </div>
    </>
  );
};

export default NotFound;
