import { useTheme } from '../../context/ThemeContext';
import Card from '../ui/Card';
import { aboutSection } from '../../data/portfolio-info';

const About = () => {
  const { isDark } = useTheme();

  return (
    <section id="about" className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="container mx-auto px-6">
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          {aboutSection.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {aboutSection.paragraphs.map((paragraph, index) => (
              <p key={index} className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                {paragraph}
              </p>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-6">
            {aboutSection.stats.map((stat, index) => (
              <Card key={index} className="p-6 text-center" hover={true}>
                <div className="text-4xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
