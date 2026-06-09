export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  shortDescription: string;
  image: string;
  progress: number; // percentage (0 to 100)
  target: string;
  raised: string;
  unit: string; // e.g. "scholars reached", "meals served"
  icon: string; // name of lucide-react icon
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "all" | "education" | "welfare" | "youth" | "drives";
  image: string;
  date: string;
  location: string;
}

export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  description: string;
  iconName: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface VolunteerInput {
  name: string;
  email: string;
  phone: string;
  interest: string;
  experience: string;
  notes: string;
}

export interface DonationInput {
  amount: number | 'custom';
  customAmount: string;
  interval: 'once' | 'monthly' | 'annually';
  impactArea: string;
  fullName: string;
  email: string;
}
