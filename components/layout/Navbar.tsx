"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Search, Menu, X, Phone, ShieldCheck, ChevronRight } from "lucide-react";
import { NAV_LINKS, COMPANY_DATA } from "@/data/company";
import { QuickSearchModal } from "./QuickSearchModal";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Top Utility Announcement Bar */}
      <div className="bg-agri-deep text-white text-xs border-b border-agri-forest hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="font-semibold tracking-wide text-brand-200">
              {COMPANY_DATA.hindiMotto}
            </span>
            <span className="text-gray-400">|</span>
            <span className="text-gray-300">
              Toll-Free Helpline: <span className="font-semibold text-white">{COMPANY_DATA.contact.tollFree}</span>
            </span>
          </div>
          <div className="flex items-center gap-4 text-gray-300">
            <Link href="/distributors" className="hover:text-white transition-colors flex items-center gap-1 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-300" />
              Become a Distributor
            </Link>
            <span className="text-gray-500">|</span>
            <span className="text-gray-300">Mon - Sat: 9:00 AM - 6:00 PM</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          isScrolled
            ? "bg-white shadow-md py-2.5 border-b border-gray-200"
            : "bg-white py-4 border-b border-gray-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Area */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-52 sm:w-64 h-11">
              <Image
                src="/images/logo.svg"
                alt="Hyderabad Crop Science Pvt. Ltd."
                fill
                priority
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-semibold tracking-tight transition-colors py-1 relative ${
                    isActive
                      ? "text-agri-deep font-bold"
                      : "text-gray-700 hover:text-agri-deep"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-agri-deep rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Icons & CTA */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Search Trigger */}
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 rounded-lg text-gray-600 hover:text-agri-deep hover:bg-agri-surface border border-gray-200 transition-colors flex items-center gap-2 text-xs font-medium"
              aria-label="Search products"
            >
              <Search className="w-4 h-4 text-agri-muted" />
              <span>Search</span>
              <kbd className="px-1.5 py-0.5 text-[10px] bg-gray-100 border border-gray-300 rounded text-gray-500">
                ⌘K
              </kbd>
            </button>

            {/* Primary Contact CTA */}
            <Link
              href="/contact"
              className="px-4 py-2 text-sm font-bold text-white bg-agri-deep hover:bg-agri-forest rounded-lg shadow-sm transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              Contact Us
            </Link>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 border border-gray-200"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-agri-deep hover:bg-gray-100 border border-gray-200"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-gray-200 shadow-xl px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-1">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-3 py-2.5 rounded-md text-sm font-semibold flex items-center justify-between ${
                      isActive
                        ? "bg-brand-50 text-agri-deep font-bold"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </Link>
                );
              })}
            </nav>

            <div className="pt-3 border-t border-gray-200 space-y-2">
              <Link
                href="/distributors"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full block text-center px-4 py-2.5 rounded-md text-sm font-bold text-agri-deep bg-brand-50 border border-brand-200"
              >
                Become a Distributor
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full block text-center px-4 py-2.5 rounded-md text-sm font-bold text-white bg-agri-deep hover:bg-agri-forest"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Global Quick Search Modal */}
      <QuickSearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
