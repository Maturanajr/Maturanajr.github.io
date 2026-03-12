import { useTheme } from '../../context/ThemeContext';
import { footerInfo } from '../../data/portfolio-info';

const Footer = () => {
  const { isDark } = useTheme();

  return (
    <footer className={`py-8 ${isDark ? 'bg-gray-800 border-t border-gray-700' : 'bg-white border-t border-gray-200'}`}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className={`text-center md:text-left mb-4 md:mb-0 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            <p>{footerInfo.copyright}</p>
          </div>
          
          <div className="flex gap-6">
            {footerInfo.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target={link.url.startsWith('http') ? '_blank' : undefined}
                rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`transition-colors duration-300 ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
