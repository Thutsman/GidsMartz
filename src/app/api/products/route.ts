import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '@/lib/supabase/server';
import { Product } from '@/types';

// GET /api/products - Get all products with optional filters
export async function GET(request: NextRequest) {
  try {
    // Check if Supabase is configured
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    if (!supabaseUrl || supabaseUrl === '' || supabaseUrl.includes('placeholder')) {
      // Supabase not configured, return empty array
      console.warn('Supabase not configured, returning empty products array');
      return NextResponse.json([]);
    }

    const supabase = createServerClient();
    const searchParams = request.nextUrl.searchParams;
    
    const category = searchParams.get('category');
    const featured = searchParams.get('featured');
    const inStock = searchParams.get('inStock');
    const search = searchParams.get('search');
    const limit = searchParams.get('limit');

    let query = supabase.from('products').select('*');

    if (category) {
      query = query.eq('category_slug', category);
    }

    if (featured === 'true') {
      query = query.eq('featured', true);
    }

    if (inStock === 'true') {
      query = query.eq('in_stock', true);
    }

    if (search) {
      query = query.or(`name.ilike.%${search}%,description.ilike.%${search}%,brand.ilike.%${search}%`);
    }

    if (limit) {
      query = query.limit(parseInt(limit));
    }

    query = query.order('created_at', { ascending: false });

    const { data, error } = await query;

    if (error) {
      console.error('Supabase error:', error);
      // Return empty array instead of error to prevent breaking the UI
      return NextResponse.json([]);
    }

    // Ensure data is an array
    if (!Array.isArray(data)) {
      console.warn('Unexpected data format from Supabase:', data);
      return NextResponse.json([]);
    }

    // Transform to Product type
    const products: Product[] = data.map((row: any) => ({
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
    }));

    return NextResponse.json(products);
  } catch (error: any) {
    console.error('Error in products API:', error);
    // Return empty array instead of error to prevent breaking the UI
    return NextResponse.json([]);
  }
}

// POST /api/products - Create a new product
export async function POST(request: NextRequest) {
  try {
    const supabase = createServerClient();
    const body = await request.json();

    const dbRow = {
      name: body.name,
      description: body.description,
      price: body.price,
      currency: body.currency,
      category: body.category,
      category_slug: body.categorySlug,
      subcategory: body.subcategory,
      brand: body.brand,
      image: body.image,
      images: body.images,
      in_stock: body.inStock ?? true,
      stock_quantity: body.stockQuantity,
      specifications: body.specifications,
      featured: body.featured ?? false,
      is_new: body.isNew,
      discount: body.discount,
      sku: body.sku,
      weight: body.weight,
      dimensions: body.dimensions,
      warranty: body.warranty,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    const { data, error } = await supabase
      .from('products')
      .insert(dbRow)
      .select()
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // Transform to Product type
    const product: Product = {
      id: data.id,
      name: data.name,
      description: data.description,
      price: data.price,
      currency: data.currency,
      category: data.category,
      categorySlug: data.category_slug,
      subcategory: data.subcategory,
      brand: data.brand,
      image: data.image,
      images: data.images,
      inStock: data.in_stock,
      stockQuantity: data.stock_quantity,
      specifications: data.specifications,
      featured: data.featured,
      isNew: data.is_new,
      discount: data.discount,
      sku: data.sku,
      weight: data.weight,
      dimensions: data.dimensions,
      warranty: data.warranty,
      createdAt: data.created_at,
      updatedAt: data.updated_at,
    };

    return NextResponse.json(product, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
