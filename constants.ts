import { 
  PencilRuler, 
  Home, 
  Trees, 
  FileText, 
  Hammer, 
  Armchair 
} from 'lucide-react';
import { Service, Project, Testimonial } from './types';

export const COMPANY_INFO = {
  name: "Espace Design",
  tagline: "Sculpter les espaces, sublimer les vies.",
  phone: "06.52.07.17.91",
  email: "espacedesign28@gmail.com",
  instagram: "ESPACE_DESIGN_3D",
  address: "Votre région et alentours"
};

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "Plans 2D & 3D",
    description: "Visualisez votre futur intérieur avec des plans détaillés et des rendus 3D réalistes avant le début des travaux.",
    icon: PencilRuler
  },
  {
    id: 2,
    title: "Architecture d'Intérieur",
    description: "Optimisation des volumes, choix des matériaux et harmonies colorées pour un espace qui vous ressemble.",
    icon: Home
  },
  {
    id: 3,
    title: "Aménagement Extérieur",
    description: "Conception de terrasses, cuisines d'été et espaces verts pour prolonger votre confort à l'extérieur.",
    icon: Trees
  },
  {
    id: 4,
    title: "Suivi de Chantier",
    description: "Accompagnement personnalisé et coordination des artisans pour une réalisation sans stress.",
    icon: Hammer
  },
  {
    id: 5,
    title: "Dossiers Administratifs",
    description: "Prise en charge de vos déclarations de travaux et permis de construire.",
    icon: FileText
  },
  {
    id: 6,
    title: "Mobilier sur Mesure",
    description: "Création de meubles uniques et agencement optimisé pour chaque recoin de votre habitat.",
    icon: Armchair
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Rénovation Villa Moderne",
    category: "Intérieur",
    imageUrl: "https://picsum.photos/id/1/800/600",
    beforeImageUrl: "https://picsum.photos/id/10/800/600" // Simulated before image
  },
  {
    id: 2,
    title: "Cuisine d'Été & Terrasse",
    category: "Extérieur",
    imageUrl: "https://picsum.photos/id/13/800/600"
  },
  {
    id: 3,
    title: "Suite Parentale Luxe",
    category: "Intérieur",
    imageUrl: "https://picsum.photos/id/20/800/600"
  },
  {
    id: 4,
    title: "Espace de Vie Ouvert",
    category: "Rénovation",
    imageUrl: "https://picsum.photos/id/24/800/600"
  },
  {
    id: 5,
    title: "Architecture Commerciale",
    category: "Pro",
    imageUrl: "https://picsum.photos/id/38/800/600"
  },
  {
    id: 6,
    title: "Aménagement Paysager",
    category: "Extérieur",
    imageUrl: "https://picsum.photos/id/48/800/600"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Sophie & Marc",
    role: "Particuliers",
    text: "Une transformation incroyable de notre salon. Les plans 3D nous ont vraiment aidés à nous projeter. Merci pour ce travail d'orfèvre !"
  },
  {
    id: 2,
    name: "Jean-Pierre D.",
    role: "Propriétaire Restaurant",
    text: "Espace Design a su capter l'identité de mon établissement. L'agencement est à la fois beau et fonctionnel."
  },
  {
    id: 3,
    name: "Camille L.",
    role: "Particulier",
    text: "Un suivi de chantier impeccable. Je n'ai eu à me soucier de rien, le résultat dépasse mes attentes."
  }
];