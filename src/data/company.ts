export interface CompanyInfo {
  name: string;
  brand: string;
  tagline: string;
  certification: string;
  corporateOffice: string;
  tollFree: string;
  email: string;
  website: string;
  metrics: {
    distributors: string;
    dealers: string;
    productCategories: string;
    qualityStandard: string;
  };
  coreValues: {
    title: string;
    tagline: string;
    description: string;
    icon: string;
  }[];
  overview: {
    title: string;
    subtitle: string;
    paragraphs: string[];
    mission: string;
    vision: string;
  };
}

export const COMPANY_DATA: CompanyInfo = {
  name: "Shimanzu Chemicals Pvt. Ltd.",
  brand: "SHIMANZU JAPAN",
  tagline: "Growing with trust",
  certification: "AN ISO 9001 : 2015 CERTIFIED COMPANY",
  corporateOffice: "271-DR Tower Nawada, Uttam Nagar, New Delhi 110059",
  tollFree: "18003093053",
  email: "japan@shimanzu.com",
  website: "www.shimanzu.com",
  metrics: {
    distributors: "1,200+",
    dealers: "2,800+",
    productCategories: "4 Major Families",
    qualityStandard: "ISO 9001:2015",
  },
  coreValues: [
    {
      title: "Customer Focus",
      tagline: "Centred on the Indian Farmer",
      description: "Dedicated to enhancing farmer prosperity by delivering dependable crop protection and yield-enhancing solutions tailored to diverse agro-climatic conditions.",
      icon: "Users",
    },
    {
      title: "Good Corporate Citizenship",
      tagline: "Ethical & Responsible Stewardship",
      description: "Committed to sustainable agriculture, safety stewardship, environmental harmony, and transparent governance across all operations.",
      icon: "ShieldCheck",
    },
    {
      title: "Innovation",
      tagline: "Precision Formulation Science",
      description: "Continuously advancing chemical formulations, bio-stimulants, and delivery systems inspired by Japanese scientific rigor.",
      icon: "Lightbulb",
    },
    {
      title: "Determination",
      tagline: "Unyielding Quality Commitment",
      description: "Relentless pursuit of manufacturing excellence, batch consistency, and reliable field bio-efficacy in every pack.",
      icon: "Target",
    },
    {
      title: "Pioneering Spirit",
      tagline: "Empowering Modern Agriculture",
      description: "Embracing future-ready agronomy, water-soluble plant nutrition, and next-generation pest management solutions.",
      icon: "Compass",
    },
  ],
  overview: {
    title: "Japanese Precision Engineered for Indian Agriculture",
    subtitle: "A trusted manufacturer and distributor of advanced agrochemical solutions.",
    paragraphs: [
      "Shimanzu Chemicals Pvt. Ltd. is an established agrochemical manufacturing enterprise committed to protecting crops and empowering the farming community across India.",
      "Rooted in the philosophy of 'Growing with trust', Shimanzu integrates advanced formulation expertise, Japanese manufacturing standards, and rigorous quality inspection to deliver high-efficacy crop protection solutions.",
      "Our comprehensive portfolio spans Insecticides, Fungicides, Herbicides, Plant Growth Regulators (PGR), Water Soluble Fertilizers, Micro-Nutrients, and Bio-Fertilizers, supporting farmers from pre-sowing soil preparation through post-emergence crop maturity.",
      "Operating through an extensive nationwide network of over 1,200 distributors and 2,800+ authorized dealers, Shimanzu ensures that genuine, high-grade agricultural formulations reach every corner of the nation.",
    ],
    mission: "To deliver scientifically validated, reliable, and high-performance agrochemical formulations that safeguard Indian crops, optimize farmer yields, and build enduring trust across the agricultural value chain.",
    vision: "To be recognized as a premier, innovation-driven agrochemical company blending Japanese formulation precision with localized farming insights to build a prosperous and resilient agricultural future.",
  },
};
