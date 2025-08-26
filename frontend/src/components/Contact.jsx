import React, { useState } from 'react';
import { personalInfo } from './mock';
import { Mail, Phone, MapPin, Linkedin, Send, Clock, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formState, setFormState] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error when user starts typing
    if (formState.error) {
      setFormState(prev => ({ ...prev, error: null }));
    }
  };

  const validateForm = () => {
    const errors = [];
    
    if (!formData.name.trim()) errors.push('Name is required');
    if (!formData.email.trim()) errors.push('Email is required');
    if (!formData.subject.trim()) errors.push('Subject is required');
    if (!formData.message.trim() || formData.message.length < 10) {
      errors.push('Message must be at least 10 characters long');
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      errors.push('Please enter a valid email address');
    }
    
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    const errors = validateForm();
    if (errors.length > 0) {
      setFormState({
        isSubmitting: false,
        isSubmitted: false,
        error: errors.join(', ')
      });
      return;
    }

    setFormState({
      isSubmitting: true,
      isSubmitted: false,
      error: null
    });

    try {
      const response = await axios.post(`${API}/contact`, formData);
      
      if (response.data.success) {
        setFormState({
          isSubmitting: false,
          isSubmitted: true,
          error: null
        });
        // Reset form
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(response.data.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setFormState({
        isSubmitting: false,
        isSubmitted: false,
        error: error.response?.data?.detail || error.message || 'Failed to send message. Please try again.'
      });
    }
  };

  const contactMethods = [
    {
      icon: <Mail className="text-orange-600" size={24} />,
      title: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      description: "Best way to reach me"
    },
    {
      icon: <Phone className="text-orange-600" size={24} />,
      title: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      description: "Available during business hours"
    },
    {
      icon: <MapPin className="text-orange-600" size={24} />,
      title: "Location",
      value: personalInfo.location,
      href: "#",
      description: "Open to remote opportunities"
    },
    {
      icon: <Linkedin className="text-orange-600" size={24} />,
      title: "LinkedIn",
      value: "Connect with me",
      href: `https://${personalInfo.linkedin}`,
      description: "Professional networking"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to bring innovative engineering solutions to your next project? Let's discuss how my expertise can drive your success.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                I'm always interested in new opportunities, challenging projects, and collaborations. Whether you're looking for a mechatronics engineer, need consultation on product development, or want to discuss innovative engineering solutions, I'd love to hear from you.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.href}
                  target={method.title === 'LinkedIn' ? '_blank' : '_self'}
                  rel={method.title === 'LinkedIn' ? 'noopener noreferrer' : ''}
                  className="flex items-center p-6 bg-gray-50 rounded-2xl hover:bg-orange-50 transition-all duration-200 group border border-gray-100 hover:border-orange-200"
                >
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mr-5 group-hover:bg-orange-100 transition-colors shadow-sm">
                    {method.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">{method.title}</h4>
                    <p className="text-orange-600 font-medium mb-1">{method.value}</p>
                    <p className="text-sm text-gray-500">{method.description}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Availability Status */}
            <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-6 border border-green-200">
              <div className="flex items-center mb-3">
                <Clock className="text-green-600 mr-3" size={20} />
                <h4 className="text-lg font-semibold text-gray-900">Current Availability</h4>
              </div>
              <p className="text-green-700 font-medium mb-2">Available for new opportunities</p>
              <p className="text-sm text-gray-600">
                Open to full-time positions, consulting projects, and collaborative ventures in mechatronics engineering.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <MessageSquare className="text-orange-600 mr-3" size={24} />
              <h3 className="text-2xl font-bold text-gray-900">Send a Message</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors resize-none"
                  placeholder="Tell me about your project or opportunity..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-600 text-white font-semibold py-4 px-6 rounded-lg hover:bg-orange-700 transition-colors duration-200 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Send size={20} className="mr-2" />
                Send Message
              </button>
            </form>

            <p className="text-sm text-gray-500 text-center mt-4">
              I typically respond within 24 hours during business days.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;