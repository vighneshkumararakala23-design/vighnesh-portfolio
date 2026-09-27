import React, { useState } from 'react';
import { Mail, Linkedin, Github, MapPin, Send, CheckCircle2, Copy, Check, ExternalLink } from 'lucide-react';
import { personalProfile } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitting(true);
    // Simulate brief client processing
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleCopyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative border-t border-slate-800/80 light:border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <p className="text-xs font-mono font-semibold tracking-wider uppercase text-cyan-400 light:text-cyan-600 mb-2">
            08. Communication
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white light:text-slate-900">
            Let's Build Something Together.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 light:text-slate-600">
            I am currently open to internship opportunities, student hackathons, open-source collaborations, and tech discussions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Contact Info & Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-6 sm:p-7 rounded-2xl bg-slate-900/60 light:bg-white border border-slate-800 light:border-slate-200 space-y-6">
              <h3 className="text-lg font-bold text-white light:text-slate-900">
                Direct Channels
              </h3>

              {/* University Email */}
              <div className="space-y-1.5">
                <span className="text-xs font-mono text-slate-400 light:text-slate-500 uppercase">
                  Institutional Email
                </span>
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950/80 light:bg-slate-50 border border-slate-800 light:border-slate-200">
                  <div className="flex items-center gap-2.5 truncate mr-2">
                    <Mail className="w-4 h-4 text-cyan-400 light:text-cyan-600 flex-shrink-0" />
                    <a
                      href={`mailto:${personalProfile.contacts.universityEmail}`}
                      className="text-xs font-mono text-slate-200 light:text-slate-800 hover:text-cyan-400 light:hover:text-cyan-600 truncate"
                    >
                      {personalProfile.contacts.universityEmail}
                    </a>
                  </div>
                  <button
                    onClick={() => handleCopyEmail(personalProfile.contacts.universityEmail)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white light:hover:text-slate-900 transition-colors flex-shrink-0"
                    title="Copy email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Personal Email */}
              <div className="space-y-1.5">
                <span className="text-xs font-mono text-slate-400 light:text-slate-500 uppercase">
                  Personal Email
                </span>
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950/80 light:bg-slate-50 border border-slate-800 light:border-slate-200">
                  <div className="flex items-center gap-2.5 truncate mr-2">
                    <Mail className="w-4 h-4 text-cyan-400 light:text-cyan-600 flex-shrink-0" />
                    <a
                      href={`mailto:${personalProfile.contacts.personalEmail}`}
                      className="text-xs font-mono text-slate-200 light:text-slate-800 hover:text-cyan-400 light:hover:text-cyan-600 truncate"
                    >
                      {personalProfile.contacts.personalEmail}
                    </a>
                  </div>
                  <button
                    onClick={() => handleCopyEmail(personalProfile.contacts.personalEmail)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white light:hover:text-slate-900 transition-colors flex-shrink-0"
                    title="Copy email"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-950/80 light:bg-slate-50 border border-slate-800 light:border-slate-200">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <div>
                  <span className="text-xs font-mono text-slate-400 light:text-slate-500 block">Location</span>
                  <span className="text-xs font-medium text-slate-200 light:text-slate-800">
                    {personalProfile.location} (Marwadi University)
                  </span>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-2 border-t border-slate-800/80 light:border-slate-200 flex flex-col gap-2">
                <a
                  href={personalProfile.contacts.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-950/60 light:bg-slate-50 border border-slate-800 light:border-slate-200 hover:border-[#0A66C2] transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                    <span className="text-xs font-semibold text-slate-200 light:text-slate-800">
                      Connect on LinkedIn
                    </span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>

                <a
                  href={personalProfile.contacts.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-950/60 light:bg-slate-50 border border-slate-800 light:border-slate-200 hover:border-slate-600 transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <Github className="w-4 h-4 text-white light:text-slate-900" />
                    <span className="text-xs font-semibold text-slate-200 light:text-slate-800">
                      Explore on GitHub
                    </span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 rounded-2xl bg-slate-900/60 light:bg-white border border-slate-800 light:border-slate-200">
              {submitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white light:text-slate-900">
                    Message Recorded Locally!
                  </h3>
                  <p className="text-sm text-slate-300 light:text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-cyan-400">{formData.name}</strong>. Because this is a client portfolio deployment without a live mail daemon configured, your message was safely recorded locally in-browser.
                  </p>
                  <div className="p-4 rounded-xl bg-slate-950/80 light:bg-slate-50 border border-slate-800 light:border-slate-200 max-w-md mx-auto text-left text-xs font-mono text-slate-400 light:text-slate-600 space-y-1">
                    <p><strong>Subject:</strong> {formData.subject || '(General Inquiry)'}</p>
                    <p><strong>From:</strong> {formData.email}</p>
                    <p className="truncate"><strong>Message:</strong> {formData.message}</p>
                  </div>
                  <div className="pt-2">
                    <a
                      href={`mailto:${personalProfile.contacts.universityEmail}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Hi Vighnesh,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`)}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 light:bg-cyan-600 light:text-white rounded-xl transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Send directly via your Email Client</span>
                    </a>
                  </div>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="block mx-auto text-xs text-slate-400 hover:text-white light:hover:text-slate-900 underline mt-4"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono text-slate-300 light:text-slate-700 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 light:bg-slate-50 border border-slate-800 light:border-slate-300 text-sm text-white light:text-slate-900 placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-mono text-slate-300 light:text-slate-700 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@example.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 light:bg-slate-50 border border-slate-800 light:border-slate-300 text-sm text-white light:text-slate-900 placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-mono text-slate-300 light:text-slate-700 mb-1.5">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Internship opportunity / Project collaboration"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 light:bg-slate-50 border border-slate-800 light:border-slate-300 text-sm text-white light:text-slate-900 placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-mono text-slate-300 light:text-slate-700 mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Vighnesh, I came across your portfolio and wanted to discuss..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 light:bg-slate-50 border border-slate-800 light:border-slate-300 text-sm text-white light:text-slate-900 placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-xs text-slate-500 light:text-slate-400">
                      * Required fields
                    </span>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 light:bg-cyan-600 light:text-white rounded-xl transition-all shadow-md shadow-cyan-500/20 disabled:opacity-50"
                    >
                      {submitting ? (
                        <span>Sending...</span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
