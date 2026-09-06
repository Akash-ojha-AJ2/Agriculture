"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Search, X, ChevronRight, Sparkles, Tag, Shield } from "lucide-react";
import { PRODUCTS, Product } from "@/data/products";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) onClose();
        else setQuery("");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    const q = query.toLowerCase();
    const filtered = PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.activeIngredient.toLowerCase().includes(q) ||
        p.categoryName.toLowerCase().includes(q) ||
        p.formulation.toLowerCase().includes(q) ||
        p.targetCrops.some((c) => c.toLowerCase().includes(q))
    );
    setResults(filtered);
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-100 gap-3">
          <Search className="w-5 h-5 text-emerald-800 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products (e.g. Hitachu, Fipronil, Polher, Herbicide, Paddy)..."
            className="w-full text-base sm:text-lg text-slate-800 placeholder-slate-400 bg-transparent focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="p-1 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs font-semibold px-2 py-1 rounded bg-slate-100 text-slate-500 hover:bg-slate-200"
          >
            ESC
          </button>
        </div>

        {/* Quick Suggestion Pills */}
        {!query && (
          <div className="p-6">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
              Popular Searches
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                "FLUZA",
                "AROBIC",
                "REGAL",
                "AMRIT",
                "GLOSTER",
                "GLUFIRE",
                "Azoxystrobin",
                "Thifluzamide",
                "Fipronil",
                "Paddy Solutions",
              ].map((term) => (
                <button
                  key={term}
                  onClick={() => setQuery(term)}
                  className="px-3 py-1.5 text-xs font-medium rounded-full bg-emerald-50 text-emerald-900 hover:bg-emerald-100 transition-colors"
                >
                  {term}
                </button>
              ))}
            </div>

            <div className="mt-8 border-t border-slate-100 pt-6">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Browse Categories
              </div>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { name: "Insecticides", href: "/products/insecticides", count: "16+ Products" },
                  { name: "Fungicides", href: "/products/fungicides", count: "17+ Products" },
                  { name: "Herbicides", href: "/products/herbicides", count: "12+ Products" },
                  { name: "PGR & Fertilizers", href: "/products/pgr-fertilizers", count: "8+ Products" },
                ].map((cat) => (
                  <Link
                    key={cat.name}
                    href={cat.href}
                    onClick={onClose}
                    className="p-3 rounded-xl border border-slate-100 hover:border-emerald-700/30 hover:bg-emerald-50/40 transition-colors flex items-center justify-between group"
                  >
                    <div>
                      <div className="font-semibold text-sm text-slate-800 group-hover:text-emerald-900">
                        {cat.name}
                      </div>
                      <div className="text-xs text-slate-400">{cat.count}</div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-emerald-800 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Results List */}
        {query && (
          <div className="flex-1 overflow-y-auto p-4 space-y-2 divide-y divide-slate-50">
            {results.length === 0 ? (
              <div className="text-center py-12 text-slate-400">
                <p className="text-sm">No products found matching &ldquo;{query}&rdquo;</p>
                <p className="text-xs mt-1 text-slate-400">
                  Try searching by active ingredient (e.g. Azoxystrobin, Thifluzamide) or brand name.
                </p>
              </div>
            ) : (
              results.map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.slug}`}
                  onClick={onClose}
                  className="flex items-start justify-between p-3 rounded-xl hover:bg-emerald-50/50 transition-colors group pt-3"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-900 group-hover:text-emerald-900">
                        {product.name}
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 uppercase">
                        {product.categoryName}
                      </span>
                      <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                        {product.formulation}
                      </span>
                    </div>
                    <div className="text-xs font-mono text-emerald-800">
                      {product.activeIngredient}
                    </div>
                    <p className="text-xs text-slate-500 line-clamp-1">
                      {product.shortDescription}
                    </p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-emerald-800 shrink-0 mt-2 transition-transform group-hover:translate-x-0.5" />
                </Link>
              ))
            )}
          </div>
        )}

        {/* Footer */}
        <div className="bg-slate-50 px-4 py-2.5 border-t border-slate-100 text-[11px] text-slate-400 flex items-center justify-between">
          <span>Search authentic Shimanzu catalogue</span>
          <span>Press ESC to close</span>
        </div>
      </div>
    </div>
  );
};
