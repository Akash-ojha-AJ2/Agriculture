import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ProductCard } from "@/components/products/ProductCard";
import { CROPS } from "@/data/crops";
import { PRODUCTS } from "@/data/products";
import {
  AlertTriangle,
  ShieldCheck,
  Sprout,
  CheckCircle2,
  ArrowRight,
  Target,
} from "lucide-react";

interface CropPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return CROPS.map((crop) => ({
    slug: crop.slug,
  }));
}

export async function generateMetadata({ params }: CropPageProps): Promise<Metadata> {
  const crop = CROPS.find((c) => c.slug === params.slug);
  if (!crop) return { title: "Crop Solution Not Found" };

  return {
    title: `${crop.name} (${crop.hindiName}) Crop Protection & Nutrition Solutions`,
    description: `${crop.name} crop protection guide. Solutions for ${crop.majorChallenges
      .map((c) => c.name)
      .join(", ")}. Formulated by Hyderabad Crop Science Pvt. Ltd.`,
  };
}

export default function CropDetailPage({ params }: CropPageProps) {
  const crop = CROPS.find((c) => c.slug === params.slug);

  if (!crop) {
    notFound();
  }

  const breadcrumbs = [
    { label: "Crop Solutions", href: "/crops" },
    { label: `${crop.name} (${crop.hindiName})` },
  ];

  // Recommended products for this crop
  const recommendedProducts = PRODUCTS.filter((p) =>
    p.cropSlugs.includes(crop.slug)
  );

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumbs */}
      <div className="bg-agri-surface border-b border-gray-200">
        <Breadcrumbs items={breadcrumbs} />
      </div>

      {/* Crop Hero Section */}
      <section className="py-10 lg:py-14 bg-agri-surface border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual */}
            <div className="lg:col-span-5 bg-agri-dark rounded-xl overflow-hidden shadow-sm h-64 sm:h-80 relative">
              <Image
                src={crop.image}
                alt={`${crop.name} - ${crop.hindiName}`}
                fill
                priority
                className="object-cover"
              />
              <div className="absolute top-3 left-3 bg-white/90 px-3 py-1 rounded text-xs font-bold text-agri-dark border border-gray-200">
                {crop.scientificName}
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-100/70 px-3 py-1 rounded border border-brand-200">
                  Crop Management Guide
                </span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-white text-gray-700 border border-gray-200">
                  {crop.hindiName}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-agri-dark tracking-tight">
                {crop.name} Protection Plan
              </h1>

              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                {crop.fullOverview}
              </p>

              {/* Growth Stages Badges */}
              <div className="pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-600 block mb-2">
                  Key Crop Growth Stages:
                </span>
                <div className="flex flex-wrap gap-2">
                  {crop.growthStages.map((stage, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-white border border-gray-200 rounded text-xs font-medium text-gray-700"
                    >
                      {idx + 1}. {stage}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Challenges & Target Problems */}
      <section className="py-12 lg:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="max-w-3xl space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-50 px-3 py-1 rounded border border-brand-200 inline-block">
            Target Challenges
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-agri-dark tracking-tight">
            Major {crop.name} Pests, Diseases &amp; Weeds
          </h2>
          <p className="text-xs sm:text-sm text-gray-600">
            Identified agronomic threats that cause economic threshold damage during {crop.name} cultivation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {crop.majorChallenges.map((challenge, idx) => (
            <div
              key={idx}
              className="p-6 bg-agri-surface rounded-lg border border-gray-200 space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${
                      challenge.type === "Pest"
                        ? "bg-emerald-100 text-emerald-900 border-emerald-300"
                        : challenge.type === "Disease"
                        ? "bg-sky-100 text-sky-900 border-sky-300"
                        : "bg-amber-100 text-amber-900 border-amber-300"
                    }`}
                  >
                    {challenge.type}
                  </span>
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                </div>
                <h3 className="text-base font-bold text-agri-dark">
                  {challenge.name}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {challenge.description}
                </p>
              </div>

              {/* Linked Product solutions */}
              <div className="pt-3 border-t border-gray-200 space-y-1.5">
                <span className="text-[11px] font-bold text-gray-700 block">
                  Recommended Formulation(s):
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {challenge.recommendedProductSlugs.map((slug) => {
                    const prod = PRODUCTS.find((p) => p.slug === slug);
                    return prod ? (
                      <Link
                        key={slug}
                        href={`/products/${prod.slug}`}
                        className="px-2 py-1 text-xs font-bold text-agri-deep bg-white border border-brand-300 rounded hover:bg-brand-50 transition-colors"
                      >
                        {prod.name} &rarr;
                      </Link>
                    ) : null;
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recommended Products Grid */}
      <section className="py-12 bg-agri-panel border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-100/70 px-3 py-1 rounded border border-brand-200 inline-block mb-2">
                Formulation Recommendations
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-agri-dark">
                Verified Products for {crop.name} ({recommendedProducts.length})
              </h2>
            </div>
            <Link
              href="/products"
              className="text-xs font-bold text-agri-deep hover:underline"
            >
              Browse All Products &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Best Agronomic Practices */}
      <section className="py-12 lg:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 bg-agri-surface rounded-xl border border-gray-200 space-y-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-brand-600" />
            <h2 className="text-lg font-bold text-agri-dark">
              Field Recommendations for {crop.name} Growers
            </h2>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
            {crop.keyPractices.map((practice, idx) => (
              <li key={idx} className="flex items-start gap-2.5 p-3 rounded bg-white border border-gray-100 text-xs sm:text-sm text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
                <span>{practice}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
