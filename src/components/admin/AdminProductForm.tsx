'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Product, Category } from '@/types';

const productSchema = z.object({
  name: z.string().min(1, 'Product name is required'),
  description: z.string().min(1, 'Description is required'),
  price: z.number().min(0, 'Price must be positive'),
  currency: z.enum(['USD', 'ZWL']),
  category: z.string().min(1, 'Category is required'),
  categorySlug: z.string().min(1, 'Category slug is required'),
  subcategory: z.string().optional(),
  brand: z.string().min(1, 'Brand is required'),
  image: z.string().url('Must be a valid URL'),
  images: z.array(z.string().url()).optional(),
  inStock: z.boolean(),
  stockQuantity: z.number().optional(),
  specifications: z.record(z.string(), z.string()).optional(),
  featured: z.boolean(),
  isNew: z.boolean().optional(),
  discount: z.number().optional(),
  sku: z.string().optional(),
  weight: z.string().optional(),
  dimensions: z.string().optional(),
  warranty: z.string().optional(),
});

type ProductFormData = z.infer<typeof productSchema>;

interface AdminProductFormProps {
  product?: Product | null;
  onSuccess: () => void;
  onCancel: () => void;
}

export function AdminProductForm({ product, onSuccess, onCancel }: AdminProductFormProps) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);
  const [specs, setSpecs] = useState<Record<string, string>>(product?.specifications || {});

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),
    defaultValues: product
      ? {
          name: product.name,
          description: product.description,
          price: product.price,
          currency: product.currency,
          category: product.category,
          categorySlug: product.categorySlug,
          subcategory: product.subcategory,
          brand: product.brand,
          image: product.image,
          images: product.images,
          inStock: product.inStock,
          stockQuantity: product.stockQuantity,
          specifications: product.specifications,
          featured: product.featured,
          isNew: product.isNew,
          discount: product.discount,
          sku: product.sku,
          weight: product.weight,
          dimensions: product.dimensions,
          warranty: product.warranty,
        }
      : {
          currency: 'USD',
          inStock: true,
          featured: false,
        },
  });

  const selectedCategory = watch('category');

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    if (selectedCategory && categories.length > 0) {
      const category = categories.find((c) => c.name === selectedCategory);
      if (category) {
        setValue('categorySlug', category.slug);
      }
    }
  }, [selectedCategory, categories, setValue]);

  const fetchCategories = async () => {
    try {
      const response = await fetch('/api/categories');
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const onSubmit = async (data: ProductFormData) => {
    setLoading(true);
    try {
      const payload = {
        ...data,
        specifications: Object.keys(specs).length > 0 ? specs : undefined,
      };

      const url = product ? `/api/products/${product.id}` : '/api/products';
      const method = product ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to save product');
      }

      onSuccess();
    } catch (error: any) {
      alert(error.message || 'Error saving product');
    } finally {
      setLoading(false);
    }
  };

  const addSpec = () => {
    setSpecs({ ...specs, '': '' });
  };

  const updateSpec = (oldKey: string, newKey: string, value: string) => {
    const newSpecs = { ...specs };
    if (oldKey !== newKey) {
      delete newSpecs[oldKey];
    }
    newSpecs[newKey] = value;
    setSpecs(newSpecs);
  };

  const removeSpec = (key: string) => {
    const newSpecs = { ...specs };
    delete newSpecs[key];
    setSpecs(newSpecs);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Basic Information */}
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Basic Information</h3>

          <div>
            <Label htmlFor="name">Product Name *</Label>
            <Input id="name" {...register('name')} />
            {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <Label htmlFor="description">Description *</Label>
            <Textarea id="description" {...register('description')} rows={4} />
            {errors.description && (
              <p className="text-sm text-red-600 mt-1">{errors.description.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="brand">Brand *</Label>
            <Input id="brand" {...register('brand')} />
            {errors.brand && <p className="text-sm text-red-600 mt-1">{errors.brand.message}</p>}
          </div>

          <div>
            <Label htmlFor="sku">SKU</Label>
            <Input id="sku" {...register('sku')} />
          </div>
        </div>

        {/* Pricing & Category */}
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Pricing & Category</h3>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="price">Price *</Label>
              <Input
                id="price"
                type="number"
                step="0.01"
                {...register('price', { valueAsNumber: true })}
              />
              {errors.price && (
                <p className="text-sm text-red-600 mt-1">{errors.price.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="currency">Currency *</Label>
              <Select
                value={watch('currency')}
                onValueChange={(value) => setValue('currency', value as 'USD' | 'ZWL')}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="USD">USD</SelectItem>
                  <SelectItem value="ZWL">ZWL</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label htmlFor="category">Category *</Label>
            <Select
              value={watch('category')}
              onValueChange={(value) => setValue('category', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat.id} value={cat.name}>
                    {cat.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.category && (
              <p className="text-sm text-red-600 mt-1">{errors.category.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="subcategory">Subcategory</Label>
            <Input id="subcategory" {...register('subcategory')} />
          </div>

          <div>
            <Label htmlFor="discount">Discount (%)</Label>
            <Input
              id="discount"
              type="number"
              step="0.01"
              {...register('discount', { valueAsNumber: true })}
            />
          </div>
        </div>
      </div>

      {/* Images */}
      <div className="space-y-4">
        <h3 className="font-semibold text-lg">Images</h3>

        <div>
          <Label htmlFor="image">Main Image URL *</Label>
          <Input id="image" {...register('image')} />
          {errors.image && <p className="text-sm text-red-600 mt-1">{errors.image.message}</p>}
        </div>

        <div>
          <Label htmlFor="images">Additional Images (comma-separated URLs)</Label>
          <Input
            id="images"
            placeholder="https://example.com/image1.jpg, https://example.com/image2.jpg"
            defaultValue={product?.images?.join(', ') || ''}
            onChange={(e) => {
              const urls = e.target.value
                .split(',')
                .map((url) => url.trim())
                .filter((url) => url.length > 0);
              setValue('images', urls);
            }}
          />
        </div>
      </div>

      {/* Stock & Status */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Stock Information</h3>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="inStock"
              {...register('inStock')}
              className="rounded"
            />
            <Label htmlFor="inStock">In Stock</Label>
          </div>

          <div>
            <Label htmlFor="stockQuantity">Stock Quantity</Label>
            <Input
              id="stockQuantity"
              type="number"
              {...register('stockQuantity', { valueAsNumber: true })}
            />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Product Status</h3>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="featured"
              {...register('featured')}
              className="rounded"
            />
            <Label htmlFor="featured">Featured Product</Label>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="isNew"
              {...register('isNew')}
              className="rounded"
            />
            <Label htmlFor="isNew">New Product</Label>
          </div>
        </div>
      </div>

      {/* Specifications */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-lg">Specifications</h3>
          <Button type="button" variant="outline" size="sm" onClick={addSpec}>
            Add Specification
          </Button>
        </div>

        {Object.entries(specs).map(([key, value], index) => (
          <div key={index} className="flex gap-2">
            <Input
              placeholder="Specification name"
              value={key}
              onChange={(e) => updateSpec(key, e.target.value, value)}
            />
            <Input
              placeholder="Value"
              value={value}
              onChange={(e) => updateSpec(key, key, e.target.value)}
            />
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={() => removeSpec(key)}
            >
              ×
            </Button>
          </div>
        ))}
      </div>

      {/* Additional Details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <Label htmlFor="weight">Weight</Label>
          <Input id="weight" {...register('weight')} />
        </div>

        <div>
          <Label htmlFor="dimensions">Dimensions</Label>
          <Input id="dimensions" {...register('dimensions')} placeholder="L x W x H" />
        </div>

        <div>
          <Label htmlFor="warranty">Warranty</Label>
          <Input id="warranty" {...register('warranty')} placeholder="e.g., 12 months" />
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-4 pt-4 border-t">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" className="bg-gids-blue hover:bg-gids-blue-dark" disabled={loading}>
          {loading ? 'Saving...' : product ? 'Update Product' : 'Create Product'}
        </Button>
      </div>
    </form>
  );
}
