import React from 'react';
import Navbar from '@/components/Global/Navbar';
import Footer from '@/components/Global/Footer';
import Logo from '@/components/Global/Logo';
import ScrollProgress from '@/components/Global/ScrollProgress';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import FeaturedProjects from '@/components/FeaturedProjects';
import Contact from '@/components/Contact';

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
      <main className="max-w-4xl mx-auto px-8">
        {/* Hero Section */}
        <Hero />
        
        {/* Skills Section */}
        <Skills />
      </main>

      {/* Featured Projects Section - Full Width */}
      <FeaturedProjects />

      {/* Main Content Continued */}
      <main className="max-w-4xl mx-auto px-8">
        <section id="about" className="min-h-screen py-20">
          <h2 className="text-4xl font-bold mb-8">About</h2>
          <p className="text-lg opacity-80">Your about section will be displayed here...</p>
        </section>

        {/* Contact Section */}
        <Contact />
      </main>
    </div>
  );
};

export default page;