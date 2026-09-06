"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Sprout, ShieldCheck, Sparkles, Send } from "lucide-react";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  onEnquire?: (productName: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onEnquire }) => {
  const [imgSrc, setImgSrc] = useState<string>(
    product.image || `/images/products/${product.slug}.png`
  );

  const getCategoryBadgeClass = (category: string) => {
    switch (category) {
      case "insecticides":
        return "bg-emerald-50 text-emerald-900 border-emerald-200";
      case "fungicides":
        return "bg-cyan-50 text-cyan-900 border-cyan-200";
      case "herbicides":
        return "bg-amber-50 text-amber-900 border-amber-200";
      case "pgr-fertilizers":
        return "bg-stone-100 text-stone-900 border-stone-300";
      default:
        return "bg-slate-50 text-slate-800 border-slate-200";
    }
  };

  return (
    <div className="group bg-white rounded-2xl border border-slate-200/90 hover:border-emerald-700/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden relative">
      {/* Top Banner Accent */}
      <div className="h-1.5 w-full bg-gradient-to-r from-emerald-800 via-emerald-600 to-shimanzu-red opacity-90 group-hover:opacity-100 transition-opacity"></div>

      {/* Product Image Canvas */}
      <Link
        href={`/products/${product.slug}`}
        className="relative block bg-gradient-to-b from-slate-50/80 via-slate-50/50 to-white pt-6 pb-4 px-4 overflow-hidden border-b border-slate-100"
      >
        {/* Subtle Watermark & Background Grid */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#064e3b_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
        <div className="absolute top-3 right-3 text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full bg-white/90 shadow-sm border border-slate-200 text-slate-600 z-10">
          {product.formulation.split(" ")[0]}
        </div>

        {/* Japanese Authenticity Mini Seal */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 z-10">
          <span className="w-1.5 h-1.5 rounded-full bg-shimanzu-red"></span>
          <span className="text-[10px] font-bold tracking-widest text-slate-500 uppercase">
            SHIMANZU JAPAN
          </span>
        </div>

        {/* Center Bottle Graphic */}
        <div className="h-56 sm:h-60 w-full flex items-center justify-center relative py-2">
          <img
            src={imgSrc}
            alt={`${product.name} - ${product.activeIngredient} - Shimanzu Crop Protection`}
            loading="lazy"
            onError={() => {
              // Fallback to ridona bottle if specific image fails
              setImgSrc("/images/products/ridona.png");
            }}
            className="h-full max-h-52 w-auto object-contain drop-shadow-md group-hover:scale-105 group-hover:-translate-y-1 transition-all duration-300 pointer-events-none"
          />
        </div>
      </Link>

      {/* Card Content Section */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Header Row: Category Badge */}
          <div className="flex items-center justify-between gap-2 mb-2.5">
            <span
              className={`text-[11px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full border ${getCategoryBadgeClass(
                product.category
              )}`}
            >
              {product.categoryName}
            </span>
            <span className="text-[11px] font-semibold text-slate-500">
              {product.packaging && product.packaging[0] ? `From ${product.packaging[0]}` : "Official Pack"}
            </span>
          </div>

          {/* Product Brand Name */}
          <Link
            href={`/products/${product.slug}`}
            className="block group-hover:text-emerald-900 transition-colors"
          >
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
              {product.name}
            </h3>
          </Link>

          {/* Active Ingredient / Chemical Formulation */}
          <div className="mt-2 p-2 rounded-xl bg-slate-50 border border-slate-200/80 text-[12px] font-mono text-emerald-950 font-semibold leading-snug">
            {product.activeIngredient}
          </div>

          {/* Short Real Description */}
          <p className="mt-3 text-xs text-slate-600 line-clamp-2 leading-relaxed font-normal">
            {product.shortDescription || product.description}
          </p>

          {/* Target Crops */}
          {product.targetCrops && product.targetCrops.length > 0 && (
            <div className="mt-3.5 pt-3 border-t border-slate-100">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                <Sprout className="w-3 h-3 text-emerald-800" />
                Target Crops
              </div>
              <div className="flex flex-wrap gap-1">
                {product.targetCrops.slice(0, 3).map((crop) => (
                  <span
                    key={crop}
                    className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 hover:bg-emerald-50 hover:text-emerald-900 transition-colors"
                  >
                    {crop}
                  </span>
                ))}
                {product.targetCrops.length > 3 && (
                  <span className="text-[11px] font-medium px-1.5 py-0.5 rounded text-slate-400">
                    +{product.targetCrops.length - 3} more
                  </span>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Action Bottom Bar */}
        <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between gap-2">
          <Link
            href={`/products/${product.slug}`}
            className="inline-flex items-center text-xs font-bold text-emerald-900 hover:text-emerald-700 transition-colors group/link"
          >
            <span>View Product</span>
            <ChevronRight className="w-4 h-4 ml-0.5 transition-transform group-hover/link:translate-x-1" />
          </Link>

          {onEnquire ? (
            <button
              onClick={() => onEnquire(product.name)}
              className="px-3 py-1.5 text-xs font-bold rounded-lg bg-emerald-50 text-emerald-900 hover:bg-emerald-900 hover:text-white transition-all shadow-sm flex items-center gap-1"
            >
              <span>Enquire</span>
            </button>
          ) : (
            <Link
              href={`/products/${product.slug}`}
              className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
            >
              Specs
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
