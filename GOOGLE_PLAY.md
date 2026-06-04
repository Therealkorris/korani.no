# Google Play Notes For TrailReady

Use this as an internal checklist when filling Play Console. It should stay aligned with
`public/trailready/privacy/index.html` and the current app behavior.

## Required URLs After Deployment

```text
Company website: https://korani.no/
TrailReady support/app page: https://korani.no/trailready.html
Privacy policy: https://korani.no/trailready/privacy
```

Google Play also requires a privacy link or privacy text inside the app itself.
TrailReady reads that link from `EXPO_PUBLIC_TRAILREADY_PRIVACY_URL`.

## Current Beta Privacy Posture

- Local-first beta.
- No Korani Solutions user account system.
- No Korani Solutions cloud sync.
- No analytics SDK.
- No crash-reporting SDK.
- No advertising SDK.
- User-created trip, gear, packing, note, route, profile preference, weather cache, and backup/import
  state are stored locally on the device.
- External network requests may occur when users use features that need them, such as maps, route
  planning, place search, MET weather, fishing water, or fishing evidence.
- Photos/media are accessed only if the user chooses to add selected media and grants the operating
  system permission.
- Backup/share files, links, or codes can include user-created trip, gear, packing, note, route, or
  related app data and should only be shared with trusted people.

## Data Safety Alignment Draft

Confirm these in the final Play Console Data safety form against the exact release build:

- Location: may be accessed or sent to providers only when location/map/route/weather/fishing features
  are used.
- Photos and videos: may be accessed if the user selects media for app content.
- App activity or app info: no analytics SDK in the current beta.
- Personal info: no account system in the current beta.
- Files and docs: backup/import/export can contain user-created app content.
- Data sharing: user-requested provider calls can share coordinates/places/routes/queries needed to
  return maps, routes, weather, fishing water, or fishing evidence. User-created backups/share links
  can be shared by the user.
- Data deletion: because beta data is local-first, deleting the app or clearing app storage can remove
  local data; users should export a backup before uninstalling if they want to keep it.

## Before Public Release

- Re-check the final APK/AAB for analytics, crash reporting, ads, accounts, cloud sync, and permission
  changes.
- Re-check map, route, weather, place search, and fishing provider behavior.
- Keep `/trailready/privacy` updated if the app adds accounts, cloud sync, analytics, crash reporting, ads, or
  new external providers.
- Keep the Play Console Data safety section consistent with `/trailready/privacy`.
- Set `EXPO_PUBLIC_TRAILREADY_PRIVACY_URL=https://korani.no/trailready/privacy` in the
  production app build environment.
