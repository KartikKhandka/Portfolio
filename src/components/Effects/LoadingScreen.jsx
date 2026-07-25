import { useEffect, useState } from 'react';
import { personalInfo } from '../../data/portfolioData';

export default function LoadingScreen() {
  const [hidden, setHidden] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setHidden(true), 400);
          return 100;
        }
        return prev + 2;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  if (hidden) return null;

  return (
    <div
      className={`loading-screen ${progress === 100 ? 'hidden' : ''}`}
      style={{ transition: progress === 100 ? 'opacity 0.8s ease, visibility 0.8s ease' : '' }}
    >
      <div
        className="absolute w-64 h-64 rounded-full opacity-20 animate-blob"
        style={{ background: 'radial-gradient(circle, #3B82F6, transparent)', top: '20%', left: '20%' }}
      />
      <div
        className="absolute w-80 h-80 rounded-full opacity-15 animate-blob delay-300"
        style={{ background: 'radial-gradient(circle, #8B5CF6, transparent)', bottom: '20%', right: '20%' }}
      />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
        <div className="w-16 h-16 bg-neutral-900 text-white dark:bg-white dark:text-black rounded-2xl flex items-center justify-center font-black text-2xl border-2 border-neutral-900 dark:border-neutral-700 font-mono mb-4">
          KK
        </div>
        <div className="text-xl font-black text-neutral-900 dark:text-neutral-100 tracking-wider font-mono uppercase" style={{ fontFamily: 'Poppins, sans-serif' }}>
          {personalInfo.name}
        </div>
        <p className="text-sm text-gray-400 mt-1" style={{ fontFamily: 'Inter, sans-serif' }}>
          {personalInfo.tagline}
        </p>

        <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-75"
            style={{
              width: `${progress}%`,
              background: 'linear-gradient(90deg, #3B82F6, #8B5CF6, #06B6D4)',
            }}
          />
        </div>
        <p className="text-xs text-gray-500">{progress}%</p>
      </div>
    </div>
  );
}
