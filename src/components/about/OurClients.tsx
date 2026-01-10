'use client';

import { Building2, Factory, HardHat, Truck, Plane, Zap, GraduationCap, Shield } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import { majorClients } from '@/data/company-info';

const industryIcons: Record<string, React.ElementType> = {
  'Mining': HardHat,
  'Manufacturing': Factory,
  'Transport': Truck,
  'Aviation': Plane,
  'Energy': Zap,
  'Education': GraduationCap,
  'Government': Shield,
  'Municipality': Building2,
};

export function OurClients() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ triggerOnce: true });

  // Group clients by industry
  const clientsByIndustry = majorClients.reduce((acc, client) => {
    if (!acc[client.industry]) {
      acc[client.industry] = [];
    }
    acc[client.industry].push(client);
    return acc;
  }, {} as Record<string, typeof majorClients>);

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
            Our Network
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1E3A8A] mt-2 mb-4">
            Our Clients
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base">
            Our clients range from manufacturing industries, service providers, mining, construction, 
            NGOs and government ministries. We serve organizations across all sectors of the Zimbabwean economy.
          </p>
        </div>

        {/* Clients by Industry */}
        <div className="space-y-8 sm:space-y-10">
          {Object.entries(clientsByIndustry).map(([industry, clients], industryIndex) => {
            const Icon = industryIcons[industry] || Building2;
            const { ref: industryRef, isVisible: industryVisible } = useScrollAnimation({ 
              triggerOnce: true, 
              delay: industryIndex * 150 
            });

            return (
              <div
                key={industry}
                ref={industryRef}
                className={cn(
                  'bg-white rounded-xl p-6 sm:p-8 shadow-sm',
                  'scroll-fade-in',
                  industryVisible && 'visible'
                )}
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#1E3A8A] rounded-xl flex items-center justify-center">
                    <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{industry}</h3>
                    <p className="text-sm sm:text-base text-gray-600">{clients.length} clients</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                  {clients.map((client) => (
                    <div
                      key={client.id}
                      className="px-4 py-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <p className="font-medium text-gray-900 text-sm sm:text-base">{client.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
