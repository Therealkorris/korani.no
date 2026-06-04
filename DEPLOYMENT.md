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
- `/privacy.html`
- `/robots.txt`

## Optional Environment Variables

- `SITE_URL`: absolute HTTPS production URL, for example `https://korani-solutions.no`.
  When set, the build generates `sitemap.xml`.
- `VITE_BASE`: base path for assets. Use `/` for a custom domain or root deploy. Use
  `/REPOSITORY-NAME/` for GitHub Pages without a custom domain.

Current temporary production target:

```text
SITE_URL=https://therealkorris.github.io
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

## GitHub Pages

The current GitHub Pages deploy publishes the built `dist/` folder to a `gh-pages` branch.

1. Build with the production URL:

   ```powershell
   $env:SITE_URL='https://therealkorris.github.io'
   $env:VITE_BASE='/'
   npm run build
   ```

2. Push the repository source to `main`.
3. Commit the contents of `dist/` to the `gh-pages` branch.
4. In GitHub, keep Pages source set to `Deploy from a branch`, `gh-pages`, `/`.

For a custom domain later, set `SITE_URL` to that domain and keep `VITE_BASE=/`.

## Google Play URLs

After deployment, use absolute HTTPS URLs:

```text
Privacy policy: https://therealkorris.github.io/privacy.html
App/support website: https://therealkorris.github.io/trailready.html
Company website: https://therealkorris.github.io/
Product overview: https://therealkorris.github.io/products.html
```

The privacy policy URL must stay publicly reachable while the app is available on Google Play.

For domain selection and Hostinger-specific setup, see [DOMAIN_HOSTING.md](DOMAIN_HOSTING.md).

## App Checklist

- Add the privacy URL in Play Console.
- Add a privacy link or visible privacy text inside TrailReady itself.
- Ensure the Play Console Data safety section matches `/privacy.html` and `GOOGLE_PLAY.md`.
- Keep the deployed privacy policy app-specific to TrailReady and Korani Solutions AS.
