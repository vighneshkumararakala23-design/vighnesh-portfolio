import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookCheck } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 md:py-28 relative border-t border-slate-800/80 light:border-slate-200/80 bg-slate-950/40 light:bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <p className="text-xs font-mono font-semibold tracking-wider uppercase text-cyan-400 light:text-cyan-600 mb-2">
            06. Academic Background
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white light:text-slate-900">
            Education Timeline
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 light:text-slate-600">
            Formal foundations in Artificial Intelligence & Machine Learning engineering, mathematics, and computer sciences.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-800 light:border-slate-300 max-w-4xl space-y-10">
          {educationData.map((item) => (
            <div key={item.id} className="relative group">
              {/* Timeline Dot */}
              <div
                className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-slate-950 light:bg-white border-2 flex items-center justify-center ${
                  item.isCurrent
                    ? 'border-cyan-400 light:border-cyan-600 shadow-md shadow-cyan-500/20'
                    : 'border-slate-600 light:border-slate-400'
                }`}
              >
                {item.isCurrent && (
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 light:bg-cyan-600 animate-ping" />
                )}
              </div>

              {/* Card Container */}
              <div className="glass-card p-6 sm:p-7 rounded-2xl bg-slate-900/60 light:bg-white border border-slate-800 light:border-slate-200 hover:border-slate-700 transition-all">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-cyan-400 light:text-cyan-600" />
                    <span className="text-xs font-mono text-cyan-400 light:text-cyan-600 font-semibold uppercase tracking-wider">
                      {item.isCurrent ? 'Undergraduate Degree (Active)' : 'Foundational Education'}
                    </span>
                  </div>

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

                <h3 className="text-xl font-bold text-white light:text-slate-900 mb-1">
                  {item.institution}
                </h3>
                <h4 className="text-sm sm:text-base font-semibold text-slate-300 light:text-slate-700 mb-3">
                  {item.degree}
                </h4>

                {/* Score badge / standing */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-950/80 light:bg-slate-100 border border-slate-800 light:border-slate-300 text-xs font-mono mb-4">
                  <Award className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-slate-400 light:text-slate-600">{item.scoreType}:</span>
                  <span className="font-bold text-emerald-400 light:text-emerald-700">
                    {item.score}
                  </span>
                </div>

                <p className="text-sm text-slate-300 light:text-slate-600 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Key Coursework */}
                {item.coursework && item.coursework.length > 0 && (
                  <div className="pt-3 border-t border-slate-800/80 light:border-slate-200">
                    <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 light:text-slate-500 mb-2">
                      <BookCheck className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Relevant Core Coursework:</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {item.coursework.map((course) => (
                        <span
                          key={course}
                          className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-950 light:bg-slate-100 text-slate-400 light:text-slate-700 border border-slate-800/60 light:border-slate-300"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
