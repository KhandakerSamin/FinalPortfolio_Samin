'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Home, Briefcase, User, ArrowRight } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');

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

  return (
    <>
      {/* Top Left - Navigation Links */}
      <nav className="fixed top-6 left-6 z-50 flex flex-col gap-3 text-sm">
        <Link 
          href="/" 
          className="hover:opacity-70 transition-opacity flex items-center gap-2"
        >
          <Home size={16} />
          <span>HOME</span>
          <ArrowRight size={14} className="ml-1" />
        </Link>
        <Link 
          href="#projects" 
          className="hover:opacity-70 transition-opacity flex items-center gap-2"
        >
          <Briefcase size={16} />
          <span>PROJECTS</span>
          <ArrowRight size={14} className="ml-1" />
        </Link>
        <Link 
          href="#about" 
          className="hover:opacity-70 transition-opacity flex items-center gap-2"
        >
          <User size={16} />
          <span>ABOUT</span>
          <ArrowRight size={14} className="ml-1" />
        </Link>
      </nav>

      {/* Top Right - Location, Date, Time, and Theme Toggle */}
      <div className="fixed top-6 right-6 z-50 flex flex-col items-end gap-2 text-sm">
        <div className="font-medium">DHAKA, BD</div>
        <div className="text-xs opacity-80">{date}</div>
        <div className="font-mono text-base tabular-nums">
          {time}
        </div>
        <ThemeToggle />
      </div>
    </>
  );
};

export default Navbar;
