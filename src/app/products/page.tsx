import React from "react";
import type { Metadata } from "next";
import { ProductDirectory } from "@/components/ProductDirectory";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Product Catalogue | Complete Crop Protection Portfolio | Shimanzu",
  description:
    "Explore Shimanzu Chemicals' complete authentic range of Insecticides, Fungicides, Herbicides, and Plant Growth Regulators. Filter by active ingredient, formulation, and crop.",
};

export default function ProductsPage() {
  return (
    <div className="space-y-12 sm:space-y-16 pb-20">
      {/* Page Header Banner */}
      <section className="bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#2d6a4f_1px,transparent_1px)] [background-size:24px_24px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-shimanzu-red"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-300">
                OFFICIAL CATALOGUE
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
              Product Portfolio & Discovery
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Explore authentic Shimanzu crop protection chemistries engineered with Japanese formulation standards for Indian agriculture. Search by brand name, active ingredient, or crop challenge.
            </p>
          </div>
        </div>
      </section>

      {/* Main Product Directory & Faceted Filtering */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProductDirectory />
      </section>
    </div>
  );
}
