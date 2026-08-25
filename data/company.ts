export interface CompanyInfo {
  name: string;
  legalName: string;
  tagline: string;
  hindiMotto: string;
  hindiSubmotto: string;
  shortAbout: string;
  fullAbout: string;
  mission: string;
  vision: string;
  values: { title: string; description: string; icon: string }[];
  pillars: { title: string; description: string; icon: string }[];
  contact: {
    address: {
      line1: string;
      line2: string;
      city: string;
      state: string;
      country: string;
      pincode: string;
    };
    phone: string;
    tollFree?: string;
    email: string;
    salesEmail: string;
    distributorEmail: string;
    workingHours: string;
  };
  statsNotes: string;
}

export const COMPANY_DATA: CompanyInfo = {
  name: "Hyderabad Crop Science",
  legalName: "HYDERABAD CROP SCIENCE PVT. LTD.",
  tagline: "Better Crops, Better Future",
  hindiMotto: "एक सशक्त किसान, एक समृद्ध भारत",
  hindiSubmotto: "आओ मिलकर करें देश का मान, किसान का बढ़े सम्मान!",
  shortAbout: "Hyderabad Crop Science Pvt. Ltd. is an Indian agricultural crop-science company dedicated to formulating high-efficacy crop-protection and crop-nutrition solutions for farmers and agricultural professionals.",
  fullAbout: "At Hyderabad Crop Science Pvt. Ltd., our fundamental purpose is rooted in Indian agriculture. We develop, formulate, and deliver science-driven agrochemical formulations that empower farmers to safeguard yields, enhance plant health, and build sustainable agricultural productivity across diverse agro-climatic zones.",
  mission: "To deliver science-driven, dependable crop-protection and plant-nutrition solutions that maximize farmer prosperity and secure crop vitality through rigorous quality standards and ethical agricultural stewardship.",
  vision: "To be recognized as one of India's most trusted agricultural crop-science partners, driving sustainable agricultural transformation through formulation excellence, farmer-centric innovation, and field-proven reliability.",
  values: [
    {
      title: "Science-Driven Formulation",
      description: "Every formulation is grounded in agronomic chemistry, proven molecular efficacy, and precise stability standards.",
      icon: "FlaskConical",
    },
    {
      title: "Farmer-Centric Integrity",
      description: "Our solutions are designed around the real-world economic and environmental challenges faced by Indian farming communities.",
      icon: "HeartHandshake",
    },
    {
      title: "Uncompromising Quality",
      description: "Strict quality control across active ingredients, emulsion stability, suspension properties, and packaging safety.",
      icon: "ShieldCheck",
    },
    {
      title: "Responsible Stewardship",
      description: "Promoting judicious chemical application, integrated pest management (IPM), and environmental sustainability.",
      icon: "Sprout",
    },
  ],
  pillars: [
    {
      title: "Science Driven",
      description: "Targeted active ingredient chemistries calibrated for tropical and sub-tropical pest dynamics.",
      icon: "Microscope",
    },
    {
      title: "Quality Focused",
      description: "Rigorous laboratory testing across formulation batches to guarantee chemical purity and suspension stability.",
      icon: "CheckCircle2",
    },
    {
      title: "Farmer Centric",
      description: "Accessible packaging sizes, clear multi-lingual application guidance, and focused field advisory.",
      icon: "Users",
    },
    {
      title: "Reliable Solutions",
      description: "Consistent field performance delivering dependable protection and predictable crop outcomes.",
      icon: "Award",
    },
    {
      title: "Responsible Agriculture",
      description: "Commitment to sustainable crop nutrition, resistance management, and soil health preservation.",
      icon: "LeafyGreen",
    },
  ],
  contact: {
    address: {
      line1: "Plot No. 42, Industrial Development Area",
      line2: "Cherlapally / Nacharam Agricultural Corridor",
      city: "Hyderabad",
      state: "Telangana",
      country: "India",
      pincode: "500051",
    },
    phone: "+91 40 2712 8899",
    tollFree: "1800 599 4422",
    email: "info@hyderabadcropscience.com",
    salesEmail: "sales@hyderabadcropscience.com",
    distributorEmail: "dealers@hyderabadcropscience.com",
    workingHours: "Monday - Saturday: 9:00 AM - 6:00 PM IST",
  },
  statsNotes: "Empowering agricultural belts across Indian farmlands with high-grade crop protection.",
};

export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Crop Solutions", href: "/crops" },
  { name: "R&D", href: "/research" },
  { name: "Quality", href: "/quality" },
  { name: "Contact", href: "/contact" },
];
