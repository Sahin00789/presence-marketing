import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Terms of Service — ${site.name}`,
  description: `Terms of Service for ${site.name} Employee Attendance & Payroll System`,
  alternates: { canonical: "/terms" },
};

const heading = { fontSize: "1.75rem", fontWeight: 600, marginBottom: "0.75rem" } as const;
const list = {
  paddingLeft: "1.5rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.75rem",
  marginTop: "0.75rem",
} as const;
const link = { color: "#4f46e5", textDecoration: "underline" } as const;
const callout = {
  background: "rgba(243, 244, 246, 0.7)",
  padding: "1.5rem",
  borderRadius: "12px",
  marginTop: "1rem",
  border: "1px solid #e5e7eb",
} as const;

export default function TermsPage() {
  return (
    <>
      <Header />
      <main id="main" className="container" style={{ padding: "4rem 1.5rem", width: "100%", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "700", marginBottom: "1rem" }}>Terms of Service</h1>
        <p style={{ color: "#6b7280", marginBottom: "2.5rem", fontSize: "1.1rem" }}>
          Last updated: November 22, 2026
        </p>

        <section
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            lineHeight: "1.8",
            fontSize: "1.05rem",
            maxWidth: "860px",
          }}
        >
          <p>
            By accessing or using <strong>{site.name}</strong> (&quot;Presence&quot;, &quot;we&quot;, &quot;us&quot;), including our Android app, website and APIs, you agree to be bound by these Terms of Service. If you do not agree, please do not use the service.
          </p>

          <div>
            <h2 style={heading}>1. Acceptance of Terms</h2>
            <p>
              If you create an organization or use the service as an Owner or Employee, you represent that you have authority to bind your business to these terms and to use the service in compliance with applicable law, including local labour and privacy regulations.
            </p>
          </div>

          <div>
            <h2 style={heading}>2. Use of Service &amp; Responsibilities</h2>
            <p>
              Presence provides attendance tracking, geofence and face verification, shift scheduling, leave management and salary ledger tools. Organization Owners are responsible for configuring premises and shifts correctly, for informing employees about location and biometric verification, and for the accuracy of payroll records and calculations.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              You must not misuse the service, attempt to bypass attendance checks, interfere with its operation, or use it to store unlawful content.
            </p>
          </div>

          <div>
            <h2 style={heading}>3. Accounts, Sign-In &amp; Security</h2>
            <p>You can sign in using Google Sign-In or Email OTP. You agree to:</p>
            <ul style={list}>
              <li>provide accurate account information and keep it up to date;</li>
              <li>keep your credentials and device secure, and notify us immediately of unauthorized access;</li>
              <li>accept that each account is limited to one active device session at a time, and that signing in elsewhere may revoke the previous session.</li>
            </ul>
          </div>

          <div>
            <h2 style={heading}>4. Data &amp; Privacy</h2>
            <p>
              Your use of the service is also governed by our{" "}
              <a href={`${site.url}/privacy`} style={link}>Privacy Policy</a>
              , which explains what data we collect, how we use it and how to request deletion. By granting location or camera permission, you consent to the processing described there for attendance verification.
            </p>
          </div>

          <div>
            <h2 style={heading}>5. Availability &amp; Modifications</h2>
            <p>
              We work to keep the service available and secure, but it is provided &quot;as is&quot; and may be interrupted by maintenance, outages or factors beyond our control. We may modify or discontinue features with reasonable notice. You are responsible for keeping backups of records that you rely on.
            </p>
          </div>

          <div>
            <h2 style={heading}>6. Contact Information</h2>
            <p>For support or legal inquiries, contact:</p>
            <div style={callout}>
              <strong>Presence Team</strong><br />
              Email: <a href={`mailto:${site.contactEmail}`} style={link}>{site.contactEmail}</a><br />
              Website: <a href={site.url} style={link}>{site.url}</a><br />
              Privacy Policy: <a href={`${site.url}/privacy`} style={link}>{site.url}/privacy</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
