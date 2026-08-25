import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, CheckCircle2, ClipboardCheck, ArrowRight } from "lucide-react";

export function QualityPreview() {
  return (
    <section className="py-14 lg:py-20 bg-agri-surface border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Text Content */}
          <div className="lg:col-span-6 space-y-5 order-2 lg:order-1">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-100/70 px-3 py-1 rounded border border-brand-200 inline-block">
              Manufacturing &amp; QA Standards
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-agri-dark tracking-tight leading-tight">
              Committed to Quality &amp; Precision
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              Every batch formulated under the Hyderabad Crop Science brand undergoes stringent multi-stage quality checks. From raw material purity to finished formulation stability and packaging integrity, our quality assurance protocols ensure complete batch consistency in the field.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-white rounded-lg border border-gray-200">
                <div className="flex items-center gap-2 mb-1.5">
                  <ClipboardCheck className="w-4 h-4 text-brand-600" />
                  <h4 className="text-xs font-bold text-agri-dark">Batch Traceability</h4>
                </div>
                <p className="text-xs text-gray-600">
                  Comprehensive batch records from technical raw materials to sealed packaged bottles.
                </p>
              </div>

              <div className="p-4 bg-white rounded-lg border border-gray-200">
                <div className="flex items-center gap-2 mb-1.5">
                  <ShieldCheck className="w-4 h-4 text-brand-600" />
                  <h4 className="text-xs font-bold text-agri-dark">Emulsion &amp; SC Testing</h4>
                </div>
                <p className="text-xs text-gray-600">
                  Rigorous testing of particle size, suspensibility, pH, and storage stability.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/quality"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-agri-deep bg-white hover:bg-brand-50 border border-gray-300 rounded-lg shadow-xs transition-colors"
              >
                <span>Read Quality Assurance Standards</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Visual Area */}
          <div className="lg:col-span-6 relative order-1 lg:order-2">
            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
              <div className="relative w-full h-64 sm:h-80 rounded-lg overflow-hidden border border-gray-200">
                <Image
                  src="/images/hero/quality-lab.svg"
                  alt="Quality Assurance Laboratory"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
