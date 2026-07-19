import React from 'react';
import { EducationItem, ViewType } from '../types';

interface OverviewProps {
  profileImage: string;
  onNavigate: (view: ViewType) => void;
}

const EDUCATION: EducationItem[] = [
  {
    degree: 'Master of Science, Business Analytics & Information Management',
    institution: 'Purdue University, Daniels School of Business',
    period: 'Aug 2025 – Aug 2026',
  },
  {
    degree: 'Bachelor of Technology, Computer Science',
    institution: 'University of Petroleum and Energy Studies (UPES)',
    period: 'July 2018 – May 2022',
  },
];

const ACTIVITIES = [
  {
    title: 'Summer Research Project',
    time: 'The Data Mine',
    detail: '',
  },
  {
    title: 'Survived a Midwest winter (barely)',
    time: 'Winter 2025',
    detail: '',
  },
  {
    title: 'Made the perfect cup of coffee (life peaked)',
    time: 'Daily achievement',
    detail: '',
  },
];

const Overview: React.FC<OverviewProps> = ({ profileImage, onNavigate }) => {
  return (
    <div className="space-y-4">
      {/* Hero */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2 glass-card p-5 md:p-6 flex flex-col justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-glass-hover">
          <div className="flex items-center gap-2 text-primary mb-1.5">
            <span className="material-symbols-outlined text-[18px]">auto_awesome</span>
            <span className="text-xs font-medium uppercase tracking-widest">Analytics Professional</span>
          </div>
          <h3 className="text-2xl md:text-4xl font-semibold text-on-surface mb-3 leading-tight tracking-tight">
            Solving complex problems with <span className="text-primary italic">data clarity</span>.
          </h3>
          <p className="text-sm md:text-base text-on-surface-variant max-w-xl mb-4 leading-relaxed">
            Over 3 years of consulting experience delivering business intelligence and analytics solutions for Fortune 500 organizations. Skilled in SQL, Power BI, Snowflake, and data visualization.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              download="Kashika_Chopra_Resume.pdf"
              className="bg-primary-container text-white px-4 py-2 rounded-xl text-sm font-medium flex items-center gap-2 hover:opacity-90 transition-opacity"
            >
              <span className="material-symbols-outlined text-[18px]">download</span>
              Download CV
            </a>
            <a
              href="https://github.com/kashika222"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-outline-variant text-primary px-4 py-2 rounded-xl text-sm font-medium hover:bg-surface-container-low transition-colors"
            >
              View GitHub
            </a>
          </div>
        </div>

        <div className="glass-card overflow-hidden group min-h-[200px] md:min-h-[220px] transition-all duration-300 hover:-translate-y-1 hover:shadow-glass-hover">
          <div className="h-full w-full relative min-h-[200px] md:min-h-[220px]">
            <img
              src={profileImage}
              alt="Kashika Chopra"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>
      </section>

      {/* About + Recent Activity */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
        <div className="lg:col-span-8 glass-card p-5 md:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-glass-hover">
          <h4 className="text-xl font-medium text-on-surface mb-3 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">person</span>
            About Me
          </h4>
          <div className="text-sm text-on-surface-variant space-y-2.5 leading-relaxed">
            <p>
              Graduate student at Purdue University&apos;s{' '}
              <span className="text-on-surface font-semibold italic underline decoration-primary-container/60 underline-offset-4 decoration-2">
                MS in Business Analytics and Information Management
              </span>{' '}
              program with experience in consulting, collaborating with cross-functional teams and clients to develop and manage analytical solutions.
            </p>
            <p>
              Passionate about continuous learning, committed to{' '}
              <span className="text-primary font-semibold">transforming complex datasets into actionable insights</span> and
              leveraging analytics tools and methodologies to facilitate informed business decisions.
            </p>
            <p className="text-sm">
              <span className="text-primary font-medium">Key Skills:</span> Power BI, Qlik Sense, SAS, SQL, Python, Snowflake,
              Jira, Azure DevOps, AWS (Certified Cloud Practitioner)
            </p>
          </div>
        </div>

        <div className="lg:col-span-4 glass-card p-4 md:p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-glass-hover">
          <h4 className="text-xs font-bold text-on-surface mb-3 uppercase tracking-widest">Recent Activity</h4>
          <div className="space-y-3.5 relative before:absolute before:left-[15px] before:top-2 before:bottom-2 before:w-[2px] before:bg-surface-container-high">
            {ACTIVITIES.map((activity, i) => (
              <div key={activity.title} className="relative pl-8">
                <div className="absolute left-0 top-1 w-[32px] h-[32px] flex items-center justify-center">
                  <div
                    className={`w-2.5 h-2.5 rounded-full ring-4 ring-white ${
                      i === 0 ? 'bg-primary' : i === 1 ? 'bg-tertiary-container' : 'bg-outline'
                    }`}
                  />
                </div>
                <p className="text-sm font-bold text-on-surface leading-snug">{activity.title}</p>
                {activity.detail ? (
                  <p className="text-xs text-on-surface-variant">{activity.detail}</p>
                ) : null}
                <p className="text-[10px] text-outline mt-0.5 uppercase tracking-wide">{activity.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education + Certifications — equal height */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
        <div className="lg:col-span-8 glass-card p-5 md:p-6 h-full flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-glass-hover">
          <h4 className="text-xl font-medium text-on-surface mb-3 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">school</span>
            Education
          </h4>
          <div className="space-y-3.5">
            {EDUCATION.map((item) => (
              <div key={item.degree} className="flex gap-3">
                <div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary text-[20px]">workspace_premium</span>
                </div>
                <div>
                  <h5 className="text-base font-bold text-on-surface">{item.degree}</h5>
                  <p className="text-on-surface-variant text-sm">
                    {item.institution} · {item.period}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={() => onNavigate('timeline')}
            className="mt-auto pt-4 flex items-center gap-2 text-primary text-base font-semibold italic group self-start hover:gap-3 transition-all"
          >
            Check out the full journey!
            <span className="material-symbols-outlined text-[18px] group-hover:translate-x-0.5 transition-transform">
              arrow_forward
            </span>
          </button>
        </div>

        <div className="lg:col-span-4 glass-card p-4 md:p-5 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-glass-hover">
          <h4 className="text-xs font-bold text-on-surface mb-3 uppercase tracking-widest">Certifications</h4>
          <div className="space-y-2.5">
            {[
              {
                title: 'AWS Certified Cloud Practitioner',
                sub: 'CLF-C02',
                link: 'https://www.credly.com/badges/20c28916-f11f-4109-a23a-296931ee4ab6/public_url',
              },
              {
                title: 'Microsoft Azure AI Fundamentals',
                sub: 'AI-900',
                link: 'https://www.credly.com/badges/e3f2297b-a58f-49d8-ac9f-d4e4fa0fed9c/public_url',
              },
              {
                title: 'Rising Star Award',
                sub: 'ZS Associates',
                link: null,
              },
            ].map((cert) => {
              const inner = (
                <>
                  <div className="flex items-center gap-2.5">
                    <span
                      className="material-symbols-outlined text-primary"
                      style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}
                    >
                      verified
                    </span>
                    <div>
                      <p className="text-sm font-medium text-on-surface">{cert.title}</p>
                      <p className="text-[11px] text-on-surface-variant">{cert.sub}</p>
                    </div>
                  </div>
                  {cert.link && (
                    <span className="material-symbols-outlined text-outline group-hover:translate-x-1 transition-transform">
                      chevron_right
                    </span>
                  )}
                </>
              );
              const className =
                'p-3 bg-surface-container-low rounded-xl flex justify-between items-center group hover:bg-surface-container-high transition-colors';
              return cert.link ? (
                <a key={cert.title} href={cert.link} target="_blank" rel="noopener noreferrer" className={className}>
                  {inner}
                </a>
              ) : (
                <div key={cert.title} className={className}>
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Overview;
