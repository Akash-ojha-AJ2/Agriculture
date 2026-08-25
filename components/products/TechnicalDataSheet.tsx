"use client";

import React, { useState } from "react";
import {
  FileText,
  ShieldCheck,
  FlaskConical,
  Target,
  Sprout,
  AlertTriangle,
  Download,
  Info,
  CheckCircle2,
} from "lucide-react";
import { Product } from "@/data/products";

interface TechnicalDataSheetProps {
  product: Product;
}

export function TechnicalDataSheet({ product }: TechnicalDataSheetProps) {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [downloadName, setDownloadName] = useState("");
  const [downloadPhone, setDownloadPhone] = useState("");
  const [downloaded, setDownloaded] = useState(false);

  const handleDownloadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!downloadName || !downloadPhone) return;
    setDownloaded(true);
  };

  return (
    <div className="space-y-10">
      {/* 1. Mode of Action & Biochemical Mechanism */}
      <section className="bg-white rounded-lg border border-gray-200 p-6 sm:p-8 space-y-4">
        <div className="flex items-center gap-2 pb-3 border-b border-gray-100">
          <FlaskConical className="w-5 h-5 text-brand-600" />
          <h2 className="text-lg font-bold text-agri-dark">
            Mode of Action &amp; Formulation Chemistry
          </h2>
        </div>
        <p className="text-sm text-gray-700 leading-relaxed">
          {product.modeOfAction}
        </p>
      </section>

      {/* 2. Key Agronomic Benefits */}
      <section className="bg-white rounded-lg border border-gray-200 p-6 sm:p-8 space-y-4">
        <div className="flex items-center gap-2 pb-3 border-b border-gray-100">
          <ShieldCheck className="w-5 h-5 text-brand-600" />
          <h2 className="text-lg font-bold text-agri-dark">
            Key Agronomic Benefits
          </h2>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
          {product.keyBenefits.map((benefit, idx) => (
            <li key={idx} className="flex items-start gap-2.5 p-3 rounded-md bg-agri-surface border border-gray-100 text-xs sm:text-sm text-gray-700">
              <CheckCircle2 className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 3. Recommended Crops & Target Pests / Weeds */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Recommended Crops */}
        <section className="bg-white rounded-lg border border-gray-200 p-6 space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-gray-100">
            <Sprout className="w-5 h-5 text-brand-600" />
            <h2 className="text-base font-bold text-agri-dark">
              Recommended Crops
            </h2>
          </div>
          <div className="flex flex-wrap gap-2 pt-1">
            {product.recommendedCrops.map((crop, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-md bg-brand-50 border border-brand-200 text-xs font-bold text-agri-deep"
              >
                {crop}
              </span>
            ))}
          </div>
        </section>

        {/* Target Pests / Pathogens / Weeds */}
        <section className="bg-white rounded-lg border border-gray-200 p-6 space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-gray-100">
            <Target className="w-5 h-5 text-brand-600" />
            <h2 className="text-base font-bold text-agri-dark">
              Target Pests &amp; Spectrum
            </h2>
          </div>
          <ul className="space-y-1.5 pt-1 text-xs text-gray-700">
            {product.targetPests.map((pest, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-600 flex-shrink-0" />
                <span>{pest}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* 4. Technical Specifications Table */}
      <section className="bg-white rounded-lg border border-gray-200 p-6 sm:p-8 space-y-4">
        <div className="flex items-center gap-2 pb-3 border-b border-gray-100">
          <Info className="w-5 h-5 text-brand-600" />
          <h2 className="text-lg font-bold text-agri-dark">
            Technical &amp; Regulatory Specifications
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-xs sm:text-sm text-left border-collapse">
            <tbody>
              <tr className="border-b border-gray-100">
                <th className="py-2.5 px-3 bg-agri-surface font-bold text-gray-700 w-1/3">
                  Product Trade Name
                </th>
                <td className="py-2.5 px-3 font-semibold text-agri-dark">
                  {product.name}
                </td>
              </tr>
              <tr className="border-b border-gray-100">
                <th className="py-2.5 px-3 bg-agri-surface font-bold text-gray-700">
                  Active Composition
                </th>
                <td className="py-2.5 px-3 text-gray-800">
                  {product.composition}
                </td>
              </tr>
              <tr className="border-b border-gray-100">
                <th className="py-2.5 px-3 bg-agri-surface font-bold text-gray-700">
                  Formulation Type
                </th>
                <td className="py-2.5 px-3 text-gray-800">
                  {product.formulation}
                </td>
              </tr>
              <tr className="border-b border-gray-100">
                <th className="py-2.5 px-3 bg-agri-surface font-bold text-gray-700">
                  Chemical Group
                </th>
                <td className="py-2.5 px-3 text-gray-800">
                  {product.technicalSpecs?.chemicalGroup || "Technical info will be updated soon."}
                </td>
              </tr>
              <tr className="border-b border-gray-100">
                <th className="py-2.5 px-3 bg-agri-surface font-bold text-gray-700">
                  Toxicity Classification
                </th>
                <td className="py-2.5 px-3 text-gray-800">
                  {product.technicalSpecs?.toxicityClass || "Classified per CIB&RC statutory norms"}
                </td>
              </tr>
              <tr className="border-b border-gray-100">
                <th className="py-2.5 px-3 bg-agri-surface font-bold text-gray-700">
                  Shelf Life
                </th>
                <td className="py-2.5 px-3 text-gray-800">
                  {product.technicalSpecs?.shelfLife || "2 Years from date of manufacturing"}
                </td>
              </tr>
              <tr>
                <th className="py-2.5 px-3 bg-agri-surface font-bold text-gray-700">
                  Available Pack Sizes
                </th>
                <td className="py-2.5 px-3 text-gray-800">
                  {product.packSizes.join(", ")}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 5. Application Information & Stewardship */}
      {product.applicationGuide && (
        <section className="bg-white rounded-lg border border-gray-200 p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-gray-100">
            <AlertTriangle className="w-5 h-5 text-amber-600" />
            <h2 className="text-lg font-bold text-agri-dark">
              Application Guidelines &amp; Safety Stewardship
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-3.5 rounded bg-agri-surface border border-gray-200">
              <span className="text-xs font-bold text-gray-700 block">Method of Application:</span>
              <span className="text-xs text-gray-800 mt-1 block font-medium">
                {product.applicationGuide.methodOfApplication}
              </span>
            </div>
            <div className="p-3.5 rounded bg-agri-surface border border-gray-200">
              <span className="text-xs font-bold text-gray-700 block">Recommended Water Volume:</span>
              <span className="text-xs text-gray-800 mt-1 block font-medium">
                {product.applicationGuide.recommendedWaterVolume}
              </span>
            </div>
          </div>

          {product.applicationGuide.waitingPeriodDays && (
            <div className="p-3.5 rounded bg-brand-50 border border-brand-200 text-xs text-agri-dark">
              <span className="font-bold">Waiting Period / Pre-Harvest Interval (PHI): </span>
              <span>{product.applicationGuide.waitingPeriodDays}</span>
            </div>
          )}

          <div className="space-y-2 pt-2">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-700 block">
              Precautionary Measures:
            </span>
            <ul className="space-y-1 text-xs text-gray-600 list-disc list-inside">
              {product.applicationGuide.safetyPrecautions.map((sec, idx) => (
                <li key={idx}>{sec}</li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* 6. Technical Brochure Download Card */}
      <section className="bg-agri-surface rounded-lg border border-gray-200 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <FileText className="w-8 h-8 text-agri-deep flex-shrink-0" />
          <div>
            <h3 className="text-sm font-bold text-agri-dark">
              Official Technical Product Sheet
            </h3>
            <p className="text-xs text-gray-600">
              Download complete chemical composition, IRAC classification, and agronomic guidelines for {product.name}.
            </p>
          </div>
        </div>
        <button
          onClick={() => setDownloadModalOpen(true)}
          className="px-4 py-2.5 text-xs font-bold text-white bg-agri-deep hover:bg-agri-forest rounded-md shadow-xs transition-colors flex items-center gap-1.5 whitespace-nowrap"
        >
          <Download className="w-4 h-4" />
          <span>Download Product Brochure</span>
        </button>
      </section>

      {/* Brochure Request Modal */}
      {downloadModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-lg max-w-md w-full p-6 space-y-4 shadow-2xl border border-gray-200">
            {!downloaded ? (
              <form onSubmit={handleDownloadSubmit} className="space-y-3">
                <h3 className="text-base font-bold text-agri-dark">
                  Download {product.name} Technical Leaflet
                </h3>
                <p className="text-xs text-gray-600">
                  Please provide your details to access the certified technical specification sheet.
                </p>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={downloadName}
                    onChange={(e) => setDownloadName(e.target.value)}
                    placeholder="e.g. Ramesh Patel"
                    className="w-full p-2 text-xs border border-gray-300 rounded focus:ring-2 focus:ring-brand-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Mobile Number</label>
                  <input
                    type="tel"
                    required
                    value={downloadPhone}
                    onChange={(e) => setDownloadPhone(e.target.value)}
                    placeholder="e.g. 9876543210"
                    className="w-full p-2 text-xs border border-gray-300 rounded focus:ring-2 focus:ring-brand-500"
                  />
                </div>

                <div className="pt-2 flex items-center justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setDownloadModalOpen(false)}
                    className="px-3 py-2 text-xs font-semibold text-gray-600 hover:bg-gray-100 rounded"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 text-xs font-bold text-white bg-agri-deep hover:bg-agri-forest rounded"
                  >
                    Confirm &amp; Access PDF
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-4 space-y-3">
                <CheckCircle2 className="w-10 h-10 text-brand-600 mx-auto" />
                <h4 className="text-base font-bold text-agri-dark">
                  Leaflet Access Granted
                </h4>
                <p className="text-xs text-gray-600">
                  Technical brochure data for <span className="font-bold">{product.name} ({product.composition})</span> has been prepared.
                </p>
                <div className="p-3 bg-agri-surface border border-gray-200 rounded text-left text-xs space-y-1">
                  <div><span className="font-bold">Trade Name:</span> {product.name}</div>
                  <div><span className="font-bold">Active:</span> {product.composition}</div>
                  <div><span className="font-bold">Manufacturer:</span> Hyderabad Crop Science Pvt. Ltd.</div>
                </div>
                <button
                  onClick={() => {
                    setDownloaded(false);
                    setDownloadModalOpen(false);
                  }}
                  className="px-4 py-2 text-xs font-bold text-white bg-agri-deep rounded hover:bg-agri-forest"
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
