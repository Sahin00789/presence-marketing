import type { Metadata } from "next";
import { AdSlot } from "@/components/AdSlot";
import { DownloadButtons } from "@/components/DownloadButtons";
import { FaqSection } from "@/components/FaqSection";
import { Header } from "@/components/Header";
import {
  CalendarIcon,
  CheckIcon,
  ClockIcon,
  FaceIcon,
  MapPinIcon,
  WalletIcon,
} from "@/components/Icons";
import { InteractiveDemo } from "@/components/InteractiveDemo";
import { PhoneMockup } from "@/components/PhoneMockup";
import { Reveal } from "@/components/Reveal";
import { RoiCalculator } from "@/components/RoiCalculator";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `${site.name} — ${site.tagline}`,
  description: site.description,
};

const features = [
  {
    icon: FaceIcon,
    title: "Face-verified clock-in",
    body: "On-device YuNet + SFace matching inside the 50 m premises geofence. Raw camera frames never leave the phone.",
    tone: "indigo",
  },
  {
    icon: MapPinIcon,
    title: "Live shift exceptions",
    body: "Periodic GPS checks during shifts. Three outside pings raise an alert the owner can resolve in one tap.",
    tone: "emerald",
  },
  {
    icon: ClockIcon,
    title: "Shifts, leave & overtime",
    body: "Weekday rosters with pay rates, leave requests with owner approval, and approved overtime.",
    tone: "amber",
  },
  {
    icon: WalletIcon,
    title: "Salary ledger & payroll",
    body: "Every earning is recorded in whole rupees (₹), traced to its source, then locked into monthly payroll by the owner.",
    tone: "indigo",
  },
] as const;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: site.name,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Android 8.0+",
      description: site.description,
      downloadUrl: site.apkUrl,
      installUrl: site.apkUrl,
      offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
    },
    {
      "@type": "Organization",
      name: site.name,
      url: site.url,
      logo: `${site.url}/presence_logo_512x512.png`,
      contactPoint: {
        "@type": "ContactPoint",
        email: site.contactEmail,
        contactType: "customer service",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <Header />

      <main id="main">
        {/* HERO */}
        <section className="hero" id="top">
          <div className="container hero-grid">
            <Reveal className="hero-copy">
              <p className="eyebrow">
                <span className="eyebrow-dot" aria-hidden="true" />
                Face + GPS attendance for small teams
              </p>
              <h1>
                Attendance that runs itself.
                <span className="hero-accent"> Payroll that adds up.</span>
              </h1>
              <p className="hero-lede">
                {site.name} replaces paper registers with geofenced clock-ins, face verification,
                weekday shift rosters, leave approvals and a whole-rupee salary ledger — for one
                premises workspace.
              </p>

              <DownloadButtons />

              <ul className="hero-points">
                <li><CheckIcon className="icon-xs" /> No biometric hardware needed</li>
                <li><CheckIcon className="icon-xs" /> Android 8.0+ and offline queueing</li>
              </ul>
            </Reveal>

            <Reveal delay={0.12}>
              <PhoneMockup />
            </Reveal>
          </div>
        </section>

        {/* LIVE DEMO */}
        <section className="section" id="demo">
          <div className="container">
            <Reveal className="section-head">
              <p className="eyebrow">Live App Simulator</p>
              <h2>See presence in action</h2>
              <p className="lede">
                Approve leave, resolve geofence alerts and check the salary ledger — then clock in with face verification.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <InteractiveDemo />
            </Reveal>
          </div>
        </section>

        {/* FEATURES */}
        <section className="section section-muted" id="features">
          <div className="container">
            <Reveal className="section-head">
              <p className="eyebrow">Everything in one app</p>
              <h2>Built for the way small teams work</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="feature-grid">
                {features.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <article className="feature-card" key={feature.title}>
                      <span className={`feature-icon feature-icon-${feature.tone}`}>
                        <Icon className="icon" />
                      </span>
                      <h3>{feature.title}</h3>
                      <p>{feature.body}</p>
                    </article>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </section>

        {/* SAVINGS */}
        <section className="section" id="calculator">
          <div className="container">
            <Reveal>
              <RoiCalculator />
            </Reveal>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section-muted" id="faq">
          <div className="container">
            <Reveal className="section-head">
              <p className="eyebrow">FAQ</p>
              <h2>Common questions</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <FaqSection />
            </Reveal>
          </div>
        </section>

        <div className="container ad-container">
          <AdSlot variant="card" label="Sponsored" />
        </div>

        {/* DOWNLOAD */}
        <section className="section" id="download">
          <div className="container">
            <Reveal>
              <div className="cta-panel">
                <div className="cta-glow" aria-hidden="true" />
                <div className="cta-copy">
                  <p className="eyebrow eyebrow-on-dark">Get the app</p>
                  <h2>Put the register away for good</h2>
                  <p className="lede lede-on-dark">
                    Download {site.name} for Android, add your premises, and run your first verified shift today.
                  </p>
                  <a className="btn btn-primary btn-lg btn-on-dark" href={site.apkUrl}>
                    <CheckIcon className="icon" />
                    Download APK
                  </a>
                  <a className="cta-release-link" href={site.releasesUrl}>
                    View release notes
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <a className="brand" href="#top">
              <img src="/presence_logo_120x120.png" alt="" className="brand-mark" />
              <span className="brand-name">{site.name}</span>
            </a>
            <p>Attendance, shifts and salary ledgers for small businesses.</p>
          </div>

          <nav className="footer-col" aria-label="Product">
            <h3>Explore</h3>
            <a href="#features">Features</a>
            <a href="#demo">Live Demo</a>
            <a href="#calculator">Savings Estimator</a>
            <a href="#faq">FAQ</a>
          </nav>

          <nav className="footer-col" aria-label="Legal">
            <h3>Legal &amp; contact</h3>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>
            <a href={site.releasesUrl}>Release notes</a>
          </nav>
        </div>

        <div className="container footer-bottom">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        </div>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
}
