"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, X, ChevronRight, ShieldAlert, Sparkles, Trees, Leaf, Sprout, Flower2 } from "lucide-react";
import { PRODUCTS, Product } from "@/data/products";

interface QuickSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function QuickSearchModal({ isOpen, onClose }: QuickSearchModalProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setQuery("");
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Keyboard shortcut ESC to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredProducts = query.trim() === ""
    ? PRODUCTS.slice(0, 4)
    : PRODUCTS.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.composition.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase()) ||
        p.targetPests.some((t) => t.toLowerCase().includes(query.toLowerCase())) ||
        p.recommendedCrops.some((c) => c.toLowerCase().includes(query.toLowerCase()))
      );

  const getCategoryBadgeClass = (category: string) => {
    switch (category) {
      case "Insecticides":
        return "bg-emerald-100 text-emerald-900 border-emerald-300";
      case "Fungicides":
        return "bg-sky-100 text-sky-900 border-sky-300";
      case "Herbicides":
        return "bg-amber-100 text-amber-900 border-amber-300";
      default:
        return "bg-green-100 text-green-900 border-green-300";
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div
        className="w-full max-w-2xl bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header */}
        <div className="p-4 border-b border-gray-200 flex items-center gap-3 bg-agri-surface">
          <Search className="w-5 h-5 text-agri-muted flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products, chemical compositions, pests, or crops..."
            className="w-full bg-transparent border-0 text-base text-agri-dark focus:outline-none focus:ring-0 placeholder:text-gray-400"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="p-1 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-200"
              aria-label="Clear search input"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2 py-1 text-xs font-semibold text-gray-500 bg-gray-100 border border-gray-300 rounded hover:bg-gray-200"
          >
            ESC
          </button>
        </div>

        {/* Search Results Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-agri-muted mb-2">
            {query.trim() === "" ? "Featured Products" : `Found ${filteredProducts.length} Results`}
          </div>

          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                onClick={onClose}
                className="flex items-center gap-4 p-3 rounded-lg border border-gray-100 hover:border-brand-500 hover:bg-brand-50/50 transition-colors group"
              >
                <div className="relative w-12 h-14 bg-gray-50 rounded border border-gray-200 p-1 flex-shrink-0">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-agri-deep group-hover:text-brand-700">
                      {product.name}
                    </span>
                    <span
                      className={`text-[10px] font-semibold px-2 py-0.5 rounded border ${getCategoryBadgeClass(
                        product.category
                      )}`}
                    >
                      {product.category}
                    </span>
                  </div>
                  <p className="text-xs font-medium text-gray-600 truncate mt-0.5">
                    {product.composition}
                  </p>
                  <div className="flex items-center gap-1 mt-1 text-[11px] text-gray-500 truncate">
                    <span className="font-medium text-gray-700">Crops:</span> {product.recommendedCrops.join(", ")}
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-brand-600 flex-shrink-0" />
              </Link>
            ))
          ) : (
            <div className="text-center py-10">
              <p className="text-sm font-semibold text-gray-700">No products matching &quot;{query}&quot;</p>
              <p className="text-xs text-gray-500 mt-1">Try searching by category, crop name, or active ingredient.</p>
              <Link
                href="/products"
                onClick={onClose}
                className="inline-block mt-3 px-4 py-2 text-xs font-semibold text-white bg-agri-deep rounded hover:bg-agri-forest"
              >
                Browse Full Catalog
              </Link>
            </div>
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="p-3 bg-gray-50 border-t border-gray-200 flex items-center justify-between text-xs text-gray-500">
          <span>Quick search: RIDONA, VOLVO, TUFAN, SHIMDOR, Cotton, Paddy</span>
          <Link
            href="/products"
            onClick={onClose}
            className="font-medium text-agri-deep hover:underline"
          >
            All Products &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
