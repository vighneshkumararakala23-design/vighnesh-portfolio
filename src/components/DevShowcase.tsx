import React from 'react';
import { 
  Github, 
  Linkedin, 
  Code2, 
  Terminal, 
  ExternalLink, 
  Flame, 
  GitBranch, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { personalProfile, devProfileStats } from '../data/portfolioData';

export const DevShowcase: React.FC = () => {
  return (
    <section className="py-20 md:py-28 relative border-t border-slate-800/80 light:border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <p className="text-xs font-mono font-semibold tracking-wider uppercase text-cyan-400 light:text-cyan-600 mb-2">
            07. Development & Practice
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white light:text-slate-900">
            Building, Learning & Exploring
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 light:text-slate-600">
            Consistency in algorithm problem-solving, clean code development, and version control discipline.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Authentic Practice Highlights & Stats */}
          <div className="lg:col-span-6 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {devProfileStats.focusAreas.map((item) => (
                <div
                  key={item.title}
                  className="glass-card p-5 rounded-2xl bg-slate-900/60 light:bg-white border border-slate-800 light:border-slate-200"
                >
                  <span className="text-xs font-mono uppercase text-slate-400 light:text-slate-500">
                    {item.title}
                  </span>
                  <div className="text-lg font-bold text-white light:text-slate-900 mt-1 mb-1">
                    {item.detail}
                  </div>
                  <p className="text-xs text-slate-400 light:text-slate-600">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="glass-card p-6 rounded-2xl bg-slate-900/60 light:bg-white border border-slate-800 light:border-slate-200">
              <div className="flex items-center gap-2 mb-3">
                <Flame className="w-5 h-5 text-amber-400" />
                <h3 className="text-base font-bold text-white light:text-slate-900">
                  Engineering Principles
                </h3>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 light:text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 light:text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span>Emphasis on foundational Data Structures & Algorithms using C++ & Python.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 light:text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span>Version-controlled iterative development with descriptive Git commits.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 light:text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span>Bridging conceptual Machine Learning models with user-friendly web interfaces.</span>
                </li>
              </ul>
            </div>

            {/* Profile Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={personalProfile.contacts.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-slate-900 light:bg-slate-800 hover:bg-slate-800 light:hover:bg-slate-700 border border-slate-700 light:border-slate-600 rounded-xl transition-all shadow-sm"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Profile</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>

              <a
                href={personalProfile.contacts.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#0A66C2] hover:bg-[#004182] rounded-xl transition-all shadow-sm"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn Profile</span>
                <ExternalLink className="w-3.5 h-3.5 text-white/80" />
              </a>

              <a
                href={personalProfile.contacts.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-amber-300 bg-amber-950/40 hover:bg-amber-900/50 light:bg-amber-100 light:text-amber-900 light:hover:bg-amber-200 border border-amber-800/50 light:border-amber-300 rounded-xl transition-all shadow-sm"
              >
                <Code2 className="w-4 h-4 text-amber-400" />
                <span>LeetCode Profile</span>
                <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Code & Terminal Sandbox */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden border border-slate-800 light:border-slate-200 bg-slate-950 shadow-2xl">
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800 light:border-slate-200 bg-slate-900/90 light:bg-slate-100">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 light:text-slate-600">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>vighnesh_profile.py</span>
                </div>
                <div className="text-[11px] font-mono text-emerald-400">
                  Python 3.12
                </div>
              </div>

              {/* Code Snippet */}
              <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto text-slate-300">
                <pre>
                  <code>
<span className="text-violet-400">class</span> <span className="text-amber-300">Developer</span>:{"\n"}
    <span className="text-violet-400">def</span> <span className="text-blue-400">__init__</span>(self):{"\n"}
        self.name = <span className="text-emerald-400">"{personalProfile.name}"</span>{"\n"}
        self.degree = <span className="text-emerald-400">"B.Tech CSE (AI & ML)"</span>{"\n"}
        self.university = <span className="text-emerald-400">"Marwadi University"</span>{"\n"}
        self.cgpa = <span className="text-cyan-400">{personalProfile.cgpa}</span>{"\n"}
        self.languages = [<span className="text-emerald-400">"Python"</span>, <span className="text-emerald-400">"C++"</span>]{"\n"}
        self.interests = [{"\n"}
            <span className="text-emerald-400">"Artificial Intelligence"</span>,{"\n"}
            <span className="text-emerald-400">"Machine Learning"</span>,{"\n"}
            <span className="text-emerald-400">"Data Analytics"</span>,{"\n"}
            <span className="text-emerald-400">"Software Development"</span>{"\n"}
        ]{"\n"}
{"\n"}
    <span className="text-violet-400">def</span> <span className="text-blue-400">mission</span>(self):{"\n"}
        <span className="text-violet-400">return</span> <span className="text-emerald-400">"Transforming algorithms into impactful solutions."</span>{"\n"}
{"\n"}
vighnesh = <span className="text-amber-300">Developer</span>(){"\n"}
<span className="text-blue-400">print</span>(f<span className="text-emerald-400">"Ready to innovate: &#123;vighnesh.mission()&#125;"</span>)
                  </code>
                </pre>
              </div>

              {/* Terminal Output */}
              <div className="px-5 py-3 border-t border-slate-800/80 bg-slate-900/60 font-mono text-xs text-slate-400 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400">&gt;&gt;&gt;</span>
                  <span className="text-cyan-300">Ready to innovate: Transforming algorithms into impactful solutions.</span>
                </div>
                <span className="text-[11px] text-slate-500">exit(0)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
