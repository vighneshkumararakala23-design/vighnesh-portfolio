import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { SoundProvider } from './context/SoundContext';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { Navbar } from './components/Navbar';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { CareerRoadmap } from './components/CareerRoadmap';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <SoundProvider>
        <div className="min-h-screen bg-slate-950 text-slate-100 transition-colors duration-300 light:bg-slate-50 light:text-slate-900 overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-300">
          {/* Subtle Scroll Progress Indicator */}
          <ScrollProgressBar />

          {/* Clean Navigation Bar */}
          <Navbar />

          {/* Main Content Sections: About -> Skills -> Projects -> Career Roadmap -> Contact */}
          <main>
            {/* About Section (First Section) */}
            <About />

            {/* Skills Section */}
            <Skills />

            {/* Projects Section */}
            <Projects />

            {/* Career Roadmap Section (Single Vertical-Line Layout) */}
            <CareerRoadmap />

            {/* Contact Section */}
            <Contact />
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </SoundProvider>
    </ThemeProvider>
  );
}
