'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  Zap,
  Gauge,
  Cable,
  Lightbulb,
  Cog,
  Radio,
  HardHat,
  Activity,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { getFeaturedCategories } from '@/data/categories';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const iconMap: Record<string, React.ElementType> = {
  'Zap': Zap,
  'Gauge': Gauge,
  'Cable': Cable,
  'Lightbulb': Lightbulb,
  'Cog': Cog,
  'Radio': Radio,
  'HardHat': HardHat,
  'Activity': Activity
};

interface CategoryCardProps {
  category: ReturnType<typeof getFeaturedCategories>[0];
  index: number;
}

function CategoryCard({ category, index }: CategoryCardProps) {
  const Icon = iconMap[category.icon || 'Zap'] || Zap;
  const { ref, isVisible } = useScrollAnimation({ 
    triggerOnce: true, 
    delay: index * 50 
  });

  return (
    <Link
      href={`/products?category=${category.slug}`}
      className="group"
    >
      <div 
        ref={ref}
        className={cn(
          'bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 h-full',
          'border border-gray-100',
          'shadow-sm hover:shadow-lg',
          'transform hover:-translate-y-1',
          'transition-all duration-300',
          'scroll-fade-in',
          isVisible && 'visible'
        )}
      >
        {/* Icon */}
        <div className={cn(
          'w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4',
          'bg-[#1E3A8A] group-hover:bg-[#DC2626]',
          'transition-colors duration-300'
        )}>
          <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
        </div>

        {/* Content */}
        <h3 className="text-sm sm:text-base font-semibold text-gray-900 group-hover:text-[#1E3A8A] transition-colors mb-1 line-clamp-2">
          {category.name}
        </h3>
        <p className="text-xs sm:text-sm text-gray-500">
          {category.productCount} products
        </p>

        {/* Arrow */}
        <div className="mt-3 sm:mt-4 flex items-center text-[#1E3A8A] text-xs sm:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
          <span>View Products</span>
          <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}

export function FeaturedCategories() {
  const categories = getFeaturedCategories().slice(0, 8);
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ triggerOnce: true, delay: 100 });

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
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
            What We Offer
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1E3A8A] mt-2 mb-3 sm:mb-4 px-4">
            Our Product Categories
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
            Browse our extensive range of industrial electrical products from world-leading brands
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {categories.map((category, index) => (
            <CategoryCard key={category.id} category={category} index={index} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-8 sm:mt-10">
          <Link href="/products">
            <Button
              variant="outline"
              size="lg"
              className="border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white text-sm sm:text-base px-6 sm:px-8"
            >
              View All Categories
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturedCategories;
