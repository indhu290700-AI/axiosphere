import { Conference } from './types';

export const CONFERENCES: Conference[] = [
  {
    id: 'icamr-2026',
    title: 'ICAMR 2026',
    subtitle: 'International Conference on Advanced Multidisciplinary Research',
    date: 'JULY 24–25, 2026',
    location: 'Munich Academic Congress Center, Germany & Hybrid',
    description: 'A premiere global gathering bringing together academic leaders, scientists, and researchers to share pioneering multidisciplinary insights and foster collaborative innovation across classical boundaries.',
    details: 'The 12th International Conference on Advanced Multidisciplinary Research (ICAMR 2026) serves as the primary ecosystem where academic minds transcend borders. Focused on bridging the gap between life sciences, physical computing, and social humanities, this session features groundbreaking keynote presentations, peer-reviewed paper panels, and strategic academic networking workshops.',
    category: 'Multidisciplinary',
    featuredImage: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
    schedule: [
      { time: '09:00 AM - 10:30 AM', title: 'Opening Keynote: The Digital Paradigm of Convergence', speaker: 'Dr. Helen Vance' },
      { time: '11:00 AM - 12:30 PM', title: 'Panel Discussion: Ethical AI and Human-Centric Research', speaker: 'Moderated by Prof. Julian Thorne' },
      { time: '02:00 PM - 03:30 PM', title: 'Breakout Session A: Sustainable Materials in Urban Infrastructure', speaker: 'Dr. Marcus Aris' },
      { time: '04:00 PM - 05:30 PM', title: 'Special Workshop: Cross-Border Intellectual Property & Academic Publishing', speaker: 'Sarah Jenkins, Esq.' }
    ],
    speakers: [
      { name: 'Dr. Helen Vance', institution: 'Oxford University, UK', role: 'Director of Multidisciplinary Studies', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80' },
      { name: 'Prof. Julian Thorne', institution: 'Stanford University, USA', role: 'Department chair of Human-Computer Interaction', avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80' },
      { name: 'Dr. Marcus Aris', institution: 'Technical University of Munich, Germany', role: 'Lead Sustainable Materials Researcher', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80' }
    ]
  },
  {
    id: 'icsrd-2026',
    title: 'ICSRD 2026',
    subtitle: 'International Conference on Sustainable Research & Development',
    date: 'AUGUST 29-30, 2026',
    location: 'Swiss Tech Convention Center, Lausanne, Switzerland',
    description: 'Curating world-class academic methodologies to address the planet’s most pressing environmental, structural, and macroeconomic challenges through clean-tech engineering and circular resource models.',
    details: 'ICSRD 2026 focuses heavily on actionable scientific answers to planetary challenges. Bringing together environmental researchers, green-tech developers, policy architects, and institutional founders, this conference outlines regional pathways for clean energy transition, sustainable agriculture, and climate adaptation.',
    category: 'Sustainability',
    featuredImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
    schedule: [
      { time: '09:30 AM - 11:00 AM', title: 'Plenary Session: Decarbonization Pathways by 2040', speaker: 'Prof. Linus Kaelin' },
      { time: '11:15 AM - 12:45 PM', title: 'Symposium: Regenerative Hydrology and Soil Sciences', speaker: 'Dr. Amara Eke' },
      { time: '02:00 PM - 03:45 PM', title: 'Interactive Panel: Green Venture Capital & Tech Incubation', speaker: 'Sophia van der Meer' },
      { time: '04:15 PM - 05:45 PM', title: 'Technical Showcase: Closed-Loop Zero-Waste Urban Architectures', speaker: 'Jean-Louis Dupont' }
    ],
    speakers: [
      { name: 'Prof. Linus Kaelin', institution: 'ETH Zürich, Switzerland', role: 'Head of Climate Neutrality Lab', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80' },
      { name: 'Dr. Amara Eke', institution: 'University of Nairobi, Kenya', role: 'Associate Professor of Agricultural Studies', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80' },
      { name: 'Sophia van der Meer', institution: 'Horizon Green Ventures', role: 'Managing Partner', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80' }
    ]
  }
];
