import React, { Suspense } from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ProductCatalogView } from "@/components/products/ProductCatalogView";

export const metadata: Metadata = {
  title: "Our Products | Crop Protection & Crop Nutrition Catalogue",
  description:
    "Explore our complete agrochemical product catalogue including insecticides, herbicides, and fungicides formulated for Indian crops.",
};

export default function ProductsPage() {
  const breadcrumbs = [{ label: "Products" }];

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumbs */}
      <div className="bg-agri-surface border-b border-gray-200">
        <Breadcrumbs items={breadcrumbs} />
      </div>

      {/* Header Banner */}
      <section className="py-10 lg:py-12 bg-agri-surface border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-700 bg-white px-3 py-1 rounded border border-brand-200 inline-block shadow-xs">
              Product Catalogue
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-agri-dark tracking-tight">
              Our Products
            </h1>
            <p className="text-sm sm:text-base text-gray-700">
              Explore crop protection and crop nutrition solutions scientifically engineered for Indian agro-climatic conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Main Catalog View with Suspense */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <Suspense fallback={<div className="text-center py-12 text-sm text-gray-500">Loading catalog...</div>}>
          <ProductCatalogView />
        </Suspense>
      </div>
    </div>
  );
}
