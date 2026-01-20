'use client';

import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Product } from '@/types';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export function FeaturedProducts() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ triggerOnce: true });

  useEffect(() => {
    async function fetchFeaturedProducts() {
      try {
        const response = await fetch('/api/products?featured=true&inStock=true&limit=20');
        const data = await response.json();
        
        // Ensure data is an array
        if (Array.isArray(data)) {
          setProducts(data);
        } else if (data.error) {
          // If API returns an error, fallback to static data
          console.warn('API error, using fallback data:', data.error);
          const { getFeaturedProducts } = await import('@/data/products');
          setProducts(getFeaturedProducts());
        } else {
          // Unknown response format, use empty array
          console.warn('Unexpected API response format:', data);
          setProducts([]);
        }
      } catch (error) {
        console.error('Error fetching featured products:', error);
        // Fallback to static data on network error
        try {
          const { getFeaturedProducts } = await import('@/data/products');
          setProducts(getFeaturedProducts());
        } catch (importError) {
          // If import fails, use empty array
          setProducts([]);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchFeaturedProducts();
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={cn(
            'flex flex-col md:flex-row md:items-end md:justify-between mb-8 sm:mb-10',
            'scroll-fade-in',
            headerVisible && 'visible'
          )}
        >
          <div>
            <span className="text-gids-red font-semibold text-xs sm:text-sm uppercase tracking-wider">
              Top Picks
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gids-blue mt-2">
              Featured Products
            </h2>
          </div>

          {/* Navigation Arrows (Desktop) */}
          <div className="hidden md:flex items-center gap-2 mt-4 md:mt-0">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll('left')}
              className="border-gray-300"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll('right')}
              className="border-gray-300"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Products Carousel */}
        {loading ? (
          <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 -mx-4 sm:-mx-6 px-4 sm:px-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="shrink-0 w-[260px] sm:w-[280px] bg-gray-100 rounded-lg animate-pulse">
                <div className="aspect-square bg-gray-200 rounded-t-lg"></div>
                <div className="p-4 space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No featured products available</p>
          </div>
        ) : (
          <div
            ref={scrollRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory -mx-4 sm:-mx-6 px-4 sm:px-6"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.categorySlug}/${product.id}`}
              className="shrink-0 w-[260px] sm:w-[280px] snap-start group"
            >
              <div className={cn(
                'bg-white rounded-lg sm:rounded-xl overflow-hidden',
                'border border-gray-100',
                'shadow-sm hover:shadow-lg',
                'transition-all duration-300'
              )}>
                {/* Image Container */}
                <div className="relative aspect-square bg-gray-50 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 260px, 280px"
                  />

                  {/* Brand Badge */}
                  <Badge
                    className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-gids-blue hover:bg-gids-blue text-xs"
                  >
                    {product.brand}
                  </Badge>

                  {/* Stock Badge */}
                  <Badge
                    className={cn(
                      'absolute top-2 sm:top-3 right-2 sm:right-3 text-xs',
                      product.inStock
                        ? 'bg-green-500 hover:bg-green-500'
                        : 'bg-orange-500 hover:bg-orange-500'
                    )}
                  >
                    {product.inStock ? 'In Stock' : 'Order'}
                  </Badge>
                </div>

                {/* Content */}
                <div className="p-3 sm:p-4">
                  <h3 className="text-sm sm:text-base font-semibold text-gray-900 group-hover:text-gids-blue transition-colors line-clamp-2 min-h-[40px] sm:min-h-[48px]">
                    {product.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-500 mt-1 line-clamp-1">
                    {product.category}
                  </p>

                  <div className="flex items-center justify-between mt-3 sm:mt-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-gids-red hover:text-gids-red-dark hover:bg-red-50 p-0 text-xs sm:text-sm"
                    >
                      View
                      <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 ml-1" />
                    </Button>
                  </div>
                </div>
              </div>
            </Link>
            ))}
          </div>
        )}

        {/* View All Link */}
        <div className="text-center mt-8 sm:mt-10">
          <Link href="/products">
            <Button
              size="lg"
              className="bg-gids-blue hover:bg-gids-blue-dark text-white text-sm sm:text-base px-6 sm:px-8"
            >
              View All Products
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
