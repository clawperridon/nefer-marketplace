"use client";

import { useState } from "react";

const savedAddresses = [
  { id: "1", name: "Home", address: "Herengracht 123", city: "Amsterdam", postal: "1011 BC", country: "Netherlands", default: true },
  { id: "2", name: "Office", address: "Rembrandtplein 45", city: "Amsterdam", postal: "1017 CP", country: "Netherlands", default: false },
];

export default function AddressesPage() {
  const [addresses, setAddresses] = useState(savedAddresses);

  function deleteAddress(id: string) {
    setAddresses(addresses.filter((a) => a.id !== id));
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-display font-semibold">Saved Addresses</h2>
        <button className="px-4 py-2 border border-border text-sm hover:bg-muted/10">
          + Add Address
        </button>
      </div>
      
      {addresses.length === 0 ? (
        <p className="text-muted">No saved addresses.</p>
      ) : (
        <div className="space-y-4">
          {addresses.map((addr) => (
            <div key={addr.id} className="border border-border p-4">
              <div className="flex justify-between">
                <div>
                  <p className="font-medium">{addr.name} {addr.default && <span className="text-xs text-metallic-sand">(Default)</span>}</p>
                  <p className="text-sm text-muted">{addr.address}</p>
                  <p className="text-sm text-muted">{addr.postal} {addr.city}</p>
                  <p className="text-sm text-muted">{addr.country}</p>
                </div>
                <div className="flex gap-2">
                  <button className="text-sm text-muted hover:text-foreground">Edit</button>
                  <button 
                    onClick={() => deleteAddress(addr.id)}
                    className="text-sm text-muted hover:text-foreground"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}