
import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Database,
  Terminal,
  BarChart3,
  Cpu,
  CheckCircle2,
  Activity,
  Zap,
  Layout,
  LineChart,
  Trello,
  Cloud,
  Layers
} from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  label: 'Expert' | 'Advanced' | 'Proficient';
  sub: string;
  category: ('Programming' | 'Analytics' | 'ML' | 'Tools')[];
}

const SKILLS: Skill[] = [
  { 
    name: 'SQL', 
    level: 90, 
    label: 'Advanced', 
    sub: 'Complex queries, optimization, data modeling',
    category: ['Programming', 'Analytics'] 
  },
  { 
    name: 'Python', 
    level: 88, 
    label: 'Advanced', 
    sub: 'Pandas, NumPy, Scikit-learn, data pipelines',
    category: ['Programming', 'ML'] 
  },
  { 
    name: 'Power BI', 
    level: 95, 
    label: 'Expert', 
    sub: 'DAX, data modeling, custom visuals, dashboards',
    category: ['Analytics', 'Tools'] 
  },
  { 
    name: 'Statistics', 
    level: 85, 
    label: 'Advanced', 
    sub: 'Hypothesis testing, regression, probability',
    category: ['Analytics', 'ML'] 
  },
  { 
    name: 'XGBoost', 
    level: 87, 
    label: 'Advanced', 
    sub: 'Hyperparameter tuning, feature importance',
    category: ['ML'] 
  },
  { 
    name: 'LightGBM', 
    level: 85, 
    label: 'Advanced', 
    sub: 'Gradient boosting, categorical features',
    category: ['ML'] 
  },
  { 
    name: 'CatBoost', 
    level: 90, 
    label: 'Advanced', 
    sub: 'Categorical handling, probability calibration',
    category: ['ML'] 
  },
  { 
    name: 'Excel', 
    level: 92, 
    label: 'Expert', 
    sub: 'Advanced formulas, pivot tables, VBA automation',
    category: ['Analytics', 'Tools'] 
  },
  { 
    name: 'Jira', 
    level: 85, 
    label: 'Advanced', 
    sub: 'Agile project management, sprint planning, ticket lifecycle',
    category: ['Tools'] 
  },
  { 
    name: 'Azure DevOps', 
    level: 82, 
    label: 'Advanced', 
    sub: 'Boards, repos, pipelines, and CI/CD workflows',
    category: ['Tools'] 
  }
];

const TABS = ['All', 'Programming', 'Analytics', 'ML', 'Tools'] as const;
type TabType = typeof TABS[number];

