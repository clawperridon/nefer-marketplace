// Cart and Order helpers
import { supabase } from "./supabase";

export type CartStatus = "active" | "completed" | "abandoned";
export type OrderStatus = "pending" | "confirmed" | "shipped" | "delivered" | "cancelled" | "refunded";

export interface CartItem {
  id: string;
  cart_id: string;
  product_id: string;
  variant_id: string;
  quantity: number;
  unit_price: number;
  created_at: string;
  product?: Product;
  variant?: ProductVariant;
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
  status: string;
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

export interface Cart {
  id: string;
  customer_id: string;
  status: CartStatus;
  items: CartItem[];
  subtotal: number;
}

// Get or create cart for customer
export async function getOrCreateCart() {
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) {
    return { error: new Error("Not authenticated") };
  }
  
  // Get customer profile
  const { data: profile } = await supabase
    .from("profiles")
    .select("id")
    .eq("auth_user_id", user.id)
    .single();
  
  if (!profile) {
    return { error: new Error("Profile not found") };
  }
  
  // Get customer
  let { data: customer } = await supabase
    .from("customers")
    .select("id")
    .eq("profile_id", profile.id)
    .single();
  
  // Create customer if doesn't exist
  if (!customer) {
    const { data: newCustomer } = await supabase
      .from("customers")
      .insert({ profile_id: profile.id })
      .select()
      .single();
    
    customer = newCustomer;
  }
  
  // Get active cart
  let { data: cart } = await supabase
    .from("carts")
    .select("*")
    .eq("customer_id", customer!.id)
    .eq("status", "active")
    .single();
  
  // Create cart if doesn't exist
  if (!cart) {
    const { data: newCart } = await supabase
      .from("carts")
      .insert({ customer_id: customer!.id })
      .select()
      .single();
    
    cart = newCart;
  }
  
  return { cart };
}

// Get cart with items
export async function getCart() {
  const cart = await getOrCreateCart();
  
  if (!cart.cart) {
    return { cart: null, items: [], subtotal: 0 };
  }
  
  // Get cart items with product details
  const { data: items } = await supabase
    .from("cart_items")
    .select(`
      *,
      product:products(*),
      variant:product_variants(*)
    `)
    .eq("cart_id", cart.cart.id);
  
  const subtotal = items?.reduce((sum, item) => sum + (item.unit_price * item.quantity), 0) || 0;
  
  return { cart, items: items as CartItem[], subtotal };
}

// Add item to cart
export async function addToCart(productId: string, variantId: string, quantity: number = 1, price: number) {
  const { cart, items } = await getCart();
  
  if (!cart) {
    return { error: new Error("Cart not found") };
  }
  
  // Check if item already in cart
  const existingItem = items?.find(
    item => item.product_id === productId && item.variant_id === variantId
  );
  
  if (existingItem) {
    // Update quantity
    const { error } = await supabase
      .from("cart_items")
      .update({ quantity: existingItem.quantity + quantity })
      .eq("id", existingItem.id);
    
    if (error) {
      return { error };
    }
  } else {
    // Add new item
    const { error } = await supabase
      .from("cart_items")
      .insert({
        cart_id: cart.id,
        product_id: productId,
        variant_id: variantId,
        quantity,
        unit_price: price,
      });
    
    if (error) {
      return { error };
    }
  }
  
  return { success: true };
}

// Update cart item quantity
export async function updateCartItemQuantity(itemId: string, quantity: number) {
  if (quantity <= 0) {
    return removeFromCart(itemId);
  }
  
  const { error } = await supabase
    .from("cart_items")
    .update({ quantity })
    .eq("id", itemId);
  
  if (error) {
    return { error };
  }
  
  return { success: true };
}

// Remove item from cart
export async function removeFromCart(itemId: string) {
  const { error } = await supabase
    .from("cart_items")
    .delete()
    .eq("id", itemId);
  
  if (error) {
    return { error };
  }
  
  return { success: true };
}

// Clear cart
export async function clearCart() {
  const cart = await getOrCreateCart();
  
  if (!cart.cart) {
    return { error: new Error("Cart not found") };
  }
  
  const { error } = await supabase
    .from("cart_items")
    .delete()
    .eq("cart_id", cart.cart.id);
  
  if (error) {
    return { error };
  }
  
  return { success: true };
}

// Create order from cart
export async function createOrderFromCart(shippingAddressId: string, billingAddressId?: string) {
  const { cart, items, subtotal } = await getCart();
  
  if (!cart || !items?.length) {
    return { error: new Error("Cart is empty") };
  }
  
  // Get customer
  const { data: customer } = await supabase
    .from("customers")
    .select("id")
    .eq("profile_id", (await supabase.auth.getUser()).data?.user?.id || "")
    .single();
  
  if (!customer) {
    return { error: new Error("Customer not found") };
  }
  
  // Calculate totals (simplified - no payment yet)
  const shippingTotal = 0; // Free shipping for now
  const taxTotal = subtotal * 0.21; // 21% VAT
  const total = subtotal + shippingTotal + taxTotal;
  
  // Create order
  const { data: order, error } = await supabase
    .from("orders")
    .insert({
      customer_id: customer.id,
      shipping_address_id: shippingAddressId,
      billing_address_id: billingAddressId,
      subtotal,
      shipping_total: shippingTotal,
      tax_total: taxTotal,
      total,
    })
    .select()
    .single();
  
  if (error) {
    return { error };
  }
  
  // Create order items for each cart item
  for (const item of items) {
    const { data: product } = await supabase
      .from("products")
      .select("brand_id, seller_id")
      .eq("id", item.product_id)
      .single();
    
    if (product) {
      await supabase.from("order_items").insert({
        order_id: order!.id,
        product_id: item.product_id,
        variant_id: item.variant_id,
        seller_id: product.seller_id,
        brand_id: product.brand_id,
        quantity: item.quantity,
        unit_price: item.unit_price,
        total_price: item.unit_price * item.quantity,
      });
    }
  }
  
  // Mark cart as completed
  await supabase
    .from("carts")
    .update({ status: "completed" })
    .eq("id", cart.id);
  
  return { order };
}

// Get customer's orders
export async function getOrders() {
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
    return { orders: [] };
  }
  
  const { data: customer } = await supabase
    .from("customers")
    .select("id")
    .eq("profile_id", profile.id)
    .single();
  
  if (!customer) {
    return { orders: [] };
  }
  
  const { data: orders } = await supabase
    .from("orders")
    .select("*")
    .eq("customer_id", customer.id)
    .order("created_at", { ascending: false });
  
  return { orders };
}

// Get order details
export async function getOrder(orderId: string) {
  const { data: order } = await supabase
    .from("orders")
    .select(`
      *,
      items:order_items(*)
    `)
    .eq("id", orderId)
    .single();
  
  return { order };
}