'use client';

import { Calendar, Package, Users, MapPin } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import { stats } from '@/data/company-info';

const iconMap: Record<string, React.ElementType> = {
  'Calendar': Calendar,
  'Package': Package,
  'Users': Users,
  'MapPin': MapPin,
};

export function CompanyStats() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ triggerOnce: true });

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#1E3A8A] via-[#172554] to-[#1E3A8A] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#DC2626] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div 
          ref={headerRef}
          className={cn(
            'text-center mb-10 sm:mb-12',
            'scroll-fade-in',
            headerVisible && 'visible'
          )}
        >
          <span className="inline-block px-4 py-1.5 bg-[#DC2626] text-white text-sm sm:text-base font-semibold rounded-full mb-4">
            By The Numbers
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
            Our Achievements
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => {
            const Icon = (stat.icon && iconMap[stat.icon]) || Package;
            const { ref, isVisible } = useScrollAnimation({ 
              triggerOnce: true, 
              delay: index * 100 
            });

            return (
              <div
                key={stat.label}
                ref={ref}
                className={cn(
                  'bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center',
                  'scroll-fade-in',
                  isVisible && 'visible'
                )}
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                </div>
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2">
                  {stat.value}
                  {stat.suffix && <span className="text-[#DC2626]">{stat.suffix}</span>}
                </div>
                <p className="text-gray-200 text-sm sm:text-base font-medium">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
