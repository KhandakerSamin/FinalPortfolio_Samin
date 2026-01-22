'use client';

import React from 'react';
import Link from 'next/link';

const Logo = () => {
  return (
    <div className="w-full flex justify-center pt-20 pb-8">
      <Link href="/" className="text-center">
        <div className="text-2xl font-bold">
          Khandaker &lt;/&gt;
        </div>
        <div className="text-sm opacity-80">
          Samin Yeasar
        </div>
      </Link>
    </div>
  );
};

export default Logo;
