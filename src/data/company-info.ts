import { CompanyInfo, Testimonial, DiasporaPackage, Brand, Stat, FAQ, Client } from '@/types';

export const companyInfo: CompanyInfo = {
  name: 'GIDS-MARTZ Industrial Suppliers (Pvt) Ltd',
  tagline: 'Quality | Efficiency | Professionalism',
  description: 'Zimbabwe\'s trusted supplier of industrial electrical equipment, switchgear, automation solutions, and mining supplies since 1997. We supply genuine products from world-leading brands with technical expertise and after-sales support.',
  founded: '1997',
  website: 'www.gidsmartz.com',
  whatsapp: '+263772814232',
  offices: [
    {
      location: 'Bulawayo (Head Office)',
      address: '120 Jason Moyo, Between 12th Ave & 13th Ave, Bulawayo, Zimbabwe',
      phone: ['+263 292 77880', '+263 292 77881'],
      cell: ['+263 772 814 232', '+263 773 144 063', '+263 784 334 865'],
      email: 'sales@gidsmartz.com',
      fax: '+263 292 881510'
    },
    {
      location: 'Harare',
      address: 'No. 78 Suffolk Road, Harare, Zimbabwe',
      phone: ['+263 242 257169', '+263 8644286997'],
      cell: ['+263 789 666 979', '+263 781 609 579'],
      email: 'sales@gidsmartz.com'
    }
  ],
  socialLinks: {
    facebook: 'https://facebook.com/gidsmartz',
    linkedin: 'https://linkedin.com/company/gidsmartz'
  }
};

export const testimonials: Testimonial[] = [
  {
    id: 'test-001',
    name: 'John Moyo',
    company: 'Blanket Mine',
    industry: 'Mining',
    quote: 'GIDS-MARTZ has been our trusted supplier for over 10 years. Their technical expertise and genuine products have kept our operations running smoothly.',
    rating: 5
  },
  {
    id: 'test-002',
    name: 'Sarah Ndlovu',
    company: 'Delta Beverages',
    industry: 'Manufacturing',
    quote: 'Excellent service and competitive pricing. The team always goes the extra mile to source hard-to-find components for our production lines.',
    rating: 5
  },
  {
    id: 'test-003',
    name: 'Peter Mukwena',
    company: 'National Railways of Zimbabwe',
    industry: 'Transport',
    quote: 'Reliable delivery and quality products. GIDS-MARTZ understands industrial requirements and provides solutions that work.',
    rating: 5
  }
];

export const diasporaPackages: DiasporaPackage[] = [
  {
    id: 'pkg-001',
    name: 'Electrical Starter Pack',
    description: 'Basic electrical materials for a standard 3-bedroom house',
    startingPrice: 500,
    currency: 'USD',
    includes: [
      'Distribution board (8-way)',
      'Circuit breakers',
      'Light switches and sockets',
      'Basic wiring cable (2.5mm & 1.5mm)',
      'Earth leakage unit'
    ],
    image: 'https://placehold.co/600x400/1E3A8A/FFFFFF?text=Starter+Pack',
    popular: false
  },
  {
    id: 'pkg-002',
    name: 'Full House Electrical',
    description: 'Complete electrical installation materials for a standard house',
    startingPrice: 2500,
    currency: 'USD',
    includes: [
      'Main distribution board',
      'Sub-distribution boards',
      'All circuit breakers and RCDs',
      'Premium switches and sockets',
      'Full wiring cable supply',
      'Outdoor lighting',
      'Geyser element and thermostat',
      'Surge protection'
    ],
    image: 'https://placehold.co/600x400/1E3A8A/FFFFFF?text=Full+House',
    popular: true
  },
  {
    id: 'pkg-003',
    name: 'Premium Home Package',
    description: 'High-end electrical and automation for luxury homes',
    startingPrice: 5000,
    currency: 'USD',
    includes: [
      'Premium distribution equipment',
      'Designer switches and sockets',
      'Home automation ready wiring',
      'LED lighting throughout',
      'Solar ready infrastructure',
      'Backup power provisions',
      'Security lighting',
      'Garden and landscape lighting'
    ],
    image: 'https://placehold.co/600x400/DC2626/FFFFFF?text=Premium',
    popular: false
  },
  {
    id: 'pkg-004',
    name: 'Commercial/Industrial',
    description: 'Custom solutions for commercial and industrial buildings',
    startingPrice: 0,
    currency: 'USD',
    includes: [
      'Custom electrical design',
      'Industrial-grade equipment',
      'Motor control centers',
      'Lighting systems',
      'Power distribution',
      'Technical consultation'
    ],
    image: 'https://placehold.co/600x400/172554/FFFFFF?text=Commercial',
    popular: false
  }
];

export const brands: Brand[] = [
  { id: 'brand-001', name: 'Siemens' },
  { id: 'brand-002', name: 'ABB' },
  { id: 'brand-003', name: 'Schneider Electric' },
  { id: 'brand-004', name: 'Allen Bradley' },
  { id: 'brand-005', name: 'Eaton' },
  { id: 'brand-006', name: 'Festo' },
  { id: 'brand-007', name: 'Burkert' },
  { id: 'brand-008', name: 'WEG' },
  { id: 'brand-009', name: 'Legrand' },
  { id: 'brand-010', name: 'Fluke' },
  { id: 'brand-011', name: 'INVT' },
  { id: 'brand-012', name: 'IFM' },
  { id: 'brand-013', name: 'SICK' },
  { id: 'brand-014', name: 'Omron' }
];

