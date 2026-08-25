import React from "react";
import { Hero } from "@/components/home/Hero";
import { TrustIntro } from "@/components/home/TrustIntro";
import { CategoryShowcase } from "@/components/home/CategoryShowcase";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { SolutionFinder } from "@/components/home/SolutionFinder";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { CropSolutionsPreview } from "@/components/home/CropSolutionsPreview";
import { InnovationPreview } from "@/components/home/InnovationPreview";
import { QualityPreview } from "@/components/home/QualityPreview";
import { CTASection } from "@/components/home/CTASection";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Target, Eye, Sparkles } from "lucide-react";
import { COMPANY_DATA } from "@/data/company";

export default function HomePage() {
  return (
    <div>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Trust / Company Intro */}
      <TrustIntro />

      {/* 3. Product Categories */}
      <CategoryShowcase />

      {/* 4. Featured Products Showcase */}
      <FeaturedProducts />

      {/* 5. Interactive Solution Finder Diagnostic */}
      <SolutionFinder />

      {/* 6. Why Choose Us */}
      <WhyChooseUs />

      {/* 7. Crop Solutions Preview */}
      <CropSolutionsPreview />

      {/* 8. Corporate About Preview: Growing Agriculture Through Innovation */}
      <section className="py-14 lg:py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-6 relative">
              <div className="bg-agri-surface p-4 rounded-xl border border-gray-200 shadow-sm">
                <div className="relative w-full h-64 sm:h-80 rounded-lg overflow-hidden border border-gray-200">
                  <Image
                    src="/images/hero/farmer-field.svg"
                    alt="Indian Farmer and Agronomist Collaboration"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-50 px-3 py-1 rounded border border-brand-200 inline-block">
                Our Corporate Vision
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-agri-dark tracking-tight leading-tight">
                Growing Agriculture Through Innovation
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                {COMPANY_DATA.fullAbout}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-agri-surface rounded-lg border border-gray-200 space-y-1">
                  <div className="flex items-center gap-2 text-agri-deep font-bold text-xs">
                    <Target className="w-4 h-4 text-brand-600" />
                    <span>Our Mission</span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {COMPANY_DATA.mission}
                  </p>
                </div>

                <div className="p-4 bg-agri-surface rounded-lg border border-gray-200 space-y-1">
                  <div className="flex items-center gap-2 text-agri-deep font-bold text-xs">
                    <Eye className="w-4 h-4 text-brand-600" />
                    <span>Our Vision</span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {COMPANY_DATA.vision}
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-agri-deep hover:bg-agri-forest rounded-lg shadow-sm transition-colors"
                >
                  <span>Know More About Us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. R&D / Science Section */}
      <InnovationPreview />

      {/* 10. Quality Section */}
      <QualityPreview />

      {/* 11. Final CTA Banner */}
      <CTASection />
    </div>
  );
}
