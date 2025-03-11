
import React from 'react';
import { useIntersectionObserver } from '../utils/animations';

const Footer: React.FC = () => {
  const [footerRef, isFooterVisible] = useIntersectionObserver();
  
  const appDownloadLinks = [
    { 
      platform: 'App Store', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16.23 7.102c-2.002-.136-3.641 1.151-4.43 1.151-.806 0-2.2-1.142-3.948-1.102-1.736.039-3.462 1.042-4.393 2.638-1.928 3.356-.491 8.279 1.359 11.001.929 1.335 2.01 2.816 3.441 2.757 1.391-.063 1.903-.889 3.577-.889 1.658 0 2.144.889 3.589.85 1.491-.038 2.425-1.335 3.33-2.679.681-.997 1.163-2.034 1.411-3.142-3.66-1.3-3.543-6.077.082-7.974-1.368-1.624-3.023-2.471-4.674-2.611zm-.193-4.779c-.978-.534-2.599-.458-3.595.429-1.097.978-1.77 2.599-1.542 4.145 1.186.039 2.447-.511 3.329-1.478.925-1.026 1.542-2.567 1.348-4.121.077-.039.308-.117.46-.506z" />
        </svg>
      ) 
    },
    { 
      platform: 'Google Play', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M5.521 3.626C5.19 3.573 4.862 3.638 4.575 3.808c-.447.241-.77.674-.77 1.45v13.486c0 .775.323 1.209.77 1.45.288.155.6.226.924.181l9.51-9.511-9.488-9.238zm3.443 2.878l5.03 5.03c.844-.842 2.56-2.557 3.403-3.398-1.32-.632-9.062-4.346-11.051-5.307.857.855 2.013 3.01 2.618 3.675zm6.386 6.384L9.92 17.779l3.618 3.606.005-.001c.414-.107 1.104-.586 1.594-1.078.492-.491.971-1.187 1.077-1.6l.001-.004-1.864-5.814zm-9.207 5.93l5.368-5.367-2.62-2.619c-.658-.655-2.773-1.752-3.662-2.63-.89.918-4.434 8.274-5.091 9.478 1.095.882 4.023 1.594 6.005 1.138z" />
        </svg>
      ) 
    }
  ];
  
  const legalLinks = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Support', href: '#' },
    { name: 'Contact', href: '#' }
  ];

  return (
    <footer
      ref={footerRef as React.RefObject<HTMLElement>}
      className={`py-16 bg-lockora-navy relative transition-all duration-700 ${
        isFooterVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="container-padding mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="text-2xl font-bold text-white mb-4">
              <span className="text-lockora-emerald">L</span>ockora
            </div>
            <p className="text-lockora-silver text-sm max-w-xs">
              Premium privacy and security for your most sensitive data. 
              Your digital life, protected by military-grade encryption.
            </p>
            
            <div className="mt-6 space-y-4">
              {appDownloadLinks.map((link, index) => (
                <a 
                  key={index} 
                  href="#countdown"
                  className="group relative flex items-center space-x-3 glass-panel rounded-lg py-3 px-4 opacity-70 hover:opacity-100 transition-all"
                >
                  <span className="text-lockora-silver group-hover:text-white transition-colors">
                    {link.icon}
                  </span>
                  <span className="text-lockora-silver group-hover:text-white transition-colors">
                    {link.platform}
                  </span>
                  <span className="absolute inset-0 flex items-center justify-center bg-black/80 rounded-lg text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    Coming Soon
                  </span>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-lockora-silver hover:text-white transition-colors">Features</a>
              </li>
              <li>
                <a href="#about" className="text-lockora-silver hover:text-white transition-colors">About</a>
              </li>
              <li>
                <a href="#countdown" className="text-lockora-silver hover:text-white transition-colors">Release Date</a>
              </li>
              <li>
                <a href="#" className="text-lockora-silver hover:text-white transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#" className="text-lockora-silver hover:text-white transition-colors">Blog</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-lockora-silver hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center">
          <p className="text-lockora-silver text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Lockora, Inc. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-4">
            {['twitter', 'facebook', 'instagram'].map((platform) => (
              <a 
                key={platform}
                href="#" 
                className="text-lockora-silver hover:text-white transition-colors"
              >
                <span className="sr-only">{platform}</span>
                {platform === 'twitter' && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                  </svg>
                )}
                {platform === 'facebook' && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h8.615v-6.96h-2.338v-2.725h2.338v-2c0-2.325 1.42-3.592 3.5-3.592.699-.002 1.399.034 2.095.107v2.42h-1.435c-1.128 0-1.348.538-1.348 1.325v1.735h2.697l-.35 2.725h-2.348V21H20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z" />
                  </svg>
                )}
                {platform === 'instagram' && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.802c-2.67 0-2.986.01-4.04.059-.976.045-1.505.207-1.858.344-.466.182-.8.398-1.15.748-.35.35-.566.684-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.055-.059 1.37-.059 4.04 0 2.668.01 2.985.059 4.04.044.975.207 1.504.344 1.857.182.466.398.8.748 1.15.35.35.684.566 1.15.748.353.137.882.3 1.857.344 1.054.046 1.37.058 4.04.058 2.67 0 2.986-.01 4.04-.058.975-.045 1.504-.207 1.857-.344.466-.182.8-.398 1.15-.748.35-.35.566-.684.748-1.15.137-.353.3-.882.344-1.857.047-1.055.059-1.37.059-4.04 0-2.67-.01-2.986-.059-4.04-.044-.976-.207-1.505-.344-1.858-.182-.466-.398-.8-.748-1.15-.35-.35-.684-.566-1.15-.748-.353-.137-.882-.3-1.857-.344-1.054-.047-1.37-.059-4.04-.059zm0 3.064A5.139 5.139 0 0 1 17.134 12 5.139 5.139 0 0 1 12 17.134 5.139 5.139 0 0 1 6.866 12 5.139 5.139 0 0 1 12 6.866zm0 8.468A3.334 3.334 0 0 0 15.334 12 3.334 3.334 0 0 0 12 8.666 3.334 3.334 0 0 0 8.666 12 3.334 3.334 0 0 0 12 15.334zm5.339-8.693a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4z" />
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
