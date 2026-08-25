import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Microscope, FlaskConical, CheckCircle2, ArrowRight } from "lucide-react";

export function InnovationPreview() {
  return (
    <section className="py-14 lg:py-20 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Visual Area */}
          <div className="lg:col-span-6 relative">
            <div className="bg-agri-surface p-4 rounded-xl border border-gray-200 shadow-sm">
              <div className="relative w-full h-64 sm:h-80 rounded-lg overflow-hidden border border-gray-200">
                <Image
                  src="/images/hero/agri-lab.svg"
                  alt="Agricultural Formulation Science Laboratory"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Text Content */}
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-50 px-3 py-1 rounded border border-brand-200 inline-block">
              Research &amp; Scientific Innovation
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-agri-dark tracking-tight leading-tight">
              Science Behind Better Crops
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              At Hyderabad Crop Science, product development is driven by agronomic chemistry and precision formulation engineering. We focus on enhancing active ingredient bioavailability, reducing environmental load, and ensuring high rainfastness under tropical weather conditions.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <FlaskConical className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-agri-dark">Formulation Engineering</h4>
                  <p className="text-xs text-gray-600 mt-0.5">
                    Development of SC, SL, and EC formulations with high suspension stability and uniform droplet dispersion.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Microscope className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-agri-dark">Active Ingredient Purity Verification</h4>
                  <p className="text-xs text-gray-600 mt-0.5">
                    Strict analytical evaluation of technical grade actives to eliminate impurities and guarantee consistent potency.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/research"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-agri-deep hover:bg-agri-forest rounded-lg shadow-sm transition-colors"
              >
                <span>Explore R&amp;D Capabilities</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
