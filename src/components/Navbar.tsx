import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { personalProfile } from '../data/portfolioData';

export const Navbar: React.FC = () => {
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
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Left: Brand Wordmark / Logo */}
          <a
            href="#about"
            className="group flex items-center gap-2 text-base md:text-lg font-bold tracking-tight text-white flex-shrink-0 transition-colors"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 transition-transform group-hover:scale-125" />
            <span>{personalProfile.shortName}</span>
          </a>

          {/* Extreme Top-Right Navigation Group: [About] [Skills] [Projects] [Let's Connect] */}
          <div className="flex items-center gap-4 sm:gap-6 lg:gap-7">
            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-5 lg:gap-7 text-sm font-medium text-slate-300">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-cyan-400 transition-colors whitespace-nowrap flex-shrink-0"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop Final Button: Let's Connect */}
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 text-xs md:text-sm font-semibold text-white bg-slate-900 border border-cyan-500/40 hover:border-cyan-400 hover:bg-cyan-950/40 rounded-lg transition-all whitespace-nowrap shadow-sm flex-shrink-0"
            >
              <span>Let's Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="md:hidden p-2 rounded-lg text-slate-300 hover:bg-slate-800 transition-colors flex-shrink-0"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu (When collapsed on mobile/tablet screens) */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-slate-950/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-1 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:text-cyan-400 hover:bg-slate-900/60 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-800/80">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-medium text-white bg-cyan-600 hover:bg-cyan-500 rounded-lg transition-colors"
            >
              <span>Let's Connect</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
