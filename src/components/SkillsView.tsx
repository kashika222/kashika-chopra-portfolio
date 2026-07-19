import React, { useMemo, useState } from 'react';
import { ViewType } from '../types';

interface Skill {
  name: string;
  level: number;
  label: 'Expert' | 'Advanced' | 'Proficient';
  sub: string;
  category: ('Programming' | 'Analytics' | 'ML' | 'Tools')[];
}

interface SkillsViewProps {
  onNavigate: (view: ViewType) => void;
}

const SKILLS: Skill[] = [
  { name: 'SQL', level: 90, label: 'Advanced', sub: 'Complex queries, optimization, data modeling', category: ['Programming', 'Analytics'] },
  { name: 'Python', level: 88, label: 'Advanced', sub: 'Pandas, NumPy, Scikit-learn, data pipelines', category: ['Programming', 'ML'] },
  { name: 'Power BI', level: 95, label: 'Expert', sub: 'DAX, semantic models, dashboards, governance', category: ['Analytics', 'Tools'] },
  { name: 'Statistics', level: 85, label: 'Advanced', sub: 'Hypothesis testing, regression, probability', category: ['Analytics', 'ML'] },
  { name: 'XGBoost', level: 87, label: 'Advanced', sub: 'Hyperparameter tuning, feature importance', category: ['ML'] },
  { name: 'LightGBM', level: 85, label: 'Advanced', sub: 'Gradient boosting, categorical features', category: ['ML'] },
  { name: 'CatBoost', level: 90, label: 'Advanced', sub: 'Categorical handling, probability calibration', category: ['ML'] },
  { name: 'Excel', level: 92, label: 'Expert', sub: 'Advanced formulas, pivot tables, automation', category: ['Analytics', 'Tools'] },
  { name: 'Jira', level: 85, label: 'Advanced', sub: 'Agile project management, sprint planning', category: ['Tools'] },
  { name: 'Azure DevOps', level: 82, label: 'Advanced', sub: 'Boards, work items, delivery coordination', category: ['Tools'] },
];

const TABS = ['All', 'Programming', 'Analytics', 'ML', 'Tools'] as const;

const ML_BARS = [
  { name: 'Pandas & NumPy', level: 90, color: 'bg-primary' },
  { name: 'Scikit-Learn', level: 88, color: 'bg-primary-container' },
  { name: 'CatBoost', level: 90, color: 'bg-tertiary-container' },
  { name: 'XGBoost & LightGBM', level: 86, color: 'bg-primary-fixed-dim' },
  { name: 'SQL / Snowflake', level: 90, color: 'bg-outline' },
];

const RadarChart: React.FC<{ skills: Skill[] }> = ({ skills }) => {
  const size = 320;
  const center = size / 2;
  const radius = size / 2.6;
  const n = skills.length;

  const points = skills.map((skill, i) => {
    const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
    const r = (radius * skill.level) / 100;
    return {
      x: center + r * Math.cos(angle),
      y: center + r * Math.sin(angle),
      labelX: center + (radius + 28) * Math.cos(angle),
      labelY: center + (radius + 28) * Math.sin(angle),
    };
  });

  const path = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ') + ' Z';

  return (
    <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-full max-w-[320px] drop-shadow-sm">
      {[0.25, 0.5, 0.75, 1].map((scale) => (
        <circle key={scale} cx={center} cy={center} r={radius * scale} className="fill-none stroke-[#EAE3D9]" strokeWidth="1" />
      ))}
      {skills.map((_, i) => {
        const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
        return (
          <line
            key={i}
            x1={center}
            y1={center}
            x2={center + radius * Math.cos(angle)}
            y2={center + radius * Math.sin(angle)}
            className="stroke-[#EAE3D9]"
            strokeWidth="1"
          />
        );
      })}
      <path d={path} fill="rgba(177, 151, 164, 0.2)" stroke="#B197A4" strokeWidth="2" className="transition-all duration-700" />
      {points.map((p, i) => (
        <g key={skills[i].name}>
          <circle cx={p.x} cy={p.y} r="3.5" fill="#6e5864" />
          <text x={p.labelX} y={p.labelY} textAnchor="middle" className="fill-primary text-[9px] font-semibold">
            {skills[i].name}
          </text>
        </g>
      ))}
    </svg>
  );
};

