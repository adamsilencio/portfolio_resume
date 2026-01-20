import React from 'react';
import { Award, Zap, BookOpen } from 'lucide-react';
import { SKILLS, CERTIFICATIONS, PARTICIPATIONS, EDUCATION } from '../constants';

const Skills: React.FC = () => {
  return (
    <section className="py-16 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Skills Column */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg text-blue-700 dark:text-blue-400">
                <Zap size={24} />
              </div>
              Relevant Skills
            </h2>
            <div className="space-y-6">
              {SKILLS.map((skillGroup, idx) => (
                <div key={idx}>
                  <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, i) => (
                      <span key={i} className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium border border-slate-200 dark:border-slate-700">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certs Column */}
          <div className="space-y-12">
            
            {/* Education */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg text-blue-700 dark:text-blue-400">
                  <BookOpen size={24} />
                </div>
                Education
              </h2>
              <div className="space-y-4">
                {EDUCATION.map((edu, index) => (
                  <div key={index} className="flex gap-4">
                     <div className="flex-shrink-0 mt-1">
                        <div className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-500" />
                     </div>
                     <div>
                        <h4 className="text-slate-900 dark:text-white font-bold">{edu.degree}</h4>
                        <p className="text-slate-600 dark:text-slate-400 text-sm">{edu.institution}</p>
                     </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg text-blue-700 dark:text-blue-400">
                  <Award size={24} />
                </div>
                Certifications & Participations
              </h2>
              <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 border border-slate-100 dark:border-slate-700">
                <h3 className="font-bold text-slate-900 dark:text-white mb-4">Certifications</h3>
                <ul className="space-y-3 mb-6">
                  {CERTIFICATIONS.map((cert, i) => (
                    <li key={i} className="text-sm text-slate-600 dark:text-slate-300 flex gap-2">
                      <span className="text-green-500 dark:text-green-400">✓</span>
                      {cert.name}
                    </li>
                  ))}
                </ul>

                <h3 className="font-bold text-slate-900 dark:text-white mb-4 pt-4 border-t border-slate-200 dark:border-slate-700">Participations</h3>
                <ul className="space-y-3">
                  {PARTICIPATIONS.map((part, i) => (
                    <li key={i} className="text-sm text-slate-600 dark:text-slate-300 flex gap-2">
                      <span className="text-blue-500 dark:text-blue-400">•</span>
                      {part}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;