"use client";

import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import Link from "next/link";

interface Measurements {
  chest: number;
  waist: number;
  hips: number;
  height: number;
  weight: number;
  fitPreference: "tight" | "regular" | "oversized";
}

const sizeConversions = {
  tops: {
    XS: { chest: "32-34", waist: "26-28", hips: "34-36" },
    S: { chest: "34-36", waist: "28-30", hips: "36-38" },
    M: { chest: "36-38", waist: "30-32", hips: "38-40" },
    L: { chest: "38-40", waist: "32-34", hips: "40-42" },
    XL: { chest: "40-42", waist: "34-36", hips: "42-44" },
  },
  bottoms: {
    XS: { waist: "26-28", hips: "34-36" },
    S: { waist: "28-30", hips: "36-38" },
    M: { waist: "30-32", hips: "38-40" },
    L: { waist: "32-34", hips: "40-42" },
    XL: { waist: "34-36", hips: "42-44" },
  },
};

const internationalSizes = {
  XS: { EU: "32/34", UK: "4/6", US: "0/2", JP: "3/5", KR: "44/55", CN: "155/160", AU: "4/6" },
  S: { EU: "34/36", UK: "6/8", US: "2/4", JP: "5/7", KR: "55/66", CN: "160/165", AU: "6/8" },
  M: { EU: "36/38", UK: "8/10", US: "4/6", JP: "7/9", KR: "66/77", CN: "165/170", AU: "8/10" },
  L: { EU: "38/40", UK: "10/12", US: "6/8", JP: "9/11", KR: "77/88", CN: "170/175", AU: "10/12" },
  XL: { EU: "40/42", UK: "12/14", US: "8/10", JP: "11/13", KR: "88/99", CN: "175/180", AU: "12/14" },
};

export default function FitPassportPage() {
  const [measurements, setMeasurements] = useState<Measurements>({
    chest: 0,
    waist: 0,
    hips: 0,
    height: 0,
    weight: 0,
    fitPreference: "regular",
  });
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    localStorage.setItem("fitPassport", JSON.stringify(measurements));
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const calculateSize = () => {
    const { chest, waist, hips } = measurements;
    if (chest >= 40 || waist >= 34 || hips >= 44) return "XL";
    if (chest >= 38 || waist >= 32 || hips >= 42) return "L";
    if (chest >= 36 || waist >= 30 || hips >= 40) return "M";
    if (chest >= 34 || waist >= 28 || hips >= 38) return "S";
    return "XS";
  };

  const recommendedSize = calculateSize();

  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-4xl font-display font-bold">Fit Passport</h1>
            <span className="text-sm text-accent">AI-Powered Sizing</span>
          </div>
          <p className="text-xl text-muted mb-12">
            Your personal sizing profile. Enter your measurements once, and we&apos;ll recommend your perfect size across all brands.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white/5 rounded-xl p-6">
                <h2 className="text-xl font-display font-semibold mb-6">Your Measurements</h2>
                <p className="text-sm text-muted mb-6">Use a measuring tape. Measure loosely for the best fit.</p>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm mb-2">Chest (inches)</label>
                    <input
                      type="number"
                      value={measurements.chest || ""}
                      onChange={(e) => setMeasurements({ ...measurements, chest: Number(e.target.value) })}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-accent"
                      placeholder="Enter chest measurement"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2">Waist (inches)</label>
                    <input
                      type="number"
                      value={measurements.waist || ""}
                      onChange={(e) => setMeasurements({ ...measurements, waist: Number(e.target.value) })}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-accent"
                      placeholder="Enter waist measurement"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2">Hips (inches)</label>
                    <input
                      type="number"
                      value={measurements.hips || ""}
                      onChange={(e) => setMeasurements({ ...measurements, hips: Number(e.target.value) })}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-accent"
                      placeholder="Enter hips measurement"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2">Height (inches)</label>
                    <input
                      type="number"
                      value={measurements.height || ""}
                      onChange={(e) => setMeasurements({ ...measurements, height: Number(e.target.value) })}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-accent"
                      placeholder="Enter height"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2">Fit Preference</label>
                    <select
                      value={measurements.fitPreference}
                      onChange={(e) => setMeasurements({ ...measurements, fitPreference: e.target.value as any })}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:border-accent"
                    >
                      <option value="tight">Tight</option>
                      <option value="regular">Regular</option>
                      <option value="oversized">Oversized</option>
                    </select>
                  </div>
                </div>

                <button
                  onClick={handleSave}
                  className="w-full mt-6 bg-accent text-black font-semibold py-3 rounded-lg hover:bg-accent/90 transition-colors"
                >
                  {saved ? "Saved!" : "Save My Fit Passport"}
                </button>
              </div>
            </div>

            <div className="space-y-8">
              {measurements.chest > 0 && (
                <div className="bg-white/5 rounded-xl p-6">
                  <h2 className="text-xl font-display font-semibold mb-4">Your Size</h2>
                  <div className="text-6xl font-display font-bold text-accent mb-4">
                    {recommendedSize}
                  </div>
                  <p className="text-muted mb-4">
                    Based on your measurements and {measurements.fitPreference} fit preference.
                  </p>
                  {measurements.fitPreference === "tight" && (
                    <p className="text-sm text-muted">Consider sizing up for a more comfortable fit.</p>
                  )}
                  {measurements.fitPreference === "oversized" && (
                    <p className="text-sm text-muted">Consider sizing up for that relaxed look.</p>
                  )}
                </div>
              )}

              <div className="bg-white/5 rounded-xl p-6">
                <h2 className="text-xl font-display font-semibold mb-4">International Conversions</h2>
                <div className="grid grid-cols-4 gap-4">
                  {Object.entries(internationalSizes[recommendedSize as keyof typeof internationalSizes] || internationalSizes.M).map(([region, size]) => (
                    <div key={region}>
                      <div className="text-sm text-muted">{region}</div>
                      <div className="font-semibold">{size}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6">
                <h2 className="text-xl font-display font-semibold mb-4">Size Guide by Brand</h2>
                <p className="text-muted text-sm">
                  Different brands fit differently. Check each product page for brand-specific sizing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}