import React from 'react';
import { Award, GraduationCap, ShieldCheck, Building2, Smartphone, Layers } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Accomplishments: React.FC = () => {
  return (
    <section id="accomplishments" className="py-24 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-blue-400 uppercase mb-3">
            <span>Milestones & Recognition</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Production Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
            Awards, Education & Key Milestones
          </h2>
          <p className="mt-3 text-base text-slate-400">
            Official company recognition, academic degree, and measurable delivery milestones at CAFS Infotech.
          </p>
        </div>

        {/* Big Metrics Grid (Tabular Numerals) */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 mb-16">
          {PORTFOLIO_DATA.accomplishments.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-colors flex flex-col justify-between shadow-lg"
            >
              <div>
                <span className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-200 font-display tabular-nums">
                  {item.number}
                </span>
                <h3 className="mt-2 text-sm font-semibold text-white font-display">
                  {item.label}
                </h3>
              </div>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed font-normal">
                {item.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Award & Education Cards Side-by-Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Discovery of the Year Award Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-amber-950/30 to-slate-900/60 border border-amber-500/30 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 text-amber-400 font-display text-sm font-semibold mb-3">
                <Award className="w-5 h-5 text-amber-400" />
                <span>Prestigious Company Award</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                Discovery of the Year Award – 2024–2025
              </h3>
              <p className="text-sm text-slate-300 mt-2 font-medium">
                Conferred by CAFS Infotech
              </p>
              <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                Awarded in recognition of exceptional contributions, technical excellence, and dedication across HRMS product development, mobile API engineering, and client implementations during the year.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-amber-500/20 flex items-center justify-between text-xs font-mono text-amber-300">
              <span>CAFS Infotech Annual Recognition</span>
              <span>2024–2025</span>
            </div>
          </div>

          {/* Education Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 text-blue-400 font-display text-sm font-semibold mb-3">
                <GraduationCap className="w-5 h-5 text-blue-400" />
                <span>Academic Education</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                Bachelor of Computer Applications (BCA)
              </h3>
              <p className="text-sm text-slate-300 mt-2 font-medium">
                Annai College Of Arts & Science, Kumbakonam
              </p>
              <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                Comprehensive academic background in Computer Applications, Database Management Systems, Object-Oriented Programming, and Web Engineering. Graduated May 2024.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Place: Kumbakonam, Tamil Nadu</span>
              <span>2021 July – 2024 May</span>
            </div>
          </div>
        </div>

        {/* 10+ Client Deployments Banner */}
        <div className="rounded-2xl bg-slate-900/40 border border-slate-800 p-6 sm:p-8">
          <div className="flex items-center gap-2.5 mb-4 text-slate-200 font-display text-base font-bold">
            <Building2 className="w-5 h-5 text-blue-400" />
            <span>10+ Client Organizations Handled Across Implementations & Upgrades</span>
          </div>

          <p className="text-xs text-slate-400 mb-6 leading-relaxed">
            Involved in requirement understanding, client-specific configuration, customization, version upgrades (v7.2, v8.3, v8.5), deployment support, troubleshooting, and direct client coordination:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {PORTFOLIO_DATA.clients.map((client) => (
              <div
                key={client.name}
                className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 hover:border-slate-700 transition-colors"
              >
                <span className="block text-sm font-bold text-white font-display">{client.name}</span>
                <span className="text-[11px] text-slate-400 mt-0.5 block">{client.role}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
