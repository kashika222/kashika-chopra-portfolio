
import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  FolderClosed, 
  Zap, 
  History, 
  Download,
  BarChart3
} from 'lucide-react';
import Overview from './components/Dashboard';
import ProjectsView from './components/ProjectsView';
import SkillsView from './components/SkillsView';
import TimelineView from './components/TimelineView';
import SidebarItem from './components/SidebarItem';
import { ViewType } from './types';

const STATIC_PROFILE_IMAGE = "/profile.jpg";

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<ViewType>('overview');

  return (
    <div className="flex min-h-screen bg-[#0B0F17] text-slate-100 font-inter selection:bg-blue-500/30">
      {/* Sidebar */}
      <aside className="w-60 fixed left-0 top-0 bottom-0 bg-[#0B0F17] border-r border-slate-800/60 flex flex-col z-40">
        <div className="p-5">
          <div className="flex items-center gap-2.5 mb-8">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-600/20">
              <BarChart3 size={18} className="text-white" />
            </div>
            <h1 className="font-bold text-base tracking-tight">Portfolio Dashboard</h1>
          </div>

          <p className="text-[9px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-4">Menu</p>
          <nav className="space-y-0.5">
            <SidebarItem 
              icon={<LayoutDashboard size={16} />} 
              label="Overview" 
              active={activeView === 'overview'} 
              onClick={() => setActiveView('overview')} 
            />
            <SidebarItem 
              icon={<History size={16} />} 
              label="Timeline" 
              active={activeView === 'timeline'} 
              onClick={() => setActiveView('timeline')} 
            />
            <SidebarItem 
              icon={<Zap size={16} />} 
              label="Skills" 
              active={activeView === 'skills'} 
              onClick={() => setActiveView('skills')} 
            />
            <SidebarItem 
              icon={<FolderClosed size={16} />} 
              label="Projects" 
              active={activeView === 'projects'} 
              onClick={() => setActiveView('projects')} 
            />
          </nav>
        </div>

        <div className="mt-auto p-3">
          <div className="bg-[#161B22] border border-slate-800/50 rounded-xl p-3 mb-3 flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg overflow-hidden bg-blue-900 flex-shrink-0 border border-slate-700">
              <img src={STATIC_PROFILE_IMAGE} alt="Profile" className="object-cover w-full h-full" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-bold truncate">Kashika Chopra</p>
              <p className="text-[10px] text-slate-500 truncate">MSBAIM @ Purdue</p>
            </div>
          </div>
          
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-2 px-3 flex items-center justify-center gap-2 transition-all font-semibold text-xs shadow-lg shadow-blue-900/10">
            <Download size={14} />
            Download CV
          </button>
          <p className="text-[10px] text-center text-slate-500 mt-4 font-bold tracking-tight">Dash by Kash ⭐</p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-60 p-6 md:p-10 overflow-y-auto bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.03)_0%,transparent_50%)]">
        <div className="max-w-7xl mx-auto">
          {activeView === 'overview' && <Overview profileImage={STATIC_PROFILE_IMAGE} onImageChange={() => {}} />}
          {activeView === 'projects' && <ProjectsView />}
          {activeView === 'skills' && <SkillsView />}
          {activeView === 'timeline' && <TimelineView />}
        </div>
      </main>
    </div>
  );
};

export default App;
