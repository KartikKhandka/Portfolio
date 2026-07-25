import { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { useActiveSection } from '../hooks/useActiveSection';

const NAV_LINKS = [
  { href: '#home',        label: 'Home' },
  { href: '#about',       label: 'About' },
  { href: '#skills',      label: 'Skills' },
  { href: '#projects',    label: 'Projects' },
  { href: '#experience',  label: 'Experience' },
  { href: '#education',   label: 'Education' },
  { href: '#contact',     label: 'Contact' },
];

const SECTION_IDS = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

export default function Navbar() {
  const [scrolled,     setScrolled]     = useState(false);
  const [menuOpen,     setMenuOpen]     = useState(false);
  const activeSection = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-2.5 notebook-card shadow-sm'
          : 'py-4 bg-transparent'
      }`}
      style={{ backgroundColor: scrolled ? 'var(--navbar-bg)' : 'transparent', borderBottom: scrolled ? '2px solid var(--card-border)' : 'none' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group"
          >
            <div className="relative">
              <div
                className="w-10 h-10 rounded-xl overflow-hidden border-2 flex items-center justify-center font-black text-sm"
                style={{
                  borderColor: 'var(--card-border)',
                  backgroundColor: 'var(--accent-color)',
                  color: 'var(--accent-contrast)',
                  fontFamily: 'Space Mono, monospace'
                }}
              >
                KK
              </div>
            </div>
            <span
              className="text-lg font-extrabold hidden sm:block transition-all group-hover:opacity-75"
              style={{ fontFamily: 'Poppins, sans-serif', color: 'var(--text-color)' }}
            >
              {personalInfo.name}
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map(({ href, label }) => {
              const id = href.replace('#', '');
              const isActive = activeSection === id;
              return (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => handleNavClick(e, href)}
                  className={`relative px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-black text-white dark:bg-white dark:text-black font-bold'
                      : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-800'
                  }`}
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <span className="relative z-10">{label}</span>
                </a>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ink-secondary flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs"
              style={{ fontFamily: 'Space Mono, monospace' }}
            >
              <GitHubIcon />
              GitHub
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ink-primary flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs"
              style={{ fontFamily: 'Space Mono, monospace' }}
            >
              <LinkedInIcon />
              LinkedIn
            </a>
          </div>

          <button
            className="lg:hidden p-2 rounded-lg text-neutral-800 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`block h-0.5 bg-current rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 bg-current rounded transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 bg-current rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? 'max-h-screen opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="notebook-card p-4 flex flex-col gap-2">
            {NAV_LINKS.map(({ href, label }) => {
              const id = href.replace('#', '');
              const isActive = activeSection === id;
              return (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => handleNavClick(e, href)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 ${
                    isActive
                      ? 'bg-black text-white dark:bg-white dark:text-black'
                      : 'text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                  }`}
                >
                  {label}
                </a>
              );
            })}
            <div className="flex flex-col gap-2 pt-2 border-t border-neutral-300 dark:border-neutral-700 mt-2">
             <div className="flex gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 btn-ink-secondary flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm"
                >
                  <GitHubIcon /> GitHub
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 btn-ink-primary flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm"
                >
                  <LinkedInIcon /> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
