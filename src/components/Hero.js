import React from 'react';
import Link from 'next/link';
import { Eye, FileText } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal mb-2">
          Full-Stack
        </h1>
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-normal mb-12">
          MERN Developer
        </h2>
        
        <div className="flex items-center justify-center gap-4">
          <Link 
            href="#projects"
            className="px-8 py-3 text-sm transition-all hover:opacity-80 flex items-center gap-2 rounded"
            style={{ 
              backgroundColor: 'var(--foreground)',
              color: 'var(--background)'
            }}
          >
            <Eye size={18} />
            See Project
          </Link>
          
          <Link 
            href="/resume"
            className="px-8 py-3 text-sm font-medium border-2 transition-all hover:opacity-80 flex items-center gap-2 rounded"
            style={{ 
              borderColor: 'var(--foreground)',
              color: 'var(--foreground)',
              backgroundColor: 'transparent'
            }}
          >
            <FileText size={18} />
            View Resume
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
