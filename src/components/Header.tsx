"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Search,
  Menu,
  X,
  Phone,
  ChevronDown,
  Sparkles,
  ShieldCheck,
  Building2,
  Mail,
} from "lucide-react";
import { COMPANY_DATA } from "@/data/company";
import { SearchModal } from "@/components/SearchModal";
import { EnquiryModal } from "@/components/EnquiryModal";

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
      name: "Products",
      href: "/products",
      hasDropdown: true,
    },
    { name: "Crop Solutions", href: "/crop-solutions" },
    { name: "Research & Innovation", href: "/research" },
    { name: "Quality & Sustainability", href: "/quality" },
    { name: "Resources", href: "/resources" },
    { name: "Contact", href: "/contact" },
  ];

  const productCategories = [
    { name: "Insecticides", href: "/products/insecticides", desc: "Chewing & sucking pest control" },
    { name: "Fungicides", href: "/products/fungicides", desc: "Systemic & contact disease prevention" },
    { name: "Herbicides", href: "/products/herbicides", desc: "Pre & post emergence weed management" },
    { name: "PGR & Fertilizers", href: "/products/pgr-fertilizers", desc: "Growth stimulants & nutrition" },
  ];

  return (
    <>
      {/* Top Corporate Bar */}
      <div className="bg-slate-950 text-slate-300 text-xs py-1.5 px-4 sm:px-8 border-b border-slate-900 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 font-medium text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              {COMPANY_DATA.certification}
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">
              National Network: <strong className="text-white">{COMPANY_DATA.metrics.distributors} Distributors</strong> &{" "}
              <strong className="text-white">{COMPANY_DATA.metrics.dealers} Dealers</strong>
            </span>
          </div>

          <div className="flex items-center gap-5">
            <a
              href={`tel:${COMPANY_DATA.tollFree}`}
              className="flex items-center gap-1.5 text-slate-300 hover:text-emerald-400 transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              Toll-Free: <span className="font-bold text-white">{COMPANY_DATA.tollFree}</span>
            </a>
            <span className="text-slate-600">|</span>
            <a
              href={`mailto:${COMPANY_DATA.email}`}
              className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-slate-400" />
              {COMPANY_DATA.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-slate-100"
            : "bg-white py-4 border-b border-slate-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* Logo Badge */}
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800 flex items-center justify-center text-white shadow-md border border-emerald-700/40 relative overflow-hidden group-hover:scale-105 transition-transform">
              <span className="font-serif font-black text-xl tracking-tighter">志</span>
              <div className="absolute top-0 right-0 w-2 h-2 bg-shimanzu-red"></div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 leading-none">
                  SHIMANZU
                </span>
                <span className="text-[10px] font-bold tracking-widest bg-shimanzu-red text-white px-1.5 py-0.5 rounded leading-none">
                  JAPAN
                </span>
              </div>
              <span className="text-[11px] font-medium text-emerald-900/80 tracking-tight mt-0.5">
                Growing with trust
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              if (link.hasDropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setProductsDropdownOpen(true)}
                    onMouseLeave={() => setProductsDropdownOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={`px-3 py-2 rounded-lg text-xs xl:text-sm font-semibold flex items-center gap-1 transition-colors ${
                        isActive
                          ? "text-emerald-900 bg-emerald-50"
                          : "text-slate-700 hover:text-emerald-900 hover:bg-slate-50"
                      }`}
                    >
                      {link.name}
                      <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                    </Link>

                    {/* Products Dropdown Menu */}
                    {productsDropdownOpen && (
                      <div className="absolute top-full left-0 w-72 bg-white rounded-2xl shadow-xl border border-slate-100 p-2 mt-1 animate-in fade-in slide-in-from-top-2 duration-150">
                        <div className="p-2 text-[11px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 mb-1">
                          Product Families
                        </div>
                        {productCategories.map((cat) => (
                          <Link
                            key={cat.name}
                            href={cat.href}
                            className="p-2.5 rounded-xl hover:bg-emerald-50/70 transition-colors block group"
                          >
                            <div className="font-semibold text-xs text-slate-800 group-hover:text-emerald-900">
                              {cat.name}
                            </div>
                            <div className="text-[11px] text-slate-500 line-clamp-1">
                              {cat.desc}
                            </div>
                          </Link>
                        ))}
                        <div className="p-2 border-t border-slate-100 mt-1">
                          <Link
                            href="/products"
                            className="text-xs font-bold text-emerald-900 hover:underline flex items-center justify-between"
                          >
                            <span>Browse Complete Catalogue</span>
                            <span>→</span>
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-xs xl:text-sm font-semibold transition-colors ${
                    isActive
                      ? "text-emerald-900 bg-emerald-50 font-bold"
                      : "text-slate-700 hover:text-emerald-900 hover:bg-slate-50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Tools */}
          <div className="flex items-center gap-2.5">
            {/* Global Search Button */}
            <button
              onClick={() => setSearchModalOpen(true)}
              className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors text-xs font-medium"
              title="Search products (Ctrl+K)"
            >
              <Search className="w-4 h-4 text-emerald-900" />
              <span className="hidden sm:inline">Search...</span>
              <kbd className="hidden md:inline-block px-1.5 py-0.5 text-[10px] font-mono bg-white rounded border border-slate-300 text-slate-500">
                ⌘K
              </kbd>
            </button>

            {/* Quick Enquiry CTA */}
            <button
              onClick={() => setEnquiryModalOpen(true)}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-shimanzu-red hover:bg-shimanzu-darkred text-white text-xs xl:text-sm font-bold shadow-sm hover:shadow-md transition-all"
            >
              Enquire
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 space-y-1 animate-in slide-in-from-top duration-200 shadow-xl max-h-[85vh] overflow-y-auto">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  href={link.href}
                  className={`block px-3 py-2.5 rounded-xl text-sm font-semibold ${
                    pathname === link.href
                      ? "bg-emerald-50 text-emerald-900 font-bold"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {link.name}
                </Link>

                {link.hasDropdown && (
                  <div className="pl-4 space-y-1 my-1 border-l-2 border-emerald-100 ml-3">
                    {productCategories.map((cat) => (
                      <Link
                        key={cat.name}
                        href={cat.href}
                        className="block px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-emerald-900"
                      >
                        {cat.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="pt-4 border-t border-slate-100 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setEnquiryModalOpen(true);
                }}
                className="w-full py-3 rounded-xl bg-shimanzu-red text-white font-bold text-sm shadow text-center block"
              >
                Send Official Enquiry
              </button>

              <div className="text-xs text-slate-500 text-center space-y-1">
                <div>Toll-Free Helpline: <strong>{COMPANY_DATA.tollFree}</strong></div>
                <div>{COMPANY_DATA.email}</div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Global Modals */}
      <SearchModal isOpen={searchModalOpen} onClose={() => setSearchModalOpen(false)} />
      <EnquiryModal isOpen={enquiryModalOpen} onClose={() => setEnquiryModalOpen(false)} />
    </>
  );
};
