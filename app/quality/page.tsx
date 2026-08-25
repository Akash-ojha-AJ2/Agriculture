import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import {
  ShieldCheck,
  ClipboardCheck,
  CheckCircle2,
  AlertCircle,
  FileCheck2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Quality Assurance & Manufacturing Standards | Quality Control",
  description:
    "Explore Hyderabad Crop Science Pvt. Ltd. quality control protocols, batch testing, active ingredient analysis, and packaging integrity standards.",
};

export default function QualityPage() {
  const breadcrumbs = [{ label: "Quality Assurance" }];

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumbs */}
      <div className="bg-agri-surface border-b border-gray-200">
        <Breadcrumbs items={breadcrumbs} />
      </div>

      {/* Header Banner */}
      <section className="py-10 lg:py-14 bg-agri-surface border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-700 bg-white px-3 py-1 rounded border border-brand-200 inline-block shadow-xs">
              Zero Compromise on Purity
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-agri-dark tracking-tight">
              Quality Assurance &amp; Standards
            </h1>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Every bottle and canister bearing the Hyderabad Crop Science mark reflects rigorous quality governance, calibrated analytical testing, and strict adherence to statutory agrochemical standards.
            </p>
          </div>
        </div>
      </section>

      {/* Quality Architecture Section */}
      <section className="py-14 lg:py-18 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-50 px-3 py-1 rounded border border-brand-200 inline-block">
              Multi-Tier Quality Gate
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-agri-dark tracking-tight">
              From Raw Technical Actives to Sealed Packs
            </h2>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              Our quality assurance framework is integrated into every phase of production. We test incoming raw technical actives, monitor real-time homogenization and dispersion during formulation, and verify final batch parameters prior to packaging release.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 p-3.5 bg-agri-surface rounded-lg border border-gray-200">
                <CheckCircle2 className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-agri-dark">
                    Active Ingredient Purity Assay
                  </h4>
                  <p className="text-xs text-gray-600 mt-0.5">
                    Quantitative analysis of active ingredient content to ensure exact specification matching labeled dosage.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-agri-surface rounded-lg border border-gray-200">
                <CheckCircle2 className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-agri-dark">
                    Physical Dispersion &amp; Emulsion Stability
                  </h4>
                  <p className="text-xs text-gray-600 mt-0.5">
                    Testing spontaneity of bloom, emulsion re-dispersibility, and suspensibility in hard water conditions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-agri-surface rounded-lg border border-gray-200">
                <CheckCircle2 className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-agri-dark">
                    Leak-Proof Packaging Integrity
                  </h4>
                  <p className="text-xs text-gray-600 mt-0.5">
                    High-density HDPE/fluorinated bottles, induction heat sealing (IHS), and drop-impact resistance checks.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="bg-agri-surface p-4 rounded-xl border border-gray-200 shadow-sm">
              <div className="relative w-full h-72 sm:h-96 rounded-lg overflow-hidden border border-gray-200">
                <Image
                  src="/images/hero/quality-lab.svg"
                  alt="Quality Control Laboratory Testing"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 4 Quality Commitments */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
          <div className="p-6 bg-agri-surface rounded-lg border border-gray-200 space-y-2">
            <ClipboardCheck className="w-6 h-6 text-brand-600 mb-2" />
            <h3 className="text-sm font-bold text-agri-dark">100% Batch Traceability</h3>
            <p className="text-xs text-gray-600">
              Every production batch is assigned a unique batch code linked to test records and raw material sourcing logs.
            </p>
          </div>

          <div className="p-6 bg-agri-surface rounded-lg border border-gray-200 space-y-2">
            <FileCheck2 className="w-6 h-6 text-brand-600 mb-2" />
            <h3 className="text-sm font-bold text-agri-dark">Statutory Compliance</h3>
            <p className="text-xs text-gray-600">
              Strict conformity with Insecticides Act, 1968, CIB&amp;RC guidelines, and BIS (Bureau of Indian Standards) specifications.
            </p>
          </div>

          <div className="p-6 bg-agri-surface rounded-lg border border-gray-200 space-y-2">
            <ShieldCheck className="w-6 h-6 text-brand-600 mb-2" />
            <h3 className="text-sm font-bold text-agri-dark">Anti-Counterfeiting Measures</h3>
            <p className="text-xs text-gray-600">
              Tamper-evident holographic caps and security seals to protect farmers against counterfeit products.
            </p>
          </div>

          <div className="p-6 bg-agri-surface rounded-lg border border-gray-200 space-y-2">
            <Sparkles className="w-6 h-6 text-brand-600 mb-2" />
            <h3 className="text-sm font-bold text-agri-dark">Storage Stability</h3>
            <p className="text-xs text-gray-600">
              Formulations engineered to maintain shelf potency under diverse Indian tropical storage temperatures.
            </p>
          </div>
        </div>
      </section>

      {/* Product Discovery CTA */}
      <section className="py-12 bg-agri-deep text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold">
              Explore Our Quality Tested Formulations
            </h3>
            <p className="text-xs text-gray-200 mt-1">
              View verified active compositions and technical specifications for RIDONA, VOLVO, TUFAN, and more.
            </p>
          </div>
          <Link
            href="/products"
            className="px-6 py-3 text-xs sm:text-sm font-bold text-agri-deep bg-white hover:bg-brand-50 rounded-lg shadow transition-colors whitespace-nowrap"
          >
            Explore Product Catalogue &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}
