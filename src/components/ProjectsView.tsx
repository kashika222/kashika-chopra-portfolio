import React, { useState } from 'react';
import { ProjectItem } from '../types';

const PROJECTS: ProjectItem[] = [
  {
    id: '1',
    title: 'StyleSync',
    role: 'AI-Powered Personal Fashion Intelligence',
    category: 'AI / Full Stack',
    description:
      'Developed an AI-powered consumer analytics platform that digitizes wardrobes and delivers personalized shopping and outfit recommendations using multimodal AI and LLMs.',
    tags: ['React', 'FastAPI', 'Gemini', 'Supabase'],
    impactLabel: 'Budget',
    impactValue: '$0',
    impactSecondaryLabel: 'Color Palettes',
    impactSecondaryValue: '12',
    icon: 'styler',
    businessProblem:
      'Consumers struggle to shop sustainably and style what they already own. StyleSync digitizes wardrobes, personalizes color seasons, scores purchases, and generates outfits to reduce wasteful buying.',
    datasetDescription:
      'User-uploaded wardrobe images, personal color quiz responses, preference signals, and scraped fashion trend candidates persisted in Supabase with Cloudinary image storage.',
    analysisApproach:
      'Built a React + TypeScript frontend and FastAPI backend with multimodal Gemini tagging, rules-based and ReAct agent outfit engines, LLM-as-a-Judge evaluation, and a Playwright trends scraping pipeline.',
    keyInsights: [
      'Multimodal AI tagging with structured JSON schemas digitized unstructured wardrobe images into actionable attributes',
      'Shopping Intelligence utility score combined outfit potential, seasonal versatility, and color match',
      'Dual outfit engines (rules-based + ReAct agent) with LLM-as-a-Judge improved recommendation quality',
      'Built entirely on a $0 budget using Gemini, Groq, Hugging Face, Supabase, and Cloudinary',
    ],
    detailedTools: ['React', 'TypeScript', 'Vite', 'FastAPI', 'Python', 'Supabase', 'Gemini', 'Groq', 'Cloudinary', 'Playwright'],
  },
  {
    id: '2',
    title: 'Airbnb Incentive Optimization',
    role: 'Churn Prediction & ROI Optimization',
    category: 'Machine Learning',
    description:
      'Built a predictive analytics framework using CatBoost to identify hosts at risk of churn and optimize promotional incentives.',
    tags: ['CatBoost', 'Python', 'Isotonic Regression', 'ROI Optimization'],
    impactLabel: 'Incremental Profit',
    impactValue: '~$546K',
    impactSecondaryLabel: 'Hosts Targeted',
    impactSecondaryValue: '19.7%',
    icon: 'trending_up',
    businessProblem:
      'Airbnb needed to optimize customer retention by identifying hosts at risk of churn and strategically allocating promotional incentives to maximize expected profit while minimizing unnecessary spend.',
    datasetDescription:
      'Historical reservation and revenue data including property characteristics, booking patterns, customer behavior metrics, and churn indicators. Dataset contained imbalanced classes with a minority churn class.',
    analysisApproach:
      'Developed a class-weighted CatBoost model with 5-fold stratified cross-validation and isotonic regression for probability calibration. Designed a profit-based targeting policy and supporting segmentation, profitability analysis, forecasting, and dashboarding.',
    keyInsights: [
      'Estimated ~$546K incremental profit over baseline while intervening on only 19.7% of hosts',
      'Calibrated probabilities improved targeting precision for retention incentives',
      'Feature engineering captured reservation trends, temporal patterns, and engagement metrics',
      'Dashboarding translated model outputs into actionable retention strategies',
    ],
    detailedTools: ['CatBoost', 'Isotonic Regression', 'Stratified K-Fold CV', 'Python', 'Pandas', 'Scikit-learn'],
  },
  {
    id: '3',
    title: 'Bankruptcy Prediction Model',
    role: 'Risk Assessment & Early Warning',
    category: 'Financial Analytics',
    description:
      'Built a corporate bankruptcy prediction pipeline with median imputation, quantile transformation, and a geometric mean ensemble.',
    tags: ['XGBoost', 'LightGBM', 'CatBoost', 'Ensemble'],
    impactLabel: 'Model AUC',
    impactValue: '~0.91',
    impactSecondaryLabel: 'CV Folds',
    impactSecondaryValue: '10-fold',
    icon: 'shield',
    businessProblem:
      'Financial institutions needed an accurate system to predict company bankruptcy risk using financial ratios. Early detection enables proactive risk management and portfolio optimization.',
    datasetDescription:
      'Financial statement data including balance sheets, income statements, and key financial ratios. Dataset featured imbalanced classes with rare bankruptcy events.',
    analysisApproach:
      'Performed median imputation, quantile transformation, and feature engineering. Trained XGBoost, LightGBM, CatBoost, Gradient Boosting, and Logistic Regression with 10-fold stratified cross-validation and a geometric mean ensemble for minority-class stability.',
    keyInsights: [
      'Geometric mean ensemble achieved ~0.91 AUC with improved minority-class stability',
      '10-fold stratified cross-validation provided robust evaluation',
      'Quantile transformation normalized financial ratios for modeling',
      'Model provides early warning signals for financial distress',
    ],
    detailedTools: ['XGBoost', 'LightGBM', 'CatBoost', 'Gradient Boosting', 'Quantile Transform', 'Python', 'Scikit-learn'],
  },
  {
    id: '4',
    title: 'AI Product Selection & Ad Optimization',
    role: 'Multimodal AI for Advertising ROI',
    category: 'AI / Machine Learning',
    description:
      'Built a multimodal AI pipeline combining Gemini feature extraction with an ML ensemble to optimize which products to advertise under a fixed budget.',
    tags: ['Gemini', 'GBM', 'Random Forest', 'Llama'],
    impactLabel: 'Business Score',
    impactValue: '+8',
    impactSecondaryLabel: 'Ensemble AUC',
    impactSecondaryValue: '0.67',
    icon: 'campaign',
    businessProblem:
      'Optimize which items from a 331-product t-shirt catalog to advertise under a fixed budget, with an asymmetric business cost matrix for false positives and false negatives.',
    datasetDescription:
      'Product images, titles, and pricing for a 331-item catalog, plus engineered features from EDA-selected title keywords, price transformations, color grouping, and interaction terms.',
    analysisApproach:
      'Two-layer pipeline: Gemini multimodal feature extraction; then a weighted GBM + Random Forest ensemble versus a Llama 3.3 70B buyer agent with self-consistency voting. Optimized decision thresholds using business cost functions.',
    keyInsights: [
      'Pareto-optimal threshold 0.54 delivered a business score of +8',
      'ML ensemble outperformed the LLM agent on calibrated prediction (business score −14 for the agent)',
      'LLMs excelled at unlocking unstructured image/title data; supervised ML excelled at calibrated decisions',
      'Business-cost optimization aligned model outputs with advertising ROI',
    ],
    detailedTools: ['Gemini 2.5 Flash Lite', 'GBM', 'Random Forest', 'Llama 3.3 70B', 'Python', 'Scikit-learn'],
  },
  {
    id: '5',
    title: 'Senior Co-Living Market Selection',
    role: 'SafeGraph / BigQuery Market Analytics',
    category: 'SQL / Market Research',
    description:
      'Used SafeGraph foot-traffic and demographic data in BigQuery to identify underserved counties for senior co-living real estate development.',
    tags: ['BigQuery', 'SQL', 'SafeGraph', 'Market Analysis'],
    impactLabel: 'Target Counties',
    impactValue: '28',
    impactSecondaryLabel: 'From Candidates',
    impactSecondaryValue: '85',
    icon: 'map',
    businessProblem:
      'Identify underserved markets for senior co-living real estate development using foot-traffic, demographic, and POI data.',
    datasetDescription:
      'SafeGraph foot-traffic, demographic, and POI data in Google BigQuery, including CBG codes, age/income demographics, and NAICS competitor facilities.',
    analysisApproach:
      'Built advanced multi-CTE SQL pipelines for data cleaning, demographic filtering (50%+ age 65+, avg household income >$100K), competitor exclusion, facility-density metrics, and county readiness scoring.',
    keyInsights: [
      'Narrowed 85 candidate counties to 28 underserved target counties',
      'Prioritized 10 counties into immediate-development vs long-term investment tiers',
      'Competitor exclusion via NAICS 623312 improved market whitespace detection',
      'Visit-frequency and facility-density metrics strengthened readiness scoring',
    ],
    detailedTools: ['Google BigQuery', 'Advanced SQL', 'SafeGraph', 'CTE pipelines'],
  },
  {
    id: '6',
    title: 'Venture Capital Market Intelligence',
    role: 'Market Intelligence & Investment Strategy',
    category: 'Financial Analytics',
    description:
      'Analyzed Crunchbase venture funding patterns across 18,801 company documents in MongoDB Atlas to support investment strategy.',
    tags: ['MongoDB', 'Aggregation', 'Market Analysis', 'NoSQL'],
    impactLabel: 'Companies Analyzed',
    impactValue: '18.8K',
    impactSecondaryLabel: 'Platform',
    impactSecondaryValue: 'MongoDB',
    icon: 'hub',
    businessProblem:
      'Venture capital firms need data-driven insights to identify high-potential markets, industries, and geographies for investment using historical funding data.',
    datasetDescription:
      'Crunchbase venture capital data (18,801 company documents) containing funding amounts, founding year, industry category, employee size, founders, and geographic location — ingested into MongoDB Atlas.',
    analysisApproach:
      'Built data transformation pipelines and aggregation-based analysis in MongoDB to compute funding, founder, and temporal metrics, then explored trends across industries, time periods, and countries.',
    keyInsights: [
      'The United States dominates overall venture funding, with strong non-US growth pockets',
      'UK and European markets emerge as leading non-US hubs with diversified industry investments',
      'Software, biotech, and mobile consistently attract higher funding volumes',
      'Some markets show lower overall funding but more stable, risk-adjusted patterns',
    ],
    detailedTools: ['Python', 'MongoDB Atlas', 'MongoDB Aggregation Framework', 'Jupyter Notebook', 'JSON'],
  },
  {
    id: '7',
    title: 'Public Analytics Signal Index (PASI)',
    role: 'Independent Study · In Progress',
    category: 'Research / LLMs',
    description:
      'Building a transparent scoring index comparing public hiring and corporate disclosure signals between analytics leaders and peer companies.',
    tags: ['Python', 'LLMs', 'NLP', 'SEC EDGAR'],
    impactLabel: 'Matched Firms',
    impactValue: '8',
    impactSecondaryLabel: 'Pillars',
    impactSecondaryValue: '3',
    icon: 'science',
    inProgress: true,
  },
];

