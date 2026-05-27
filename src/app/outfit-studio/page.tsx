'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { useFavorites, favoriteToOutfitItem } from '@/lib/favorites';

// Default kleding items
const defaultClothingItems = [
  { id: 't1', name: 'Silk Blouse', price: 245, type: 'top', icon: '👚' },
  { id: 't2', name: 'Oversized Tee', price: 95, type: 'top', icon: '👕' },
  { id: 't3', name: 'Cashmere Knit', price: 345, type: 'top', icon: '🧥' },
  { id: 't4', name: 'Wool Blazer', price: 295, type: 'top', icon: '🧥' },
  { id: 't5', name: 'Silk Tank', price: 145, type: 'top', icon: '🎽' },
  { id: 't6', name: 'Linen Shirt', price: 125, type: 'top', icon: '👔' },
  { id: 'b1', name: 'Wide Trouser', price: 185, type: 'bottom', icon: '👖' },
  { id: 'b2', name: 'Pleated Skirt', price: 165, type: 'bottom', icon: '🩰' },
  { id: 'b3', name: 'Tailored Shorts', price: 125, type: 'bottom', icon: '🩳' },
  { id: 'b4', name: 'Slim Denim', price: 195, type: 'bottom', icon: '👖' },
  { id: 'b5', name: 'Midi Skirt', price: 175, type: 'bottom', icon: '🩰' },
  { id: 'o1', name: 'Oversized Coat', price: 495, type: 'outer', icon: '🧥' },
  { id: 'o2', name: 'Leather Jacket', price: 425, type: 'outer', icon: '🧥' },
  { id: 'o3', name: 'Denim Jacket', price: 175, type: 'outer', icon: '🧥' },
  { id: 'o4', name: 'Trench Coat', price: 395, type: 'outer', icon: '🧥' },
  { id: 's1', name: 'Leather Boots', price: 295, type: 'shoes', icon: '👢' },
  { id: 's2', name: 'Sneakers', price: 165, type: 'shoes', icon: '👟' },
  { id: 's3', name: 'Loafers', price: 225, type: 'shoes', icon: '👞' },
  { id: 's4', name: 'Heels', price: 195, type: 'shoes', icon: '👠' },
  { id: 'g1', name: 'Tote Bag', price: 245, type: 'bag', icon: '👜' },
  { id: 'g2', name: 'Shoulder Bag', price: 295, type: 'bag', icon: '👜' },
  { id: 'g3', name: 'Mini Bag', price: 175, type: 'bag', icon: '👛' },
];

interface OutfitItem {
  id: string;
  name: string;
  price: number;
  type: string;
  icon: string;
}

