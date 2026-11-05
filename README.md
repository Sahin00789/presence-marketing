# presence — marketing site

A single-page Next.js marketing site for the **presence** Android app. It is
fully static, has no backend, and is intentionally kept separate from the
Android and API projects.

## Run locally

```bash
cd marketing
pnpm install
pnpm dev        # http://localhost:3001
```

Production build:

```bash
pnpm build
pnpm start      # http://localhost:3001
```

## Download link

The app is **not on Google Play** — the APK is distributed directly from
GitHub Releases. Every download button on the page points at the direct asset,
configured in `lib/site.ts`:

```
https://github.com/Sahin00789/presence-android-app/releases/latest/download/presence.apk
```

That URL always serves the APK attached to the newest release. To use a
different build host, set `NEXT_PUBLIC_APK_URL` (see `.env.example`). The
secondary button opens the release page for notes and older builds
(`NEXT_PUBLIC_RELEASES_URL`).

## Advertising

The page ships with two labelled ad placements:

1. An inline banner between the features and the salary-ledger sections.
2. A sponsored card before the final download section.

With no configuration they render house ads that invite sponsors to get in
touch at `NEXT_PUBLIC_CONTACT_EMAIL`.

To serve Google AdSense instead, copy `.env.example` to `.env.local` and set:

```bash
NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-xxxxxxxxxxxxxxxx
NEXT_PUBLIC_ADSENSE_SLOT=1234567890
```

The AdSense loader is only injected when `NEXT_PUBLIC_ADSENSE_CLIENT` is set,
and each placement renders a responsive `auto` unit.

## Editing content

- `lib/site.ts` — app name, URLs, contact email, ad credentials, nav links.
- `app/page.tsx` — all page copy and section structure.
- `app/globals.css` — design tokens and layout (indigo/emerald palette matching
  the Android design system).
- `components/` — phone mockup, download buttons, ad slots, inline icons.

## Deploy

Any static/Node host works. On Vercel, set the project root to `marketing/` and
add the optional environment variables. The page prerenders to static HTML.
