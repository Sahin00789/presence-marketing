/**
 * Single source of truth for marketing copy that changes between deployments.
 * Everything here is safe to expose publicly (NEXT_PUBLIC_*), and every value
 * has a working default so the page renders without any environment setup.
 */
export const site = {
  name: "presence",
  tagline: "Attendance that runs itself.",
  description:
    "GPS-geofenced clock-in, on-device face verification, weekday shift rosters, leave requests with owner approval, an append-only salary ledger, live exception alerts, and owner-locked monthly payroll — built for one premises workspace.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://presence-selfattendance.vercel.app",
  apkUrl:
    process.env.NEXT_PUBLIC_APK_URL ??
    "https://github.com/Sahin00789/presence-android-app/releases/latest/download/presence.apk",
  releasesUrl:
    process.env.NEXT_PUBLIC_RELEASES_URL ??
    "https://github.com/Sahin00789/presence-android-app/releases/latest",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "sahin401099@gmail.com",
  ads: {
    client: process.env.NEXT_PUBLIC_ADSENSE_CLIENT ?? "",
    slot: process.env.NEXT_PUBLIC_ADSENSE_SLOT ?? "",
  },
} as const;

export const navLinks = [
  { href: "#features", label: "App screens" },
  { href: "#demo", label: "Live Demo" },
  { href: "#calculator", label: "Savings" },
  { href: "#faq", label: "FAQ" },
] as const;
