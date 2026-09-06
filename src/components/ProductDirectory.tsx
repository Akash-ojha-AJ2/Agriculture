"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Search,
  Filter,
  X,
  SlidersHorizontal,
  ChevronRight,
  RotateCcw,
  Sprout,
  ShieldAlert,
} from "lucide-react";
import { PRODUCTS, ProductCategory, PRODUCT_CATEGORIES, Product } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { EnquiryModal } from "@/components/EnquiryModal";

interface ProductDirectoryProps {
  initialCategory?: ProductCategory;
}

export const ProductDirectory: React.FC<ProductDirectoryProps> = ({
  initialCategory,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    initialCategory || "all"
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFormulation, setSelectedFormulation] = useState<string>("all");
  const [selectedCrop, setSelectedCrop] = useState<string>("all");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [enquiryProduct, setEnquiryProduct] = useState<string | null>(null);

  // Extract all unique formulations
  const formulations = useMemo(() => {
    const list = Array.from(
      new Set(
        PRODUCTS.map((p) => {
          const match = p.formulation.match(/^([A-Z]+)/);
          return match ? match[1] : p.formulation;
        })
      )
    ).sort();
    return list;
  }, []);

  // Extract all unique crops
  const targetCrops = useMemo(() => {
    const crops = new Set<string>();
    PRODUCTS.forEach((p) => {
      p.targetCrops.forEach((c) => crops.add(c));
    });
    return Array.from(crops).sort();
  }, []);

  // Filtered Products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category filter
      if (selectedCategory !== "all" && product.category !== selectedCategory) {
        return false;
      }

      // Formulation filter
      if (
        selectedFormulation !== "all" &&
        !product.formulation.toLowerCase().includes(selectedFormulation.toLowerCase())
      ) {
        return false;
      }

      // Crop filter
      if (
        selectedCrop !== "all" &&
        !product.targetCrops.some((c) =>
          c.toLowerCase().includes(selectedCrop.toLowerCase())
        )
      ) {
        return false;
      }

      // Text search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = product.name.toLowerCase().includes(q);
        const matchAI = product.activeIngredient.toLowerCase().includes(q);
        const matchCategory = product.categoryName.toLowerCase().includes(q);
        const matchCrop = product.targetCrops.some((c) =>
          c.toLowerCase().includes(q)
        );
        const matchFormulation = product.formulation.toLowerCase().includes(q);
        const matchPests = product.targetPests?.some((pest) =>
          pest.toLowerCase().includes(q)
        );

        if (
          !matchName &&
          !matchAI &&
          !matchCategory &&
          !matchCrop &&
          !matchFormulation &&
          !matchPests
        ) {
          return false;
        }
      }

      return true;
    });
  }, [selectedCategory, selectedFormulation, selectedCrop, searchQuery]);

  const resetFilters = () => {
    setSelectedCategory("all");
    setSearchQuery("");
    setSelectedFormulation("all");
    setSelectedCrop("all");
  };

  const hasActiveFilters =
    selectedCategory !== "all" ||
    selectedFormulation !== "all" ||
    selectedCrop !== "all" ||
    searchQuery.trim() !== "";

  return (
    <div className="space-y-8">
      {/* Category Navigation Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-4">
        <button
          onClick={() => setSelectedCategory("all")}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            selectedCategory === "all"
              ? "bg-slate-900 text-white shadow"
              : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
          }`}
        >
          All Products ({PRODUCTS.length})
        </button>

        {PRODUCT_CATEGORIES.map((cat) => {
          const count = PRODUCTS.filter((p) => p.category === cat.id).length;
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                isSelected
                  ? "bg-emerald-900 text-white shadow"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {cat.name} ({count})
            </button>
          );
        })}
      </div>

      {/* Discovery & Filter Bar */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {/* Live Search Input */}
          <div className="relative lg:col-span-2">
            <Search className="w-4 h-4 text-emerald-800 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search product name, active ingredient (e.g. Fipronil), or pest..."
              className="w-full pl-10 pr-9 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-emerald-700 focus:bg-white transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Formulation Filter */}
          <div>
            <select
              value={selectedFormulation}
              onChange={(e) => setSelectedFormulation(e.target.value)}
              className="w-full py-2.5 px-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-emerald-700 focus:bg-white"
            >
              <option value="all">All Formulations</option>
              {formulations.map((f) => (
                <option key={f} value={f}>
                  {f} Formulations
                </option>
              ))}
            </select>
          </div>

          {/* Target Crop Filter */}
          <div>
            <select
              value={selectedCrop}
              onChange={(e) => setSelectedCrop(e.target.value)}
              className="w-full py-2.5 px-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-emerald-700 focus:bg-white"
            >
              <option value="all">All Target Crops</option>
              {targetCrops.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Filter Badges & Count Row */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-100 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-700">
              Showing {filteredProducts.length} of {PRODUCTS.length} Shimanzu Formulations
            </span>
          </div>

          {hasActiveFilters && (
            <div className="flex items-center gap-2">
              {selectedCategory !== "all" && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-900 font-semibold text-[11px] border border-emerald-200">
                  Category: {selectedCategory}
                  <button onClick={() => setSelectedCategory("all")}>
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {selectedFormulation !== "all" && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 font-semibold text-[11px]">
                  Formulation: {selectedFormulation}
                  <button onClick={() => setSelectedFormulation("all")}>
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {selectedCrop !== "all" && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 font-semibold text-[11px]">
                  Crop: {selectedCrop}
                  <button onClick={() => setSelectedCrop("all")}>
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              <button
                onClick={resetFilters}
                className="inline-flex items-center gap-1 text-xs font-bold text-shimanzu-red hover:underline ml-2"
              >
                <RotateCcw className="w-3 h-3" />
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Product Grid */}
      {filteredProducts.length === 0 ? (
        <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 max-w-lg mx-auto space-y-4">
          <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 mx-auto flex items-center justify-center">
            <Search className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">No matching products found</h3>
          <p className="text-xs sm:text-sm text-slate-500">
            Try adjusting your search keywords, active ingredient terms, or resetting active filters.
          </p>
          <button
            onClick={resetFilters}
            className="px-5 py-2 rounded-xl bg-emerald-900 text-white text-xs font-bold hover:bg-emerald-800 transition-colors"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onEnquire={(name) => setEnquiryProduct(name)}
            />
          ))}
        </div>
      )}

      {/* Enquiry Modal */}
      {enquiryProduct && (
        <EnquiryModal
          isOpen={!!enquiryProduct}
          onClose={() => setEnquiryProduct(null)}
          initialProduct={enquiryProduct}
        />
      )}
    </div>
  );
};
