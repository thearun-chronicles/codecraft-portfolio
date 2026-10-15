import React, { useEffect } from 'react';
import { X, CheckCircle2, Server, Building2, Smartphone, ExternalLink, ShieldCheck, Layers } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/90 sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider font-mono">
              {project.categoryLabel}
            </span>
            {project.clientBadge && (
              <>
                <span className="text-slate-600">·</span>
                <span className="text-xs text-slate-300 font-medium">{project.clientBadge}</span>
              </>
            )}
            {project.versions && (
              <>
                <span className="text-slate-600">·</span>
                <span className="text-xs text-amber-300 font-mono">{project.versions}</span>
              </>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Modal Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
          {/* Title & Subtitle */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
                {project.title}
              </h2>
              <p className="text-base text-slate-400 mt-2">{project.subtitle}</p>
            </div>

            {project.playStoreUrl && (
              <a
                href={project.playStoreUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-emerald-300 bg-emerald-950/90 border border-emerald-700/80 hover:bg-emerald-900 transition-colors shrink-0"
              >
                <Smartphone className="w-4 h-4" />
                <span>Open in Google Play</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          {/* Project Visual Showcase */}
          <div className="relative aspect-video rounded-xl overflow-hidden border border-slate-800 bg-slate-950">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.currentTarget as HTMLElement).style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Metrics Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {project.metrics.map((metric, i) => (
              <div key={i} className="p-3 rounded-lg bg-slate-950 border border-slate-800/80">
                <span className="block text-xl font-bold text-white font-display">
                  {metric.value}
                </span>
                <span className="text-xs text-slate-400">{metric.label}</span>
              </div>
            ))}
          </div>

          {/* Companies Handled Callout */}
          <div className="p-4 rounded-xl bg-blue-950/30 border border-blue-900/40">
            <div className="flex items-center gap-2 text-blue-300 text-sm font-semibold mb-2">
              <Building2 className="w-4 h-4 text-blue-400" />
              <span>Client Organizations & Implementations</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.companiesHandled.map((comp) => (
                <span
                  key={comp}
                  className="px-3 py-1 text-xs font-medium rounded bg-slate-900 text-slate-200 border border-slate-700/60"
                >
                  {comp}
                </span>
              ))}
            </div>
          </div>

          {/* Challenge & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-2 font-display">
                The Engineering Challenge
              </h4>
              <p className="text-sm text-slate-400 leading-relaxed">{project.challenge}</p>
            </div>
            <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-2 font-display">
                The Technical Solution
              </h4>
              <p className="text-sm text-slate-400 leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Key Features from Resume */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-4 font-display">
              Core Modules & Implemented Workflows
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.keyFeatures.map((feat, i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* System Architecture Highlights */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-3 font-display flex items-center gap-2">
              <Server className="w-4 h-4 text-blue-400" />
              <span>Backend Architecture Highlights</span>
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              {project.architectureHighlights.map((arch, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span>{arch}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="pt-4 border-t border-slate-800">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Technologies & Frameworks
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs rounded-md bg-slate-800 text-slate-200 border border-slate-700/60 font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Bottom Action */}
        <div className="px-6 py-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between">
          <div>
            {project.playStoreUrl && (
              <a
                href={project.playStoreUrl}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-emerald-400 hover:underline inline-flex items-center gap-1 font-mono"
              >
                <span>View package on Google Play</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};
