export interface Conference {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  location: string;
  description: string;
  details: string;
  schedule: Array<{ time: string; title: string; speaker: string }>;
  speakers: Array<{ name: string; institution: string; role: string; avatar?: string }>;
  category: string;
  featuredImage: string;
}

export interface Registration {
  id: string;
  conferenceId: string;
  conferenceTitle: string;
  name: string;
  email: string;
  institution: string;
  role: string;
  status: string;
  registeredAt: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  submittedAt: string;
}

export interface Membership {
  id: string;
  name: string;
  email: string;
  institution: string;
  field: string;
  type: 'Individual' | 'Institutional';
  joinedAt: string;
}
