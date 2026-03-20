import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import { injectPrerenderContent, isKnownRoute, VALID_ROUTES } from "../shared/prerenderContent";

const CANONICAL_BASE = "https://centraltechnologies.london";

function generateSitemapXml(lastModifiedDate: string): string {
  const priorities: Record<string, string> = {
    "/": "1.0",
    "/services": "0.8",
    "/contact": "0.8",
    "/it-support-home-visit-london": "0.7",
    "/private-household-technology": "0.7",
    "/privacy": "0.4",
    "/terms": "0.4",
  };

  const urls = VALID_ROUTES.map((route) => {
    const loc = route === "/" ? CANONICAL_BASE + "/" : CANONICAL_BASE + route;
    const priority = priorities[route] || "0.5";
    return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastModifiedDate}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
  }).join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
}

function generateRobotsTxt(): string {
  return `User-agent: *\nAllow: /\n\nSitemap: ${CANONICAL_BASE}/sitemap.xml\n`;
}

export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  const indexHtmlPath = path.resolve(distPath, "index.html");
  const templateHtml = fs.readFileSync(indexHtmlPath, "utf-8");
  const indexHtmlLastModified = fs.statSync(indexHtmlPath).mtime.toISOString().split("T")[0];

  app.get("/sitemap.xml", (_req, res) => {
    res.setHeader("Content-Type", "application/xml; charset=UTF-8");
    res.setHeader("Cache-Control", "public, max-age=86400");
    res.send(generateSitemapXml(indexHtmlLastModified));
  });

  app.get("/robots.txt", (_req, res) => {
    res.setHeader("Content-Type", "text/plain; charset=UTF-8");
    res.setHeader("Cache-Control", "public, max-age=86400");
    res.send(generateRobotsTxt());
  });

  app.use(express.static(distPath, { index: false }));

  app.use("*", (req, res) => {
    const injectedHtml = injectPrerenderContent(templateHtml, req.originalUrl);

    if (!isKnownRoute(req.originalUrl)) {
      res.status(404);
      res.setHeader("X-Robots-Tag", "noindex, follow");
    }

    res.setHeader("Content-Type", "text/html; charset=UTF-8");
    res.send(injectedHtml);
  });
}
