import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ShieldCheck,
  Sprout,
  Package,
  FlaskConical,
  ChevronRight,
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  Send,
  Phone,
} from "lucide-react";
import { PRODUCTS, getProductBySlug, Product } from "@/data/products";
import { COMPANY_DATA } from "@/data/company";
import { ProductCard } from "@/components/ProductCard";
import { ProductDetailActions } from "../[category]/[slug]/ProductDetailActions";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({
    slug: p.slug,
  }));
}

export function generateMetadata({ params }: ProductPageProps): Metadata {
  const product = getProductBySlug(params.slug);
  if (!product) {
    return {
      title: "Product Catalogue | Shimanzu Chemicals",
      description: "Official crop protection formulation by Shimanzu Chemicals Private Limited.",
    };
  }

  return {
    title: `${product.name} (${product.formulation}) | ${product.categoryName} | Shimanzu Chemicals`,
    description: `${product.name}: ${product.activeIngredient}. ${product.shortDescription || product.description}`,
    keywords: [
      product.name,
      product.activeIngredient,
      product.categoryName,
      "Shimanzu",
      "Shimanzu Chemicals",
      "Crop Protection",
      ...(product.targetCrops || []),
    ],
  };
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  // Related products from the same category
  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 3);

  const bottleImage = product.image || `/images/products/${product.slug}.png`;

  return (
    <div className="space-y-12 sm:space-y-16 pb-20">
      {/* Breadcrumb Navigation Bar */}
      <div className="bg-white border-b border-slate-200 py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs text-slate-500 overflow-x-auto">
          <Link href="/" className="hover:text-emerald-900 transition-colors shrink-0">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <Link href="/products" className="hover:text-emerald-900 transition-colors shrink-0">
            Products
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <Link
            href={`/products/${product.category}`}
            className="hover:text-emerald-900 transition-colors capitalize shrink-0"
          >
            {product.categoryName}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="font-bold text-slate-900 truncate">{product.name}</span>
        </div>
      </div>

      {/* Main Spec Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Authentic Product Bottle Showcase */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="japanese-hanko text-shimanzu-red border-shimanzu-red">
                  SHIMANZU JAPAN
                </span>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-900 border border-emerald-200 uppercase tracking-wide">
                  {product.categoryName}
                </span>
              </div>

              {/* High-Impact Packshot Visual Canvas */}
              <div className="relative rounded-2xl bg-gradient-to-b from-slate-50 via-slate-100/70 to-emerald-50/30 p-8 flex flex-col items-center justify-center border border-slate-200/80 shadow-inner overflow-hidden min-h-[360px] sm:min-h-[420px]">
                {/* Watermark Pattern */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#064e3b_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>

                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

                {/* Actual Bottle Image */}
                <div className="relative z-10 w-full flex items-center justify-center py-4">
                  <img
                    src={bottleImage}
                    alt={`${product.name} - ${product.activeIngredient} - Official Shimanzu Packaging`}
                    className="max-h-72 sm:max-h-80 w-auto object-contain drop-shadow-xl hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Bottom Authenticity Strip */}
                <div className="w-full text-[11px] text-slate-500 font-mono border-t border-slate-200/80 pt-3 z-10 flex items-center justify-between">
                  <span className="flex items-center gap-1 font-semibold text-slate-700">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                    ISO 9001:2015 CERTIFIED
                  </span>
                  <span className="font-bold text-emerald-900">{product.formulation}</span>
                </div>
              </div>
            </div>

            {/* Packaging Sizes Tag Matrix */}
            {product.packaging && product.packaging.length > 0 && (
              <div className="space-y-2.5 border-t border-slate-100 pt-5">
                <div className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                  <Package className="w-4 h-4 text-emerald-800" />
                  Available Commercial Packaging
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.packaging.map((pkg) => (
                    <span
                      key={pkg}
                      className="text-xs font-bold px-3.5 py-1.5 rounded-xl bg-slate-100 text-slate-800 border border-slate-200/90 shadow-sm"
                    >
                      {pkg}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Key Technical Information & Quick Enquire */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-900 mb-2">
                <span className="w-2 h-2 rounded-full bg-shimanzu-red"></span>
                <span>{product.categoryName}</span>
                <span className="text-slate-300">•</span>
                <span>{product.formulation}</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900">
                {product.name}
              </h1>
            </div>

            {/* Active Ingredient Callout Box */}
            <div className="p-5 rounded-2xl bg-emerald-50/90 border border-emerald-200/80 shadow-sm">
              <div className="text-xs font-bold text-emerald-950 uppercase tracking-wider mb-1">
                Active Ingredient / Formulation Standard
              </div>
              <div className="text-base sm:text-xl font-mono font-bold text-emerald-900">
                {product.activeIngredient}
              </div>
              {product.chemicalGroup && (
                <div className="text-xs font-semibold text-emerald-800 mt-1.5 pt-1.5 border-t border-emerald-200/60">
                  Chemical Group: <span className="font-bold">{product.chemicalGroup}</span>
                </div>
              )}
            </div>

            {/* Real Product Narrative & Overview */}
            <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p>{product.description || product.shortDescription}</p>
            </div>

            {/* Key Salient Features List */}
            {product.features && product.features.length > 0 && (
              <div className="space-y-2.5 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  Salient Technical Advantages
                </div>
                <ul className="space-y-2">
                  {product.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Target Crops & Pests Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-200">
              {product.targetCrops && product.targetCrops.length > 0 && (
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 flex items-center gap-1.5">
                    <Sprout className="w-4 h-4 text-emerald-800" />
                    Target Crops
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {product.targetCrops.map((c) => (
                      <span
                        key={c}
                        className="text-xs font-medium px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-800 shadow-sm"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {product.targetPests && product.targetPests.length > 0 && (
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 flex items-center gap-1.5">
                    <FlaskConical className="w-4 h-4 text-emerald-800" />
                    Target Spectrum
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {product.targetPests.map((p) => (
                      <span
                        key={p}
                        className="text-xs font-medium px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-800 shadow-sm"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Commercial Enquiries Actions */}
            <ProductDetailActions productName={product.name} />
          </div>
        </div>
      </section>

      {/* Detailed Technical Specifications Sheet */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-md space-y-8">
          <div className="border-b border-slate-100 pb-4">
            <h2 className="text-2xl font-bold text-slate-900">
              Technical Specification Sheet
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Verified formulation metrics based on official Shimanzu documentation and ISO quality protocols.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
            {/* Mode of Action */}
            {product.modeOfAction && (
              <div className="space-y-2">
                <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider text-emerald-900">
                  Mode of Action
                </h3>
                <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">
                  {product.modeOfAction}
                </p>
              </div>
            )}

            {/* Application Method */}
            {product.applicationMethod && (
              <div className="space-y-2">
                <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider text-emerald-900">
                  Recommended Application Method
                </h3>
                <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">
                  {product.applicationMethod}
                </p>
              </div>
            )}

            {/* Safety & Stewardship */}
            {product.safetyPrecautions && product.safetyPrecautions.length > 0 && (
              <div className="md:col-span-2 space-y-2 border-t border-slate-100 pt-6">
                <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider text-emerald-900 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  Safety Precautions & Stewardship
                </h3>
                <ul className="space-y-1.5">
                  {product.safetyPrecautions.map((safe, idx) => (
                    <li key={idx} className="text-xs text-slate-600 flex items-start gap-2">
                      <span className="text-emerald-700 font-bold">•</span>
                      <span>{safe}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Related {product.categoryName} Formulations
            </h3>
            <Link
              href={`/products/${product.category}`}
              className="text-xs font-bold text-emerald-900 hover:underline flex items-center gap-1"
            >
              <span>View All Category</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((rel) => (
              <ProductCard key={rel.id} product={rel} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
