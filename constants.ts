
import { BookOpen, Trophy, HeartHandshake, Users, Palette, GraduationCap } from 'lucide-react';
import { Program, Stat, FinancialData, Trustee } from './types';

export const FOUNDATION_NAME = "Elevate Youth Foundation";
export const MISSION_STATEMENT = "To identify, support, and encourage young people who demonstrate potential in academics, sports, arts, and community service.";

export const OFFICE_ADDRESS = "40A Vicent Street, Howick, Auckland, New Zealand";
export const FOUNDATION_EMAIL = "elevateyouthfoundationnz@gmail.com";
export const FOUNDATION_PHONE = "0225999395";

export const ABOUT_TEXT = {
  history: "Established on October 21, 2025, by Settlor Bin Li, the Elevate Youth Foundation was created with a clear vision: to empower the youth of Aotearoa through structured mentorship and financial support.",
  vision: "We believe that every young person, regardless of their financial circumstances, deserves the opportunity to reach their full potential in academics, sports, and the arts.",
  legal: "Operated as a registered charitable trust under the Charitable Trusts Act 1957 and the Trusts Act 2019, we maintain the highest standards of governance and transparency."
};

export const PROGRAMS: Program[] = [
  {
    id: 'edu-adv',
    title: 'Educational Advancement',
    description: 'Providing mentoring, training, and workshops that promote creativity, confidence, and resilience in young minds.',
    icon: GraduationCap,
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'sports-arts',
    title: 'Athletics & Arts',
    description: 'Encouraging excellence in sports and arts through dedicated support programs and talent identification initiatives.',
    icon: Trophy,
    image: 'https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'scholarships',
    title: 'Financial Assistance',
    description: 'Offering scholarships, grants, and awards to youth with potential, regardless of their personal or financial circumstances.',
    icon: BookOpen,
    image: 'https://images.unsplash.com/photo-1544650030-3c51ad3571d2?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'wellbeing',
    title: 'Community Wellbeing',
    description: 'Promoting engagement through volunteering and service initiatives that encourage social responsibility and connection.',
    icon: HeartHandshake,
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80&w=800',
  },
];

export const TRUSTEES: Trustee[] = [
  {
    name: "Bin Li",
    role: "Settlor & Trustee",
    bio: "Dedicated to creating opportunities for the next generation in Auckland and across New Zealand."
  },
  {
    name: "Nan Li",
    role: "Trustee",
    bio: "Focused on academic excellence and providing resources to bridge the educational gap."
  },
  {
    name: "Kai Sheng",
    role: "Trustee",
    bio: "Specializing in community engagement and fostering youth leadership development."
  }
];

export const STATS: Stat[] = [
  { id: '1', label: 'Youth Impacted', value: '15,000', suffix: '+' },
  { id: '2', label: 'Scholarships', value: '2.5', prefix: '$', suffix: 'M' },
  { id: '3', label: 'Schools Supported', value: '45', suffix: '' },
  { id: '4', label: 'Active Mentors', value: '300', suffix: '+' },
];

export const FINANCIAL_DATA: FinancialData[] = [
  { name: 'Program Services', value: 82, color: '#312e81' }, 
  { name: 'Fundraising', value: 10, color: '#6366f1' },      
  { name: 'Management', value: 8, color: '#a5b4fc' },        
];

export const SYSTEM_INSTRUCTION = `
You are the AI Assistant for the Elevate Youth Foundation.
Your tone should be inspiring, professional, warm, and helpful.

Key Legal & Structural Information (from Trust Deed):
- Legal Status: Registered Charitable Trust in New Zealand (Charitable Trusts Act 1957).
- Registered Office: ${OFFICE_ADDRESS}.
- Governing Law: New Zealand Law.
- Mission: ${MISSION_STATEMENT}.
- History: Founded Oct 21, 2025, by Settlor Bin Li.
- Trustees: Bin Li, Nan Li, Kai Sheng.
- Programs: Educational Advancement, Athletics & Arts, Scholarships/Financial Aid, and Community Wellbeing.
- Contact: ${FOUNDATION_EMAIL} | ${FOUNDATION_PHONE}
- Transparency: 82% of funds go directly to programs.

Answer questions about how to get involved (donate/volunteer), our specific legal purposes in NZ, and who leads the foundation.
`;
