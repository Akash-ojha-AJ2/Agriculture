"use client";

import React, { useState } from "react";
import { ShieldCheck, Send, CheckCircle2 } from "lucide-react";

export function DistributorForm() {
  const [formData, setFormData] = useState({
    name: "",
    firmName: "",
    phone: "",
    email: "",
    city: "",
    state: "Telangana",
    experience: "3-5 years",
    turnover: "50 Lakh - 1 Crore",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const indianStates = [
    "Telangana",
    "Andhra Pradesh",
    "Maharashtra",
    "Karnataka",
    "Gujarat",
    "Madhya Pradesh",
    "Punjab",
    "Haryana",
    "Uttar Pradesh",
    "Rajasthan",
    "Tamil Nadu",
    "West Bengal",
    "Bihar",
    "Odisha",
    "Chhattisgarh",
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Applicant Name is required";
    if (!formData.firmName.trim()) errs.firmName = "Firm / Business Name is required";
    if (!formData.phone.trim()) {
      errs.phone = "Contact number is required";
    } else if (!/^[0-9+ -]{10,14}$/.test(formData.phone.trim())) {
      errs.phone = "Please enter a valid 10-digit mobile number";
    }
    if (!formData.city.trim()) errs.city = "City / District is required";
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  if (submitted) {
    return (
      <div className="p-8 bg-brand-50 rounded-lg border border-brand-300 text-center space-y-3">
        <CheckCircle2 className="w-12 h-12 text-brand-700 mx-auto" />
        <h3 className="text-xl font-bold text-agri-dark">
          Distributor Application Submitted
        </h3>
        <p className="text-xs sm:text-sm text-gray-700 max-w-lg mx-auto">
          Thank you, <span className="font-semibold">{formData.name}</span> of <span className="font-semibold">{formData.firmName}</span>. Your dealership application for <span className="font-semibold">{formData.city}, {formData.state}</span> has been logged. Our commercial territory manager will get in touch with you shortly.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({
              name: "",
              firmName: "",
              phone: "",
              email: "",
              city: "",
              state: "Telangana",
              experience: "3-5 years",
              turnover: "50 Lakh - 1 Crore",
              message: "",
            });
          }}
          className="mt-4 px-4 py-2 text-xs font-bold text-agri-deep bg-white border border-brand-300 rounded hover:bg-brand-100 transition-colors"
        >
          Submit Another Application
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 sm:p-8 rounded-lg border border-gray-200 shadow-sm">
      <div className="flex items-center gap-2 pb-2 border-b border-gray-100 mb-2">
        <ShieldCheck className="w-5 h-5 text-brand-600" />
        <h3 className="text-sm font-bold uppercase tracking-wider text-agri-dark">
          Channel Partner Application Form
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Name */}
        <div>
          <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
            Applicant Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Suresh Patel"
            className={`w-full p-2.5 text-xs sm:text-sm bg-agri-surface border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500 ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.name && <p className="text-[11px] text-red-600 mt-1">{errors.name}</p>}
        </div>

        {/* Firm Name */}
        <div>
          <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
            Firm / Company Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.firmName}
            onChange={(e) => setFormData({ ...formData, firmName: e.target.value })}
            placeholder="e.g. Patel Agro Agency"
            className={`w-full p-2.5 text-xs sm:text-sm bg-agri-surface border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500 ${
              errors.firmName ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.firmName && <p className="text-[11px] text-red-600 mt-1">{errors.firmName}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Phone */}
        <div>
          <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
            Contact Mobile <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="e.g. 9823456789"
            className={`w-full p-2.5 text-xs sm:text-sm bg-agri-surface border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500 ${
              errors.phone ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.phone && <p className="text-[11px] text-red-600 mt-1">{errors.phone}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
            Email Address
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="e.g. patelagro@example.com"
            className="w-full p-2.5 text-xs sm:text-sm bg-agri-surface border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* City / District */}
        <div>
          <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
            City / District <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            placeholder="e.g. Warangal / Nizamabad"
            className={`w-full p-2.5 text-xs sm:text-sm bg-agri-surface border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500 ${
              errors.city ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.city && <p className="text-[11px] text-red-600 mt-1">{errors.city}</p>}
        </div>

        {/* State */}
        <div>
          <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
            State <span className="text-red-500">*</span>
          </label>
          <select
            value={formData.state}
            onChange={(e) => setFormData({ ...formData, state: e.target.value })}
            className="w-full p-2.5 text-xs sm:text-sm bg-agri-surface border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500"
          >
            {indianStates.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Experience */}
        <div>
          <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
            Agrochemical Business Experience
          </label>
          <select
            value={formData.experience}
            onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
            className="w-full p-2.5 text-xs sm:text-sm bg-agri-surface border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500"
          >
            <option value="New to Agrochemicals">New Venture / Entering Agri-Inputs</option>
            <option value="1-3 years">1 - 3 Years</option>
            <option value="3-5 years">3 - 5 Years</option>
            <option value="5-10 years">5 - 10 Years</option>
            <option value="10+ years">More than 10 Years</option>
          </select>
        </div>

        {/* Turnover Range */}
        <div>
          <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
            Estimated Annual Turnover
          </label>
          <select
            value={formData.turnover}
            onChange={(e) => setFormData({ ...formData, turnover: e.target.value })}
            className="w-full p-2.5 text-xs sm:text-sm bg-agri-surface border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500"
          >
            <option value="Below 25 Lakh">Below ₹25 Lakh</option>
            <option value="25 Lakh - 50 Lakh">₹25 Lakh - ₹50 Lakh</option>
            <option value="50 Lakh - 1 Crore">₹50 Lakh - ₹1 Crore</option>
            <option value="1 Crore - 5 Crore">₹1 Crore - ₹5 Crore</option>
            <option value="5 Crore+">₹5 Crore+</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
          Retail Network &amp; Infrastructure Details
        </label>
        <textarea
          rows={3}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Mention your retail network coverage, godown facility, target talukas/villages..."
          className="w-full p-2.5 text-xs sm:text-sm bg-agri-surface border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 px-4 text-xs sm:text-sm font-bold text-white bg-agri-deep hover:bg-agri-forest rounded-md shadow-sm transition-colors flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <span>Transmitting Dealership Request...</span>
        ) : (
          <>
            <Send className="w-4 h-4" />
            <span>Submit Dealership Enquiry</span>
          </>
        )}
      </button>

      <p className="text-[11px] text-gray-500 text-center">
        Applications are processed confidentially by the Commercial Partnerships Division.
      </p>
    </form>
  );
}