const ProjectsView: React.FC = () => {
  const [selected, setSelected] = useState<ProjectItem | null>(null);
  const [query, setQuery] = useState('');

  const filtered = PROJECTS.filter(
    (p) =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.description.toLowerCase().includes(query.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <p className="text-lg text-outline leading-relaxed max-w-2xl">
          Exploring the intersection of data-driven insights and business strategy through rigorous analysis and visual
          storytelling.
        </p>
        <div className="relative flex items-center bg-surface-container-low px-4 py-2 rounded-full w-full md:w-64 shrink-0">
          <span className="material-symbols-outlined text-outline text-[20px]">search</span>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="bg-transparent border-none focus:ring-0 text-sm w-full ml-2 text-on-surface-variant placeholder:text-outline outline-none"
            placeholder="Search projects..."
            type="text"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((project) => (
          <div
            key={project.id}
            className={`flex flex-col rounded-2xl overflow-hidden shadow-glass transition-all duration-300 group ${
              project.inProgress
                ? 'bg-on-surface text-white'
                : 'bg-white hover:-translate-y-1 hover:shadow-glass-hover'
            }`}
          >
            <div
              className={`h-40 relative overflow-hidden ${
                project.inProgress
                  ? 'bg-gradient-to-br from-primary via-on-primary-fixed-variant to-on-surface'
                  : 'bg-gradient-to-br from-primary-fixed via-secondary-container to-surface-container-high'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent z-10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className={`material-symbols-outlined text-[72px] ${
                    project.inProgress ? 'text-white/35' : 'text-primary/40 group-hover:scale-110 transition-transform duration-700'
                  }`}
                >
                  {project.icon}
                </span>
              </div>
              <div className="absolute top-4 right-4 z-20">
                <span
                  className={`backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold ${
                    project.inProgress
                      ? 'bg-white/15 text-white'
                      : 'bg-white/90 text-primary'
                  }`}
                >
                  {project.inProgress ? 'Work in Progress' : project.category}
                </span>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h4 className={`text-xl font-medium mb-1 ${project.inProgress ? 'text-white' : 'text-on-surface'}`}>
                {project.title}
              </h4>
              <p
                className={`text-xs uppercase tracking-wider font-semibold mb-3 ${
                  project.inProgress ? 'text-white/60' : 'text-outline'
                }`}
              >
                {project.role}
              </p>
              <p
                className={`text-sm mb-6 line-clamp-2 leading-relaxed ${
                  project.inProgress ? 'text-white/75' : 'text-on-surface-variant'
                }`}
              >
                {project.description}
              </p>
              {!project.inProgress && (
                <>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => setSelected(project)}
                    className="mt-auto w-full py-3 bg-primary text-white text-sm font-medium rounded-lg hover:bg-on-primary-fixed-variant transition-all flex items-center justify-center gap-2 group-hover:gap-3"
                  >
                    View Analysis
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </button>
                </>
              )}
              {project.inProgress && (
                <div className="mt-auto w-full py-3 bg-white/10 text-white/80 text-sm font-medium rounded-lg flex items-center justify-center gap-2 cursor-default">
                  <span className="material-symbols-outlined text-[18px]">hourglass_top</span>
                  Work in Progress
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-10">
          <button
            aria-label="Close"
            className="absolute inset-0 bg-on-surface/40 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          />
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-glass-hover flex flex-col overflow-hidden animate-fade-up">
            <div className="p-6 md:p-8 border-b border-outline-variant/30 flex items-center justify-between bg-surface-container-low/50">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 text-primary rounded-2xl">
                  <span className="material-symbols-outlined">{selected.icon}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-on-surface">{selected.title}</h3>
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary">{selected.category} · Case Study</p>
                </div>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="p-2 hover:bg-surface-container rounded-xl text-on-surface-variant transition-colors"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 md:p-10 space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <section>
                    <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Business Problem</p>
                    <p className="text-sm text-on-surface-variant leading-relaxed bg-surface-container-low p-4 rounded-xl">
                      {selected.businessProblem}
                    </p>
                  </section>
                  <section>
                    <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Dataset</p>
                    <p className="text-sm text-on-surface-variant leading-relaxed bg-surface-container-low p-4 rounded-xl">
                      {selected.datasetDescription}
                    </p>
                  </section>
                  <section>
                    <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Approach</p>
                    <p className="text-sm text-on-surface-variant leading-relaxed bg-surface-container-low p-4 rounded-xl">
                      {selected.analysisApproach}
                    </p>
                  </section>
                </div>
                <div className="space-y-6">
                  <section>
                    <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Key Insights</p>
                    <div className="space-y-3">
                      {selected.keyInsights?.map((insight, idx) => (
                        <div
                          key={idx}
                          className="flex gap-3 p-3 bg-secondary-container/30 rounded-xl border border-secondary-container/40"
                        >
                          <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center text-[10px] font-bold">
                            {idx + 1}
                          </div>
                          <p className="text-sm text-on-surface">{insight}</p>
                        </div>
                      ))}
                    </div>
                  </section>
                  <section>
                    <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Tools & Technologies</p>
                    <div className="flex flex-wrap gap-2">
                      {selected.detailedTools?.map((tool) => (
                        <span
                          key={tool}
                          className="px-3 py-1.5 bg-surface-container-low border border-outline-variant/30 rounded-xl text-xs font-semibold text-on-surface-variant"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </section>
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-outline-variant/30 bg-surface-container-low/40 flex justify-end">
              <button
                onClick={() => setSelected(null)}
                className="px-6 py-2.5 bg-surface-container-high hover:bg-surface-variant text-on-surface rounded-xl text-sm font-semibold transition-all"
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
