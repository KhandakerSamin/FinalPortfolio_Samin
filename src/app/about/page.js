import React from 'react';
import { BookOpen, GraduationCap, Sparkles, Users } from 'lucide-react';
import Navbar from '@/components/Global/Navbar';
import Footer from '@/components/Global/Footer';
import Logo from '@/components/Global/Logo';
import ScrollProgress from '@/components/Global/ScrollProgress';

const educationItems = [
  {
    icon: BookOpen,
    title: 'Bachelor of Science in Software Engineering',
    institute: 'Daffodil International University',
    period: '2024 - Present',
    details:
      'Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence.',
  },
  {
    icon: BookOpen,
    title: 'Web Development Course',
    institute: 'Programming Hero',
    period: 'July 2023 - December 2023',
    details:
      'Completed frontend web development with React and simple backend work with Node.js through real-life projects.',
  },
  {
    icon: BookOpen,
    title: 'HSC in Science',
    institute: 'Akhaura Cambrian College',
    period: '2019 - 2021',
    details:
      'Completed higher secondary education in science with Higher Math as a major subject.',
  },
];

const achievements = [
  {
    icon: GraduationCap,
    title: 'Student Associate',
    org: 'Data Science Lab, DIU',
    details: 'Working on innovative data science projects and research.',
  },
  {
    icon: Sparkles,
    title: 'Ambassador',
    org: 'Bondi Pathshala',
    details: 'Representing and promoting educational initiatives.',
  },
  {
    icon: Users,
    title: 'Development Lead',
    org: 'oriture',
    details: 'Leading development direction with focus on delivery and team coordination.',
  },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Logo />
      <Navbar />
      <Footer />
      <ScrollProgress />

      <main className="px-4 md:px-8 pt-28 pb-16">
        <section className="max-w-6xl mx-auto mb-20">
          <p className="text-sm opacity-70 mb-3">About Me</p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl leading-tight mb-5">
            Hello, I&apos;m Khandaker Samin Yeasar
          </h1>
          <p className="text-sm md:text-base opacity-70 mb-10">
            ESTJ-A Personality • Strategic Thinker • Team Leader
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 space-y-5 text-sm md:text-base opacity-85 leading-relaxed">
              <p>
                I&apos;m currently pursuing a B.Sc. in Software Engineering at Daffodil International University. As an
                Executive (ESTJ-A) personality type, I am driven by responsibility and collaborative, organized work.
              </p>
              <p>
                After completing a web development course from Programming Hero, I strengthened my frontend skills in
                React.js and the MERN stack. I also actively explore Next.js, TypeScript, and modern UI frameworks.
              </p>
              <p>
                I bring a strategic mindset to every project, focusing on quality delivery and healthy teamwork. My
                goal is to build innovative, user-friendly digital experiences that turn ideas into practical products.
              </p>
            </div>

            <div className="lg:col-span-4">
              <div className="skill-card-item rounded-lg p-6">
                <p className="text-xs opacity-70 mb-3">Currently Learning</p>
                <p className="text-sm md:text-base leading-relaxed">
                  AI &amp; Machine Learning
                  <br />
                  Python for Data Science
                  <br />
                  Advanced Next.js
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto mb-20">
          <div className="flex justify-between items-end mb-10 gap-5">
            <h2 className="text-xl md:text-[32px] font-medium leading-tight">EDUCATION JOURNEY</h2>
            <p className="text-xs md:text-sm opacity-70 text-right">Currently Studying</p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {educationItems.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="skill-card-item rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <Icon size={18} className="mt-1" />
                    <div>
                      <h3 className="text-base md:text-lg mb-1">{item.title}</h3>
                      <p className="text-sm opacity-80 mb-1">{item.institute}</p>
                      <p className="text-xs opacity-60 mb-3">{item.period}</p>
                      <p className="text-sm opacity-80 leading-relaxed">{item.details}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="max-w-6xl mx-auto">
          <h2 className="text-xl md:text-[32px] font-medium leading-tight mb-10">ACHIEVEMENTS &amp; RECOGNITION</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {achievements.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="skill-card-item rounded-lg p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon size={18} />
                    <h3 className="text-base">{item.title}</h3>
                  </div>
                  <p className="text-sm opacity-80 mb-2">{item.org}</p>
                  <p className="text-sm opacity-70 leading-relaxed">{item.details}</p>
                </article>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutPage;
