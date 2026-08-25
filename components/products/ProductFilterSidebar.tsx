"use client";

import React from "react";
import { Filter, X, RotateCcw, Search } from "lucide-react";
import { CATEGORIES } from "@/data/categories";
import { CROPS } from "@/data/crops";

interface ProductFilterSidebarProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  selectedCrop: string;
  onSelectCrop: (crop: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onReset: () => void;
  totalFiltered: number;
}

export function ProductFilterSidebar({
  selectedCategory,
  onSelectCategory,
  selectedCrop,
  onSelectCrop,
  searchQuery,
  onSearchChange,
  onReset,
  totalFiltered,
}: ProductFilterSidebarProps) {
  const isFiltered =
    selectedCategory !== "all" || selectedCrop !== "all" || searchQuery.trim() !== "";

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-5 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-agri-deep" />
          <h3 className="text-sm font-bold uppercase tracking-wider text-agri-dark">
            Filters
          </h3>
        </div>
        {isFiltered && (
          <button
            onClick={onReset}
            className="text-xs font-bold text-brand-700 hover:text-brand-800 flex items-center gap-1"
          >
            <RotateCcw className="w-3 h-3" />
            Reset All
          </button>
        )}
      </div>

      {/* Search Input Filter */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
          Search Product
        </label>
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search by name or chemical..."
            className="w-full pl-8 pr-7 py-2 text-xs bg-agri-surface border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-brand-500"
          />
          <Search className="w-3.5 h-3.5 text-gray-400 absolute left-2.5 top-2.5" />
          {searchQuery && (
            <button
              onClick={() => onSearchChange("")}
              className="absolute right-2 top-2 text-gray-400 hover:text-gray-600"
              aria-label="Clear query"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Category Radio / Pills */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2.5">
          Product Category
        </label>
        <div className="space-y-1.5">
          <button
            onClick={() => onSelectCategory("all")}
            className={`w-full text-left px-2.5 py-1.5 rounded text-xs font-medium transition-colors flex items-center justify-between ${
              selectedCategory === "all"
                ? "bg-agri-deep text-white font-bold"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <span>All Categories</span>
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.slug)}
              className={`w-full text-left px-2.5 py-1.5 rounded text-xs font-medium transition-colors flex items-center justify-between ${
                selectedCategory === cat.slug
                  ? "bg-agri-deep text-white font-bold"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <span>{cat.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Target Crop Filter */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2.5">
          Target Crop
        </label>
        <div className="space-y-1.5 max-h-56 overflow-y-auto pr-1">
          <button
            onClick={() => onSelectCrop("all")}
            className={`w-full text-left px-2.5 py-1.5 rounded text-xs font-medium transition-colors flex items-center justify-between ${
              selectedCrop === "all"
                ? "bg-agri-deep text-white font-bold"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <span>All Crops</span>
          </button>
          {CROPS.map((crop) => (
            <button
              key={crop.id}
              onClick={() => onSelectCrop(crop.slug)}
              className={`w-full text-left px-2.5 py-1.5 rounded text-xs font-medium transition-colors flex items-center justify-between ${
                selectedCrop === crop.slug
                  ? "bg-agri-deep text-white font-bold"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <span className="truncate">{crop.name}</span>
              <span className="text-[10px] text-gray-400 font-normal">
                {crop.hindiName.split(" ")[0]}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Filter status summary */}
      <div className="pt-4 border-t border-gray-100 text-[11px] text-gray-500 flex items-center justify-between">
        <span>Active Matches:</span>
        <span className="font-bold text-agri-dark">{totalFiltered} Products</span>
      </div>
    </div>
  );
}
