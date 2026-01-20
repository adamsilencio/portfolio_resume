import React from 'react';
import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';
import { PROFILE } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          
          {/* Profile Picture Area */}
          <div className="flex-shrink-0">
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-slate-100 dark:border-slate-800 shadow-xl relative bg-slate-200 dark:bg-slate-700">
               {/* 
                  TODO: Replace the src below with the actual local path to your image, e.g., src="/profile.jpg" 
                  Ensure the image is square for the best circular result.
               */}
              <img 
                src="https://picsum.photos/400/400" 
                alt={PROFILE.name} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-grow text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight mb-2">
              {PROFILE.name}
            </h1>
            <p className="text-xl md:text-2xl text-blue-700 dark:text-blue-400 font-medium mb-6">
              {PROFILE.role}
            </p>
            
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8 max-w-2xl mx-auto md:mx-0">
              {PROFILE.summary}
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm font-medium text-slate-700 dark:text-slate-300">
              <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-2 hover:text-blue-700 dark:hover:text-blue-400 transition-colors bg-slate-50 dark:bg-slate-800 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700">
                <Mail size={16} />
                {PROFILE.email}
              </a>
              <a href={`tel:${PROFILE.phone}`} className="flex items-center gap-2 hover:text-blue-700 dark:hover:text-blue-400 transition-colors bg-slate-50 dark:bg-slate-800 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700">
                <Phone size={16} />
                {PROFILE.phone}
              </a>
              <a href={PROFILE.linkedinUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-blue-700 dark:hover:text-blue-400 transition-colors bg-slate-50 dark:bg-slate-800 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700">
                <Linkedin size={16} />
                LinkedIn
              </a>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-transparent text-slate-500 dark:text-slate-400">
                <MapPin size={16} />
                {PROFILE.location}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;