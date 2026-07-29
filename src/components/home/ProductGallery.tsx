'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X, ZoomIn, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Product } from '@/types';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ALL_LABEL = 'All';

function groupByCategory(products: Product[]): Record<string, Product[]> {
  const groups: Record<string, Product[]> = { [ALL_LABEL]: products };
  for (const p of products) {
    const cat = p.category || 'Other';
    if (!groups[cat]) groups[cat] = [];
    groups[cat].push(p);
  }
  return groups;
}

export function ProductGallery() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState(ALL_LABEL);
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ triggerOnce: true });

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch('/api/products?limit=100');
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          setProducts(data.filter((p: Product) => p.image && !p.image.includes('placehold.co')));
        } else {
          const { products: fallback } = await import('@/data/products');
          setProducts((fallback ?? []).filter((p) => p.image && !p.image.includes('placehold.co')));
        }
      } catch {
        try {
          const { products: fallback } = await import('@/data/products');
          setProducts((fallback ?? []).filter((p) => p.image && !p.image.includes('placehold.co')));
        } catch {
          setProducts([]);
        }
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const groups = groupByCategory(products);
  const tabs = Object.keys(groups).filter((k) => groups[k].length > 0);
  const visibleProducts = groups[activeTab] ?? [];

  const goTo = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const prev = useCallback(() => {
    goTo((activeIndex - 1 + visibleProducts.length) % visibleProducts.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  }, [activeIndex, visibleProducts.length, goTo]);

  const next = useCallback(() => {
    goTo((activeIndex + 1) % visibleProducts.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  }, [activeIndex, visibleProducts.length, goTo]);

  useEffect(() => {
    setActiveIndex(0);
    setIsAutoPlaying(true);
  }, [activeTab]);

  useEffect(() => {
    if (!isAutoPlaying || visibleProducts.length < 2) return;
    const id = setInterval(() => {
      setActiveIndex((cur) => (cur + 1) % visibleProducts.length);
    }, 3500);
    return () => clearInterval(id);
  }, [isAutoPlaying, visibleProducts.length]);

  useEffect(() => {
    if (!lightboxOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'Escape') setLightboxOpen(false);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightboxOpen, next, prev]);

  const currentProduct = visibleProducts[activeIndex];

  if (!loading && products.length === 0) return null;

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={cn('text-center mb-8 sm:mb-10 scroll-fade-in', headerVisible && 'visible')}
        >
          <span className="text-[#DC2626] font-semibold text-xs sm:text-sm uppercase tracking-wider">
            Browse Our Range
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1E3A8A] mt-2 mb-3 sm:mb-4">
            Product Gallery
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            A visual showcase of the electrical products and equipment GidsMartz supplies
          </p>
        </div>

        {loading ? (
          <div className="flex gap-3 justify-center">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-20 h-20 rounded-lg bg-gray-200 animate-pulse" />
            ))}
          </div>
        ) : (
          <>
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 justify-center mb-6 sm:mb-8">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    'px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200',
                    activeTab === tab
                      ? 'bg-[#1E3A8A] text-white shadow-md'
                      : 'bg-white text-gray-600 border border-gray-200 hover:border-[#1E3A8A] hover:text-[#1E3A8A]'
                  )}
                >
                  {tab}
                  <span className={cn(
                    'ml-1.5 text-xs rounded-full px-1.5 py-0.5',
                    activeTab === tab ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'
                  )}>
                    {groups[tab].length}
                  </span>
                </button>
              ))}
            </div>

            {visibleProducts.length > 0 && (
              <div>
                {/* Main Image — full width, no thumbnail strip */}
                <div className="relative">
                  <div
                    className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 cursor-zoom-in group shadow-md"
                    onClick={() => setLightboxOpen(true)}
                  >
                    <Image
                      src={currentProduct.image}
                      alt={currentProduct.name}
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-105"
                      sizes="100vw"
                      priority
                    />
                    {/* Zoom hint */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/10">
                      <div className="bg-white/80 backdrop-blur-sm rounded-full p-2">
                        <ZoomIn className="h-5 w-5 text-gray-700" />
                      </div>
                    </div>
                    {/* Arrows */}
                    {visibleProducts.length > 1 && (
                      <>
                        <button
                          onClick={(e) => { e.stopPropagation(); prev(); }}
                          className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow transition-all"
                          aria-label="Previous image"
                        >
                          <ChevronLeft className="h-5 w-5 text-gray-700" />
                        </button>
                        <button
                          onClick={(e) => { e.stopPropagation(); next(); }}
                          className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow transition-all"
                          aria-label="Next image"
                        >
                          <ChevronRight className="h-5 w-5 text-gray-700" />
                        </button>
                      </>
                    )}
                    {/* Counter */}
                    <div className="absolute bottom-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
                      {activeIndex + 1} / {visibleProducts.length}
                    </div>
                  </div>

                  {/* Product name below main image */}
                  <div className="mt-3 px-1">
                    <h3 className="text-sm sm:text-base font-semibold text-gray-900 line-clamp-1">
                      {currentProduct.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 mt-0.5">{currentProduct.category}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Dot indicators */}
            {visibleProducts.length > 1 && (
              <div className="flex justify-center gap-1.5 mt-4">
                {visibleProducts.slice(0, 12).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={cn(
                      'rounded-full transition-all duration-300',
                      i === activeIndex
                        ? 'bg-[#1E3A8A] w-5 h-2'
                        : 'bg-gray-300 w-2 h-2 hover:bg-gray-400'
                    )}
                    aria-label={`Go to image ${i + 1}`}
                  />
                ))}
              </div>
            )}

            {/* CTA */}
            <div className="text-center mt-8 sm:mt-10">
              <Link href="/products">
                <Button
                  size="lg"
                  className="bg-[#DC2626] hover:bg-[#B91C1C] text-white text-sm sm:text-base px-6 sm:px-8"
                >
                  Browse All Products
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
          </>
        )}
      </div>

      {/* Lightbox */}
      {lightboxOpen && currentProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            aria-label="Close lightbox"
          >
            <X className="h-5 w-5" />
          </button>

          {visibleProducts.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prev(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/10 hover:bg-white/25 rounded-full flex items-center justify-center text-white transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); next(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/10 hover:bg-white/25 rounded-full flex items-center justify-center text-white transition-colors"
                aria-label="Next"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}

          <div
            className="relative w-full max-w-3xl max-h-[80vh] aspect-[4/3]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={currentProduct.image}
              alt={currentProduct.name}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-white">
            <p className="text-sm sm:text-base font-semibold">{currentProduct.name}</p>
            <p className="text-xs sm:text-sm text-gray-300 mt-0.5">
              {activeIndex + 1} / {visibleProducts.length}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

export default ProductGallery;
