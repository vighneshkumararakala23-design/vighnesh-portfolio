import React from 'react';
import { ArrowDown, Download, Eye, Terminal, Sparkles, Code2, Cpu } from 'lucide-react';
import { personalProfile } from '../data/portfolioData';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] md:min-h-screen pt-24 md:pt-32 pb-16 md:pb-24 flex items-center justify-center overflow-hidden bg-grid-pattern"
    >
      {/* Subtle ambient gradient glow background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] md:w-[750px] h-[350px] md:h-[450px] bg-gradient-to-tr from-cyan-600/15 via-blue-600/10 to-violet-600/15 blur-[120px] rounded-full"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 right-10 w-72 h-72 bg-emerald-500/10 blur-[100px] rounded-full"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Status indicator & greeting */}
            <div className="flex items-center gap-3 text-xs md:text-sm font-medium text-slate-400 light:text-slate-600 mb-4">
              <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-slate-900/80 light:bg-slate-100 border border-slate-800 light:border-slate-300 text-cyan-400 light:text-cyan-700">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for Summer 2026 Internships
              </span>
              <span aria-hidden="true" className="text-slate-600 light:text-slate-300">·</span>
              <span>Rajkot, India</span>
            </div>

            <p className="text-base sm:text-lg font-medium text-cyan-400 light:text-cyan-600 mb-2">
              Hi, I'm Vighnesh Kumar 👋
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white light:text-slate-950 leading-[1.12] mb-6 max-w-2xl text-balance">
              Building Intelligent Solutions with <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">AI & Code</span>.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 light:text-slate-700 leading-relaxed mb-8 max-w-2xl">
              {personalProfile.heroSubheading}
            </p>

            {/* Clean unboxed metadata strip */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs md:text-sm text-slate-400 light:text-slate-500 mb-8 font-mono">
              <span>B.Tech CSE (AI & ML)</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Marwadi University</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>CGPA: 8.8</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Python & C++</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 light:bg-cyan-600 light:text-white light:hover:bg-cyan-700 rounded-xl transition-all shadow-lg shadow-cyan-500/20 whitespace-nowrap active:scale-[0.98]"
              >
                <Code2 className="w-4 h-4" />
                <span>View My Projects</span>
              </a>

              <a
                href="/resume/Vighnesh_Kumar_Arakala_ATS_Resume.pdf"
                download="Vighnesh_Kumar_Arakala_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-slate-200 light:text-slate-800 bg-slate-900/90 light:bg-slate-100 hover:bg-slate-800 light:hover:bg-slate-200 border border-slate-700/80 light:border-slate-300 rounded-xl transition-all whitespace-nowrap active:scale-[0.98]"
              >
                <Download className="w-4 h-4 text-cyan-400 light:text-cyan-600" />
                <span>Download Resume</span>
              </a>

              <a
                href="/resume/Vighnesh_Kumar_Arakala_ATS_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3 text-sm font-medium text-slate-300 light:text-slate-700 hover:text-white light:hover:text-slate-900 bg-slate-900/60 light:bg-slate-100 hover:bg-slate-800 light:hover:bg-slate-200 border border-slate-800 light:border-slate-300 rounded-xl transition-colors whitespace-nowrap active:scale-[0.98]"
              >
                <Eye className="w-4 h-4 text-cyan-400 light:text-cyan-600" />
                <span>View Resume</span>
              </a>
            </div>
          </div>

          {/* Right Column: AI / Developer Visual */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-none">
              {/* Glowing halo behind card */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-indigo-500/20 rounded-3xl blur-2xl transform -rotate-1"
              />

              {/* Main Visual Container */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 light:border-slate-200 bg-slate-900/80 light:bg-white shadow-2xl">
                {/* Visual Window Header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800 light:border-slate-200 bg-slate-950/60 light:bg-slate-50">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 light:text-slate-600">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    <span>vighnesh@marwadi-ai:~$</span>
                  </div>
                  <div className="text-[11px] font-mono text-cyan-400/80 light:text-cyan-600">
                    AI/ML Studio
                  </div>
                </div>

                {/* Hero AI Graphic */}
                <div className="relative aspect-square sm:aspect-[4/3] lg:aspect-square w-full overflow-hidden bg-slate-950">
                  <img
                    src={personalProfile.heroVisual}
                    alt="AI and Machine Learning Developer Space"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent pointer-events-none" />

                  {/* Floating Micro Badge - Python & C++ */}
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-slate-900/90 light:bg-white/95 backdrop-blur-md border border-slate-700/60 light:border-slate-200 shadow-lg">
                    <div className="flex items-center justify-between text-xs mb-1.5">
                      <div className="flex items-center gap-1.5 font-semibold text-white light:text-slate-900">
                        <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Core Specialization</span>
                      </div>
                      <span className="text-[11px] font-mono text-cyan-400 light:text-cyan-600 font-medium">
                        Marwadi Univ · 2025–2029
                      </span>
                    </div>
                    <p className="text-[12px] text-slate-300 light:text-slate-600 leading-snug">
                      Focusing on neural models, algorithmic problem solving in C++, and practical AI applications.
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating tech badge 1 */}
              <div className="hidden sm:flex items-center gap-2 absolute -top-4 -left-4 px-3.5 py-2 rounded-xl bg-slate-900/90 light:bg-white/95 border border-slate-700 light:border-slate-200 shadow-xl text-xs font-mono text-cyan-300 light:text-cyan-700">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Python &middot; C++ &middot; ML</span>
              </div>

              {/* Floating tech badge 2 */}
              <div className="hidden sm:flex items-center gap-2 absolute -bottom-4 -right-4 px-3.5 py-2 rounded-xl bg-slate-900/90 light:bg-white/95 border border-slate-700 light:border-slate-200 shadow-xl text-xs font-mono text-emerald-400 light:text-emerald-700">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>CGPA 8.8 / 10.0</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll down indicator */}
        <div className="mt-16 flex justify-center">
          <a
            href="#about"
            aria-label="Scroll down to About section"
            className="flex flex-col items-center gap-2 text-xs font-mono text-slate-500 hover:text-cyan-400 transition-colors"
          >
            <span>DISCOVER JOURNEY</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};
