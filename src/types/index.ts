// Product Types
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: 'USD' | 'ZWL';
  category: string;
  categorySlug: string;
  subcategory?: string;
  brand: string;
  image: string;
  images?: string[];
  inStock: boolean;
  stockQuantity?: number;
  specifications?: Record<string, string>;
  featured?: boolean;
  isNew?: boolean;
  discount?: number;
  sku?: string;
  weight?: string;
  dimensions?: string;
  warranty?: string;
  createdAt?: string;
  updatedAt?: string;
}

// Category Types
export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  icon?: string;
  productCount: number;
  featured?: boolean;
  order?: number;
}

// Hero Slide Types
export interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  ctaText: string;
  ctaLink: string;
  ctaSecondaryText?: string;
  ctaSecondaryLink?: string;
}

// Contact Types
export interface ContactInfo {
  location: string;
  address: string;
  phone: string[];
  cell: string[];
  email: string;
  fax?: string;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  founded: string;
  website: string;
  whatsapp: string;
  offices: ContactInfo[];
  socialLinks?: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
}

// Form Types
export interface InquiryForm {
  name: string;
  email: string;
  phone: string;
  company?: string;
  subject: string;
  message: string;
  products?: string[];
}

export interface QuoteRequest {
  name: string;
  email: string;
  phone: string;
  company?: string;
  products: {
    productId: string;
    productName: string;
    quantity: number;
  }[];
  notes?: string;
  preferredCurrency?: 'USD' | 'ZWL' | 'GBP' | 'EUR' | 'ZAR' | 'AUD';
}

export interface DiasporaInquiry {
  name: string;
  email: string;
  phone: string;
  countryOfResidence: string;
  projectType: 'residential' | 'commercial' | 'industrial' | 'other';
  message: string;
  preferWhatsApp: boolean;
  preferredCurrency: 'USD' | 'GBP' | 'EUR' | 'ZAR' | 'AUD';
}

// Testimonial Types
export interface Testimonial {
  id: string;
  name: string;
  company: string;
  industry: string;
  quote: string;
  rating: number;
  image?: string;
}

// Filter Types
export interface ProductFilters {
  category?: string;
  brand?: string;
  minPrice?: number;
  maxPrice?: number;
  inStock?: boolean;
  search?: string;
  sort?: 'newest' | 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc';
}

// Navigation Types
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  icon?: string;
}

// Package Types (for Diaspora)
export interface DiasporaPackage {
  id: string;
  name: string;
  description: string;
  startingPrice: number;
  currency: 'USD';
  includes: string[];
  image: string;
  popular?: boolean;
}

// Brand Types
export interface Brand {
  id: string;
  name: string;
  logo?: string;
}

// Stats Types
export interface Stat {
  label: string;
  value: string;
  suffix?: string;
  icon?: string;
}

// FAQ Types
export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

// Client Types
export interface Client {
  id: string;
  name: string;
  logo?: string;
  industry: string;
}
