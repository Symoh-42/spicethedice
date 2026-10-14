import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { projects } from "@/lib/projects";
import { journalArticles } from "@/lib/journal";
import { merch } from "@/lib/merch";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/work",
    "/services",
    "/process",
    "/about",
    "/contact",
    "/journal",
    "/videos",
    "/shop",
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
  }));

  const projectRoutes = projects.map((p) => ({
    url: `${siteConfig.url}/work/${p.slug}`,
    lastModified: new Date(),
  }));

  const journalRoutes = journalArticles.map((a) => ({
    url: `${siteConfig.url}/journal/${a.slug}`,
    lastModified: new Date(a.date),
  }));

  const merchRoutes = merch.map((m) => ({
    url: `${siteConfig.url}/shop/${m.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...projectRoutes, ...journalRoutes, ...merchRoutes];
}
