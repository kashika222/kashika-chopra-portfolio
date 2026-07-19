import React from 'react';
import { TimelineItem } from '../types';

const TIMELINE: TimelineItem[] = [
  {
    id: '1',
    year: '2026',
    title: 'Kearney Student Labs',
    company: 'Kearney · Capstone / Industry Practicum',
    period: 'January 2026 – April 2026',
    type: 'professional',
    tags: ['Python', 'Sentence-BERT', 'UMAP', 'HDBSCAN', 'Spend Analytics'],
    responsibilities: [
      'Partnered with Kearney consultants and a Fortune 500 CPG client to translate procurement challenges into a 4-tier spend classification framework',
      'Built an AI-powered spend classification pipeline analyzing 12M+ procurement invoices using TF-IDF, Sentence-BERT, UMAP, and HDBSCAN',
      'Presented analytical findings and recommendations to procurement and data science leadership',
    ],
    metrics: [
      { label: 'Invoice Rows', value: '12M+' },
      { label: 'Classifier', value: '4-tier' },
    ],
    icon: 'trending_up',
  },
  {
    id: '2',
    year: '2025',
    title: 'MS in Business Analytics & Information Management',
    company: 'Purdue University',
    period: 'Aug 2025 – Aug 2026',
    type: 'academic',
    tags: ['Machine Learning', 'Optimization', 'Python'],
    responsibilities: [
      'Advancing technical skillset in Python, machine learning, and experimentation methodologies',
      'Delivering applied analytics projects spanning churn optimization, bankruptcy prediction, and multimodal AI',
    ],
    icon: 'school',
  },
  {
    id: '3',
    year: '2024',
    title: 'Senior Technology Analyst',
    company: 'DefineRight',
    period: 'September 2024 – July 2025',
    type: 'professional',
    tags: ['Power BI', 'Azure DevOps', 'SQL', 'FP&A'],
    responsibilities: [
      'Led 5 analytics engagements supporting FP&A teams within US pharmaceutical organizations, partnering with VPs and CFOs',
      'Designed and maintained enterprise Power BI dashboards supporting 400+ business users, improving reporting accuracy by 40% and reducing redundancy by ~30%',
      'Designed scalable reporting pipelines integrating data from 3 enterprise systems across 4 cross-functional teams',
      'Served as Technical Project Manager: BRDs, Azure DevOps coordination, UAT, and stakeholder communications',
    ],
    metrics: [
      { label: 'Users Served', value: '400+' },
      { label: 'Accuracy Lift', value: '40%' },
    ],
    icon: 'analytics',
  },
  {
    id: '4',
    year: '2022',
    title: 'Business Technology Solutions Associate',
    company: 'ZS Associates',
    period: 'May 2022 – August 2024',
    type: 'professional',
    tags: ['Snowflake', 'Power BI', 'SAS', 'Qlik Sense'],
    responsibilities: [
      'Partnered with Fortune 500 pharmaceutical clients across 4 commercial business units to deliver enterprise reporting solutions',
      'Designed and optimized advanced SQL solutions using Snowflake and SAS on datasets of 20–50M+ records',
      'Modernized legacy Qlik Sense dashboards in Power BI, reducing refresh time by ~2 hours and process complexity by 78%',
      'Led end-to-end delivery of 2 enterprise reporting solutions; supported UAT for 60+ business users; Rising Star Award within 6 months',
    ],
    metrics: [
      { label: 'Complexity Cut', value: '78%' },
      { label: 'Records', value: '20–50M' },
    ],
    icon: 'verified',
  },
  {
    id: '5',
    year: '2021',
    title: 'Developer Intern',
    company: 'Medicento & Yoursbiz',
    period: '2021',
    type: 'professional',
    tags: ['HTML', 'CSS', 'JavaScript', 'UI/UX'],
    responsibilities: [
      'Developed responsive websites using HTML, CSS, and JavaScript and documented SOPs for future maintenance',
      'Collaborated with UI/UX designers to create visually engaging wireframes',
    ],
    icon: 'code',
  },
  {
    id: '6',
    year: '2018',
    title: 'BTech in Computer Science',
    company: 'University of Petroleum and Energy Studies (UPES)',
    period: '2018 – 2022',
    type: 'academic',
    tags: ['Algorithms', 'Data Structures', 'System Design'],
    responsibilities: [
      'Completed undergraduate studies in Computer Science with focus on data structures, algorithms, and software engineering',
      'Published research: “Load Balancing and Scheduling: Examination in view of COVID-19 Protocols” (ICICITES 2021)',
    ],
    icon: 'school',
  },
];

