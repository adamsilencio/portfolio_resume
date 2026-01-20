import React from 'react';

export interface Job {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  location?: string;
  year?: string;
}

export interface Certification {
  name: string;
  issuer?: string;
}

export interface SocialLink {
  icon: React.ElementType;
  label: string;
  href: string;
  text: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}