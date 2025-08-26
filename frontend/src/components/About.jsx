import React from 'react';
import { personalInfo, education } from './mock';
import { GraduationCap, Award, Target, Lightbulb } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Target className="text-orange-600" size={24} />,
      title: "Innovation Focus",
      description: "Specialized in developing cutting-edge mechatronic systems that bridge mechanical, electrical, and software engineering."
    },
    {
      icon: <Award className="text-orange-600" size={24} />,
      title: "Industry Recognition", 
      description: "Led development of India's first AI-driven sleep ecosystem and advanced industrial automation solutions."
    },
    {
      icon: <Lightbulb className="text-orange-600" size={24} />,
      title: "Problem Solver",
      description: "Proven track record of optimizing manufacturing processes and reducing operational costs through innovative design."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A passionate engineering professional dedicated to transforming innovative ideas into practical, market-ready solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Engineering Excellence Through Innovation
              </h3>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                With over 10 years of pioneering experience in mechatronics engineering, I architect revolutionary systems that seamlessly integrate mechanical precision, advanced electronics, and intelligent AI-driven control. My expertise spans from classified defense projects for India's premier organizations (DRDO, ISRO, HAL) to breakthrough consumer technologies that redefine market standards.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                As an early adopter and master of emerging technologies, I specialize in AI-powered automation, predictive analytics, and intelligent system integration. My proven ability to transform complex engineering challenges into market-leading solutions has consistently delivered products that not only meet but exceed performance expectations while pioneering new technological frontiers.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="space-y-6">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Education & Achievements */}
          <div className="space-y-8">
            {/* Education */}
            <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <GraduationCap className="text-orange-600 mr-3" size={28} />
                <h3 className="text-2xl font-bold text-gray-900">Education</h3>
              </div>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-4 border-orange-600 pl-6">
                    <h4 className="text-lg font-semibold text-gray-900">{edu.degree}</h4>
                    <p className="text-orange-600 font-medium">{edu.institution}</p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-gray-600">{edu.duration}</span>
                      <span className="text-sm bg-white px-3 py-1 rounded-full text-gray-700">
                        CGPA: {edu.cgpa}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Achievements */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Achievements</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">9+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">20+</div>
                  <div className="text-sm text-gray-600">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">4</div>
                  <div className="text-sm text-gray-600">Companies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">5+</div>
                  <div className="text-sm text-gray-600">Industries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;