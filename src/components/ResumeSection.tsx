import React from 'react';
import { Download, Eye, FileText, CheckCircle2 } from 'lucide-react';
import { personalProfile } from '../data/portfolioData';

interface ResumeSectionProps {
  onOpenResumeModal: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenResumeModal }) => {
  return (
    <section className="py-16 md:py-20 relative border-t border-slate-800/80 light:border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-slate-900 via-slate-900/90 to-cyan-950/40 light:from-slate-100 light:via-white light:to-cyan-50 border border-slate-800 light:border-slate-300 p-8 sm:p-12 text-center shadow-2xl">
          {/* Subtle ambient light */}
          <div
            aria-hidden="true"
            className="absolute top-0 right-1/4 w-64 h-64 bg-cyan-500/10 blur-[90px] rounded-full pointer-events-none"
          />

          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <div className="w-12 h-12 rounded-2xl bg-cyan-950/80 light:bg-cyan-100 border border-cyan-800/60 light:border-cyan-200 flex items-center justify-center text-cyan-400 light:text-cyan-700 mb-5">
              <FileText className="w-6 h-6" />
            </div>

            <p className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400 light:text-cyan-700 mb-2">
              Interested in my journey?
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white light:text-slate-900 tracking-tight mb-4">
              Download my Resume
            </h2>

            <p className="text-sm sm:text-base text-slate-300 light:text-slate-600 mb-8 max-w-xl">
              Get a comprehensive summary of my academic coursework at Marwadi University, technical skill set, hands-on projects, and internship experience.
            </p>

            {/* Resume Features */}
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-xs text-slate-400 light:text-slate-600 mb-8 font-mono">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Updated for 2026 Opportunities
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Verified CGPA 8.8
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Standard ATS-Friendly Layout
              </span>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="/resume/Vighnesh_Kumar_Arakala_ATS_Resume.pdf"
                download="Vighnesh_Kumar_Arakala_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 light:bg-cyan-600 light:text-white light:hover:bg-cyan-700 rounded-xl transition-all shadow-lg shadow-cyan-500/20 active:scale-[0.98]"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              <a
                href="/resume/Vighnesh_Kumar_Arakala_ATS_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-200 light:text-slate-800 bg-slate-800/80 light:bg-slate-200/80 hover:bg-slate-700 light:hover:bg-slate-300 border border-slate-700 light:border-slate-300 rounded-xl transition-all active:scale-[0.98]"
              >
                <Eye className="w-4 h-4 text-cyan-400 light:text-cyan-600" />
                <span>View Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
