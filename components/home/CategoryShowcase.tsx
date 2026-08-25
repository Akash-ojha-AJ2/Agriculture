import React from "react";
import Link from "next/link";
import { ShieldAlert, Sparkles, Trees, Leaf, Sprout, Flower2, ArrowRight } from "lucide-react";
import { CATEGORIES } from "@/data/categories";
import { PRODUCTS } from "@/data/products";

export function CategoryShowcase() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "ShieldAlert":
        return <ShieldAlert className="w-6 h-6 text-emerald-800" />;
      case "Sparkles":
        return <Sparkles className="w-6 h-6 text-sky-800" />;
      case "Trees":
        return <Trees className="w-6 h-6 text-amber-800" />;
      case "Leaf":
        return <Leaf className="w-6 h-6 text-green-800" />;
      case "Sprout":
        return <Sprout className="w-6 h-6 text-emerald-800" />;
      case "Flower2":
        return <Flower2 className="w-6 h-6 text-brand-800" />;
      default:
        return <Leaf className="w-6 h-6 text-agri-deep" />;
    }
  };

  const getCategoryCount = (slug: string) => {
    return PRODUCTS.filter((p) => p.categorySlug === slug).length;
  };

  return (
    <section className="py-14 lg:py-18 bg-agri-panel border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-100/70 px-3 py-1 rounded border border-brand-200 inline-block">
              Product Portfolio
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-agri-dark tracking-tight">
              Crop Protection &amp; Nutrition Categories
            </h2>
            <p className="text-sm text-gray-600 max-w-2xl">
              Targeted agrochemical and physiological solutions formulated to protect yield potential across major agricultural crops.
            </p>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-agri-deep hover:text-brand-600 transition-colors"
          >
            <span>View Complete Catalogue</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((category) => {
            const count = getCategoryCount(category.slug);
            return (
              <div
                key={category.id}
                className="bg-white rounded-lg border border-gray-200 p-6 flex flex-col justify-between hover:border-brand-500 hover:shadow-md transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-agri-surface border border-gray-200 flex items-center justify-center group-hover:border-brand-300 transition-colors">
                      {getIcon(category.iconName)}
                    </div>
                    {count > 0 ? (
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-brand-50 text-agri-deep border border-brand-200">
                        {count} {count === 1 ? "Product" : "Products"}
                      </span>
                    ) : (
                      <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-gray-100 text-gray-500">
                        Upcoming range
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-agri-dark group-hover:text-brand-700 transition-colors">
                    {category.name}
                  </h3>
                  <div className="text-[11px] font-semibold text-brand-600 mb-2">
                    {category.tagline}
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {category.shortDescription}
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-gray-100">
                  <Link
                    href={`/products?category=${category.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-agri-deep group-hover:text-brand-600 transition-colors"
                  >
                    <span>Explore {category.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
