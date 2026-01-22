import React from 'react';
import Navbar from '@/components/Global/Navbar';
import Footer from '@/components/Global/Footer';
import Logo from '@/components/Global/Logo';
import ScrollProgress from '@/components/Global/ScrollProgress';
import Hero from '@/components/Hero';

const page = () => {
  return (
    <div className="min-h-screen">
      {/* Sticky Navigation (corners) */}
      <Navbar />
      
      {/* Sticky Footer (bottom corners) */}
      <Footer />
      
      {/* Scroll Progress Indicator */}
      <ScrollProgress />
      
      {/* Main Content Area - Scrollable */}
      <main className="max-w-4xl mx-auto px-8 pt-4">
        {/* Logo - Not sticky, scrolls with content */}
        <Logo />
        
        {/* Hero Section */}
        <Hero />
        
        {/* Placeholder sections to demonstrate scroll */}
        <section id="projects" className="min-h-screen py-20">
          <h2 className="text-4xl font-bold mb-8">Projects</h2>
          <p className="text-lg opacity-80">Your projects will be displayed here...</p>
        </section>
        
        <section id="about" className="min-h-screen py-20">
          <h2 className="text-4xl font-bold mb-8">About</h2>
          <p className="text-lg opacity-80">Your about section will be displayed here...</p>
        </section>
      </main>
    </div>
  );
};

export default page;