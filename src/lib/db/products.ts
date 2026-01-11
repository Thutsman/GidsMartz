import { supabase } from '@/lib/supabase/client';
import { Product } from '@/types';

// Transform database row to Product type
const transformProduct = (row: any): Product => ({
  id: row.id,
  name: row.name,
  description: row.description,
  price: row.price,
  currency: row.currency,
  category: row.category,
  categorySlug: row.category_slug,
  subcategory: row.subcategory,
  brand: row.brand,
  image: row.image,
  images: row.images,
  inStock: row.in_stock,
  stockQuantity: row.stock_quantity,
  specifications: row.specifications,
  featured: row.featured,
  isNew: row.is_new,
  discount: row.discount,
  sku: row.sku,
  weight: row.weight,
  dimensions: row.dimensions,
  warranty: row.warranty,
  createdAt: row.created_at,
  updatedAt: row.updated_at,
});

// Transform Product type to database row
const transformToDbRow = (product: Partial<Product>): any => ({
  name: product.name,
  description: product.description,
  price: product.price,
  currency: product.currency,
  category: product.category,
  category_slug: product.categorySlug,
  subcategory: product.subcategory,
  brand: product.brand,
  image: product.image,
  images: product.images,
  in_stock: product.inStock,
  stock_quantity: product.stockQuantity,
  specifications: product.specifications,
  featured: product.featured ?? false,
  is_new: product.isNew,
  discount: product.discount,
  sku: product.sku,
  weight: product.weight,
  dimensions: product.dimensions,
  warranty: product.warranty,
});

export async function getAllProducts(): Promise<Product[]> {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching products:', error);
    return [];
  }

  return data?.map(transformProduct) || [];
}

export async function getProductById(id: string): Promise<Product | null> {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('Error fetching product:', error);
    return null;
  }

  return data ? transformProduct(data) : null;
}

export async function getProductsByCategory(categorySlug: string): Promise<Product[]> {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('category_slug', categorySlug)
    .order('name', { ascending: true });

  if (error) {
    console.error('Error fetching products by category:', error);
    return [];
  }

  return data?.map(transformProduct) || [];
}

export async function getFeaturedProducts(): Promise<Product[]> {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('featured', true)
    .eq('in_stock', true)
    .order('created_at', { ascending: false })
    .limit(20);

  if (error) {
    console.error('Error fetching featured products:', error);
    return [];
  }

  return data?.map(transformProduct) || [];
}

export async function searchProducts(query: string): Promise<Product[]> {
  const searchTerm = query.toLowerCase();
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .or(`name.ilike.%${searchTerm}%,description.ilike.%${searchTerm}%,brand.ilike.%${searchTerm}%,category.ilike.%${searchTerm}%`);

  if (error) {
    console.error('Error searching products:', error);
    return [];
  }

  return data?.map(transformProduct) || [];
}

export async function createProduct(product: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>): Promise<Product | null> {
  const dbRow = transformToDbRow(product);
  dbRow.created_at = new Date().toISOString();
  dbRow.updated_at = new Date().toISOString();

  const { data, error } = await supabase
    .from('products')
    .insert(dbRow)
    .select()
    .single();

  if (error) {
    console.error('Error creating product:', error);
    return null;
  }

  return data ? transformProduct(data) : null;
}

export async function updateProduct(id: string, product: Partial<Product>): Promise<Product | null> {
  const dbRow = transformToDbRow(product);
  dbRow.updated_at = new Date().toISOString();

  const { data, error } = await supabase
    .from('products')
    .update(dbRow)
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error('Error updating product:', error);
    return null;
  }

  return data ? transformProduct(data) : null;
}

export async function deleteProduct(id: string): Promise<boolean> {
  const { error } = await supabase
    .from('products')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting product:', error);
    return false;
  }

  return true;
}
