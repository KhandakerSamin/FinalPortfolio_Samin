'use client';

import React, { useState } from 'react';
import { PlayCircle, SendHorizontal } from 'lucide-react';

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
    <section id="about" className=" flex items-center justify-center px-4 md:px-8 lg:px-16 py-20">
      <div className="max-w-6xl w-full mx-auto">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-xl md:text-[32px] font-medium leading-tight tracking-tight">
              GET IN<br />TOUCH
            </h2>
          </div>
          <div className="flex items-end justify-end lg:justify-end">
            <p className="text-xs md:text-base text-right leading-relaxed opacity-70">
              Have a project in mind<br />
              or want to collaborate?<br />
              Feel free to reach out!
            </p>
          </div>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="contact-form-grid">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-xs mb-2 opacity-70 font-medium">
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
                className="contact-input"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-xs mb-2 opacity-70 font-medium">
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
                className="contact-input"
              />
            </div>

            {/* Subject Field */}
            <div>
              <label htmlFor="subject" className="block text-xs mb-2 opacity-70 font-medium">
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
                className="contact-input"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col">
            {/* Message Field */}
            <div className="flex-1 flex flex-col">
              <label htmlFor="message" className="block text-xs mb-2 opacity-70 font-medium">
                Message*
              </label>
              <div className="flex-1 flex flex-col relative">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your daughters specification!"
                  required
                  className="contact-textarea"
                  style={{ minHeight: '180px' }}
                />
                
                {/* Submit Button - Positioned at bottom right */}
                <button
                  type="submit"
                  className="contact-button text-xl "
                >
                  Send Message
                  <SendHorizontal className='ml-3'/>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