const SkillsView: React.FC<SkillsViewProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<(typeof TABS)[number]>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSkills = useMemo(() => {
    return SKILLS.filter((skill) => {
      const matchesTab = activeTab === 'All' || skill.category.includes(activeTab as Skill['category'][number]);
      const matchesSearch =
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.sub.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  const radarSkills = SKILLS.filter((s) =>
    ['SQL', 'Python', 'Power BI', 'Statistics', 'CatBoost', 'Excel'].includes(s.name)
  );

  return (
    <div className="space-y-8">
      <section className="max-w-4xl">
        <h3 className="text-4xl md:text-5xl font-semibold text-on-primary-container mb-4 tracking-tight">
          The Proficiency Matrix
        </h3>
        <p className="text-lg text-on-surface-variant leading-relaxed">
          A comprehensive visual breakdown of my technical stack, analytical competencies, and tool proficiency across the
          analytics lifecycle.
        </p>
      </section>

      <div className="relative group max-w-sm">
        <span className="absolute inset-y-0 left-3 flex items-center text-outline">
          <span className="material-symbols-outlined text-[20px]">search</span>
        </span>
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="bg-surface-container-low border-none rounded-full py-2.5 pl-10 pr-4 text-sm w-full focus:ring-2 focus:ring-primary/20 outline-none transition-all"
          placeholder="Search skills..."
          type="text"
        />
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-5 glass-card p-8 flex flex-col items-center">
          <div className="w-full mb-6">
            <h4 className="text-2xl font-medium text-primary">Core Competencies</h4>
            <p className="text-sm text-outline">Balance of analytical and strategic skills</p>
          </div>
          <div className="relative w-full aspect-square max-w-[320px] flex items-center justify-center">
            <RadarChart skills={radarSkills} />
          </div>
        </div>

        <div className="col-span-12 lg:col-span-7 glass-card p-8 flex flex-col">
          <h4 className="text-2xl font-medium text-primary mb-2">Machine Learning Ecosystem</h4>
          <p className="text-sm text-outline mb-8">Framework proficiency and real-world application experience</p>
          <div className="space-y-7 flex-1">
            {ML_BARS.map((bar) => (
              <div key={bar.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-on-surface">{bar.name}</span>
                  <span className="text-xs text-primary font-bold">{bar.level}%</span>
                </div>
                <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                  <div
                    className={`h-full ${bar.color} rounded-full transition-all duration-[1500ms] ease-out`}
                    style={{ width: `${bar.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-12 glass-card p-8">
          <div className="flex flex-wrap items-center gap-2 border-b border-outline-variant/30 pb-4 mb-6">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                  activeTab === tab
                    ? 'bg-primary text-white'
                    : 'text-on-surface-variant hover:bg-surface-container-high'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredSkills.map((skill) => (
              <div
                key={skill.name}
                className="p-4 bg-surface-container-low rounded-xl border border-outline-variant/20 hover:bg-surface-container-high transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <h5 className="font-semibold text-on-surface">{skill.name}</h5>
                  <span className="text-sm font-bold text-primary">{skill.level}%</span>
                </div>
                <p className="text-xs text-on-surface-variant mb-3">{skill.sub}</p>
                <div className="h-1.5 w-full bg-surface-container rounded-full overflow-hidden">
                  <div className="h-full bg-primary-container rounded-full" style={{ width: `${skill.level}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-12 glass-card p-8">
          <h4 className="text-2xl font-medium text-primary mb-6">Data Infrastructure & BI Tools</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Storage & SQL',
                icon: 'database',
                items: ['SQL', 'Snowflake', 'BigQuery', 'PostgreSQL', 'MongoDB', 'SAS'],
                chip: 'bg-secondary-container/20 text-on-secondary-container border-secondary-container/50',
              },
              {
                title: 'Business Intelligence',
                icon: 'query_stats',
                items: ['Power BI', 'Qlik Sense', 'Tableau', 'Excel', 'DAX'],
                chip: 'bg-primary-container/10 text-primary border-primary-container/30',
              },
              {
                title: 'Workflow & Delivery',
                icon: 'account_tree',
                items: ['Azure DevOps', 'Jira', 'SharePoint', 'Git', 'Agile'],
                chip: 'bg-tertiary-fixed/20 text-on-tertiary-container border-tertiary-fixed/40',
              },
            ].map((group) => (
              <div key={group.title}>
                <div className="flex items-center gap-2 mb-4">
                  <span className="material-symbols-outlined text-primary">{group.icon}</span>
                  <h5 className="text-sm font-medium text-on-surface uppercase tracking-wider">{group.title}</h5>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className={`px-4 py-2 rounded-full text-xs border ${group.chip}`}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 bg-primary text-on-primary rounded-xl p-8 relative overflow-hidden group">
          <div className="relative z-10">
            <h4 className="text-2xl font-medium mb-2">Technical Mastery</h4>
            <p className="text-sm opacity-80 mb-6">
              Explore how these skills converge in predictive modeling and enterprise BI projects.
            </p>
            <button
              onClick={() => onNavigate('projects')}
              className="flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-full text-sm font-medium hover:shadow-lg transition-all active:scale-95"
            >
              View Project Catalog
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>
          <div className="absolute -right-8 -bottom-8 w-48 h-48 bg-primary-container/20 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700" />
        </div>

        <div className="col-span-12 lg:col-span-8 glass-card p-8 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h4 className="text-2xl font-medium text-primary mb-2">Verified Expertise</h4>
            <p className="text-sm text-outline mb-6">Industry certifications validating cloud and AI fundamentals.</p>
            <div className="flex flex-wrap gap-4">
              {['AWS Cloud Practitioner (CLF-C02)', 'Azure AI Fundamentals (AI-900)'].map((cert) => (
                <div
                  key={cert}
                  className="flex items-center gap-3 bg-surface-container-low p-3 rounded-lg border border-outline-variant/20"
                >
                  <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[18px]">verified</span>
                  </div>
                  <span className="text-xs font-bold text-on-surface">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsView;
