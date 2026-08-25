import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import {
  FlaskConical,
  Microscope,
  Sparkles,
  ShieldCheck,
  Sprout,
  ArrowRight,
  TestTube2,
  Atom,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Research & Development | Formulation Science",
  description:
    "Discover the science and innovation behind Hyderabad Crop Science. Precision agrochemical formulation, analytical purity testing, and field efficacy validation.",
};

export default function ResearchPage() {
  const breadcrumbs = [{ label: "R&D & Science" }];

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
              Scientific Excellence
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-agri-dark tracking-tight">
              Research &amp; Development
            </h1>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              At Hyderabad Crop Science, our research strategy revolves around formulation engineering, active ingredient stability, and optimizing biological bioavailability for Indian farming conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Core Scientific Pillars */}
      <section className="py-14 lg:py-18 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 relative">
            <div className="bg-agri-surface p-4 rounded-xl border border-gray-200 shadow-sm">
              <div className="relative w-full h-72 sm:h-96 rounded-lg overflow-hidden border border-gray-200">
                <Image
                  src="/images/hero/agri-lab.svg"
                  alt="Agrochemical Laboratory Research"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-50 px-3 py-1 rounded border border-brand-200 inline-block">
              Analytical Rigor
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-agri-dark tracking-tight">
              Formulation Science &amp; Chemical Stability
            </h2>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              Agrochemical efficacy in the field depends heavily on the quality of auxiliary components: surfactants, wetting agents, emulsifiers, and anti-foaming compounds. Our formulation division develops stable delivery matrices that ensure uniform droplet spreading, high rainfastness, and prolonged foliar retention.
            </p>

            <div className="space-y-3 pt-2">
              <div className="p-3.5 bg-agri-surface rounded-lg border border-gray-200">
                <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-agri-dark">
                  <FlaskConical className="w-4 h-4 text-brand-600" />
                  <span>Suspension Concentrates (SC) Optimization</span>
                </div>
                <p className="text-xs text-gray-600 mt-1">
                  Micro-milling active molecules to sub-micron particles to enhance suspensibility and eliminate nozzle clogging.
                </p>
              </div>

              <div className="p-3.5 bg-agri-surface rounded-lg border border-gray-200">
                <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-agri-dark">
                  <Atom className="w-4 h-4 text-brand-600" />
                  <span>Emulsifiable Concentrates (EC) &amp; Soluble Liquids (SL)</span>
                </div>
                <p className="text-xs text-gray-600 mt-1">
                  Optimized surfactant packages ensuring spontaneous blooming and rapid translocation through thick plant cuticles.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 R&D Focus Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
          <div className="p-6 bg-agri-surface rounded-lg border border-gray-200 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-brand-100 flex items-center justify-center text-agri-deep">
              <TestTube2 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-agri-dark">Batch Stability Studies</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Accelerated shelf-life testing across elevated temperatures and humidity regimes to ensure long storage viability.
            </p>
          </div>

          <div className="p-6 bg-agri-surface rounded-lg border border-gray-200 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-800">
              <Sprout className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-agri-dark">Crop Safety &amp; Compatibility</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Evaluating tank-mix physical compatibility and crop phytotoxicity across multi-season agronomic cycles.
            </p>
          </div>

          <div className="p-6 bg-agri-surface rounded-lg border border-gray-200 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-800">
              <Microscope className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-agri-dark">Resistance Management</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Formulating combination chemistries with dual modes of action to delay pest and weed resistance development.
            </p>
          </div>

          <div className="p-6 bg-agri-surface rounded-lg border border-gray-200 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-brand-100 flex items-center justify-center text-agri-deep">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-agri-dark">Green Chemistry Goals</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Gradual reduction of petroleum-based solvents in favor of biodegradable, plant-safe solvent carriers.
            </p>
          </div>
        </div>
      </section>

      {/* CTA to Quality & Contact */}
      <section className="py-12 bg-agri-panel border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-agri-dark">
              Explore Our Quality Assurance Infrastructure
            </h3>
            <p className="text-xs text-gray-600">
              Discover how our manufacturing protocols ensure 100% batch compliance.
            </p>
          </div>
          <Link
            href="/quality"
            className="px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-agri-deep hover:bg-agri-forest rounded-md shadow-xs transition-colors flex items-center gap-1.5 whitespace-nowrap"
          >
            <span>Quality Assurance</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
