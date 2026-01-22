'use client';

import React, { useEffect, useState } from 'react';

const ScrollProgress = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      
      const totalScrollable = documentHeight - windowHeight;
      const percentage = totalScrollable > 0 
        ? Math.round((scrollTop / totalScrollable) * 100)
        : 0;
      
      setScrollPercentage(percentage);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="scroll-progress">
      {scrollPercentage}%
    </div>
  );
};

export default ScrollProgress;
