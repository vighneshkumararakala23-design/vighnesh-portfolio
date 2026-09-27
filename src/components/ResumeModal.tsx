import React from 'react';
import { X, Download, ExternalLink, Printer, CheckCircle, GraduationCap, Briefcase, Award } from 'lucide-react';
import { personalProfile, experienceData, educationData, skillsData, certificationsData } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md">
      <div className="relative w-full max-w-4xl bg-slate-900 light:bg-white rounded-2xl border border-slate-700 light:border-slate-300 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 light:border-slate-200 bg-slate-950/70 light:bg-slate-50">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
            <h3 className="text-base font-bold text-white light:text-slate-900">
              Resume Preview &middot; {personalProfile.name}
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="/resume/Vighnesh_Kumar_Arakala_ATS_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 light:text-slate-700 hover:text-white light:hover:text-slate-900 bg-slate-800/80 light:bg-slate-200 rounded-lg transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5 text-cyan-400 light:text-cyan-600" />
              <span>Open PDF</span>
            </a>
            <a
              href="/resume/Vighnesh_Kumar_Arakala_ATS_Resume.pdf"
              download="Vighnesh_Kumar_Arakala_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 light:bg-cyan-600 light:text-white rounded-lg transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white light:text-slate-600 light:hover:text-slate-900 hover:bg-slate-800 light:hover:bg-slate-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body: Clean Document View */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-200 light:text-slate-800 bg-slate-950/40 light:bg-white">
          {/* Header */}
          <div className="border-b border-slate-800 light:border-slate-200 pb-5">
            <h1 className="text-2xl sm:text-3xl font-bold text-white light:text-slate-900 tracking-tight">
              {personalProfile.name.toUpperCase()}
            </h1>
            <p className="text-sm font-semibold text-cyan-400 light:text-cyan-700 mt-1">
              B.Tech CSE (AI & ML) student at {personalProfile.university}
            </p>
            <p className="text-xs text-slate-400 light:text-slate-500 mt-1">
              {personalProfile.location} &middot; {personalProfile.contacts.universityEmail}
            </p>
          </div>

          {/* Summary */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 light:text-cyan-700 border-b border-slate-800 light:border-slate-200 pb-1 mb-2">
              Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 light:text-slate-700 leading-relaxed">
              {personalProfile.aboutBio}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 light:text-cyan-700 border-b border-slate-800 light:border-slate-200 pb-1 mb-3">
              Education
            </h2>
            <div className="space-y-3">
              {educationData.map((edu) => (
                <div key={edu.id} className="text-xs sm:text-sm">
                  <div className="flex justify-between items-baseline font-semibold text-white light:text-slate-900">
                    <span>{edu.institution}</span>
                    <span className="text-xs font-mono text-slate-400 light:text-slate-500 font-normal">
                      {edu.period}
                    </span>
                  </div>
                  <div className="text-xs text-cyan-400/90 light:text-cyan-800">
                    {edu.degree} &middot; <span className="font-semibold">{edu.scoreType}: {edu.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 light:text-cyan-700 border-b border-slate-800 light:border-slate-200 pb-1 mb-3">
              Technical Proficiencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {skillsData.map((group) => (
                <div key={group.category} className="p-2.5 rounded-lg bg-slate-900/60 light:bg-slate-50 border border-slate-800/80 light:border-slate-200">
                  <span className="font-semibold text-white light:text-slate-900 block mb-1">
                    {group.category}:
                  </span>
                  <span className="text-slate-300 light:text-slate-700">
                    {group.skills.map(s => s.name).join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 light:text-cyan-700 border-b border-slate-800 light:border-slate-200 pb-1 mb-3">
              Work Experience & Internships
            </h2>
            <div className="space-y-4">
              {experienceData.map((exp) => (
                <div key={exp.id} className="text-xs sm:text-sm">
                  <div className="flex justify-between items-baseline font-semibold text-white light:text-slate-900">
                    <span>{exp.role} &ndash; {exp.company}</span>
                    <span className="text-xs font-mono text-slate-400 light:text-slate-500 font-normal">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 light:text-slate-600 mt-1 mb-2">
                    {exp.description}
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-xs text-slate-400 light:text-slate-600">
                    {exp.keyContributions.map((pt, idx) => (
                      <li key={idx}>{pt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 light:text-cyan-700 border-b border-slate-800 light:border-slate-200 pb-1 mb-2">
              Certifications & Simulations
            </h2>
            <div className="flex flex-wrap gap-2 text-xs">
              {certificationsData.map((c) => (
                <span
                  key={c.id}
                  className="px-2.5 py-1 rounded bg-slate-900/80 light:bg-slate-100 border border-slate-800 light:border-slate-300 text-slate-300 light:text-slate-700"
                >
                  {c.title} ({c.organization})
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
