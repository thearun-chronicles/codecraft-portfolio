import React from 'react';
import { Building2, Calendar, MapPin, Award, CheckCircle2, ShieldCheck } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const exp = PORTFOLIO_DATA.experience[0];

  return (
    <section id="experience" className="py-24 border-t border-slate-900 bg-slate-950/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-blue-400 uppercase mb-3">
            <span>Career History & Recognition</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>2+ Years Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
            Experience at CAFS Infotech
          </h2>
          <p className="mt-4 text-base text-slate-400 leading-relaxed">
            Full Stack Developer and PHP Developer building HRMS and CRM web applications and mobile application backends, with end-to-end involvement from requirement understanding to deployment and production support.
          </p>
        </div>

        {/* Experience Card */}
        <div className="relative rounded-2xl bg-slate-900/60 border border-slate-800 p-6 sm:p-8 lg:p-10 shadow-xl">
          {/* Header Row */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-8 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2.5 text-blue-400 font-semibold text-lg sm:text-xl font-display">
                <Building2 className="w-5 h-5" />
                <span>{exp.company}</span>
              </div>
              <h3 className="text-2xl font-bold text-white mt-1">{exp.role}</h3>
              <p className="text-xs text-slate-400 mt-1 flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {exp.location}
                </span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span>{exp.employmentType}</span>
              </p>
            </div>

            {/* Timeframe & Award */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs font-medium">
                <Award className="w-4 h-4 text-amber-400" />
                <span>Discovery of the Year Award (2024–2025)</span>
              </div>

              <div className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300">
                <Calendar className="w-4 h-4 text-blue-400" />
                <span>{exp.period}</span>
              </div>
            </div>
          </div>

          {/* Role Summary Prose */}
          <div className="my-6">
            <p className="text-base text-slate-300 leading-relaxed">
              {exp.summary}
            </p>
          </div>

          {/* Key Deliverables & Engineering Achievements */}
          <div className="my-8">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4 font-display">
              Core Responsibilities & Technical Concepts Implemented
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {exp.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-slate-950/50 border border-slate-800/80 hover:border-slate-700/80 transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4 text-blue-400 mt-1 shrink-0" />
                  <p className="text-sm text-slate-300 leading-relaxed">{highlight}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Enterprise Clients Served */}
          <div className="pt-6 border-t border-slate-800/80 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                10+ Client Implementations Handled:
              </span>
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-300 font-mono">
                {exp.clientsServed.map((client, idx) => (
                  <React.Fragment key={client}>
                    <span className="font-semibold text-slate-200">{client}</span>
                    {idx < exp.clientsServed.length - 1 && (
                      <span aria-hidden="true" className="text-slate-600">·</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Production Stack Tags */}
            <div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                Core Stack:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {exp.technologies.slice(0, 8).map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-1 rounded bg-slate-800/80 text-slate-300 border border-slate-700/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
