
import React from 'react';
import { 
  User, 
  GraduationCap, 
  History, 
  Mail,
  Linkedin,
  Code2,
  CheckCircle2,
  ShieldCheck,
  MapPin,
  Bookmark,
  Github,
  ExternalLink
} from 'lucide-react';
import { EducationItem, ActivityItem } from '../types';

interface OverviewProps {
  profileImage: string;
}

const EDUCATION: EducationItem[] = [
  { 
    degree: 'MS in Business Analytics & Information Management', 
    institution: 'Purdue University', 
    period: 'Aug 2025-Aug 2026' 
  },
  { 
    degree: 'BTech in Computer Science', 
    institution: 'UPES', 
    period: 'July 2018-May 2022' 
  },
];

const ACTIVITIES: ActivityItem[] = [
  { 
    title: 'Halfway through grad school… still standing', 
    time: 'ONGOING', 
    platform: 'ACADEMIC', 
    icon: <GraduationCap size={14} />, 
    iconBg: 'bg-amber-600/10 text-amber-500' 
  },
  { 
    title: 'Survived a Midwest winter (barely)', 
    time: 'WINTER 2025', 
    platform: 'SURVIVAL', 
    icon: <MapPin size={14} />, 
    iconBg: 'bg-purple-600/10 text-purple-500' 
  },
  { 
    title: 'Made the perfect cup of coffee ☕ (life peaked)', 
    time: 'DAILY ACHIEVEMENT', 
    platform: 'LIFE SKILLS', 
    icon: <Code2 size={14} />, 
    iconBg: 'bg-blue-600/10 text-blue-500' 
  },
];

