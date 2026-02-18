'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

const FeaturedProjects = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Lebanese Grill House',
      description: 'Comfortable with API tools and exploring Lebanese learning integration in web applications',
      image: '/p1-Home.jpg',
      link: '#'
    },
    {
      id: 2,
      title: 'Data Science Lab, DIU',
      description: 'A sleek and modern portfolio showcasing creative work and technical expertise',
      image: '/p1-Home.jpg',
      link: '#'
    },
    {
      id: 3,
      title: 'SlideLink',
      description: 'Real-time analytics and insights for social media management and growth',
      image: '/p1-Home.jpg',
      link: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 flex justify-between items-center">
          <h2 className="text-[32px] font-medium mb-4">
            FEATURED<br />PROJECTS
          </h2>
          <p className="text-base  opacity-70 text-right  max-w-xs">
            Transforming ideas into dynamic, user-friendly digital experiences with modern web technologies
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-6 mb-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card relative group cursor-pointer overflow-hidden rounded-lg border transition-all duration-300 hover:shadow-xl"
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ minHeight: '600px' }}
            >
              {/* Main Image - Center */}
              <div className="relative w-full h-full flex items-center justify-center p-8 transition-transform duration-500">
                <div className="relative   max-w-3xl w-2/5 h-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    quality={100}
                    className="object-cover rounded-lg transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Normal State - Bottom Elements */}
              <div className={`absolute bottom-8 left-8 flex items-center gap-2 transition-all duration-300 project-text ${
                hoveredCard === project.id ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
              }`}>
                <ArrowUpRight className="w-4 h-4" />
                <span className="text-sm font-medium">See Project</span>
              </div>

              {/* Hover Overlay */}
              <div
                className={`absolute inset-0 bg-black/80 backdrop-blur-sm flex flex-col justify-center px-12 transition-all duration-700 ease-in-out ${
                  hoveredCard === project.id
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-full pointer-events-none'
                }`}
              >
                {/* Content */}
                <div className="flex flex-col gap-6 max-w-md">
                  <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-base text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* See Project Button */}
                  <Link
                    href={project.link}
                    className="flex items-center gap-2 text-white hover:opacity-70 transition-opacity mt-4"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                    <span className="text-sm font-medium">See Project</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;