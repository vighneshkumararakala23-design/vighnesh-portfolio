import React, { useState } from 'react';
import { 
  Code, 
  BrainCircuit, 
  Layout, 
  Database, 
  Wrench, 
  Layers, 
  Terminal, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Programming', 'AI & ML', 'Development', 'Database', 'Tools & Platforms'];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Programming':
        return Code;
      case 'AI & ML':
        return BrainCircuit;
      case 'Development':
        return Layout;
      case 'Database':
        return Database;
      case 'Tools & Platforms':
        return Wrench;
      default:
        return Layers;
    }
  };

  const filteredCategories = selectedCategory === 'All'
    ? skillsData
    : skillsData.filter((item) => item.category === selectedCategory);

  return (
    <section id="skills" className="py-16 md:py-24 relative border-t border-slate-800/80 light:border-slate-200/80 bg-slate-950/40 light:bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-12">
          <div className="max-w-2xl">
            <p className="text-xs font-mono font-semibold tracking-wider uppercase text-cyan-400 light:text-cyan-600 mb-2">
              02. Technical Competencies
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white light:text-slate-900">
              Skills & Toolset
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-400 light:text-slate-600">
              Structured technical proficiencies across algorithms, artificial intelligence frameworks, web technologies, and developer tooling.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900/80 light:bg-slate-200/70 rounded-xl border border-slate-800 light:border-slate-300">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm'
                    : 'text-slate-400 light:text-slate-700 hover:text-white light:hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((group) => {
            const Icon = getCategoryIcon(group.category);
            return (
              <div
                key={group.category}
                className="glass-card rounded-2xl p-6 bg-slate-900/60 light:bg-white border border-slate-800 light:border-slate-200 hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-cyan-950/60 light:bg-cyan-50 border border-cyan-800/40 light:border-cyan-200 flex items-center justify-center text-cyan-400 light:text-cyan-600">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-white light:text-slate-900">
                          {group.category}
                        </h3>
                        <span className="text-xs text-slate-400 light:text-slate-500">
                          {group.skills.length} competencies
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 light:text-slate-600 mb-6 leading-relaxed">
                    {group.description}
                  </p>

                  <div className="space-y-3">
                    {group.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="group/skill flex items-center justify-between p-2.5 rounded-xl bg-slate-950/60 light:bg-slate-50 border border-slate-800/80 light:border-slate-200 hover:border-cyan-500/40 transition-colors"
                      >
                        <div className="flex items-center gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 light:text-cyan-600 opacity-80" />
                          <span className="text-sm font-medium text-slate-200 light:text-slate-800 group-hover/skill:text-cyan-300 light:group-hover/skill:text-cyan-700 transition-colors">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-xs font-mono text-slate-400 light:text-slate-500 group-hover/skill:text-slate-300 light:group-hover/skill:text-slate-700">
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/60 light:border-slate-200 flex items-center justify-between text-xs font-mono text-slate-500 light:text-slate-400">
                  <span>Continuous Practice</span>
                  <span className="text-cyan-400 light:text-cyan-600">Verified Basics</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Context Banner */}
        <div className="mt-12 p-5 rounded-2xl bg-gradient-to-r from-slate-900/90 to-slate-950/90 light:from-slate-100 light:to-white border border-slate-800 light:border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-cyan-400 flex-shrink-0" />
            <p className="text-xs sm:text-sm text-slate-300 light:text-slate-700">
              <span className="font-semibold text-white light:text-slate-900">Honest Evaluation:</span> No fabricated percentage metrics. Every technology listed represents verified coursework, active projects, or coding practice.
            </p>
          </div>
          <a
            href="#projects"
            className="text-xs font-mono font-medium text-cyan-400 light:text-cyan-600 hover:underline whitespace-nowrap flex-shrink-0"
          >
            See skills in projects &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};
