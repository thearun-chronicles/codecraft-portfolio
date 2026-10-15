import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  FileText,
  Github,
  Linkedin,
  Instagram,
  Mail,
  Building2,
  Server,
  Layers,
  CheckCircle2,
  Award
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const roles = PORTFOLIO_DATA.profile.subtitles;
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        setFade(true);
      }, 250);
    }, 3200);

    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section id="overview" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle background ambient mesh */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[520px] pointer-events-none overflow-hidden opacity-30 -z-10">
        <div className="absolute top-[-150px] left-1/4 w-[480px] h-[480px] bg-blue-600/30 rounded-full blur-[120px]" />
        <div className="absolute top-[-80px] right-1/4 w-[400px] h-[400px] bg-indigo-600/20 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & Intent */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Zero-pill metadata kicker with award mention */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wider text-blue-400 uppercase mb-3">
              <span>{PORTFOLIO_DATA.profile.title}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>2+ Years at CAFS Infotech</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Full Stack & PHP Developer</span>
            </div>

            {/* Award highlight bar */}
            <div className="mb-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-medium w-fit">
              <Award className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Discovery of the Year Award – 2024–2025 (CAFS Infotech)</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-display leading-[1.12]">
              I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">{PORTFOLIO_DATA.profile.fullName}</span>,
              <br />
              <span
                className={`inline-block transition-opacity duration-300 ${
                  fade ? 'opacity-100' : 'opacity-0'
                } text-slate-200 text-3xl sm:text-4xl lg:text-5xl font-semibold mt-1`}
              >
                {roles[currentRoleIndex]}
              </span>
            </h1>

            {/* Sub-prose aligned with resume */}
            <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              <strong>2+ years of experience</strong> as a Full Stack Developer & PHP Developer at{' '}
              <strong className="text-white">CAFS Infotech</strong>, specializing in CodeIgniter, REST APIs, and mobile application backends. Driving end-to-end development, migration, dynamic payroll, time office attendance, and production support across <strong>10+ client implementations</strong> including <em>Deanta</em>, <em>UDS</em>, <em>Denave</em>, <em>National Travels</em>, <em>Collman</em>, and more.
            </p>

            {/* Key Value Points from Resume */}
            <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-300">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>CodeIgniter MVC & RESTful API engineering</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Mobile backends deployed on Google Play Store</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Rule-based payroll & Time Office shift logic</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>DigiLocker, Aadhaar onboarding, 2FA & reCAPTCHA</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-md shadow-blue-600/30 transition-all hover:-translate-y-0.5"
              >
                <span>View 4 Flagship Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-blue-400" />
                <span>View Current Resume</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="mt-9 flex items-center gap-4 text-slate-400">
              <span className="text-xs font-medium uppercase tracking-wider text-slate-400">Connect:</span>
              <a
                href={PORTFOLIO_DATA.profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-blue-400 hover:border-slate-700 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={PORTFOLIO_DATA.profile.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PORTFOLIO_DATA.profile.instagram}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-pink-400 hover:border-slate-700 transition-colors"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PORTFOLIO_DATA.profile.email}`}
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-blue-400 hover:border-slate-700 transition-colors"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Visual Portrait & Live Credential Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Outer decorative glow frame */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-blue-600/30 via-indigo-500/20 to-transparent blur-xl opacity-60" />

              <div className="relative rounded-2xl bg-slate-900/90 border border-slate-800 overflow-hidden shadow-2xl p-4 sm:p-5">
                {/* Visual Image with Styled Fallback */}
                <div className="relative aspect-square rounded-xl overflow-hidden bg-slate-800 border border-slate-700/60">
                  <img
                    src="/src/assets/images/arunraj_engineer_portrait_1790272672678.jpg"
                    alt="Arun Raj R - Associate Software Engineer at CAFS Infotech"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.currentTarget as HTMLElement).style.display = 'none';
                    }}
                  />
                  {/* Subtle bottom gradient scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

                  {/* On-image status label */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                    <div className="flex items-center gap-1.5 bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-slate-700/60">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="font-medium text-[11px]">CAFS Infotech</span>
                    </div>
                    <span className="text-[11px] text-amber-300 font-mono font-medium">Discovery of the Year</span>
                  </div>
                </div>

                {/* Profile Card Bottom Metrics */}
                <div className="mt-4 pt-3 border-t border-slate-800/80 grid grid-cols-2 gap-3">
                  <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/60">
                    <div className="flex items-center gap-1.5 text-blue-400 text-xs mb-1">
                      <Building2 className="w-3.5 h-3.5" />
                      <span className="font-semibold text-slate-200">10+ Client Orgs</span>
                    </div>
                    <p className="text-xs text-slate-400 font-mono">Deanta · UDS · Denave</p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/60">
                    <div className="flex items-center gap-1.5 text-indigo-400 text-xs mb-1">
                      <Server className="w-3.5 h-3.5" />
                      <span className="font-semibold text-slate-200">2 Live Apps</span>
                    </div>
                    <p className="text-xs text-slate-400 font-mono">Smart & Collman Play Store</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enterprise Client Trust Ribbon */}
        <div className="mt-20 pt-8 border-t border-slate-800/70">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <Layers className="w-4 h-4 text-blue-400" />
              <span>10+ Client Implementations Handled at CAFS Infotech:</span>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-slate-300">
              {PORTFOLIO_DATA.clients.map((client, idx) => (
                <span key={client.name} className="inline-flex items-center gap-1.5">
                  <span className="font-semibold text-slate-100 hover:text-blue-400 transition-colors font-sans">
                    {client.name}
                  </span>
                  {idx < PORTFOLIO_DATA.clients.length - 1 && (
                    <span aria-hidden="true" className="text-slate-700">·</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
