import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '@/lib/supabase/server';
import { Category } from '@/types';

// GET /api/categories - Get all categories
export async function GET(request: NextRequest) {
  try {
    // Check if Supabase is configured
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    if (!supabaseUrl || supabaseUrl === '' || supabaseUrl.includes('placeholder')) {
      // Supabase not configured, return empty array
      console.warn('Supabase not configured, returning empty categories array');
      return NextResponse.json([]);
    }

    const supabase = createServerClient();
    const searchParams = request.nextUrl.searchParams;
    const featured = searchParams.get('featured');

    let query = supabase.from('categories').select('*');

    if (featured === 'true') {
      query = query.eq('featured', true);
    }

    query = query.order('order', { ascending: true, nullsFirst: false });

    const { data, error } = await query;

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json([]);
    }

    // Ensure data is an array
    if (!Array.isArray(data)) {
      console.warn('Unexpected data format from Supabase:', data);
      return NextResponse.json([]);
    }

    const categories: Category[] = data.map((row: any) => ({
      id: row.id,
      name: row.name,
      slug: row.slug,
      description: row.description,
      image: row.image,
      icon: row.icon,
      productCount: row.product_count,
      featured: row.featured,
      order: row.order,
    }));

    return NextResponse.json(categories);
  } catch (error: any) {
    console.error('Error in categories API:', error);
    return NextResponse.json([]);
  }
}

// POST /api/categories - Create a new category
export async function POST(request: NextRequest) {
  try {
    const supabase = createServerClient();
    const body = await request.json();

    const dbRow = {
      name: body.name,
      slug: body.slug,
      description: body.description,
      image: body.image,
      icon: body.icon,
      product_count: body.productCount ?? 0,
      featured: body.featured ?? false,
      order: body.order,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    const { data, error } = await supabase
      .from('categories')
      .insert(dbRow)
      .select()
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    const category: Category = {
      id: data.id,
      name: data.name,
      slug: data.slug,
      description: data.description,
      image: data.image,
      icon: data.icon,
      productCount: data.product_count,
      featured: data.featured,
      order: data.order,
    };

    return NextResponse.json(category, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
