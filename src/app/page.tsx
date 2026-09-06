import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  ChevronRight,
  Sparkles,
  Sprout,
  Users,
  Compass,
  Lightbulb,
  Target,
  ArrowRight,
  FlaskConical,
  Award,
  CheckCircle2,
  Layers,
  Phone,
} from "lucide-react";
import { COMPANY_DATA } from "@/data/company";
import { PRODUCT_CATEGORIES, getFeaturedProducts } from "@/data/products";
import { CROPS_DATA } from "@/data/crops";
import { RESOURCES_DATA } from "@/data/resources";
import { SectionHeading } from "@/components/SectionHeading";
import { ProductCard } from "@/components/ProductCard";

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Users":
        return <Users className="w-6 h-6 text-emerald-800" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-6 h-6 text-emerald-800" />;
      case "Lightbulb":
        return <Lightbulb className="w-6 h-6 text-emerald-800" />;
      case "Target":
        return <Target className="w-6 h-6 text-emerald-800" />;
      case "Compass":
        return <Compass className="w-6 h-6 text-emerald-800" />;
      default:
        return <Sparkles className="w-6 h-6 text-emerald-800" />;
    }
  };

  return (
    <div className="space-y-20 sm:space-y-28 pb-20">
      {/* ========================================================================= */}
      {/* SECTION 1: EDITORIAL HERO */}
      {/* ========================================================================= */}
      <section className="relative min-h-[85vh] sm:min-h-[88vh] flex items-center bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-900 text-white overflow-hidden">
        {/* Subtle Background Pattern & Atmospheric Glow */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#2d6a4f_1px,transparent_1px)] [background-size:28px_28px]"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-700/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-shimanzu-red/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 w-full">
          <div className="max-w-3xl space-y-6 sm:space-y-8">
            {/* Japanese Brand Badge */}
            <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-shimanzu-red animate-pulse"></span>
              <span className="text-emerald-300 font-bold tracking-widest">SHIMANZU JAPAN</span>
              <span className="text-slate-400">•</span>
              <span className="text-slate-300">&ldquo;Growing with trust&rdquo;</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] text-white">
              Japanese Precision Formulation for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-200 to-teal-100">
                Indian Agriculture
              </span>
            </h1>

            {/* Authentic Supporting Copy */}
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed font-normal max-w-2xl">
              Manufacturer and supplier of high-performance agrochemicals — Insecticides, Fungicides, Herbicides, and Plant Growth Regulators engineered to protect crop health, maximize yield, and nurture farmer trust.
            </p>

            {/* Key Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/products"
                className="px-7 py-3.5 rounded-xl bg-shimanzu-red hover:bg-shimanzu-darkred text-white text-sm sm:text-base font-bold shadow-lg shadow-red-950/40 hover:shadow-xl transition-all duration-200 flex items-center gap-2 group"
              >
                <span>EXPLORE PRODUCTS</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/about"
                className="px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm sm:text-base font-bold border border-white/25 backdrop-blur-sm transition-all duration-200"
              >
                ABOUT SHIMANZU
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar Japanese Aesthetic Line */}
        <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-emerald-800 via-shimanzu-red to-emerald-800 opacity-80"></div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: TRUST & SCALE METRICS (VERIFIED DATA ONLY) */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 sm:-mt-16 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 sm:p-8 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          <div className="text-center sm:text-left sm:pr-4 pt-4 sm:pt-0">
            <div className="text-3xl sm:text-4xl font-extrabold text-emerald-950 font-mono">
              {COMPANY_DATA.metrics.distributors}
            </div>
            <div className="text-xs sm:text-sm font-bold text-slate-900 mt-1">
              Authorized Distributors
            </div>
            <p className="text-xs text-slate-500 mt-0.5">Nationwide agricultural distribution backbone</p>
          </div>

          <div className="text-center sm:text-left sm:px-4 pt-4 sm:pt-0">
            <div className="text-3xl sm:text-4xl font-extrabold text-emerald-950 font-mono">
              {COMPANY_DATA.metrics.dealers}
            </div>
            <div className="text-xs sm:text-sm font-bold text-slate-900 mt-1">
              Retail Dealers
            </div>
            <p className="text-xs text-slate-500 mt-0.5">Direct touchpoints with Indian farmers</p>
          </div>

          <div className="text-center sm:text-left sm:px-4 pt-4 sm:pt-0">
            <div className="text-3xl sm:text-4xl font-extrabold text-emerald-950 font-mono">
              ISO 9001
            </div>
            <div className="text-xs sm:text-sm font-bold text-slate-900 mt-1">
              ISO 9001:2015 Certified
            </div>
            <p className="text-xs text-slate-500 mt-0.5">Rigorous manufacturing quality standard</p>
          </div>

          <div className="text-center sm:text-left sm:pl-4 pt-4 sm:pt-0">
            <div className="text-3xl sm:text-4xl font-extrabold text-shimanzu-red font-mono">
              4 Families
            </div>
            <div className="text-xs sm:text-sm font-bold text-slate-900 mt-1">
              Crop Protection Matrix
            </div>
            <p className="text-xs text-slate-500 mt-0.5">Insecticides, Fungicides, Herbicides, PGR</p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: ABOUT SHIMANZU (EDITORIAL SPLIT LAYOUT) */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Storytelling Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-slate-900 p-8 sm:p-10 text-white shadow-2xl border border-emerald-800/40">
              <div className="absolute top-0 right-0 w-32 h-32 bg-shimanzu-red/10 rounded-full blur-2xl"></div>
              
              <div className="japanese-hanko bg-white text-shimanzu-red border-white mb-6">
                SHIMANZU JAPAN
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-4">
                Pioneering Precision Crop Science
              </h3>

              <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed mb-8">
                Incorporating advanced formulation techniques and stringent batch control to safeguard Indian agriculture against evolving pests and climatic challenges.
              </p>

              <div className="space-y-4 border-t border-emerald-800/60 pt-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-800/80 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4 text-emerald-300" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">ISO 9001:2015 Certified Operations</div>
                    <div className="text-[11px] text-emerald-200">Systematic quality inspection from raw to pack</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-800/80 flex items-center justify-center shrink-0">
                    <FlaskConical className="w-4 h-4 text-emerald-300" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">High Bio-Efficacy Chemistry</div>
                    <div className="text-[11px] text-emerald-200">Granules, SC, WG, FS, and ZC formulation expertise</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Corporate Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-shimanzu-red"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-900">
                ABOUT SHIMANZU CHEMICALS
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              {COMPANY_DATA.overview.title}
            </h2>

            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              {COMPANY_DATA.overview.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-bold text-emerald-950 hover:text-emerald-700 transition-colors group"
              >
                <span>DISCOVER SHIMANZU HERITAGE & VISION</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: VISION / MISSION / VALUES */}
      {/* ========================================================================= */}
      <section className="bg-slate-100/70 py-20 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="GUIDING PRINCIPLES"
            title="Core Values & Institutional Commitment"
            subtitle="The foundational pillars that guide Shimanzu's relationships with farmers, distributors, and the environment."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {COMPANY_DATA.coreValues.map((val) => (
              <div
                key={val.title}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-4">
                    {getIcon(val.icon)}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">
                    {val.title}
                  </h3>
                  <div className="text-xs font-semibold text-emerald-800 mb-3">
                    {val.tagline}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: PRODUCT PORTFOLIO (4 MAJOR FAMILIES) */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="PORTFOLIO MATRIX"
          title="Four Pillars of Complete Crop Defense"
          subtitle="Comprehensive chemical and bio-nutritional solutions engineered to protect yields at every stage of the crop lifecycle."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCT_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className={`p-6 bg-gradient-to-br ${cat.accentColor} text-white relative`}>
                <div className="japanese-hanko bg-white/10 text-white border-white/30 text-[10px] mb-2">
                  SHIMANZU
                </div>
                <h3 className="text-2xl font-bold text-white">{cat.name}</h3>
                <p className="text-xs text-slate-200 mt-2 line-clamp-2">
                  {cat.tagline}
                </p>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {cat.description}
                </p>

                <Link
                  href={`/products/${cat.slug}`}
                  className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-slate-50 hover:bg-emerald-50 text-emerald-950 font-bold text-xs border border-slate-200 group-hover:border-emerald-700/40 transition-colors"
                >
                  <span>Explore {cat.name}</span>
                  <ChevronRight className="w-4 h-4 text-emerald-800 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6: FEATURED FLAGSHIP PRODUCTS */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-shimanzu-red"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-900">
                PROVEN FIELD PERFORMERS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Flagship Crop Solutions
            </h2>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-900 hover:text-emerald-700 transition-colors"
          >
            <span>View All Catalogue Products</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredProducts.slice(0, 6).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 7: CROP SOLUTIONS DISCOVERY (JAPANCROPS CONCEPT) */}
      {/* ========================================================================= */}
      <section className="bg-emerald-950 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            badge="CROP-CENTRIC ADVISORY"
            title="Tailored Solutions for India's Major Crops"
            subtitle="Navigate directly by crop to discover targeted chemical protection, weed control, and nutritional schedules."
            light
          />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {CROPS_DATA.map((crop) => (
              <Link
                key={crop.id}
                href={`/crop-solutions#${crop.slug}`}
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-emerald-400/40 rounded-2xl p-5 transition-all duration-200 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-emerald-900/80 text-emerald-300">
                      {crop.season}
                    </span>
                    {crop.hindiName && (
                      <span className="text-xs font-semibold text-slate-400">
                        {crop.hindiName}
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {crop.cropName}
                  </h3>
                  <p className="text-xs text-slate-300 mt-2 line-clamp-2">
                    {crop.tagline}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-emerald-300">
                  <span>{crop.challenges.length} Key Challenges</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/crop-solutions"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-emerald-950 font-bold text-sm hover:bg-emerald-50 transition-colors"
            >
              <span>Explore Crop Solutions Matrix</span>
              <ArrowRight className="w-4 h-4 text-emerald-900" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 8: RESEARCH & FORMULATION SCIENCE */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-shimanzu-red"></span>
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                  SCIENTIFIC RIGOR
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                Research-Driven Formulations Engineered for Field Stability
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Shimanzu integrates modern laboratory testing, particle size reduction, and surfactant optimization to ensure that every formulation performs reliably across India&apos;s diverse temperature ranges and hard water conditions.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                  <div className="text-emerald-400 font-bold text-sm mb-1">Advanced Formulations</div>
                  <div className="text-xs text-slate-300">High-grade SC, WG, ZC, OD, and FS delivery systems</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                  <div className="text-emerald-400 font-bold text-sm mb-1">Batch Traceability</div>
                  <div className="text-xs text-slate-300">Continuous quality audit ensuring active ingredient consistency</div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/research"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm transition-colors"
                >
                  <span>Learn About Research & Quality Systems</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="bg-slate-950 rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Quality Assurance Protocols
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>ISO 9001:2015 certified standard operating procedures</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Rigorous raw active ingredient assay and moisture analysis</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Accelerated temperature and emulsion stability testing</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Tamper-evident packaging ensuring genuine product delivery</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 9: FARMER & DISTRIBUTOR NETWORK */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Farmer Connect */}
          <div className="bg-emerald-50/60 rounded-3xl p-8 sm:p-10 border border-emerald-100 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-900 text-white flex items-center justify-center">
                <Sprout className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">For Farmers</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Access dependable crop protection advice, correct dosage recommendations, and authentic Shimanzu products through your local authorized dealer network.
              </p>
              <div className="text-xs text-slate-500">
                Helpline: <strong className="text-emerald-950 font-bold">{COMPANY_DATA.tollFree}</strong> (Toll-Free)
              </div>
            </div>

            <div className="pt-6">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-900 text-white font-bold text-xs sm:text-sm hover:bg-emerald-800 transition-colors"
              >
                <span>Find the Right Product</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Distributor Connect */}
          <div className="bg-slate-100 rounded-3xl p-8 sm:p-10 border border-slate-200 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">For Distributors & Dealers</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Join our expanding network of 1,200+ distributors and 2,800+ authorized dealers. Partner with a brand known for uncompromising quality and farmer trust.
              </p>
              <div className="text-xs text-slate-500">
                Corporate Email: <strong className="text-slate-900">{COMPANY_DATA.email}</strong>
              </div>
            </div>

            <div className="pt-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-shimanzu-red text-white font-bold text-xs sm:text-sm hover:bg-shimanzu-darkred transition-colors"
              >
                <span>Become an Authorized Partner</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 10: AGRONOMY RESOURCES */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="KNOWLEDGE HUB"
          title="Agricultural Insights & Best Practices"
          subtitle="Field-tested agronomic advice and product application stewardship."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {RESOURCES_DATA.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3 text-[11px] font-semibold text-slate-400">
                  <span className="text-emerald-800 font-bold uppercase">
                    {article.category}
                  </span>
                  <span>{article.readTime}</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {article.summary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <Link
                  href={`/resources#${article.slug}`}
                  className="text-xs font-bold text-emerald-900 hover:text-emerald-700 flex items-center gap-1 group"
                >
                  <span>Read Field Advisory</span>
                  <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 11: CORPORATE CONTACT CTA BANNER */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-emerald-950 via-emerald-900 to-slate-950 text-white rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="japanese-hanko bg-white text-shimanzu-red border-white mb-4">
            SHIMANZU JAPAN
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white max-w-2xl mx-auto">
            Ready to Protect Your Crops and Boost Farm Yields?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mt-4">
            Contact our technical team or connect with an authorized distributor in your region.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-7 py-3 rounded-xl bg-shimanzu-red hover:bg-shimanzu-darkred text-white font-bold text-sm shadow-md transition-all"
            >
              Contact Corporate Office
            </Link>
            <a
              href={`tel:${COMPANY_DATA.tollFree}`}
              className="px-7 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Call Toll-Free: {COMPANY_DATA.tollFree}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
