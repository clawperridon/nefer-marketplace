// Brand and Product helpers
import { supabase } from "./supabase";

export type BrandStatus = "draft" | "pending" | "active" | "inactive" | "rejected";
export type ProductStatus = "draft" | "pending" | "active" | "archived";

export interface Brand {
  id: string;
  seller_id: string;
  name: string;
  slug: string;
  description: string | null;
  story: string | null;
  country: string | null;
  category: string | null;
  logo_url: string | null;
  hero_image_url: string | null;
  status: BrandStatus;
  created_at: string;
  updated_at: string;
}

export interface Product {
  id: string;
  brand_id: string;
  name: string;
  slug: string;
  description: string | null;
  category: string | null;
  price: number;
  currency: string;
  main_image_url: string | null;
  status: ProductStatus;
  created_at: string;
  updated_at: string;
}

export interface ProductVariant {
  id: string;
  product_id: string;
  size: string;
  color: string | null;
  sku: string | null;
  inventory_quantity: number;
  price_override: number | null;
}

// Get seller's brands
export async function getSellerBrands() {
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) {
    return { error: new Error("Not authenticated") };
  }
  
  // Get seller
  const { data: profile } = await supabase
    .from("profiles")
    .select("id")
    .eq("auth_user_id", user.id)
    .single();
  
  if (!profile) {
    return { brands: [] };
  }
  
  const { data: seller } = await supabase
    .from("sellers")
    .select("id")
    .eq("profile_id", profile.id)
    .single();
  
  if (!seller) {
    return { brands: [] };
  }
  
  const { data: brands } = await supabase
    .from("brands")
    .select("*")
    .eq("seller_id", seller.id);
  
  return { brands: brands as Brand[] };
}

// Create a new brand
export async function createBrand(data: {
  name: string;
  description?: string;
  story?: string;
  country?: string;
  category?: string;
  logo_url?: string;
  hero_image_url?: string;
}) {
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) {
    return { error: new Error("Not authenticated") };
  }
  
  // Get seller
  const { data: profile } = await supabase
    .from("profiles")
    .select("id")
    .eq("auth_user_id", user.id)
    .single();
  
  if (!profile) {
    return { error: new Error("Profile not found") };
  }
  
  const { data: seller } = await supabase
    .from("sellers")
    .select("id")
    .eq("profile_id", profile.id)
    .single();
  
  if (!seller) {
    return { error: new Error("Seller not found or not approved") };
  }
  
  // Generate slug from name
  const slug = data.name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  
  const { data: brand, error } = await supabase
    .from("brands")
    .insert({
      seller_id: seller.id,
      name: data.name,
      slug,
      description: data.description,
      story: data.story,
      country: data.country,
      category: data.category,
      logo_url: data.logo_url,
      hero_image_url: data.hero_image_url,
    })
    .select()
    .single();
  
  if (error) {
    return { error };
  }
  
  return { brand: brand as Brand };
}

// Update brand
export async function updateBrand(brandId: string, data: Partial<Brand>) {
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) {
    return { error: new Error("Not authenticated") };
  }
  
  // Verify ownership
  const { data: brand } = await supabase
    .from("brands")
    .select("id, seller_id")
    .eq("id", brandId)
    .single();
  
  if (!brand) {
    return { error: new Error("Brand not found") };
  }
  
  const { data: seller } = await supabase
    .from("sellers")
    .select("id")
    .eq("profile_id", (await supabase.from("profiles").select("id").eq("auth_user_id", user.id).single()).data?.id || "")
    .single();
  
  if (!seller || brand.seller_id !== seller.id) {
    return { error: new Error("Not authorized") };
  }
  
  const { data: updatedBrand, error } = await supabase
    .from("brands")
    .update(data)
    .eq("id", brandId)
    .select()
    .single();
  
  if (error) {
    return { error };
  }
  
  return { brand: updatedBrand as Brand };
}

// Get brand products
export async function getBrandProducts(brandId: string) {
  const { data: products } = await supabase
    .from("products")
    .select("*")
    .eq("brand_id", brandId);
  
  return { products: products as Product[] };
}