export default function OutfitStudio() {
  const [outfit, setOutfit] = useState<Record<string, OutfitItem>>({});
  const [showSaved, setShowSaved] = useState(false);
  const [savedLook, setSavedLook] = useState<OutfitItem[]>([]);
  const [showFavorites, setShowFavorites] = useState(true);
  const { favorites } = useFavorites();

  // Convert favorites to outfit items
  const favoriteItems = favorites.map(fav => ({
    ...favoriteToOutfitItem(fav),
    isFavorite: true,
  }));

  const total = Object.values(outfit).reduce((sum, item) => sum + item.price, 0);

  const toggleItem = (item: OutfitItem) => {
    setOutfit(prev => {
      if (prev[item.type]?.id === item.id) {
        const { [item.type]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [item.type]: item };
    });
  };

  const clearAll = () => setOutfit({});

  const saveLook = () => {
    const items = Object.values(outfit);
    if (items.length === 0) return;
    setSavedLook(items);
    setShowSaved(true);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-canvas via-canvas to-linen">
      <Navigation />
      
      <div className="pt-28 pb-20 px-4">
        <div className="max-w-xl mx-auto">
          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-3xl font-display font-light italic text-ink mb-2">
              Outfit Studio
            </h1>
            <p className="text-xs font-mono text-dusk/50 uppercase tracking-widest">
              Build your look
            </p>
          </div>

          {/* Favorites Section */}
          {favoriteItems.length > 0 && (
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-sm font-display text-ink">Your Favorites</h2>
                <button 
                  onClick={() => setShowFavorites(!showFavorites)}
                  className="text-xs font-mono text-sand"
                >
                  {showFavorites ? 'Hide' : 'Show'}
                </button>
              </div>
              {showFavorites && (
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {favoriteItems.map((item, i) => (
                    <button
                      key={`fav-${i}`}
                      onClick={() => toggleItem(item)}
                      className={`
                        min-w-[70px] h-[90px] bg-white border-2 rounded-lg 
                        flex flex-col items-center justify-center gap-1
                        transition-all duration-200 flex-shrink-0
                        ${outfit[item.type]?.id === item.id 
                          ? 'border-sand shadow-lg shadow-sand/20' 
                          : 'border-red-200 hover:border-red-300'}
                      `}
                    >
                      <span className="text-2xl">{item.icon}</span>
                      <span className="text-[8px] text-ink text-center leading-tight px-1 truncate w-full">
                        {item.name}
                      </span>
                      <span className="text-[10px] text-red-400 font-display italic">
                        ❤️
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Default Clothing Track */}
          <div className="overflow-x-auto pb-4 mb-8 bg-white/50 border border-dune-100 rounded-lg">
            <div className="flex gap-3 p-4 min-w-max">
              {[...defaultClothingItems, ...defaultClothingItems].map((item, i) => (
                <button
                  key={`${item.id}-${i}`}
                  onClick={() => toggleItem(item)}
                  className={`
                    min-w-[90px] h-[120px] bg-white border-2 rounded-lg 
                    flex flex-col items-center justify-center gap-1
                    transition-all duration-200 flex-shrink-0
                    ${outfit[item.type]?.id === item.id 
                      ? 'border-sand shadow-lg shadow-sand/20' 
                      : 'border-dune-100 hover:border-sand/50'}
                  `}
                >
                  <span className="text-3xl">{item.icon}</span>
                  <span className="text-[9px] text-ink text-center leading-tight px-1">
                    {item.name}
                  </span>
                  <span className="text-xs text-sand font-display italic">
                    €{item.price}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Canvas / Preview */}
          <div className="relative aspect-[260/380] max-w-[260px] mx-auto mb-8">
            <div className="absolute inset-0 rounded-xl border border-dune-200/50 bg-gradient-to-b from-white to-canvas shadow-2xl" />
            
            {/* Silhouette guide */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] h-[220px] border-2 border-dashed border-sand/20 rounded-[60px]" />
            
            {/* Empty state */}
            {Object.keys(outfit).length === 0 && (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs font-mono text-dusk/30 uppercase tracking-widest">
                  Tap items above
                </span>
              </div>
            )}

            {/* Placed items */}
            {outfit['outer'] && (
              <div className="absolute left-1/2 -translate-x-1/2 top-[5%] text-4xl">
                {outfit['outer'].icon}
              </div>
            )}
            {outfit['top'] && (
              <div className="absolute left-1/2 -translate-x-1/2 top-[25%] text-4xl">
                {outfit['top'].icon}
              </div>
            )}
            {outfit['bottom'] && (
              <div className="absolute left-1/2 -translate-x-1/2 top-[50%] text-4xl">
                {outfit['bottom'].icon}
              </div>
            )}
            {outfit['shoes'] && (
              <div className="absolute left-1/2 -translate-x-1/2 top-[78%] text-3xl">
                {outfit['shoes'].icon}
              </div>
            )}
            {outfit['bag'] && (
              <div className="absolute top-[12%] right-[10%] text-2xl">
                {outfit['bag'].icon}
              </div>
            )}

            {/* Total */}
            <div className="absolute bottom-4 right-4 text-right">
              <div className="text-[8px] font-mono text-dusk/50 uppercase tracking-widest">
                Total
              </div>
              <div className="text-2xl font-display italic text-sand">
                €{total}
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex gap-3 max-w-xs mx-auto">
            <button
              onClick={clearAll}
              className="flex-1 py-3 px-4 border border-ink text-ink text-xs uppercase tracking-widest rounded hover:bg-ink hover:text-canvas transition-colors"
            >
              Clear
            </button>
            <button
              onClick={saveLook}
              className="flex-1 py-3 px-4 bg-ink text-canvas text-xs uppercase tracking-widest rounded hover:opacity-90 transition-opacity"
            >
              Save Look
            </button>
          </div>
        </div>
      </div>

      <Footer />

      {/* Saved Modal */}
      {showSaved && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-canvas p-6 rounded-lg max-w-sm mx-4">
            <h3 className="text-xl font-display italic text-ink mb-4">Look Saved!</h3>
            <div className="space-y-2 mb-4">
              {savedLook.map(item => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span>{item.icon} {item.name}</span>
                  <span className="text-sand">€{item.price}</span>
                </div>
              ))}
              <div className="border-t border-dune-100 pt-2 flex justify-between font-display italic">
                <span>Total</span>
                <span className="text-sand">€{total}</span>
              </div>
            </div>
            <button
              onClick={() => setShowSaved(false)}
              className="w-full py-3 bg-ink text-canvas text-xs uppercase tracking-widest rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
}