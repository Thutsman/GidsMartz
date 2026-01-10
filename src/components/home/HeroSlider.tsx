'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { heroSlides } from '@/data/hero-slides';

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <section className="relative w-full h-[60vh] sm:h-[65vh] md:h-[70vh] lg:h-[75vh] overflow-hidden">
      {/* Slides */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            'absolute inset-0 transition-opacity duration-1000',
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          )}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
          </div>

          {/* Content */}
          <div className="relative h-full container mx-auto px-4 sm:px-6 flex items-center">
            <div
              className={cn(
                'max-w-2xl w-full',
                'transition-all duration-700 delay-300',
                index === currentSlide
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              )}
            >
              {/* Subtitle */}
              <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 bg-[#DC2626] text-white text-xs sm:text-sm md:text-base font-semibold rounded-full mb-3 sm:mb-4">
                {slide.subtitle}
              </span>

              {/* Title */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4 leading-tight">
                {slide.title}
              </h1>

              {/* Description */}
              <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-6 sm:mb-8 max-w-xl">
                {slide.description}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <Link href={slide.ctaLink} className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-[#DC2626] hover:bg-[#B91C1C] text-white px-6 sm:px-8 text-sm sm:text-base"
                  >
                    {slide.ctaText}
                  </Button>
                </Link>
                {slide.ctaSecondaryText && slide.ctaSecondaryLink && (
                  <Link href={slide.ctaSecondaryLink} className="w-full sm:w-auto">
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full sm:w-auto border-2 border-white !bg-transparent !text-white hover:!bg-white hover:!text-[#1E3A8A] px-6 sm:px-8 text-sm sm:text-base font-semibold shadow-lg"
                    >
                      {slide.ctaSecondaryText}
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={() => {
          prevSlide();
          setIsAutoPlaying(false);
          setTimeout(() => setIsAutoPlaying(true), 10000);
        }}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all hidden sm:flex touch-none"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>
      <button
        onClick={() => {
          nextSlide();
          setIsAutoPlaying(false);
          setTimeout(() => setIsAutoPlaying(true), 10000);
        }}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all hidden sm:flex touch-none"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              'w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 touch-manipulation',
              index === currentSlide
                ? 'bg-[#DC2626] w-6 sm:w-8'
                : 'bg-white/50 hover:bg-white/80'
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default HeroSlider;
