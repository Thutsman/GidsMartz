'use client';

import { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Product, Category } from '@/types';
import { Upload, X } from 'lucide-react';

const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png'] as const;

const productSchema = z.object({
  name: z.string().min(1, 'Product name is required'),
  description: z.string().min(1, 'Description is required'),
  category: z.string().min(1, 'Category is required'),
  categorySlug: z.string().min(1, 'Category slug is required'),
  brand: z.string().min(1, 'Brand is required'),
  image: z.string().min(1, 'Image is required').refine(
    (val) => {
      // Allow if it's a valid URL or if it will be set by file upload
      return val.length > 0;
    },
    { message: 'Image URL is required or upload a file' }
  ),
  images: z.array(z.string().url()).optional(),
  inStock: z.boolean(),
  specifications: z.record(z.string(), z.string()).optional(),
  featured: z.boolean(),
  isNew: z.boolean().optional(),
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
  const [uploading, setUploading] = useState(false);
  const [specs, setSpecs] = useState<Record<string, string>>(product?.specifications || {});
  const [mainImagePreview, setMainImagePreview] = useState<string | null>(product?.image || null);
  const [additionalImagePreviews, setAdditionalImagePreviews] = useState<string[]>(product?.images || []);
  const [additionalImageFiles, setAdditionalImageFiles] = useState<File[]>([]);

  const mainImageInputRef = useRef<HTMLInputElement | null>(null);
  const additionalImagesInputRef = useRef<HTMLInputElement | null>(null);

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
          category: product.category,
          categorySlug: product.categorySlug,
          brand: product.brand,
          image: product.image,
          images: product.images,
          inStock: product.inStock,
          specifications: product.specifications,
          featured: product.featured,
          isNew: product.isNew,
          sku: product.sku,
          weight: product.weight,
          dimensions: product.dimensions,
          warranty: product.warranty,
        }
      : {
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

  const handleMainImageUpload = async (file: File) => {
    if (!ALLOWED_IMAGE_TYPES.includes(file.type as any)) {
      alert('Invalid file type. Please upload a JPG/JPEG or PNG image.');
      return;
    }
    setUploading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to upload image');
      }

      const { url } = await response.json();
      setValue('image', url);
      setMainImagePreview(url);
    } catch (error: any) {
      alert(error.message || 'Error uploading image');
    } finally {
      setUploading(false);
    }
  };

  const handleAdditionalImageUpload = async (files: FileList) => {
    setUploading(true);
    try {
      const uploadedUrls: string[] = [];

      for (const file of Array.from(files)) {
        if (!ALLOWED_IMAGE_TYPES.includes(file.type as any)) {
          throw new Error('Invalid file type. Only JPG/JPEG and PNG images are allowed.');
        }
        const formData = new FormData();
        formData.append('file', file);

        const response = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        });

        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.error || 'Failed to upload image');
        }

        const { url } = await response.json();
        uploadedUrls.push(url);
      }

      const newPreviews = [...additionalImagePreviews, ...uploadedUrls];
      setAdditionalImagePreviews(newPreviews);
      setValue('images', newPreviews);
      setAdditionalImageFiles([]);
      if (additionalImagesInputRef.current) {
        additionalImagesInputRef.current.value = '';
      }
    } catch (error: any) {
      alert(error.message || 'Error uploading images');
    } finally {
      setUploading(false);
    }
  };

  const removeAdditionalImage = (index: number) => {
    const newPreviews = additionalImagePreviews.filter((_, i) => i !== index);
    setAdditionalImagePreviews(newPreviews);
    setValue('images', newPreviews);
  };

  const onSubmit = async (data: ProductFormData) => {
    setLoading(true);
    try {
      const payload = {
        ...data,
        // Prices are not displayed/managed via admin UI, but DB requires them.
        price: product?.price ?? 0,
        currency: product?.currency ?? 'USD',
        images: additionalImagePreviews.length > 0 ? additionalImagePreviews : undefined,
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

        {/* Category */}
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Category</h3>

          <div>
            <Label htmlFor="category">Category *</Label>
            <Select
              value={watch('category')}
              onValueChange={(value) => setValue('category', value)}
            >
              <SelectTrigger className="w-full">
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
        </div>
      </div>

      {/* Images */}
      <div className="space-y-4">
        <h3 className="font-semibold text-lg">Images</h3>

        {/* Main Image */}
        <div className="space-y-2">
          <Label htmlFor="image">Main Image *</Label>
          <div className="flex gap-4">
            <div className="flex-1">
              <Input
                id="image"
                placeholder="Enter image URL or upload a file"
                {...register('image')}
                disabled={uploading}
              />
              {errors.image && <p className="text-sm text-red-600 mt-1">{errors.image.message}</p>}
            </div>
            <div className="relative">
              <input
                type="file"
                ref={mainImageInputRef}
                accept="image/jpeg,image/png"
                className="hidden"
                onChange={async (e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    if (!ALLOWED_IMAGE_TYPES.includes(file.type as any)) {
                      alert('Invalid file type. Please upload a JPG/JPEG or PNG image.');
                      if (mainImageInputRef.current) mainImageInputRef.current.value = '';
                      return;
                    }
                    // Show preview immediately
                    const reader = new FileReader();
                    reader.onloadend = () => {
                      setMainImagePreview(reader.result as string);
                    };
                    reader.readAsDataURL(file);
                    // Auto-upload the file
                    await handleMainImageUpload(file);
                    if (mainImageInputRef.current) {
                      mainImageInputRef.current.value = '';
                    }
                  }
                }}
                disabled={uploading}
              />
              <Button
                type="button"
                variant="outline"
                onClick={() => mainImageInputRef.current?.click()}
                disabled={uploading}
              >
                <Upload className="h-4 w-4 mr-2" />
                Upload
              </Button>
            </div>
          </div>
          {uploading && (
            <div className="mt-2 text-sm text-gray-500">
              Uploading image...
            </div>
          )}
          {mainImagePreview && (
            <div className="mt-2 relative inline-block">
              <img
                src={mainImagePreview}
                alt="Main product"
                className="h-32 w-32 object-cover rounded-lg border"
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute top-1 right-1 h-6 w-6 bg-red-500 hover:bg-red-600 text-white"
                onClick={() => {
                  setMainImagePreview(null);
                  setValue('image', '');
                  if (mainImageInputRef.current) {
                    mainImageInputRef.current.value = '';
                  }
                }}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>

        {/* Additional Images */}
        <div className="space-y-2">
          <Label htmlFor="additional-images">Additional Images</Label>
          <div className="flex gap-4">
            <div className="flex-1">
              <Input
                id="additional-images-url"
                placeholder="Enter image URLs (comma-separated) or upload files"
                onChange={(e) => {
                  const urls = e.target.value
                    .split(',')
                    .map((url) => url.trim())
                    .filter((url) => url.length > 0);
                  if (urls.length > 0) {
                    setAdditionalImagePreviews([...additionalImagePreviews, ...urls]);
                    setValue('images', [...additionalImagePreviews, ...urls]);
                  }
                }}
                disabled={uploading}
              />
            </div>
            <div className="relative">
              <input
                type="file"
                ref={additionalImagesInputRef}
                accept="image/jpeg,image/png"
                multiple
                className="hidden"
                onChange={(e) => {
                  const files = e.target.files;
                  if (files && files.length > 0) {
                    const invalid = Array.from(files).some(
                      (f) => !ALLOWED_IMAGE_TYPES.includes(f.type as any),
                    );
                    if (invalid) {
                      alert('Invalid file type. Please upload only JPG/JPEG or PNG images.');
                      if (additionalImagesInputRef.current) additionalImagesInputRef.current.value = '';
                      return;
                    }
                    setAdditionalImageFiles(Array.from(files));
                    handleAdditionalImageUpload(files);
                  }
                }}
                disabled={uploading}
              />
              <Button
                type="button"
                variant="outline"
                onClick={() => additionalImagesInputRef.current?.click()}
                disabled={uploading}
              >
                <Upload className="h-4 w-4 mr-2" />
                Upload
              </Button>
            </div>
          </div>
          {additionalImagePreviews.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-2">
              {additionalImagePreviews.map((preview, index) => (
                <div key={index} className="relative">
                  <img
                    src={preview}
                    alt={`Additional ${index + 1}`}
                    className="h-24 w-24 object-cover rounded-lg border"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute -top-2 -right-2 h-6 w-6 bg-red-500 hover:bg-red-600 text-white rounded-full"
                    onClick={() => removeAdditionalImage(index)}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </div>
              ))}
            </div>
          )}
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
        <Button type="submit" className="bg-gids-blue hover:bg-gids-blue-dark" disabled={loading || uploading}>
          {loading ? 'Saving...' : uploading ? 'Uploading...' : product ? 'Update Product' : 'Create Product'}
        </Button>
      </div>
    </form>
  );
}
