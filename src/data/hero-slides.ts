import { HeroSlide } from '@/types';

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    title: 'Quality Industrial Electrical Supplies',
    subtitle: '27+ Years of Excellence',
    description: "Zimbabwe's trusted supplier of genuine electrical equipment, switchgear, and automation solutions from world-leading brands.",
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop&auto=format',
    ctaText: 'View Products',
    ctaLink: '/products',
    ctaSecondaryText: 'Contact Us',
    ctaSecondaryLink: '/contact'
  },
  {
    id: 2,
    title: 'Powering Zimbabwe\'s Industries',
    subtitle: 'Mining | Manufacturing | Construction',
    description: 'Supplying top brands like Siemens, ABB, Schneider, and Allen Bradley to leading mining companies, manufacturers, and government institutions.',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1920&h=1080&fit=crop&auto=format',
    ctaText: 'Our Clients',
    ctaLink: '/about#clients',
    ctaSecondaryText: 'Get a Quote',
    ctaSecondaryLink: '/contact'
  },
  {
    id: 3,
    title: 'Diaspora Building Program',
    subtitle: 'Build Your Dream Home in Zimbabwe',
    description: 'Special packages for Zimbabweans abroad. We source quality materials, store them safely, and deliver when you\'re ready to build.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&h=1080&fit=crop&auto=format',
    ctaText: 'Learn More',
    ctaLink: '/diaspora',
    ctaSecondaryText: 'WhatsApp Us',
    ctaSecondaryLink: 'https://wa.me/263772814232'
  }
];

export const getHeroSlides = (): HeroSlide[] => {
  return heroSlides;
};
