// Seller application helpers
import { supabase } from "./supabase";

export type SellerStatus = "pending" | "approved" | "rejected" | "suspended";
export type ApplicationStatus = "pending" | "approved" | "rejected";

export interface SellerApplication {
  id: string;
  profile_id: string;
  status: ApplicationStatus;
  business_name: string;
  founder_name: string | null;
  email: string;
  website: string | null;
  instagram: string | null;
  country: string | null;
  category: string | null;
  brand_description: string | null;
  notes: string | null;
  reviewed_by: string | null;
  reviewed_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface Seller {
  id: string;
  profile_id: string;
  status: SellerStatus;
  business_name: string;
  founder_name: string | null;
  email: string;
  website: string | null;
  instagram: string | null;
  country: string | null;
  brand_description: string | null;
  approved_at: string | null;
  approved_by: string | null;
  created_at: string;
  updated_at: string;
}

// Submit seller application
export async function submitSellerApplication(data: {
  business_name: string;
  founder_name?: string;
  email: string;
  website?: string;
  instagram?: string;
  country?: string;
  category?: string;
  brand_description?: string;
}) {
  // First get the current user's profile
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) {
    return { error: new Error("Not authenticated") };
  }
  
  // Get profile ID
  const { data: profile } = await supabase
    .from("profiles")
    .select("id")
    .eq("auth_user_id", user.id)
    .single();
  
  if (!profile) {
    return { error: new Error("Profile not found") };
  }
  
  // Create application
  const { data: application, error } = await supabase
    .from("seller_applications")
    .insert({
      profile_id: profile.id,
      business_name: data.business_name,
      founder_name: data.founder_name,
      email: data.email,
      website: data.website,
      instagram: data.instagram,
      country: data.country,
      category: data.category,
      brand_description: data.brand_description,
    })
    .select()
    .single();
  
  if (error) {
    return { error };
  }
  
  // Update profile role to seller
  await supabase
    .from("profiles")
    .update({ role: "seller" })
    .eq("auth_user_id", user.id);
  
  return { application: application as SellerApplication };
}

// Get seller's application status
export async function getSellerApplication() {
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) {
    return { error: new Error("Not authenticated") };
  }
  
  const { data: profile } = await supabase
    .from("profiles")
    .select("id")
    .eq("auth_user_id", user.id)
    .single();
  
  if (!profile) {
    return { application: null };
  }
  
  const { data: application } = await supabase
    .from("seller_applications")
    .select("*")
    .eq("profile_id", profile.id)
    .order("created_at", { ascending: false })
    .limit(1)
    .single();
  
  return { application: application as SellerApplication | null };
}

// Get seller's record
export async function getSeller() {
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) {
    return { error: new Error("Not authenticated") };
  }
  
  const { data: profile } = await supabase
    .from("profiles")
    .select("id")
    .eq("auth_user_id", user.id)
    .single();
  
  if (!profile) {
    return { seller: null };
  }
  
  const { data: seller } = await supabase
    .from("sellers")
    .select("*")
    .eq("profile_id", profile.id)
    .single();
  
  return { seller: seller as Seller | null };
}

// Get seller's brands
export async function getSellerBrands() {
  const seller = await getSeller();
  
  if (!seller.seller) {
    return { brands: [] };
  }
  
  const { data: brands } = await supabase
    .from("brands")
    .select("*")
    .eq("seller_id", seller.seller.id);
  
  return { brands };
}

// Get seller's products
export async function getSellerProducts() {
  const brands = await getSellerBrands();
  
  if (!brands.brands?.length) {
    return { products: [] };
  }
  
  const brandIds = brands.brands.map(b => b.id);
  
  const { data: products } = await supabase
    .from("products")
    .select("*")
    .in("brand_id", brandIds);
  
  return { products };
}

// Admin: Get all pending applications
export async function getPendingApplications() {
  const { data: applications, error } = await supabase
    .from("seller_applications")
    .select("*")
    .eq("status", "pending")
    .order("created_at", { ascending: true });
  
  if (error) {
    return { error };
  }
  
  return { applications: applications as SellerApplication[] };
}

// Admin: Approve seller application
export async function approveSellerApplication(applicationId: string, adminId: string) {
  // Get application
  const { data: application } = await supabase
    .from("seller_applications")
    .select("*")
    .eq("id", applicationId)
    .single();
  
  if (!application) {
    return { error: new Error("Application not found") };
  }
  
  // Update application status
  await supabase
    .from("seller_applications")
    .update({
      status: "approved",
      reviewed_by: adminId,
      reviewed_at: new Date().toISOString(),
    })
    .eq("id", applicationId);
  
  // Create seller record
  const { data: seller, error } = await supabase
    .from("sellers")
    .insert({
      profile_id: application.profile_id,
      status: "approved",
      business_name: application.business_name,
      founder_name: application.founder_name,
      email: application.email,
      website: application.website,
      instagram: application.instagram,
      country: application.country,
      brand_description: application.brand_description,
      approved_by: adminId,
      approved_at: new Date().toISOString(),
    })
    .select()
    .single();
  
  if (error) {
    return { error };
  }
  
  // Log admin action
  await supabase.from("admin_audit_log").insert({
    admin_profile_id: adminId,
    action: "approve_seller_application",
    entity_type: "seller_application",
    entity_id: applicationId,
    metadata: { business_name: application.business_name },
  });
  
  return { seller };
}

// Admin: Reject seller application
export async function rejectSellerApplication(applicationId: string, adminId: string, notes?: string) {
  const { error } = await supabase
    .from("seller_applications")
    .update({
      status: "rejected",
      reviewed_by: adminId,
      reviewed_at: new Date().toISOString(),
      notes: notes,
    })
    .eq("id", applicationId);
  
  if (error) {
    return { error };
  }
  
  // Log admin action
  await supabase.from("admin_audit_log").insert({
    admin_profile_id: adminId,
    action: "reject_seller_application",
    entity_type: "seller_application",
    entity_id: applicationId,
    metadata: { notes },
  });
  
  return { success: true };
}