
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
  const size = 450;
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
    <div className="relative w-full aspect-square max-w-[450px] mx-auto flex items-center justify-center p-2">
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
              r="4"
              fill="#f472b6"
              className="drop-shadow-[0_0_8px_rgba(244,114,182,0.8)]"
            />
            {/* Label */}
            <text
              x={p.labelX}
              y={p.labelY}
              textAnchor="middle"
              className="fill-slate-400 font-bold text-[10px] select-none"
            >
              {skills[i].name}
            </text>
            {/* Value % */}
            <text
              x={p.valueX}
              y={p.valueY}
              textAnchor="middle"
              className="fill-white font-black text-[8px] select-none"
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
    <div className="max-w-7xl mx-auto space-y-6 animate-in fade-in duration-500 pb-10">
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

      {/* Main Content: Radar Chart and Skills Side by Side */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Radar Chart Section - 60% */}
        <div className="lg:col-span-3 bg-[#111827]/30 backdrop-blur-md border border-slate-800/60 rounded-[40px] p-6 flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <Activity size={18} className="text-pink-400" />
            <h3 className="text-xl font-bold text-white">Skills Radar Chart</h3>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <RadarChart skills={SKILLS} />
          </div>
        </div>

        {/* Skills Section - 40% */}
        <div className="lg:col-span-2 flex flex-col">
          {/* Tabs Navigation - Aligned with heading */}
          <div className="flex items-center gap-3 mb-4">
            <Activity size={18} className="text-blue-500" />
            <h3 className="text-xl font-bold text-white">Technical Skills</h3>
          </div>
          <div className="flex flex-wrap items-center gap-2 border-b border-slate-800 pb-4 mb-6">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-[0.15em] transition-all ${
                  activeTab === tab 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' 
                  : 'text-slate-500 hover:text-slate-300 hover:bg-slate-800/40'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Skills Grid - Compact */}
          <div className="grid grid-cols-1 gap-4 max-h-[600px] overflow-y-auto pr-2">
            {filteredSkills.map((skill) => (
              <div key={skill.name} className="bg-[#111827]/40 backdrop-blur-md border border-slate-800/60 rounded-[20px] p-4 flex gap-4 group hover:border-blue-500/30 transition-all duration-300">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl text-blue-500 group-hover:scale-110 transition-transform flex-shrink-0">
                        {skill.name === 'SQL' && <Database size={16} />}
                        {skill.name === 'Python' && <Terminal size={16} />}
                        {skill.name === 'Power BI' && <BarChart3 size={16} />}
                        {skill.name === 'Excel' && <Layout size={16} />}
                        {skill.name === 'Statistics' && <LineChart size={16} />}
                        {['XGBoost', 'LightGBM', 'CatBoost'].includes(skill.name) && <Cpu size={16} />}
                        {skill.name === 'Jira' && <Trello size={16} />}
                        {skill.name === 'Azure DevOps' && <Cloud size={16} />}
                      </div>
                      <h4 className="text-sm font-bold text-white">{skill.name}</h4>
                    </div>
                    <div className="text-right flex-shrink-0 ml-2">
                      <span className="text-lg font-black text-white group-hover:text-blue-400 transition-colors">
                        {skill.level}%
                      </span>
                      <p className="text-[8px] text-slate-500 font-bold uppercase tracking-widest">{skill.label}</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed mb-3 line-clamp-2">
                    {skill.sub}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1 flex-wrap">
                      {skill.category.map(cat => (
                        <span key={cat} className="px-1.5 py-0.5 bg-slate-900 border border-slate-800 rounded text-[6px] font-bold text-slate-500 uppercase tracking-tighter">
                          {cat}
                        </span>
                      ))}
                    </div>
                    <CheckCircle2 size={14} className="text-emerald-500/40 group-hover:text-emerald-500 transition-colors flex-shrink-0" />
                  </div>
                </div>
              </div>
            ))}
            
            {filteredSkills.length === 0 && (
              <div className="py-10 flex flex-col items-center justify-center text-slate-500 space-y-4">
                <Zap size={32} className="opacity-20" />
                <p className="font-medium text-sm">No skills found matching your current filter.</p>
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
      </div>
    </div>
  );
};

export default SkillsView;
