/**
 * Single source of truth for marketing copy that changes between deployments.
 * Everything here is safe to expose publicly (NEXT_PUBLIC_*), and every value
 * has a working default so the page renders without any environment setup.
 */
export const site = {
  name: "presence",
  tagline: "Attendance that runs itself.",
  description:
    "GPS-geofenced clock-in, on-device face verification, shift rosters, an append-only salary ledger and one-tap monthly payroll for small businesses.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://presence.app",
  apkUrl:
    process.env.NEXT_PUBLIC_APK_URL ??
    "https://github.com/Sahin00789/presence-android-app/releases/latest/download/presence.apk",
  releasesUrl:
    process.env.NEXT_PUBLIC_RELEASES_URL ??
    "https://github.com/Sahin00789/presence-android-app/releases/latest",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@presence.app",
  ads: {
    client: process.env.NEXT_PUBLIC_ADSENSE_CLIENT ?? "",
    slot: process.env.NEXT_PUBLIC_ADSENSE_SLOT ?? "",
  },
} as const;

export const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#ledger", label: "Salary ledger" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#faq", label: "FAQ" },
] as const;
