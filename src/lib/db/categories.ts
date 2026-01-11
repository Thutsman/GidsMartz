import { supabase } from '@/lib/supabase/client';
import { Category } from '@/types';

// Transform database row to Category type
const transformCategory = (row: any): Category => ({
  id: row.id,
  name: row.name,
  slug: row.slug,
  description: row.description,
  image: row.image,
  icon: row.icon,
  productCount: row.product_count,
  featured: row.featured,
  order: row.order,
});

// Transform Category type to database row
const transformToDbRow = (category: Partial<Category>): any => ({
  name: category.name,
  slug: category.slug,
  description: category.description,
  image: category.image,
  icon: category.icon,
  product_count: category.productCount,
  featured: category.featured ?? false,
  order: category.order,
});

export async function getAllCategories(): Promise<Category[]> {
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .order('order', { ascending: true, nullsFirst: false });

  if (error) {
    console.error('Error fetching categories:', error);
    return [];
  }

  return data?.map(transformCategory) || [];
}

export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error) {
    console.error('Error fetching category:', error);
    return null;
  }

  return data ? transformCategory(data) : null;
}

export async function getFeaturedCategories(): Promise<Category[]> {
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .eq('featured', true)
    .order('order', { ascending: true, nullsFirst: false });

  if (error) {
    console.error('Error fetching featured categories:', error);
    return [];
  }

  return data?.map(transformCategory) || [];
}

export async function createCategory(category: Omit<Category, 'id'>): Promise<Category | null> {
  const dbRow = transformToDbRow(category);
  dbRow.created_at = new Date().toISOString();
  dbRow.updated_at = new Date().toISOString();

  const { data, error } = await supabase
    .from('categories')
    .insert(dbRow)
    .select()
    .single();

  if (error) {
    console.error('Error creating category:', error);
    return null;
  }

  return data ? transformCategory(data) : null;
}

export async function updateCategory(id: string, category: Partial<Category>): Promise<Category | null> {
  const dbRow = transformToDbRow(category);
  dbRow.updated_at = new Date().toISOString();

  const { data, error } = await supabase
    .from('categories')
    .update(dbRow)
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error('Error updating category:', error);
    return null;
  }

  return data ? transformCategory(data) : null;
}

export async function deleteCategory(id: string): Promise<boolean> {
  const { error } = await supabase
    .from('categories')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting category:', error);
    return false;
  }

  return true;
}
