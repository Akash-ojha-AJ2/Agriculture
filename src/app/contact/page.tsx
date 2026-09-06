"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Send,
  CheckCircle2,
  Building2,
  Users,
  ShieldCheck,
} from "lucide-react";
import { COMPANY_DATA } from "@/data/company";
import { SectionHeading } from "@/components/SectionHeading";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    state: "",
    district: "",
    subject: "Product Enquiry",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

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
                GET IN TOUCH
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
              Contact Shimanzu Chemicals
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Connect with our corporate office, agronomy support desk, or regional dealership representatives.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Details + Interactive Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Official Contact Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg space-y-8">
              <div>
                <div className="japanese-hanko text-shimanzu-red border-shimanzu-red mb-2">
                  SHIMANZU JAPAN
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Corporate Headquarters
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Registered Corporate Office & National Operations Hub
                </p>
              </div>

              <div className="space-y-6 text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-emerald-800" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-xs uppercase tracking-wider text-slate-400">
                      Corporate Address
                    </div>
                    <div className="font-medium text-slate-800 mt-0.5 leading-relaxed">
                      {COMPANY_DATA.corporateOffice}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-emerald-800" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-xs uppercase tracking-wider text-slate-400">
                      National Toll-Free Helpline
                    </div>
                    <div className="font-extrabold text-emerald-950 text-base mt-0.5">
                      {COMPANY_DATA.tollFree}
                    </div>
                    <div className="text-[11px] text-slate-500">
                      Available for technical advisory & dealer inquiries
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-emerald-800" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-xs uppercase tracking-wider text-slate-400">
                      Official Corporate Email
                    </div>
                    <a
                      href={`mailto:${COMPANY_DATA.email}`}
                      className="font-medium text-emerald-900 hover:underline mt-0.5 block"
                    >
                      {COMPANY_DATA.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                    <Globe className="w-5 h-5 text-emerald-800" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-xs uppercase tracking-wider text-slate-400">
                      Official Web Portal
                    </div>
                    <div className="font-medium text-slate-800 mt-0.5">
                      {COMPANY_DATA.website}
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <div className="p-4 rounded-2xl bg-emerald-950 text-white space-y-1">
                  <div className="text-xs font-bold text-emerald-300">
                    {COMPANY_DATA.certification}
                  </div>
                  <div className="text-[11px] text-slate-300">
                    Network of {COMPANY_DATA.metrics.distributors} Distributors & {COMPANY_DATA.metrics.dealers} Dealers across India.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Communication Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-lg">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-900">
                  Send an Official Enquiry
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Our regional agronomy and commercial distribution team will respond within 24 business hours.
                </p>
              </div>

              {isSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900">Message Submitted</h4>
                  <p className="text-sm text-slate-600 max-w-sm mx-auto">
                    Thank you, <strong>{formData.name}</strong>. Your enquiry has been routed to the respective zonal manager.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: "",
                        phone: "",
                        email: "",
                        state: "",
                        district: "",
                        subject: "Product Enquiry",
                        message: "",
                      });
                    }}
                    className="mt-4 px-6 py-2.5 bg-emerald-900 text-white text-xs font-bold rounded-xl hover:bg-emerald-800 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Farmer / Dealer / Business Name"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-700 text-slate-800"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="10-digit mobile number"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-700 text-slate-800"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="email@domain.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-700 text-slate-800"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        State & District *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.state}
                        onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                        placeholder="e.g. Punjab, Ludhiana"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-700 text-slate-800"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Subject / Enquiry Type
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-700 text-slate-800 bg-white"
                    >
                      <option value="Product Enquiry">Product Technical Information / Dosage</option>
                      <option value="Distributor Application">Dealership / Distributorship Application</option>
                      <option value="Crop Advisory">Crop Advisory / Agronomy Assistance</option>
                      <option value="Corporate Communication">Corporate & Commercial Communication</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Message / Requirement *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please specify crops, acreages, target product names, or business requirements..."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-700 text-slate-800 resize-none"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 bg-shimanzu-red hover:bg-shimanzu-darkred text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>SUBMIT OFFICIAL ENQUIRY</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
