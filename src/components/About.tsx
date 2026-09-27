import React from 'react';
import { GraduationCap, Award, Calendar, MapPin, Code2, Globe, Sparkles, BookOpen } from 'lucide-react';
import { personalProfile } from '../data/portfolioData';

export const About: React.FC = () => {
  const infoCards = [
    {
      icon: GraduationCap,
      label: "Degree",
      value: "B.Tech CSE AI & ML",
      detail: "Marwadi University",
      color: "text-cyan-400 light:text-cyan-600",
    },
    {
      icon: Award,
      label: "Academic Merit",
      value: `CGPA: ${personalProfile.cgpa}`,
      detail: "Scale of 10.0",
      color: "text-emerald-400 light:text-emerald-600",
    },
    {
      icon: Calendar,
      label: "Expected Graduation",
      value: personalProfile.expectedGraduation,
      detail: personalProfile.graduationPeriod,
      color: "text-indigo-400 light:text-indigo-600",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Rajkot, Gujarat",
      detail: "India",
      color: "text-amber-400 light:text-amber-600",
    },
    {
      icon: Code2,
      label: "Core Languages",
      value: "Python & C++",
      detail: "Problem Solving & ML",
      color: "text-sky-400 light:text-sky-600",
    },
    {
      icon: Globe,
      label: "Languages Spoken",
      value: "4 Languages",
      detail: personalProfile.languages.join(", "),
      color: "text-teal-400 light:text-teal-600",
    },
  ];

  return (
    <section id="about" className="pt-24 pb-16 md:pt-28 md:pb-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 md:mb-12">
          <p className="text-xs font-mono font-semibold tracking-wider uppercase text-cyan-400 light:text-cyan-600 mb-2">
            01. Profile & Background
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white light:text-slate-900">
            About Me
          </h2>
          <div className="mt-3 h-1 w-16 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full" />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Natural Bio & Currently Learning */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card p-6 sm:p-8 rounded-2xl bg-slate-900/60 light:bg-white border border-slate-800 light:border-slate-200">
              <h3 className="text-lg sm:text-xl font-semibold text-white light:text-slate-900 mb-4">
                Aspiring AI/ML Engineer & Problem Solver
              </h3>
              <p className="text-base text-slate-300 light:text-slate-700 leading-relaxed mb-4">
                {personalProfile.aboutBio}
              </p>
              <p className="text-sm text-slate-400 light:text-slate-600 leading-relaxed">
                Whether implementing machine learning models in Python, writing efficient algorithms in C++, or crafting responsive web interfaces, I approach software with a focus on clean logic, measurable performance, and real user utility.
              </p>
            </div>

            {/* Currently Learning Subsection */}
            <div className="glass-card p-6 sm:p-8 rounded-2xl bg-slate-900/60 light:bg-white border border-slate-800 light:border-slate-200">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-5 h-5 text-cyan-400 light:text-cyan-600" />
                <h3 className="text-lg font-semibold text-white light:text-slate-900">
                  Currently Learning & Deepening
                </h3>
              </div>
              <p className="text-sm text-slate-400 light:text-slate-600 mb-5">
                Active subjects and technical domains I am exploring through academic coursework, coding practice, and dedicated self-study:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {personalProfile.currentlyLearning.map((topic, index) => (
                  <div
                    key={topic}
                    className="flex items-center gap-3 p-3 rounded-xl bg-slate-950/60 light:bg-slate-50 border border-slate-800/80 light:border-slate-200"
                  >
                    <span className="flex-shrink-0 w-6 h-6 rounded-lg bg-cyan-950/80 light:bg-cyan-100 flex items-center justify-center text-xs font-mono font-semibold text-cyan-400 light:text-cyan-700">
                      0{index + 1}
                    </span>
                    <span className="text-sm font-medium text-slate-200 light:text-slate-800">
                      {topic}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Key Details & Stats Cards */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-sm font-mono uppercase tracking-wider text-slate-400 light:text-slate-600 px-1">
              Academic & Profile Overview
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {infoCards.map((card) => {
                const IconComponent = card.icon;
                return (
                  <div
                    key={card.label}
                    className="glass-card p-5 rounded-2xl bg-slate-900/60 light:bg-white border border-slate-800 light:border-slate-200 hover:border-slate-700 transition-all flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono text-slate-400 light:text-slate-500 uppercase tracking-wide">
                        {card.label}
                      </span>
                      <IconComponent className={`w-4 h-4 ${card.color}`} />
                    </div>
                    <div>
                      <div className="text-base sm:text-lg font-bold text-white light:text-slate-900 mb-0.5">
                        {card.value}
                      </div>
                      <div className="text-xs text-slate-400 light:text-slate-600 truncate">
                        {card.detail}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Career Interests Card */}
            <div className="glass-card p-5 rounded-2xl bg-slate-900/60 light:bg-white border border-slate-800 light:border-slate-200 mt-4">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-4 h-4 text-cyan-400 light:text-cyan-600" />
                <span className="text-xs font-mono uppercase tracking-wide text-slate-400 light:text-slate-500">
                  Career Interests & Target Paths
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {personalProfile.careerInterests.map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1 text-xs font-medium text-slate-300 light:text-slate-700 bg-slate-950/80 light:bg-slate-100 border border-slate-800 light:border-slate-300 rounded-lg"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
