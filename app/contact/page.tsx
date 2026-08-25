import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ContactForm } from "@/components/forms/ContactForm";
import { COMPANY_DATA } from "@/data/company";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  Building2,
  Users2,
  Headphones,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Hyderabad Crop Science Corporate Office",
  description:
    "Get in touch with Hyderabad Crop Science Pvt. Ltd. Reach our agronomy advisory, commercial sales division, and corporate headquarters.",
};

export default function ContactPage() {
  const breadcrumbs = [{ label: "Contact Us" }];

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumbs */}
      <div className="bg-agri-surface border-b border-gray-200">
        <Breadcrumbs items={breadcrumbs} />
      </div>

      {/* Header Banner */}
      <section className="py-10 lg:py-14 bg-agri-surface border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-700 bg-white px-3 py-1 rounded border border-brand-200 inline-block shadow-xs">
              Direct Communication
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-agri-dark tracking-tight">
              Get in Touch with Our Team
            </h1>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Have questions regarding our product compositions, agronomic field application, or commercial supply? Our dedicated team is here to assist you.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-12 lg:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Corporate Info & Departments */}
          <div className="lg:col-span-5 space-y-6">
            {/* Headquarters Card */}
            <div className="bg-agri-surface rounded-lg border border-gray-200 p-6 space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-gray-200">
                <Building2 className="w-5 h-5 text-agri-deep" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-agri-dark">
                  Corporate Headquarters
                </h3>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-gray-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-brand-600 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-bold text-agri-dark block">Registered Office:</span>
                    <p className="text-gray-600 leading-relaxed mt-0.5">
                      {COMPANY_DATA.contact.address.line1},<br />
                      {COMPANY_DATA.contact.address.line2},<br />
                      {COMPANY_DATA.contact.address.city}, {COMPANY_DATA.contact.address.state} - {COMPANY_DATA.contact.address.pincode}, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-brand-600 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-bold text-agri-dark block">Direct Telephones:</span>
                    <a href={`tel:${COMPANY_DATA.contact.phone}`} className="text-brand-700 hover:underline font-semibold block">
                      {COMPANY_DATA.contact.phone}
                    </a>
                    {COMPANY_DATA.contact.tollFree && (
                      <span className="text-xs text-gray-600 block mt-0.5">
                        Toll-Free Helpline: <span className="font-bold text-agri-dark">{COMPANY_DATA.contact.tollFree}</span>
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-brand-600 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-bold text-agri-dark block">Official Correspondence:</span>
                    <a href={`mailto:${COMPANY_DATA.contact.email}`} className="text-brand-700 hover:underline font-medium block">
                      {COMPANY_DATA.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-brand-600 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-bold text-agri-dark block">Operational Timings:</span>
                    <span className="text-gray-600 text-xs">{COMPANY_DATA.contact.workingHours}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Department Emails */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-agri-dark pb-2 border-b border-gray-100">
                Departmental Enquiries
              </h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between items-center py-1">
                  <span className="text-gray-600">Commercial Sales:</span>
                  <a href={`mailto:${COMPANY_DATA.contact.salesEmail}`} className="font-bold text-agri-deep hover:underline">
                    {COMPANY_DATA.contact.salesEmail}
                  </a>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-gray-600">Distributor Network:</span>
                  <a href={`mailto:${COMPANY_DATA.contact.distributorEmail}`} className="font-bold text-agri-deep hover:underline">
                    {COMPANY_DATA.contact.distributorEmail}
                  </a>
                </div>
              </div>
            </div>

            {/* Dealership Banner */}
            <div className="p-6 bg-agri-deep rounded-lg border border-agri-forest text-white space-y-3">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-brand-300" />
                <h4 className="text-sm font-bold">Become a Channel Partner</h4>
              </div>
              <p className="text-xs text-gray-200 leading-relaxed">
                Looking to distribute Hyderabad Crop Science products in your district or state? Apply directly via our distributor portal.
              </p>
              <Link
                href="/distributors"
                className="inline-block px-4 py-2 text-xs font-bold text-agri-deep bg-white hover:bg-brand-50 rounded transition-colors"
              >
                Distributor Application Portal &rarr;
              </Link>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Map Location Section */}
      <section className="py-10 bg-agri-panel border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-agri-deep" />
            <h3 className="text-base font-bold text-agri-dark">
              Location Map &amp; Accessibility
            </h3>
          </div>
          <div className="w-full h-64 sm:h-72 bg-gray-200 rounded-lg border border-gray-300 flex items-center justify-center p-6 text-center text-gray-600">
            <div className="space-y-1">
              <p className="text-xs font-bold uppercase tracking-wider text-agri-dark">
                Industrial Development Corridor, Hyderabad, Telangana - 500051
              </p>
              <p className="text-xs text-gray-500 max-w-md mx-auto">
                Centrally connected via major highway freight routes and state transport corridors for timely logistics and product dispatch.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
