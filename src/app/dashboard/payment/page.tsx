"use client";

import { useState } from "react";

const savedCards = [
  { id: "1", last4: "4242", expiry: "12/27", brand: "Visa", default: true },
];

export default function PaymentPage() {
  const [cards, setCards] = useState(savedCards);

  function deleteCard(id: string) {
    setCards(cards.filter((c) => c.id !== id));
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-display font-semibold">Payment Methods</h2>
        <button className="px-4 py-2 border border-border text-sm hover:bg-muted/10">
          + Add Card
        </button>
      </div>
      
      {cards.length === 0 ? (
        <p className="text-muted">No saved payment methods.</p>
      ) : (
        <div className="space-y-4">
          {cards.map((card) => (
            <div key={card.id} className="border border-border p-4 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="w-12 h-8 bg-muted/10 flex items-center justify-center text-xs font-bold">
                  {card.brand}
                </div>
                <div>
                  <p className="text-sm">•••• •••• •••• {card.last4}</p>
                  <p className="text-xs text-muted">Expires {card.expiry}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="text-sm text-muted hover:text-foreground">Edit</button>
                <button 
                  onClick={() => deleteCard(card.id)}
                  className="text-sm text-muted hover:text-foreground"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      
      <p className="text-xs text-muted mt-6">
        Your payment information is secure and encrypted.
      </p>
    </div>
  );
}