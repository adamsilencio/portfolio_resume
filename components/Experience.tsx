import React from 'react';
import { Briefcase } from 'lucide-react';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
          <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg text-blue-700 dark:text-blue-400">
            <Briefcase size={24} />
          </div>
          Professional Experience
        </h2>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800 before:hidden md:before:block">
          {EXPERIENCE.map((job, index) => (
            <div key={index} className="relative flex items-start md:group">
              
              {/* Timeline Dot (Desktop) */}
              <div className="hidden md:block absolute left-0 md:left-1/2 ml-[19px] md:ml-0 -translate-x-1/2 mt-1.5 w-4 h-4 rounded-full border-4 border-white dark:border-slate-900 bg-blue-600 shadow-sm z-10" />

              <div className={`flex flex-col md:flex-row gap-6 w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Date Side */}
                <div className="flex-1 md:text-right md:pt-1">
                  <div className={`hidden md:block ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                    <span className="inline-block px-3 py-1 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-semibold mb-2">
                      {job.period}
                    </span>
                  </div>
                  {/* Mobile Date */}
                  <div className="md:hidden mb-2">
                     <span className="inline-block px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold">
                      {job.period}
                    </span>
                  </div>
                </div>

                {/* Content Side */}
                <div className="flex-1">
                   <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md transition-all">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">{job.role}</h3>
                      <div className="text-blue-700 dark:text-blue-400 font-medium mb-1">{job.company}</div>
                      <div className="text-slate-500 dark:text-slate-400 text-sm mb-4">{job.location}</div>
                      
                      <ul className="space-y-2">
                        {job.description.map((point, i) => (
                          <li key={i} className="flex gap-3 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                            <span className="mt-1.5 w-1.5 h-1.5 bg-blue-400 dark:bg-blue-500 rounded-full flex-shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                   </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;