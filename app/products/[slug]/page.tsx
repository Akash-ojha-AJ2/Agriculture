import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { TechnicalDataSheet } from "@/components/products/TechnicalDataSheet";
import { ProductCard } from "@/components/products/ProductCard";
import { PRODUCTS, getProductBySlug } from "@/data/products";
import { ArrowLeft, ShieldCheck, Check, Sprout, Target } from "lucide-react";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const product = getProductBySlug(params.slug);
  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.name} (${product.composition}) | ${product.category}`,
    description: `${product.name} - ${product.composition}. ${product.shortDescription} Manufactured by Hyderabad Crop Science Pvt. Ltd.`,
    openGraph: {
      title: `${product.name} - ${product.composition}`,
      description: product.shortDescription,
      images: [product.image],
    },
  };
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  const breadcrumbs = [
    { label: "Products", href: "/products" },
    { label: product.category, href: `/products?category=${product.categorySlug}` },
    { label: product.name },
  ];

  // Related products from same category or complementary
  const relatedProducts = PRODUCTS.filter(
    (p) => p.id !== product.id && (p.categorySlug === product.categorySlug || p.isFeatured)
  ).slice(0, 3);

  const getCategoryBadgeClass = (category: string) => {
    switch (category) {
      case "Insecticides":
        return "bg-emerald-50 text-emerald-800 border-emerald-300";
      case "Fungicides":
        return "bg-sky-50 text-sky-800 border-sky-300";
      case "Herbicides":
        return "bg-amber-50 text-amber-800 border-amber-300";
      default:
        return "bg-green-50 text-green-800 border-green-300";
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumbs */}
      <div className="bg-agri-surface border-b border-gray-200">
        <Breadcrumbs items={breadcrumbs} />
      </div>

      {/* Main Product Hero / Overview Section */}
      <section className="py-8 lg:py-12 bg-agri-surface border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Product Image Column */}
            <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-xl border border-gray-200 shadow-sm flex items-center justify-center">
              <div className="relative w-full h-72 sm:h-96">
                <Image
                  src={product.image}
                  alt={`${product.name} - ${product.composition}`}
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </div>

            {/* Product Summary Column */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3 flex-wrap">
                <span
                  className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded border ${getCategoryBadgeClass(
                    product.category
                  )}`}
                >
                  {product.category}
                </span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-white text-gray-700 border border-gray-200">
                  {product.formulation}
                </span>
              </div>

              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-agri-dark tracking-tight">
                  {product.name}
                </h1>
                <p className="text-base sm:text-lg font-bold text-agri-forest mt-1">
                  {product.composition}
                </p>
                {product.brandTagline && (
                  <p className="text-xs sm:text-sm font-semibold text-brand-600 mt-1 italic">
                    &quot;{product.brandTagline}&quot;
                  </p>
                )}
              </div>

              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed pt-1">
                {product.fullOverview}
              </p>

              {/* Quick Spec Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3 bg-white rounded border border-gray-200">
                  <span className="text-[11px] font-bold uppercase text-gray-500 block">Product Type:</span>
                  <span className="text-xs font-semibold text-agri-dark mt-0.5 block">{product.productType}</span>
                </div>
                <div className="p-3 bg-white rounded border border-gray-200">
                  <span className="text-[11px] font-bold uppercase text-gray-500 block">Available Packaging:</span>
                  <span className="text-xs font-semibold text-agri-dark mt-0.5 block">{product.packSizes.join(", ")}</span>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-wrap items-center gap-3 pt-3">
                <Link
                  href="/contact"
                  className="px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-agri-deep hover:bg-agri-forest rounded-md shadow-xs transition-colors"
                >
                  Inquire for Commercial Supply
                </Link>
                <Link
                  href="/distributors"
                  className="px-4 py-2.5 text-xs sm:text-sm font-bold text-agri-deep bg-white hover:bg-brand-50 border border-agri-deep rounded-md transition-colors"
                >
                  Become a Dealer
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Data & Agronomic Guidelines */}
      <section className="py-12 lg:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TechnicalDataSheet product={product} />
      </section>

      {/* Related Products Carousel / Grid */}
      {relatedProducts.length > 0 && (
        <section className="py-12 bg-agri-panel border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl sm:text-2xl font-black text-agri-dark">
                Complementary &amp; Related Formulations
              </h2>
              <Link
                href="/products"
                className="text-xs font-bold text-agri-deep hover:underline"
              >
                View Full Catalogue &rarr;
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((rel) => (
                <ProductCard key={rel.id} product={rel} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
