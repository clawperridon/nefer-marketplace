"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useCart } from "@/lib/cart";
import Link from "next/link";

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart, total } = useCart();

  return (
    <main className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-display font-bold mb-8">Shopping Cart</h1>
          
          {items.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted mb-6">Your cart is empty</p>
              <Link href="/discover" className="text-metallic-sand hover:underline">
                Continue Shopping
              </Link>
            </div>
          ) : (
            <>
              <div className="space-y-6 mb-8">
                {items.map((item) => (
                  <div 
                    key={`${item.productId}-${item.size}`}
                    className="flex gap-6 pb-6 border-b border-border"
                  >
                    <div className="w-24 h-32 bg-muted/10 flex-shrink-0" />
                    
                    <div className="flex-1">
                      <Link 
                        href={`/product/${item.productId}`}
                        className="text-sm text-muted hover:text-foreground"
                      >
                        {item.brand}
                      </Link>
                      <h3 className="font-medium mb-1">
                        <Link href={`/product/${item.productId}`}>
                          {item.name}
                        </Link>
                      </h3>
                      <p className="text-sm text-muted mb-2">Size: {item.size}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.productId, item.size, item.quantity - 1)}
                            className="w-8 h-8 border border-border flex items-center justify-center"
                          >
                            −
                          </button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.productId, item.size, item.quantity + 1)}
                            className="w-8 h-8 border border-border flex items-center justify-center"
                          >
                            +
                          </button>
                        </div>
                        
                        <div className="flex items-center gap-4">
                          <p className="font-medium">€{item.price * item.quantity}</p>
                          <button
                            onClick={() => removeItem(item.productId, item.size)}
                            className="text-sm text-muted hover:text-foreground"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-between items-center mb-8">
                <button
                  onClick={clearCart}
                  className="text-sm text-muted hover:text-foreground"
                >
                  Clear Cart
                </button>
                
                <div className="text-right">
                  <p className="text-sm text-muted mb-1">Subtotal</p>
                  <p className="text-2xl font-display font-bold">€{total}</p>
                </div>
              </div>
              
              <Link
                href="/checkout"
                className="block w-full py-4 bg-foreground text-background text-center font-medium"
              >
                Proceed to Checkout
              </Link>
            </>
          )}
        </div>
      </section>
      
      <Footer />
    </main>
  );
}