"use client";

import { useState } from "react";

export default function AccountPage() {
  const [form, setForm] = useState({
    firstName: "Jane",
    lastName: "Doe",
    email: "jane@example.com",
    phone: "+31 6 1234 5678",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Save to database
    alert("Profile updated!");
  }

  return (
    <div>
      <h2 className="text-xl font-display font-semibold mb-6">Account Settings</h2>
      
      <form onSubmit={handleSubmit} className="max-w-md space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-2">First Name</label>
            <input 
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-border bg-background"
            />
          </div>
          <div>
            <label className="block text-sm mb-2">Last Name</label>
            <input 
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-border bg-background"
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm mb-2">Email</label>
          <input 
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-border bg-background"
          />
        </div>
        
        <div>
          <label className="block text-sm mb-2">Phone</label>
          <input 
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-border bg-background"
          />
        </div>
        
        <button type="submit" className="px-6 py-3 bg-foreground text-background font-medium">
          Save Changes
        </button>
      </form>
    </div>
  );
}