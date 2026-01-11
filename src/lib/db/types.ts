// Database types matching Supabase schema
export interface Database {
  public: {
    Tables: {
      products: {
        Row: {
          id: string;
          name: string;
          description: string;
          price: number;
          currency: 'USD' | 'ZWL';
          category: string;
          category_slug: string;
          subcategory?: string | null;
          brand: string;
          image: string;
          images?: string[] | null;
          in_stock: boolean;
          stock_quantity?: number | null;
          specifications?: Record<string, string> | null;
          featured: boolean;
          is_new?: boolean | null;
          discount?: number | null;
          sku?: string | null;
          weight?: string | null;
          dimensions?: string | null;
          warranty?: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database['public']['Tables']['products']['Row'], 'id' | 'created_at' | 'updated_at'> & {
          id?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Database['public']['Tables']['products']['Insert']>;
      };
      categories: {
        Row: {
          id: string;
          name: string;
          slug: string;
          description: string;
          image: string;
          icon?: string | null;
          product_count: number;
          featured: boolean;
          order?: number | null;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database['public']['Tables']['categories']['Row'], 'id' | 'created_at' | 'updated_at'> & {
          id?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Database['public']['Tables']['categories']['Insert']>;
      };
    };
  };
}
