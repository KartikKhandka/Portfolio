import { GraduationCap, BookOpen, School } from 'lucide-react';
import { education } from '../data/portfolioData';

const EDU_ICONS = {
  GraduationCap: <GraduationCap className="w-5 h-5" />,
  BookOpen: <BookOpen className="w-5 h-5" />,
  School: <School className="w-5 h-5" />,
};

export default function Education() {
  return (
    <section id="education" className="section-padding relative">
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-widest mb-2 font-mono text-neutral-500">
            [ SECTION 05 ]
          </p>
          <h2 className="text-3xl sm:text-5xl font-black text-neutral-900 dark:text-neutral-50 uppercase tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Education & Background
          </h2>
          <div className="w-16 h-1 mx-auto mt-3 bg-neutral-900 dark:bg-neutral-100" />
        </div>

        <div className={`grid grid-cols-1 gap-6 ${
          education.length === 1 ? 'max-w-sm mx-auto' : 
          education.length === 2 ? 'md:grid-cols-2 max-w-3xl mx-auto' : 
          'md:grid-cols-3'
        }`}>
          {education.map((edu) => (
            <div
              key={edu.id}
              className="notebook-card p-6 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-neutral-900 text-white dark:bg-white dark:text-black mb-4">
                  {EDU_ICONS[edu.iconKey] || <GraduationCap className="w-5 h-5" />}
                </div>

                <h3 className="text-lg font-black text-neutral-900 dark:text-neutral-100 mb-1 leading-snug" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {edu.degree}
                </h3>
                <p className="text-xs font-bold font-mono text-neutral-600 dark:text-neutral-400 mb-2 uppercase">
                  {edu.institution}
                </p>
                <p className="text-xs font-mono text-neutral-500 mb-3">
                  {edu.period}
                </p>

                <p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {edu.description}
                </p>
              </div>

              <div>
                <span
                  className="inline-block px-3 py-1 rounded-md text-xs font-extrabold font-mono border-2 border-neutral-900 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
                >
                  {edu.grade}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
