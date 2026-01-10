'use client';

import Link from 'next/link';
import { Phone, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BULAWAYO_PHONE } from '@/lib/constants';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

export function CTASection() {
  const { ref, isVisible } = useScrollAnimation({ triggerOnce: true });

  return (
    <section 
      ref={ref}
      className={cn(
        'py-12 sm:py-16 md:py-20 bg-[#DC2626] relative overflow-hidden',
        'scroll-fade-in',
        isVisible && 'visible'
      )}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 px-4">
            Ready to Get Started?
          </h2>
          <p className="text-white/90 text-base sm:text-lg md:text-xl mb-6 sm:mb-8 px-4">
            Contact us today for a quotation or to discuss your electrical equipment needs.
            Our team is ready to assist you.
          </p>

          {/* Phone Number */}
          <p className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 px-4">
            <Phone className="inline-block h-6 w-6 sm:h-8 sm:w-8 mr-2 sm:mr-3" />
            {BULAWAYO_PHONE}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-white text-[#DC2626] hover:bg-gray-100 px-6 sm:px-8 text-sm sm:text-base"
              >
                <FileText className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                Request a Quote
              </Button>
            </Link>
            <a href={`tel:${BULAWAYO_PHONE.replace(/\s/g, '')}`} className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-[#DC2626] px-6 sm:px-8 text-sm sm:text-base"
              >
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                Call Us Now
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
