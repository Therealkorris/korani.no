# Domain And Hosting Plan

Date checked: 2026-06-04

Current live site:

```text
https://therealkorris.github.io/
```

## Recommended Domains

These domains returned no RDAP registration and no A/MX/NS DNS records in the local checks. Treat
them as likely available until confirmed at checkout.

1. `korani.no`
   - Best short Norwegian business domain.
   - Good for email: `jonas@korani.no`.

2. `koranisolutions.no`
   - Best exact company-name domain.
   - More formal, slightly longer.

3. `koranisolutions.com`
   - Good international fallback.
   - Useful if `.no` is kept as the Norwegian primary.

4. `korani.dev`
   - Strong developer/consultant signal.
   - Better as secondary domain than main company domain.

5. `korani.ai`
   - Strong AI signal.
   - Usually more expensive and more trend-sensitive than `.no`.

Recommended final choice:

```text
Primary: korani.no
Secondary redirect: koranisolutions.no
```

## Hosting Option A: Keep GitHub Pages, Buy Domain At Hostinger

This is the simplest static-site setup. Hostinger is only the domain/DNS provider; GitHub Pages keeps
serving the site.

1. Buy `korani.no` or `koranisolutions.no`.
2. In GitHub repo `Therealkorris/Therealkorris.github.io`, set Pages custom domain to the chosen
   domain.
3. In the domain DNS zone, add GitHub Pages records:

```text
A     @     185.199.108.153
A     @     185.199.109.153
A     @     185.199.110.153
A     @     185.199.111.153
CNAME www   therealkorris.github.io
```

4. Wait for DNS propagation.
5. Enable HTTPS in GitHub Pages.
6. Rebuild and redeploy with:

```powershell
$env:SITE_URL='https://korani.no'
$env:VITE_BASE='/'
npm run build
```

Then publish `dist/` to `gh-pages` again.

## Hosting Option B: Host The Static Site At Hostinger

Use this if you want Hostinger to serve the actual website files.

1. In Hostinger hPanel, create/add a website for the chosen domain.
2. Build the site locally:

```powershell
$env:SITE_URL='https://korani.no'
$env:VITE_BASE='/'
npm run build
```

3. Upload the contents of `dist/` to Hostinger's web root, usually `public_html`.
4. In DNS, either:
   - use the nameservers shown in Hostinger hPanel, or
   - keep DNS elsewhere and point A records to the IP shown by Hostinger.
5. Confirm these public URLs:

```text
https://korani.no/
https://korani.no/trailready.html
https://korani.no/privacy.html
```

## Google Play After Custom Domain

When the custom domain is live, update:

```text
Privacy policy: https://korani.no/privacy.html
App website: https://korani.no/trailready.html
Company website: https://korani.no/
```

TrailReady currently has `https://therealkorris.github.io/privacy.html` as a safe default. If the
policy moves to `korani.no`, set:

```text
EXPO_PUBLIC_TRAILREADY_PRIVACY_URL=https://korani.no/privacy.html
```

## Sources

- GitHub Pages custom domain DNS: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
- Hostinger domain pointing guide: https://www.hostinger.com/support/1863967-how-to-point-a-domain-to-hostinger/
- Norid domain lookup and `.no` registry: https://www.norid.no/en/
