import React, { useState } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  Code2, 
  FolderGit2, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { 
  initialSkillRoadmap, 
  SkillMilestone, 
  SkillStatus 
} from '../data/portfolioData';

export const CareerRoadmap: React.FC = () => {
  // Store expanded item IDs. Default to expanding the current learning items (DSA, SQL, Web Dev)
  const [expandedIds, setExpandedIds] = useState<Record<string | number, boolean>>({
    4: true, // Data Structures & Algorithms
  });

  const toggleExpand = (id: string | number) => {
    setExpandedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const getStatusBadge = (status: SkillStatus, label: string) => {
    switch (status) {
      case 'completed':
        return (
          <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 light:text-emerald-700 font-medium">
            <span>✓</span>
            <span>Completed</span>
          </span>
        );
      case 'current':
        return (
          <span className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 light:text-cyan-700 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>Currently Learning</span>
          </span>
        );
      case 'next':
        return (
          <span className="inline-flex items-center gap-1.5 text-xs font-mono text-indigo-400 light:text-indigo-700 font-medium">
            <span>&rarr;</span>
            <span>Next</span>
          </span>
        );
      case 'future':
        return (
          <span className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 light:text-slate-500 font-normal">
            <span>&compfn;</span>
            <span>Future</span>
          </span>
        );
      case 'long-term':
        return (
          <span className="inline-flex items-center gap-1.5 text-xs font-mono text-purple-400 light:text-purple-700 font-semibold">
            <span>&#9671;</span>
            <span>Long-Term Goal</span>
          </span>
        );
    }
  };

  const getNodeIndicator = (status: SkillStatus, isExpanded: boolean) => {
    switch (status) {
      case 'completed':
        return (
          <div className="w-3.5 h-3.5 rounded-full bg-emerald-500/20 border-2 border-emerald-400 light:border-emerald-600 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 light:bg-emerald-600" />
          </div>
        );
      case 'current':
        return (
          <div className="relative w-3.5 h-3.5 rounded-full bg-cyan-500/30 border-2 border-cyan-400 light:border-cyan-600 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 light:bg-cyan-600" />
            <span className="absolute -inset-1 rounded-full border border-cyan-400/40 animate-ping pointer-events-none" />
          </div>
        );
      case 'next':
        return (
          <div className="w-3.5 h-3.5 rounded-full bg-slate-950 light:bg-white border-2 border-indigo-400 light:border-indigo-600 flex items-center justify-center">
            <div className="w-1 h-1 rounded-full bg-indigo-400 light:bg-indigo-600" />
          </div>
        );
      case 'future':
        return (
          <div className="w-3 h-3 rounded-full bg-slate-950 light:bg-white border border-slate-700 light:border-slate-400" />
        );
      case 'long-term':
        return (
          <div className="w-3.5 h-3.5 rotate-45 bg-purple-500/20 border border-purple-400 light:border-purple-600 flex items-center justify-center">
            <div className="w-1 h-1 bg-purple-400 light:bg-purple-600" />
          </div>
        );
    }
  };

  return (
    <section id="roadmap" className="py-16 md:py-24 relative border-t border-slate-800/80 light:border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 sm:mb-14">
          <p className="text-xs font-mono font-semibold tracking-wider uppercase text-cyan-400 light:text-cyan-600 mb-2">
            04. Career Roadmap
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white light:text-slate-900">
            My Career Roadmap
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 light:text-slate-600 leading-relaxed max-w-2xl">
            A minimal vertical sequence tracking my skill progression from programming foundations to industry readiness.
          </p>
        </div>

        {/* Vertical Timeline Structure */}
        <div className="relative pl-6 sm:pl-8 ml-2 sm:ml-4 border-l border-slate-800 light:border-slate-300 space-y-10 sm:space-y-12">
          {initialSkillRoadmap.map((item) => {
            const isExpanded = !!expandedIds[item.id];

            return (
              <div key={item.id} className="relative group">
                {/* Node on the Left Vertical Line */}
                <div 
                  className="absolute -left-[31px] sm:-left-[39px] top-1 z-10 flex items-center justify-center cursor-pointer"
                  onClick={() => toggleExpand(item.id)}
                  title={`Toggle ${item.skillName}`}
                >
                  {getNodeIndicator(item.status, isExpanded)}
                </div>

                {/* Content on the Right */}
                <div 
                  onClick={() => toggleExpand(item.id)}
                  className="cursor-pointer group-hover:translate-x-0.5 transition-transform"
                >
                  {/* Step Number & Status Line */}
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <span className="font-mono text-xs text-slate-500 light:text-slate-400 font-bold">
                      {item.stepNumber} &mdash;
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white light:text-slate-900 group-hover:text-cyan-400 light:group-hover:text-cyan-600 transition-colors">
                      {item.skillName}
                    </h3>
                    <div className="ml-auto flex items-center gap-2">
                      {getStatusBadge(item.status, item.statusLabel)}
                      <span className="text-slate-600 light:text-slate-400">
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </span>
                    </div>
                  </div>

                  {/* 2-3 Short Lines Describing the Journey */}
                  <div className="text-sm sm:text-base text-slate-300 light:text-slate-600 leading-relaxed mt-1 max-w-2xl whitespace-pre-line">
                    {item.description}
                  </div>
                </div>

                {/* Expanded Details View (Subtle & Minimal, No Heavy Cards) */}
                {isExpanded && (
                  <div className="mt-4 pt-4 border-t border-slate-800/80 light:border-slate-200/80 space-y-3 max-w-2xl text-xs sm:text-sm">
                    {/* Related Skills */}
                    {item.skills && item.skills.length > 0 && (
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="font-mono text-[11px] text-slate-400 light:text-slate-500 mr-1 flex items-center gap-1">
                          <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                          <span>Key Topics:</span>
                        </span>
                        {item.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-0.5 font-mono text-[11px] rounded bg-slate-900 light:bg-slate-100 text-slate-300 light:text-slate-700 border border-slate-800 light:border-slate-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Related Project */}
                    {item.relatedProject && (
                      <div className="flex items-center gap-2 text-slate-300 light:text-slate-600">
                        <FolderGit2 className="w-3.5 h-3.5 text-cyan-400 light:text-cyan-600 flex-shrink-0" />
                        <span className="font-mono text-[11px] text-slate-400 light:text-slate-500">Related Project:</span>
                        <span className="font-medium text-white light:text-slate-800">{item.relatedProject}</span>
                      </div>
                    )}

                    {/* Next Learning Stage */}
                    {item.nextSkill && (
                      <div className="flex items-center gap-2 text-slate-400 light:text-slate-500 font-mono text-xs">
                        <ArrowRight className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0" />
                        <span className="text-[11px] text-slate-400">Next Stage:</span>
                        <span className="text-indigo-300 light:text-indigo-600 font-semibold">{item.nextSkill}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
