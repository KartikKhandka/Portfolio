import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check, Copy } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleChange = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "4d1f3d2c-eeb9-4469-a630-05c486c7dc72",
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });
      const result = await response.json();
      
      if (result.success) {
        setSent(true);
        setForm({ name: '', email: '', message: '' });
        alert("Your message has been sent successfully!");
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setSending(false);
      setTimeout(() => setSent(false), 5000);
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-widest mb-2 font-mono text-neutral-500">
            [ SECTION 07 ]
          </p>
          <h2 className="text-3xl sm:text-5xl font-black text-neutral-900 dark:text-neutral-50 uppercase tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Get In Touch
          </h2>
          <div className="w-16 h-1 mx-auto mt-3 bg-neutral-900 dark:bg-neutral-100" />
          <p className="text-neutral-600 dark:text-neutral-400 mt-3 max-w-xl mx-auto text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
            Looking for a dedicated Frontend & Java Full Stack developer? Let's talk!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          <div className="lg:col-span-2 space-y-4">
            {[
              {
                icon: Mail,
                label: 'Email Address',
                value: personalInfo.email,
                action: copyEmail,
                actionLabel: copied ? 'Copied' : 'Copy',
              },
              {
                icon: Phone,
                label: 'Phone Number',
                value: personalInfo.phone,
              },
              {
                icon: MapPin,
                label: 'Location',
                value: 'Bengaluru, Karnataka, India',
              },
            ].map(({ icon: Icon, label, value, action, actionLabel }) => (
              <div
                key={label}
                className="notebook-card p-4 flex items-center justify-between gap-3"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center bg-neutral-900 text-white dark:bg-white dark:text-black flex-shrink-0"
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] text-neutral-500 font-bold uppercase tracking-wider font-mono">
                      {label}
                    </p>
                    <p className="text-neutral-900 dark:text-neutral-100 text-xs font-bold font-mono truncate">
                      {value}
                    </p>
                  </div>
                </div>
                {action && (
                  <button
                    onClick={action}
                    className="btn-ink-secondary px-3 py-1.5 rounded-lg text-xs font-mono flex-shrink-0"
                  >
                    {copied ? <Check className="w-3.5 h-3.5" /> : actionLabel}
                  </button>
                )}
              </div>
            ))}

            <div className="notebook-card p-5">
              <p className="text-xs text-neutral-500 font-bold uppercase tracking-wider mb-4 font-mono">
                Connect Directly
              </p>
              <div className="flex gap-4">
                {[
                  { icon: <GitHubIcon />, href: personalInfo.github, label: 'GitHub' },
                  { icon: <LinkedInIcon />, href: personalInfo.linkedin, label: 'LinkedIn' },
                  { icon: <Mail className="w-5 h-5" />, href: `mailto:${personalInfo.email}`, label: 'Email' },
                ].map(({ icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="btn-ink-secondary flex-1 flex flex-col items-center gap-1.5 p-3 rounded-xl text-center text-xs"
                    title={label}
                  >
                    {icon}
                    <span className="font-mono text-[10px]">{label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="notebook-card p-6 sm:p-8">
              <h3 className="text-lg font-black text-neutral-900 dark:text-neutral-100 mb-6 uppercase tracking-tight font-mono">
                Send Inquiry Message
              </h3>

              {sent && (
                <div
                  className="mb-6 p-4 rounded-lg border-2 border-neutral-900 dark:border-neutral-100 bg-neutral-100 dark:bg-neutral-800 flex items-center gap-3"
                >
                  <Check className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  <p className="text-neutral-900 dark:text-neutral-100 font-mono text-xs font-bold">
                    Message sent successfully!
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase mb-1.5 text-neutral-700 dark:text-neutral-300">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={handleChange('name')}
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-lg border-2 border-neutral-900 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 text-sm font-mono focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase mb-1.5 text-neutral-700 dark:text-neutral-300">
                      Your Email
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={handleChange('email')}
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-lg border-2 border-neutral-900 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 text-sm font-mono focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase mb-1.5 text-neutral-700 dark:text-neutral-300">
                    Message
                  </label>
                  <textarea
                    value={form.message}
                    onChange={handleChange('message')}
                    required
                    rows={4}
                    placeholder="Write your project details or job offer details..."
                    className="w-full px-4 py-3 rounded-lg border-2 border-neutral-900 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 text-sm font-mono focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="btn-ink-primary w-full py-3.5 rounded-xl text-sm font-mono uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  {sending ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
