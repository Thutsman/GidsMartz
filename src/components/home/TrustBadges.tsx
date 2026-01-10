'use client';

import { Award, ShieldCheck, Truck, Headphones } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

const badges = [
  {
    icon: Award,
    title: '27+ Years Experience',
    description: 'Trusted since 1997'
  },
  {
    icon: ShieldCheck,
    title: '100% Genuine Products',
    description: 'Original brands only'
  },
  {
    icon: Truck,
    title: 'SADC Delivery',
    description: 'Regional shipping'
  },
  {
    icon: Headphones,
    title: 'Technical Support',
    description: 'Expert assistance'
  }
];

export function TrustBadges() {
  const { ref, isVisible } = useScrollAnimation({ triggerOnce: true });

  return (
    <section 
      ref={ref}
      className={cn(
        'bg-[#1E3A8A] py-4 sm:py-5 md:py-6',
        'scroll-fade-in',
        isVisible && 'visible'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-8">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex items-center gap-2 sm:gap-3 justify-center md:justify-start"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <badge.icon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" />
              </div>
              <div className="min-w-0">
                <p className="text-white font-semibold text-xs sm:text-sm md:text-base truncate">
                  {badge.title}
                </p>
                <p className="text-gray-300 text-xs md:text-sm hidden md:block">
                  {badge.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustBadges;
