import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  FlaskConical,
  ShieldCheck,
  Microscope,
  Cpu,
  Layers,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { COMPANY_DATA } from "@/data/company";

export const metadata: Metadata = {
  title: "Research & Innovation | Formulation Science | Shimanzu",
  description:
    "Explore Shimanzu Chemicals' research and formulation capabilities: particle-size optimization, emulsion stability, and rigorous bio-efficacy field trials.",
};

export default function ResearchPage() {
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
                SCIENTIFIC FORMULATION
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
              Research & Innovation
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Inspired by Japanese precision science and engineered specifically to withstand India&apos;s demanding agro-climatic conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Main R&D Philosophy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-shimanzu-red"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-900">
                FORMULATION RIGOR
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Advanced Chemical Engineering for High Bio-Efficacy
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              At Shimanzu Chemicals, formulation science is more than just dissolving active ingredients. We engineer advanced physical delivery systems—such as Suspension Concentrates (SC), Water Dispersible Granules (WG), Flowables for Seed Treatment (FS), and Micro-encapsulated ZC chemistries—that optimize active ingredient deposition, rainfastness, and leaf penetration.
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Our formulation processes ensure minimal particle size distribution, preventing nozzle sedimentation and maximizing surface contact against target pests and fungal spores.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-xl space-y-6">
              <div className="japanese-hanko text-shimanzu-red border-white bg-white">
                SHIMANZU JAPAN
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Core Research & Testing Focus Areas
              </h3>

              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-slate-800 border border-slate-700">
                  <div className="text-emerald-400 font-bold text-sm mb-1">
                    1. High Temperature & UV Stability
                  </div>
                  <div className="text-xs text-slate-300 leading-relaxed">
                    Formulations tested under accelerated thermal aging protocols to ensure zero phase separation or degradation in tropical field storage.
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-800 border border-slate-700">
                  <div className="text-emerald-400 font-bold text-sm mb-1">
                    2. Dynamic Surface Tension & Spreading
                  </div>
                  <div className="text-xs text-slate-300 leading-relaxed">
                    Surfactant integration (including organosilicone tech like Shim-Wet) reducing droplet rebound on waxy leaves and increasing stomatal infiltration.
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-800 border border-slate-700">
                  <div className="text-emerald-400 font-bold text-sm mb-1">
                    3. Hard Water Compatibility
                  </div>
                  <div className="text-xs text-slate-300 leading-relaxed">
                    Buffer systems preventing flocculation, crystallization, or active ingredient antagonism in high TDS rural irrigation waters.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Laboratory & Batch Standards Grid */}
      <section className="bg-slate-100/70 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="QUALITY PROTOCOLS"
            title="Standard Operating Quality Assurance"
            subtitle="Every single batch released by Shimanzu is certified under ISO 9001:2015 traceability."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                <Microscope className="w-5 h-5 text-emerald-800" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">
                Active Ingredient Assay
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Chromatographic analysis verifying exact chemical potency, active concentration, and absence of prohibited impurities before bottling.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                <FlaskConical className="w-5 h-5 text-emerald-800" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">
                Suspension & Dispersion Test
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                CIPAC standard testing for wet sieve residue, spontaneity of dispersion, and persistent foam stability across granular and flowable formulations.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-emerald-800" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">
                Packaging Integrity
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Leakage testing, induction cap sealing, and tamper-evident labeling to protect against adulteration and environmental contamination.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
