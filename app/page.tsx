import type { Metadata } from "next";
import { AdSlot } from "@/components/AdSlot";
import { ComparisonSection } from "@/components/ComparisonSection";
import { DownloadButtons } from "@/components/DownloadButtons";
import { FaqSection } from "@/components/FaqSection";
import { Header } from "@/components/Header";
import {
  BellIcon,
  CalendarIcon,
  ChartIcon,
  CheckIcon,
  FaceIcon,
  LockIcon,
  LogoMark,
  MapPinIcon,
  ShieldIcon,
  WalletIcon,
} from "@/components/Icons";
import { InteractiveDemo } from "@/components/InteractiveDemo";
import { PhoneMockup } from "@/components/PhoneMockup";
import { RoiCalculator } from "@/components/RoiCalculator";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { UseCasesSection } from "@/components/UseCasesSection";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `${site.name} — ${site.tagline}`,
  description: site.description,
};

const stats = [
  { value: "50 m", label: "Default premises geofence radius" },
  { value: "~10 min", label: "Live location checks on shift" },
  { value: ">3", label: "Outside pings before owner alert" },
  { value: "100%", label: "Integer-rupee salary ledger (₹)" },
];

const features = [
  {
    icon: FaceIcon,
    title: "Face + GPS clock-in",
    body: "Employees clock in only when they are inside the premises geofence and their face matches on-device via ONNX Runtime. No buddy punching, no shared PINs.",
    tone: "indigo",
  },
  {
    icon: MapPinIcon,
    title: "Live geofence monitoring",
    body: "Active shifts receive periodic location pings roughly every 10 minutes. Three consecutive outside readings raise an alert and notify the owner.",
    tone: "emerald",
  },
  {
    icon: CalendarIcon,
    title: "Shift rosters that fit",
    body: "Define weekday shifts with start and end times, half-day thresholds and per-day pay rates, then assign them per employee and premises.",
    tone: "amber",
  },
  {
    icon: WalletIcon,
    title: "Append-only salary ledger",
    body: "Every present day, holiday, off-day and overtime entry is written to an earning ledger in whole Indian Rupees (₹) that links back to its source record.",
    tone: "indigo",
  },
  {
    icon: ChartIcon,
    title: "Monthly payroll, locked",
    body: "The owner reviews the month and locks payroll with one tap. Employees get an itemised payslip they can check against their own ledger.",
    tone: "emerald",
  },
  {
    icon: BellIcon,
    title: "One dashboard, all premises",
    body: "See who is on shift across every branch. Override attendance as absent, half-day or leave until the shift or overtime is complete.",
    tone: "amber",
  },
] as const;

const ledgerRows = [
  { label: "Shift · Present", detail: "Mon, 4 Nov · 09:00 – 18:00", amount: "+₹800", tone: "present" },
  { label: "Weekly off", detail: "Sun, 3 Nov · paid off-day rule", amount: "+₹400", tone: "off" },
  { label: "Overtime", detail: "Sat, 2 Nov · 60 min approved", amount: "+₹250", tone: "overtime" },
];

