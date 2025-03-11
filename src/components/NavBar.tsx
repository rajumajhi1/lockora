
import React, { useEffect, useState } from 'react';
import { useIntersectionObserver } from '../utils/animations';

const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navRef, isVisible] = useIntersectionObserver();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      ref={navRef as React.RefObject<HTMLElement>}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-4 bg-lockora-dark/80 backdrop-blur-lg shadow-lg' : 'py-6 bg-transparent'
      } ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-[-20px]'}`}
    >
      <div className="container-padding mx-auto flex justify-between items-center">
        <div className="flex items-center">
          {/* Logo */}
          <div className="text-2xl font-bold mr-2 text-white">
            <span className="text-lockora-emerald">L</span>ockora
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="nav-link">Features</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#countdown" className="nav-link">Release Date</a>
          <a href="#" className="primary-button text-sm py-2 px-4">
            Notify Me
          </a>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          className="block md:hidden text-white focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-lockora-navy/95 backdrop-blur-lg transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } fixed top-[64px] right-0 w-full h-screen`}
      >
        <div className="flex flex-col items-center py-8 space-y-6">
          <a href="#features" className="text-lg font-medium text-white" onClick={() => setMobileMenuOpen(false)}>
            Features
          </a>
          <a href="#about" className="text-lg font-medium text-white" onClick={() => setMobileMenuOpen(false)}>
            About
          </a>
          <a href="#countdown" className="text-lg font-medium text-white" onClick={() => setMobileMenuOpen(false)}>
            Release Date
          </a>
          <a href="#" className="primary-button mt-4">
            Notify Me
          </a>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
