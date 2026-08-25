"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    organization: "",
    subject: "Product Enquiry",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Full Name is required";
    if (!formData.phone.trim()) {
      errs.phone = "Phone number is required";
    } else if (!/^[0-9+ -]{10,14}$/.test(formData.phone.trim())) {
      errs.phone = "Please enter a valid 10-digit phone number";
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) errs.message = "Message cannot be empty";
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

    // Simulate clean form submission
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
          Inquiry Successfully Recorded
        </h3>
        <p className="text-xs sm:text-sm text-gray-700 max-w-md mx-auto">
          Thank you, <span className="font-semibold">{formData.name}</span>. Your inquiry regarding &quot;{formData.subject}&quot; has been noted. Our corporate team will reach out to you at <span className="font-semibold">{formData.phone}</span>.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({
              name: "",
              phone: "",
              email: "",
              organization: "",
              subject: "Product Enquiry",
              message: "",
            });
          }}
          className="mt-4 px-4 py-2 text-xs font-bold text-agri-deep bg-white border border-brand-300 rounded hover:bg-brand-100 transition-colors"
        >
          Send Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 sm:p-8 rounded-lg border border-gray-200 shadow-xs">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Name */}
        <div>
          <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Ramesh Kumar"
            className={`w-full p-2.5 text-xs sm:text-sm bg-agri-surface border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500 ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.name && <p className="text-[11px] text-red-600 mt-1">{errors.name}</p>}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="e.g. 9876543210"
            className={`w-full p-2.5 text-xs sm:text-sm bg-agri-surface border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500 ${
              errors.phone ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.phone && <p className="text-[11px] text-red-600 mt-1">{errors.phone}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Email */}
        <div>
          <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
            Email Address
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="e.g. contact@example.com"
            className={`w-full p-2.5 text-xs sm:text-sm bg-agri-surface border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500 ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.email && <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>}
        </div>

        {/* Organization */}
        <div>
          <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
            Firm / Organization
          </label>
          <input
            type="text"
            value={formData.organization}
            onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
            placeholder="e.g. Kisan Agro Center / Farm"
            className="w-full p-2.5 text-xs sm:text-sm bg-agri-surface border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500"
          />
        </div>
      </div>

      {/* Subject */}
      <div>
        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
          Subject / Inquiry Nature <span className="text-red-500">*</span>
        </label>
        <select
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          className="w-full p-2.5 text-xs sm:text-sm bg-agri-surface border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500"
        >
          <option value="Product Enquiry">Product Technical Information / Dosage</option>
          <option value="Dealership & Distribution">Distributor / Dealership Opportunities</option>
          <option value="Institutional Orders">Institutional / Bulk Supply</option>
          <option value="Farmer Guidance">Field Advisory / Pest Control Advice</option>
          <option value="General Corporate">General Corporate Query</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
          Your Message / Requirement Details <span className="text-red-500">*</span>
        </label>
        <textarea
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Please specify your crop, pest challenge, or business inquiry details..."
          className={`w-full p-2.5 text-xs sm:text-sm bg-agri-surface border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500 ${
            errors.message ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.message && <p className="text-[11px] text-red-600 mt-1">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 px-4 text-xs sm:text-sm font-bold text-white bg-agri-deep hover:bg-agri-forest rounded-md shadow-sm transition-colors flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <span>Submitting Inquiry...</span>
        ) : (
          <>
            <Send className="w-4 h-4" />
            <span>Submit Message</span>
          </>
        )}
      </button>

      <p className="text-[11px] text-gray-500 text-center">
        Our agronomy &amp; customer support team responds within 24–48 business hours.
      </p>
    </form>
  );
}
