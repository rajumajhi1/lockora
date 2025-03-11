
import React from 'react';
import { useIntersectionObserver } from '../utils/animations';

const features = [
  {
    id: 1,
    title: 'End-to-End Encryption',
    description: 'Military-grade AES-256 encryption that ensures your data remains private and secure at all times.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    delay: 0
  },
  {
    id: 2,
    title: 'Biometric Lock',
    description: 'Access your sensitive data securely using fingerprint, face recognition, or other biometric authentication.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 11.5V14m0-2.5v-6a3.5 3.5 0 014.95-3.19m0 0a3.5 3.5 0 014.95 3.19V14m-9.9 0h9.9m-9.9 0l-1 1.5m10.9-1.5l-1 1.5m-9.9-8l1 1m8.9-1l-1 1" />
      </svg>
    ),
    delay: 100
  },
  {
    id: 3,
    title: 'Cloud Sync',
    description: 'Securely sync your protected data across all your devices with automatic backup and recovery.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    delay: 200
  },
  {
    id: 4,
    title: 'Secure Sharing',
    description: 'Privately share sensitive information with trusted contacts using temporary, encrypted links.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
      </svg>
    ),
    delay: 0
  },
  {
    id: 5,
    title: 'Stealth Mode',
    description: 'Hide sensitive apps and data instantly with our quick-switch privacy mode during unwanted observations.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
      </svg>
    ),
    delay: 100
  },
  {
    id: 6,
    title: 'Custom Vaults',
    description: 'Organize your sensitive data in customizable vaults with personalized security settings and access controls.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    delay: 200
  }
];

const FeatureCard: React.FC<{
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}> = ({ title, description, icon, delay }) => {
  const [cardRef, isVisible] = useIntersectionObserver();

  return (
    <div
      ref={cardRef as React.RefObject<HTMLDivElement>}
      className={`feature-card rounded-xl p-6 transition-all duration-500 delay-${delay} transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
      }`}
      style={{ 
        transitionDelay: `${delay}ms`,
        transform: `perspective(1000px) ${isVisible ? 'rotateX(0) translateY(0)' : 'rotateX(10deg) translateY(20px)'}` 
      }}
    >
      <div className="bg-gradient-to-br from-lockora-emerald/20 to-lockora-emerald/5 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-lockora-emerald">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-lockora-silver text-sm">{description}</p>
    </div>
  );
};

const FeaturesGrid: React.FC = () => {
  const [titleRef, isTitleVisible] = useIntersectionObserver();

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="container-padding mx-auto relative z-10">
        <div className="text-center mb-16">
          <div
            ref={titleRef as React.RefObject<HTMLDivElement>}
            className={`transition-all duration-700 ${isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Premium Security <span className="gradient-text">Features</span>
            </h2>
            <p className="text-lockora-silver max-w-2xl mx-auto">
              Experience uncompromising data protection with Lockora's advanced privacy tools and intuitive security features.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-lockora-emerald/5 rounded-full blur-[100px] animate-pulse-slow"></div>
      <div className="absolute left-0 bottom-1/4 w-64 h-64 bg-lockora-accent/5 rounded-full blur-[80px] animate-pulse-slow" style={{animationDelay: '-1s'}}></div>
    </section>
  );
};

export default FeaturesGrid;
