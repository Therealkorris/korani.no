import { mkdir, rm, writeFile } from 'node:fs/promises';

const rawSiteUrl = process.env.SITE_URL?.trim();
const siteUrl = rawSiteUrl?.replace(/\/+$/, '');

const isUsableUrl = siteUrl && /^https:\/\/[^/]+\.[^/]+/.test(siteUrl);

if (!isUsableUrl) {
  await rm('public/sitemap.xml', { force: true });
  console.log('SITE_URL not set; skipping sitemap.xml generation.');
  process.exit(0);
}

const now = new Date().toISOString();
const paths = ['/', '/products.html', '/trailready.html', '/trailready/privacy.html'];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths
  .map(
    (path) => `  <url>
    <loc>${siteUrl}${path}</loc>
    <lastmod>${now}</lastmod>
  </url>`,
  )
  .join('\n')}
</urlset>
`;

await mkdir('public', { recursive: true });
await writeFile('public/sitemap.xml', sitemap, 'utf8');
console.log(`Generated sitemap.xml for ${siteUrl}`);
