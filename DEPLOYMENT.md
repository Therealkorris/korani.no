# Korani Solutions AS Deployment

This site is a Vite static build. The public output is `dist/`.

## Preflight

```powershell
npm install
npm run build
```

Then verify these local URLs while the dev or preview server is running:

- `/`
- `/products.html`
- `/trailready.html`
- `/trailready/privacy.html`
- `/robots.txt`

## Optional Environment Variables

- `SITE_URL`: absolute HTTPS production URL, for example `https://korani-solutions.no`.
  When set, the build generates `sitemap.xml`.
- `VITE_BASE`: base path for assets. Use `/` for Hostinger, a custom domain, or a root deploy.

Production target:

```text
SITE_URL=https://korani.no
VITE_BASE=/
```

## Netlify

1. Create a new Netlify site from the repository.
2. Netlify should read `netlify.toml` automatically.
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Add `SITE_URL` in environment variables after you know the production domain.
6. Add the production domain in Netlify DNS/domain settings.

## Vercel

1. Create a new Vercel project from the repository.
2. Vercel should read `vercel.json` automatically.
3. Framework preset: Vite
4. Build command: `npm run build`
5. Output directory: `dist`
6. Add `SITE_URL` in environment variables after you know the production domain.
7. Add the production domain in Vercel domain settings.

## Hostinger Git Deploy

Hostinger should deploy the built static output from the `hostinger` branch of
`Therealkorris/korani.no`.

1. Build with the production URL:

   ```powershell
   $env:SITE_URL='https://korani.no'
   $env:VITE_BASE='/'
   npm run build
   ```

2. Push source to `main`.
3. Commit the contents of `dist/` to the `hostinger` branch.
4. In Hostinger hPanel, deploy from GitHub repository `Therealkorris/korani.no`, branch
   `hostinger`, root path `/`.

## Google Play URLs

After deployment, use absolute HTTPS URLs:

```text
Privacy policy: https://korani.no/trailready/privacy.html
App/support website: https://korani.no/trailready.html
Company website: https://korani.no/
Product overview: https://korani.no/products.html
```

The privacy policy URL must stay publicly reachable while the app is available on Google Play.

For domain selection and Hostinger-specific setup, see [DOMAIN_HOSTING.md](DOMAIN_HOSTING.md).

## App Checklist

- Add the privacy URL in Play Console.
- Add a privacy link or visible privacy text inside TrailReady itself.
- Ensure the Play Console Data safety section matches `/trailready/privacy.html` and `GOOGLE_PLAY.md`.
- Keep the deployed privacy policy app-specific to TrailReady and Korani Solutions AS.
