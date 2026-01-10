'use client';

import { MapPin, Phone, Mail, Printer, Globe } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import { companyInfo } from '@/data/company-info';

export function OurOffices() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ triggerOnce: true });

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div 
          ref={headerRef}
          className={cn(
            'text-center mb-10 sm:mb-12',
            'scroll-fade-in',
            headerVisible && 'visible'
          )}
        >
          <span className="text-[#DC2626] font-semibold text-xs sm:text-sm uppercase tracking-wider">
            Find Us
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1E3A8A] mt-2 mb-4">
            Our Offices
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base">
            We have offices in Bulawayo and Harare to serve you better. Visit us or contact us for all your industrial electrical needs.
          </p>
        </div>

        {/* Offices Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {companyInfo.offices.map((office, index) => {
            const { ref, isVisible } = useScrollAnimation({ 
              triggerOnce: true, 
              delay: index * 150 
            });

            return (
              <div
                key={office.location}
                ref={ref}
                className={cn(
                  'bg-gradient-to-br from-[#1E3A8A] to-[#172554] rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white',
                  'scroll-fade-in',
                  isVisible && 'visible'
                )}
              >
                <h3 className="text-2xl sm:text-3xl font-bold mb-6">
                  {office.location}
                </h3>

                <div className="space-y-4">
                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                        {office.address}
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  {office.phone && office.phone.length > 0 && (
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 flex-shrink-0" />
                      <div className="flex flex-col gap-1">
                        {office.phone.map((phone, idx) => (
                          <a
                            key={idx}
                            href={`tel:${phone.replace(/\s/g, '')}`}
                            className="text-sm sm:text-base text-gray-200 hover:text-white transition-colors"
                          >
                            {phone}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Cell */}
                  {office.cell && office.cell.length > 0 && (
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 flex-shrink-0" />
                      <div className="flex flex-col gap-1">
                        {office.cell.map((cell, idx) => (
                          <a
                            key={idx}
                            href={`tel:${cell.replace(/\s/g, '')}`}
                            className="text-sm sm:text-base text-gray-200 hover:text-white transition-colors"
                          >
                            {cell}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Fax */}
                  {office.fax && (
                    <div className="flex items-center gap-3">
                      <Printer className="h-5 w-5 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-gray-200">{office.fax}</span>
                    </div>
                  )}

                  {/* Email */}
                  {office.email && (
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 flex-shrink-0" />
                      <a
                        href={`mailto:${office.email}`}
                        className="text-sm sm:text-base text-gray-200 hover:text-white transition-colors"
                      >
                        {office.email}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Website */}
        <div className="mt-8 text-center">
          <a
            href={`https://${companyInfo.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#1E3A8A] hover:text-[#DC2626] font-semibold text-sm sm:text-base transition-colors"
          >
            <Globe className="h-5 w-5" />
            <span>{companyInfo.website}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
