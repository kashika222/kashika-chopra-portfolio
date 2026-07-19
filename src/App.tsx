import React, { useState } from 'react';
import Overview from './components/Dashboard';
import ProjectsView from './components/ProjectsView';
import SkillsView from './components/SkillsView';
import TimelineView from './components/TimelineView';
import ContactView from './components/ContactView';
import SidebarItem from './components/SidebarItem';
import { ViewType } from './types';

const SIDEBAR_IMAGE = `${import.meta.env.BASE_URL}profile.jpg`;
const HERO_IMAGE = `${import.meta.env.BASE_URL}photo2.jpg`;

const NAV: { id: ViewType; label: string; icon: string; title: string }[] = [
  { id: 'overview', label: 'Dashboard', icon: 'dashboard', title: 'Analytics Portfolio' },
  { id: 'projects', label: 'Projects', icon: 'folder_special', title: 'Projects' },
  { id: 'skills', label: 'Skills', icon: 'psychology', title: 'Skills Matrix' },
  { id: 'timeline', label: 'Timeline', icon: 'history_edu', title: 'Career Trajectory' },
  { id: 'contact', label: 'Contact', icon: 'mail', title: 'Get in Touch' },
];

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<ViewType>('overview');
  const [mobileOpen, setMobileOpen] = useState(false);
  const current = NAV.find((n) => n.id === activeView) ?? NAV[0];

  const go = (view: ViewType) => {
    setActiveView(view);
    setMobileOpen(false);
  };

  return (
    <div className="flex min-h-screen bg-background text-on-surface font-sans">
      {/* Mobile overlay */}
      {mobileOpen && (
        <button
          aria-label="Close menu"
          className="fixed inset-0 bg-on-surface/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* SideNavBar */}
      <aside
        className={`h-screen w-64 fixed left-0 top-0 bg-surface-container-low flex flex-col p-2 gap-1 z-50 shadow-sm transition-transform duration-300 ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        <div className="flex flex-col items-center py-5 px-3 mb-1">
          <div className="w-14 h-14 rounded-full overflow-hidden mb-2 border-2 border-primary-container">
            <img src={SIDEBAR_IMAGE} alt="Kashika Chopra" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-lg font-medium text-primary tracking-tight">Kashika Chopra</h1>
          <p className="text-xs text-on-surface-variant opacity-70 mt-0.5">Data Analyst Portfolio</p>
        </div>

        <nav className="flex-grow flex flex-col gap-0.5 px-2">
          {NAV.map((item) => (
            <SidebarItem
              key={item.id}
              icon={item.icon}
              label={item.label}
              active={activeView === item.id}
              onClick={() => go(item.id)}
            />
          ))}
        </nav>

        <div className="mt-auto p-3 flex flex-col gap-2">
          <div className="flex items-center gap-2.5 p-2.5 bg-surface-container-high rounded-xl">
            <div className="w-7 h-7 rounded-full bg-primary-container flex items-center justify-center text-white">
              <span className="material-symbols-outlined text-[16px]">verified</span>
            </div>
            <div>
              <p className="text-[11px] font-semibold tracking-wide text-on-surface uppercase">Pro Analyst</p>
              <p className="text-[10px] text-on-surface-variant">Verified Portfolio</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-64 flex-grow min-h-screen pb-6 w-full">
        <header className="flex justify-between items-center px-4 md:px-margin-desktop py-2.5 w-full z-30 sticky top-0 bg-white/80 backdrop-blur-md border-b border-outline-variant/30">
          <div className="flex items-center gap-3">
            <button
              className="lg:hidden p-2 rounded-full text-on-surface-variant hover:bg-surface-variant/30"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
            <h2 className="text-lg md:text-xl font-medium text-primary">{current.title}</h2>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              download="Kashika_Chopra_Resume.pdf"
              className="hidden sm:inline-flex items-center gap-2 bg-primary-container text-white px-3.5 py-1.5 rounded-xl text-sm font-medium hover:opacity-90 transition-opacity"
            >
              <span className="material-symbols-outlined text-[18px]">download</span>
              Download CV
            </a>
          </div>
        </header>

        <div className="px-4 md:px-margin-desktop py-4 max-w-7xl mx-auto animate-fade-up">
          {activeView === 'overview' && <Overview profileImage={HERO_IMAGE} onNavigate={go} />}
          {activeView === 'projects' && <ProjectsView />}
          {activeView === 'skills' && <SkillsView onNavigate={go} />}
          {activeView === 'timeline' && <TimelineView />}
          {activeView === 'contact' && <ContactView />}
        </div>
      </main>
    </div>
  );
};

export default App;
