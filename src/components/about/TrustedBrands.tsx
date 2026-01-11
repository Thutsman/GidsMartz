'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import { brands } from '@/data/company-info';

export function TrustedBrands() {
  const { ref, isVisible } = useScrollAnimation({ triggerOnce: true });

  // Duplicate brands for seamless infinite scroll
  const duplicatedBrands = [...brands, ...brands];

  return (
    <section 
      ref={ref}
      className={cn(
        'py-10 sm:py-12 bg-white overflow-hidden',
        'scroll-fade-in',
        isVisible && 'visible'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 mb-6 sm:mb-8">
        <p className="text-center text-gray-600 font-medium text-sm sm:text-base">
          Trusted Brands We Supply
        </p>
      </div>

      {/* Scrolling Container */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Scrolling Brands */}
        <div className="flex animate-scroll">
          {duplicatedBrands.map((brand, index) => (
            <div
              key={`${brand.id}-${index}`}
              className="flex-shrink-0 px-6 sm:px-8 md:px-12"
            >
              <div className="h-12 sm:h-16 flex items-center justify-center">
                <span className="text-lg sm:text-xl md:text-2xl font-bold text-gray-400 hover:text-[#1E3A8A] transition-colors whitespace-nowrap">
                  {brand.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
