
import React, { useState } from 'react';
import { useIntersectionObserver } from '../utils/animations';
import { toast } from 'sonner';

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [formRef, isFormVisible] = useIntersectionObserver();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate email
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      toast.error('Please enter a valid email address');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success('Thank you for subscribing!', {
        description: "We'll notify you when Lockora launches."
      });
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div
      ref={formRef as React.RefObject<HTMLDivElement>}
      className={`w-full max-w-lg mx-auto transition-all duration-700 ${
        isFormVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <form onSubmit={handleSubmit} className="glass-panel rounded-xl p-6">
        <div className="text-center mb-6">
          <h3 className="text-xl font-semibold text-white mb-2">Stay Updated</h3>
          <p className="text-lockora-silver text-sm">
            Be the first to know when Lockora launches and receive exclusive early access.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-lockora-blue/30 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-lockora-silver/50 focus:outline-none focus:ring-2 focus:ring-lockora-emerald/50 transition-all"
            disabled={isSubmitting}
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className={`primary-button whitespace-nowrap ${
              isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {isSubmitting ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing
              </span>
            ) : (
              'Notify Me'
            )}
          </button>
        </div>
        
        <div className="mt-4 text-center">
          <p className="text-xs text-lockora-silver/70">
            By subscribing, you agree to our <a href="#" className="text-lockora-emerald hover:text-lockora-emerald2 transition-colors">Privacy Policy</a> and <a href="#" className="text-lockora-emerald hover:text-lockora-emerald2 transition-colors">Terms of Service</a>.
          </p>
        </div>
      </form>
    </div>
  );
};

export default NewsletterSignup;
