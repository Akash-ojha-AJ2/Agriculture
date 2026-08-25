import { MetadataRoute } from "next";
import { PRODUCTS } from "@/data/products";
import { CROPS } from "@/data/crops";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.hyderabadcropscience.com";

  // Static routes
  const staticRoutes = [
    "",
    "/about",
    "/products",
    "/crops",
    "/research",
    "/quality",
    "/contact",
    "/distributors",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic Product routes
  const productRoutes = PRODUCTS.map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  // Dynamic Crop routes
  const cropRoutes = CROPS.map((crop) => ({
    url: `${baseUrl}/crops/${crop.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...productRoutes, ...cropRoutes];
}
