import { useEffect, useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import Button from '../ui/Button';
import { personalInfo, heroSection, socialLinks } from '../../data/portfolio-info';

const Hero = () => {
  const { isDark } = useTheme();
  const [displayText, setDisplayText] = useState('');
  const fullText = heroSection.title;
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, [fullText]);

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const renderIcon = (iconName: string) => {
    if (iconName === 'github') {
      return (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      );
    }
    return (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    );
  };

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
        isDark ? 'bg-gray-900' : 'bg-linear-to-br from-blue-50 via-purple-50 to-pink-50'
      }`}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-bounce-slow top-20 left-20"></div>
        <div className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-bounce-slow bottom-20 right-20" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center animate-fade-in">
          <div className="mb-8">
            <div className="w-48 h-48 mx-auto rounded-full bg-linear-to-br from-blue-600 to-purple-600 p-1 shadow-2xl animate-slide-down">
              <img 
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>

          <h1 className={`text-5xl md:text-7xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {personalInfo.name}
          </h1>
          
          <div className="h-12 mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {displayText}
              <span className="animate-pulse">|</span>
            </h2>
          </div>

          <p className={`text-lg md:text-xl mb-8 max-w-2xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            {heroSection.description}
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button onClick={scrollToContact} size="lg">
              {heroSection.cta.primary}
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.open(personalInfo.github, '_blank')}
            >
              {heroSection.cta.secondary}
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mt-12">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`transform hover:scale-110 transition-transform duration-300 ${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
                aria-label={social.name}
              >
                {renderIcon(social.icon)}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className={`w-6 h-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
