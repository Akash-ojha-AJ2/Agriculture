import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { ProductCard } from "@/components/products/ProductCard";

export function FeaturedProducts() {
  const featured = PRODUCTS.filter((p) => p.isFeatured);

  return (
    <section className="py-14 lg:py-20 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-50 px-3 py-1 rounded border border-brand-200 inline-block">
              Proven Agrochemical Solutions
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-agri-dark tracking-tight">
              Featured Agricultural Products
            </h2>
            <p className="text-sm text-gray-600 max-w-2xl">
              High-purity formulation chemistries designed for rigorous field performance, broad crop safety, and targeted pest eradication.
            </p>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-bold text-white bg-agri-deep hover:bg-agri-forest rounded-lg shadow-sm transition-colors"
          >
            <span>View All Products ({PRODUCTS.length})</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 6 Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Informational banner */}
        <div className="mt-12 p-4 rounded-lg bg-agri-surface border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-brand-600 flex-shrink-0" />
            <p className="text-xs text-gray-700">
              <span className="font-bold text-agri-dark">Registered &amp; Certified Formulations:</span> All products are manufactured adhering to statutory quality parameters and rigorous batch testing.
            </p>
          </div>
          <Link
            href="/quality"
            className="text-xs font-bold text-agri-deep hover:underline whitespace-nowrap"
          >
            Explore Quality Controls &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
