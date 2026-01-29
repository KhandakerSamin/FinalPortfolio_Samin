'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, Heart } from 'lucide-react';

const FeaturedProjects = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Transforming ideas into dynamic, user-friendly digital experiences with modern web technologies',
      tags: ['React', 'Node.js', 'MongoDB'],
      mainImages: ['/p1-1.png', '/p1-1.png', '/p1-1.png'],
      link: '#'
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'A sleek and modern portfolio showcasing creative work and technical expertise',
      tags: ['Next.js', 'Tailwind', 'Framer Motion'],
      mainImages: ['/p1-1.png', '/p1-1.png', '/p1-1.png'],
      link: '#'
    },
    {
      id: 3,
      title: 'Social Media Dashboard',
      description: 'Real-time analytics and insights for social media management and growth',
      tags: ['React', 'TypeScript', 'API'],
      mainImages: ['/p1-1.png', '/p1-1.png', '/p1-1.png'],
      link: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl  mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-5xl font-bold mb-4">
            FEATURED<br />PROJECTS
          </h2>
          <p className="text-sm opacity-60 max-w-md">
            Transforming ideas into dynamic, user-friendly digital experiences with modern web technologies
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-6 mb-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="relative group cursor-pointer overflow-hidden rounded-lg bg-gray-100 dark:background"
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
             

              {/* Main Images Row */}
              <div className="grid grid-cols-3 min-h-150 ml-26 py-10">
                {project.mainImages.map((img, idx) => (
                  <div key={idx} className="relative w-4/6  overflow-hidden rounded-lg">
                    <Image
                      src={img}
                      alt={`${project.title} - Image ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

             

              

              {/* Hover Overlay */}
              <div
                className={`absolute inset-0 bg-black/90 backdrop-blur-sm flex flex-col justify-between p-8 transition-all duration-500 ease-out ${
                  hoveredCard === project.id
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4 pointer-events-none'
                }`}
              >
                {/* Content */}
                <div className="flex flex-col gap-4">
                  <h3 className="text-3xl font-bold text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                {project.tags && project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white/10 text-white text-xs rounded-full border border-white/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* View Project Button */}
                <Link
                  href={project.link}
                  className="self-start bg-white text-black px-6 py-2.5 rounded text-sm font-medium hover:bg-gray-200 transition-colors"
                >
                  View Project →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* See Project Link */}
        <div className="flex items-center gap-2 text-sm hover:opacity-70 transition-opacity cursor-pointer">
          <span>↗</span>
          <span>See Project</span>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
import Contact from '@/components/Homepage/Contact';

// Then in your component:
<Contact />