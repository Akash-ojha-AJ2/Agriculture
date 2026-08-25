"use client";

import React, { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { ProductFilterSidebar } from "./ProductFilterSidebar";
import { ProductGrid } from "./ProductGrid";
import { PRODUCTS, Product } from "@/data/products";
import { Filter, SlidersHorizontal, X } from "lucide-react";

export function ProductCatalogView() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";
  const initialCrop = searchParams.get("crop") || "all";

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedCrop, setSelectedCrop] = useState<string>(initialCrop);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [mobileFilterOpen, setMobileFilterOpen] = useState<boolean>(false);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category match
      const matchCategory =
        selectedCategory === "all" || product.categorySlug === selectedCategory;

      // Crop match
      const matchCrop =
        selectedCrop === "all" || product.cropSlugs.includes(selectedCrop);

      // Search match
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        q === "" ||
        product.name.toLowerCase().includes(q) ||
        product.composition.toLowerCase().includes(q) ||
        product.category.toLowerCase().includes(q) ||
        product.shortDescription.toLowerCase().includes(q) ||
        product.productType.toLowerCase().includes(q) ||
        product.targetPests.some((pest) => pest.toLowerCase().includes(q)) ||
        product.recommendedCrops.some((crop) => crop.toLowerCase().includes(q));

      return matchCategory && matchCrop && matchSearch;
    });
  }, [selectedCategory, selectedCrop, searchQuery]);

  const handleReset = () => {
    setSelectedCategory("all");
    setSelectedCrop("all");
    setSearchQuery("");
  };

  return (
    <div>
      {/* Mobile Filter Trigger Button */}
      <div className="lg:hidden mb-6 flex items-center justify-between bg-white p-3 rounded-lg border border-gray-200">
        <button
          onClick={() => setMobileFilterOpen(true)}
          className="px-3.5 py-2 text-xs font-bold text-agri-deep bg-brand-50 border border-brand-200 rounded-md flex items-center gap-2"
        >
          <SlidersHorizontal className="w-4 h-4" />
          <span>Filters &amp; Search</span>
          {(selectedCategory !== "all" || selectedCrop !== "all" || searchQuery) && (
            <span className="w-2 h-2 rounded-full bg-brand-600" />
          )}
        </button>
        <span className="text-xs text-gray-500 font-semibold">
          Showing {filteredProducts.length} of {PRODUCTS.length}
        </span>
      </div>

      {/* Main Catalog Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Sidebar Filter (Desktop) */}
        <aside className="hidden lg:block lg:col-span-3 sticky top-24">
          <ProductFilterSidebar
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            selectedCrop={selectedCrop}
            onSelectCrop={setSelectedCrop}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            onReset={handleReset}
            totalFiltered={filteredProducts.length}
          />
        </aside>

        {/* Right Product Grid */}
        <main className="lg:col-span-9 space-y-4">
          {/* Active Filter Chips Bar */}
          <div className="flex items-center justify-between flex-wrap gap-2 pb-2">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs text-gray-500 font-semibold">Showing:</span>
              <span className="text-xs font-bold text-agri-dark">
                {selectedCategory === "all" ? "All Categories" : selectedCategory}
              </span>
              {selectedCrop !== "all" && (
                <span className="text-xs px-2 py-0.5 rounded bg-brand-50 text-agri-deep border border-brand-200 font-medium">
                  Crop: {selectedCrop}
                </span>
              )}
              {searchQuery && (
                <span className="text-xs px-2 py-0.5 rounded bg-gray-100 text-gray-700 border border-gray-200 font-medium">
                  Query: &quot;{searchQuery}&quot;
                </span>
              )}
            </div>

            <span className="text-xs font-semibold text-gray-500">
              {filteredProducts.length} {filteredProducts.length === 1 ? "Product" : "Products"} Available
            </span>
          </div>

          <ProductGrid
            products={filteredProducts}
            onResetFilters={handleReset}
          />
        </main>
      </div>

      {/* Mobile Drawer */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-end bg-black/50 backdrop-blur-xs lg:hidden">
          <div className="w-full max-w-xs bg-white h-full p-5 overflow-y-auto space-y-4 shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-gray-200">
              <h3 className="text-sm font-bold text-agri-dark">Product Filters</h3>
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="p-1 rounded text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <ProductFilterSidebar
              selectedCategory={selectedCategory}
              onSelectCategory={(cat) => {
                setSelectedCategory(cat);
                setMobileFilterOpen(false);
              }}
              selectedCrop={selectedCrop}
              onSelectCrop={(cr) => {
                setSelectedCrop(cr);
                setMobileFilterOpen(false);
              }}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              onReset={handleReset}
              totalFiltered={filteredProducts.length}
            />

            <button
              onClick={() => setMobileFilterOpen(false)}
              className="w-full py-2.5 text-xs font-bold text-white bg-agri-deep rounded"
            >
              Show {filteredProducts.length} Products
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
