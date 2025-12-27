
import React, { useRef } from 'react';
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
  Camera,
  Github
} from 'lucide-react';
import { EducationItem, ActivityItem } from '../types';

interface OverviewProps {
  profileImage: string;
  onImageChange: (newImage: string) => void;
}

const EDUCATION: EducationItem[] = [
  { 
    degree: 'Master of Science in Business Analytics and Information Management', 
    institution: 'Purdue University', 
    period: '2025 - 2026' 
  },
  { 
    degree: 'Bachelor of Technology in Computer Science', 
    institution: 'UPES', 
    period: '2018 - 2022' 
  },
];

const ACTIVITIES: ActivityItem[] = [
  { 
    title: 'Completed creating this portfolio website', 
    time: '1 DAY AGO', 
    platform: 'PORTFOLIO', 
    icon: <Code2 size={14} />, 
    iconBg: 'bg-blue-600/10 text-blue-500' 
  },
  { 
    title: 'One Semester completed of graduate degree', 
    time: '1 WEEK AGO', 
    platform: 'PURDUE', 
    icon: <GraduationCap size={14} />, 
    iconBg: 'bg-amber-600/10 text-amber-500' 
  },
  { 
    title: 'Successfully completed a trip to New York', 
    time: 'DURING THANKSGIVING BREAK', 
    platform: 'TRAVEL', 
    icon: <MapPin size={14} />, 
    iconBg: 'bg-purple-600/10 text-purple-500' 
  },
];

const Overview: React.FC<OverviewProps> = ({ profileImage, onImageChange }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onImageChange(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-[1200px] mx-auto space-y-6 animate-in fade-in duration-500 pb-10">
      {/* Analyst Profile Header */}
      <section className="bg-[#111827]/40 backdrop-blur-md border border-slate-800/60 rounded-[32px] p-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 blur-[100px] -mr-32 -mt-32"></div>
        
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 relative z-10">
          <div className="relative group cursor-pointer" onClick={handleImageClick}>
            <input 
              type="file" 
              ref={fileInputRef} 
              className="hidden" 
              accept="image/*" 
              onChange={handleFileChange} 
            />
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl overflow-hidden border border-slate-700 shadow-2xl relative">
              <img 
                src={profileImage} 
                alt="Kashika Chopra" 
                className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Camera className="text-white" size={24} />
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 bg-blue-600 p-1.5 rounded-xl shadow-lg border-2 border-[#111827]">
              <ShieldCheck size={16} className="text-white" />
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <div className="flex flex-col md:flex-row md:items-center gap-3 mb-1">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">Kashika Chopra</h2>
              <span className="w-fit mx-auto md:mx-0 px-2.5 py-0.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold rounded-full uppercase tracking-widest">Active Student</span>
            </div>
            
            <p className="text-blue-500 text-sm md:text-base font-semibold mb-2">
              MSBAIM student @ Purdue University · 3+ Years of Experience
            </p>

            <p className="text-slate-400 text-sm font-medium mb-4 max-w-2xl leading-relaxed">
              Synthesizing data into strategy. Committed to bridging the gap between raw datasets and executive decisions.
            </p>
            <p className="text-slate-500 text-xs font-semibold mb-5">
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
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* About Me */}
        <div className="lg:col-span-8">
          <section className="h-full bg-[#111827]/40 backdrop-blur-md border border-slate-800/60 rounded-[32px] p-6 md:p-8 relative overflow-hidden">
            <div className="flex items-start gap-4 mb-8">
              <div className="p-3 bg-blue-600/10 text-blue-500 rounded-2xl">
                <User size={24} />
              </div>
              <div>
                <h4 className="font-bold text-2xl text-white leading-none mb-1">About Me</h4>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em]">MISSION & BACKGROUND</p>
              </div>
            </div>
            <div className="space-y-6 text-slate-300 leading-relaxed text-sm md:text-base">
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
          <section className="h-full bg-[#111827]/40 backdrop-blur-md border border-slate-800/60 rounded-[32px] p-6">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h4 className="font-bold text-xl text-white mb-1">Certifications</h4>
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
                   bg: 'bg-blue-400/10' 
                 },
                 { 
                   title: 'AWS CLF-C02', 
                   sub: 'Cloud Practitioner', 
                   color: 'text-amber-400', 
                   bg: 'bg-amber-400/10' 
                 }
               ].map((cert, i) => (
                 <div key={i} className="flex items-center gap-4 p-4 bg-slate-900/30 rounded-2xl border border-slate-800/50 hover:border-slate-700 transition-all cursor-default group">
                    <div className={`w-10 h-10 rounded-xl ${cert.bg} flex items-center justify-center ${cert.color} flex-shrink-0 shadow-inner`}>
                      <CheckCircle2 size={18} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-bold text-white truncate">{cert.title}</p>
                      <p className="text-[11px] text-slate-500 font-medium truncate">{cert.sub}</p>
                    </div>
                 </div>
               ))}
            </div>
          </section>
        </div>
      </div>

      {/* Row 2: Education & Milestones */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Education Timeline */}
        <div className="lg:col-span-8">
          <section className="h-full bg-[#111827]/40 backdrop-blur-md border border-slate-800/60 rounded-[32px] p-6 md:p-8">
            <div className="flex items-start gap-4 mb-10">
              <div className="p-3 bg-amber-600/10 text-amber-500 rounded-2xl">
                < GraduationCap size={24} />
              </div>
              <div>
                <h4 className="font-bold text-2xl text-white leading-none mb-1">Education</h4>
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
                <h4 className="font-bold text-xl text-white mb-1">Milestones</h4>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em]">LATEST UPDATES</p>
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
