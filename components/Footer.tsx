import React from 'react';
import { Mail, Linkedin } from 'lucide-react';
import { PROFILE } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 dark:bg-black text-slate-400 py-12 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-white font-bold text-lg mb-1">{PROFILE.name}</h3>
            <p className="text-sm">{PROFILE.role}</p>
          </div>
          
          <div className="flex gap-6">
             <a href={`mailto:${PROFILE.email}`} className="hover:text-white transition-colors">
               <Mail size={20} />
               <span className="sr-only">Email</span>
             </a>
             <a href={PROFILE.linkedinUrl} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
               <Linkedin size={20} />
               <span className="sr-only">LinkedIn</span>
             </a>
          </div>
        </div>
        <div className="border-t border-slate-800 dark:border-slate-900 mt-8 pt-8 text-center text-xs">
          © {new Date().getFullYear()} Amir Aiman Bin Nizamuddin. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;