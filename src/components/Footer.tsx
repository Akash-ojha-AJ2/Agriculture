import React from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  ShieldCheck,
  Award,
  ChevronRight,
  Sprout,
  HeartHandshake,
} from "lucide-react";
import { COMPANY_DATA } from "@/data/company";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-900 relative overflow-hidden">
      {/* Decorative Subtle Background Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#1b4d3e_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Column 1: Brand & Philosophy */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-800 to-emerald-950 flex items-center justify-center text-white border border-emerald-600/40 shadow-inner">
                <span className="font-serif font-black text-xl">志</span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-xl tracking-tight text-white">
                    SHIMANZU
                  </span>
                  <span className="text-[10px] font-bold tracking-widest bg-shimanzu-red text-white px-1.5 py-0.5 rounded">
                    JAPAN
                  </span>
                </div>
                <div className="text-xs text-emerald-400 font-medium tracking-wide">
                  Growing with trust
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
              Shimanzu Chemicals Pvt. Ltd. delivers Japanese formulation rigor and high-performance agrochemical solutions engineered for Indian crops, empowering over 1,200 distributors and millions of farming families nationwide.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-lg bg-emerald-950/80 border border-emerald-800/60 text-emerald-300 text-xs font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>{COMPANY_DATA.certification}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Product Families */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-l-2 border-emerald-500 pl-2">
              Product Families
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li>
                <Link
                  href="/products/insecticides"
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-emerald-400 transition-transform group-hover:translate-x-0.5" />
                  Insecticides
                </Link>
              </li>
              <li>
                <Link
                  href="/products/fungicides"
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-emerald-400 transition-transform group-hover:translate-x-0.5" />
                  Fungicides
                </Link>
              </li>
              <li>
                <Link
                  href="/products/herbicides"
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-emerald-400 transition-transform group-hover:translate-x-0.5" />
                  Herbicides
                </Link>
              </li>
              <li>
                <Link
                  href="/products/pgr-fertilizers"
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-emerald-400 transition-transform group-hover:translate-x-0.5" />
                  PGR & Fertilizers
                </Link>
              </li>
              <li className="pt-2 border-t border-slate-800">
                <Link
                  href="/products"
                  className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1"
                >
                  View All Products →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company & Science */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-l-2 border-emerald-500 pl-2">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li>
                <Link href="/about" className="hover:text-emerald-400 transition-colors">
                  About Shimanzu
                </Link>
              </li>
              <li>
                <Link href="/about#values" className="hover:text-emerald-400 transition-colors">
                  Vision, Mission & Values
                </Link>
              </li>
              <li>
                <Link href="/crop-solutions" className="hover:text-emerald-400 transition-colors">
                  Crop Solutions
                </Link>
              </li>
              <li>
                <Link href="/research" className="hover:text-emerald-400 transition-colors">
                  Research & Innovation
                </Link>
              </li>
              <li>
                <Link href="/quality" className="hover:text-emerald-400 transition-colors">
                  Quality & Sustainability
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-emerald-400 transition-colors">
                  Agronomy Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Official Contact & Headquarters */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-l-2 border-shimanzu-red pl-2">
              Corporate Office
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{COMPANY_DATA.corporateOffice}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  Toll-Free:{" "}
                  <strong className="text-white">{COMPANY_DATA.tollFree}</strong>
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`mailto:${COMPANY_DATA.email}`}
                  className="hover:text-emerald-400 transition-colors"
                >
                  {COMPANY_DATA.email}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{COMPANY_DATA.website}</span>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold border border-slate-700 transition-colors"
                >
                  <HeartHandshake className="w-3.5 h-3.5 text-emerald-400" />
                  Become a Distributor
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {COMPANY_DATA.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="text-slate-400 font-medium">Brand: {COMPANY_DATA.brand}</span>
            <span>•</span>
            <span className="text-slate-400 font-medium">&ldquo;{COMPANY_DATA.tagline}&rdquo;</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
