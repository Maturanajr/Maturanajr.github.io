import { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import Card from '../ui/Card';
import { skillCategories, additionalSkills } from '../../data/portfolio-info';

const Skills = () => {
  const { isDark } = useTheme();
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="container mx-auto px-6">
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Habilidades Técnicas
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <Card key={catIndex} className="p-6" hover={true}>
              <h3 className={`text-xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    onMouseEnter={() => setHoveredSkill(`${catIndex}-${skillIndex}`)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className={`flex items-center gap-2 font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        <span className="text-2xl">{skill.icon}</span>
                        {skill.name}
                      </span>
                      <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className={`h-2 rounded-full overflow-hidden ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}>
                      <div
                        className="h-full bg-linear-to-r from-blue-600 to-purple-600 transition-all duration-1000 ease-out"
                        style={{
                          width: hoveredSkill === `${catIndex}-${skillIndex}` ? `${skill.level}%` : '0%',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-12 text-center">
          <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Outras Competências
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalSkills.map((skill, index) => (
              <span
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-110 ${
                  isDark
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
