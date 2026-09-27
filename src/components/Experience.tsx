import React from 'react';
import { Briefcase, Trophy, Calendar, MapPin, CheckCircle, Award } from 'lucide-react';
import { experienceData, achievementsData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-28 relative border-t border-slate-800/80 light:border-slate-200/80 bg-slate-950/40 light:bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <p className="text-xs font-mono font-semibold tracking-wider uppercase text-cyan-400 light:text-cyan-600 mb-2">
            04. Experience & Milestones
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white light:text-slate-900">
            Work Experience & Activities
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 light:text-slate-600">
            Hands-on internships, industry simulations, technical workshops, and coding communities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Vertical Timeline for Experience */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-8">
              <Briefcase className="w-5 h-5 text-cyan-400 light:text-cyan-600" />
              <h3 className="text-xl font-bold text-white light:text-slate-900">
                Internship Experience
              </h3>
            </div>

            <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-800 light:border-slate-300 space-y-10">
              {experienceData.map((item) => (
                <div key={item.id} className="relative group">
                  {/* Timeline Dot Node */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-slate-950 light:bg-white border-2 border-cyan-400 light:border-cyan-600 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 light:bg-cyan-600" />
                  </div>

                  {/* Card Container */}
                  <div className="glass-card p-6 sm:p-7 rounded-2xl bg-slate-900/60 light:bg-white border border-slate-800 light:border-slate-200 hover:border-slate-700 transition-all">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-mono font-medium text-cyan-400 light:text-cyan-700 bg-cyan-950/60 light:bg-cyan-50 px-2.5 py-0.5 rounded border border-cyan-800/40 light:border-cyan-200">
                        {item.type}
                      </span>
                      <div className="flex items-center gap-3 text-xs font-mono text-slate-400 light:text-slate-500">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {item.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {item.location}
                        </span>
                      </div>
                    </div>

                    <h4 className="text-lg font-bold text-white light:text-slate-900 mb-1">
                      {item.role}
                    </h4>
                    <p className="text-sm font-semibold text-slate-300 light:text-slate-700 mb-3">
                      {item.company}
                    </p>

                    <p className="text-sm text-slate-300 light:text-slate-600 leading-relaxed mb-4">
                      {item.description}
                    </p>

                    <div className="space-y-2 mb-4">
                      {item.keyContributions.map((point, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-400 light:text-slate-600">
                          <CheckCircle className="w-4 h-4 text-cyan-400 light:text-cyan-600 flex-shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80 light:border-slate-200">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-950 light:bg-slate-100 text-slate-400 light:text-slate-700 border border-slate-800/60 light:border-slate-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Achievements & Activities Subsection */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-8">
              <Trophy className="w-5 h-5 text-amber-400 light:text-amber-600" />
              <h3 className="text-xl font-bold text-white light:text-slate-900">
                Achievements & Activities
              </h3>
            </div>

            <div className="space-y-4">
              {achievementsData.map((act) => (
                <div
                  key={act.id}
                  className="glass-card p-5 rounded-2xl bg-slate-900/60 light:bg-white border border-slate-800 light:border-slate-200 hover:border-slate-700 transition-all"
                >
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 light:text-slate-500 mb-2">
                    <span className="text-cyan-400 light:text-cyan-600 font-medium">
                      {act.category}
                    </span>
                    <span>{act.date}</span>
                  </div>

                  <h4 className="text-base font-bold text-white light:text-slate-900 mb-1">
                    {act.title}
                  </h4>
                  <p className="text-xs text-slate-400 light:text-slate-500 mb-2 font-medium">
                    {act.organization}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300 light:text-slate-600 leading-relaxed">
                    {act.description}
                  </p>
                </div>
              ))}

              {/* Editable placeholder card note */}
              <div className="p-4 rounded-xl border border-dashed border-slate-800 light:border-slate-300 bg-slate-950/40 light:bg-slate-50 text-center">
                <p className="text-xs text-slate-400 light:text-slate-500">
                  Easily add more hackathons, club lead roles, and technical events in <code className="text-cyan-400 font-mono">portfolioData.ts</code>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
