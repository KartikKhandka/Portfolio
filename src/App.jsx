import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

import Navbar       from './components/Navbar';
import Hero         from './components/Hero';
import About        from './components/About';
import Skills       from './components/Skills';
import Experience   from './components/Experience';
import Projects     from './components/Projects';
import Education    from './components/Education';
import Certificates from './components/Certificates';
import Contact      from './components/Contact';
import Footer       from './components/Footer';

const SectionDivider = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="section-divider opacity-40 my-6" />
  </div>
);

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button
      onClick={scrollTop}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 btn-ink-primary"
      style={{
        opacity: visible ? 1 : 0,
        transform: `${visible ? 'translateY(0)' : 'translateY(20px)'}`,
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}

export default function App() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('dark');
    root.classList.add('light');
    root.style.setProperty('--bg-color', '#fcfbf7');
    root.style.setProperty('--text-color', '#151515');
    root.style.setProperty('--text-muted', '#7c7369');
    root.style.setProperty('--text-soft', '#9b9188');
    root.style.setProperty('--card-bg', '#fffdf9');
    root.style.setProperty('--card-border', '#1c1c1c');
    document.body.style.backgroundColor = '#fcfbf7';
    document.body.style.color = '#151515';
    localStorage.setItem('portfolio_theme', 'light');
  }, []);

  return (
    <>
      <Navbar />

      <main className="relative z-10 pt-4">
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Experience />
        <SectionDivider />
        <Education />
        <SectionDivider />
        <Certificates />
        <SectionDivider />
        <Contact />
      </main>

      <Footer />

      <BackToTop />
    </>
  );
}
