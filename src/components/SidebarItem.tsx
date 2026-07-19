import React from 'react';

interface SidebarItemProps {
  icon: string;
  label: string;
  active?: boolean;
  onClick: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`relative w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all active:scale-95 text-left ${
        active
          ? 'text-primary font-semibold bg-secondary-container/50'
          : 'text-on-surface-variant hover:bg-surface-variant/30'
      }`}
    >
      {active && <div className="active-nav-indicator" />}
      <span
        className="material-symbols-outlined text-[20px]"
        style={active ? { fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" } : undefined}
      >
        {icon}
      </span>
      <span className="text-[15px] leading-5">{label}</span>
    </button>
  );
};

export default SidebarItem;
