'use client';

import { Zap, Wrench, Cog, HardHat, Cable, Wind, Building2 } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

const businessAreas = [
  { icon: Zap, title: 'Electrical Equipment', description: 'Complete range of electrical equipment and services' },
  { icon: Wrench, title: 'Repairs & Maintenance', description: 'Professional repairs and maintenance services' },
  { icon: Wind, title: 'Refrigeration & AC', description: 'Refrigeration and Air Conditioning solutions' },
  { icon: HardHat, title: 'Mining Equipment', description: 'Specialized mining equipment and supplies' },
  { icon: Cog, title: 'Mechanical Engineering', description: 'Mechanical engineering products and services' },
  { icon: Cable, title: 'Switch Gear & Control', description: 'Electrical control switch gear and automation' },
  { icon: Building2, title: 'Civil Engineering', description: 'Civil engineering materials and supplies' },
];

interface BusinessAreaCardProps {
  area: typeof businessAreas[0];
  index: number;
}

function BusinessAreaCard({ area, index }: BusinessAreaCardProps) {
  const Icon = area.icon;
  const { ref, isVisible } = useScrollAnimation({ 
    triggerOnce: true, 
    delay: index * 100 
  });

  return (
    <div
      ref={ref}
      className={cn(
        'bg-white rounded-xl p-6 sm:p-8 group hover:shadow-lg transition-all duration-300',
        'scroll-fade-in',
        isVisible && 'visible'
      )}
    >
      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#1E3A8A] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#DC2626] transition-colors">
        <Icon className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
      </div>
      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
        {area.title}
      </h3>
      <p className="text-gray-600 text-sm sm:text-base">
        {area.description}
      </p>
    </div>
  );
}

export function ScopeOfBusiness() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ triggerOnce: true });

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
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
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1E3A8A] mt-2 mb-4">
            Scope of Business
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base">
            We provide comprehensive solutions across multiple engineering disciplines, 
            serving industries throughout Zimbabwe and the SADC region.
          </p>
        </div>

        {/* Business Areas Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {businessAreas.map((area, index) => (
            <BusinessAreaCard key={area.title} area={area} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
