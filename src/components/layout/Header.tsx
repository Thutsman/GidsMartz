'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Menu,
  X,
  Phone,
  Mail,
  Search,
  ChevronDown,
  MessageCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { LogoSimple } from '@/components/common/Logo';
import { cn, generateWhatsAppLink } from '@/lib/utils';
import { NAV_ITEMS, BULAWAYO_PHONE, SALES_EMAIL, WHATSAPP_NUMBER, WHATSAPP_MESSAGES } from '@/lib/constants';
import { categories } from '@/data/categories';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-[#1E3A8A] text-white py-2 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <a
                href={`tel:${BULAWAYO_PHONE.replace(/\s/g, '')}`}
                className="flex items-center gap-2 hover:text-gray-200 transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>{BULAWAYO_PHONE}</span>
              </a>
              <a
                href={`mailto:${SALES_EMAIL}`}
                className="flex items-center gap-2 hover:text-gray-200 transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>{SALES_EMAIL}</span>
              </a>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-300">27+ Years of Excellence</span>
              <span className="text-gray-500">|</span>
              <span className="text-gray-300">Bulawayo & Harare</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div
        className={cn(
          'bg-white transition-all duration-300',
          isScrolled ? 'shadow-md' : 'shadow-sm'
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <LogoSimple />

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <div key={item.href} className="relative">
                  {item.label === 'Products' ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setIsProductsOpen(true)}
                      onMouseLeave={() => setIsProductsOpen(false)}
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          'flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-md transition-colors',
                          isActive(item.href)
                            ? 'text-[#1E3A8A] bg-blue-50'
                            : 'text-gray-700 hover:text-[#1E3A8A] hover:bg-gray-50'
                        )}
                      >
                        {item.label}
                        <ChevronDown className={cn(
                          'h-4 w-4 transition-transform',
                          isProductsOpen && 'rotate-180'
                        )} />
                      </Link>

                      {/* Mega Menu */}
                      {isProductsOpen && (
                        <div className="absolute top-full left-0 w-[600px] bg-white shadow-xl rounded-lg border mt-1 p-6 grid grid-cols-2 gap-4">
                          {categories.slice(0, 8).map((category) => (
                            <Link
                              key={category.id}
                              href={`/products?category=${category.slug}`}
                              className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                            >
                              <div className="w-10 h-10 bg-[#1E3A8A] rounded-lg flex items-center justify-center text-white group-hover:bg-[#DC2626] transition-colors">
                                <span className="text-xs font-bold">
                                  {category.name.charAt(0)}
                                </span>
                              </div>
                              <div>
                                <p className="font-medium text-gray-900 group-hover:text-[#1E3A8A]">
                                  {category.name}
                                </p>
                                <p className="text-xs text-gray-500">
                                  {category.productCount} products
                                </p>
                              </div>
                            </Link>
                          ))}
                          <Link
                            href="/products"
                            className="col-span-2 text-center py-3 text-[#1E3A8A] font-medium hover:underline"
                          >
                            View All Categories →
                          </Link>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        'px-4 py-2 text-sm font-medium rounded-md transition-colors',
                        isActive(item.href)
                          ? 'text-[#1E3A8A] bg-blue-50'
                          : 'text-gray-700 hover:text-[#1E3A8A] hover:bg-gray-50'
                      )}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-2 md:gap-4">
              {/* Search Button */}
              <Button
                variant="ghost"
                size="icon"
                className="hidden md:flex"
              >
                <Search className="h-5 w-5" />
              </Button>

              {/* WhatsApp Button */}
              <a
                href={generateWhatsAppLink(WHATSAPP_MESSAGES.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex"
              >
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-[#25D366] hover:bg-[#128C7E] text-white border-none gap-2"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span className="hidden lg:inline">WhatsApp</span>
                </Button>
              </a>

              {/* Get Quote Button */}
              <Link href="/contact" className="hidden md:block">
                <Button
                  size="sm"
                  className="bg-[#DC2626] hover:bg-[#B91C1C] text-white"
                >
                  Get Quote
                </Button>
              </Link>

              {/* Mobile Menu */}
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild className="lg:hidden">
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[350px]">
                  <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                  <div className="flex flex-col h-full">
                    {/* Mobile Logo */}
                    <div className="pb-6 border-b">
                      <LogoSimple />
                    </div>

                    {/* Mobile Navigation */}
                    <nav className="flex-1 py-6">
                      <ul className="space-y-2">
                        {NAV_ITEMS.map((item) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className={cn(
                                'block px-4 py-3 rounded-lg text-base font-medium transition-colors',
                                isActive(item.href)
                                  ? 'bg-[#1E3A8A] text-white'
                                  : 'text-gray-700 hover:bg-gray-100'
                              )}
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>

                      {/* Mobile Categories */}
                      <div className="mt-6 pt-6 border-t">
                        <p className="px-4 text-sm font-semibold text-gray-500 uppercase">
                          Popular Categories
                        </p>
                        <ul className="mt-3 space-y-1">
                          {categories.slice(0, 5).map((category) => (
                            <li key={category.id}>
                              <Link
                                href={`/products?category=${category.slug}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block px-4 py-2 text-sm text-gray-600 hover:text-[#1E3A8A]"
                              >
                                {category.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </nav>

                    {/* Mobile CTA */}
                    <div className="pt-6 border-t space-y-3">
                      <a
                        href={generateWhatsAppLink(WHATSAPP_MESSAGES.general)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <Button className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white gap-2">
                          <MessageCircle className="h-4 w-4" />
                          WhatsApp Us
                        </Button>
                      </a>
                      <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                        <Button className="w-full bg-[#DC2626] hover:bg-[#B91C1C] text-white">
                          Get a Quote
                        </Button>
                      </Link>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
