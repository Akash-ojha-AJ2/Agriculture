import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Award,
  Sprout,
  CheckCircle2,
  HeartHandshake,
  Recycle,
  AlertCircle,
  Phone,
} from "lucide-react";
import { COMPANY_DATA } from "@/data/company";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Quality & Sustainability | ISO 9001:2015 Certified | Shimanzu",
  description:
    "Shimanzu Chemicals is AN ISO 9001 : 2015 CERTIFIED COMPANY. Discover our commitment to batch quality, sustainable farming, soil conservation, and farmer safety.",
};

export default function QualityPage() {
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
                UNCOMPROMISING STANDARDS
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
              Quality & Sustainability
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Building lasting agricultural trust through ISO 9001:2015 certified manufacturing, responsible stewardship, and sustainable soil health management.
            </p>
          </div>
        </div>
      </section>

      {/* ISO 9001:2015 Certification Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="w-16 h-16 rounded-2xl bg-emerald-900 text-white flex items-center justify-center mb-4 shadow-lg shadow-emerald-950/20">
              <Award className="w-8 h-8 text-emerald-300" />
            </div>
            <div className="japanese-hanko text-shimanzu-red border-shimanzu-red mb-2">
              OFFICIAL CERTIFICATION
            </div>
            <h2 className="text-2xl font-bold text-slate-900">
              {COMPANY_DATA.certification}
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-4 text-slate-600 text-xs sm:text-sm leading-relaxed border-t lg:border-t-0 lg:border-l border-slate-100 pt-6 lg:pt-0 lg:pl-8">
            <p>
              Shimanzu Chemicals Pvt. Ltd. operates under strict Quality Management Systems in full compliance with ISO 9001:2015 standards. Every manufacturing phase—from raw active ingredient procurement to blending, micro-milling, automated filling, and secondary packaging—is guided by defined Standard Operating Procedures (SOPs).
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 font-medium text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Standardized Raw Material Verification</span>
              </div>
              <div className="flex items-center gap-2 font-medium text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Automated Batch Formulation Controls</span>
              </div>
              <div className="flex items-center gap-2 font-medium text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Multi-stage Retention Sample Audits</span>
              </div>
              <div className="flex items-center gap-2 font-medium text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Complete Batch Traceability</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainable Agriculture Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="ENVIRONMENTAL HARMONY"
          title="Practicing Sustainable Agriculture"
          subtitle="Empowering farmers to produce more while protecting natural soil ecosystems and water resources."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Soil Health */}
          <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-900 flex items-center justify-center">
              <Sprout className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Soil Health & Bio-Nutrition</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We promote bio-stimulants, chelated micro-nutrients, and humic formulations like Shimanzu Power and Fitmax-33 to rejuvenate depleted soil organic dynamics and enhance root microbial interactions.
            </p>
          </div>

          {/* Integrated Pest Management */}
          <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-900 flex items-center justify-center">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Judicious IPM Stewardship</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We advocate need-based spraying, rotational mode-of-action chemistry to manage insect resistance, and precise dosage application supported by adjuvant technologies to minimize environmental runoff.
            </p>
          </div>

          {/* Safe Packaging & Disposal */}
          <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-900 flex items-center justify-center">
              <Recycle className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Responsible Container Stewardship</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We educate dealers and farmers on triple-rinsing, container puncturing, and safe disposal of empty agricultural containers to prevent misuse and protect rural groundwater.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
