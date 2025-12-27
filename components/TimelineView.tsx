
import React from 'react';
import { 
  History, 
  GraduationCap, 
  Briefcase, 
  Database,
  Code2
} from 'lucide-react';
import { TimelineItem } from '../types';

interface ExtendedTimelineItem extends TimelineItem {
  year: string;
  type: 'academic' | 'professional';
}

const TIMELINE: ExtendedTimelineItem[] = [
  {
    id: '1',
    year: '2025',
    title: 'MS in Business Analytics and Information Management',
    company: 'Purdue University',
    period: 'Current',
    type: 'academic',
    tags: ['Machine Learning', 'Optimization', 'Python'],
    responsibilities: [
      'Completed 12+ advanced ML projects',
      'Achieved 0.90+ AUC on multiple models',
      'Specialized in ensemble methods and optimization'
    ],
    icon: <GraduationCap className="text-amber-500" size={16} />
  },
  {
    id: '2',
    year: '2024',
    title: 'Senior Technology Analyst',
    company: 'DefineRight',
    period: 'September 2024 - July 2025',
    type: 'professional',
    tags: ['Power BI', 'Azure DevOps', 'Data Pipeline', 'TM1'],
    responsibilities: [
      'Led 5 reporting projects supporting FP&A team of US-based pharmaceutical organization, working with senior leadership translating business problems into actionable solutions',
      'Managed critical Power BI report with 400+ users ensuring integration with TM1; reduced ~30% redundancy through streamlining visuals, correcting conflicting business logic, and optimizing datasets by 40%',
      'Designed unified data processing pipeline consolidating inventory and financial data from 3+ sources consumed by 4 cross-functional teams for multiple excel reports, enhancing data quality and consistency',
      'Conducted business requirement analysis for Omnichannel & Strategy team, coordinating deliverables across 5+ client teams utilizing Azure DevOps for tracking progress and streamline collaboration'
    ],
    icon: <Briefcase className="text-blue-500" size={16} />
  },
  {
    id: '3',
    year: '2022',
    title: 'Business Technology Solutions Associate',
    company: 'ZS Associates',
    period: 'May 2022 - August 2024',
    type: 'professional',
    tags: ['ETL', 'Power BI', 'SAS', 'Snowflake', 'QlikSense'],
    responsibilities: [
      'Worked closely with US-based pharmaceutical clients to understand and align on business requirements, identifying key performance indicators, project enhancements, and other operational activities',
      'Leveraged ETL process with QlikSense and Power BI for end-to-end development, data modelling, and reporting for managing datasets ranging over 20 to 50 million records',
      'Spearheaded transformation of multiple legacy QlikSense dashboards to Power BI for 4 business units, reducing complexity by 78% and improving accessibility for stakeholders',
      'Designed and developed complex views in SAS and Snowflake integrating multiple datasets, streamlining reporting process across 4+ business units and multiple client teams'
    ],
    icon: <Database className="text-emerald-500" size={16} />
  },
  {
    id: '4',
    year: '2021',
    title: 'Developer Intern',
    company: 'Medicento & Yoursbiz',
    period: '2021',
    type: 'professional',
    tags: ['HTML', 'CSS', 'JavaScript', 'UI/UX'],
    responsibilities: [
      'Developed responsive website using HTML, CSS and JavaScript and documented SOPs for future maintenance',
      'Collaborated with UI/UX designers to create visually engaging wireframes'
    ],
    icon: <Code2 className="text-purple-500" size={16} />
  },
  {
    id: '5',
    year: '2018',
    title: 'Computer Science',
    company: 'University of Petroleum and Energy Studies (UPES)',
    period: '2018 - 2022',
    type: 'academic',
    tags: ['Algorithms', 'Data Structures', 'System Design'],
    responsibilities: [
      'Completed undergraduate studies in Computer Science with focus on data structures, algorithms, and software engineering',
      'Developed foundational skills in programming, database management, and system design'
    ],
    icon: <GraduationCap className="text-slate-400" size={16} />
  }
];

const TimelineView: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-500 pb-20">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold mb-1 text-white">Career Trajectory</h2>
          <p className="text-slate-500 text-sm font-medium">Chronological log of professional experience and academic foundations.</p>
        </div>
      </header>

      <div className="relative pl-4 md:pl-12 space-y-10 before:absolute before:left-[19px] md:left-[51px] before:top-4 before:bottom-4 before:w-[2px] before:bg-gradient-to-b before:from-blue-600 before:via-slate-800 before:to-slate-900">
        {TIMELINE.map((item) => (
          <div key={item.id} className="relative group">
            {/* Year Badge */}
            <div className="absolute -left-4 md:-left-12 mb-4 top-0 -translate-y-6 flex items-center gap-3">
               <span className="bg-slate-900 border border-slate-800 px-2 py-0.5 rounded-lg text-[10px] font-black text-blue-500 tracking-widest shadow-xl">
                 {item.year}
               </span>
            </div>

            {/* Timeline Dot/Icon */}
            <div className={`absolute left-0 md:left-0 -ml-[10px] md:-ml-[10px] top-1 w-5 h-5 rounded-full border-4 ${item.type === 'academic' ? 'border-amber-500/30 bg-amber-950' : 'border-blue-500/30 bg-blue-950'} z-10 group-hover:scale-110 transition-transform flex items-center justify-center`}>
              <div className={`w-1.5 h-1.5 rounded-full ${item.type === 'academic' ? 'bg-amber-500' : 'bg-blue-500'}`}></div>
            </div>
            
            <div className="ml-8 bg-[#111827]/40 backdrop-blur-md border border-slate-800/60 rounded-[24px] p-5 md:p-6 hover:border-blue-500/30 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                {item.icon}
              </div>

              <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-3">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <h4 className="text-lg md:text-xl font-bold text-white group-hover:text-blue-400 transition-colors leading-tight">{item.title}</h4>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                    <span>{item.company}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-800"></span>
                    <span className="text-blue-500/80">{item.period}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[9px] font-black text-slate-600 uppercase tracking-[0.2em] mb-2">
                  <History size={10} />
                  Impact & Responsibilities
                </div>
                <ul className="space-y-2">
                  {item.responsibilities.map((resp, i) => (
                    <li key={i} className="flex gap-3 text-xs md:text-[13px] text-slate-400 leading-relaxed group/item">
                      <div className="mt-1.5 w-1 h-1 rounded-full bg-blue-600/40 flex-shrink-0 group-hover/item:bg-blue-500 transition-colors" />
                      <span className="group-hover/item:text-slate-300 transition-colors">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Decorative accent */}
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-blue-600/5 blur-[40px] pointer-events-none"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineView;
