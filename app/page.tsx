import type { Metadata } from "next";
import { AdSlot } from "@/components/AdSlot";
import { DownloadButtons } from "@/components/DownloadButtons";
import {
  ArrowRightIcon,
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
import { PhoneMockup } from "@/components/PhoneMockup";
import { navLinks, site } from "@/lib/site";

export const metadata: Metadata = {
  title: `${site.name} — ${site.tagline}`,
  description: site.description,
};

const stats = [
  { value: "50 m", label: "Default premises geofence" },
  { value: "~10 min", label: "Live location checks on shift" },
  { value: ">3", label: "Outside pings before an alert" },
  { value: "100%", label: "Integer-rupee salary ledger" },
];

const features = [
  {
    icon: FaceIcon,
    title: "Face + GPS clock-in",
    body: "Employees clock in only when they are inside the premises geofence and their face matches on-device. No buddy punching, no shared PINs.",
    tone: "indigo",
  },
  {
    icon: MapPinIcon,
    title: "Live geofence monitoring",
    body: "Active shifts get a location check roughly every 10 minutes. Three consecutive outside readings raise an exception and notify the owner.",
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
    body: "Every present day, holiday, off-day and overtime entry is written to an earning ledger that links back to its source record.",
    tone: "indigo",
  },
  {
    icon: ChartIcon,
    title: "Monthly payroll, locked",
    body: "The owner reviews the month and locks payroll. Employees get an itemised payslip they can check against their own ledger.",
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
    body: "Register with email OTP or Google, create the organisation and add each premises with its address and 50 m geofence.",
    icon: ShieldIcon,
  },
  {
    title: "Add people and rosters",
    body: "Add employees to a premises, enrol their face once on-device, then assign weekday shifts and pay rates.",
    icon: FaceIcon,
  },
  {
    title: "Run the month",
    body: "The team clocks in with face + GPS. You resolve exceptions live, then review the ledger and lock payroll.",
    icon: WalletIcon,
  },
];

const faqs = [
  {
    q: "How do employees get the app?",
    a: "Download the APK from this page and install it on the Android phone. The owner adds each employee to a premises first; employees then sign in with email OTP or Google and are ready to clock in.",
  },
  {
    q: "Does the app work without internet?",
    a: "Face verification runs entirely on the device with ONNX Runtime, so a clock-in can be captured offline and synced. Attendance and ledger writes still need the server, so the app queues locally and uploads when connectivity returns.",
  },
  {
    q: "Are employee photos stored?",
    a: "No. Face templates are reduced to numerical embeddings on the device, and raw camera frames are discarded after feature extraction. Only the embedding is transmitted and stored.",
  },
  {
    q: "What happens if someone leaves the premises mid-shift?",
    a: "While a shift is active the app checks location about every 10 minutes. Three consecutive outside readings raise a monitoring exception and alert the owner. If no action is taken before the shift ends, attendance defaults to present.",
  },
  {
    q: "How is salary calculated?",
    a: "The backend is authoritative. Shift, holiday, off-day and overtime earnings are written to an append-only ledger in whole rupees, then consolidated into a monthly payroll the owner locks.",
  },
  {
    q: "Can one person use two phones?",
    a: "No. Only one active device session is allowed per user. Signing in on a new phone revokes the previous session immediately.",
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
      "@type": "FAQPage",
      mainEntity: faqs.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <div className="topbar">
        <span className="topbar-dot" aria-hidden="true" />
        <p>
          <strong>Now available for Android.</strong> Face + GPS verified attendance, shifts and payroll in one app.
        </p>
        <a href={site.apkUrl}>
          Download free
          <ArrowRightIcon className="icon-xs" />
        </a>
      </div>

      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#top" aria-label={`${site.name} home`}>
            <LogoMark className="brand-mark" />
            <span className="brand-name">{site.name}</span>
          </a>

          <nav className="site-nav" aria-label="Main">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <a className="btn btn-primary btn-sm header-cta" href={site.apkUrl}>
            Download app
          </a>
        </div>
      </header>

      <main id="main">
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
                {site.name} replaces the paper register with geofenced clock-ins, on-device face
                verification, weekday shift rosters and a salary ledger that every employee can
                check for themselves.
              </p>

              <DownloadButtons />

              <ul className="hero-points">
                <li>
                  <CheckIcon className="icon-xs" /> No biometric hardware
                </li>
                <li>
                  <CheckIcon className="icon-xs" /> Works offline
                </li>
                <li>
                  <CheckIcon className="icon-xs" /> One device per user
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

        <section className="section" id="features">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Everything in one app</p>
              <h2>Built for the way small teams actually work</h2>
              <p className="lede">
                One place for the owner, the manager and the team. No spreadsheets to reconcile, no
                separate attendance machine, no month-end guessing.
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

        <section className="section section-muted" id="ledger">
          <div className="container ledger-grid">
            <div className="ledger-copy">
              <p className="eyebrow">Salary ledger</p>
              <h2>Every rupee, traceable to a shift</h2>
              <p className="lede">
                Attendance writes earnings, never the other way around. Each entry points back to
                the shift, holiday, off-day or overtime that created it — in whole rupees, with no
                floating-point drift.
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
                    <p>Employees see the same ledger the payroll engine uses — no surprises.</p>
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

        <section className="section" id="how-it-works">
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

        <section className="section section-dark" id="security">
          <div className="container security-grid">
            <div>
              <p className="eyebrow eyebrow-on-dark">Privacy &amp; security</p>
              <h2>Monitoring, without the surveillance feel</h2>
              <p className="lede lede-on-dark">
                Verification happens on the employee&apos;s own phone. The backend only receives what
                payroll actually needs — never raw camera frames or continuous location history.
              </p>
            </div>

            <div className="security-grid-inner">
              <div className="security-item">
                <FaceIcon className="icon" />
                <h3>On-device face match</h3>
                <p>CameraX feeds a local ONNX model. The frame is discarded; only a numerical embedding is stored.</p>
              </div>
              <div className="security-item">
                <MapPinIcon className="icon" />
                <h3>Geofence, not tracking</h3>
                <p>Location is read at clock-in and on the ~10-minute shift checks, then written to the attendance record.</p>
              </div>
              <div className="security-item">
                <LockIcon className="icon" />
                <h3>Single-device sessions</h3>
                <p>Rotating refresh tokens are hashed in the database. Signing in elsewhere revokes the old device.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="faq">
          <div className="container faq-grid">
            <div className="faq-intro">
              <p className="eyebrow">FAQ</p>
              <h2>Questions owners ask first</h2>
              <p className="lede">
                Still unsure? Email{" "}
                <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a> and we&apos;ll walk
                through your shift setup.
              </p>
            </div>

            <div className="faq-list">
              {faqs.map((item) => (
                <details className="faq-item" key={item.q}>
                  <summary>
                    <span>{item.q}</span>
                    <span className="faq-plus" aria-hidden="true" />
                  </summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <div className="container">
          <AdSlot variant="card" label="Sponsored" />
        </div>

        <section className="section" id="download">
          <div className="container">
            <div className="cta-panel">
              <div className="cta-glow" aria-hidden="true" />
              <div className="cta-copy">
                <p className="eyebrow eyebrow-on-dark">Get the app</p>
                <h2>Put the register away for good</h2>
                <p className="lede lede-on-dark">
                  Download {site.name} for Android, add your premises and run your first verified
                  shift today.
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
                    <strong>No card to download</strong>
                    <small>Install the APK and sign in</small>
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
              Attendance, shifts and salary ledgers for small businesses that would rather run
              their team than a spreadsheet.
            </p>
          </div>

          <nav className="footer-col" aria-label="Product">
            <h3>Product</h3>
            <a href="#features">Features</a>
            <a href="#ledger">Salary ledger</a>
            <a href="#how-it-works">How it works</a>
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
