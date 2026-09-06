import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  BookOpen,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { RESOURCES_DATA } from "@/data/resources";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Agronomy Resources & Field Advisories | Shimanzu Chemicals",
  description:
    "Expert agronomy guides, safe agrochemical spraying practices, integrated disease management, and crop nutrition advisories from Shimanzu Chemicals.",
};

export default function ResourcesPage() {
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
                FARMER & DEALER KNOWLEDGE
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
              Agronomy Resources & Field Guides
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Scientific recommendations, safe chemical application stewardship, and seasonal crop advisories to protect farm yields.
            </p>
          </div>
        </div>
      </section>

      {/* Main Articles List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {RESOURCES_DATA.map((article) => (
          <article
            key={article.id}
            id={article.slug}
            className="scroll-mt-28 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-md space-y-6"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-50 text-emerald-900 border border-emerald-200">
                  {article.category}
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  {article.date}
                </span>
              </div>
              <span className="text-xs font-semibold text-slate-500">
                {article.readTime}
              </span>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
                {article.title}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {article.summary}
              </p>
            </div>

            {/* Content Paragraphs */}
            <div className="space-y-3 text-slate-700 text-xs sm:text-sm leading-relaxed bg-slate-50 p-6 rounded-2xl border border-slate-100">
              {article.content.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Key Field Tips */}
            {article.keyTips && (
              <div className="space-y-2 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-950 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                  Key Agronomic Recommendations
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {article.keyTips.map((tip, idx) => (
                    <li
                      key={idx}
                      className="p-3 rounded-xl bg-emerald-50/50 border border-emerald-100/60 text-xs text-slate-700 flex items-start gap-2"
                    >
                      <span className="text-emerald-800 font-bold">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </article>
        ))}
      </section>
    </div>
  );
}
