import React from 'react';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';
import { personalProfile } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 light:border-slate-200 bg-slate-950 light:bg-slate-50 py-12 text-slate-400 light:text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand info */}
          <div className="text-center md:text-left space-y-1">
            <a
              href="#about"
              className="text-base font-bold text-white light:text-slate-900 tracking-tight"
            >
              {personalProfile.name}
            </a>
            <p className="text-xs text-slate-400 light:text-slate-500 font-mono">
              B.Tech CSE (AI & ML) &middot; Marwadi University
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={personalProfile.contacts.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-lg hover:text-white light:hover:text-slate-900 hover:bg-slate-900 light:hover:bg-slate-200 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>

            <a
              href={personalProfile.contacts.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg hover:text-[#0A66C2] hover:bg-slate-900 light:hover:bg-slate-200 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            <a
              href={`mailto:${personalProfile.contacts.universityEmail}`}
              aria-label="Send Email"
              className="p-2 rounded-lg hover:text-cyan-400 light:hover:text-cyan-600 hover:bg-slate-900 light:hover:bg-slate-200 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Scroll to top of page"
              className="p-2 rounded-lg hover:text-white light:hover:text-slate-900 hover:bg-slate-900 light:hover:bg-slate-200 transition-colors ml-2"
              title="Back to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-900 light:border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>
            &copy; 2026 {personalProfile.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-1">
            <span>Built with passion and curiosity.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
