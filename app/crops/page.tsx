import React from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CropCard } from "@/components/crops/CropCard";
import { CROPS } from "@/data/crops";

export const metadata: Metadata = {
  title: "Crop Solutions | Agronomic Crop Protection Guides",
  description:
    "Comprehensive crop-specific protection and nutrition guides for Cotton, Rice (Paddy), Wheat, Chilli & Vegetables, Sugarcane, and Soybean.",
};

export default function CropsPage() {
  const breadcrumbs = [{ label: "Crop Solutions" }];

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumbs */}
      <div className="bg-agri-surface border-b border-gray-200">
        <Breadcrumbs items={breadcrumbs} />
      </div>

      {/* Header Banner */}
      <section className="py-10 lg:py-14 bg-agri-surface border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-700 bg-white px-3 py-1 rounded border border-brand-200 inline-block shadow-xs">
              Agronomy &amp; Field Advisory
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-agri-dark tracking-tight">
              Crop Solutions Hub
            </h1>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Explore scientific crop protection schedules, pest management protocols, and verified agrochemical recommendations across India&apos;s major crops.
            </p>
          </div>
        </div>
      </section>

      {/* Main Crops Grid */}
      <section className="py-12 lg:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CROPS.map((crop) => (
            <CropCard key={crop.id} crop={crop} />
          ))}
        </div>
      </section>
    </div>
  );
}
