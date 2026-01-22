'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Github, Linkedin, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <>
      {/* Bottom Left - Social Links */}
      <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3 text-sm">
        <Link 
          href="mailto:your@email.com" 
          className="hover:opacity-70 transition-opacity flex items-center gap-2"
        >
          <Mail size={16} />
          <span>EMAIL</span>
        </Link>
        <Link 
          href="https://github.com/yourusername" 
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-70 transition-opacity flex items-center gap-2"
        >
          <Github size={16} />
          <span>GITHUB</span>
        </Link>
        <Link 
          href="https://linkedin.com/in/yourusername" 
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-70 transition-opacity flex items-center gap-2"
        >
          <Linkedin size={16} />
          <span>LINKEDIN</span>
        </Link>
      </div>

      {/* Bottom Right - Copyright */}
      <div className="fixed bottom-6 right-6 z-50 text-sm">
        SAMIN © 2026
      </div>
    </>
  );
};

export default Footer;
