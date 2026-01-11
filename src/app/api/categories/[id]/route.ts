import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '@/lib/supabase/server';
import { Category } from '@/types';

// GET /api/categories/[id] - Get a single category
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const supabase = createServerClient();

    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 404 });
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

    return NextResponse.json(category);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// PUT /api/categories/[id] - Update a category
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const supabase = createServerClient();
    const body = await request.json();

    const dbRow: any = {
      updated_at: new Date().toISOString(),
    };

    if (body.name !== undefined) dbRow.name = body.name;
    if (body.slug !== undefined) dbRow.slug = body.slug;
    if (body.description !== undefined) dbRow.description = body.description;
    if (body.image !== undefined) dbRow.image = body.image;
    if (body.icon !== undefined) dbRow.icon = body.icon;
    if (body.productCount !== undefined) dbRow.product_count = body.productCount;
    if (body.featured !== undefined) dbRow.featured = body.featured;
    if (body.order !== undefined) dbRow.order = body.order;

    const { data, error } = await supabase
      .from('categories')
      .update(dbRow)
      .eq('id', id)
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

    return NextResponse.json(category);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// DELETE /api/categories/[id] - Delete a category
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const supabase = createServerClient();

    const { error } = await supabase
      .from('categories')
      .delete()
      .eq('id', id);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
