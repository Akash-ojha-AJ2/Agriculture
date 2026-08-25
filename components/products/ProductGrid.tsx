import React from "react";
import { AlertCircle, RotateCcw } from "lucide-react";
import { Product } from "@/data/products";
import { ProductCard } from "@/components/products/ProductCard";

interface ProductGridProps {
  products: Product[];
  onResetFilters?: () => void;
}

export function ProductGrid({ products, onResetFilters }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-12 text-center space-y-4">
        <AlertCircle className="w-12 h-12 text-gray-400 mx-auto" />
        <h3 className="text-lg font-bold text-agri-dark">
          No Products Matching Your Criteria
        </h3>
        <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto">
          We could not find any products matching your specific combination of filters. Try broadening your search or resetting filters.
        </p>
        {onResetFilters && (
          <button
            onClick={onResetFilters}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-agri-deep hover:bg-agri-forest rounded-md shadow-xs transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset All Filters</span>
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
