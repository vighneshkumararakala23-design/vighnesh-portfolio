import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, ArrowUpRight, Volume2, VolumeX } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useSound } from '../context/SoundContext';
import { personalProfile } from '../data/portfolioData';

interface NavbarProps {
  onOpenResumeModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResumeModal }) => {
  const { theme, toggleTheme } = useTheme();
  const { soundEnabled, toggleSound } = useSound();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Roadmap', href: '#roadmap' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-slate-950/85 light:bg-white/85 backdrop-blur-md border-b border-slate-800/80 light:border-slate-200 shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Zone 1: Single text wordmark */}
          <a
            href="#home"
            className="group flex items-center gap-2 text-base md:text-lg font-bold tracking-tight text-white light:text-slate-900 transition-colors"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 light:bg-cyan-600 transition-transform group-hover:scale-125" />
            <span>{personalProfile.shortName}</span>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-slate-300 light:text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-cyan-400 light:hover:text-cyan-600 transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Sound Feedback Toggle Button */}
            <button
              onClick={toggleSound}
              aria-label={soundEnabled ? "Mute interactive click sounds" : "Enable interactive click sounds"}
              title={soundEnabled ? "Sound effects: ON (click to mute)" : "Sound effects: OFF (click to enable)"}
              className={`p-2 rounded-lg transition-colors ${
                soundEnabled
                  ? 'text-cyan-400 light:text-cyan-600 hover:bg-slate-800/60 light:hover:bg-slate-100'
                  : 'text-slate-500 light:text-slate-400 hover:text-slate-300 light:hover:text-slate-700 hover:bg-slate-800/60 light:hover:bg-slate-100'
              }`}
            >
              {soundEnabled ? (
                <Volume2 className="w-4 h-4" />
              ) : (
                <VolumeX className="w-4 h-4" />
              )}
            </button>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              className="p-2 rounded-lg text-slate-300 light:text-slate-600 hover:text-white light:hover:text-slate-900 hover:bg-slate-800/60 light:hover:bg-slate-100 transition-colors"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-300" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            {/* Let's Connect CTA */}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs md:text-sm font-medium text-white bg-slate-900 border border-cyan-500/40 hover:border-cyan-400 hover:bg-cyan-950/40 light:bg-slate-900 light:hover:bg-slate-800 light:text-white rounded-lg transition-all whitespace-nowrap shadow-sm"
            >
              <span>Let's Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="lg:hidden p-2 rounded-lg text-slate-300 light:text-slate-700 hover:bg-slate-800 light:hover:bg-slate-100 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-800 light:border-slate-200 bg-slate-950/95 light:bg-white/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-1 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 light:text-slate-800 hover:text-cyan-400 hover:bg-slate-900/60 light:hover:bg-slate-100 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-slate-800/80 light:border-slate-200 flex flex-col gap-2">
            <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-slate-900/60 light:bg-slate-100 text-xs font-mono">
              <span className="text-slate-300 light:text-slate-700">Audio Feedback:</span>
              <button
                onClick={toggleSound}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800 light:bg-white text-cyan-400 light:text-cyan-600 font-semibold"
              >
                {soundEnabled ? (
                  <>
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>Enabled</span>
                  </>
                ) : (
                  <>
                    <VolumeX className="w-3.5 h-3.5 text-slate-400" />
                    <span className="text-slate-400">Muted</span>
                  </>
                )}
              </button>
            </div>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-medium text-white bg-cyan-600 hover:bg-cyan-500 rounded-lg transition-colors"
            >
              <span>Let's Connect</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href="/resume/Vighnesh_Kumar_Arakala_ATS_Resume.pdf"
                download="Vighnesh_Kumar_Arakala_Resume.pdf"
                className="flex items-center justify-center py-2 text-xs font-semibold text-slate-200 light:text-slate-800 bg-slate-900 light:bg-slate-200 border border-slate-700 light:border-slate-300 rounded-lg hover:bg-slate-800 transition-colors"
              >
                Download Resume
              </a>
              <a
                href="/resume/Vighnesh_Kumar_Arakala_ATS_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center py-2 text-xs font-medium text-slate-300 light:text-slate-700 border border-slate-700 light:border-slate-300 rounded-lg hover:bg-slate-800 light:hover:bg-slate-100 transition-colors"
              >
                View Resume
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
