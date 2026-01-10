// Company Contact Information
export const COMPANY_NAME = 'GIDS-MARTZ Industrial Suppliers (Pvt) Ltd';
export const COMPANY_SHORT_NAME = 'GIDS-MARTZ';
export const COMPANY_TAGLINE = 'Quality | Efficiency | Professionalism';

// Contact Numbers
export const WHATSAPP_NUMBER = '+263772814232';
export const BULAWAYO_PHONE = '+263 292 77880';
export const HARARE_PHONE = '+263 242 257169';

// Email
export const SALES_EMAIL = 'sales@gidsmartz.com';

// Website
export const WEBSITE_URL = 'https://www.gidsmartz.com';

// Social Links
export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/gidsmartz',
  linkedin: 'https://linkedin.com/company/gidsmartz',
  twitter: '',
  instagram: ''
};

// Currency
export const DEFAULT_CURRENCY = 'USD';
export const SUPPORTED_CURRENCIES = ['USD', 'ZWL', 'GBP', 'EUR', 'ZAR', 'AUD'] as const;

// Business Hours
export const BUSINESS_HOURS = {
  weekdays: '8:00 AM - 5:00 PM',
  saturday: '8:00 AM - 1:00 PM',
  sunday: 'Closed'
};

// Navigation Items
export const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Diaspora Program', href: '/diaspora' },
  { label: 'Contact', href: '/contact' }
];

// Featured Brands
export const FEATURED_BRANDS = [
  'Siemens',
  'ABB',
  'Schneider Electric',
  'Allen Bradley',
  'Eaton',
  'Festo',
  'Burkert',
  'WEG',
  'Legrand',
  'Fluke'
];

// Meta Information
export const META = {
  title: 'GIDS-MARTZ Industrial Suppliers | Electrical Equipment Zimbabwe',
  description: "Zimbabwe's trusted supplier of industrial electrical equipment, switchgear, automation, and mining supplies. Serving Bulawayo, Harare & SADC region since 1997.",
  keywords: 'electrical suppliers zimbabwe, industrial equipment bulawayo, switchgear harare, mining equipment, VFD drives, contactors zimbabwe, electrical wholesaler, GIDS-MARTZ'
};

// Theme Colors (matching globals.css)
export const COLORS = {
  primary: '#1E3A8A',      // GIDS Blue
  primaryLight: '#1E40AF',
  primaryDark: '#172554',
  secondary: '#DC2626',    // GIDS Red
  secondaryLight: '#EF4444',
  secondaryDark: '#B91C1C',
  gray: '#F3F4F6',
  grayDark: '#6B7280',
  white: '#FFFFFF',
  black: '#000000'
};

// Pagination
export const PRODUCTS_PER_PAGE = 12;

// WhatsApp Message Templates
export const WHATSAPP_MESSAGES = {
  general: "Hi, I'm interested in your products. Can you help me?",
  product: (productName: string) => `Hi, I'm interested in ${productName}. Can you provide more information and pricing?`,
  quote: "Hi, I'd like to request a quotation for some products.",
  diaspora: "Hi, I'm in the diaspora and interested in your building materials program."
};
