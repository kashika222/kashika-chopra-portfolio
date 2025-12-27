
import React, { useState } from 'react';
import { 
  TrendingUp, 
  Database,
  ArrowRight,
  Zap,
  Activity,
  ShieldAlert,
  X,
  Target,
  FileText,
  Lightbulb,
  Cpu,
  Workflow
} from 'lucide-react';
import { ProjectItem } from '../types';

const PROJECTS: ProjectItem[] = [
  {
    id: '1',
    title: 'Airbnb CRM Retention System',
    role: 'Churn Prediction & ROI Optimization',
    category: 'DATA & AI MARKETING',
    categoryTag: 'bg-blue-900/30 text-blue-400',
    description: 'Developed a sophisticated ensemble approach using CatBoost with probability calibration to optimize retention for properties at risk of churn.',
    tags: ['CatBoost', 'Python', 'Optuna', 'ROI Optimization'],
    impactLabel: 'IMPACT',
    impactValue: '0.9042 AUC',
    icon: <Zap size={18} />,
    businessProblem: "Airbnb needed to optimize customer retention by identifying properties at risk of churn. The challenge was to strategically allocate a $1000 gift budget to maximize expected profit while minimizing customer loss.",
    datasetDescription: "Historical reservation data including property characteristics, booking patterns, customer behavior metrics, and churn indicators. Dataset contained imbalanced classes with minority churn class.",
    analysisApproach: "Developed a sophisticated ensemble approach using CatBoost with bagging and probability calibration. Implemented stratified K-fold cross-validation to handle class imbalance. Created feature engineering pipeline focusing on reservation trends, temporal patterns, and customer engagement metrics.",
    keyInsights: [
      "Achieved 0.9042 AUC with calibrated bagged CatBoost model",
      "Implemented profit-at-risk threshold optimization to maximize ROI",
      "Designed feature engineering pipeline capturing reservation trends",
      "Model identified high-risk properties with 90%+ accuracy"
    ],
    detailedTools: ["CatBoost", "Isotonic Regression", "Stratified K-Fold CV", "Python", "Pandas", "Scikit-learn", "Optuna"]
  },
  {
    id: '2',
    title: 'Bankruptcy Prediction Model',
    role: 'Risk Assessment & Early Warning',
    category: 'FINANCIAL ANALYTICS',
    categoryTag: 'bg-emerald-900/30 text-emerald-400',
    description: 'Built an ensemble-based prediction system using multiple gradient boosting algorithms with advanced stacking techniques for risk detection.',
    tags: ['XGBoost', 'LightGBM', 'Stacking', 'Finance'],
    impactLabel: 'IMPACT',
    impactValue: '0.90264 AUC',
    icon: <ShieldAlert size={18} />,
    businessProblem: "Financial institutions needed an accurate system to predict company bankruptcy risk using financial ratios. Early detection enables proactive risk management and portfolio optimization.",
    datasetDescription: "Financial statement data including balance sheets, income statements, and key financial ratios. Dataset featured imbalanced classes with rare bankruptcy events.",
    analysisApproach: "Built an ensemble-based prediction system using multiple gradient boosting algorithms (XGBoost, LightGBM, CatBoost) with advanced stacking techniques. Applied quantile transformation for financial ratio normalization and implemented 10-fold stratified cross-validation.",
    keyInsights: [
      "Achieved 0.90264 AUC using geometric mean ensemble approach",
      "Implemented 10-fold stratified cross-validation for robust evaluation",
      "Applied quantile transformation for financial ratio normalization",
      "Model provides early warning signals for financial distress"
    ],
    detailedTools: ["XGBoost", "LightGBM", "CatBoost", "Stacking", "Quantile Transform", "Python", "Scikit-learn"]
  },
  {
    id: '3',
    title: 'Data Mining & Pattern Recognition',
    role: 'Knowledge Discovery & Modeling',
    category: 'DATA MINING',
    categoryTag: 'bg-purple-900/30 text-purple-400',
    description: 'Extracting meaningful patterns and insights from complex, high-dimensional datasets using advanced dimensionality reduction.',
    tags: ['Clustering', 'Dimensionality Reduction', 'Knowledge Discovery'],
    impactLabel: 'FOCUS',
    impactValue: 'Pattern Discovery',
    icon: <Database size={18} />,
    businessProblem: "Extract meaningful patterns and insights from complex, high-dimensional datasets. The goal was to identify hidden relationships and build predictive models for pattern recognition.",
    datasetDescription: "Multi-dimensional datasets with various feature types including numerical, categorical, and temporal data. Complex relationships and non-linear patterns present.",
    analysisApproach: "Comprehensive data mining project applying various techniques including feature extraction, dimensionality reduction, clustering, and predictive modeling. Implemented advanced algorithms for pattern recognition and knowledge discovery.",
    keyInsights: [
      "Applied advanced data mining algorithms for pattern discovery",
      "Performed comprehensive data analysis and visualization",
      "Built predictive models for pattern recognition tasks",
      "Identified key patterns and relationships in complex data"
    ],
    detailedTools: ["Python", "Pandas", "Scikit-learn", "Feature Engineering", "Clustering", "Dimensionality Reduction"]
  }
];

