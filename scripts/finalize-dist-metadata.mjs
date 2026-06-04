import { readFile, writeFile } from 'node:fs/promises';

const rawSiteUrl = process.env.SITE_URL?.trim();
const siteUrl = rawSiteUrl?.replace(/\/+$/, '');
const isUsableUrl = siteUrl && /^https:\/\/[^/]+\.[^/]+/.test(siteUrl);

if (!isUsableUrl) {
  console.log('SITE_URL not set; skipping absolute metadata finalization.');
  process.exit(0);
}

const pages = [
  {
    file: 'dist/index.html',
    path: '/',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: 'Korani Solutions AS',
      url: siteUrl,
      email: 'Jonas.korani@gmail.com',
      telephone: '+47 976 16 446',
      founder: {
        '@type': 'Person',
        name: 'Jonas Korani',
      },
      sameAs: ['https://github.com/Therealkorris'],
      areaServed: 'Norway',
      description:
        'Korani Solutions AS delivers practical AI, IT, product development, and automation for manual, technical, and knowledge-heavy workflows.',
      knowsAbout: [
        'AI automation',
        'Industrial automation',
        'Engineering documentation',
        'Internal tools',
        'Technical data workflows',
        'Mobile apps',
      ],
    },
  },
  {
    file: 'dist/products.html',
    path: '/products.html',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Produkter | Korani Solutions AS',
      url: `${siteUrl}/products.html`,
      isPartOf: {
        '@type': 'WebSite',
        name: 'Korani Solutions AS',
        url: siteUrl,
      },
      about: ['Search & Index', 'TrailReady', 'automation tools', 'AI workflows'],
    },
  },
  {
    file: 'dist/trailready.html',
    path: '/trailready.html',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'TrailReady',
      alternateName: 'Turapp',
      applicationCategory: 'LifestyleApplication',
      operatingSystem: 'Android',
      url: `${siteUrl}/trailready.html`,
      publisher: {
        '@type': 'Organization',
        name: 'Korani Solutions AS',
        url: siteUrl,
      },
      description:
        'Local-first outdoor trip planning and packing app by Korani Solutions AS.',
    },
  },
  {
    file: 'dist/trailready/privacy/index.html',
    path: '/trailready/privacy',
  },
];

for (const page of pages) {
  let html = await readFile(page.file, 'utf8');
  const canonical = `${siteUrl}${page.path}`;

  html = html.replace(
    /<link rel="canonical" href="[^"]*" \/>\s*/g,
    '',
  );
  html = html.replace(
    /(<title>)/,
    `<link rel="canonical" href="${canonical}" />\n    $1`,
  );

  html = html.replace(/content="\/([^"]+\.(?:png|jpg|jpeg|webp|svg))"/g, `content="${siteUrl}/$1"`);

  if (page.structuredData) {
    html = html.replace(
      /<script type="application\/ld\+json">[\s\S]*?<\/script>\s*/g,
      '',
    );
    const jsonLd = JSON.stringify(page.structuredData);
    html = html.replace(
      /(<\/head>)/,
      `    <script type="application/ld+json">${jsonLd}</script>\n  $1`,
    );
  }

  await writeFile(page.file, html, 'utf8');
}

console.log(`Finalized absolute metadata for ${siteUrl}`);
