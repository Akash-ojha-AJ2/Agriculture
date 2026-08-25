import React from "react";
import Link from "next/link";
import { ArrowRight, Phone, ShieldCheck } from "lucide-react";
import { COMPANY_DATA } from "@/data/company";

export function CTASection() {
  return (
    <section className="py-16 lg:py-20 bg-agri-deep text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-agri-forest border border-brand-500/40 text-brand-200 text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Building Trust with Indian Agriculture</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            Let&apos;s Grow a Better Future Together
          </h2>

          <p className="text-base sm:text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Explore our agricultural solutions or get in touch with our agronomy and distribution team to partner with Hyderabad Crop Science.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/products"
              className="w-full sm:w-auto px-8 py-4 text-sm font-bold text-agri-deep bg-white hover:bg-brand-50 rounded-lg shadow-md transition-colors flex items-center justify-center gap-2"
            >
              <span>Explore Products</span>
              <ArrowRight className="w-4 h-4 text-agri-deep" />
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 text-sm font-bold text-white bg-agri-forest hover:bg-brand-700 border-2 border-brand-400/60 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Contact Us</span>
            </Link>
            <Link
              href="/distributors"
              className="w-full sm:w-auto px-6 py-4 text-sm font-bold text-brand-200 hover:text-white transition-colors text-center"
            >
              Become a Distributor &rarr;
            </Link>
          </div>

          <div className="pt-6 border-t border-agri-forest/80 text-xs text-brand-300 font-medium">
            {COMPANY_DATA.hindiMotto} &bull; {COMPANY_DATA.legalName}
          </div>
        </div>
      </div>
    </section>
  );
}
