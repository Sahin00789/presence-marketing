import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Privacy Policy — ${site.name}`,
  description: `Privacy Policy for ${site.name} Employee Attendance & Payroll System`,
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main id="main" className="container" style={{ padding: "4rem 1.5rem", width: "100%", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "700", marginBottom: "1rem" }}>Privacy Policy</h1>
        <p style={{ color: "#6b7280", marginBottom: "2.5rem", fontSize: "1.1rem" }}>
          Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
        </p>

        <section style={{ display: "flex", flexDirection: "column", gap: "2rem", lineHeight: "1.8", fontSize: "1.05rem" }}>
          <p>
            Welcome to <strong>{site.name}</strong> (&quot;Presence&quot;). We are committed to respecting and protecting the privacy of all employees, business owners, and users of our mobile application and platform services.
          </p>

          <div>
            <h2 style={{ fontSize: "1.75rem", fontWeight: "600", marginBottom: "0.75rem" }}>1. Information We Collect</h2>
            <p>We collect only the essential information necessary to provide attendance verification, shift scheduling, and salary ledger functionality:</p>
            <ul style={{ paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem", marginTop: "0.75rem" }}>
              <li>
                <strong>Account & Identity Data:</strong> When you sign in via Google OAuth or Email OTP, we collect your name, email address, and Google account identifier (sub) to create and authenticate your account session.
              </li>
              <li>
                <strong>Location Data (GPS):</strong> Location coordinates are checked during employee clock-in and periodically during active shifts (~every 10 minutes) solely to verify that attendance occurs within your organization&apos;s designated 50-meter premises geofence.
              </li>
              <li>
                <strong>On-Device Facial Embeddings:</strong> Facial verification uses CameraX to compute a 128-dimensional numerical feature vector on your device. <strong>Raw facial camera images are immediately discarded</strong> after feature extraction and are never uploaded, stored, or transmitted to our servers.
              </li>
              <li>
                <strong>Workforce & Payroll Records:</strong> Shift assignments, attendance timestamps, overtime records, and salary ledger calculations (in whole Indian Rupees ₹) configured by your organization&apos;s administrator.
              </li>
            </ul>
          </div>

          <div>
            <h2 style={{ fontSize: "1.75rem", fontWeight: "600", marginBottom: "0.75rem" }}>2. How We Use Your Information</h2>
            <p>Your data is used strictly for legitimate business workforce management purposes:</p>
            <ul style={{ paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem", marginTop: "0.75rem" }}>
              <li>Authenticating user access securely across authorized mobile devices.</li>
              <li>Verifying employee presence within assigned workplace geofences.</li>
              <li>Calculating shift earnings, holiday/off-day pay, overtime, and monthly payroll ledgers.</li>
              <li>Sending real-time exception alerts and notifications to organization owners.</li>
            </ul>
          </div>

          <div>
            <h2 style={{ fontSize: "1.75rem", fontWeight: "600", marginBottom: "0.75rem" }}>3. Google User Data Policy & Disclosure</h2>
            <p>
              Presence&apos;s use of information received from Google APIs adheres to the <strong>Google API Services User Data Policy</strong>, including Limited Use requirements:
            </p>
            <ul style={{ paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem", marginTop: "0.75rem" }}>
              <li>We request access only to basic profile information (email address, full name, profile picture).</li>
              <li>We do <strong>NOT</strong> sell, transfer, share, or use Google user data for serving advertisements, credit scoring, or data broker activities.</li>
              <li>Google user data is processed solely to authenticate your identity and log you into your assigned workspace.</li>
            </ul>
          </div>

          <div>
            <h2 style={{ fontSize: "1.75rem", fontWeight: "600", marginBottom: "0.75rem" }}>4. Data Protection & Security</h2>
            <p>
              All communications between the Presence mobile client and backend servers use mandatory TLS 1.3 encryption. Active sessions are authenticated via short-lived tokens and single-device concurrency checks. Storage of account data is restricted by multi-tenant organization identifiers.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: "1.75rem", fontWeight: "600", marginBottom: "0.75rem" }}>5. Data Retention & Account Deletion</h2>
            <p>
              We retain account data for as long as your organization maintains an active subscription. You or your organization administrator can request complete account and attendance data deletion at any time by contacting us at <a href={`mailto:${site.contactEmail}`} style={{ color: "#4f46e5", textDecoration: "underline" }}>{site.contactEmail}</a>.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: "1.75rem", fontWeight: "600", marginBottom: "0.75rem" }}>6. Contact Us</h2>
            <p>
              If you have any questions or privacy concerns regarding this Privacy Policy, please contact our privacy officer at:
            </p>
            <div style={{ background: "rgba(243, 244, 246, 0.7)", padding: "1.5rem", borderRadius: "12px", marginTop: "1rem", border: "1px solid #e5e7eb" }}>
              <strong>Presence Privacy Team</strong><br />
              Email: <a href={`mailto:${site.contactEmail}`} style={{ color: "#4f46e5", fontWeight: "500" }}>{site.contactEmail}</a><br />
              Website: <a href={site.url} style={{ color: "#4f46e5", fontWeight: "500" }}>{site.url}</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
