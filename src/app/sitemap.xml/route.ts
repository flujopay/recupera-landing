import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://recupera.somossena.com";

  const pages = [
    { path: "", priority: "1.0" },
    { path: "term", priority: "0.8" },
    { path: "privacy", priority: "0.8" },
  ];

  const urlsXml = pages
    .map(
      ({ path, priority }) => `
      <url>
        <loc>${baseUrl}${path ? `/${path}` : ""}</loc>
        <changefreq>monthly</changefreq>
        <priority>${priority}</priority>
      </url>
    `,
    )
    .join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlsXml}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
