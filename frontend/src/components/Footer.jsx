import React from 'react';
import { personalInfo } from './mock';
import { Mail, Phone, MapPin, Linkedin, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      name: 'Email',
      href: `mailto:${personalInfo.email}`,
      icon: <Mail size={20} />
    },
    {
      name: 'LinkedIn',
      href: `https://${personalInfo.linkedin}`,
      icon: <Linkedin size={20} />
    },
    {
      name: 'Phone',
      href: `tel:${personalInfo.phone}`,
      icon: <Phone size={20} />
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand & Description */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  AB
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold">{personalInfo.name}</h3>
                  <p className="text-orange-400">{personalInfo.title}</p>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed max-w-md">
                Innovative Mechatronics Engineer specializing in cutting-edge system design, 
                automation solutions, and cross-functional team leadership. Transforming ideas 
                into market-ready engineering solutions.
              </p>
              
              <div className="flex items-center space-x-2 text-gray-400">
                <MapPin size={16} className="text-orange-500" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <nav className="space-y-4">
                {quickLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block text-gray-300 hover:text-orange-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact & Social */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Connect</h4>
              <div className="space-y-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target={social.name === 'LinkedIn' ? '_blank' : '_self'}
                    rel={social.name === 'LinkedIn' ? 'noopener noreferrer' : ''}
                    className="flex items-center text-gray-300 hover:text-orange-400 transition-colors duration-200 group"
                  >
                    <span className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center mr-3 group-hover:bg-orange-600 transition-colors">
                      {social.icon}
                    </span>
                    {social.name}
                  </a>
                ))}
              </div>

              {/* Professional Status */}
              <div className="mt-8 p-4 bg-green-900/20 rounded-lg border border-green-800">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-green-400 font-medium">Available for Breakthrough Ventures</span>
                </div>
                <p className="text-gray-400 text-sm">
                  Seeking revolutionary high-tech challenges and disruptive innovations
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>© {currentYear} {personalInfo.name}. Made with</span>
              <Heart size={16} className="text-red-500" fill="currentColor" />
              <span>& passion for engineering excellence.</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Last Updated: August 2025</span>
              
              {/* Back to Top Button */}
              <button
                onClick={scrollToTop}
                className="w-10 h-10 bg-orange-600 hover:bg-orange-700 rounded-lg flex items-center justify-center transition-colors duration-200 group"
                aria-label="Back to top"
              >
                <ArrowUp size={16} className="group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;