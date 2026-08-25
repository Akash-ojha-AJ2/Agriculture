import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const getCategoryBadgeClass = (category: string) => {
    switch (category) {
      case "Insecticides":
        return "bg-emerald-50 text-emerald-800 border-emerald-300";
      case "Fungicides":
        return "bg-sky-50 text-sky-800 border-sky-300";
      case "Herbicides":
        return "bg-amber-50 text-amber-800 border-amber-300";
      case "Plant Nutrition":
        return "bg-green-50 text-green-800 border-green-300";
      default:
        return "bg-gray-50 text-gray-800 border-gray-300";
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:border-brand-500 hover:shadow-md transition-all flex flex-col group">
      {/* Product Image Container */}
      <div className="relative w-full h-52 sm:h-56 bg-agri-surface p-4 flex items-center justify-center border-b border-gray-100">
        <div className="relative w-full h-full">
          <Image
            src={product.image}
            alt={`${product.name} - ${product.composition}`}
            fill
            className="object-contain transition-transform duration-200 group-hover:scale-105"
          />
        </div>
        {/* Category Pill on top right */}
        <div className="absolute top-3 right-3">
          <span
            className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded border ${getCategoryBadgeClass(
              product.category
            )}`}
          >
            {product.category}
          </span>
        </div>
      </div>

      {/* Product Information Body */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
        <div>
          {/* Product Name */}
          <Link href={`/products/${product.slug}`} className="block group-hover:text-brand-700 transition-colors">
            <h3 className="text-lg font-black text-agri-dark tracking-tight">
              {product.name}
            </h3>
          </Link>

          {/* Composition */}
          <p className="text-xs font-semibold text-agri-forest mt-0.5">
            {product.composition}
          </p>

          {/* Formulation & Type */}
          <p className="text-[11px] text-gray-500 mt-0.5">
            {product.formulation} &bull; {product.productType}
          </p>

          {/* Short Description */}
          <p className="text-xs text-gray-600 mt-2.5 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>

        {/* Crops / Target Badges */}
        <div className="pt-2 border-t border-gray-100 space-y-2">
          <div className="text-[11px] text-gray-600 truncate">
            <span className="font-semibold text-gray-700">Key Crops:</span>{" "}
            {product.recommendedCrops.slice(0, 3).join(", ")}
            {product.recommendedCrops.length > 3 ? "..." : ""}
          </div>

          {/* Pack sizes pill */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-[10px] font-semibold text-gray-500 uppercase">Packs:</span>
            {product.packSizes.slice(0, 3).map((pack, idx) => (
              <span
                key={idx}
                className="text-[10px] px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded text-gray-700 font-medium"
              >
                {pack}
              </span>
            ))}
            {product.packSizes.length > 3 && (
              <span className="text-[10px] text-gray-400 font-medium">+more</span>
            )}
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-2">
          <Link
            href={`/products/${product.slug}`}
            className="w-full py-2 px-3 text-xs font-bold text-agri-deep bg-brand-50 hover:bg-agri-deep hover:text-white border border-brand-200 rounded transition-colors flex items-center justify-center gap-1.5"
          >
            <span>View Technical Details</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
