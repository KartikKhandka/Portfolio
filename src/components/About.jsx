import { MapPin, GraduationCap, Award, Briefcase, Rocket, Languages, User, Code } from 'lucide-react';
import { personalInfo, aboutStats, languages, experiences } from '../data/portfolioData';

const STAT_ICONS = {
  GraduationCap: <GraduationCap className="w-5 h-5" />,
  Rocket: <Rocket className="w-5 h-5" />,
  Briefcase: <Briefcase className="w-5 h-5" />,
  Award: <Award className="w-5 h-5" />,
  Code: <Code className="w-5 h-5" />,
};

const InfoRow = ({ icon: Icon, label, value }) => (
  <div className="flex items-start gap-3">
    <div
      className="w-9 h-9 rounded-lg flex items-center justify-center text-base flex-shrink-0 notebook-card"
    >
      <Icon className="w-4 h-4 text-neutral-900 dark:text-neutral-100" />
    </div>
    <div>
      <p className="text-xs text-neutral-500 font-bold uppercase tracking-wider font-mono">{label}</p>
      <p className="font-bold text-neutral-900 dark:text-neutral-100 text-sm mt-0.5" style={{ fontFamily: 'Inter, sans-serif' }}>{value}</p>
    </div>
  </div>
);

export default function About() {
  return (
    <section id="about" className="section-padding relative">

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-widest mb-2 font-mono text-neutral-500">
            [ SECTION 01 ]
          </p>
          <h2 className="text-3xl sm:text-5xl font-black text-neutral-900 dark:text-neutral-50 uppercase tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
            About Me
          </h2>
          <div className="w-16 h-1 mx-auto mt-3 bg-neutral-900 dark:bg-neutral-100" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          <div>
            <div className="notebook-card p-6 sm:p-8">
              <div className="flex items-center gap-4 mb-6 pb-4 border-b-2 border-neutral-900 dark:border-neutral-700">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center font-black text-lg bg-neutral-900 text-white dark:bg-white dark:text-black font-mono"
                >
                  KK
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {personalInfo.name}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 text-xs font-mono">
                    {personalInfo.tagline}
                  </p>
                </div>
              </div>

              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6 text-sm sm:text-base" style={{ fontFamily: 'Inter, sans-serif' }}>
                AI/ML-focused developer from{' '}
                <span className="font-bold underline">{personalInfo.location}</span>, building intelligent products that combine machine learning, modern web technologies,
                and scalable backend systems. I enjoy turning complex problems into practical, production-ready applications.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <InfoRow icon={MapPin} label="Location" value={personalInfo.location} />
                <InfoRow icon={GraduationCap} label="Focus" value="Full Stack & AI" />
                <InfoRow icon={Award} label="CGPA" value="7.5 / 10" />
                <InfoRow icon={Briefcase} label="Status" value="Open to Work" />
              </div>

              <div className="mt-6 pt-5 border-t-2 border-dashed border-neutral-300 dark:border-neutral-800">
                <p className="text-xs font-bold uppercase tracking-wider mb-3 font-mono text-neutral-500">
                  Languages Spoken
                </p>
                <div className="flex flex-wrap gap-2">
                  {languages.map((lang) => (
                    <span
                      key={lang}
                      className="px-3 py-1 rounded-md text-xs font-bold font-mono bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 border border-neutral-900 dark:border-neutral-700"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {aboutStats.map(({ label, value, iconKey }) => (
                <div
                  key={label}
                  className="notebook-card p-5 text-center transition-transform hover:-translate-y-1"
                >
                  <div className="flex justify-center mb-2 text-neutral-800 dark:text-neutral-200">
                    {STAT_ICONS[iconKey] || <Award className="w-5 h-5" />}
                  </div>
                  <p
                    className="text-3xl font-black text-neutral-900 dark:text-neutral-100 font-mono"
                  >
                    {value}
                  </p>
                  <p className="text-xs text-neutral-500 font-bold uppercase tracking-wider mt-1 font-mono">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            <div className="notebook-card p-6">
              <h4 className="font-extrabold mb-4 flex items-center gap-2 text-neutral-900 dark:text-neutral-100 uppercase tracking-tight text-sm font-mono">
                <Briefcase className="w-4 h-4" /> Work Experience Highlights
              </h4>
              <div className="space-y-3">
                {experiences.slice(0, 3).map(({ role, company }) => (
                  <div
                    key={role}
                    className="flex items-center gap-3 p-3 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50"
                  >
                    <div className="w-2 h-2 rounded-full bg-neutral-900 dark:bg-neutral-100 flex-shrink-0" />
                    <div>
                      <p className="text-neutral-900 dark:text-neutral-100 text-sm font-bold">{role}</p>
                      <p className="text-neutral-500 text-xs font-mono">{company}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
