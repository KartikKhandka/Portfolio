import { useState, useEffect } from 'react';
import { Download, Briefcase, Mail, Check, GraduationCap, MapPin, Pin, ArrowRight } from 'lucide-react';
import { personalInfo, typingRoles, floatingIcons } from '../data/portfolioData';

function useTypewriter(words, speed = 90, pause = 1600) {
  const [displayed, setDisplayed] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting,  setDeleting]  = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), speed);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), speed / 2);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, wordIndex, words, speed, pause]);

  return displayed;
}

export default function Hero() {
  const typedText = useTypewriter(typingRoles);
  const [copied, setCopied] = useState(false);

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = personalInfo.resumeUrl;
    link.download = `${personalInfo.firstName}_Resume.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex items-center overflow-hidden py-12"
      style={{ paddingTop: '100px' }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 notebook-card font-mono">
              <GraduationCap className="w-4 h-4 text-[var(--accent-color)]" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[var(--text-color)]">
                Fresher Developer • Open to Work
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black leading-[0.95] mb-4 tracking-tight">
              <span className="block handwritten text-3xl sm:text-4xl lg:text-5xl text-[var(--text-muted)] mb-2">
                Hello, I’m
              </span>
              <span className="block text-[var(--text-color)] mb-2">
                {personalInfo.name}
              </span>
              <span className="block handwritten text-2xl sm:text-3xl lg:text-4xl text-[var(--accent-color)] mt-2">
                I build thoughtful web experiences with heart.
              </span>
            </h1>

            <div className="flex items-center justify-center lg:justify-start gap-2 mb-6 min-h-[2.5rem] font-mono">
              <span className="text-xl sm:text-2xl font-bold text-[var(--text-color)]">
                {typedText}
              </span>
              <span className="typewriter-cursor" />
            </div>

            <p className="text-[var(--text-muted)] text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
              {personalInfo.summary}
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <button
                onClick={handleDownloadResume}
                className="btn-ink-primary flex items-center gap-2 px-6 py-3 rounded-xl text-sm"
                style={{ fontFamily: 'Space Mono, monospace' }}
              >
                <Download className="w-4 h-4" />
                Download Resume
              </button>

              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="btn-ink-secondary flex items-center gap-2 px-6 py-3 rounded-xl text-sm"
                style={{ fontFamily: 'Space Mono, monospace' }}
              >
                <Briefcase className="w-4 h-4" />
                Hire Me
              </a>

              <button
                onClick={handleCopyEmail}
                className="btn-ink-secondary flex items-center gap-2 px-5 py-3 rounded-xl text-sm"
                style={{ fontFamily: 'Space Mono, monospace' }}
              >
                {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Mail className="w-4 h-4" />}
                {copied ? 'Copied!' : 'Email Me'}
              </button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-6 mt-10">
              {[
                { label: 'Projects',       value: '5+' },
                { label: 'Internships',    value: '2'  },
                { label: 'Certifications', value: '4' },
              ].map(({ label, value }) => (
                <div key={label} className="notebook-card text-center p-3.5 min-w-[100px]">
                  <p className="text-2xl font-black text-[var(--text-color)] font-mono">
                    {value}
                  </p>
                  <p className="text-xs text-[var(--text-muted)] font-bold uppercase tracking-wider mt-0.5" style={{ fontFamily: 'Space Mono, monospace' }}>
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-shrink-0 flex items-center justify-center w-full lg:w-auto">
            <div className="relative tape-top notebook-card doodle-border p-6 max-w-sm w-full transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="rounded-[14px] overflow-hidden mb-4 p-4 border-2 border-[var(--card-border)] bg-[var(--surface-color)] text-center">
                <img
                  src="/gifs/hero.gif"
                  alt="Hire me note"
                  className="w-40 h-40 mx-auto object-contain"
                  loading="lazy"
                />
              </div>

              <div className="text-center">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border border-[var(--card-border)] mb-2 font-mono bg-[var(--badge-bg)] text-[var(--badge-text)]">
                  <MapPin className="w-3 h-3" />
                  Available for opportunities
                </span>
                <h3 className="handwritten text-2xl text-[var(--text-color)] mb-1">
                  Open to work • let’s build something real
                </h3>
                <p className="text-xs text-[var(--text-muted)] mt-1 leading-relaxed font-medium">
                  Fast learner • React + Java Full Stack • Ready to contribute from day one.
                </p>
              </div>

              <div className="absolute top-3 right-3 text-[var(--text-color)]" title="Pinned Note">
                <Pin className="w-5 h-5 transform rotate-45" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
