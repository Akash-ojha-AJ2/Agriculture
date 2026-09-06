"use client";

import React, { useState } from "react";
import { Send, Phone, Download } from "lucide-react";
import { EnquiryModal } from "@/components/EnquiryModal";
import { COMPANY_DATA } from "@/data/company";

interface ProductDetailActionsProps {
  productName: string;
}

export const ProductDetailActions: React.FC<ProductDetailActionsProps> = ({
  productName,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="pt-4 flex flex-wrap items-center gap-4">
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-6 py-3 rounded-xl bg-shimanzu-red hover:bg-shimanzu-darkred text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-2"
        >
          <Send className="w-4 h-4" />
          <span>ENQUIRE ABOUT THIS PRODUCT</span>
        </button>

        <a
          href={`tel:${COMPANY_DATA.tollFree}`}
          className="px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-bold border border-slate-200 transition-colors flex items-center gap-2"
        >
          <Phone className="w-4 h-4 text-emerald-800" />
          <span>Toll-Free Helpline</span>
        </a>
      </div>

      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialProduct={productName}
      />
    </>
  );
};
