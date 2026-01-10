import { Category } from '@/types';

export const categories: Category[] = [
  {
    id: 'cat-001',
    name: 'Electrical Switchgear & Control',
    slug: 'switchgear-control',
    description: 'Contactors, overload relays, motor starters, circuit breakers, and control equipment from top brands.',
    image: 'https://placehold.co/600x400/1E3A8A/FFFFFF?text=Switchgear',
    icon: 'Zap',
    productCount: 45,
    featured: true,
    order: 1
  },
  {
    id: 'cat-002',
    name: 'Variable Frequency Drives',
    slug: 'vfd-drives',
    description: 'VFDs and inverter drives for motor speed control and energy efficiency.',
    image: 'https://placehold.co/600x400/1E3A8A/FFFFFF?text=VFD+Drives',
    icon: 'Gauge',
    productCount: 28,
    featured: true,
    order: 2
  },
  {
    id: 'cat-003',
    name: 'Cables & Termination Kits',
    slug: 'cables-termination',
    description: 'Power cables, control cables, and termination/joining kits for all voltage levels.',
    image: 'https://placehold.co/600x400/1E3A8A/FFFFFF?text=Cables',
    icon: 'Cable',
    productCount: 52,
    featured: true,
    order: 3
  },
  {
    id: 'cat-004',
    name: 'Lighting Equipment',
    slug: 'lighting',
    description: 'Industrial LED lighting, floodlights, high bay lights, and lighting accessories.',
    image: 'https://placehold.co/600x400/1E3A8A/FFFFFF?text=Lighting',
    icon: 'Lightbulb',
    productCount: 35,
    featured: true,
    order: 4
  },
  {
    id: 'cat-005',
    name: 'Motors & Generators',
    slug: 'motors-generators',
    description: 'Electric motors, vibration motors, generators, and motor accessories.',
    image: 'https://placehold.co/600x400/1E3A8A/FFFFFF?text=Motors',
    icon: 'Cog',
    productCount: 30,
    featured: true,
    order: 5
  },
  {
    id: 'cat-006',
    name: 'Sensors & Instrumentation',
    slug: 'sensors-instrumentation',
    description: 'Proximity sensors, limit switches, encoders, and industrial instrumentation.',
    image: 'https://placehold.co/600x400/1E3A8A/FFFFFF?text=Sensors',
    icon: 'Radio',
    productCount: 40,
    featured: true,
    order: 6
  },
  {
    id: 'cat-007',
    name: 'Mining Equipment',
    slug: 'mining-equipment',
    description: 'Mine bells, wallcomm units, trip switches, and specialized mining electrical equipment.',
    image: 'https://placehold.co/600x400/1E3A8A/FFFFFF?text=Mining',
    icon: 'HardHat',
    productCount: 25,
    featured: true,
    order: 7
  },
  {
    id: 'cat-008',
    name: 'Valves & Pneumatics',
    slug: 'valves-pneumatics',
    description: 'Solenoid valves, pneumatic components, and fluid control equipment.',
    image: 'https://placehold.co/600x400/1E3A8A/FFFFFF?text=Valves',
    icon: 'Droplet',
    productCount: 22,
    featured: false,
    order: 8
  },
  {
    id: 'cat-009',
    name: 'Testing Equipment',
    slug: 'testing-equipment',
    description: 'Fluke meters, multimeters, clamp meters, and electrical testing instruments.',
    image: 'https://placehold.co/600x400/1E3A8A/FFFFFF?text=Testing',
    icon: 'Activity',
    productCount: 18,
    featured: true,
    order: 9
  },
  {
    id: 'cat-010',
    name: 'Soft Starters',
    slug: 'soft-starters',
    description: 'Soft starters for smooth motor starting and reduced mechanical stress.',
    image: 'https://placehold.co/600x400/1E3A8A/FFFFFF?text=Soft+Starters',
    icon: 'PlayCircle',
    productCount: 15,
    featured: false,
    order: 10
  },
  {
    id: 'cat-011',
    name: 'Hoists & Lifting Equipment',
    slug: 'hoists-lifting',
    description: 'Electric hoists, chain hoists, and lifting accessories for industrial applications.',
    image: 'https://placehold.co/600x400/1E3A8A/FFFFFF?text=Hoists',
    icon: 'ArrowUpCircle',
    productCount: 12,
    featured: false,
    order: 11
  },
  {
    id: 'cat-012',
    name: 'Transformers',
    slug: 'transformers',
    description: 'Power transformers, control transformers, and isolation transformers.',
    image: 'https://placehold.co/600x400/1E3A8A/FFFFFF?text=Transformers',
    icon: 'Box',
    productCount: 10,
    featured: false,
    order: 12
  }
];

export const getFeaturedCategories = (): Category[] => {
  return categories.filter(cat => cat.featured).sort((a, b) => (a.order || 0) - (b.order || 0));
};

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find(cat => cat.slug === slug);
};

export const getAllCategories = (): Category[] => {
  return categories.sort((a, b) => (a.order || 0) - (b.order || 0));
};
