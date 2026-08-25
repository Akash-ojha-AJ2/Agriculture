import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { COMPANY_DATA } from "@/data/company";
import {
  FlaskConical,
  HeartHandshake,
  ShieldCheck,
  Sprout,
  Target,
  Eye,
  ArrowRight,
  Award,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Corporate Profile",
  description:
    "Learn about Hyderabad Crop Science Pvt. Ltd., our mission, scientific approach, values, and dedication to empowering Indian farmers.",
};

export default function AboutPage() {
  const breadcrumbs = [{ label: "About Us" }];

  const getValueIcon = (iconName: string) => {
    switch (iconName) {
      case "FlaskConical":
        return <FlaskConical className="w-6 h-6 text-brand-700" />;
      case "HeartHandshake":
        return <HeartHandshake className="w-6 h-6 text-brand-700" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-6 h-6 text-brand-700" />;
      case "Sprout":
        return <Sprout className="w-6 h-6 text-brand-700" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-brand-700" />;
    }
  };

  return (
    <div className="bg-white">
      {/* Breadcrumbs */}
      <div className="bg-agri-surface border-b border-gray-200">
        <Breadcrumbs items={breadcrumbs} />
      </div>

      {/* Page Header */}
      <section className="py-12 lg:py-16 bg-agri-surface border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-700 bg-white px-3 py-1 rounded border border-brand-200 inline-block shadow-xs">
              Corporate Profile
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-agri-dark tracking-tight">
              About Hyderabad Crop Science
            </h1>
            <p className="text-base sm:text-lg text-agri-forest font-medium">
              &quot;{COMPANY_DATA.tagline}&quot;
            </p>
            <p className="text-sm text-gray-700 leading-relaxed pt-1">
              {COMPANY_DATA.fullAbout}
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-14 lg:py-18 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="p-8 bg-agri-surface rounded-xl border border-gray-200 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-lg bg-brand-100 flex items-center justify-center text-agri-deep">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-black text-agri-dark">
                Our Corporate Mission
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                {COMPANY_DATA.mission}
              </p>
            </div>
            <div className="text-xs font-semibold text-brand-700 pt-2 border-t border-gray-200">
              {COMPANY_DATA.hindiMotto}
            </div>
          </div>

          {/* Vision Card */}
          <div className="p-8 bg-agri-surface rounded-xl border border-gray-200 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-800">
                <Eye className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-black text-agri-dark">
                Our Strategic Vision
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                {COMPANY_DATA.vision}
              </p>
            </div>
            <div className="text-xs font-semibold text-brand-700 pt-2 border-t border-gray-200">
              Sustainable Agricultural Productivity
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Grounding & Farmer Focus Banner */}
      <section className="py-12 bg-agri-panel border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-agri-deep">
                Farmer Empowerment
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-agri-dark">
                {COMPANY_DATA.hindiSubmotto}
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                We believe that the prosperity of India is inextricably linked to the strength and resilience of its farming community. Our products are formulated to provide tangible economic value per acre through dependable pest suppression and yield security.
              </p>
            </div>
            <div className="lg:col-span-4 text-center lg:text-right">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold text-white bg-agri-deep hover:bg-agri-forest rounded-lg shadow-sm transition-colors"
              >
                <span>Connect With Agronomists</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Values */}
      <section className="py-14 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-50 px-3 py-1 rounded border border-brand-200 inline-block">
            Guiding Principles
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-agri-dark tracking-tight">
            Our Core Corporate Values
          </h2>
          <p className="text-sm text-gray-600">
            Four foundational values that guide our research, manufacturing, product distribution, and commercial partnerships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {COMPANY_DATA.values.map((val, idx) => (
            <div
              key={idx}
              className="p-6 bg-agri-surface rounded-lg border border-gray-200 space-y-3 hover:border-brand-500 hover:shadow-xs transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-white border border-gray-200 flex items-center justify-center">
                {getValueIcon(val.icon)}
              </div>
              <h3 className="text-base font-bold text-agri-dark">
                {val.title}
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                {val.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
