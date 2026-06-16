'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, MapPin, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const slides = [
  {
    src: '/projects/redwing-mine-transformer.jpg',
    alt: 'New transformer installed at Redwing Mine substation, Penhalonga',
  },
  {
    src: '/projects/redwing-mine-substation-pole.jpg',
    alt: 'High-voltage distribution pole with insulators at Redwing Mine substation',
  },
  {
    src: '/projects/redwing-mine-surge-arresters.jpg',
    alt: 'Surge arresters and high-voltage equipment commissioned at Redwing Mine',
  },
];

const highlights = [
  'New substation design & commissioning',
  'Transformer installation',
  'High-voltage line infrastructure',
  'Full grid reconnection achieved',
];

export function FeaturedProject() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const { ref: sectionRef, isVisible } = useScrollAnimation({ triggerOnce: true });

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  const manualNav = (fn: () => void) => {
    fn();
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const id = setInterval(next, 4000);
    return () => clearInterval(id);
  }, [isAutoPlaying, next]);

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div
          ref={sectionRef}
          className={cn('text-center mb-8 sm:mb-10 scroll-fade-in', isVisible && 'visible')}
        >
          <span className="text-[#DC2626] font-semibold text-xs sm:text-sm uppercase tracking-wider">
            Our Work
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1E3A8A] mt-2 mb-3 sm:mb-4">
            Featured Project
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Real-world electrical infrastructure delivered by GidsMartz
          </p>
        </div>

        {/* Project Card */}
        <div className={cn(
          'max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-xl border border-gray-100',
          'flex flex-col lg:flex-row',
          'scroll-fade-in',
          isVisible && 'visible'
        )}>
          {/* Slideshow */}
          <div className="relative lg:w-3/5 aspect-[4/3] lg:aspect-auto lg:min-h-[420px] bg-gray-900 shrink-0">
            {slides.map((slide, i) => (
              <div
                key={slide.src}
                className={cn(
                  'absolute inset-0 transition-opacity duration-700',
                  i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
                )}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  priority={i === 0}
                />
              </div>
            ))}

            {/* Arrows */}
            <button
              onClick={() => manualNav(prev)}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 bg-black/40 hover:bg-black/60 rounded-full flex items-center justify-center text-white transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => manualNav(next)}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 bg-black/40 hover:bg-black/60 rounded-full flex items-center justify-center text-white transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Dot indicators */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setCurrent(i); setIsAutoPlaying(false); setTimeout(() => setIsAutoPlaying(true), 8000); }}
                  className={cn(
                    'rounded-full transition-all duration-300',
                    i === current ? 'bg-white w-5 h-2.5' : 'bg-white/50 w-2.5 h-2.5 hover:bg-white/75'
                  )}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>

            {/* Image count */}
            <div className="absolute top-3 right-3 z-20 bg-black/50 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
              {current + 1} / {slides.length}
            </div>
          </div>

          {/* Project Details */}
          <div className="flex-1 bg-[#1E3A8A] p-6 sm:p-8 flex flex-col justify-between text-white">
            <div>
              {/* Location badge */}
              <div className="flex items-center gap-1.5 text-blue-200 text-xs sm:text-sm mb-4">
                <MapPin className="h-4 w-4 shrink-0" />
                <span>Penhalonga, Manicaland, Zimbabwe</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold leading-snug mb-3">
                Redwing Mine — Grid Reconnection & Substation Commissioning
              </h3>

              <p className="text-blue-100 text-sm sm:text-base leading-relaxed mb-6">
                GidsMartz was contracted to supply and install the complete electrical
                infrastructure required to reconnect the historic Redwing gold mine to
                Zimbabwe&apos;s national electricity grid. The scope included the installation
                of a new transformer, commissioning of a substation, and construction of
                high-voltage power line infrastructure — restoring reliable grid power to
                the Penhalonga mining operation.
              </p>

              {/* Highlights */}
              <ul className="space-y-2">
                {highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-blue-100">
                    <CheckCircle className="h-4 w-4 shrink-0 text-green-400 mt-0.5" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* Client note */}
            <div className="mt-6 pt-5 border-t border-blue-700">
              <p className="text-xs text-blue-300 uppercase tracking-wider font-semibold mb-1">
                Client
              </p>
              <p className="text-sm text-blue-100">
                Namib Minerals (Redwing Mine) &mdash; Penhalonga, Zimbabwe
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProject;
