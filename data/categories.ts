export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  itemCountLabel?: string;
  tagline: string;
}

export const CATEGORIES: ProductCategory[] = [
  {
    id: "insecticides",
    name: "Insecticides",
    slug: "insecticides",
    shortDescription: "Advanced formulations engineered to protect crops against chewing, sucking, and borer insect pests.",
    fullDescription: "Our range of crop-protection insecticides delivers targeted efficacy against destructive insect species while preserving beneficial fauna when applied in accordance with scientific agronomic protocols.",
    iconName: "ShieldAlert",
    tagline: "Targeted Pest Defense",
  },
  {
    id: "fungicides",
    name: "Fungicides",
    slug: "fungicides",
    shortDescription: "Preventive and curative systemic solutions that defend crops from fungal blights, spots, and rusts.",
    fullDescription: "Scientifically tested fungicide formulations provide multi-site and systemic defense against critical crop diseases including sheath blight, powdery mildew, rusts, and leaf spots.",
    iconName: "Sparkles",
    tagline: "Disease Prevention & Cure",
  },
  {
    id: "herbicides",
    name: "Herbicides",
    slug: "herbicides",
    shortDescription: "Selective and non-selective weed control solutions that eliminate crop-weed competition for nutrients.",
    fullDescription: "Our herbicide portfolio optimizes field cleanliness and nutrient availability through precision weed eradication, targeting broadleaf weeds, grasses, and sedges without harming primary crops when used selectively.",
    iconName: "Trees",
    tagline: "Zero Crop-Weed Competition",
  },
  {
    id: "plant-nutrition",
    name: "Plant Nutrition",
    slug: "plant-nutrition",
    shortDescription: "Essential micronutrients, macronutrients, and soil health conditioners for robust plant physiology.",
    fullDescription: "Delivering balanced nutrition formulations designed to correct elemental deficiencies, accelerate root development, and enhance metabolic efficiency across growth cycles.",
    iconName: "Leaf",
    tagline: "Balanced Crop Physiology",
  },
  {
    id: "biostimulants",
    name: "Biostimulants",
    slug: "biostimulants",
    shortDescription: "Bio-active botanical and seaweed extracts to enhance stress tolerance, flowering, and fruit set.",
    fullDescription: "Formulated bio-stimulants that trigger endogenous defense mechanisms and enhance tolerance against abiotic stresses such as drought, extreme temperature, and salinity.",
    iconName: "Sprout",
    tagline: "Stress Resilience & Vigor",
  },
  {
    id: "biofertilizers",
    name: "Biofertilizers",
    slug: "biofertilizers",
    shortDescription: "Microbial inoculants that solubilize soil nutrients and promote long-term soil microbial vitality.",
    fullDescription: "Environmentally sustainable microbial consortia designed to unlock fixed soil phosphorus, fix atmospheric nitrogen, and regenerate fertile soil microbiomes.",
    iconName: "Flower2",
    tagline: "Sustainable Soil Vitality",
  },
];
