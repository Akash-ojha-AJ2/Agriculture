# Shimanzu Chemicals — Crop Science & Formulation Excellence

A modern, high-performance corporate agrochemical web application for **Shimanzu Chemicals Private Limited**, engineered with Japanese precision formulation standards for Indian agriculture.

---

## 🌾 Overview

This platform serves as an enterprise-grade digital product discovery hub and agronomic advisory portal for distributors, retail dealers, and farmers across India.

### Key Features
- **Comprehensive Product Discovery**: Dynamic faceted filtering by category (*Insecticides*, *Fungicides*, *Herbicides*, *PGR & Fertilizers*), formulation types (*SC, GR, WG, FS, ZC, SL, EC*), and target crops.
- **Authentic Japanese Packshots**: Clean transparent bottle presentations with salient technical features, active ingredients, modes of action, and commercial packaging sizes.
- **Crop-Centric Agronomy**: Tailored crop solution schedules for major staple and cash crops (Paddy, Cotton, Sugarcane, Wheat, etc.).
- **Interactive Multi-Parametric Search (`⌘K`)**: Instant search across brand names, chemical compositions, target pests, and crop types.
- **Corporate Inquiry System**: Direct enquiry workflows with national toll-free support integration.
- **Enterprise Design Language**: Japanese minimalist agricultural corporate aesthetic with responsive UX across mobile, tablet, and desktop viewports.

---

## 🚀 Tech Stack

- **Framework**: [Next.js 14 (App Router)](https://nextjs.org/)
- **UI & Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: TypeScript

---

## 📦 Getting Started

### 1. Installation
```bash
npm install
```

### 2. Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build
```bash
npm run build
npm start
```

---

## 📁 Project Architecture

```
src/
├── app/
│   ├── about/             # Corporate overview, heritage & mission
│   ├── contact/           # Office locations, helpline & enquiry forms
│   ├── crop-solutions/    # Crop-specific protection matrices
│   ├── products/          # Dynamic catalogue & individual product routes
│   ├── quality/           # ISO 9001:2015 & sustainability standards
│   ├── research/          # R&D lab capabilities & formulation science
│   ├── resources/         # Technical brochures & safety guides
│   ├── layout.tsx         # Global corporate layout with header & footer
│   └── page.tsx           # Flagship showcase homepage
├── components/
│   ├── Header.tsx         # Sticky navigation with mega-menu
│   ├── Footer.tsx         # Comprehensive footer & compliance info
│   ├── ProductCard.tsx    # High-impact product card component
│   ├── ProductDirectory.tsx# Live filtering & search grid
│   ├── SearchModal.tsx    # Global instant search modal
│   └── EnquiryModal.tsx   # Product enquiry dialog
├── data/
│   ├── company.ts         # Corporate metadata & certification specs
│   ├── crops.ts           # Agronomic challenges & solutions
│   ├── products.ts        # Centralized typed product dataset
│   └── resources.ts       # Brochures & regulatory downloads
└── public/
    └── images/products/   # Transparent product bottle assets
```

---

## 🛡️ License & Compliance

© Shimanzu Chemicals Private Limited. All Rights Reserved. ISO 9001:2015 Certified Operations.
