import React from 'react';
import { experience } from './mock';
import { MapPin, Calendar, CheckCircle } from 'lucide-react';

const Experience = () => {
  // Professional images for experience section
  const experienceImages = [
    "https://images.unsplash.com/photo-1708728428891-ce375314e569", // Precision calibration equipment
    "https://images.unsplash.com/photo-1647427060118-4911c9821b82", // Industrial automation
    "https://images.unsplash.com/photo-1627704671340-0969d7dbac25", // High-tech precision equipment  
    "https://images.unsplash.com/photo-1703113688651-04deac46f539"  // Precision measurement tools
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A progressive career journey spanning multiple industries, from consumer products to aerospace engineering.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-600 via-orange-500 to-orange-400"></div>

          {/* Experience Items */}
          <div className="space-y-16">
            {experience.map((job, index) => (
              <div key={job.id} className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-orange-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-16' : 'md:ml-auto md:pl-16'} ml-20 md:ml-0`}>
                  <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 overflow-hidden">
                    {/* Company & Role */}
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.role}</h3>
                      <h4 className="text-xl text-orange-600 font-semibold mb-3">{job.company}</h4>
                      
                      {/* Meta Information */}
                      <div className="flex flex-wrap gap-4 text-gray-600 text-sm">
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-2 text-orange-600" />
                          {job.duration}
                        </div>
                        <div className="flex items-center">
                          <MapPin size={16} className="mr-2 text-orange-600" />
                          {job.location}
                        </div>
                      </div>
                    </div>

                    {/* Key Achievements */}
                    <div>
                      <h5 className="text-lg font-semibold text-gray-900 mb-4">Key Achievements:</h5>
                      <div className="space-y-3">
                        {job.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="flex items-start">
                            <CheckCircle size={16} className="text-green-600 mr-3 mt-1 flex-shrink-0" />
                            <p className="text-gray-700 leading-relaxed">{achievement}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Experience Badge */}
                    <div className="mt-6 pt-4 border-t border-gray-200">
                      <span className="inline-block bg-orange-100 text-orange-800 text-xs font-semibold px-3 py-1 rounded-full">
                        {index === 0 ? 'Current Position' : 'Previous Role'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Professional Image - opposite side of content */}
                <div className={`hidden md:block w-5/12 ${index % 2 === 0 ? 'md:ml-auto md:pl-16' : 'md:mr-auto md:pr-16'}`}>
                  <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg group">
                    <img 
                      src={experienceImages[index]} 
                      alt={`Professional equipment for ${job.company}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      onError={(e) => {
                        e.target.src = `data:image/svg+xml,%3Csvg width='400' height='320' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='320' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%236b7280' font-size='18'%3EEngineering Excellence%3C/text%3E%3C/svg%3E`;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-sm font-medium">
                        {index === 0 && "Smart IoT Systems & Consumer Technology"}
                        {index === 1 && "Industrial Dispensing & Automation Systems"}
                        {index === 2 && "Defense & Aerospace Testing Equipment"}
                        {index === 3 && "Precision Calibration & Measurement Tools"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Summary */}
        <div className="mt-20 bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Career Highlights</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">10+</div>
              <div className="text-gray-700">Years of Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">4</div>
              <div className="text-gray-700">Companies</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">5+</div>
              <div className="text-gray-700">Industries</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">20+</div>
              <div className="text-gray-700">Major Projects</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;