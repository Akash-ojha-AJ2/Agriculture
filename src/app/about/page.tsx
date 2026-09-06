import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Users,
  Target,
  Lightbulb,
  Compass,
  Building2,
  Award,
  Sprout,
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { COMPANY_DATA } from "@/data/company";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About Us | Shimanzu Chemicals Pvt. Ltd.",
  description:
    "Learn about Shimanzu Chemicals Pvt. Ltd. (SHIMANZU JAPAN), our heritage of 'Growing with trust', Japanese precision formulation, and our commitment to Indian agriculture.",
};

export default function AboutPage() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Users":
        return <Users className="w-6 h-6 text-emerald-800" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-6 h-6 text-emerald-800" />;
      case "Lightbulb":
        return <Lightbulb className="w-6 h-6 text-emerald-800" />;
      case "Target":
        return <Target className="w-6 h-6 text-emerald-800" />;
      case "Compass":
        return <Compass className="w-6 h-6 text-emerald-800" />;
      default:
        return <Award className="w-6 h-6 text-emerald-800" />;
    }
  };

  return (
    <div className="space-y-20 sm:space-y-28 pb-20">
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#2d6a4f_1px,transparent_1px)] [background-size:24px_24px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-shimanzu-red"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-300">
                COMPANY PROFILE & HERITAGE
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              About Shimanzu Chemicals
            </h1>
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed font-normal">
              Combining Japanese formulation precision with localized farming insights to build a prosperous and resilient agricultural future.
            </p>
          </div>
        </div>
      </section>

      {/* Corporate Overview & Heritage */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-shimanzu-red"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-900">
                WHO WE ARE
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              {COMPANY_DATA.overview.title}
            </h2>

            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              {COMPANY_DATA.overview.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="pt-2">
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-start gap-3">
                <ShieldCheck className="w-6 h-6 text-emerald-800 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-emerald-950">
                    {COMPANY_DATA.certification}
                  </div>
                  <div className="text-xs text-emerald-800 mt-0.5">
                    Rigorous quality inspection, automated batching, and high-purity formulation chemistry.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Card: Institutional Footprint */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl space-y-8">
              <div className="flex items-center justify-between border-b border-slate-100 pb-6">
                <div>
                  <div className="japanese-hanko text-shimanzu-red border-shimanzu-red mb-1">
                    BRAND IDENTITY
                  </div>
                  <div className="text-xl font-bold text-slate-900">{COMPANY_DATA.brand}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-400 font-semibold uppercase">Official Tagline</div>
                  <div className="text-sm font-bold text-emerald-900">&ldquo;{COMPANY_DATA.tagline}&rdquo;</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="text-3xl font-extrabold text-emerald-950 font-mono">
                    {COMPANY_DATA.metrics.distributors}
                  </div>
                  <div className="text-xs font-bold text-slate-900 mt-1">
                    Distributor Network
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Pan-India distribution partners</div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="text-3xl font-extrabold text-emerald-950 font-mono">
                    {COMPANY_DATA.metrics.dealers}
                  </div>
                  <div className="text-xs font-bold text-slate-900 mt-1">
                    Authorized Dealers
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Empowering farming communities</div>
                </div>
              </div>

              <div className="space-y-3 text-xs text-slate-600 pt-2 border-t border-slate-100">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                  <span><strong>Corporate Office:</strong> {COMPANY_DATA.corporateOffice}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-emerald-800 shrink-0" />
                  <span><strong>Toll-Free Helpline:</strong> {COMPANY_DATA.tollFree}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-emerald-800 shrink-0" />
                  <span><strong>Official Email:</strong> {COMPANY_DATA.email}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="bg-gradient-to-br from-emerald-950 to-emerald-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-emerald-800/50 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-800/80 flex items-center justify-center">
                <Target className="w-6 h-6 text-emerald-300" />
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-emerald-300">
                OUR MISSION
              </div>
              <h3 className="text-2xl font-bold text-white">Empowering Indian Agriculture</h3>
              <p className="text-sm sm:text-base text-emerald-100 leading-relaxed">
                {COMPANY_DATA.overview.mission}
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-800 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center">
                <Compass className="w-6 h-6 text-emerald-400" />
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                OUR VISION
              </div>
              <h3 className="text-2xl font-bold text-white">Innovation & Sustainable Growth</h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {COMPANY_DATA.overview.vision}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section id="values" className="bg-slate-100/70 py-20 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="INSTITUTIONAL PILLARS"
            title="Our Five Core Values"
            subtitle="The enduring principles that define our formulations, manufacturing rigor, and relationships."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {COMPANY_DATA.coreValues.map((val) => (
              <div
                key={val.title}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-4">
                    {getIcon(val.icon)}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">
                    {val.title}
                  </h3>
                  <div className="text-xs font-semibold text-emerald-800 mb-3">
                    {val.tagline}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Citizenship & Stewardship */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-lg">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-shimanzu-red"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-900">
                RESPONSIBLE STEWARDSHIP
              </span>
            </div>
            <h2 className="text-3xl font-bold text-slate-900">
              Committed to Sustainable Agriculture & Farmer Safety
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Shimanzu is actively dedicated to responsible agrochemical usage, soil conservation, and farmer safety stewardship. We promote integrated pest management (IPM) practices, precise dosage training, and safe disposal of agricultural packaging to protect ecosystems.
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <Link
                href="/quality"
                className="px-6 py-2.5 rounded-xl bg-emerald-900 text-white font-bold text-xs sm:text-sm hover:bg-emerald-800 transition-colors"
              >
                Quality & Sustainability Standards
              </Link>
              <Link
                href="/resources"
                className="px-6 py-2.5 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs sm:text-sm hover:bg-slate-200 transition-colors"
              >
                View Safe Spraying Guidelines
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
