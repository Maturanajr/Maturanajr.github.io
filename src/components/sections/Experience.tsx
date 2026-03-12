import { useTheme } from '../../context/ThemeContext';
import Card from '../ui/Card';
import { experiences } from '../../data/portfolio-info';

const Experience = () => {
  const { isDark } = useTheme();

  return (
    <section id="experience" className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-6">
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Experiência Profissional
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-8" hover={true}>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {exp.title}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-2">{exp.company}</p>
                </div>
                <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} whitespace-nowrap`}>
                  {exp.period}
                </span>
              </div>
              
              <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                {exp.description}
              </p>

              <ul className="space-y-2">
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx} className={`flex items-start ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {highlight}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
