import React, { useState } from 'react';
import { ExternalLink, Github, Layers, Sparkles, X, ChevronRight, Info } from 'lucide-react';
import { projectsData, Project } from '../data/portfolioData';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = ['All', 'AI & ML', 'Web Development'];

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 md:py-28 relative border-t border-slate-800/80 light:border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs font-mono font-semibold tracking-wider uppercase text-cyan-400 light:text-cyan-600 mb-2">
              03. Applied Engineering
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white light:text-slate-900">
              Featured Projects
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-400 light:text-slate-600">
              Practical applications integrating Machine Learning concepts, automated study tools, and responsive software design.
            </p>
          </div>

          {/* Filter Pills / Buttons */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900/80 light:bg-slate-200/70 rounded-xl border border-slate-800 light:border-slate-300">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
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

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card group rounded-2xl overflow-hidden bg-slate-900/60 light:bg-white border border-slate-800 light:border-slate-200 hover:border-cyan-500/50 light:hover:border-cyan-500/50 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Project Image Box */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-950 border-b border-slate-800/80 light:border-slate-200">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80" />

                  {/* Clean unboxed category badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-950/80 light:bg-white/90 backdrop-blur-md border border-slate-800 light:border-slate-200 text-[11px] font-mono font-medium text-cyan-400 light:text-cyan-700">
                    {project.category}
                  </div>

                  {/* Quick details trigger */}
                  <button
                    onClick={() => setActiveProject(project)}
                    className="absolute top-3 right-3 p-1.5 rounded-md bg-slate-950/80 light:bg-white/90 backdrop-blur-md border border-slate-800 light:border-slate-200 text-slate-400 hover:text-white light:text-slate-600 light:hover:text-slate-900 transition-colors"
                    title="View details"
                  >
                    <Info className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white light:text-slate-900 group-hover:text-cyan-400 light:group-hover:text-cyan-600 transition-colors mb-2">
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-300 light:text-slate-600 leading-relaxed mb-5 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <ul className="mb-5 space-y-1.5 text-xs text-slate-400 light:text-slate-500">
                    {project.highlights.slice(0, 2).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-cyan-400 light:text-cyan-600 mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/80 light:border-slate-200/80">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-950 light:bg-slate-100 text-slate-400 light:text-slate-700 border border-slate-800/60 light:border-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 py-4 border-t border-slate-800/80 light:border-slate-200 bg-slate-950/50 light:bg-slate-50 flex items-center justify-between">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-300 light:text-slate-700 hover:text-white light:hover:text-slate-900 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setActiveProject(project)}
                    className="text-xs font-mono text-cyan-400 light:text-cyan-600 hover:underline"
                  >
                    Details
                  </button>

                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 light:text-cyan-600 hover:text-cyan-300 light:hover:text-cyan-700 transition-colors"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Footer Callout */}
        <div className="mt-14 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-4 sm:px-6 rounded-2xl bg-slate-900/60 light:bg-white border border-slate-800 light:border-slate-200">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 light:text-slate-600">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>More practical AI & software experiments on GitHub</span>
            </div>
            <a
              href="https://github.com/vighnesh-arakala"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 light:bg-cyan-600 light:text-white rounded-lg transition-colors whitespace-nowrap"
            >
              <Github className="w-4 h-4" />
              <span>View All Repositories</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Project Details Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="relative w-full max-w-2xl bg-slate-900 light:bg-white rounded-2xl border border-slate-700 light:border-slate-300 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 light:border-slate-200 bg-slate-950/50 light:bg-slate-50">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                <h3 className="text-base font-bold text-white light:text-slate-900">
                  {activeProject.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveProject(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-white light:text-slate-600 light:hover:text-slate-900 hover:bg-slate-800 light:hover:bg-slate-200 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-5">
              <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-950 border border-slate-800 light:border-slate-200">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 light:text-cyan-600 mb-1">
                  Overview & Motivation
                </h4>
                <p className="text-sm text-slate-300 light:text-slate-700 leading-relaxed">
                  {activeProject.longDescription || activeProject.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 light:text-cyan-600 mb-2">
                  Key Architectural Highlights
                </h4>
                <ul className="space-y-2 text-sm text-slate-300 light:text-slate-700">
                  {activeProject.highlights.map((h, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-cyan-400 light:text-cyan-600 font-bold">•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 light:text-cyan-600 mb-2">
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeProject.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs font-mono rounded-md bg-slate-950 light:bg-slate-100 text-slate-300 light:text-slate-800 border border-slate-800 light:border-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 border-t border-slate-800 light:border-slate-200 bg-slate-950/60 light:bg-slate-50 flex items-center justify-between">
              <a
                href={activeProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-200 light:text-slate-800 bg-slate-800/80 light:bg-slate-200 hover:bg-slate-700 rounded-lg transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>View Source Code</span>
              </a>

              <a
                href={activeProject.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 light:bg-cyan-600 light:text-white rounded-lg transition-colors"
              >
                <span>Open Live Project</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
