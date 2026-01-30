import React from 'react';
import Navbar from '@/components/Global/Navbar';
import Footer from '@/components/Global/Footer';
import Logo from '@/components/Global/Logo';
import ScrollProgress from '@/components/Global/ScrollProgress';
import Hero from '@/components/Homepage/Hero';
import Skills from '@/components/Homepage/Skills';
import FeaturedProjects from '@/components/Homepage/FeaturedProjects';
import Contact from '@/components/Homepage/Contact';

const page = () => {
  return (
    <div className="min-h-screen">
      {/* Sticky Logo (top center) - Shows on load, hides on scroll */}
      <Logo />
        
        {/* Sticky Navigation (corners) */}
      <Navbar />
      
      {/* Sticky Footer (bottom corners) */}
      <Footer />
      
      {/* Scroll Progress Indicator */}
      <ScrollProgress />
      
      {/* Main Content Area - Scrollable */}
      <Hero />
      
      {/* Skills Section */}
      <Skills />

      {/* Featured Projects Section - Full Width */}
      <FeaturedProjects />

      {/* Contact Section */}
      <Contact />
    </div>
  );
};

export default page;