import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, ShieldCheck, ArrowRight, Award } from "lucide-react";
import { COMPANY_DATA } from "@/data/company";
import { CATEGORIES } from "@/data/categories";
import { CROPS } from "@/data/crops";

export function Footer() {
  return (
    <footer className="bg-agri-dark text-gray-300 border-t-4 border-agri-forest">
      {/* Upper Farmer & Brand Respect Banner */}
      <div className="bg-agri-deep border-b border-agri-forest py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div>
            <p className="text-base sm:text-lg font-bold text-white tracking-wide">
              {COMPANY_DATA.hindiMotto}
            </p>
            <p className="text-xs sm:text-sm text-brand-200 mt-0.5">
              &quot;{COMPANY_DATA.hindiSubmotto}&quot;
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/distributors"
              className="px-4 py-2 text-xs sm:text-sm font-bold text-agri-deep bg-white hover:bg-brand-50 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <ShieldCheck className="w-4 h-4 text-agri-deep" />
              Partner / Dealership Enquiry
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 text-xs sm:text-sm font-bold text-white bg-agri-forest hover:bg-brand-700 border border-brand-500/50 rounded-lg transition-colors"
            >
              Contact Team
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Links Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Column 1: Company Profile */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white p-2.5 rounded-lg inline-block w-64">
              <div className="relative w-full h-10">
                <Image
                  src="/images/logo.svg"
                  alt="Hyderabad Crop Science Pvt. Ltd."
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-md">
              {COMPANY_DATA.legalName} is an Indian agricultural crop-science enterprise committed to formulation excellence, targeted crop protection, and sustainable agricultural productivity.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-brand-300">
              <Award className="w-4 h-4 text-brand-400" />
              <span className="font-semibold">{COMPANY_DATA.tagline}</span>
            </div>
          </div>

          {/* Column 2: Product Categories */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4 border-b border-gray-800 pb-2">
              Products
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/products?category=${cat.slug}`}
                    className="text-gray-300 hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <ArrowRight className="w-3 h-3 text-brand-400" />
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Crop Solutions */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4 border-b border-gray-800 pb-2">
              Crop Solutions
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              {CROPS.map((crop) => (
                <li key={crop.id}>
                  <Link
                    href={`/crops/${crop.slug}`}
                    className="text-gray-300 hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <ArrowRight className="w-3 h-3 text-brand-400" />
                    {crop.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4 border-b border-gray-800 pb-2">
              Corporate Office
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-gray-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-400 flex-shrink-0 mt-0.5" />
                <p>
                  {COMPANY_DATA.contact.address.line1},<br />
                  {COMPANY_DATA.contact.address.line2},<br />
                  {COMPANY_DATA.contact.address.city}, {COMPANY_DATA.contact.address.state} - {COMPANY_DATA.contact.address.pincode}
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-400 flex-shrink-0" />
                <a href={`tel:${COMPANY_DATA.contact.phone}`} className="hover:text-white">
                  {COMPANY_DATA.contact.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-400 flex-shrink-0" />
                <a href={`mailto:${COMPANY_DATA.contact.email}`} className="hover:text-white">
                  {COMPANY_DATA.contact.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-brand-400 flex-shrink-0 mt-0.5" />
                <span className="text-[11px] text-gray-400">
                  {COMPANY_DATA.contact.workingHours}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Regulatory Disclaimer */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-[11px] text-gray-400 space-y-2">
          <p className="leading-relaxed">
            <span className="font-semibold text-gray-300">Agricultural Product Usage Advisory:</span> Always read and strictly follow label instructions and package leaflet directions before use. The chemical formulations displayed on this website are intended for registered agricultural purposes under standard agronomic practices.
          </p>
          <p className="text-gray-400">
            This is a corporate information and product portfolio catalogue of {COMPANY_DATA.legalName}. It is not an e-commerce transactional store.
          </p>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-8 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            &copy; {new Date().getFullYear()} {COMPANY_DATA.legalName}. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-white">About Us</Link>
            <Link href="/research" className="hover:text-white">R&amp;D</Link>
            <Link href="/quality" className="hover:text-white">Quality Assurance</Link>
            <Link href="/distributors" className="hover:text-white">Distributors</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
