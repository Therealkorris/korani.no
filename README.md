# Korani Solutions AS website

Public company website for Korani Solutions AS.

Production target:

```text
https://korani.no/
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

Deployment config is included for Hostinger Git deploy, Netlify (`netlify.toml`), and Vercel
(`vercel.json`).
See [DEPLOYMENT.md](DEPLOYMENT.md) for the production checklist.
See [DOMAIN_HOSTING.md](DOMAIN_HOSTING.md) for domain and Hostinger setup.
See [GOOGLE_PLAY.md](GOOGLE_PLAY.md) for TrailReady privacy/Data safety alignment notes.

## Pages

- `/` company and services website
- `/products.html` product overview for Search & Index, TrailReady, and internal tools
- `/trailready.html` TrailReady support / app landing page
- `/trailready/privacy` TrailReady privacy policy for Google Play / beta use
- `/robots.txt` crawler allow file

## Google Play notes

Use the deployed absolute URL for the privacy policy field in Play Console:

```text
https://korani.no/trailready/privacy
```

Use the deployed app/support page if Play Console asks for an app website or support URL:

```text
https://korani.no/trailready.html
```

The privacy policy is app-specific, names TrailReady and Korani Solutions AS, and covers local
storage, location/map/weather/fishing provider requests, photos/media, backups/sharing, no ads or
analytics SDK, deletion, security, and contact information.
