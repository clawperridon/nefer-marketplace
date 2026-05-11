// Auth helper functions for Supabase
import { supabase } from "./supabase";
import { cookies } from "next/headers";

export type UserRole = "customer" | "seller" | "admin";

export interface UserProfile {
  id: string;
  auth_user_id: string;
  role: UserRole;
  first_name: string | null;
  last_name: string | null;
  email: string;
  avatar_url: string | null;
}

// Get current user from server
export async function getUser() {
  const { data: { user }, error } = await supabase.auth.getUser();
  
  if (error || !user) {
    return null;
  }
  
  return user;
}

// Get user profile from database
export async function getProfile(userId: string) {
  const { data: profile, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("auth_user_id", userId)
    .single();
  
  if (error || !profile) {
    return null;
  }
  
  return profile as UserProfile;
}

// Get user role
export async function getUserRole(userId: string): Promise<UserRole | null> {
  const profile = await getProfile(userId);
  return profile?.role || null;
}

// Check if user is seller
export async function isSeller(userId: string): Promise<boolean> {
  const role = await getUserRole(userId);
  return role === "seller";
}

// Check if user is admin
export async function isAdmin(userId: string): Promise<boolean> {
  const role = await getUserRole(userId);
  return role === "admin";
}

// Check if user is customer
export async function isCustomer(userId: string): Promise<boolean> {
  const role = await getUserRole(userId);
  return role === "customer";
}

// Sign up as customer
export async function signUp(email: string, password: string, firstName?: string, lastName?: string) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        first_name: firstName,
        last_name: lastName,
      },
    },
  });
  
  if (error) {
    return { error };
  }
  
  return { user: data.user, session: data.session };
}

// Sign in
export async function signIn(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  
  if (error) {
    return { error };
  }
  
  return { user: data.user, session: data.session };
}

// Sign out
export async function signOut() {
  const { error } = await supabase.auth.signOut();
  
  if (error) {
    return { error };
  }
  
  return { success: true };
}

// Reset password
export async function resetPassword(email: string) {
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/reset-password`,
  });
  
  if (error) {
    return { error };
  }
  
  return { success: true };
}

// Update profile
export async function updateProfile(userId: string, updates: Partial<UserProfile>) {
  const { data, error } = await supabase
    .from("profiles")
    .update(updates)
    .eq("auth_user_id", userId)
    .select()
    .single();
  
  if (error) {
    return { error };
  }
  
  return { profile: data as UserProfile };
}

// Check if authenticated (for client)
export function useRequireAuth() {
  // This would be used as a hook wrapper in client components
  return supabase.auth.getUser();
}

// Redirect if not authenticated
export async function requireAuth() {
  const user = await getUser();
  
  if (!user) {
    throw new Error("Authentication required");
  }
  
  return user;
}

// Redirect if not seller
export async function requireSeller() {
  const user = await requireAuth();
  const isSellerUser = await isSeller(user.id);
  
  if (!isSellerUser) {
    throw new Error("Seller access required");
  }
  
  return user;
}

// Redirect if not admin
export async function requireAdmin() {
  const user = await requireAuth();
  const isAdminUser = await isAdmin(user.id);
  
  if (!isAdminUser) {
    throw new Error("Admin access required");
  }
  
  return user;
}