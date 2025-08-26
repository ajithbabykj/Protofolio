import React from 'react';
import { personalInfo } from './mock';
import { ArrowRight, Download, MapPin, Mail, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-orange-600 rounded-full mr-2 animate-pulse"></span>
                Available for new opportunities
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {personalInfo.name}
              </h1>
              
              <h2 className="text-2xl lg:text-3xl font-semibold text-orange-600">
                {personalInfo.title}
              </h2>
              
              <p className="text-xl text-gray-700 leading-relaxed">
                {personalInfo.tagline}
              </p>
              
              <p className="text-lg text-gray-600 max-w-xl">
                {personalInfo.profileSummary}
              </p>
            </div>

            {/* Quick Contact Info */}
            <div className="flex flex-wrap gap-6 text-gray-600">
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-orange-600" />
                <span className="text-sm">{personalInfo.location}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-orange-600" />
                <span className="text-sm">{personalInfo.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-orange-600" />
                <span className="text-sm">{personalInfo.phone}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                View My Work
                <ArrowRight size={20} className="ml-2" />
              </a>
              
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-orange-600 text-orange-600 font-semibold rounded-lg hover:bg-orange-600 hover:text-white transition-all duration-200"
              >
                <Download size={20} className="mr-2" />
                Download Resume
              </a>
            </div>
          </div>

          {/* Right Content - Stats & Visual */}
          <div className="relative">
            {/* Professional Photo Placeholder */}
            <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute inset-4 bg-gradient-to-r from-gray-800 to-gray-900 rounded-full flex items-center justify-center text-white text-6xl font-bold">
                AB
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -top-4 -left-4 bg-white rounded-lg shadow-lg p-4 border border-gray-100">
                <div className="text-2xl font-bold text-orange-600">9+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4 border border-gray-100">
                <div className="text-2xl font-bold text-orange-600">20+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              
              <div className="absolute top-1/2 -right-8 bg-white rounded-lg shadow-lg p-4 border border-gray-100 transform -translate-y-1/2">
                <div className="text-2xl font-bold text-orange-600">M.Tech</div>
                <div className="text-sm text-gray-600">BITS Pilani</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;