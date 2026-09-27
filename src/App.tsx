/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { SoundProvider } from './context/SoundContext';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { CareerRoadmap } from './components/CareerRoadmap';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
import { Education } from './components/Education';
import { DevShowcase } from './components/DevShowcase';
import { ResumeSection } from './components/ResumeSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <ThemeProvider>
      <SoundProvider>
        <div className="min-h-screen bg-slate-950 text-slate-100 transition-colors duration-300 light:bg-slate-50 light:text-slate-900 overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-300">
          {/* Subtle Scroll Progress Indicator */}
          <ScrollProgressBar />

          {/* Sticky Header with 3-Zone Contract */}
          <Navbar onOpenResumeModal={() => setIsResumeModalOpen(true)} />

          {/* Main Content Sections */}
          <main>
            {/* Hero Section */}
            <Hero onOpenResumeModal={() => setIsResumeModalOpen(true)} />

            {/* About Section */}
            <About />

            {/* Skills Section */}
            <Skills />

            {/* Career Roadmap Section */}
            <CareerRoadmap />

            {/* Projects Section */}
            <Projects />

            {/* Experience Section */}
            <Experience />

            {/* Certifications Section */}
            <Certifications />

            {/* Education Section */}
            <Education />

            {/* Development & GitHub Showcase */}
            <DevShowcase />

            {/* Resume CTA Section */}
            <ResumeSection onOpenResumeModal={() => setIsResumeModalOpen(true)} />

            {/* Contact Section */}
            <Contact />
          </main>

          {/* Footer */}
          <Footer />

          {/* Modal for In-Browser Interactive Resume Preview */}
          <ResumeModal
            isOpen={isResumeModalOpen}
            onClose={() => setIsResumeModalOpen(false)}
          />
        </div>
      </SoundProvider>
    </ThemeProvider>
  );
}
