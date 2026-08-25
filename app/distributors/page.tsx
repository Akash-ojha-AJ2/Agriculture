import React from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { DistributorForm } from "@/components/forms/DistributorForm";
import { COMPANY_DATA } from "@/data/company";
import {
  ShieldCheck,
  TrendingUp,
  Truck,
  Award,
  Users2,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Partner With Us | Become a Distributor / Dealer",
  description:
    "Partner with Hyderabad Crop Science Pvt. Ltd. Join our growing network of agricultural distributors, dealers, and rural channel partners across India.",
};

export default function DistributorsPage() {
  const breadcrumbs = [{ label: "Distributors & Partners" }];

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
              Commercial Partnerships
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-agri-dark tracking-tight">
              Partner With Hyderabad Crop Science
            </h1>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Expand your agri-business with high-demand crop protection and crop nutrition chemistries backed by proven field efficacy and dependable supply reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits of Dealership Network */}
      <section className="py-12 lg:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-agri-surface rounded-lg border border-gray-200 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-brand-100 flex items-center justify-center text-agri-deep">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-agri-dark">High Efficacy Portfolio</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Field-tested agrochemical formulations that farmers trust for fast pest knockdown and extended crop protection.
            </p>
          </div>

          <div className="p-6 bg-agri-surface rounded-lg border border-gray-200 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-800">
              <Truck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-agri-dark">Consistent Supply Chain</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Timely product dispatch during peak Kharif and Rabi agricultural seasons to prevent dealer stock-outs.
            </p>
          </div>

          <div className="p-6 bg-agri-surface rounded-lg border border-gray-200 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-800">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-agri-dark">Commercial Growth</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Transparent trade terms, structured distributor margins, and attractive channel loyalty programs.
            </p>
          </div>

          <div className="p-6 bg-agri-surface rounded-lg border border-gray-200 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-brand-100 flex items-center justify-center text-agri-deep">
              <Users2 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-agri-dark">Field Agronomy Support</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Technical training for dealer staff, farmer awareness meetings, and multi-lingual marketing literature.
            </p>
          </div>
        </div>

        {/* Form and Criteria Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Criteria & Expectations */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 bg-agri-panel rounded-lg border border-gray-200 space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-gray-200">
                <ShieldCheck className="w-5 h-5 text-agri-deep" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-agri-dark">
                  Channel Partner Criteria
                </h3>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-gray-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
                  <span>Valid statutory State Pest Control / Insecticide Retail/Wholesale License.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
                  <span>Established retail dealer network across rural talukas / blocks.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
                  <span>Adequate, secure godown facility adhering to chemical storage safety norms.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
                  <span>Strong financial track record and commitment to ethical farmer advisory.</span>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-white rounded-lg border border-gray-200 text-xs text-gray-600 space-y-2">
              <span className="font-bold text-agri-dark block text-sm">
                Need Direct Commercial Assistance?
              </span>
              <p>
                You may also reach our Channel Development Division directly via email:
              </p>
              <a
                href={`mailto:${COMPANY_DATA.contact.distributorEmail}`}
                className="font-bold text-agri-deep hover:underline block text-xs"
              >
                {COMPANY_DATA.contact.distributorEmail}
              </a>
              <p className="text-[11px] text-gray-500 pt-2">
                Phone: {COMPANY_DATA.contact.phone} (Ext. 204)
              </p>
            </div>
          </div>

          {/* Right: Application Form */}
          <div className="lg:col-span-7">
            <DistributorForm />
          </div>
        </div>
      </section>
    </div>
  );
}
