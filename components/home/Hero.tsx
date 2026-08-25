import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, CheckCircle, Leaf, Sparkles } from "lucide-react";
import { COMPANY_DATA } from "@/data/company";

export function Hero() {
  return (
    <section className="relative bg-agri-surface border-b border-agri-border overflow-hidden">
      {/* Top Banner with agricultural context */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 lg:pt-14 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Hero Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Tag / Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white border border-brand-200 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-brand-600" />
              <span className="text-xs font-bold uppercase tracking-wider text-agri-deep">
                Agricultural Crop Science Solutions
              </span>
            </div>

            {/* Main Headings */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-agri-dark leading-[1.15]">
                Better Crops. <br className="hidden sm:inline" />
                <span className="text-agri-deep">Better Future.</span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-agri-forest max-w-2xl leading-relaxed">
                Science-driven solutions for healthier crops and a stronger agricultural future.
              </p>
            </div>

            {/* Supporting Copy */}
            <p className="text-sm sm:text-base text-gray-700 max-w-xl leading-relaxed">
              Hyderabad Crop Science Pvt. Ltd. formulates advanced crop protection and crop nutrition chemistries engineered to protect Indian farmlands against destructive insect pests, persistent weeds, and debilitating crop diseases.
            </p>

            {/* Value Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2 p-2.5 rounded bg-white border border-gray-200">
                <CheckCircle className="w-4 h-4 text-brand-600 flex-shrink-0" />
                <span className="text-xs font-bold text-gray-800">Targeted Chemistry</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded bg-white border border-gray-200">
                <ShieldCheck className="w-4 h-4 text-brand-600 flex-shrink-0" />
                <span className="text-xs font-bold text-gray-800">Field Proven</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded bg-white border border-gray-200">
                <Leaf className="w-4 h-4 text-brand-600 flex-shrink-0" />
                <span className="text-xs font-bold text-gray-800">Farmer Centric</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-4">
              <Link
                href="/products"
                className="px-6 py-3.5 text-sm font-bold text-white bg-agri-deep hover:bg-agri-forest rounded-lg shadow transition-colors flex items-center justify-center gap-2"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3.5 text-sm font-bold text-agri-deep bg-white hover:bg-gray-50 border-2 border-agri-deep rounded-lg transition-colors text-center"
              >
                Contact Us
              </Link>
              <Link
                href="/distributors"
                className="px-5 py-3.5 text-sm font-semibold text-gray-700 bg-transparent hover:bg-white border border-gray-300 rounded-lg transition-colors text-center"
              >
                Partner Dealership &rarr;
              </Link>
            </div>
          </div>

          {/* Right Hero Visual Area */}
          <div className="lg:col-span-5 relative">
            <div className="bg-white rounded-xl border border-gray-200 shadow-md p-4 sm:p-5 relative">
              {/* Main Farmland Visual */}
              <div className="relative w-full h-56 sm:h-64 rounded-lg overflow-hidden border border-gray-200">
                <Image
                  src="/images/hero/hero-farm.svg"
                  alt="Indian agricultural farmland"
                  fill
                  priority
                  className="object-cover"
                />
                {/* Farmer respect overlay badge (Solid clean card, NO gradient) */}
                <div className="absolute bottom-3 left-3 right-3 bg-agri-deep/95 p-3 rounded text-white text-xs border border-brand-600 shadow">
                  <p className="font-bold text-brand-200 tracking-wide">
                    {COMPANY_DATA.hindiMotto}
                  </p>
                  <p className="text-[11px] text-gray-200 mt-0.5">
                    {COMPANY_DATA.hindiSubmotto}
                  </p>
                </div>
              </div>

              {/* Mini Product Showcase Bar under Hero Graphic */}
              <div className="mt-4 pt-4 border-t border-gray-100 grid grid-cols-3 gap-2 text-center">
                <div className="p-2 bg-agri-surface rounded border border-gray-200">
                  <div className="text-xs font-black text-agri-deep">RIDONA</div>
                  <div className="text-[10px] text-gray-600">Insecticide</div>
                </div>
                <div className="p-2 bg-agri-surface rounded border border-gray-200">
                  <div className="text-xs font-black text-agri-deep">VOLVO</div>
                  <div className="text-[10px] text-gray-600">Herbicide</div>
                </div>
                <div className="p-2 bg-agri-surface rounded border border-gray-200">
                  <div className="text-xs font-black text-agri-deep">HAITOR</div>
                  <div className="text-[10px] text-gray-600">Fungicide</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
