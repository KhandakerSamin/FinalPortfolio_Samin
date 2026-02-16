import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'JavaScript', icon: 'JS', color: '#F7DF1E' },
    { name: 'React.js', icon: '⚛️', color: '#61DAFB' },
    { name: 'Next.js', icon: 'JS', color: '#000000' },
  ];

  const secondRow = [
    { name: 'Node.js', icon: 'JS', color: '#339933' },
    { name: 'Express', icon: 'JS', color: '#000000' },
    { name: 'MongoDB', icon: 'JS', color: '#47A248' },
  ];

  const tools = [
    'VS Code', 'Git', 'GitHub', 'Postman', 'Figma', 
    'Docker', 'AWS', 'Firebase', 'Vercel', 'Netlify'
  ];

  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-start mb-12">
        <div>
          <h2 className="text-xl md:text-[32px] font-medium">TECHNICAL</h2>
          <h2 className="text-xl md:text-[32px] font-medium">SKILLS & TOOLS</h2>
        </div>
        <p className="text-right text-base max-w-xs opacity-70">
          Comfortable with AI tools<br />
          and exploring machine<br />
          learning integration in web<br />
          applications
        </p>
      </div>

      {/* First Row - Main Technologies */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill-card-item rounded-lg p-6 transition-all"
          >
            <div className="flex items-center gap-3">
              {skill.icon === 'JS' ? (
                <div className="w-8 h-8 bg-yellow-400 text-black rounded flex items-center justify-center text-sm font-bold">
                  JS
                </div>
              ) : (
                <span className="text-2xl">{skill.icon}</span>
              )}
              <span className="text-lg">{skill.name}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Second Row - Additional Technologies */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        {secondRow.map((skill, index) => (
          <div
            key={index}
            className="skill-card-item rounded-lg p-6 transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-yellow-400 text-black rounded flex items-center justify-center text-sm font-bold">
                JS
              </div>
              <span className="text-lg">{skill.name}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Third Row - Tools */}
      <div className="skill-card-item rounded-lg p-6">
        <div className="flex flex-wrap items-center gap-6">
          {tools.map((tool, index) => (
            <div key={index} className="flex items-center gap-2 hover:opacity-70 transition-opacity">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-blue-500">
                <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"/>
              </svg>
              <span className="text-sm">{tool}</span>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default Skills;