const ProjectsView: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <div className="max-w-6xl mx-auto space-y-10 animate-in fade-in duration-500 pb-20">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-4xl font-bold mb-2 text-white">Project Analytics</h2>
          <p className="text-slate-500 font-medium">Detailed case studies focusing on data-driven business impact.</p>
        </div>
      </header>

      <div className="space-y-6">
        <div className="flex items-center gap-3 text-blue-500">
          <div className="grid grid-cols-2 gap-0.5">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-sm"></div>
            <div className="w-1.5 h-1.5 bg-blue-500/40 rounded-sm"></div>
            <div className="w-1.5 h-1.5 bg-blue-500/40 rounded-sm"></div>
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-sm"></div>
          </div>
          <h3 className="font-bold text-xs tracking-[0.2em] uppercase">Active Portfolio</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <div key={project.id} className="bg-[#111827]/40 backdrop-blur-md border border-slate-800/60 rounded-[32px] flex flex-col group hover:border-blue-500/30 transition-all duration-300">
              <div className="p-8 flex-1">
                <div className="flex items-center justify-between mb-6">
                  <span className={`px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest ${project.categoryTag}`}>
                    {project.category}
                  </span>
                  <div className="p-2.5 bg-slate-900 border border-slate-800 rounded-xl text-blue-500 group-hover:scale-110 transition-transform">
                    {project.icon}
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-1 text-white group-hover:text-blue-400 transition-colors">{project.title}</h4>
                <p className="text-[11px] text-slate-500 font-bold uppercase tracking-wider mb-5">{project.role}</p>
                <p className="text-sm text-slate-400 line-clamp-3 mb-8 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-slate-900/60 border border-slate-800/40 rounded-lg text-[10px] font-semibold text-slate-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="px-8 py-5 border-t border-slate-800/40 flex items-center justify-between bg-slate-900/20 rounded-b-[32px]">
                <div>
                  <p className="text-[10px] text-slate-600 font-bold tracking-[0.15em] uppercase mb-0.5">{project.impactLabel}</p>
                  <div className="flex items-center gap-2">
                    {project.category === 'DATA & AI MARKETING' && <Activity size={14} className="text-blue-500" />}
                    {project.category === 'FINANCIAL ANALYTICS' && <TrendingUp size={14} className="text-emerald-500" />}
                    {project.category === 'DATA MINING' && <Database size={14} className="text-purple-500" />}
                    <span className="text-sm font-bold text-white">{project.impactValue}</span>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedProject(project)}
                  className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500 transition-all shadow-lg"
                >
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-10 animate-in fade-in duration-200">
          <div 
            className="absolute inset-0 bg-[#0B0F17]/80 backdrop-blur-sm" 
            onClick={() => setSelectedProject(null)}
          ></div>
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#111827] border border-slate-800 rounded-[32px] shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-300">
            {/* Modal Header */}
            <div className="p-6 md:p-8 border-b border-slate-800 flex items-center justify-between bg-slate-900/40">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-600/10 text-blue-500 rounded-2xl">
                  {selectedProject.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded ${selectedProject.categoryTag}`}>
                      {selectedProject.category}
                    </span>
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Case Study</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setSelectedProject(null)}
                className="p-2 hover:bg-slate-800 rounded-xl text-slate-400 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex-1 overflow-y-auto p-6 md:p-10 space-y-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Left Column */}
                <div className="space-y-8">
                  <section>
                    <div className="flex items-center gap-2 mb-3 text-blue-400 font-bold text-xs uppercase tracking-widest">
                      <Target size={14} />
                      Business Problem
                    </div>
                    <p className="text-slate-300 leading-relaxed text-sm md:text-base bg-slate-900/30 p-4 rounded-2xl border border-slate-800/50">
                      {selectedProject.businessProblem}
                    </p>
                  </section>

                  <section>
                    <div className="flex items-center gap-2 mb-3 text-amber-400 font-bold text-xs uppercase tracking-widest">
                      <FileText size={14} />
                      Dataset Description
                    </div>
                    <p className="text-slate-300 leading-relaxed text-sm md:text-base bg-slate-900/30 p-4 rounded-2xl border border-slate-800/50">
                      {selectedProject.datasetDescription}
                    </p>
                  </section>

                  <section>
                    <div className="flex items-center gap-2 mb-3 text-purple-400 font-bold text-xs uppercase tracking-widest">
                      <Workflow size={14} />
                      Analysis Approach
                    </div>
                    <p className="text-slate-300 leading-relaxed text-sm md:text-base bg-slate-900/30 p-4 rounded-2xl border border-slate-800/50">
                      {selectedProject.analysisApproach}
                    </p>
                  </section>
                </div>

                {/* Right Column */}
                <div className="space-y-8">
                  <section>
                    <div className="flex items-center gap-2 mb-4 text-emerald-400 font-bold text-xs uppercase tracking-widest">
                      <Lightbulb size={14} />
                      Key Insights
                    </div>
                    <div className="space-y-3">
                      {selectedProject.keyInsights?.map((insight, idx) => (
                        <div key={idx} className="flex gap-3 p-3 bg-emerald-500/5 rounded-xl border border-emerald-500/10">
                          <div className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center text-[10px] font-bold text-emerald-950">
                            {idx + 1}
                          </div>
                          <p className="text-slate-200 text-sm">{insight}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section>
                    <div className="flex items-center gap-2 mb-4 text-blue-400 font-bold text-xs uppercase tracking-widest">
                      <Cpu size={14} />
                      Tools & Technologies
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.detailedTools?.map(tool => (
                        <span key={tool} className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-xl text-xs font-bold text-slate-300 shadow-sm">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </section>

                  <div className="pt-6 border-t border-slate-800">
                    <div className="bg-blue-600/10 p-4 rounded-2xl border border-blue-600/20 flex items-center justify-between">
                      <div>
                        <p className="text-[10px] text-blue-400 font-bold uppercase tracking-widest mb-1">Impact Result</p>
                        <p className="text-2xl font-black text-white">{selectedProject.impactValue}</p>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-600/30">
                        <Activity size={24} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Modal Footer */}
            <div className="p-6 border-t border-slate-800 bg-slate-950/40 flex justify-end">
              <button 
                onClick={() => setSelectedProject(null)}
                className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-sm font-bold transition-all border border-slate-700"
              >
                Close Case Study
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsView;
