'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  Check,
  Globe,
  Warehouse,
  Truck,
  MessageCircle,
  CreditCard,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { generateWhatsAppLink } from '@/lib/utils';
import { WHATSAPP_MESSAGES } from '@/lib/constants';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

const benefits = [
  {
    icon: CreditCard,
    text: 'Source quality materials at local prices'
  },
  {
    icon: Warehouse,
    text: 'Secure storage until you\'re ready'
  },
  {
    icon: Truck,
    text: 'Nationwide delivery to your site'
  },
  {
    icon: MessageCircle,
    text: 'WhatsApp updates & photos'
  },
  {
    icon: Globe,
    text: 'USD, GBP, EUR, ZAR & AUD accepted'
  }
];

export function DiasporaSection() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation({ triggerOnce: true });
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ triggerOnce: true, delay: 100 });
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation({ triggerOnce: true, delay: 200 });

  return (
    <section 
      ref={sectionRef}
      className={cn(
        'py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#1E3A8A] via-[#172554] to-[#1E3A8A] relative overflow-hidden',
        'scroll-fade-in',
        sectionVisible && 'visible'
      )}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#DC2626] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          {/* Content */}
          <div 
            ref={contentRef}
            className={cn(
              'scroll-slide-right',
              contentVisible && 'visible'
            )}
          >
            <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-[#DC2626] text-white text-xs sm:text-sm font-semibold rounded-full mb-3 sm:mb-4">
              Diaspora Program
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Building Your Future Home in Zimbabwe
            </h2>

            <p className="text-gray-300 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
              Are you living abroad and planning to build your dream home in Zimbabwe?
              We&apos;ve helped hundreds of Zimbabweans in the diaspora source quality
              building materials at competitive prices.
            </p>

            {/* Benefits List */}
            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-2 sm:gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="h-4 w-4 sm:h-5 sm:w-5 text-[#DC2626]" />
                  </div>
                  <span className="text-white text-sm sm:text-base">{benefit.text}</span>
                </li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Link href="/diaspora" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-[#DC2626] hover:bg-[#B91C1C] text-white text-sm sm:text-base px-6 sm:px-8"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
              <a
                href={generateWhatsAppLink(WHATSAPP_MESSAGES.diaspora)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-[#1E3A8A] text-sm sm:text-base px-6 sm:px-8"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </div>

          {/* Image */}
          <div 
            ref={imageRef}
            className={cn(
              'relative',
              'scroll-slide-left',
              imageVisible && 'visible'
            )}
          >
            <div className="relative aspect-square md:aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://placehold.co/800x600/1E3A8A/FFFFFF?text=Modern+House+Zimbabwe"
                alt="Modern house in Zimbabwe"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Floating Card */}
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-xl">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#1E3A8A] rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-xl sm:text-2xl font-bold text-white">500+</span>
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-gray-900 text-sm sm:text-base">
                      Diaspora Clients Served
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Building dreams across Zimbabwe
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Zimbabwe Colors Accent */}
            <div className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 bg-yellow-400 rounded-full opacity-80 hidden md:block" />
            <div className="absolute -top-2 sm:-top-4 -left-2 sm:-left-4 w-12 h-12 sm:w-16 sm:h-16 bg-green-600 rounded-full opacity-80 hidden md:block" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default DiasporaSection;
