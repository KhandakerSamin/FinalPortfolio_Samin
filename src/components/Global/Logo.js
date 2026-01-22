'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Check initial theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);

    // Listen for theme changes
    const observer = new MutationObserver(() => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
      setTheme(currentTheme);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      <Link href="/">
        <Image
          src={theme === 'dark' ? '/logo-dark.png' : '/logo-light.png'}
          alt="Logo"
          width={120}
          height={48}
          className="object-contain"
          priority
        />
      </Link>
    </div>
  );
};

export default Logo;