export const stats: Stat[] = [
  { label: 'Years Experience', value: '27', suffix: '+', icon: 'Calendar' },
  { label: 'Products', value: '1000', suffix: '+', icon: 'Package' },
  { label: 'Happy Clients', value: '500', suffix: '+', icon: 'Users' },
  { label: 'Locations', value: '2', icon: 'MapPin' }
];

export const faqs: FAQ[] = [
  {
    id: 'faq-001',
    question: 'What payment methods do you accept?',
    answer: 'We accept bank transfers (USD, ZWL), mobile money (EcoCash, OneMoney), and cash payments. For diaspora clients, we also accept international transfers in USD, GBP, EUR, ZAR, and AUD.',
    category: 'Payment'
  },
  {
    id: 'faq-002',
    question: 'Do you deliver nationwide?',
    answer: 'Yes, we deliver throughout Zimbabwe. We have offices in Bulawayo and Harare, and we can arrange delivery to any location in the country. Delivery costs are calculated based on weight and distance.',
    category: 'Delivery'
  },
  {
    id: 'faq-003',
    question: 'Can you store materials for diaspora clients?',
    answer: 'Yes, we offer secure storage for diaspora clients who are purchasing materials ahead of their building project. We provide climate-controlled warehouse storage and send regular photo updates via WhatsApp.',
    category: 'Diaspora'
  },
  {
    id: 'faq-004',
    question: 'Do you provide technical support?',
    answer: 'Yes, our team includes qualified electrical engineers who can provide technical consultation, product selection advice, and after-sales support. We also offer installation guidance.',
    category: 'Support'
  },
  {
    id: 'faq-005',
    question: 'Are your products genuine?',
    answer: 'Absolutely. We only supply original, genuine products from authorized distributors. We have been in business since 1997 and our reputation is built on quality and authenticity.',
    category: 'Products'
  },
  {
    id: 'faq-006',
    question: 'Do you offer warranties?',
    answer: 'Yes, all products come with manufacturer warranties. Warranty periods vary by product type, typically ranging from 12 to 36 months. We handle all warranty claims on behalf of our customers.',
    category: 'Warranty'
  },
  {
    id: 'faq-007',
    question: 'Can you source products not in your catalog?',
    answer: 'Yes, we have strong relationships with international suppliers and can source specific products on request. Contact us with your requirements and we\'ll provide a quotation.',
    category: 'Products'
  },
  {
    id: 'faq-008',
    question: 'How do I get a quotation?',
    answer: 'You can request a quote through our website, email us at sales@gidsmartz.com, call our offices, or send us a WhatsApp message. We typically respond within 24 hours.',
    category: 'Orders'
  }
];

export const majorClients: Client[] = [
  { id: 'client-001', name: 'Portland Holdings (PPC Zimbabwe)', industry: 'Manufacturing' },
  { id: 'client-002', name: 'Metallon Gold (Bulawayo Mining Company)', industry: 'Mining' },
  { id: 'client-003', name: 'Blanket Mine', industry: 'Mining' },
  { id: 'client-004', name: 'Olympus Gold Mines', industry: 'Mining' },
  { id: 'client-005', name: 'Falcon Gold Zimbabwe', industry: 'Mining' },
  { id: 'client-006', name: 'Duration Gold', industry: 'Mining' },
  { id: 'client-007', name: 'Airports Company of Zimbabwe', industry: 'Aviation' },
  { id: 'client-008', name: 'Civil Aviation Authority of Zimbabwe', industry: 'Aviation' },
  { id: 'client-009', name: 'National Railways of Zimbabwe', industry: 'Transport' },
  { id: 'client-010', name: 'ZUPCO', industry: 'Transport' },
  { id: 'client-011', name: 'Zimbabwe Power Company', industry: 'Energy' },
  { id: 'client-012', name: 'Delta Beverages', industry: 'Manufacturing' },
  { id: 'client-013', name: 'Kershelmar Dairies', industry: 'Manufacturing' },
  { id: 'client-014', name: 'National University of Science and Technology', industry: 'Education' },
  { id: 'client-015', name: 'Zimbabwe National Defence Forces', industry: 'Government' },
  { id: 'client-016', name: 'Zimbabwe Prisons and Correctional Services', industry: 'Government' },
  { id: 'client-017', name: 'Ministry of Health', industry: 'Government' },
  { id: 'client-018', name: 'Ministry of Transport', industry: 'Government' },
  { id: 'client-019', name: 'Bulawayo City Council', industry: 'Municipality' },
  { id: 'client-020', name: 'Gwanda Municipality', industry: 'Municipality' }
];

// Export functions
export const getCompanyInfo = (): CompanyInfo => companyInfo;
export const getTestimonials = (): Testimonial[] => testimonials;
export const getDiasporaPackages = (): DiasporaPackage[] => diasporaPackages;
export const getBrands = (): Brand[] => brands;
export const getStats = (): Stat[] => stats;
export const getFAQs = (): FAQ[] => faqs;
export const getMajorClients = (): Client[] => majorClients;
