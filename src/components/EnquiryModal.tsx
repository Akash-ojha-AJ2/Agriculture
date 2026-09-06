"use client";

import React, { useState, useEffect } from "react";
import { X, Send, CheckCircle2, Phone, Mail, MapPin } from "lucide-react";
import { COMPANY_DATA } from "@/data/company";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: string;
  enquiryType?: "Product Enquiry" | "Dealership / Distribution" | "General";
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  initialProduct = "",
  enquiryType = "Product Enquiry",
}) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    state: "",
    district: "",
    type: enquiryType,
    product: initialProduct,
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialProduct) {
      setFormData((prev) => ({ ...prev, product: initialProduct, type: "Product Enquiry" }));
    }
  }, [initialProduct]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setIsSubmitted(false);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-950 to-emerald-900 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="japanese-hanko bg-white text-shimanzu-red border-white mb-2">
            SHIMANZU JAPAN
          </div>
          <h3 className="text-xl font-bold">
            {initialProduct ? `Enquire about ${initialProduct}` : "Corporate & Product Enquiry"}
          </h3>
          <p className="text-xs text-emerald-200 mt-1">
            Connect directly with Shimanzu Chemicals Technical & Distribution Team
          </p>
        </div>

        {/* Content */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">Enquiry Received</h4>
              <p className="text-sm text-slate-600 max-w-xs mx-auto">
                Thank you, <strong>{formData.name}</strong>. Our regional representative will reach out to you within 24 business hours.
              </p>
              <div className="pt-4 border-t border-slate-100 text-xs text-slate-500">
                For immediate assistance, call our Toll-Free Helpline:{" "}
                <strong className="text-emerald-900">{COMPANY_DATA.tollFree}</strong>
              </div>
              <button
                onClick={onClose}
                className="mt-4 px-6 py-2.5 bg-emerald-900 text-white text-sm font-semibold rounded-lg hover:bg-emerald-800 transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-sm">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Full Name"
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-emerald-700 text-slate-800"
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
                    placeholder="10-digit number"
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-emerald-700 text-slate-800"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@domain.com"
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-emerald-700 text-slate-800"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    State / Region *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    placeholder="e.g. Punjab, Maharashtra"
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-emerald-700 text-slate-800"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Enquiry Nature
                </label>
                <select
                  value={formData.type}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      type: e.target.value as any,
                    })
                  }
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-emerald-700 text-slate-800 bg-white"
                >
                  <option value="Product Enquiry">Product Technical Information / Dosage</option>
                  <option value="Dealership / Distribution">Dealership / Distributorship Opportunity</option>
                  <option value="General">Corporate / General Communication</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Message / Specific Requirement
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Mention your crops, acreages, or dealership location..."
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-emerald-700 text-slate-800 resize-none"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-shimanzu-red hover:bg-shimanzu-darkred text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Submit Official Enquiry
                </button>
              </div>

              <div className="text-[11px] text-slate-500 text-center flex items-center justify-center gap-4 pt-2">
                <span className="flex items-center gap-1">
                  <Phone className="w-3 h-3 text-emerald-800" /> {COMPANY_DATA.tollFree}
                </span>
                <span className="flex items-center gap-1">
                  <Mail className="w-3 h-3 text-emerald-800" /> {COMPANY_DATA.email}
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
