import { createClient } from "@supabase/supabase-js";

// Environment variables must be set in .env.local
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn("Supabase: Missing environment variables - using placeholder client");
}

// Client-side Supabase client (for authenticated operations)
export const supabase = createClient(
  supabaseUrl || "https://placeholder.supabase.co",
  supabaseAnonKey || "placeholder"
);

// Server-side Supabase client (for server operations)
export const supabaseServer = createClient(
  supabaseUrl || "https://placeholder.supabase.co",
  supabaseAnonKey || "placeholder",
  {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  }
);

// Type exports for database tables
export type Brand = {
  id: string;
  name: string;
  slug: string;
  origin: string;
  description: string;
  story: string;
  category: string;
  logo_url?: string;
  hero_image_url?: string;
  created_at: string;
};

export type Product = {
  id: string;
  brand_id: string;
  name: string;
  slug: string;
  price: number;
  description: string;
  category: string;
  sizes: string[];
  images: string[];
  in_stock: boolean;
  created_at: string;
};

export type User = {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  created_at: string;
};