import React from 'react';

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
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
  description: string;
  tags: string[];
  impactLabel: string;
  impactValue: string;
  impactSecondaryLabel?: string;
  impactSecondaryValue?: string;
  icon: React.ReactNode;
  businessProblem?: string;
  datasetDescription?: string;
  analysisApproach?: string;
  keyInsights?: string[];
  detailedTools?: string[];
  inProgress?: boolean;
}

export interface TimelineItem {
  id: string;
  title: string;
  company: string;
  period: string;
  year: string;
  type: 'academic' | 'professional';
  tags: string[];
  responsibilities: string[];
  metrics?: { label: string; value: string }[];
  icon: React.ReactNode;
}

export type ViewType = 'overview' | 'projects' | 'skills' | 'timeline' | 'contact';
