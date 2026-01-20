'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, Filter, Grid, List, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { Product, Category } from '@/types';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export function ProductsPageContent() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [inStockOnly, setInStockOnly] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'newest' | 'name-asc'>('newest');

  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ triggerOnce: true });

  useEffect(() => {
    async function fetchData() {
      try {
        const [productsRes, categoriesRes] = await Promise.all([
          fetch('/api/products'),
          fetch('/api/categories'),
        ]);

        const productsData = await productsRes.json();
        const categoriesData = await categoriesRes.json();

        setProducts(productsData);
        setCategories(categoriesData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  // Get unique brands
  const brands = useMemo(() => {
    const uniqueBrands = [...new Set(products.map(p => p.brand))];
    return uniqueBrands.sort();
  }, [products]);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        p =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.brand.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query)
      );
    }

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(p => p.categorySlug === selectedCategory);
    }

    // Brand filter
    if (selectedBrand !== 'all') {
      filtered = filtered.filter(p => p.brand === selectedBrand);
    }

    // Stock filter
    if (inStockOnly) {
      filtered = filtered.filter(p => p.inStock);
    }

    // Sort
    switch (sortBy) {
      case 'name-asc':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'newest':
      default:
        filtered.sort((a, b) => {
          const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
          const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
          return dateB - dateA;
        });
        break;
    }

    return filtered;
  }, [products, searchQuery, selectedCategory, selectedBrand, inStockOnly, sortBy]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 py-12">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-white rounded-lg p-4">
                  <div className="h-48 bg-gray-200 rounded mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-linear-to-br from-gids-blue via-gids-blue-dark to-gids-blue py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div
            ref={headerRef}
            className={cn(
              'text-center scroll-fade-in',
              headerVisible && 'visible'
            )}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Our Products
            </h1>
            <p className="text-gray-200 max-w-2xl mx-auto text-sm sm:text-base">
              Browse our complete catalog of industrial electrical equipment, switchgear, automation, and mining supplies.
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="bg-white border-b sticky top-[73px] z-40">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full lg:w-[200px]">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((cat) => (
                  <SelectItem key={cat.id} value={cat.slug}>
                    {cat.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Brand Filter */}
            <Select value={selectedBrand} onValueChange={setSelectedBrand}>
              <SelectTrigger className="w-full lg:w-[180px]">
                <SelectValue placeholder="All Brands" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Brands</SelectItem>
                {brands.map((brand) => (
                  <SelectItem key={brand} value={brand}>
                    {brand}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Sort */}
            <Select value={sortBy} onValueChange={(v) => setSortBy(v as any)}>
              <SelectTrigger className="w-full lg:w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="name-asc">Name: A to Z</SelectItem>
              </SelectContent>
            </Select>

            {/* View Mode */}
            <div className="flex gap-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="icon"
                onClick={() => setViewMode('grid')}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="icon"
                onClick={() => setViewMode('list')}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Additional Filters */}
          <div className="flex items-center gap-4 mt-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={inStockOnly}
                onChange={(e) => setInStockOnly(e.target.checked)}
                className="rounded"
              />
              <span className="text-sm text-gray-700">In Stock Only</span>
            </label>
          </div>
        </div>
      </section>

      {/* Products Grid/List */}
      <section className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="mb-6">
          <p className="text-gray-600 text-sm sm:text-base">
            Showing <span className="font-semibold">{filteredProducts.length}</span> product{filteredProducts.length !== 1 ? 's' : ''}
          </p>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg mb-4">No products found</p>
            <p className="text-gray-400 text-sm">Try adjusting your filters</p>
          </div>
        ) : (
          <div
            className={cn(
              viewMode === 'grid'
                ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
                : 'space-y-4'
            )}
          >
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} viewMode={viewMode} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

function ProductCard({ product, viewMode }: { product: Product; viewMode: 'grid' | 'list' }) {
  if (viewMode === 'list') {
    return (
      <Link
        href={`/products/${product.categorySlug}/${product.id}`}
        className="flex gap-4 bg-white rounded-lg border border-gray-200 p-4 hover:shadow-lg transition-shadow group"
      >
        <div className="relative w-32 h-32 sm:w-40 sm:h-40 shrink-0 rounded-lg overflow-hidden bg-gray-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform"
            sizes="160px"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2">
                <Badge className="bg-gids-blue text-xs">{product.brand}</Badge>
                {product.featured && (
                  <Badge variant="outline" className="text-xs">Featured</Badge>
                )}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gids-blue transition-colors mb-1">
                {product.name}
              </h3>
              <p className="text-sm text-gray-500 mb-2 line-clamp-2">{product.description}</p>
              <p className="text-xs text-gray-400 mb-3">{product.category}</p>
              <div className="flex items-center justify-between">
                <Badge
                  className={cn(
                    'text-xs',
                    product.inStock
                      ? 'bg-green-500 hover:bg-green-500'
                      : 'bg-orange-500 hover:bg-orange-500'
                  )}
                >
                  {product.inStock ? 'In Stock' : 'Order'}
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/products/${product.categorySlug}/${product.id}`}
      className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all group"
    >
      <div className="relative aspect-square bg-gray-100 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <Badge className="absolute top-2 left-2 bg-gids-blue text-xs">
          {product.brand}
        </Badge>
        <Badge
          className={cn(
            'absolute top-2 right-2 text-xs',
            product.inStock
              ? 'bg-green-500 hover:bg-green-500'
              : 'bg-orange-500 hover:bg-orange-500'
          )}
        >
          {product.inStock ? 'In Stock' : 'Order'}
        </Badge>
        {product.featured && (
          <Badge variant="outline" className="absolute bottom-2 left-2 text-xs">
            Featured
          </Badge>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-base font-semibold text-gray-900 group-hover:text-gids-blue transition-colors line-clamp-2 mb-1">
          {product.name}
        </h3>
        <p className="text-xs text-gray-500 mb-3 line-clamp-1">{product.category}</p>
      </div>
    </Link>
  );
}
