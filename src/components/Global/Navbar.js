'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {  ArrowRight, CornerDownRight } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      
      // Format time
      const bdTime = now.toLocaleString('en-US', {
        timeZone: 'Asia/Dhaka',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      });
      setTime(bdTime);
      
      // Format date
      const bdDate = now.toLocaleString('en-US', {
        timeZone: 'Asia/Dhaka',
        month: 'short',
        day: 'numeric',
        year: '2-digit'
      });
      setDate(bdDate.toUpperCase().replace(',', ''));
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'about'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Left - Navigation Links */}
      <nav className="fixed top-6 left-6 z-50 flex flex-col gap-3 text-sm">
        <Link 
          href="/" 
          className={`flex items-center gap-2 transition-opacity duration-300 ${
            activeSection === 'home' ? 'opacity-40' : 'hover:opacity-50'
          }`}
        >
          <CornerDownRight size={14} />
          <span>HOME</span>
        </Link>
        <Link 
          href="#projects" 
          className={`flex items-center gap-2 transition-opacity duration-300 ${
            activeSection === 'projects' ? 'opacity-40' : 'hover:opacity-50'
          }`}
        >
          <CornerDownRight size={14} />
          <span>PROJECTS</span>
        </Link>
        <Link 
          href="#about" 
          className={`flex items-center gap-2 transition-opacity duration-300 ${
            activeSection === 'about' ? 'opacity-40' : 'hover:opacity-50'
          }`}
        >
          <CornerDownRight size={14} />
          <span>ABOUT</span>
        </Link>
      </nav>

      {/* Top Right - Location, Date, Time, and Theme Toggle */}
      <div className="fixed top-6 right-6 z-50 flex flex-col items-end gap-2 text-sm">
        <div className="font-medium">DHAKA, BD</div>
        <div className=" opacity-80">{date}</div>
        <div className="font-mono opacity-80 tabular-nums">
          {time}
        </div>
        <ThemeToggle />
      </div>
    </>
  );
};

export default Navbar;
