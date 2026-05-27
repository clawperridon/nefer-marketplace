"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export interface Favorite {
  id: string;
  productId: string;
  name: string;
  brand: string;
  price: number;
  category: string; // top, bottom, outer, shoes, bag
  addedAt: number;
}

interface FavoritesContextType {
  favorites: Favorite[];
  addFavorite: (item: Omit<Favorite, "addedAt">) => void;
  removeFavorite: (productId: string) => void;
  isFavorite: (productId: string) => boolean;
  clearFavorites: () => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

// Map categories to outfit-studio types
const categoryMap: Record<string, string> = {
  "Tops": "top",
  "Bottoms": "bottom", 
  "Outerwear": "outer",
  "Outer": "outer",
  "Accessories": "bag",
  "Shoes": "shoes",
  "Dresses": "top", // dresses as tops for now
};

export function mapCategoryToType(category: string): string {
  return categoryMap[category] || "top";
}

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<Favorite[]>([]);
  const [loaded, setLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem("nefer_favorites");
      if (stored) {
        setFavorites(JSON.parse(stored));
      }
    } catch (e) {
      console.error("Failed to load favorites:", e);
    }
    setLoaded(true);
  }, []);

  // Save to localStorage when changed
  useEffect(() => {
    if (loaded) {
      try {
        localStorage.setItem("nefer_favorites", JSON.stringify(favorites));
      } catch (e) {
        console.error("Failed to save favorites:", e);
      }
    }
  }, [favorites, loaded]);

  const addFavorite = (item: Omit<Favorite, "addedAt">) => {
    if (!favorites.find(f => f.productId === item.productId)) {
      setFavorites(prev => [...prev, { ...item, addedAt: Date.now() }]);
    }
  };

  const removeFavorite = (productId: string) => {
    setFavorites(prev => prev.filter(f => f.productId !== productId));
  };

  const isFavorite = (productId: string) => {
    return favorites.some(f => f.productId === productId);
  };

  const clearFavorites = () => {
    setFavorites([]);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite, clearFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within FavoritesProvider");
  }
  return context;
}

// Helper to convert favorite to outfit item format
export function favoriteToOutfitItem(fav: Favorite) {
  // Simple emoji mapping based on category
  const emojiMap: Record<string, string> = {
    "top": "👕",
    "bottom": "👖",
    "outer": "🧥",
    "shoes": "👟",
    "bag": "👜",
  };
  
  return {
    id: fav.productId,
    name: fav.name,
    price: fav.price,
    type: fav.category,
    icon: emojiMap[fav.category] || "👕",
  };
}