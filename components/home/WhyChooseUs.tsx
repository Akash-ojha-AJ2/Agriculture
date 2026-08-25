import React from "react";
import { Microscope, CheckCircle2, Users, Award, LeafyGreen } from "lucide-react";
import { COMPANY_DATA } from "@/data/company";

export function WhyChooseUs() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Microscope":
        return <Microscope className="w-6 h-6 text-brand-700" />;
      case "CheckCircle2":
        return <CheckCircle2 className="w-6 h-6 text-brand-700" />;
      case "Users":
        return <Users className="w-6 h-6 text-brand-700" />;
      case "Award":
        return <Award className="w-6 h-6 text-brand-700" />;
      case "LeafyGreen":
        return <LeafyGreen className="w-6 h-6 text-brand-700" />;
      default:
        return <CheckCircle2 className="w-6 h-6 text-brand-700" />;
    }
  };

  return (
    <section className="py-14 lg:py-20 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-50 px-3 py-1 rounded border border-brand-200 inline-block">
            Our Core Principles
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-agri-dark tracking-tight">
            Why Hyderabad Crop Science?
          </h2>
          <p className="text-sm text-gray-600">
            Our agricultural solutions are built upon five foundational pillars of scientific discipline, manufacturing integrity, and farmer trust.
          </p>
        </div>

        {/* 5 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {COMPANY_DATA.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 bg-agri-surface rounded-lg border border-gray-200 hover:border-brand-500 hover:shadow-sm transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-white border border-gray-200 flex items-center justify-center mb-4">
                {getIcon(pillar.icon)}
              </div>
              <h3 className="text-base font-bold text-agri-dark mb-2">
                {pillar.title}
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}

          {/* 6th Card: Corporate Commitment */}
          <div className="p-6 bg-agri-deep rounded-lg border border-agri-forest text-white flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-brand-300 mb-2">
                Brand Commitment
              </div>
              <h3 className="text-lg font-bold mb-2">
                &quot;{COMPANY_DATA.tagline}&quot;
              </h3>
              <p className="text-xs text-gray-200 leading-relaxed">
                Dedicated to empowering Indian agricultural communities with reliable agrochemical formulations, transparent technical guidance, and sustainable crop health practices.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-agri-forest text-xs font-semibold text-brand-200">
              {COMPANY_DATA.hindiMotto}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
