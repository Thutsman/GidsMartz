'use client';

import { ShieldCheck, Wrench, DollarSign, HeadphonesIcon } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

const features = [
  {
    icon: ShieldCheck,
    title: 'Genuine Products',
    description: 'We only supply original, quality products from authorized distributors. No counterfeits, ever.'
  },
  {
    icon: Wrench,
    title: 'Technical Expertise',
    description: '27+ years of electrical engineering experience. We understand your technical requirements.'
  },
  {
    icon: DollarSign,
    title: 'Competitive Pricing',
    description: 'Best prices without compromising quality. Bulk discounts and flexible payment options available.'
  },
  {
    icon: HeadphonesIcon,
    title: 'After-Sales Support',
    description: 'Ongoing technical support, warranty handling, and follow-up service for all our products.'
  }
];

interface FeatureCardProps {
  feature: typeof features[0];
  index: number;
}

function FeatureCard({ feature, index }: FeatureCardProps) {
  const { ref, isVisible } = useScrollAnimation({ 
    triggerOnce: true, 
    delay: index * 100 
  });

  return (
    <div
      ref={ref}
      className={cn(
        'text-center group',
        'scroll-fade-in',
        isVisible && 'visible'
      )}
    >
      {/* Icon */}
      <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-gray-50 group-hover:bg-[#1E3A8A] rounded-xl sm:rounded-2xl flex items-center justify-center transition-colors duration-300">
        <feature.icon className="h-8 w-8 sm:h-10 sm:w-10 text-[#1E3A8A] group-hover:text-white transition-colors duration-300" />
      </div>

      {/* Content */}
      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3 px-2">
        {feature.title}
      </h3>
      <p className="text-sm sm:text-base text-gray-600 leading-relaxed px-2">
        {feature.description}
      </p>
    </div>
  );
}

export function WhyChooseUs() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ triggerOnce: true });

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={cn(
            'text-center mb-8 sm:mb-10 md:mb-12',
            'scroll-fade-in',
            headerVisible && 'visible'
          )}
        >
          <span className="text-[#DC2626] font-semibold text-xs sm:text-sm uppercase tracking-wider">
            Our Advantages
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1E3A8A] mt-2 mb-3 sm:mb-4 px-4">
            Why Choose GIDS-MARTZ?
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
            With over 27 years in the industry, we&apos;ve built our reputation on quality, reliability, and customer satisfaction
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
