import { useState } from 'react';
import { Landmark, Sprout, BookOpen, Cpu, ShoppingCart, ExternalLink, Folder } from 'lucide-react';
import { projects, projectCategories } from '../data/portfolioData';

const PROJECT_ICONS = {
  Landmark: <Landmark className="w-8 h-8" />,
  Sprout: <Sprout className="w-8 h-8" />,
  BookOpen: <BookOpen className="w-8 h-8" />,
  Cpu: <Cpu className="w-8 h-8" />,
  ShoppingCart: <ShoppingCart className="w-8 h-8" />,
};

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

function ProjectCard({ project }) {
  const descriptionLines = project.description.split('\n');

  return (
    <div
      className="notebook-card overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
    >
      <div>
        <div
          className="p-6 border-b-2 border-neutral-900 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-900 flex items-center justify-between"
        >
          <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-neutral-900 text-white dark:bg-white dark:text-black border-2 border-neutral-900 dark:border-neutral-700">
            {PROJECT_ICONS[project.iconKey] || <Folder className="w-8 h-8" />}
          </div>

          <span
            className="px-3 py-1 rounded-md text-xs font-bold font-mono border-2 border-neutral-900 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
          >
            {project.categories[0]}
          </span>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-black text-neutral-900 dark:text-neutral-100 mb-2 leading-snug" style={{ fontFamily: 'Poppins, sans-serif' }}>
            {project.title}
          </h3>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-5" style={{ fontFamily: 'Inter, sans-serif' }}>
            {descriptionLines.map((line, index) => (
              <span key={`${project.id}-${index}`}>
                {line}
                {index < descriptionLines.length - 1 && <br />}
              </span>
            ))}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded-md text-xs font-bold font-mono border border-neutral-900 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="p-6 pt-0 flex gap-3">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ink-secondary flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs"
          style={{ fontFamily: 'Space Mono, monospace' }}
        >
          <GitHubIcon />
          GitHub
        </a>
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ink-primary flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs"
          style={{ fontFamily: 'Space Mono, monospace' }}
        >
          <ExternalLink className="w-3.5 h-3.5" />
          Live Demo
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.categories.includes(activeFilter));

  return (
    <section id="projects" className="section-padding relative">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-widest mb-2 font-mono text-neutral-500">
            [ SECTION 03 ]
          </p>
          <h2 className="text-3xl sm:text-5xl font-black text-neutral-900 dark:text-neutral-50 uppercase tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Featured Projects
          </h2>
          <div className="w-16 h-1 mx-auto mt-3 bg-neutral-900 dark:bg-neutral-100" />
          <p className="text-neutral-600 dark:text-neutral-400 mt-3 max-w-xl mx-auto text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
            Handcrafted software applications — from secure full-stack platforms to AI search algorithms.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold font-mono transition-all duration-200 ${
                activeFilter === cat
                  ? 'btn-ink-primary'
                  : 'btn-ink-secondary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
