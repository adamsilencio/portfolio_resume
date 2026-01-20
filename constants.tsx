import { Job, EducationItem, Certification, SkillCategory } from './types';

export const PROFILE = {
  name: "Amir Aiman Bin Nizamuddin",
  role: "Senior IT and eCommerce Executive",
  phone: "+6 018 376 3476",
  email: "amir.aiman.nizamuddin@gmail.com",
  linkedin: "linkedin.com/in/amiraimannizamuddin",
  linkedinUrl: "https://linkedin.com/in/amiraimannizamuddin",
  location: "Selangor, Malaysia",
  summary: "Senior IT and eCommerce Executive with over 5 years of experience in the retail and eCommerce industry, combining hands-on IT leadership with Business Analysis and IT Project Management expertise. Proven ability to gather and analyze business requirements, translate them into functional and technical specifications, and collaborate with cross-functional stakeholders to deliver scalable IT and digital solutions. A strong team player capable of working independently or collaboratively, with strengths in IT infrastructure management, digital customer experience optimization, and omnichannel retail strategy and execution."
};

export const EXPERIENCE: Job[] = [
  {
    company: "Wing Tai Fashion Sdn Bhd",
    role: "Senior IT Executive",
    location: "Selangor",
    period: "July 2024 – Present",
    description: [
      "Analysed business requirements and translated them into functional and technical specifications for IT projects.",
      "Coordinated with cross-functional teams to ensure alignment between business objectives and technical solutions.",
      "Supported IT project management activities including scope definition, risk assessment, and UAT.",
      "Facilitated stakeholder meetings to clarify requirements and manage change requests.",
      "Monitored project progress and reported status, risks, and issues to stakeholders.",
      "Prepared dashboards, reports, and presentations for project reviews and decision-making.",
      "Ensured delivered solutions met business objectives and complied with quality standards.",
      "Documented workflows, data flows, and system interactions using process modelling tools.",
      "Supported deployment activities and provided post-implementation support."
    ]
  },
  {
    company: "Wing Tai Fashion Sdn Bhd",
    role: "IT Executive",
    location: "Selangor",
    period: "Dec 2021 – June 2024",
    description: [
      "Providing comprehensive technical support to staff across departments, including troubleshooting hardware, software, and network related issues.",
      "Regularly performing updates and maintenance on both software and hardware systems to ensure optimal performance, compatibility, and security.",
      "Collaborating closely with IT team members and cross-functional departments to design, implement, and maintain robust IT infrastructure.",
      "Maintaining detailed and up to date documentation of IT systems, configurations, procedures, and issue resolution processes."
    ]
  },
  {
    company: "Kimma Sdn Bhd",
    role: "IT cum Ecommerce Executive",
    location: "Kuala Lumpur",
    period: "July 2019 – Dec 2021",
    description: [
      "Provide technical support and troubleshooting for IT systems, including hardware, software, and network issues.",
      "Oversee maintenance, updates, and upgrades of IT infrastructure and software applications.",
      "Manage IT assets such as computers, servers, network devices, and software licenses.",
      "Assist in managing the company’s eCommerce platforms, ensuring smooth daily operations.",
      "Support online sales initiatives by optimizing product listings, pricing, promotions, and digital marketing campaigns.",
      "Monitor website performance and customer analytics to identify opportunities for improvement.",
      "Coordinate with logistics, marketing, and customer service teams to ensure efficient order fulfilment."
    ]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    institution: "Universiti Teknologi MARA (UiTM) Shah Alam, Selangor",
    degree: "Master of Science in Information Technology",
  },
  {
    institution: "Universiti Teknologi MARA (UiTM) Shah Alam, Selangor",
    degree: "Bachelor of Information Technology (Hons.) Business Computing",
  },
  {
    institution: "Universiti Teknologi MARA (UiTM) Dungun",
    degree: "Diploma in Computer Science",
  }
];

export const CERTIFICATIONS: Certification[] = [
  { name: "Certified in Java Developer" },
  { name: "Certified Alibaba Global E-Commerce Talent" },
  { name: "Certified in Kursus Bakal Pegawai (Sispa), Akademi Latihan Pertahanan Awam Malaysia" },
  { name: "Certified in Kursus First responder Life Support, Akademi Latihan Pertahanan Awam Malaysia" },
  { name: "Certified in Kursus Methodologi Kejurulatihan, Akademi Latihan Pertahanan Awam Malaysia" },
  { name: "Certified in Latihan Asas Pertahanan Awam, Akademi Latihan Pertahanan Awam Malaysia" }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Technical Support",
    items: ["Helpdesk Support", "Troubleshooting", "System Administration", "Network Administration", "Hardware & Software Maintenance"]
  },
  {
    category: "Management & Strategy",
    items: ["Project Management", "IT Infrastructure Management", "Decision Making", "Leadership", "Process Improvement"]
  },
  {
    category: "E-Commerce & Digital",
    items: ["eCommerce Platform Management", "Digital Marketing Tools", "Customer Experience Optimization", "Data Analysis & Reporting"]
  },
  {
    category: "Communication & Training",
    items: ["Verbal & Written Communication", "Training & User Support", "User Acceptance Testing (UAT)", "Training & Development"]
  }
];

export const PARTICIPATIONS = [
  "Guest Speaker for Innovative Talk with Alumni, UiTM Shah Alam, Selangor",
  "Guest Speaker for Leadership Alumni Talk, UiTM Shah Alam, Selangor",
  "Panel Member for Alumni Business Computing Discussion, UiTM Shah Alam, Selangor"
];