export interface CropProblemSolution {
  problemName: string;
  problemType: "Insect/Pest" | "Disease" | "Weed" | "Nutritional/Physiological";
  symptoms: string;
  recommendedCategory: string;
  recommendedProductSlugs: string[];
}

export interface CropSolution {
  id: string;
  cropName: string;
  slug: string;
  hindiName?: string;
  season: string;
  tagline: string;
  description: string;
  image: string;
  challenges: CropProblemSolution[];
}

export const CROPS_DATA: CropSolution[] = [
  {
    id: "crop-paddy",
    cropName: "Paddy (Rice)",
    slug: "paddy",
    hindiName: "धान",
    season: "Kharif / Rabi",
    tagline: "Total crop health from transplanting to golden panicle harvest",
    description: "Paddy is India's staple crop. Shimanzu provides a complete protection suite from early nursery weed suppression to late-season blast and brown planthopper management.",
    image: "/images/crops/paddy.jpg",
    challenges: [
      {
        problemName: "Yellow Stem Borer & Leaf Folder",
        problemType: "Insect/Pest",
        symptoms: "Dead hearts during vegetative stage, white heads during flowering, and folded leaves with scraped chlorophyll.",
        recommendedCategory: "Insecticides",
        recommendedProductSlugs: ["regal", "ridona", "wireless", "hitachu", "kimdan-4g", "timroo"],
      },
      {
        problemName: "Rice Blast (Leaf & Neck Blast)",
        problemType: "Disease",
        symptoms: "Spindle-shaped lesions with grey centers on leaves, black rot at the panicle base leading to chaffy grains.",
        recommendedCategory: "Fungicides",
        recommendedProductSlugs: ["amrit", "arobic", "gloster", "tamron", "polher", "shine"],
      },
      {
        problemName: "Sheath Blight",
        problemType: "Disease",
        symptoms: "Oval or irregular greenish-grey spots on leaf sheaths near water level spreading upward.",
        recommendedCategory: "Fungicides",
        recommendedProductSlugs: ["fluza", "arobic", "hexaking", "volvo", "gloster", "polher"],
      },
      {
        problemName: "Early Grassy & Sedge Weeds",
        problemType: "Weed",
        symptoms: "Heavy competition from Echinochloa (Sanwa) and Cyperus reducing tillering by up to 40%.",
        recommendedCategory: "Herbicides",
        recommendedProductSlugs: ["simiza", "pertilo", "penox-plus"],
      },
      {
        problemName: "Zinc Deficiency & Poor Tillering",
        problemType: "Nutritional/Physiological",
        symptoms: "Khaira disease with brownish rusty discoloration on older leaves, stunted tillers.",
        recommendedCategory: "PGR & Fertilizers",
        recommendedProductSlugs: ["fitmax-33", "shimanzu-power", "amrit-gold"],
      },
    ],
  },
  {
    id: "crop-cotton",
    cropName: "Cotton",
    slug: "cotton",
    hindiName: "कपास",
    season: "Kharif",
    tagline: "Protecting white gold from sucking pests and bollworm complexes",
    description: "Cotton requires vigilant canopy protection against sucking insects, square droppage, and bollworm attacks to secure clean, high-grade lint yield.",
    image: "/images/crops/cotton.jpg",
    challenges: [
      {
        problemName: "Sucking Pest Complex (Thrips, Aphids, Jassids, Whitefly)",
        problemType: "Insect/Pest",
        symptoms: "Curling of leaves, downward cupping, sooty mold from honeydew, and shedding of squares.",
        recommendedCategory: "Insecticides",
        recommendedProductSlugs: ["shimdor", "tufan", "ridona", "marfil-pro", "marfil-75", "hitachu"],
      },
      {
        problemName: "Bollworm Complex & Spodoptera",
        problemType: "Insect/Pest",
        symptoms: "Bore holes in squares and bolls, caterpillar droppings, and damaged lint.",
        recommendedCategory: "Insecticides",
        recommendedProductSlugs: ["regal", "tufan", "calton", "minato-9", "mauzer-505"],
      },
      {
        problemName: "Early Broadleaf Weeds (Trianthema / Chulai)",
        problemType: "Weed",
        symptoms: "Stifling broadleaf weed competition in young cotton fields before canopy closure.",
        recommendedCategory: "Herbicides",
        recommendedProductSlugs: ["haitor", "mention"],
      },
      {
        problemName: "Square & Flower Drop Management",
        problemType: "Nutritional/Physiological",
        symptoms: "Heavy shedding of squares and young bolls due to physiological stress.",
        recommendedCategory: "PGR & Fertilizers",
        recommendedProductSlugs: ["jaandar", "shimanzu-power", "boron-20"],
      },
    ],
  },
  {
    id: "crop-sugarcane",
    cropName: "Sugarcane",
    slug: "sugarcane",
    hindiName: "गन्ना",
    season: "Annual / Spring / Autumn",
    tagline: "Maximizing cane length, sucrose content, and termite/grub immunity",
    description: "Sugarcane stands in the field for over 10-12 months. Shimanzu provides subterranean grub defense, shoot borer control, and internodal elongation boosters.",
    image: "/images/crops/sugarcane.jpg",
    challenges: [
      {
        problemName: "White Grub & Subterranean Termites",
        problemType: "Insect/Pest",
        symptoms: "Root damage leading to lodging, yellowing, dried clumps, and hollowed sets.",
        recommendedCategory: "Insecticides",
        recommendedProductSlugs: ["khufia", "hitachu-ultra", "forodon-3g"],
      },
      {
        problemName: "Early Shoot Borer & Top Borer",
        problemType: "Insect/Pest",
        symptoms: "Dead hearts in young shoots with pungent smell, 'bunchy top' symptoms.",
        recommendedCategory: "Insecticides",
        recommendedProductSlugs: ["ridona", "regal", "wireless", "timroo", "kimdan-4g"],
      },
      {
        problemName: "Aggressive Grass & Broadleaf Weeds",
        problemType: "Weed",
        symptoms: "Severe weed interference during slow early canopy development (first 90 days).",
        recommendedCategory: "Herbicides",
        recommendedProductSlugs: ["mesozine", "atrazine"],
      },
      {
        problemName: "Cane Elongation & Girth Boosting",
        problemType: "Nutritional/Physiological",
        symptoms: "Short internodes and reduced cane weight under moisture stress.",
        recommendedCategory: "PGR & Fertilizers",
        recommendedProductSlugs: ["amrit-gold", "shimanzu-potash", "shimanzu-power"],
      },
    ],
  },
  {
    id: "crop-wheat",
    cropName: "Wheat",
    slug: "wheat",
    hindiName: "गेहूं",
    season: "Rabi",
    tagline: "Securing uniform tillering, weed-free stands, and rust-free grains",
    description: "Wheat is critical for national food security. Shimanzu ensures clean weed-free fields and robust foliar health against rusts and blights.",
    image: "/images/crops/wheat.jpg",
    challenges: [
      {
        problemName: "Phalaris minor (Gulli Danda) & Wild Oats",
        problemType: "Weed",
        symptoms: "Heavy infestation of canary grass choking wheat tillers and consuming applied fertilizers.",
        recommendedCategory: "Herbicides",
        recommendedProductSlugs: ["topper"],
      },
      {
        problemName: "Yellow & Brown Rust, Powdery Mildew",
        problemType: "Disease",
        symptoms: "Yellow pustules arranged in linear stripes on leaves, premature drying.",
        recommendedCategory: "Fungicides",
        recommendedProductSlugs: ["polher", "shimanzu-m-45"],
      },
      {
        problemName: "Termites & Early Sucking Pests",
        problemType: "Insect/Pest",
        symptoms: "Seedling drying in patches, cut crowns at root level.",
        recommendedCategory: "Insecticides",
        recommendedProductSlugs: ["marfil-pro", "hitachu-ultra"],
      },
    ],
  },
  {
    id: "crop-vegetables",
    cropName: "Vegetables & Horticultural Crops",
    slug: "vegetables",
    hindiName: "सब्जियां एवं बागवानी",
    season: "All Seasons",
    tagline: "Blemish-free produce, prolific flowering, and export-grade quality",
    description: "Intensive vegetable cultivation (Chilli, Tomato, Potato, Onion, Cucurbits) demands precise pest management, high disease defense, and superior nutritional stimulants.",
    image: "/images/crops/vegetables.jpg",
    challenges: [
      {
        problemName: "Fruit Borer & DBM Caterpillars",
        problemType: "Insect/Pest",
        symptoms: "Holes bored into tomatoes and chillies, skeletonized cabbage leaves.",
        recommendedCategory: "Insecticides",
        recommendedProductSlugs: ["calton", "minato-9", "hitachu"],
      },
      {
        problemName: "Early & Late Blight, Anthracnose, Fruit Rot",
        problemType: "Disease",
        symptoms: "Dark concentric lesions on leaves, water-soaked rot on fruits and tubers.",
        recommendedCategory: "Fungicides",
        recommendedProductSlugs: ["polher", "shim-copper", "shine", "amrit-top"],
      },
      {
        problemName: "Flower Drop & Poor Fruit Setting",
        problemType: "Nutritional/Physiological",
        symptoms: "Abundant flower dropping without fruit conversion under high temperature.",
        recommendedCategory: "PGR & Fertilizers",
        recommendedProductSlugs: ["jaandar", "shimanzu-power", "boron-20", "shim-wet"],
      },
    ],
  },
];
