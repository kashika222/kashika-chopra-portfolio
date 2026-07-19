import React from 'react';

const ContactView: React.FC = () => {
  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <span className="text-primary text-xs font-semibold tracking-widest uppercase mb-2 block">Let&apos;s Connect</span>
        <h3 className="text-4xl md:text-5xl font-semibold text-on-surface mb-4 tracking-tight">Get in Touch</h3>
        <p className="text-lg text-on-surface-variant leading-relaxed max-w-2xl">
          Open to analytics, BI, and business analyst roles. Reach out via email, LinkedIn, or phone — happy to share more
          about projects and experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            icon: 'mail',
            label: 'Email',
            value: 'kashika222@gmail.com',
            href: 'mailto:kashika222@gmail.com',
          },
          {
            icon: 'school',
            label: 'Purdue Email',
            value: 'chopra72@purdue.edu',
            href: 'mailto:chopra72@purdue.edu',
          },
          {
            icon: 'call',
            label: 'Phone',
            value: '(765) 543-5624',
            href: 'tel:+17655435624',
          },
          {
            icon: 'location_on',
            label: 'Location',
            value: 'West Lafayette, Indiana',
            href: null,
          },
          {
            icon: 'work',
            label: 'LinkedIn',
            value: 'linkedin.com/in/kashika27',
            href: 'https://www.linkedin.com/in/kashika27/',
          },
          {
            icon: 'code',
            label: 'GitHub',
            value: 'github.com/kashika222',
            href: 'https://github.com/kashika222',
          },
        ].map((item) => {
          const content = (
            <div className="glass-card p-6 flex items-start gap-4 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-glass-hover">
              <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-primary">{item.icon}</span>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-outline mb-1">{item.label}</p>
                <p className="text-base font-medium text-on-surface break-all">{item.value}</p>
              </div>
            </div>
          );
          return item.href ? (
            <a key={item.label} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
              {content}
            </a>
          ) : (
            <div key={item.label}>{content}</div>
          );
        })}
      </div>

      <div className="glass-card p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h4 className="text-xl font-medium text-primary mb-1">Prefer a resume first?</h4>
          <p className="text-sm text-on-surface-variant">Download the latest CV and follow up anytime.</p>
        </div>
        <a
          href="/resume.pdf"
          download="Kashika_Chopra_Resume.pdf"
          className="bg-primary-container text-white px-6 py-3 rounded-xl text-sm font-medium flex items-center gap-2 hover:opacity-90 transition-opacity shrink-0"
        >
          <span className="material-symbols-outlined text-[18px]">download</span>
          Download CV
        </a>
      </div>
    </div>
  );
};

export default ContactView;
