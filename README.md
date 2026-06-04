# Korani Solutions AS website

Public company website for Korani Solutions AS.

Current GitHub Pages target:

```text
https://therealkorris.github.io/
```

## Run locally

```powershell
npm install
npm run dev
```

## Build

```powershell
npm run build
```

## Deploy

Deployment config is included for Netlify (`netlify.toml`), Vercel (`vercel.json`), and GitHub
Pages via a published `gh-pages` branch.
See [DEPLOYMENT.md](DEPLOYMENT.md) for the production checklist.
See [GOOGLE_PLAY.md](GOOGLE_PLAY.md) for TrailReady privacy/Data safety alignment notes.

## Pages

- `/` company and services website
- `/trailready.html` TrailReady support / app landing page
- `/privacy.html` TrailReady privacy policy for Google Play / beta use
- `/robots.txt` crawler allow file

## Google Play notes

Use the deployed absolute URL for the privacy policy field in Play Console:

```text
https://therealkorris.github.io/privacy.html
```

Use the deployed app/support page if Play Console asks for an app website or support URL:

```text
https://therealkorris.github.io/trailready.html
```

The privacy policy is app-specific, names TrailReady and Korani Solutions AS, and covers local
storage, location/map/weather/fishing provider requests, photos/media, backups/sharing, no ads or
analytics SDK, deletion, security, and contact information.