// Create product
export async function createProduct(brandId: string, data: {
  name: string;
  description?: string;
  category?: string;
  price: number;
  main_image_url?: string;
}) {
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) {
    return { error: new Error("Not authenticated") };
  }
  
  // Generate slug
  const slug = data.name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  
  const { data: product, error } = await supabase
    .from("products")
    .insert({
      brand_id: brandId,
      name: data.name,
      slug,
      description: data.description,
      category: data.category,
      price: data.price,
      main_image_url: data.main_image_url,
    })
    .select()
    .single();
  
  if (error) {
    return { error };
  }
  
  return { product: product as Product };
}

// Update product
export async function updateProduct(productId: string, data: Partial<Product>) {
  const { error } = await supabase
    .from("products")
    .update(data)
    .eq("id", productId);
  
  if (error) {
    return { error };
  }
  
  return { success: true };
}

// Create product variant
export async function createProductVariant(productId: string, data: {
  size: string;
  color?: string;
  sku?: string;
  inventory_quantity?: number;
  price_override?: number;
}) {
  const { data: variant, error } = await supabase
    .from("product_variants")
    .insert({
      product_id: productId,
      size: data.size,
      color: data.color,
      sku: data.sku,
      inventory_quantity: data.inventory_quantity || 0,
      price_override: data.price_override,
    })
    .select()
    .single();
  
  if (error) {
    return { error };
  }
  
  return { variant: variant as ProductVariant };
}

// Update inventory
export async function updateInventory(variantId: string, quantity: number) {
  const { error } = await supabase
    .from("product_variants")
    .update({ inventory_quantity: quantity })
    .eq("id", variantId);
  
  if (error) {
    return { error };
  }
  
  return { success: true };
}

// Public: Get active brands
export async function getActiveBrands() {
  const { data: brands } = await supabase
    .from("brands")
    .select("*")
    .eq("status", "active")
    .order("name");
  
  return { brands: brands as Brand[] };
}

// Public: Get active products
export async function getActiveProducts(options?: {
  brandId?: string;
  category?: string;
  limit?: number;
}) {
  let query = supabase
    .from("products")
    .select("*")
    .eq("status", "active");
  
  if (options?.brandId) {
    query = query.eq("brand_id", options.brandId);
  }
  
  if (options?.category) {
    query = query.eq("category", options.category);
  }
  
  if (options?.limit) {
    query = query.limit(options.limit);
  }
  
  const { data: products } = await query.order("created_at", { ascending: false });
  
  return { products: products as Product[] };
}

// Public: Get product with variants
export async function getProductWithVariants(productId: string) {
  const { data: product } = await supabase
    .from("products")
    .select("*")
    .eq("id", productId)
    .single();
  
  if (!product) {
    return { error: new Error("Product not found") };
  }
  
  const { data: variants } = await supabase
    .from("product_variants")
    .select("*")
    .eq("product_id", productId);
  
  return { product: product as Product, variants: variants as ProductVariant[] };
}

// ============================================
// ADMIN FUNCTIONS
// ============================================

// Admin: Approve brand
export async function approveBrand(brandId: string, adminId: string) {
  const { error } = await supabase
    .from("brands")
    .update({
      status: "active",
      approved_by: adminId,
      approved_at: new Date().toISOString(),
    })
    .eq("id", brandId);
  
  if (error) {
    return { error };
  }
  
  // Log action
  await supabase.from("admin_audit_log").insert({
    admin_profile_id: adminId,
    action: "approve_brand",
    entity_type: "brand",
    entity_id: brandId,
  });
  
  return { success: true };
}

// Admin: Approve product
export async function approveProduct(productId: string, adminId: string) {
  const { error } = await supabase
    .from("products")
    .update({
      status: "active",
      approved_by: adminId,
      approved_at: new Date().toISOString(),
    })
    .eq("id", productId);
  
  if (error) {
    return { error };
  }
  
  await supabase.from("admin_audit_log").insert({
    admin_profile_id: adminId,
    action: "approve_product",
    entity_type: "product",
    entity_id: productId,
  });
  
  return { success: true };
}