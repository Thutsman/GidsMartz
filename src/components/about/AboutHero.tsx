'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

export function AboutHero() {
  const { ref, isVisible } = useScrollAnimation({ triggerOnce: true });

  return (
    <section 
      ref={ref}
      className={cn(
        'relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-[#1E3A8A] via-[#172554] to-[#1E3A8A] overflow-hidden',
        'scroll-fade-in',
        isVisible && 'visible'
      )}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#DC2626] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 bg-[#DC2626] text-white text-sm sm:text-base font-semibold rounded-full mb-4">
            Our Story
          </span>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            About GIDS-MARTZ
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Zimbabwe&apos;s trusted supplier of industrial electrical equipment, 
            switchgear, and automation solutions since 1997
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-white/80 text-sm sm:text-base">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#DC2626] rounded-full"></span>
              <span>27+ Years of Excellence</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#DC2626] rounded-full"></span>
              <span>Customer-Oriented</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#DC2626] rounded-full"></span>
              <span>Technical Expertise</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
