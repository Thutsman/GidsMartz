'use client';

import { ShieldCheck, Users, Award, Zap, Package, Headphones } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import { brands } from '@/data/company-info';

const advantages = [
  {
    icon: Users,
    title: 'Customer Need-Satisfaction Driven',
    description: 'We focus on understanding and meeting our customers\' unique requirements with tailored solutions.'
  },
  {
    icon: Zap,
    title: 'Strong Product Knowledge',
    description: 'Our technical expertise ensures you get the right products for your specific applications.'
  },
  {
    icon: ShieldCheck,
    title: 'Quality Products',
    description: 'We supply original and durable top brand quality products from world-leading manufacturers.'
  },
  {
    icon: Package,
    title: 'Efficient Service Delivery',
    description: 'Streamlined processes and experienced team ensure timely delivery and excellent service.'
  },
  {
    icon: Award,
    title: '27+ Years Experience',
    description: 'Over two decades of industry experience spanning across multiple sectors and applications.'
  },
  {
    icon: Headphones,
    title: 'Comprehensive Support',
    description: 'From product selection to after-sales support, we\'re with you every step of the way.'
  }
];

interface AdvantageCardProps {
  advantage: typeof advantages[0];
  index: number;
}

function AdvantageCard({ advantage, index }: AdvantageCardProps) {
  const Icon = advantage.icon;
  const { ref, isVisible } = useScrollAnimation({ 
    triggerOnce: true, 
    delay: index * 100 
  });

  return (
    <div
      ref={ref}
      className={cn(
        'bg-gray-50 rounded-xl p-6 sm:p-8 group hover:shadow-lg transition-all duration-300',
        'scroll-fade-in',
        isVisible && 'visible'
      )}
    >
      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#1E3A8A] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#DC2626] transition-colors">
        <Icon className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
      </div>
      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
        {advantage.title}
      </h3>
      <p className="text-gray-600 text-sm sm:text-base">
        {advantage.description}
      </p>
    </div>
  );
}

export function CompetitiveAdvantages() {
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
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1E3A8A] mt-2 mb-4">
            Competitive Advantages
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base">
            We have an unrivalled competitive and differential advantage of being customer need-satisfaction driven, 
            providing solutions, strong product knowledge, quality products, efficient service delivery and unmatched 
            experience spanning over 27 years.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {advantages.map((advantage, index) => (
            <AdvantageCard key={advantage.title} advantage={advantage} index={index} />
          ))}
        </div>

        {/* Brands Section */}
        <div className="bg-gradient-to-br from-[#1E3A8A] to-[#172554] rounded-2xl p-8 sm:p-10 md:p-12 text-white">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
            Top Quality Brands We Supply
          </h3>
          <p className="text-gray-200 text-center mb-8 text-sm sm:text-base max-w-3xl mx-auto">
            Our strength lies in supplying original and durable top brand quality products to our customers. 
            We offer products from top quality brands including:
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {brands.slice(0, 12).map((brand) => (
              <span
                key={brand.id}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-sm sm:text-base font-medium hover:bg-white/20 transition-colors"
              >
                {brand.name}
              </span>
            ))}
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-sm sm:text-base font-medium">
              and many more...
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
