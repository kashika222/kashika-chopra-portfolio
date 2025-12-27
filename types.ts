
// Import React to provide the React namespace for React.ReactNode types used in interfaces
import React from 'react';

export interface StatItem {
  label: string;
  value: string;
  subLabel: string;
  icon: React.ReactNode;
  iconBg: string;
  trend?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
}

export interface SkillItem {
  name: string;
  level: number;
  icon?: React.ReactNode;
  subtitle?: string;
}

export interface ActivityItem {
  title: string;
  time: string;
  platform: string;
  icon: React.ReactNode;
  iconBg: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  role: string;
  category: string;
  categoryTag: string;
  description: string;
  tags: string[];
  impactLabel: string;
  impactValue: string;
  icon: React.ReactNode;
  // Detailed Case Study Fields
  businessProblem?: string;
  datasetDescription?: string;
  analysisApproach?: string;
  keyInsights?: string[];
  detailedTools?: string[];
}

export interface TimelineItem {
  id: string;
  title: string;
  company: string;
  period: string;
  tags: string[];
  responsibilities: string[];
  icon: React.ReactNode;
}

export type ViewType = 'overview' | 'projects' | 'skills' | 'timeline';
