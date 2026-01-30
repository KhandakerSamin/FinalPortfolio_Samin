'use client';

import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-16 py-20">
      <div className="max-w-6xl w-full mx-auto">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-5xl md:text-6xl font-normal leading-tight tracking-tight">
              GET IN<br />TOUCH
            </h2>
          </div>
          <div className="flex items-end justify-end lg:justify-end">
            <p className="text-xs md:text-sm text-right leading-relaxed opacity-60">
              Have a project in mind<br />
              or want to collaborate?<br />
              Feel free to reach out!
            </p>
          </div>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-xs mb-3 opacity-80">
                Your Name*
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
                className="w-full px-5 py-4 text-sm border-0 transition-all focus:outline-none focus:ring-2 focus:ring-opacity-50"
                style={{
                  backgroundColor: 'rgba(128, 128, 128, 0.1)',
                  color: 'var(--foreground)',
                  borderRadius: '4px'
                }}
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-xs mb-3 opacity-80">
                Your Email*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@gmail.com"
                required
                className="w-full px-5 py-4 text-sm border-0 transition-all focus:outline-none focus:ring-2 focus:ring-opacity-50"
                style={{
                  backgroundColor: 'rgba(128, 128, 128, 0.1)',
                  color: 'var(--foreground)',
                  borderRadius: '4px'
                }}
              />
            </div>

            {/* Subject Field */}
            <div>
              <label htmlFor="subject" className="block text-xs mb-3 opacity-80">
                Subject*
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="amar meyer sathe tomake biye dite cai!"
                required
                className="w-full px-5 py-4 text-sm border-0 transition-all focus:outline-none focus:ring-2 focus:ring-opacity-50"
                style={{
                  backgroundColor: 'rgba(128, 128, 128, 0.1)',
                  color: 'var(--foreground)',
                  borderRadius: '4px'
                }}
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8 flex flex-col">
            {/* Message Field */}
            <div className="flex-1">
              <label htmlFor="message" className="block text-xs mb-3 opacity-80">
                Message*
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your daughters specification!"
                required
                className="w-full h-[calc(100%-2rem)] min-h-50 px-5 py-4 text-sm border-0 transition-all focus:outline-none focus:ring-2 focus:ring-opacity-50 resize-none"
                style={{
                  backgroundColor: 'rgba(128, 128, 128, 0.1)',
                  color: 'var(--foreground)',
                  borderRadius: '4px'
                }}
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-10 py-4 text-sm font-medium flex items-center gap-3 transition-all hover:opacity-80"
                style={{
                  backgroundColor: 'var(--foreground)',
                  color: 'var(--background)',
                  borderRadius: '4px'
                }}
              >
                Send Message
                <Send size={16} />
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
