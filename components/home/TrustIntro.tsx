import React from "react";
import Link from "next/link";
import { Microscope, ShieldCheck, HeartHandshake, Sprout, ArrowRight } from "lucide-react";
import { COMPANY_DATA } from "@/data/company";

export function TrustIntro() {
  return (
    <section className="py-14 lg:py-18 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-50 px-3 py-1 rounded border border-brand-200 inline-block">
            About Hyderabad Crop Science
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-agri-dark tracking-tight">
            Advancing Agriculture Through Science
          </h2>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            {COMPANY_DATA.shortAbout}
          </p>
        </div>

        {/* 4 Core Scientific Focus Cards (Solid white cards, crisp border, NO gradients) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          <div className="p-6 bg-agri-surface rounded-lg border border-gray-200 hover:border-brand-500 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-brand-100 flex items-center justify-center text-agri-deep mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-agri-dark mb-2">Crop Protection</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Targeted insecticides, fungicides, and herbicides engineered to combat destructive pests and pathogenic fungi while preserving crop vigor.
            </p>
          </div>

          <div className="p-6 bg-agri-surface rounded-lg border border-gray-200 hover:border-brand-500 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-800 mb-4">
              <Sprout className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-agri-dark mb-2">Crop Nutrition</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Balanced micronutrients, bio-stimulants, and soil fertility builders to optimize plant physiology, flowering, and grain filling.
            </p>
          </div>

          <div className="p-6 bg-agri-surface rounded-lg border border-gray-200 hover:border-brand-500 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-800 mb-4">
              <Microscope className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-agri-dark mb-2">Formulation Science</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Precision suspension concentrates (SC), soluble liquids (SL), and emulsifiable concentrates (EC) tested for chemical stability.
            </p>
          </div>

          <div className="p-6 bg-agri-surface rounded-lg border border-gray-200 hover:border-brand-500 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-brand-100 flex items-center justify-center text-agri-deep mb-4">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-agri-dark mb-2">Farmer Stewardship</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Dedicated field guidance, multi-lingual safe usage guidelines, and dependable supply chains across Indian rural distributor networks.
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/about"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-agri-deep hover:text-brand-600 transition-colors"
          >
            <span>Learn more about our corporate mission &amp; values</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
