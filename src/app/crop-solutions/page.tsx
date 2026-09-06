import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Sprout,
  ShieldAlert,
  ArrowRight,
  ChevronRight,
  Sparkles,
  Bug,
  Activity,
  Layers,
} from "lucide-react";
import { CROPS_DATA } from "@/data/crops";
import { PRODUCTS, getProductBySlug } from "@/data/products";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Crop Solutions | Crop Protection Schedules | Shimanzu",
  description:
    "Crop-specific agronomic solutions for Paddy, Cotton, Sugarcane, Wheat, and Horticultural crops. Tackle stem borers, blast, stubborn weeds, and nutrient deficiencies with authentic Shimanzu formulations.",
};

export default function CropSolutionsPage() {
  const getProblemTypeBadge = (type: string) => {
    switch (type) {
      case "Insect/Pest":
        return "bg-emerald-100 text-emerald-900 border-emerald-300";
      case "Disease":
        return "bg-cyan-100 text-cyan-900 border-cyan-300";
      case "Weed":
        return "bg-amber-100 text-amber-900 border-amber-300";
      case "Nutritional/Physiological":
        return "bg-purple-100 text-purple-900 border-purple-300";
      default:
        return "bg-slate-100 text-slate-800 border-slate-300";
    }
  };

  return (
    <div className="space-y-16 sm:space-y-20 pb-20">
      {/* Banner */}
      <section className="bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#2d6a4f_1px,transparent_1px)] [background-size:24px_24px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-shimanzu-red"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-300">
                FIELD-TESTED AGRONOMY
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
              Crop Solutions Matrix
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Structured crop protection schedules matching each agronomic challenge with authentic Shimanzu insecticidal, fungicidal, herbicidal, and bio-nutritional chemistries.
            </p>
          </div>
        </div>
      </section>

      {/* Crop Selector Quick Jump */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-2">
            Select Crop:
          </span>
          {CROPS_DATA.map((crop) => (
            <a
              key={crop.id}
              href={`#${crop.slug}`}
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-slate-50 hover:bg-emerald-900 hover:text-white text-slate-700 border border-slate-200 transition-all flex items-center gap-1.5"
            >
              <Sprout className="w-3.5 h-3.5 text-emerald-700" />
              <span>{crop.cropName}</span>
            </a>
          ))}
        </div>
      </section>

      {/* Main Crop Details & Problems Matrix */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {CROPS_DATA.map((crop) => (
          <div
            key={crop.id}
            id={crop.slug}
            className="scroll-mt-28 bg-white rounded-3xl border border-slate-200 shadow-lg overflow-hidden"
          >
            {/* Crop Header Strip */}
            <div className="bg-gradient-to-r from-emerald-950 via-emerald-900 to-slate-900 text-white p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="japanese-hanko bg-white text-shimanzu-red border-white text-[10px]">
                    SHIMANZU JAPAN
                  </span>
                  <span className="text-xs font-bold text-emerald-300 uppercase tracking-widest">
                    Season: {crop.season}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-3">
                  {crop.cropName}
                  {crop.hindiName && (
                    <span className="text-lg font-normal text-emerald-200">
                      ({crop.hindiName})
                    </span>
                  )}
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
                  {crop.description}
                </p>
              </div>
            </div>

            {/* Problems & Solutions Grid */}
            <div className="p-6 sm:p-8 space-y-6">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Agronomic Challenges & Verified Shimanzu Solutions:
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {crop.challenges.map((challenge, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-4 hover:border-emerald-700/40 transition-colors"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span
                          className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${getProblemTypeBadge(
                            challenge.problemType
                          )}`}
                        >
                          {challenge.problemType}
                        </span>
                        <span className="text-[11px] font-semibold text-slate-500">
                          {challenge.recommendedCategory}
                        </span>
                      </div>

                      <h3 className="text-base font-bold text-slate-900">
                        {challenge.problemName}
                      </h3>

                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        <strong className="text-slate-700">Symptoms:</strong> {challenge.symptoms}
                      </p>
                    </div>

                    {/* Recommended Shimanzu Products */}
                    <div className="border-t border-slate-200 pt-3">
                      <div className="text-[11px] font-bold text-emerald-950 uppercase tracking-wider mb-2 flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5 text-emerald-800" />
                        Recommended Shimanzu Formulation(s):
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {challenge.recommendedProductSlugs.map((slug) => {
                          const prod = getProductBySlug(slug);
                          if (!prod) return null;
                          return (
                            <Link
                              key={slug}
                              href={`/products/${prod.category}/${prod.slug}`}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-300 hover:border-emerald-700 hover:bg-emerald-50 text-xs font-bold text-slate-900 hover:text-emerald-900 transition-all shadow-sm group"
                            >
                              <span>{prod.name}</span>
                              <span className="text-[10px] font-normal text-slate-500">
                                ({prod.formulation})
                              </span>
                              <ChevronRight className="w-3 h-3 text-slate-400 group-hover:text-emerald-800 transition-transform group-hover:translate-x-0.5" />
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
