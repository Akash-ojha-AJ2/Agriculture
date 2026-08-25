import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CROPS } from "@/data/crops";
import { CropCard } from "@/components/crops/CropCard";

export function CropSolutionsPreview() {
  return (
    <section className="py-14 lg:py-20 bg-agri-panel border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-100/70 px-3 py-1 rounded border border-brand-200 inline-block">
              Agronomic Advisory
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-agri-dark tracking-tight">
              Crop-Specific Solutions
            </h2>
            <p className="text-sm text-gray-600 max-w-2xl">
              Tailored protection schedules and pest-management recommendations for India&apos;s leading commercial and food crops.
            </p>
          </div>
          <Link
            href="/crops"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-bold text-agri-deep bg-white hover:bg-brand-50 border border-gray-300 rounded-lg shadow-xs transition-colors"
          >
            <span>Explore All Crop Guides</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Crops Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CROPS.slice(0, 3).map((crop) => (
            <CropCard key={crop.id} crop={crop} />
          ))}
        </div>
      </div>
    </section>
  );
}
