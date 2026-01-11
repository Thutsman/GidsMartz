# Supabase Database Setup Guide

This guide will help you set up the Supabase database for the GIDS-MARTZ website.

## Prerequisites

1. A Supabase account (sign up at https://supabase.com)
2. A new Supabase project

## Step 1: Create Tables

Run the following SQL in your Supabase SQL Editor:

### Products Table

```sql
CREATE TABLE IF NOT EXISTS products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  currency TEXT NOT NULL CHECK (currency IN ('USD', 'ZWL')),
  category TEXT NOT NULL,
  category_slug TEXT NOT NULL,
  subcategory TEXT,
  brand TEXT NOT NULL,
  image TEXT NOT NULL,
  images TEXT[],
  in_stock BOOLEAN DEFAULT true,
  stock_quantity INTEGER,
  specifications JSONB,
  featured BOOLEAN DEFAULT false,
  is_new BOOLEAN DEFAULT false,
  discount DECIMAL(5, 2),
  sku TEXT,
  weight TEXT,
  dimensions TEXT,
  warranty TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_products_category_slug ON products(category_slug);
CREATE INDEX IF NOT EXISTS idx_products_featured ON products(featured);
CREATE INDEX IF NOT EXISTS idx_products_in_stock ON products(in_stock);
CREATE INDEX IF NOT EXISTS idx_products_brand ON products(brand);
```

### Categories Table

```sql
CREATE TABLE IF NOT EXISTS categories (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  slug TEXT NOT NULL UNIQUE,
  description TEXT NOT NULL,
  image TEXT NOT NULL,
  icon TEXT,
  product_count INTEGER DEFAULT 0,
  featured BOOLEAN DEFAULT false,
  "order" INTEGER,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_categories_slug ON categories(slug);
CREATE INDEX IF NOT EXISTS idx_categories_featured ON categories(featured);
```

## Step 2: Set Up Row Level Security (RLS)

Enable RLS and create policies:

```sql
-- Enable RLS
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Allow public read access on products"
  ON products FOR SELECT
  USING (true);

CREATE POLICY "Allow public read access on categories"
  ON categories FOR SELECT
  USING (true);

-- For admin operations, you'll need to set up authentication
-- For now, we'll allow insert/update/delete (you should restrict this in production)
-- TODO: Add proper authentication and restrict admin operations
```

## Step 3: Create Trigger for Updated At

```sql
-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger for products
CREATE TRIGGER update_products_updated_at
  BEFORE UPDATE ON products
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Trigger for categories
CREATE TRIGGER update_categories_updated_at
  BEFORE UPDATE ON categories
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
```

## Step 4: Migrate Existing Data (Optional)

If you want to migrate data from the static files, you can use the migration script:

1. Copy the data from `src/data/products.ts` and `src/data/categories.ts`
2. Use the Supabase dashboard or create a migration script to insert the data

Example migration script (run in Supabase SQL Editor after updating with your data):

```sql
-- Insert categories first
INSERT INTO categories (name, slug, description, image, icon, product_count, featured, "order")
VALUES
  ('Electrical Switchgear & Control', 'switchgear-control', 'Contactors, overload relays...', 'https://placehold.co/600x400/1E3A8A/FFFFFF?text=Switchgear', 'Zap', 45, true, 1),
  -- Add more categories...
  ON CONFLICT (slug) DO NOTHING;

-- Then insert products
-- (You'll need to transform the data from products.ts format to match the database schema)
```

## Step 5: Environment Variables

Add these to your `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key  # Optional, for admin operations
NEXT_PUBLIC_ADMIN_PASSWORD=admin123  # Change this in production!
```

## Step 6: Test the Setup

1. Start your development server: `npm run dev`
2. Visit `/admin` and login with the default password
3. Try creating a product and category
4. Visit `/products` to see the products page

## Security Notes

⚠️ **IMPORTANT**: The current setup allows public read access but admin operations are not properly secured. For production:

1. Implement proper authentication (Supabase Auth)
2. Add RLS policies to restrict admin operations
3. Use the service role key only on the server side
4. Change the admin password
5. Consider adding rate limiting
6. Add input validation and sanitization

## Troubleshooting

- If you get connection errors, check your Supabase URL and keys
- If RLS is blocking queries, check your policies
- If products don't appear, check the database and ensure data is inserted correctly
