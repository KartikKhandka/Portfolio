import { useState, useEffect } from 'react';
import { Clock, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const DAYS   = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function pad(n) { return String(n).padStart(2, '0'); }

export default function Footer() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const day     = DAYS[time.getDay()];
  const date    = `${time.getDate()} ${MONTHS[time.getMonth()]} ${time.getFullYear()}`;
  const hours   = time.getHours();
  const minutes = pad(time.getMinutes());
  const seconds = pad(time.getSeconds());
  const ampm    = hours >= 12 ? 'PM' : 'AM';
  const hours12 = hours % 12 || 12;

  const handleNavClick = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      className="relative pt-16 pb-8 overflow-hidden border-t-2 border-dashed border-neutral-300 dark:border-neutral-800"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          <div>
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm border-2 border-neutral-900 dark:border-neutral-700 bg-neutral-900 text-white dark:bg-white dark:text-black font-mono"
              >
                KK
              </div>
              <span className="text-lg font-black text-neutral-900 dark:text-neutral-100 font-mono" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {personalInfo.name}
              </span>
            </div>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              {personalInfo.tagline} from {personalInfo.location}.
              Building clean, performant, and accessible web experiences.
            </p>
          </div>

          <div>
            <h4 className="font-extrabold mb-4 text-xs uppercase tracking-wider font-mono text-neutral-900 dark:text-neutral-100">
              Navigation Index
            </h4>
            <div className="grid grid-cols-2 gap-2 font-mono text-xs">
              {['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact'].map((id) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={(e) => handleNavClick(e, id)}
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 capitalize transition-colors"
                >
                  → {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-extrabold mb-4 text-xs uppercase tracking-wider font-mono text-neutral-900 dark:text-neutral-100 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" /> Local Standard Time
            </h4>
            <div
              className="notebook-card p-5 text-center"
            >
              <p className="text-neutral-500 font-mono text-xs mb-0.5">{day}</p>
              <p className="text-neutral-800 dark:text-neutral-200 text-xs font-bold font-mono mb-2">{date}</p>
              <p
                className="text-2xl font-black font-mono tracking-widest text-neutral-900 dark:text-neutral-100"
              >
                {pad(hours12)}:{minutes}
                <span className="text-lg">:{seconds}</span>
                <span className="text-xs ml-1">{ampm}</span>
              </p>
              <p className="text-neutral-500 text-[10px] font-mono mt-1">
                IST (UTC+5:30)
              </p>
            </div>
          </div>
        </div>

        <div className="section-divider mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
        
        
        </div>
      </div>
    </footer>
  );
}
