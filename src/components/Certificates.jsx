import { Award, Code, Database, Lock, Zap, Terminal, CheckCircle2 } from 'lucide-react';
import { certificates } from '../data/portfolioData';

const CERT_ICONS = {
  Award: <Award className="w-5 h-5" />,
  Code: <Code className="w-5 h-5" />,
  Database: <Database className="w-5 h-5" />,
  Lock: <Lock className="w-5 h-5" />,
  Zap: <Zap className="w-5 h-5" />,
  Terminal: <Terminal className="w-5 h-5" />,
};

function CertCard({ cert, className = "" }) {
  return (
    <div
      className={`notebook-card p-6 flex flex-col justify-between transition-transform hover:-translate-y-1 h-full ${className}`}
    >
      <div>
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center bg-neutral-900 text-white dark:bg-white dark:text-black mb-4"
        >
          {CERT_ICONS[cert.iconKey] || <Award className="w-5 h-5" />}
        </div>

        <h3 className="text-base font-black text-neutral-900 dark:text-neutral-100 mb-1 leading-snug" style={{ fontFamily: 'Poppins, sans-serif' }}>
          {cert.title}
        </h3>

        <p className="text-xs font-bold font-mono text-neutral-600 dark:text-neutral-400 mb-1 uppercase">
          {cert.issuer}
        </p>

        <p className="text-xs text-neutral-500 font-mono mb-3">
          Issued {cert.year}
        </p>

        <p className="text-neutral-700 dark:text-neutral-300 text-xs leading-relaxed mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
          {cert.description}
        </p>
      </div>

      <div className="flex items-center gap-1.5 pt-3 border-t border-neutral-200 dark:border-neutral-800">
        <CheckCircle2 className="w-3.5 h-3.5 text-neutral-900 dark:text-neutral-100" />
        <span className="text-xs font-bold font-mono text-neutral-900 dark:text-neutral-100 uppercase tracking-wider">
          Verified Credential
        </span>
      </div>
    </div>
  );
}

export default function Certificates() {
  return (
    <section id="certificates" className="section-padding relative">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-widest mb-2 font-mono text-neutral-500">
            [ SECTION 06 ]
          </p>
          <h2 className="text-3xl sm:text-5xl font-black text-neutral-900 dark:text-neutral-50 uppercase tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Certifications
          </h2>
          <div className="w-16 h-1 mx-auto mt-3 bg-neutral-900 dark:bg-neutral-100" />
          <p className="text-neutral-600 dark:text-neutral-400 mt-3 max-w-xl mx-auto text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
            Industry-recognized credentials in Full Stack Development, Java, SQL Databases, and Cybersecurity.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {certificates.map((cert, index) => {
            const isLastOfFour = certificates.length === 4 && index === 3;
            return (
              <CertCard 
                key={cert.id} 
                cert={cert} 
                className={isLastOfFour ? "lg:col-start-2" : ""} 
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
