# Domain And Hosting Plan

Date updated: 2026-06-05

Production domain:

```text
https://korani.no/
```

## Current Decision

Korani Solutions AS should use a normal project repository and Hostinger hosting, not the old
GitHub user-pages repository.

```text
Source repository: Therealkorris/korani.no
Source branch: main
Hostinger deploy branch: hostinger
Production site URL: https://korani.no/
```

The old user-pages repository was only a temporary preview path and should not be the production
website.

## Hostinger Deploy

1. Build the site for the production domain:

   ```powershell
   $env:SITE_URL='https://korani.no'
   $env:VITE_BASE='/'
   npm run build
   ```

2. Publish the built `dist/` contents to the `hostinger` branch.
3. In Hostinger hPanel, connect GitHub repository `Therealkorris/korani.no`.
4. Select branch `hostinger`.
5. Deploy from root path `/`.

## DNS

`korani.no` is registered at Domeneshop. Use one of these approaches:

1. Preferred once Hostinger DNS records are correct: set Domeneshop navneservere to Hostinger:

   ```text
   orbit.dns-parking.com
   horizon.dns-parking.com
   ```

2. Alternative: keep Domeneshop DNS and point records to Hostinger:

   ```text
   A     @     82.25.102.1
   CNAME www   korani.no
   ```

## Google Play URLs

After deployment, use:

```text
Privacy policy: https://korani.no/privacy.html
App website: https://korani.no/trailready.html
Company website: https://korani.no/
Product overview: https://korani.no/products.html
```

TrailReady production builds should use:

```text
EXPO_PUBLIC_TRAILREADY_PRIVACY_URL=https://korani.no/privacy.html
```

## Sources

- Hostinger domain pointing guide: https://www.hostinger.com/support/1863967-how-to-point-a-domain-to-hostinger/
- Norid domain lookup and `.no` registry: https://www.norid.no/en/
