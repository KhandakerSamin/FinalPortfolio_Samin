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
      thumbnails: ['/p1-1.png', '/p1-1.png', '/p1-1.png', '/p1-1.png'],
      link: '#'
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'A sleek and modern portfolio showcasing creative work and technical expertise',
      tags: ['Next.js', 'Tailwind', 'Framer Motion'],
      mainImages: ['/p1-1.png', '/p1-1.png', '/p1-1.png'],
      thumbnails: ['/p1-1.png', '/p1-1.png', '/p1-1.png', '/p1-1.png'],
      link: '#'
    },
    {
      id: 3,
      title: 'Social Media Dashboard',
      description: 'Real-time analytics and insights for social media management and growth',
      tags: ['React', 'TypeScript', 'API'],
      mainImages: ['/p1-1.png', '/p1-1.png', '/p1-1.png'],
      thumbnails: ['/p1-1.png', '/p1-1.png', '/p1-1.png', '/p1-1.png'],
      link: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 px-8">
      <div className="max-w-6xl mx-auto">
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
              className="relative group cursor-pointer overflow-hidden rounded-lg bg-white dark:bg-gray-900"
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Header with Logo and Icons */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                <div className="bg-white dark:bg-gray-800 px-3 py-1.5 rounded shadow-md">
                  <div className="text-red-600 text-xs font-bold">FEATURED</div>
                  <div className="text-[10px] font-semibold">PROJECT</div>
                </div>
                <div className="flex gap-2">
                  <button className="w-8 h-8 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    <Search size={14} />
                  </button>
                  <button className="w-8 h-8 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    <Heart size={14} />
                  </button>
                </div>
              </div>

              {/* Main Images Row */}
              <div className="grid grid-cols-3 gap-2 p-4 pt-16">
                {project.mainImages.map((img, idx) => (
                  <div key={idx} className="relative aspect-[4/3] overflow-hidden rounded-lg">
                    <Image
                      src={img}
                      alt={`${project.title} - Image ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Project Title */}
              <div className="px-4 py-3">
                <h3 className="text-lg font-bold uppercase tracking-wide">
                  {project.title}
                </h3>
              </div>

              {/* Thumbnail Images */}
              <div className="grid grid-cols-4 gap-2 px-4 pb-4">
                {project.thumbnails.map((img, idx) => (
                  <div key={idx} className="relative aspect-[4/3] overflow-hidden rounded">
                    <Image
                      src={img}
                      alt={`${project.title} - Thumbnail ${idx + 1}`}
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
