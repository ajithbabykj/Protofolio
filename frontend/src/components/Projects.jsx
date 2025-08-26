import React, { useState } from 'react';
import { projects } from './mock';
import { ExternalLink, Code, Calendar, Tag } from 'lucide-react';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', ...new Set(projects.map(project => project.category))];
  
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const getCategoryColor = (category) => {
    const colors = {
      'Consumer Products': 'bg-blue-100 text-blue-800',
      'Healthcare Technology': 'bg-green-100 text-green-800',
      'Industrial Automation': 'bg-purple-100 text-purple-800',
      'Industrial Tools': 'bg-orange-100 text-orange-800',
      'Aerospace': 'bg-red-100 text-red-800',
      'Manufacturing Tools': 'bg-gray-100 text-gray-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of innovative engineering solutions spanning consumer products, industrial automation, and cutting-edge technology.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-orange-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-orange-100 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden group"
            >
              {/* Project Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-orange-600/20 flex items-center justify-center">
                  <div className="text-4xl font-bold text-gray-600 opacity-50">
                    {project.title.charAt(0)}
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                {/* Category & Status */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(project.category)}`}>
                    {project.category}
                  </span>
                  <span className="flex items-center text-green-600 text-sm font-medium">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                    {project.status}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex items-center mb-3">
                    <Code size={16} className="text-orange-600 mr-2" />
                    <span className="text-sm font-semibold text-gray-700">Technologies Used:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full hover:bg-orange-100 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <button className="flex items-center text-orange-600 hover:text-orange-700 font-medium transition-colors">
                    <ExternalLink size={16} className="mr-2" />
                    View Details
                  </button>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar size={14} className="mr-1" />
                    2023-2024
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Stats */}
        <div className="mt-20 bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Project Impact</h3>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">6</div>
              <div className="text-gray-600">Major Projects</div>
              <div className="text-sm text-gray-500 mt-1">Completed Successfully</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">5</div>
              <div className="text-gray-600">Industries</div>
              <div className="text-sm text-gray-500 mt-1">Served Across</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
              <div className="text-gray-600">Success Rate</div>
              <div className="text-sm text-gray-500 mt-1">On-Time Delivery</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">3</div>
              <div className="text-gray-600">Patents</div>
              <div className="text-sm text-gray-500 mt-1">Innovation Recognition</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;