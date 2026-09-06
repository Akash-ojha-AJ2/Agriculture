export interface ResourceArticle {
  id: string;
  slug: string;
  title: string;
  category: "Agronomy Advisory" | "Safe Application" | "Crop Nutrition" | "Pest Alert";
  readTime: string;
  date: string;
  summary: string;
  content: string[];
  keyTips: string[];
  recommendedCategory?: string;
}

export const RESOURCES_DATA: ResourceArticle[] = [
  {
    id: "res-001",
    slug: "safe-spraying-practices-agrochemicals",
    title: "Best Practices for Safe & High-Efficacy Agrochemical Spraying",
    category: "Safe Application",
    readTime: "4 min read",
    date: "Shimanzu Stewardship Bulletin",
    summary: "Essential guidelines to maximize chemical bio-efficacy, optimize droplet retention, and ensure operator and environmental safety.",
    content: [
      "Achieving maximum efficacy from modern crop protection formulations requires careful attention to spray timing, water quality, and equipment calibration.",
      "Always use clean, neutral pH water (free from suspended mud or salinity) for tank mixing to avoid degradation of active chemical molecules.",
      "Incorporate high-performance organosilicone spreaders like Shim-Wet to reduce surface tension and achieve uniform stomatal coverage, especially on waxy foliage.",
      "Spray during the cooler hours of the early morning or late afternoon when wind speeds are below 8 km/h to prevent spray drift and rapid droplet evaporation."
    ],
    keyTips: [
      "Always wear protective gloves, face mask, and eye protection during chemical handling.",
      "Never spray against wind direction.",
      "Triple rinse empty containers and puncture them before safe disposal.",
      "Calibrate spray nozzles regularly for uniform droplet spectrum."
    ],
  },
  {
    id: "res-002",
    slug: "integrated-blast-management-paddy",
    title: "Integrated Management of Blast Disease in Paddy Cultivation",
    category: "Agronomy Advisory",
    readTime: "5 min read",
    date: "Shimanzu Field Guide",
    summary: "Preventive and curative agronomic strategies to protect rice crops against Leaf Blast, Node Blast, and destructive Neck Blast.",
    content: [
      "Rice Blast, caused by Magnaporthe oryzae, remains one of the most yield-limiting fungal diseases across India's paddy tracts.",
      "Blast symptoms typically intensify with excess Nitrogen fertilization, high relative humidity (>90%), and prolonged leaf wetness.",
      "Preventive seed treatment with Shine (Carbendazim + Mancozeb) protects emerging seedlings against early fungal inoculums.",
      "For standing crops, applying Tamron (Tricyclazole 75% WP) at the boot leaf stage and early panicle emergence provides gold-standard systemic protection, preventing neck blast and ensuring filled, heavy grains."
    ],
    keyTips: [
      "Avoid excessive split doses of urea during humid weather.",
      "Maintain proper field spacing to ensure adequate air circulation.",
      "Apply protective fungicides before rainfall events when overcast weather persists."
    ],
    recommendedCategory: "Fungicides",
  },
  {
    id: "res-003",
    slug: "micronutrient-deficiencies-and-bio-stimulants",
    title: "Overcoming Micro-Nutrient Deficiencies & Enhancing Root Architecture",
    category: "Crop Nutrition",
    readTime: "4 min read",
    date: "Shimanzu Nutrition Series",
    summary: "How chelated micronutrients and biological root stimulants unlock hidden yield potential in high-yielding crop varieties.",
    content: [
      "Intensive cropping cycles often deplete critical trace elements like Zinc and Boron from Indian agricultural soils.",
      "Zinc deficiency causes severe stunting, Khaira symptoms in rice, and reduced photosynthetic surface across maize and cotton.",
      "Chelated formulations like Fitmax-33 provide 100% bio-available Zinc that bypasses soil lock-up, accelerating internal plant hormone synthesis.",
      "Combining chelated nutrition with bioactive humic and seaweed extracts (Shimanzu Power) stimulates deep root elongation and improves fertilizer use efficiency."
    ],
    keyTips: [
      "Apply chelated zinc at early vegetative flush for maximum tillering response.",
      "Use Boron 20 prior to flowering to boost pollen fertility and minimize fruit cracking.",
      "Maintain adequate soil moisture during nutrient applications."
    ],
    recommendedCategory: "PGR & Fertilizers",
  },
  {
    id: "res-004",
    slug: "weed-management-in-direct-seeded-rice",
    title: "Precision Weed Management in Direct Seeded Rice (DSR)",
    category: "Agronomy Advisory",
    readTime: "5 min read",
    date: "Shimanzu Agronomy Insights",
    summary: "Mastering early and mid-stage weed suppression to secure high yields in water-saving direct seeded rice.",
    content: [
      "Direct Seeded Rice (DSR) saves valuable water and labor, but makes weed management the single most critical factor for success.",
      "Without the standing water layer of transplanted paddy, grassy weeds like Echinochloa germinate concurrently with rice seedlings.",
      "Applying pre-emergence Pertilo or specialized post-emergence selective herbicides like Simiza (Bispyribac Sodium) or Penox Plus effectively halts complex grassy and sedge flushes.",
      "Spray post-emergence herbicides at the 2-4 leaf stage of weeds when soil has sufficient moisture for active chemical translocation."
    ],
    keyTips: [
      "Apply herbicides when weeds are small and actively growing.",
      "Ensure uniform flat-fan nozzle spray swath without overlapping.",
      "Re-flood or irrigate the field 48 hours after post-emergence spraying."
    ],
    recommendedCategory: "Herbicides",
  },
];
