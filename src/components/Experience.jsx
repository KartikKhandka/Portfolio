import { Briefcase, Calendar, Building2 } from 'lucide-react';
import { experiences } from '../data/portfolioData';

function TimelineItem({ exp, index }) {
  const isLeft = index % 2 === 0;

  return (
    <div className={`relative flex items-center gap-6 ${isLeft ? 'flex-row' : 'flex-row-reverse'} mb-8`}>
      <div className="flex-1">
        <div className="notebook-card p-6">
          <div className="flex items-start justify-between gap-4 mb-3 pb-3 border-b-2 border-dashed border-neutral-300 dark:border-neutral-700">
            <div>
              <h3 className="text-lg font-black text-neutral-900 dark:text-neutral-100" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {exp.role}
              </h3>
              <p className="font-bold text-xs uppercase tracking-wider text-neutral-600 dark:text-neutral-400 font-mono mt-0.5">
                {exp.company}
              </p>
            </div>
            <span
              className="px-3 py-1 rounded-md text-xs font-bold font-mono border border-neutral-900 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 whitespace-nowrap"
            >
              {exp.type}
            </span>
          </div>

          <div className="flex items-center gap-2 mb-3 font-mono text-xs text-neutral-500">
            <Calendar className="w-3.5 h-3.5" />
            <span>{exp.period}</span>
          </div>

          <p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
            {exp.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {exp.skills.map((s) => (
              <span
                key={s}
                className="px-2.5 py-1 rounded-md text-xs font-bold font-mono border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="relative flex-shrink-0 flex flex-col items-center z-10 hidden md:flex">
        <div
          className="w-6 h-6 rounded-full border-4 border-neutral-900 dark:border-neutral-100 bg-white dark:bg-black"
        />
      </div>

      <div className="flex-1 hidden md:block" />
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-widest mb-2 font-mono text-neutral-500">
            [ SECTION 04 ]
          </p>
          <h2 className="text-3xl sm:text-5xl font-black text-neutral-900 dark:text-neutral-50 uppercase tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Work Experience
          </h2>
          <div className="w-16 h-1 mx-auto mt-3 bg-neutral-900 dark:bg-neutral-100" />
        </div>

        <div className="relative">
          <div
            className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 border-r-2 border-dashed border-neutral-400 dark:border-neutral-700 hidden md:block"
          />

          {experiences.map((exp, i) => (
            <TimelineItem key={exp.id} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
