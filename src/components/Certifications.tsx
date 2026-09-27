import React, { useState } from 'react';
import { Award, ExternalLink, CheckCircle, ShieldCheck, X, FileBadge } from 'lucide-react';
import { certificationsData, Certification } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <section id="certifications" className="py-20 md:py-28 relative border-t border-slate-800/80 light:border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <p className="text-xs font-mono font-semibold tracking-wider uppercase text-cyan-400 light:text-cyan-600 mb-2">
            05. Credentials & Learning Proof
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white light:text-slate-900">
            Certifications & Programs
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 light:text-slate-600">
            Industry simulation programs, technical cloud concepts, machine learning foundations, and data analytics credentials.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="glass-card group rounded-2xl p-6 sm:p-7 bg-slate-900/60 light:bg-white border border-slate-800 light:border-slate-200 hover:border-cyan-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-xl bg-cyan-950/70 light:bg-cyan-50 border border-cyan-800/50 light:border-cyan-200 flex items-center justify-center text-cyan-400 light:text-cyan-600 flex-shrink-0">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-cyan-400 light:text-cyan-600 font-medium">
                        {cert.organization}
                      </span>
                      <h3 className="text-lg font-bold text-white light:text-slate-900 leading-snug">
                        {cert.title}
                      </h3>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-slate-400 light:text-slate-500 bg-slate-950/80 light:bg-slate-100 px-2.5 py-1 rounded border border-slate-800 light:border-slate-300 flex-shrink-0">
                    {cert.issueDate}
                  </span>
                </div>

                <p className="text-sm text-slate-300 light:text-slate-600 leading-relaxed mb-5">
                  {cert.description}
                </p>

                {cert.credentialId && (
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400 light:text-slate-500 mb-4">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>ID: {cert.credentialId}</span>
                  </div>
                )}

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/80 light:border-slate-200">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-950 light:bg-slate-100 text-slate-400 light:text-slate-700 border border-slate-800/60 light:border-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 light:border-slate-200 flex items-center justify-between">
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="text-xs font-medium text-cyan-400 light:text-cyan-600 hover:underline flex items-center gap-1"
                >
                  <FileBadge className="w-3.5 h-3.5" />
                  <span>View Details</span>
                </button>

                <a
                  href={cert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-200 light:text-slate-800 bg-slate-800/70 light:bg-slate-100 hover:bg-slate-700 light:hover:bg-slate-200 rounded-lg transition-colors"
                >
                  <span>Verify Credential</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Certificate Modal */}
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <div className="relative w-full max-w-lg bg-slate-900 light:bg-white rounded-2xl border border-slate-700 light:border-slate-300 shadow-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-cyan-400 light:text-cyan-600">
                  <Award className="w-5 h-5" />
                  <span className="text-xs font-mono uppercase font-semibold">
                    Certificate Details
                  </span>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-1 rounded-lg text-slate-400 hover:text-white light:text-slate-600 light:hover:text-slate-900 hover:bg-slate-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 rounded-xl bg-slate-950/80 light:bg-slate-50 border border-slate-800 light:border-slate-200 mb-5 text-center">
                <FileBadge className="w-12 h-12 text-cyan-400 light:text-cyan-600 mx-auto mb-3" />
                <h3 className="text-xl font-bold text-white light:text-slate-900 mb-1">
                  {selectedCert.title}
                </h3>
                <p className="text-sm font-medium text-slate-400 light:text-slate-600">
                  Issued by {selectedCert.organization} · {selectedCert.issueDate}
                </p>
                {selectedCert.credentialId && (
                  <p className="text-xs font-mono text-cyan-400 light:text-cyan-700 mt-2">
                    Credential ID: {selectedCert.credentialId}
                  </p>
                )}
              </div>

              <p className="text-sm text-slate-300 light:text-slate-600 leading-relaxed mb-6">
                {selectedCert.description}
              </p>

              <div className="flex items-center justify-end gap-3">
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors"
                >
                  Close
                </button>
                <a
                  href={selectedCert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 light:bg-cyan-600 light:text-white rounded-lg transition-colors"
                >
                  <span>Open Verification Link</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
