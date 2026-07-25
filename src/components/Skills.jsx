import { useEffect, useRef, useState } from 'react';
import { Code, Server, Database, Wrench, GitBranch, Box, Terminal, Cpu, Layers } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

const ICON_MAP = {
  Code: <Code className="w-5 h-5" />,
  Server: <Server className="w-5 h-5" />,
  Database: <Database className="w-5 h-5" />,
  Wrench: <Wrench className="w-5 h-5" />,
};

const TOOL_ICONS = {
  Git: <GitBranch className="w-4 h-4" />,
  GitHub: <Terminal className="w-4 h-4" />,
  Docker: <Box className="w-4 h-4" />,
  Maven: <Layers className="w-4 h-4" />,
  'VS Code': <Code className="w-4 h-4" />,
  IntelliJ: <Cpu className="w-4 h-4" />,
};

function SkillBar({ name, level, animate }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-xs font-bold text-neutral-800 dark:text-neutral-200" style={{ fontFamily: 'Inter, sans-serif' }}>
          {name}
        </span>
        <span className="text-xs font-black text-neutral-900 dark:text-neutral-100 font-mono">
          {level}%
        </span>
      </div>
      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{ width: animate ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  );
}

function CategoryCard({ category, iconKey, skills }) {
  const [animate, setAnimate] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="notebook-card p-6 transition-transform hover:-translate-y-1"
    >
      <div className="flex items-center gap-3 mb-6 pb-3 border-b-2 border-neutral-900 dark:border-neutral-700">
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center bg-neutral-900 text-white dark:bg-white dark:text-black"
        >
          {ICON_MAP[iconKey] || <Code className="w-5 h-5" />}
        </div>
        <h3 className="text-lg font-black text-neutral-900 dark:text-neutral-100 uppercase tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
          {category}
        </h3>
      </div>

      <div>
        {skills.map(({ name, level }) => (
          <SkillBar key={name} name={name} level={level} animate={animate} />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const mainCategories = skillCategories.filter((c) => c.category !== 'Tools');
  const toolCategory   = skillCategories.find((c) => c.category === 'Tools');

  return (
    <section id="skills" className="section-padding relative">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-widest mb-2 font-mono text-neutral-500">
            [ SECTION 02 ]
          </p>
          <h2 className="text-3xl sm:text-5xl font-black text-neutral-900 dark:text-neutral-50 uppercase tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Technical Skills
          </h2>
          <div className="w-16 h-1 mx-auto mt-3 bg-neutral-900 dark:bg-neutral-100" />
          <p className="text-neutral-600 dark:text-neutral-400 mt-3 max-w-xl mx-auto text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
            Technologies, frameworks, and developer tools mastered through continuous practice and real-world projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
          {mainCategories.map(({ category, iconKey, skills }) => (
            <CategoryCard key={category} category={category} iconKey={iconKey} skills={skills} />
          ))}
        </div>

        {toolCategory && (
          <div className="notebook-card p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6 pb-3 border-b-2 border-neutral-900 dark:border-neutral-700">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center bg-neutral-900 text-white dark:bg-white dark:text-black"
              >
                <Wrench className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-neutral-900 dark:text-neutral-100 uppercase tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Tools & Technologies
              </h3>
            </div>

            <div className="flex flex-wrap gap-4">
              {toolCategory.skills.map(({ name, level }) => (
                <div
                  key={name}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg border-2 border-neutral-900 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
                >
                  <span className="text-neutral-900 dark:text-neutral-100">{TOOL_ICONS[name] || <Wrench className="w-4 h-4" />}</span>
                  <div>
                    <p className="text-xs font-extrabold text-neutral-900 dark:text-neutral-100" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {name}
                    </p>
                    <p className="text-[10px] font-bold text-neutral-500 font-mono">
                      {level}%
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
