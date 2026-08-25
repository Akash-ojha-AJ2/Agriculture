"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Filter, ArrowRight, RotateCcw, AlertCircle, CheckCircle2 } from "lucide-react";
import { CROPS } from "@/data/crops";
import { CATEGORIES } from "@/data/categories";
import { PRODUCTS, Product } from "@/data/products";

export function SolutionFinder() {
  const [selectedCropSlug, setSelectedCropSlug] = useState<string>("cotton");
  const [selectedChallengeName, setSelectedChallengeName] = useState<string>("all");
  const [selectedCategorySlug, setSelectedCategorySlug] = useState<string>("all");

  const selectedCrop = CROPS.find((c) => c.slug === selectedCropSlug);

  // Available challenges for current crop
  const challenges = selectedCrop ? selectedCrop.majorChallenges : [];

  // Filter matching products based on selection
  let matchingProducts: Product[] = [];

  if (selectedCrop) {
    if (selectedChallengeName !== "all") {
      const challenge = challenges.find((ch) => ch.name === selectedChallengeName);
      if (challenge) {
        matchingProducts = PRODUCTS.filter((p) =>
          challenge.recommendedProductSlugs.includes(p.slug)
        );
      }
    } else {
      // All products recommended for this crop
      matchingProducts = PRODUCTS.filter((p) =>
        p.cropSlugs.includes(selectedCropSlug)
      );
    }

    // Filter further by category if selected
    if (selectedCategorySlug !== "all") {
      matchingProducts = matchingProducts.filter(
        (p) => p.categorySlug === selectedCategorySlug
      );
    }
  }

  const handleReset = () => {
    setSelectedCropSlug("cotton");
    setSelectedChallengeName("all");
    setSelectedCategorySlug("all");
  };

  return (
    <section className="py-14 lg:py-20 bg-agri-surface border-b border-gray-200" id="solution-finder">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-100/70 px-3 py-1 rounded border border-brand-200 inline-block">
            Interactive Diagnostic Tool
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-agri-dark tracking-tight">
            Find the Right Solution for Your Crop
          </h2>
          <p className="text-sm text-gray-600">
            Select your crop and the specific pest, disease, or weed challenge to discover verified agricultural solutions.
          </p>
        </div>

        {/* Diagnostic Selector Panel */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 lg:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Step 1: Select Crop */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-agri-forest mb-2">
                1. Select Target Crop
              </label>
              <select
                value={selectedCropSlug}
                onChange={(e) => {
                  setSelectedCropSlug(e.target.value);
                  setSelectedChallengeName("all"); // reset challenge on crop change
                }}
                className="w-full bg-agri-surface border border-gray-300 rounded-lg p-3 text-sm font-semibold text-agri-dark focus:ring-2 focus:ring-brand-500 focus:border-brand-500 focus:outline-none"
              >
                {CROPS.map((crop) => (
                  <option key={crop.id} value={crop.slug}>
                    {crop.name} - {crop.hindiName}
                  </option>
                ))}
              </select>
            </div>

            {/* Step 2: Select Challenge */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-agri-forest mb-2">
                2. Target Pest / Weed / Disease
              </label>
              <select
                value={selectedChallengeName}
                onChange={(e) => setSelectedChallengeName(e.target.value)}
                className="w-full bg-agri-surface border border-gray-300 rounded-lg p-3 text-sm font-semibold text-agri-dark focus:ring-2 focus:ring-brand-500 focus:border-brand-500 focus:outline-none"
              >
                <option value="all">All Challenges for this Crop</option>
                {challenges.map((ch, idx) => (
                  <option key={idx} value={ch.name}>
                    [{ch.type}] {ch.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Step 3: Product Category Filter */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-agri-forest mb-2">
                3. Product Category
              </label>
              <select
                value={selectedCategorySlug}
                onChange={(e) => setSelectedCategorySlug(e.target.value)}
                className="w-full bg-agri-surface border border-gray-300 rounded-lg p-3 text-sm font-semibold text-agri-dark focus:ring-2 focus:ring-brand-500 focus:border-brand-500 focus:outline-none"
              >
                <option value="all">All Product Categories</option>
                {CATEGORIES.map((cat) => (
                  <option key={cat.id} value={cat.slug}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Reset Filters Option */}
          <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
            <div className="text-xs text-gray-500">
              Showing recommendations for <span className="font-bold text-agri-dark">{selectedCrop?.name}</span>
              {selectedChallengeName !== "all" && (
                <> &bull; <span className="text-brand-700 font-semibold">{selectedChallengeName}</span></>
              )}
            </div>
            <button
              onClick={handleReset}
              className="text-xs font-bold text-agri-forest hover:text-agri-deep flex items-center gap-1"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset Filters
            </button>
          </div>
        </div>

        {/* Results Area */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-agri-muted">
              Verified Recommendations ({matchingProducts.length})
            </h3>
            {selectedCrop && (
              <Link
                href={`/crops/${selectedCrop.slug}`}
                className="text-xs font-bold text-agri-deep hover:underline flex items-center gap-1"
              >
                <span>View Complete {selectedCrop.name} Guide</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            )}
          </div>

          {matchingProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {matchingProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg border border-gray-200 p-4 flex gap-4 items-center hover:border-brand-500 hover:shadow-sm transition-all"
                >
                  <div className="relative w-16 h-20 bg-agri-surface rounded border border-gray-200 p-1 flex-shrink-0">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold text-agri-dark text-base">
                        {product.name}
                      </span>
                      <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-gray-100 text-gray-700">
                        {product.category}
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-agri-forest truncate mt-0.5">
                      {product.composition}
                    </p>
                    <p className="text-[11px] text-gray-500 truncate mt-0.5">
                      {product.productType}
                    </p>
                    <Link
                      href={`/products/${product.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-agri-deep hover:underline mt-2"
                    >
                      <span>Technical Specs</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-lg border border-gray-200 p-8 text-center space-y-3">
              <AlertCircle className="w-8 h-8 text-amber-600 mx-auto" />
              <p className="text-sm font-bold text-agri-dark">
                No verified products matching this exact combination.
              </p>
              <p className="text-xs text-gray-500 max-w-md mx-auto">
                Product recommendations will be available once specific trial data is updated. Try selecting &quot;All Challenges&quot; or resetting the category filter.
              </p>
              <button
                onClick={handleReset}
                className="px-4 py-2 text-xs font-bold text-white bg-agri-deep rounded hover:bg-agri-forest"
              >
                Reset Diagnostic Selector
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
