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
      {/* Sticky Logo (top center) */}
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

      {/* About Section */}
      <section id="about" className="min-h-screen py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">About</h2>
          <p className="text-lg opacity-80">Your about section will be displayed here...</p>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />
    </div>
  );
};

export default page;