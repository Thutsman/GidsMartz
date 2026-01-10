'use client';

import Image from 'next/image';
import { Star, Quote } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { testimonials } from '@/data/company-info';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  testimonial: typeof testimonials[0];
  index: number;
}

function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  const { ref, isVisible } = useScrollAnimation({ 
    triggerOnce: true, 
    delay: index * 100 
  });

  return (
    <div
      ref={ref}
      className={cn(
        'bg-gray-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 relative group hover:shadow-lg transition-shadow',
        'scroll-fade-in',
        isVisible && 'visible'
      )}
    >
      {/* Quote Icon */}
      <div className="absolute top-4 sm:top-6 right-4 sm:right-6 text-[#1E3A8A]/10 group-hover:text-[#1E3A8A]/20 transition-colors">
        <Quote className="h-8 w-8 sm:h-12 sm:w-12" />
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-3 sm:mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star
            key={i}
            className="h-4 w-4 sm:h-5 sm:w-5 fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>

      {/* Quote */}
      <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 sm:mb-6 relative z-10">
        &quot;{testimonial.quote}&quot;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 sm:gap-4">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-[#1E3A8A] flex items-center justify-center flex-shrink-0">
          {testimonial.image ? (
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              width={48}
              height={48}
              className="object-cover"
            />
          ) : (
            <span className="text-white font-semibold text-xs sm:text-sm">
              {testimonial.name.split(' ').map(n => n[0]).join('')}
            </span>
          )}
        </div>
        <div className="min-w-0">
          <p className="text-sm sm:text-base font-semibold text-gray-900 truncate">
            {testimonial.name}
          </p>
          <p className="text-xs sm:text-sm text-gray-600 truncate">
            {testimonial.company}
          </p>
        </div>
      </div>

      {/* Industry Badge */}
      <Badge
        variant="secondary"
        className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 bg-[#1E3A8A]/10 text-[#1E3A8A] hover:bg-[#1E3A8A]/20 text-xs"
      >
        {testimonial.industry}
      </Badge>
    </div>
  );
}

export function Testimonials() {
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
            Testimonials
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1E3A8A] mt-2 mb-3 sm:mb-4 px-4">
            What Our Clients Say
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
            Don&apos;t just take our word for it - hear from some of our satisfied customers
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
