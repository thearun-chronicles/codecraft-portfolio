import React, { useState } from 'react';
import { Server, Database, Layers, Wrench, Search, Terminal } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Technologies', icon: Terminal },
    { id: 'backend', label: 'PHP & CodeIgniter', icon: Server },
    { id: 'database', label: 'MySQL & Database', icon: Database },
    { id: 'product', label: 'HRMS & CRM Workflows', icon: Layers },
    { id: 'tools', label: 'Full Stack & Deployment', icon: Wrench },
  ];

  // Flatten skills with category metadata
  const allSkills = PORTFOLIO_DATA.skillCategories.flatMap((cat) =>
    cat.skills.map((skill) => ({
      ...skill,
      categoryId: cat.id,
      categoryTitle: cat.title,
    }))
  );

  const filteredSkills = allSkills.filter((skill) => {
    const matchesCategory = selectedCategory === 'all' || skill.categoryId === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-24 bg-slate-950/70 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Anti-Slop Discipline */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-blue-400 uppercase mb-3">
              <span>Technical Competencies</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Production Tested</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
              Technical Skills & Product Experience
            </h2>
            <p className="mt-3 text-base text-slate-400">
              Evaluated by real-world enterprise delivery at CAFS Infotech, covering CodeIgniter MVC, REST APIs, dynamic payroll, mobile backends, and security integrations.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search stack, e.g. CodeIgniter, Payroll, API..."
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-slate-900 border border-slate-800 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-slate-900/60 border border-slate-800/90 hover:border-slate-700 transition-all duration-200 flex flex-col justify-between shadow-lg"
            >
              <div>
                {/* Top Row: Unboxed Category & Experience Context */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono text-blue-400 uppercase tracking-wider">
                    {skill.categoryTitle.split('&')[0].trim()}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                    {skill.experience}
                  </span>
                </div>

                {/* Skill Name */}
                <h3 className="text-lg font-bold text-white font-display group-hover:text-blue-400 transition-colors">
                  {skill.name}
                </h3>

                {/* Production Role Context */}
                <p className="mt-2.5 text-xs text-slate-300 leading-relaxed font-normal">
                  {skill.description}
                </p>
              </div>

              {/* Skill Tags & Competency Level */}
              <div className="mt-5 pt-4 border-t border-slate-800/80">
                <div className="flex items-center justify-between text-[11px] mb-2.5">
                  <span className="text-slate-400 font-medium">Domain Proficiency</span>
                  <span className="font-semibold text-slate-200">{skill.level}</span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty Search Fallback */}
        {filteredSkills.length === 0 && (
          <div className="text-center py-16 px-4 bg-slate-900/40 rounded-2xl border border-slate-800">
            <p className="text-base text-slate-300 font-medium">No skills match your search query.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-3 text-xs text-blue-400 hover:underline cursor-pointer"
            >
              Reset filters & view all skills
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