const Overview: React.FC<OverviewProps> = ({ profileImage }) => {

  return (
    <div className="max-w-[1200px] mx-auto space-y-3 animate-in fade-in duration-500 pb-4">
      {/* Analyst Profile Header */}
      <section className="bg-[#111827]/40 backdrop-blur-md border border-slate-800/60 rounded-[32px] p-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 blur-[100px] -mr-32 -mt-32"></div>
        
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 relative z-10">
          <div className="relative">
            <div className="w-20 h-20 md:w-28 md:h-28 rounded-3xl overflow-hidden border border-slate-700 shadow-2xl relative">
              <img 
                src={profileImage} 
                alt="Kashika Chopra" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 bg-blue-600 p-1.5 rounded-xl shadow-lg border-2 border-[#111827]">
              <ShieldCheck size={16} className="text-white" />
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <div className="flex flex-col md:flex-row md:items-center gap-3 mb-1">
              <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white">Kashika Chopra</h2>
              <span className="w-fit mx-auto md:mx-0 px-2.5 py-0.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold rounded-full uppercase tracking-widest">Active Student</span>
            </div>
            
            <p className="text-blue-500 text-xs md:text-sm font-semibold mb-2">
              MSBAIM student @ Purdue University · 3+ Years of Experience
            </p>

            <p className="text-slate-400 text-xs font-medium mb-3 max-w-2xl leading-relaxed">
              Synthesizing data into strategy. Committed to bridging the gap between raw datasets and executive decisions.
            </p>
            <p className="text-slate-500 text-[10px] font-semibold mb-4">
              <span className="text-blue-500/80">Key Skills:</span> Power BI, QlikSense, SAS, SQL, Python, Jira, Azure DevOps, AWS (Certified Cloud Practitioner)
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
              <a href="mailto:kashika222@gmail.com" className="flex items-center gap-2 px-3.5 py-1.5 bg-slate-900/50 hover:bg-slate-800 border border-slate-800 rounded-xl transition-all text-slate-300 hover:text-white text-[11px] font-bold">
                <Mail size={14} className="text-blue-500" />
                kashika222@gmail.com
              </a>
              <a href="mailto:chopra72@purdue.edu" className="flex items-center gap-2 px-3.5 py-1.5 bg-slate-900/50 hover:bg-slate-800 border border-slate-800 rounded-xl transition-all text-slate-300 hover:text-white text-[11px] font-bold">
                <GraduationCap size={14} className="text-amber-500" />
                chopra72@purdue.edu
              </a>
              <a href="https://www.linkedin.com/in/kashika27/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3.5 py-1.5 bg-slate-900/50 hover:bg-slate-800 border border-slate-800 rounded-xl transition-all text-slate-300 hover:text-white text-[11px] font-bold">
                <Linkedin size={14} className="text-blue-400" />
                LinkedIn
              </a>
              <a href="https://github.com/kashika222" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3.5 py-1.5 bg-slate-900/50 hover:bg-slate-800 border border-slate-800 rounded-xl transition-all text-slate-300 hover:text-white text-[11px] font-bold">
                <Github size={14} className="text-slate-400" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Row 1: About Me & Certifications */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-stretch">
        {/* About Me */}
        <div className="lg:col-span-8">
          <section className="h-full bg-[#111827]/40 backdrop-blur-md border border-slate-800/60 rounded-[32px] p-4 md:p-6 relative overflow-hidden">
            <div className="flex items-start gap-3 mb-6">
              <div className="p-3 bg-blue-600/10 text-blue-500 rounded-2xl">
                <User size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg text-white leading-none mb-1">About Me</h4>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em]">MISSION & BACKGROUND</p>
              </div>
            </div>
            <div className="space-y-4 text-slate-300 leading-relaxed text-sm md:text-base">
              <p>
                Graduate student at Purdue University's <span className="text-slate-100 font-bold italic underline decoration-blue-500/60 underline-offset-4 decoration-2">MS in Business Analytics and Information Management</span> program with experience in consulting, collaborating with cross-functional teams and clients to develop and manage analytical solutions.
              </p>
              <p>
                Passionate about continuous learning, committed to <span className="text-blue-400 font-bold">transforming complex datasets into actionable insights</span> and leveraging analytics tools and methodologies to facilitate informed business decisions.
              </p>
            </div>
          </section>
        </div>

        {/* Certifications Snapshot */}
        <div className="lg:col-span-4">
          <section className="h-full bg-[#111827]/40 backdrop-blur-md border border-slate-800/60 rounded-[32px] p-4">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h4 className="font-bold text-lg text-white mb-1">Certifications</h4>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em]">CREDENTIALS</p>
              </div>
              <Bookmark className="text-blue-500" size={24} />
            </div>
            <div className="space-y-4">
               {[
                 { 
                   title: 'Microsoft AI-900', 
                   sub: 'Azure AI Fundamentals', 
                   color: 'text-blue-400', 
                   bg: 'bg-blue-400/10',
                   link: 'https://www.credly.com/badges/e3f2297b-a58f-49d8-ac9f-d4e4fa0fed9c/public_url'
                 },
                 { 
                   title: 'AWS CLF-C02', 
                   sub: 'Cloud Practitioner', 
                   color: 'text-amber-400', 
                   bg: 'bg-amber-400/10',
                   link: 'https://www.credly.com/badges/20c28916-f11f-4109-a23a-296931ee4ab6/public_url'
                 }
               ].map((cert, i) => (
                 <a key={i} href={cert.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 bg-slate-900/30 rounded-2xl border border-slate-800/50 hover:border-slate-700 transition-all cursor-pointer group">
                    <div className={`w-8 h-8 rounded-xl ${cert.bg} flex items-center justify-center ${cert.color} flex-shrink-0 shadow-inner`}>
                      <CheckCircle2 size={16} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-bold text-white truncate group-hover:text-blue-300 transition-colors">{cert.title}</p>
                      <p className="text-[10px] text-slate-500 font-medium truncate">{cert.sub}</p>
                    </div>
                    <ExternalLink size={14} className="text-slate-400 group-hover:text-blue-400 transition-colors flex-shrink-0" />
                 </a>
               ))}
            </div>
          </section>
        </div>
      </div>

      {/* Row 2: Education & Milestones */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
        {/* Education Timeline */}
        <div className="lg:col-span-8">
          <section className="h-full bg-[#111827]/40 backdrop-blur-md border border-slate-800/60 rounded-[32px] p-4 md:p-6">
            <div className="flex items-start gap-3 mb-6">
              <div className="p-3 bg-amber-600/10 text-amber-500 rounded-2xl">
                < GraduationCap size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg text-white leading-none mb-1">Education</h4>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em]">ACADEMIC FOUNDATIONS</p>
              </div>
            </div>
            <div className="relative space-y-12 before:absolute before:left-[15px] before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-800/60">
              {EDUCATION.map((item, i) => (
                <div key={i} className="relative pl-14 group">
                  <div className="absolute left-0 top-1.5 w-[32px] h-[32px] bg-[#0B0F17] border-4 border-slate-800 rounded-full z-10 group-hover:border-blue-500 transition-colors"></div>
                  <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-2">
                    <h5 className="font-bold text-lg text-white group-hover:text-blue-400 transition-colors leading-tight max-w-lg">
                      {item.degree}
                    </h5>
                    <span className="flex-shrink-0 px-4 py-1.5 bg-slate-900/50 border border-slate-800 rounded-xl text-[10px] font-bold text-slate-400 uppercase tracking-[0.15em]">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-slate-500 font-bold text-sm tracking-wide">{item.institution}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Recent Milestones */}
        <div className="lg:col-span-4">
          <section className="h-full bg-[#111827]/40 backdrop-blur-md border border-slate-800/60 rounded-[32px] p-6">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h4 className="font-bold text-lg text-white mb-1">About Me</h4>
                <p className="text-[9px] text-slate-500 font-bold uppercase tracking-[0.2em]">LATEST UPDATES</p>
              </div>
              <History className="text-slate-400" size={22} />
            </div>
            <div className="space-y-6">
              {ACTIVITIES.map((activity, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ${activity.iconBg} shadow-inner`}>
                    {activity.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h5 className="text-[13px] font-bold text-slate-200 leading-snug mb-1 group-hover:text-white transition-colors">
                      {activity.title}
                    </h5>
                    <div className="flex items-center gap-x-2">
                      <span className="text-[10px] text-slate-500 font-bold uppercase tracking-tight">{activity.time}</span>
                      <span className="w-1 h-1 rounded-full bg-slate-700"></span>
                      <span className="text-[10px] text-blue-500 font-bold uppercase tracking-tight">{activity.platform}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Overview;
