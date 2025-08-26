import React from 'react';
import { skills } from './mock';
import { Code, Cpu, Settings, Zap, Users } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Design & CAD",
      icon: <Code className="text-orange-600" size={28} />,
      skills: skills["Design & CAD"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Simulation & Analysis", 
      icon: <Cpu className="text-blue-600" size={28} />,
      skills: skills["Simulation & Analysis"],
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "Manufacturing & Testing",
      icon: <Settings className="text-green-600" size={28} />,
      skills: skills["Manufacturing & Testing"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Technologies",
      icon: <Zap className="text-purple-600" size={28} />,
      skills: skills["Technologies"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Leadership",
      icon: <Users className="text-gray-600" size={28} />,
      skills: skills["Leadership"],
      color: "from-gray-500 to-slate-500"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit of technical skills and industry expertise developed through years of hands-on engineering experience.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-700 font-medium">{skill}</span>
                      <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full transform transition-all duration-500 group-hover:scale-105`}
                          style={{ width: `${85 + Math.random() * 15}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Proficiency Badge */}
              <div className="mt-6 pt-4 border-t border-gray-100">
                <div className="flex items-center justify-center">
                  <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    Expert Level
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Certifications */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Proficiencies</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">Advanced</div>
                <div className="text-gray-600">CAD & Design</div>
                <div className="text-sm text-gray-500 mt-1">10+ Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">Pioneer</div>
                <div className="text-gray-600">Defense & Aerospace</div>
                <div className="text-sm text-gray-500 mt-1">DRDO/ISRO/HAL Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">Visionary</div>
                <div className="text-gray-600">Technology Leadership</div>
                <div className="text-sm text-gray-500 mt-1">Innovation Strategy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;