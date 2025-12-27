
import React from 'react';

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all text-sm font-semibold tracking-tight ${
        active 
          ? 'bg-blue-600/10 text-blue-500 border border-blue-500/20 shadow-sm' 
          : 'text-slate-500 hover:text-slate-200 hover:bg-slate-800/30'
      }`}
    >
      <span className={`${active ? 'text-blue-500' : 'text-slate-500'}`}>{icon}</span>
      {label}
    </button>
  );
};

export default SidebarItem;
