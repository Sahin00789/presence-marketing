import type { Metadata } from "next";
import { AdSlot } from "@/components/AdSlot";
import { ComparisonSection } from "@/components/ComparisonSection";
import { DownloadButtons } from "@/components/DownloadButtons";
import { FaqSection } from "@/components/FaqSection";
import { Header } from "@/components/Header";
import {
  CalendarIcon,
  ChartIcon,
  CheckIcon,
  ClockIcon,
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
  { value: "~10 min", label: "Live location pings on shift" },
  { value: "1", label: "Premises workspace in version 1" },
  { value: "100%", label: "Integer-rupee salary ledger (₹)" },
];

const features = [
  {
    icon: FaceIcon,
    title: "YuNet + SFace ONNX Clock-In",
    body: "Employees clock in inside the 50m geofence. YuNet 5-landmark alignment and SFace produce a 128-D embedding on-device. Raw frames are discarded immediately.",
    tone: "indigo",
  },
  {
    icon: MapPinIcon,
    title: "Live Shift Geofence Monitoring",
    body: "Active shifts receive location checks roughly every 10 minutes. Three consecutive outside pings open an exception, and the owner can mark it Absent or Half-Day until the shift finishes. No action defaults to Present.",
    tone: "emerald",
  },
  {
    icon: ClockIcon,
    title: "Shift Creation & Assignment",
    body: "Create weekday shifts with start and end times, a half-day threshold time, and Present, Absent, Leave and Half-Day pay rates. Assign them straight from an employee card in the single premises roster.",
    tone: "amber",
  },
  {
    icon: CalendarIcon,
    title: "Leave Requests & Owner Approval",
    body: "Employees raise leave against their assigned shift. The owner approves or rejects from the dashboard, and an approved request automatically marks attendance as Leave at the leave pay rate.",
    tone: "indigo",
  },
  {
    icon: WalletIcon,
    title: "Append-Only Salary Ledger",
    body: "Every present day, holiday, off-day and overtime entry is recorded in whole Indian Rupees (₹) in an append-only ledger linking directly to source records.",
    tone: "emerald",
  },
  {
    icon: ChartIcon,
    title: "Owner-Locked Payroll Engine",
    body: "The owner reviews month-end earnings, locks monthly payroll, and records salary disbursements via Bank Transfer, UPI, or Cash with itemized payslips.",
    tone: "amber",
  },
] as const;

const ledgerRows = [
  { label: "SHIFT · Present", detail: "Mon, 4 Nov · Morning Shift (09:00 – 18:00)", amount: "+₹800", tone: "present" },
  { label: "WEEKLY_OFF · Paid Off-Day", detail: "Sun, 3 Nov · Unworked Payment Rule", amount: "+₹400", tone: "off" },
  { label: "OVERTIME · 60 min Approved", detail: "Sat, 2 Nov · Booked by Owner", amount: "+₹250", tone: "overtime" },
];

const steps = [
  {
    title: "Register & Set Up Your Premises",
    body: "Sign in with Email OTP or Google OAuth, create your organization, and configure your single premises with address & 50m geofence radius.",
    icon: ShieldIcon,
  },
  {
    title: "Add Staff & Assign Shifts",
    body: "Add employees, enrol their face ONNX template on-device, create weekday shifts with pay rules, and assign them from each employee card.",
    icon: FaceIcon,
  },
  {
    title: "Run Shifts & Lock Payroll",
    body: "Staff clock in with face + GPS. Approve leave requests, resolve exception alerts live, review the append-only ledger, and lock monthly payroll.",
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
                On-Device Face + GPS Geofenced Attendance
              </p>
              <h1>
                Attendance that runs itself.
                <span className="hero-accent"> Payroll that adds up.</span>
              </h1>
              <p className="hero-lede">
                {site.name} replaces paper registers and expensive hardware with geofenced clock-ins,
                YuNet + SFace ONNX face verification, weekday shift rosters, leave approvals, and an
                append-only whole-rupee salary ledger — all for one premises workspace.
              </p>

              <DownloadButtons howItWorks />

              <ul className="hero-points">
                <li>
                  <CheckIcon className="icon-xs" /> Zero biometric hardware
                </li>
                <li>
                  <CheckIcon className="icon-xs" /> One premises workspace (v1)
                </li>
                <li>
                  <CheckIcon className="icon-xs" /> Offline Room DB queueing
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
                Explore how owners approve leave, resolve geofence alerts and manually mark Absent or Half-Day, while employees clock in securely with YuNet + SFace face verification.
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
                One app for owners and staff. One premises, no location switching, no spreadsheets to reconcile, no biometric hardware machines, no month-end payroll guessing.
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
                the shift, holiday, off-day or overtime that created it — in whole Indian Rupees (₹), with zero floating-point drift.
              </p>

              <ul className="check-list">
                <li>
                  <span className="check-badge">
                    <CheckIcon className="icon-xs" />
                  </span>
                  <div>
                    <strong>Append-only by design</strong>
                    <p>Corrections are new ledger entries, so historical records are never silently overwritten.</p>
                  </div>
                </li>
                <li>
                  <span className="check-badge">
                    <CheckIcon className="icon-xs" />
                  </span>
                  <div>
                    <strong>Owner-locked payroll</strong>
                    <p>Monthly payroll is locked by the owner before itemized payslips are generated.</p>
                  </div>
                </li>
                <li>
                  <span className="check-badge">
                    <CheckIcon className="icon-xs" />
                  </span>
                  <div>
                    <strong>Transparent for employees</strong>
                    <p>Employees see the exact same ledger entries the backend payroll engine computes.</p>
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
                  <LockIcon className="icon-xs" /> Whole integer rupees only. Source attendance records attached.
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
                Built for teams that work from one premises. Version 1 keeps setup to a single premises
                workspace per organization, with the geofence and roster configured for that location.
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
                <h3>On-device YuNet + SFace ONNX model</h3>
                <p>CameraX feeds a local ONNX model. 5-landmark face alignment produces a 128-d vector; raw frames are discarded instantly.</p>
              </div>
              <div className="security-item">
                <MapPinIcon className="icon" />
                <h3>Geofence, not tracking</h3>
                <p>Location is verified at clock-in and during ~10-minute shift pings within a 50m geodesic radius.</p>
              </div>
              <div className="security-item">
                <LockIcon className="icon" />
                <h3>Single-device sessions</h3>
                <p>Rotating refresh tokens are SHA-256 hashed in PostgreSQL logged_devices. Signing in elsewhere revokes old device sessions.</p>
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
                    <small>Multi-tenant, organization-scoped access</small>
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
            <h3>Legal & Contact</h3>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
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
