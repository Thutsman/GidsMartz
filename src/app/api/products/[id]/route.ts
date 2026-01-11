import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '@/lib/supabase/server';
import { Product } from '@/types';

// GET /api/products/[id] - Get a single product
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const supabase = createServerClient();

    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 404 });
    }

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

    return NextResponse.json(product);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// PUT /api/products/[id] - Update a product
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
    if (body.description !== undefined) dbRow.description = body.description;
    if (body.price !== undefined) dbRow.price = body.price;
    if (body.currency !== undefined) dbRow.currency = body.currency;
    if (body.category !== undefined) dbRow.category = body.category;
    if (body.categorySlug !== undefined) dbRow.category_slug = body.categorySlug;
    if (body.subcategory !== undefined) dbRow.subcategory = body.subcategory;
    if (body.brand !== undefined) dbRow.brand = body.brand;
    if (body.image !== undefined) dbRow.image = body.image;
    if (body.images !== undefined) dbRow.images = body.images;
    if (body.inStock !== undefined) dbRow.in_stock = body.inStock;
    if (body.stockQuantity !== undefined) dbRow.stock_quantity = body.stockQuantity;
    if (body.specifications !== undefined) dbRow.specifications = body.specifications;
    if (body.featured !== undefined) dbRow.featured = body.featured;
    if (body.isNew !== undefined) dbRow.is_new = body.isNew;
    if (body.discount !== undefined) dbRow.discount = body.discount;
    if (body.sku !== undefined) dbRow.sku = body.sku;
    if (body.weight !== undefined) dbRow.weight = body.weight;
    if (body.dimensions !== undefined) dbRow.dimensions = body.dimensions;
    if (body.warranty !== undefined) dbRow.warranty = body.warranty;

    const { data, error } = await supabase
      .from('products')
      .update(dbRow)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

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

    return NextResponse.json(product);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// DELETE /api/products/[id] - Delete a product
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const supabase = createServerClient();

    const { error } = await supabase
      .from('products')
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
