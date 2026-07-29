'use client';

import Link from 'next/link';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Linkedin,
  MessageCircle,
  ChevronRight
} from 'lucide-react';
import { Logo } from '@/components/common/Logo';
import { generateWhatsAppLink } from '@/lib/utils';
import {
  COMPANY_SHORT_NAME,
  SALES_EMAIL,
  WHATSAPP_NUMBER,
  WHATSAPP_MESSAGES,
  FEATURED_BRANDS,
  BUSINESS_HOURS
} from '@/lib/constants';
import { companyInfo } from '@/data/company-info';
import { categories } from '@/data/categories';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Diaspora Program', href: '/diaspora' },
  { label: 'Contact', href: '/contact' }
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1E3A8A] text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 py-10 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {/* Column 1: About */}
          <div>
            <div className="bg-white p-3 rounded-lg inline-block mb-4">
              <Logo size="sm" linkToHome={false} />
            </div>
            <p className="text-gray-300 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed">
              Zimbabwe&apos;s trusted supplier of industrial electrical equipment,
              switchgear, and automation solutions since 1997.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3">
              <span className="bg-[#172554] px-3 py-1 rounded-full text-xs">
                27+ Years
              </span>
              <span className="bg-[#172554] px-3 py-1 rounded-full text-xs">
                Genuine Products
              </span>
              <span className="bg-[#172554] px-3 py-1 rounded-full text-xs">
                SADC Delivery
              </span>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              <a
                href={companyInfo.socialLinks?.facebook || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#172554] rounded-lg flex items-center justify-center hover:bg-[#DC2626] transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={companyInfo.socialLinks?.linkedin || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#172554] rounded-lg flex items-center justify-center hover:bg-[#DC2626] transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={generateWhatsAppLink(WHATSAPP_MESSAGES.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#25D366] rounded-lg flex items-center justify-center hover:bg-[#128C7E] transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white flex items-center gap-2 group transition-colors"
                  >
                    <ChevronRight className="h-4 w-4 text-[#DC2626] group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Product Categories */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Product Categories</h3>
            <ul className="space-y-3">
              {categories.slice(0, 6).map((category) => (
                <li key={category.id}>
                  <Link
                    href={`/products?category=${category.slug}`}
                    className="text-gray-300 hover:text-white flex items-center gap-2 group transition-colors"
                  >
                    <ChevronRight className="h-4 w-4 text-[#DC2626] group-hover:translate-x-1 transition-transform" />
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contact Us</h3>

            {/* Bulawayo Office */}
            <div className="mb-6">
              <p className="text-[#DC2626] font-medium mb-2">Bulawayo (Head Office)</p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>120 Jason Moyo, Between 12th & 13th Ave</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  <span>+263 292 77880/1</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  <span>+263 772 814 232</span>
                </li>
              </ul>
            </div>

            {/* Harare Office */}
            <div className="mb-6">
              <p className="text-[#DC2626] font-medium mb-2">Harare</p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>78 Suffolk Road</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  <span>+263 242 257169</span>
                </li>
              </ul>
            </div>

            {/* Email & Hours */}
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href={`mailto:${SALES_EMAIL}`} className="hover:text-white">
                  {SALES_EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 flex-shrink-0" />
                <span>Mon-Fri: {BUSINESS_HOURS.weekdays}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Brands Strip */}
      <div className="border-t border-[#172554]">
        <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <p className="text-center text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4">
            Trusted Brands We Supply
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-8">
            {FEATURED_BRANDS.map((brand) => (
              <span
                key={brand}
                className="text-gray-400 text-sm font-medium hover:text-white transition-colors"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#172554] bg-[#172554]">
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-400 text-center md:text-left">
            <p>
              &copy; {currentYear} {COMPANY_SHORT_NAME}. All rights reserved.
            </p>
            <p>
              Company Reg: 463/1997 | VAT: 10014964
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
