"use client";

import { createContext, useContext, useState, useSyncExternalStore } from "react";

export interface CartItem {
  id: string;
  productId: string;
  name: string;
  brand: string;
  price: number;
  size: string;
  quantity: number;
  image?: string;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (productId: string, size: string) => void;
  updateQuantity: (productId: string, size: string, quantity: number) => void;
  clearCart: () => void;
  total: number;
  count: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = "nefer_cart";

function getStoredCart(): CartItem[] {
  if (typeof window === "undefined") return [];
  const stored = localStorage.getItem(CART_STORAGE_KEY);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      return [];
    }
  }
  return [];
}

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function createCartStore() {
  let items: CartItem[] = [];
  
  const get = () => items;
  const set = (newItems: CartItem[]) => {
    items = newItems;
    if (typeof window !== "undefined") {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    }
  };
  
  return {
    get,
    set,
    subscribe,
    addItem: (newItem: Omit<CartItem, "quantity">) => {
      const existing = items.find(
        (item) => item.productId === newItem.productId && item.size === newItem.size
      );
      if (existing) {
        set(items.map((item) =>
          item.productId === newItem.productId && item.size === newItem.size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ));
      } else {
        set([...items, { ...newItem, quantity: 1 }]);
      }
    },
    removeItem: (productId: string, size: string) => {
      set(items.filter(
        (item) => !(item.productId === productId && item.size === size)
      ));
    },
    updateQuantity: (productId: string, size: string, quantity: number) => {
      if (quantity <= 0) {
        set(items.filter(
          (item) => !(item.productId === productId && item.size === size)
        ));
      } else {
        set(items.map((item) =>
          item.productId === productId && item.size === size
            ? { ...item, quantity }
            : item
        ));
      }
    },
    clear: () => set([]),
  };
}

const cartStore = createCartStore();

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [initialized, setInitialized] = useState(false);
  
  const items = useSyncExternalStore(
    cartStore.subscribe,
    () => {
      if (!initialized && typeof window !== "undefined") {
        const stored = getStoredCart();
        if (stored.length > 0) {
          cartStore.set(stored);
        }
        setInitialized(true);
      }
      return cartStore.get();
    },
    () => []
  );

  const value = {
    items,
    addItem: cartStore.addItem,
    removeItem: cartStore.removeItem,
    updateQuantity: cartStore.updateQuantity,
    clearCart: cartStore.clear,
    total: items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    count: items.reduce((sum, item) => sum + item.quantity, 0),
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}