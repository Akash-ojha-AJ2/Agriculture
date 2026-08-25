import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, AlertTriangle, ShieldCheck } from "lucide-react";
import { CropSolution } from "@/data/crops";

interface CropCardProps {
  crop: CropSolution;
}

export function CropCard({ crop }: CropCardProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:border-brand-500 hover:shadow-md transition-all flex flex-col group">
      {/* Crop Visual Container */}
      <div className="relative w-full h-44 sm:h-48 bg-agri-dark">
        <Image
          src={crop.image}
          alt={`${crop.name} - ${crop.hindiName}`}
          fill
          className="object-cover transition-transform duration-200 group-hover:scale-102"
        />
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded text-[11px] font-bold text-agri-dark border border-gray-200">
          {crop.scientificName}
        </div>
      </div>

      {/* Crop Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-baseline justify-between">
            <Link href={`/crops/${crop.slug}`} className="group-hover:text-brand-700 transition-colors">
              <h3 className="text-lg font-black text-agri-dark tracking-tight">
                {crop.name}
              </h3>
            </Link>
            <span className="text-xs font-semibold text-brand-700 bg-brand-50 px-2 py-0.5 rounded">
              {crop.hindiName}
            </span>
          </div>

          <p className="text-xs text-gray-600 mt-2 line-clamp-2 leading-relaxed">
            {crop.shortOverview}
          </p>

          {/* Major Challenges Badges */}
          <div className="mt-3 pt-3 border-t border-gray-100 space-y-1.5">
            <div className="text-[11px] font-bold text-gray-700 flex items-center gap-1">
              <AlertTriangle className="w-3 h-3 text-amber-600" />
              <span>Key Challenges Handled:</span>
            </div>
            <ul className="text-xs text-gray-600 space-y-1 pl-1">
              {crop.majorChallenges.slice(0, 2).map((ch, idx) => (
                <li key={idx} className="flex items-center gap-1.5 text-[11px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                  <span className="truncate">{ch.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Action Link */}
        <div className="pt-2">
          <Link
            href={`/crops/${crop.slug}`}
            className="w-full py-2 px-3 text-xs font-bold text-agri-deep bg-agri-surface hover:bg-agri-deep hover:text-white border border-gray-200 rounded transition-colors flex items-center justify-center gap-1.5"
          >
            <span>View {crop.name} Protection Plan</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
