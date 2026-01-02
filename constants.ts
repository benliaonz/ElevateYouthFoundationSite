import { BookOpen, Trophy, HeartHandshake, Users } from 'lucide-react';
import { Program, Stat, FinancialData } from './types';

export const FOUNDATION_NAME = "Elevated Youth Foundation";
export const MISSION_STATEMENT = "Empowering the next generation through education, mentorship, and athletic excellence.";

export const PROGRAMS: Program[] = [
  {
    id: 'edu',
    title: 'Academic Excellence',
    description: 'Providing scholarships, tutoring, and learning resources to underfunded communities to bridge the education gap.',
    icon: BookOpen,
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'sports',
    title: 'Youth Athletics',
    description: 'Fostering teamwork, discipline, and physical health through organized sports leagues and elite coaching clinics.',
    icon: Trophy,
    image: 'https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'mentor',
    title: 'Mentorship Circles',
    description: 'Connecting industry professionals with aspiring youth to provide guidance, career advice, and personal development.',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'community',
    title: 'Community Outreach',
    description: 'Organizing food drives, neighborhood cleanups, and local events to build a stronger, safer environment.',
    icon: HeartHandshake,
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80&w=800',
  },
];

export const STATS: Stat[] = [
  { id: '1', label: 'Youth Impacted', value: '15,000', suffix: '+' },
  { id: '2', label: 'Scholarships', value: '2.5', prefix: '$', suffix: 'M' },
  { id: '3', label: 'Schools Supported', value: '45', suffix: '' },
  { id: '4', label: 'Active Mentors', value: '300', suffix: '+' },
];

export const FINANCIAL_DATA: FinancialData[] = [
  { name: 'Program Services', value: 82, color: '#10b981' }, // emerald-500
  { name: 'Fundraising', value: 10, color: '#3b82f6' },      // blue-500
  { name: 'Management', value: 8, color: '#64748b' },        // slate-500
];

export const SYSTEM_INSTRUCTION = `
You are the AI Assistant for the Elevated Youth Foundation.
Your tone should be inspiring, professional, warm, and helpful.
Key Information:
- Mission: ${MISSION_STATEMENT}
- Programs: Education (scholarships, tutoring), Athletics (sports leagues), Mentorship, Community Outreach.
- Financials: 82% of donations go directly to programs.
- Get Involved: Users can donate, volunteer, or become a mentor.
- Contact: support@elevatedyouth.org
`;