const steps = [
  {
    title: "Set up the organisation",
    body: "Register with Email 6-Digit OTP or Google OAuth, create the organisation and add each premises with its address and 50 m geofence.",
    icon: ShieldIcon,
  },
  {
    title: "Add people and rosters",
    body: "Add employees to a premises, enrol their face once on-device, then assign weekday shifts and present/leave/off-day pay rates.",
    icon: FaceIcon,
  },
  {
    title: "Run the month",
    body: "The team clocks in with face + GPS. You resolve exceptions live, review the ledger, and lock monthly payroll.",
    icon: WalletIcon,
  },
];

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
      logo: `${site.url}/icon.svg`,
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
        {/* HERO SECTION */}
        <section className="hero" id="top">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">
                <span className="eyebrow-dot" aria-hidden="true" />
                Face + GPS verified attendance
              </p>
              <h1>
                Attendance that runs itself.
                <span className="hero-accent"> Payroll that adds up.</span>
              </h1>
              <p className="hero-lede">
                {site.name} replaces paper registers and expensive hardware with geofenced clock-ins,
                on-device face verification, weekday shift rosters, and an append-only salary ledger.
              </p>

              <DownloadButtons />

              <ul className="hero-points">
                <li>
                  <CheckIcon className="icon-xs" /> Zero biometric hardware
                </li>
                <li>
                  <CheckIcon className="icon-xs" /> Offline clock-in support
                </li>
                <li>
                  <CheckIcon className="icon-xs" /> Single active device rule
                </li>
              </ul>
            </div>

            <PhoneMockup />
          </div>

          <div className="container">
            <div className="stat-strip">
              {stats.map((stat) => (
                <div className="stat" key={stat.label}>
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INTERACTIVE LIVE DEMO */}
        <section className="section" id="demo">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Live App Simulator</p>
              <h2>Experience presence in action</h2>
              <p className="lede">
                Explore how owners oversee premises and resolve alerts, while employees clock in securely with face + GPS verification.
              </p>
            </div>

            <InteractiveDemo />
          </div>
        </section>

        {/* FEATURES GRID */}
        <section className="section section-muted" id="features">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Everything in one app</p>
              <h2>Built for the way small teams actually work</h2>
              <p className="lede">
                One place for owners, managers, and staff. No spreadsheets to reconcile, no separate hardware, no month-end guessing.
              </p>
            </div>

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
          </div>
        </section>

        <div className="container">
          <AdSlot />
        </div>

        {/* ROI SAVINGS CALCULATOR */}
        <section className="section" id="calculator">
          <div className="container">
            <RoiCalculator />
          </div>
        </section>

        {/* SALARY LEDGER SECTION */}
        <section className="section section-muted" id="ledger">
          <div className="container ledger-grid">
            <div className="ledger-copy">
              <p className="eyebrow">Salary ledger</p>
              <h2>Every rupee, traceable to a shift</h2>
              <p className="lede">
                Attendance writes earnings, never the other way around. Each entry points back to
                the shift, holiday, off-day or overtime that created it — in whole rupees, with zero floating-point drift.
              </p>

              <ul className="check-list">
                <li>
                  <span className="check-badge">
                    <CheckIcon className="icon-xs" />
                  </span>
                  <div>
                    <strong>Append-only by design</strong>
                    <p>Corrections are new entries, so history is never silently rewritten.</p>
                  </div>
                </li>
                <li>
                  <span className="check-badge">
                    <CheckIcon className="icon-xs" />
                  </span>
                  <div>
                    <strong>Owner-locked payroll</strong>
                    <p>Monthly payroll is reviewed and locked by the owner before payslips go out.</p>
                  </div>
                </li>
                <li>
                  <span className="check-badge">
                    <CheckIcon className="icon-xs" />
                  </span>
                  <div>
                    <strong>Transparent for employees</strong>
                    <p>Employees see the exact same ledger the payroll engine uses — no surprises.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="ledger-card-wrap">
              <div className="ledger-card">
                <div className="ledger-card-head">
                  <div>
                    <p className="ledger-kicker">November 2026</p>
                    <p className="ledger-title">Earnings statement</p>
                  </div>
                  <span className="pill pill-soft">Draft</span>
                </div>

                <div className="ledger-rows">
                  {ledgerRows.map((row) => (
                    <div className="ledger-row" key={row.label}>
                      <span className={`ledger-dot ledger-dot-${row.tone}`} aria-hidden="true" />
                      <div className="ledger-row-copy">
                        <strong>{row.label}</strong>
                        <small>{row.detail}</small>
                      </div>
                      <span className="ledger-amount">{row.amount}</span>
                    </div>
                  ))}
                </div>

                <div className="ledger-total">
                  <span>Total earned</span>
                  <strong>₹1,450</strong>
                </div>
                <p className="ledger-note">
                  <LockIcon className="icon-xs" /> Whole rupees only. Source records attached.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* COMPARISON MATRIX */}
        <section className="section" id="comparison">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Why presence</p>
              <h2>How presence compares to alternatives</h2>
              <p className="lede">
                Stop paying tens of thousands for hardware machines or complex enterprise software subscriptions.
              </p>
            </div>

            <ComparisonSection />
          </div>
        </section>

        {/* INDUSTRY USE CASES */}
        <section className="section section-muted" id="use-cases">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Tailored for your business</p>
              <h2>Designed for all types of workforce setups</h2>
              <p className="lede">
                Whether you manage a single shop or dozens of field teams, presence adapts to your exact setup.
              </p>
            </div>

            <UseCasesSection />
          </div>
        </section>

        {/* REVIEWS & TESTIMONIALS */}
        <section className="section" id="reviews">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Owner Feedback</p>
              <h2>Trusted by business owners and ops leads</h2>
              <p className="lede">
                Here is how presence helps owners run verified attendance and automated payroll effortlessly.
              </p>
            </div>

            <TestimonialsSection />
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="section section-muted" id="how-it-works">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">How it works</p>
              <h2>From first install to locked payroll</h2>
              <p className="lede">Three steps, one afternoon. No biometric devices to buy.</p>
            </div>

            <ol className="steps">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <li className="step" key={step.title}>
                    <div className="step-top">
                      <span className="step-number">{String(index + 1).padStart(2, "0")}</span>
                      <span className="step-icon">
                        <Icon className="icon" />
                      </span>
                    </div>
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                  </li>
                );
              })}
            </ol>
          </div>
        </section>

        {/* SECURITY & PRIVACY */}
        <section className="section section-dark" id="security">
          <div className="container security-grid">
            <div>
              <p className="eyebrow eyebrow-on-dark">Privacy &amp; security</p>
              <h2>Verification, without surveillance feel</h2>
              <p className="lede lede-on-dark">
                Verification happens on the employee&apos;s own phone. The backend receives what
                payroll needs — never raw camera frames or continuous location tracking history.
              </p>
            </div>

            <div className="security-grid-inner">
              <div className="security-item">
                <FaceIcon className="icon" />
                <h3>On-device face match</h3>
                <p>CameraX feeds a local ONNX model. The camera frame is discarded; only a 128-d numerical embedding is stored.</p>
              </div>
              <div className="security-item">
                <MapPinIcon className="icon" />
                <h3>Geofence, not tracking</h3>
                <p>Location is verified at clock-in and during ~10-minute shift checks within a 50m radius.</p>
              </div>
              <div className="security-item">
                <LockIcon className="icon" />
                <h3>Single-device sessions</h3>
                <p>Rotating refresh tokens are SHA-256 hashed in PostgreSQL. Signing in elsewhere revokes old device sessions.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="section" id="faq">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">FAQ</p>
              <h2>Frequently Asked Questions</h2>
              <p className="lede">
                Everything you need to know about setting up presence for your organization.
              </p>
            </div>

            <FaqSection />
          </div>
        </section>

        <div className="container">
          <AdSlot variant="card" label="Sponsored" />
        </div>

        {/* DOWNLOAD CTA PANEL */}
        <section className="section" id="download">
          <div className="container">
            <div className="cta-panel">
              <div className="cta-glow" aria-hidden="true" />
              <div className="cta-copy">
                <p className="eyebrow eyebrow-on-dark">Get the app</p>
                <h2>Put the register away for good</h2>
                <p className="lede lede-on-dark">
                  Download {site.name} for Android, add your premises, and run your first verified shift today.
                </p>
                <DownloadButtons tone="light" />
              </div>

              <div className="cta-meta">
                <div className="cta-meta-row">
                  <span className="cta-meta-icon">
                    <CheckIcon className="icon-sm" />
                  </span>
                  <div>
                    <strong>Android 8.0+</strong>
                    <small>Direct APK from GitHub Releases</small>
                  </div>
                </div>
                <div className="cta-meta-row">
                  <span className="cta-meta-icon">
                    <ShieldIcon className="icon-sm" />
                  </span>
                  <div>
                    <strong>Your data stays yours</strong>
                    <small>Multi-tenant, organisation-scoped access</small>
                  </div>
                </div>
                <div className="cta-meta-row">
                  <span className="cta-meta-icon">
                    <WalletIcon className="icon-sm" />
                  </span>
                  <div>
                    <strong>No credit card required</strong>
                    <small>Install the APK and start right away</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <a className="brand" href="#top">
              <LogoMark className="brand-mark" />
              <span className="brand-name">{site.name}</span>
            </a>
            <p>
              Attendance, shifts, and salary ledgers for small businesses that would rather run
              their team than a spreadsheet.
            </p>
          </div>

          <nav className="footer-col" aria-label="Product">
            <h3>Product</h3>
            <a href="#features">Features</a>
            <a href="#demo">Live Demo</a>
            <a href="#calculator">ROI Calculator</a>
            <a href="#ledger">Salary Ledger</a>
            <a href="#comparison">Why presence</a>
            <a href="#faq">FAQ</a>
          </nav>

          <nav className="footer-col" aria-label="Download">
            <h3>Download</h3>
            <a href={site.apkUrl}>Android APK</a>
            <a href={site.releasesUrl}>Release notes</a>
          </nav>

          <div className="footer-col">
            <h3>Contact</h3>
            <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>
            <a href={`mailto:${site.contactEmail}?subject=Advertising%20on%20presence`}>
              Advertise with us
            </a>
          </div>
        </div>

        <div className="container footer-bottom">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="footer-note">
            Advertise with us · <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>
          </p>
        </div>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
}
