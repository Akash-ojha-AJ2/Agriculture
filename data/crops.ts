export interface CropChallenge {
  name: string;
  type: "Pest" | "Disease" | "Weed" | "Nutrient";
  description: string;
  recommendedProductSlugs: string[];
}

export interface CropSolution {
  id: string;
  name: string;
  hindiName: string;
  slug: string;
  scientificName: string;
  shortOverview: string;
  fullOverview: string;
  image: string;
  majorChallenges: CropChallenge[];
  recommendedCategories: string[];
  growthStages: string[];
  keyPractices: string[];
}

export const CROPS: CropSolution[] = [
  {
    id: "cotton",
    name: "Cotton",
    hindiName: "कपास (Kapas)",
    slug: "cotton",
    scientificName: "Gossypium hirsutum",
    shortOverview: "High-value commercial fiber crop demanding proactive management against bollworms, whiteflies, and sucking pests.",
    fullOverview: "Cotton cultivation across Indian agricultural belts faces severe yield pressures from sucking pest complexes (aphids, jassids, thrips, whiteflies) during vegetative stages and bollworms during squaring and boll development. Integrated crop protection ensures superior fiber quality and lint yield.",
    image: "/images/crops/cotton.svg",
    recommendedCategories: ["insecticides", "plant-nutrition", "biostimulants"],
    growthStages: ["Germination & Seedling", "Vegetative & Squaring", "Flowering & Boll Formation", "Boll Maturation & Picking"],
    keyPractices: [
      "Maintain early weed-free environment during first 45 days.",
      "Monitor whitefly and thrips populations to prevent leaf curl transmission.",
      "Alternate insecticide chemistries to prevent pest resistance.",
      "Supplement with foliar micronutrients during peak flowering.",
    ],
    majorChallenges: [
      {
        name: "Whitefly & Sucking Pests (Aphids, Jassids, Thrips)",
        type: "Pest",
        description: "Causes leaf curling, honeydew secretion, and transmits viral diseases.",
        recommendedProductSlugs: ["shimdor", "sypkar"],
      },
      {
        name: "Bollworm Complex & Caterpillars",
        type: "Pest",
        description: "Bores into flower buds and developing bolls, causing boll drop and lint damage.",
        recommendedProductSlugs: ["ridona", "sypkar"],
      },
      {
        name: "Early Season Weeds",
        type: "Weed",
        description: "Competes heavily for initial soil nutrients and moisture in black cotton soils.",
        recommendedProductSlugs: ["tufan"],
      },
    ],
  },
  {
    id: "rice",
    name: "Rice / Paddy",
    hindiName: "धान (Dhan)",
    slug: "rice",
    scientificName: "Oryza sativa",
    shortOverview: "India's staple cereal requiring comprehensive defense against stem borers, sheath blight, and aggressive barnyard grasses.",
    fullOverview: "Rice paddies thrive under intensive water management, which also creates favorable conditions for devastating fungal pathogens like Sheath Blight and stubborn grass weeds. Systematic post-emergence weed control and timely systemic protection are crucial for maximum grain filling.",
    image: "/images/crops/rice.svg",
    recommendedCategories: ["insecticides", "fungicides", "herbicides", "plant-nutrition"],
    growthStages: ["Nursery & Transplanting", "Tillering & Panicle Initiation", "Flowering & Milking", "Grain Maturity & Harvest"],
    keyPractices: [
      "Apply selective post-emergence herbicide at 2-4 weed leaf stage.",
      "Scout for yellow stem borer dead hearts during tillering.",
      "Apply protective fungicide at initiation of sheath blight symptoms.",
      "Optimize drainage prior to harvesting to prevent grain lodging.",
    ],
    majorChallenges: [
      {
        name: "Yellow Stem Borer & Leaf Folder",
        type: "Pest",
        description: "Larvae cause dead hearts at vegetative stage and white heads at panicle stage.",
        recommendedProductSlugs: ["ridona"],
      },
      {
        name: "Brown Plant Hopper (BPH) & Green Leafhopper",
        type: "Pest",
        description: "Sucks plant sap causing hopper burn patches in dense paddy fields.",
        recommendedProductSlugs: ["shimdor"],
      },
      {
        name: "Sheath Blight & Fungal Diseases",
        type: "Disease",
        description: "Oval lesions on leaf sheaths leading to poor panicle emergence.",
        recommendedProductSlugs: ["haitor"],
      },
      {
        name: "Barnyard Grass (Echinochloa) & Sedges",
        type: "Weed",
        description: "Mimics young rice plants and severely reduces tillering capacity.",
        recommendedProductSlugs: ["volvo"],
      },
    ],
  },
  {
    id: "wheat",
    name: "Wheat",
    hindiName: "गेहूं (Gehun)",
    slug: "wheat",
    scientificName: "Triticum aestivum",
    shortOverview: "Primary Rabi grain requiring robust early weed suppression, rust management, and balanced grain filling nutrition.",
    fullOverview: "Wheat represents the cornerstone of Indian food security. Timely weed management in early crown root initiation stages along with fungal disease protection prevents significant yield loss across northern and central agricultural zones.",
    image: "/images/crops/wheat.svg",
    recommendedCategories: ["herbicides", "fungicides", "plant-nutrition", "biostimulants"],
    growthStages: ["Crown Root Initiation (CRI)", "Tillering & Jointing", "Booting & Heading", "Grain Filling & Dough Stage"],
    keyPractices: [
      "Ensure weed eradication before first and second irrigation cycles.",
      "Monitor canopy temperature and humidity for rust outbreaks.",
      "Apply foliar nutrition during boot leaf stage to boost kernel weight.",
    ],
    majorChallenges: [
      {
        name: "Yellow & Brown Rust (Puccinia spp.)",
        type: "Disease",
        description: "Pustules on leaf blades disrupting photosynthesis and grain plumpness.",
        recommendedProductSlugs: ["haitor"],
      },
      {
        name: "Aphids & Sucking Insects",
        type: "Pest",
        description: "Colonies attack ear heads during milky stage reducing test weight.",
        recommendedProductSlugs: ["shimdor"],
      },
      {
        name: "Broadleaf and Grassy Field Weeds",
        type: "Weed",
        description: "Competes for soil moisture during the critical crown root stage.",
        recommendedProductSlugs: ["volvo", "tufan"],
      },
    ],
  },
  {
    id: "chilli",
    name: "Chilli & Vegetables",
    hindiName: "मिर्च एवं सब्जियां (Mirchi & Sabji)",
    slug: "chilli-vegetables",
    scientificName: "Capsicum annuum / Solanaceae",
    shortOverview: "High-value horticulture demanding intensive defense against thrips, mites, fruit borers, and powdery mildew.",
    fullOverview: "Chilli and solanaceous vegetables (tomato, brinjal) are highly prone to thrips-induced leaf curl syndrome (murda complex) and fruit borers. A clean scientific protection schedule is essential for uniform fruit size, vibrant color, and premium market grading.",
    image: "/images/crops/chilli.svg",
    recommendedCategories: ["insecticides", "fungicides", "plant-nutrition", "biostimulants"],
    growthStages: ["Nursery & Establishment", "Vegetative Growth & Branching", "Flowering & Fruit Set", "Harvesting Flushes"],
    keyPractices: [
      "Preventive management of sucking pests from nursery stage onwards.",
      "Use combination insecticides for resistant caterpillar populations.",
      "Regular foliar sprays of triazole fungicides for powdery mildew control.",
    ],
    majorChallenges: [
      {
        name: "Chilli Thrips & Mites (Leaf Curl / Murda)",
        type: "Pest",
        description: "Upward and downward curling of leaves with stunted plant vigor.",
        recommendedProductSlugs: ["shimdor", "sypkar"],
      },
      {
        name: "Fruit Borer & Helicoverpa Caterpillars",
        type: "Pest",
        description: "Bores holes into green and ripe chilli pods and tomatoes.",
        recommendedProductSlugs: ["ridona", "sypkar"],
      },
      {
        name: "Powdery Mildew & Fruit Rot / Dieback",
        type: "Disease",
        description: "White powdery patches on underside of leaves causing premature leaf shedding.",
        recommendedProductSlugs: ["haitor"],
      },
    ],
  },
  {
    id: "sugarcane",
    name: "Sugarcane",
    hindiName: "गन्ना (Ganna)",
    slug: "sugarcane",
    scientificName: "Saccharum officinarum",
    shortOverview: "Long-duration cash crop requiring early shoot borer protection and intensive weed management in wide rows.",
    fullOverview: "With a 10 to 14 month growth cycle, sugarcane crops face intense early weed competition due to wide row spacing, followed by subterranean termites and internal shoot borer attacks that reduce cane population and sugar recovery.",
    image: "/images/crops/sugarcane.svg",
    recommendedCategories: ["insecticides", "herbicides", "plant-nutrition"],
    growthStages: ["Germination & Shoot Emergence", "Tillering & Formative Phase", "Grand Growth Period", "Maturity & Ripening"],
    keyPractices: [
      "Soil drenching / furrow treatment to safeguard setts from termites.",
      "Directed weed control along inter-row spaces during early establishment.",
      "Protection against early shoot borer during the first 90-120 days.",
    ],
    majorChallenges: [
      {
        name: "Early Shoot Borer & Top Borer",
        type: "Pest",
        description: "Attacks young shoots producing dead hearts that can be easily pulled out.",
        recommendedProductSlugs: ["ridona"],
      },
      {
        name: "Termites & Soil Pests",
        type: "Pest",
        description: "Attacks eye buds of setts causing poor germination and drying canes.",
        recommendedProductSlugs: ["shimdor"],
      },
      {
        name: "Inter-Row Grasses & Broadleaf Weeds",
        type: "Weed",
        description: "Chokes young cane tillers before full canopy closure.",
        recommendedProductSlugs: ["tufan", "volvo"],
      },
    ],
  },
  {
    id: "soybean",
    name: "Soybean & Pulses",
    hindiName: "सोयाबीन एवं दलहन (Soybean & Dalhan)",
    slug: "soybean-pulses",
    scientificName: "Glycine max / Fabaceae",
    shortOverview: "Essential protein and oilseed crops vulnerable to defoliating caterpillars, pod borers, and rust infections.",
    fullOverview: "Soybean and pulse crops (pigeon pea/arhar, chickpea/gram, moong) require timely intervention against Spodoptera and semilooper defoliation, followed by pod borer eradication to preserve seed quality and protein content.",
    image: "/images/crops/soybean.svg",
    recommendedCategories: ["insecticides", "fungicides", "biostimulants", "biofertilizers"],
    growthStages: ["Emergence & V-Stages", "Flowering & Pod Initiation", "Pod Development & Seed Fill", "Physiological Maturity"],
    keyPractices: [
      "Monitor foliage for early egg masses and skeletonized leaves.",
      "Apply broad-spectrum dual combination insecticides at first sign of larval emergence.",
      "Protect pods during early pod formation stage to secure grain weight.",
    ],
    majorChallenges: [
      {
        name: "Spodoptera Litura & Semilooper Caterpillars",
        type: "Pest",
        description: "Voracious defoliation leading to bare crop stalks.",
        recommendedProductSlugs: ["sypkar", "ridona"],
      },
      {
        name: "Girdle Beetle & Stem Fly",
        type: "Pest",
        description: "Girdles main stem and branches causing wilting of top plant parts.",
        recommendedProductSlugs: ["shimdor", "ridona"],
      },
      {
        name: "Rust & Anthracnose Pod Blight",
        type: "Disease",
        description: "Brown to black lesions on pods causing shriveled, discolored seeds.",
        recommendedProductSlugs: ["haitor"],
      },
    ],
  },
];
