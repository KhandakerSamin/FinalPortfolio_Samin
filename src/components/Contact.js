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
    <section className="min-h-screen py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-normal leading-tight">
              GET IN<br />TOUCH
            </h2>
          </div>
          <div className="flex items-end justify-end">
            <p className="text-sm md:text-base text-right max-w-md opacity-70">
              Have a project in mind<br />
              or want to collaborate?<br />
              Feel free to reach out!
            </p>
          </div>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm mb-2">
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
                className="w-full px-4 py-3 text-sm rounded border-2 transition-all focus:outline-none focus:border-opacity-100"
                style={{
                  backgroundColor: 'var(--background)',
                  color: 'var(--foreground)',
                  borderColor: 'var(--foreground)',
                  borderOpacity: '0.2'
                }}
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm mb-2">
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
                className="w-full px-4 py-3 text-sm rounded border-2 transition-all focus:outline-none focus:border-opacity-100"
                style={{
                  backgroundColor: 'var(--background)',
                  color: 'var(--foreground)',
                  borderColor: 'var(--foreground)',
                  borderOpacity: '0.2'
                }}
              />
            </div>

            {/* Subject Field */}
            <div>
              <label htmlFor="subject" className="block text-sm mb-2">
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
                className="w-full px-4 py-3 text-sm rounded border-2 transition-all focus:outline-none focus:border-opacity-100"
                style={{
                  backgroundColor: 'var(--background)',
                  color: 'var(--foreground)',
                  borderColor: 'var(--foreground)',
                  borderOpacity: '0.2'
                }}
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm mb-2">
                Message*
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your daughters specification!"
                required
                rows="8"
                className="w-full px-4 py-3 text-sm rounded border-2 transition-all focus:outline-none focus:border-opacity-100 resize-none"
                style={{
                  backgroundColor: 'var(--background)',
                  color: 'var(--foreground)',
                  borderColor: 'var(--foreground)',
                  borderOpacity: '0.2'
                }}
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-start">
              <button
                type="submit"
                className="px-8 py-3 text-sm font-medium flex items-center gap-2 transition-all hover:opacity-80 rounded"
                style={{
                  backgroundColor: 'var(--foreground)',
                  color: 'var(--background)'
                }}
              >
                Send Message
                <Send size={18} />
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