const RadarChart: React.FC<{ skills: Skill[] }> = ({ skills }) => {
  const size = 500;
  const centerX = size / 2;
  const centerY = size / 2;
  const radius = size / 2.8;
  const pointsCount = skills.length;

  // Generate radar polygon points
  const polygonPoints = skills.map((skill, i) => {
    const angle = (Math.PI * 2 * i) / pointsCount - Math.PI / 2;
    const r = (radius * skill.level) / 100;
    return {
      x: centerX + r * Math.cos(angle),
      y: centerY + r * Math.cos(angle) === centerX ? centerX : centerX + r * Math.cos(angle), // Simple safety check not really needed here but for clarity
      xVal: centerX + r * Math.cos(angle),
      yVal: centerY + r * Math.sin(angle),
      labelX: centerX + (radius + 40) * Math.cos(angle),
      labelY: centerY + (radius + 40) * Math.sin(angle),
      valueX: centerX + (radius + 20) * Math.cos(angle),
      valueY: centerY + (radius + 20) * Math.sin(angle),
    };
  });

  const pathData = polygonPoints.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.xVal} ${p.yVal}`).join(' ') + ' Z';

  return (
    <div className="relative w-full aspect-square max-w-[500px] mx-auto flex items-center justify-center p-4">
      <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-full overflow-visible">
        {/* Grid Circles */}
        {[0.2, 0.4, 0.6, 0.8, 1].map((scale, i) => (
          <circle
            key={i}
            cx={centerX}
            cy={centerY}
            r={radius * scale}
            fill="none"
            stroke="#1e293b"
            strokeWidth="1"
          />
        ))}
        
        {/* Axis Lines */}
        {skills.map((_, i) => {
          const angle = (Math.PI * 2 * i) / pointsCount - Math.PI / 2;
          return (
            <line
              key={i}
              x1={centerX}
              y1={centerY}
              x2={centerX + radius * Math.cos(angle)}
              y2={centerY + radius * Math.sin(angle)}
              stroke="#1e293b"
              strokeWidth="1"
            />
          );
        })}

        {/* Data Shape */}
        <path
          d={pathData}
          fill="rgba(244, 114, 182, 0.2)"
          stroke="#f472b6"
          strokeWidth="3"
          className="transition-all duration-700"
        />

        {/* Vertices */}
        {polygonPoints.map((p, i) => (
          <g key={i}>
            <circle
              cx={p.xVal}
              cy={p.yVal}
              r="5"
              fill="#f472b6"
              className="drop-shadow-[0_0_8px_rgba(244,114,182,0.8)]"
            />
            {/* Label */}
            <text
              x={p.labelX}
              y={p.labelY}
              textAnchor="middle"
              className="fill-slate-400 font-bold text-[11px] select-none"
            >
              {skills[i].name}
            </text>
            {/* Value % */}
            <text
              x={p.valueX}
              y={p.valueY}
              textAnchor="middle"
              className="fill-white font-black text-[9px] select-none"
            >
              {skills[i].level}%
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
};

const SkillsView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSkills = useMemo(() => {
    return SKILLS.filter(skill => {
      const matchesTab = activeTab === 'All' || skill.category.includes(activeTab as any);
      const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           skill.sub.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  return (
    <div className="max-w-6xl mx-auto space-y-10 animate-in fade-in duration-500 pb-20">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-4xl font-bold mb-2 text-white">Technical Proficiency</h2>
          <p className="text-slate-500 font-medium">Core technical stack and quantitative skill assessment.</p>
        </div>
        <div className="flex gap-3">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-500 transition-colors" size={16} />
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills..." 
              className="bg-[#111827]/40 border border-slate-800 rounded-xl py-2.5 pl-10 pr-4 text-sm w-full md:w-64 focus:outline-none focus:border-blue-500 transition-all text-slate-100"
            />
          </div>
        </div>
      </header>

      {/* Radar Chart Section */}
      <section className="bg-[#111827]/30 backdrop-blur-md border border-slate-800/60 rounded-[40px] p-8 flex flex-col items-center">
        <div className="flex items-center gap-3 mb-4">
          <Activity size={18} className="text-pink-400" />
          <h3 className="text-xl font-bold text-white">Skills Radar Chart</h3>
        </div>
        <div className="w-full max-w-2xl">
          <RadarChart skills={SKILLS} />
        </div>
      </section>

      {/* Tabs Navigation */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-800 pb-4">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-[0.15em] transition-all ${
              activeTab === tab 
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' 
              : 'text-slate-500 hover:text-slate-300 hover:bg-slate-800/40'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkills.map((skill) => (
          <div key={skill.name} className="bg-[#111827]/40 backdrop-blur-md border border-slate-800/60 rounded-[32px] p-8 flex flex-col group hover:border-blue-500/30 transition-all duration-300">
            <div className="flex items-start justify-between mb-6">
              <div className="p-3 bg-slate-900 border border-slate-800 rounded-2xl text-blue-500 group-hover:scale-110 transition-transform">
                {skill.name === 'SQL' && <Database size={20} />}
                {skill.name === 'Python' && <Terminal size={20} />}
                {skill.name === 'Power BI' && <BarChart3 size={20} />}
                {skill.name === 'Excel' && <Layout size={20} />}
                {skill.name === 'Statistics' && <LineChart size={20} />}
                {['XGBoost', 'LightGBM', 'CatBoost'].includes(skill.name) && <Cpu size={20} />}
                {skill.name === 'Jira' && <Trello size={20} />}
                {skill.name === 'Azure DevOps' && <Cloud size={20} />}
              </div>
              <div className="text-right">
                <span className="text-2xl font-black text-white group-hover:text-blue-400 transition-colors">
                  {skill.level}%
                </span>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{skill.label}</p>
              </div>
            </div>
            
            <h4 className="text-lg font-bold text-white mb-2">{skill.name}</h4>
            <p className="text-xs text-slate-400 leading-relaxed mb-6 flex-1">
              {skill.sub}
            </p>

            <div className="pt-4 border-t border-slate-800/40 flex items-center justify-between">
              <div className="flex gap-1.5">
                {skill.category.map(cat => (
                  <span key={cat} className="px-2 py-0.5 bg-slate-900 border border-slate-800 rounded-md text-[8px] font-bold text-slate-500 uppercase tracking-tighter">
                    {cat}
                  </span>
                ))}
              </div>
              <CheckCircle2 size={16} className="text-emerald-500/40 group-hover:text-emerald-500 transition-colors" />
            </div>
          </div>
        ))}
        
        {filteredSkills.length === 0 && (
          <div className="col-span-full py-20 flex flex-col items-center justify-center text-slate-500 space-y-4">
            <Zap size={48} className="opacity-20" />
            <p className="font-medium">No skills found matching your current filter.</p>
            <button 
              onClick={() => {setActiveTab('All'); setSearchQuery('');}}
              className="text-blue-500 text-xs font-bold uppercase tracking-widest hover:underline"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SkillsView;