const TimelineView: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="max-w-4xl">
        <span className="text-primary text-xs font-semibold tracking-widest uppercase mb-2 block">Professional Journey</span>
        <h3 className="text-4xl md:text-5xl font-semibold text-on-surface mb-6 tracking-tight">Career Trajectory</h3>
        <p className="text-lg text-on-surface-variant max-w-2xl leading-relaxed">
          A visual narrative of growth across consulting and analytics — from foundational engineering through enterprise BI
          delivery to AI-powered spend analytics.
        </p>
      </div>

      <section className="relative pb-8">
        <div className="absolute left-1/2 -translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-outline-variant via-primary-container to-outline-variant opacity-40 hidden md:block" />

        <div className="space-y-16 relative">
          {TIMELINE.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div key={item.id} className="flex flex-col md:flex-row items-center gap-8 md:gap-0 group">
                {/* Left column */}
                <div className={`md:w-1/2 ${isLeft ? 'md:pr-16 md:text-right order-1' : 'md:pr-16 order-3 md:order-1'}`}>
                  {isLeft ? (
                    <div className="bg-white p-6 rounded-2xl shadow-glass border border-surface-container transition-all group-hover:translate-x-1">
                      <span className="text-tertiary font-bold text-sm mb-2 block">{item.period}</span>
                      <h4 className="text-xl font-medium text-primary mb-1">{item.title}</h4>
                      <p className="text-sm text-on-secondary-container mb-4 font-semibold uppercase tracking-tight">
                        {item.company}
                      </p>
                      <ul className="text-on-surface-variant mb-6 text-sm leading-relaxed space-y-2 text-left">
                        {item.responsibilities.map((r) => (
                          <li key={r} className="flex gap-2 md:justify-end">
                            <span className="md:order-2">{r}</span>
                            <span className="text-primary mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0 md:order-1" />
                          </li>
                        ))}
                      </ul>
                      <div className={`flex flex-wrap gap-2 ${isLeft ? 'md:justify-end' : ''}`}>
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="bg-secondary-container/40 text-on-secondary-container px-3 py-1 rounded-full text-xs font-semibold"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : item.metrics ? (
                    <div className="grid grid-cols-2 gap-4 md:justify-items-end">
                      {item.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="bg-surface-container-low p-4 rounded-xl border border-outline-variant/20 w-full"
                        >
                          <span className="text-primary font-bold text-2xl block">{m.value}</span>
                          <span className="text-[10px] text-on-surface-variant uppercase font-bold">{m.label}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="hidden md:flex gap-4 justify-end">
                      <div className="w-16 h-16 rounded-2xl bg-tertiary-container/20 flex items-center justify-center">
                        <span className="material-symbols-outlined text-tertiary text-3xl">{item.icon}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Center node */}
                <div
                  className={`z-10 w-12 h-12 rounded-full flex items-center justify-center ring-8 ring-background order-2 text-white ${
                    item.type === 'academic' ? 'bg-tertiary' : 'bg-primary'
                  }`}
                >
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>

                {/* Right column */}
                <div className={`md:w-1/2 ${isLeft ? 'md:pl-16 order-3' : 'md:pl-16 order-1 md:order-3'}`}>
                  {!isLeft ? (
                    <div className="bg-white p-6 rounded-2xl shadow-glass border border-surface-container transition-all group-hover:-translate-x-1">
                      <span className="text-tertiary font-bold text-sm mb-2 block">{item.period}</span>
                      <h4 className="text-xl font-medium text-primary mb-1">{item.title}</h4>
                      <p className="text-sm text-on-secondary-container mb-4 font-semibold uppercase tracking-tight">
                        {item.company}
                      </p>
                      <ul className="text-on-surface-variant mb-6 text-sm leading-relaxed space-y-2">
                        {item.responsibilities.map((r) => (
                          <li key={r} className="flex gap-2">
                            <span className="text-primary mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="bg-primary-container/20 text-on-primary-container px-3 py-1 rounded-full text-xs font-semibold"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : item.metrics ? (
                    <div className="grid grid-cols-2 gap-4">
                      {item.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="bg-surface-container-low p-4 rounded-xl border border-outline-variant/20"
                        >
                          <span className="text-primary font-bold text-2xl block">{m.value}</span>
                          <span className="text-[10px] text-on-surface-variant uppercase font-bold">{m.label}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="hidden md:block bg-surface-container-high/30 h-28 rounded-3xl border border-dashed border-outline-variant" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Industry focus bento */}
      <section className="bg-surface-container-low rounded-3xl p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-2 bg-white p-8 rounded-3xl shadow-glass">
            <h4 className="text-xl font-medium text-primary mb-3">Core Competencies</h4>
            <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">
              A blend of technical expertise and strategic consulting, refined through high-stakes client engagements.
            </p>
            <div className="space-y-4">
              {[
                { label: 'Business Intelligence', width: '95%' },
                { label: 'SQL & Data Modeling', width: '90%' },
                { label: 'Predictive Modeling', width: '85%' },
              ].map((row) => (
                <div key={row.label} className="flex justify-between items-center gap-4">
                  <span className="text-sm font-bold text-on-surface whitespace-nowrap">{row.label}</span>
                  <div className="w-32 h-2 bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="bg-primary h-full" style={{ width: row.width }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="md:col-span-2 bg-primary-container p-8 rounded-3xl flex flex-col justify-center">
            <h4 className="text-on-primary-container text-xl font-medium mb-4">Industry Focus</h4>
            <div className="flex flex-wrap gap-3">
              {['Pharmaceuticals', 'CPG / Procurement', 'Consulting', 'Financial Analytics'].map((tag) => (
                <span key={tag} className="bg-white/20 text-on-primary-container px-4 py-2 rounded-xl text-sm font-bold">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-secondary-container p-6 rounded-3xl flex flex-col items-center justify-center text-center">
            <span className="material-symbols-outlined text-4xl text-on-secondary-container mb-2">groups</span>
            <span className="text-on-secondary-container font-bold text-sm">Stakeholder Partnership</span>
          </div>
          <div className="bg-tertiary-container p-6 rounded-3xl flex flex-col items-center justify-center text-center">
            <span className="material-symbols-outlined text-4xl text-on-tertiary-container mb-2">diversity_3</span>
            <span className="text-on-tertiary-container font-bold text-sm">Team Mentorship</span>
          </div>
          <div className="md:col-span-2 bg-white p-6 rounded-3xl shadow-glass flex items-center gap-4">
            <span className="material-symbols-outlined text-4xl text-primary">emoji_events</span>
            <div>
              <p className="font-bold text-on-surface">Rising Star Award</p>
              <p className="text-sm text-on-surface-variant">ZS Associates — within 6 months of joining</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TimelineView;
