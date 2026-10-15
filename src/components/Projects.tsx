import React, { useState } from 'react';
import { Building2, ArrowUpRight, CheckCircle2, Server, Eye, ExternalLink, Smartphone } from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'mobile' | 'web'>('all');

  const filteredProjects = PORTFOLIO_DATA.projects.filter((p) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'mobile') return p.category === 'hrms-mobile';
    if (activeFilter === 'web') return p.category === 'hrms-web' || p.category === 'crm';
    return true;
  });

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-blue-400 uppercase mb-3">
              <span>Production Systems & Applications</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>HRMS & CRM Products</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
              Featured Projects & Implementations
            </h2>
            <p className="mt-3 text-base text-slate-400">
              Directly from active production at CAFS Infotech, covering official mobile application backends on Google Play Store, multi-version HRMS web products, and travel CRM platforms.
            </p>
          </div>

          {/* Interactive Filter Controls */}
          <div className="flex items-center p-1 bg-slate-900 border border-slate-800 rounded-xl self-start md:self-auto">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Projects ({PORTFOLIO_DATA.projects.length})
            </button>
            <button
              onClick={() => setActiveFilter('mobile')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                activeFilter === 'mobile'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Mobile Backends (2)
            </button>
            <button
              onClick={() => setActiveFilter('web')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                activeFilter === 'web'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Web Apps & CRM (2)
            </button>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all duration-300 flex flex-col overflow-hidden shadow-xl"
            >
              {/* Image Preview Container */}
              <div className="relative aspect-[16/9] overflow-hidden bg-slate-950 border-b border-slate-800">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.currentTarget as HTMLElement).style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />

                {/* Overlaid badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="text-[11px] font-mono font-medium text-blue-300 bg-slate-900/90 backdrop-blur-md px-2.5 py-1 rounded border border-blue-900/50">
                    {project.categoryLabel}
                  </span>

                  {project.playStoreUrl && (
                    <a
                      href={project.playStoreUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-300 bg-emerald-950/90 backdrop-blur-md px-2.5 py-1 rounded border border-emerald-800/80 hover:bg-emerald-900 transition-colors"
                    >
                      <Smartphone className="w-3 h-3" />
                      <span>Google Play</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  )}
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                  <span className="text-[11px] font-mono font-medium text-slate-300 bg-slate-900/90 backdrop-blur-sm px-2.5 py-1 rounded border border-slate-700/60">
                    {project.clientBadge}
                  </span>
                  {project.versions && (
                    <span className="text-[11px] font-mono text-amber-300 bg-amber-950/80 px-2.5 py-1 rounded border border-amber-800/60">
                      {project.versions}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white font-display group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="mt-1 text-xs text-blue-400/90 font-medium">
                    {project.subtitle}
                  </p>

                  <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                    {project.overview}
                  </p>

                  {/* Companies / Clients Handled */}
                  <div className="mt-4 pt-3 border-t border-slate-800/80">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1.5">
                      Client Deployments / Scope:
                    </span>
                    <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-300 font-medium">
                      {project.companiesHandled.map((comp, idx) => (
                        <span key={comp} className="inline-flex items-center">
                          <span className="text-slate-200">{comp}</span>
                          {idx < project.companiesHandled.length - 1 && (
                            <span className="text-slate-600 ml-1.5">·</span>
                          )}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Features from Resume */}
                  <div className="mt-4 space-y-1.5">
                    {project.keyFeatures.slice(0, 3).map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 mt-0.5 shrink-0" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack pills */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] px-2 py-0.5 rounded bg-slate-800/60 text-slate-300 border border-slate-700/40"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors cursor-pointer"
                  >
                    <span>View Technical Architecture & Details</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.playStoreUrl && (
                      <a
                        href={project.playStoreUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 text-slate-400 hover:text-emerald-400 transition-colors"
                        title="View on Google Play Store"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    <Eye
                      onClick={() => onSelectProject(project)}
                      className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
