import { LucideIcon } from 'lucide-react';

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  beforeImageUrl?: string; // Optional for before/after comparison
}

export interface Testimonial {
  id: number;
  name: string;
  text: string;
  role: string;
}