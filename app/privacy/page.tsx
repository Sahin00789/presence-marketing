import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Privacy Policy — ${site.name}`,
  description: `How ${site.name} collects, uses, shares and protects data in the presence employee attendance, shift and payroll app.`,
  alternates: { canonical: "/privacy" },
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

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main id="main" className="container" style={{ padding: "4rem 1.5rem", width: "100%", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "700", marginBottom: "1rem" }}>Privacy Policy</h1>
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
            Welcome to <strong>{site.name}</strong> (&quot;Presence&quot;, &quot;we&quot;, &quot;us&quot;). This policy explains what information we collect when you use the Presence Android app and related services, why we collect it, who we share it with, and what choices you have. By using Presence, you agree to this policy.
          </p>

          <div>
            <h2 style={heading}>1. Information We Collect</h2>
            <p>We collect only what is needed to run attendance verification, shift scheduling and payroll for your organization:</p>
            <ul style={list}>
              <li>
                <strong>Account and sign-in data.</strong> When you sign in with Google, we receive your Google account identifier (sub), email address, full name and profile picture from the basic profile scopes. When you sign in with Email OTP, we collect your email address. We also record session details such as device name, operating system, IP address and sign-in times.
              </li>
              <li>
                <strong>Location data.</strong> We collect GPS coordinates when you clock in or out and, during an active shift, from a foreground location service at regular intervals. Coordinates are compared with your organization&apos;s premises geofence (default radius: 50 metres) to verify attendance. To show a readable area name, coordinates may be sent to Ola Maps for reverse geocoding, with the device geocoder as a fallback.
              </li>
              <li>
                <strong>Face verification data.</strong> Camera frames are processed on your device to produce a numeric face embedding (128-dimensional vector) and liveness signals. <strong>Raw camera images are never uploaded or stored by us.</strong> The embedding is encrypted and sent to our backend, where it is stored as a face template so clock-in face checks can be matched against it. Your organization administrator can revoke and delete your face template at any time.
              </li>
              <li>
                <strong>Workforce and payroll records.</strong> Organization and employee profiles (name, employee code, department, designation, address and hire dates), premises address and coordinates, shifts and rosters, attendance timestamps, location checks, leave requests, holidays, overtime, and salary ledger and payroll entries configured by your organization administrator.
              </li>
              <li>
                <strong>Support communications.</strong> If you email us, we keep your message and contact details so we can respond to you.
              </li>
            </ul>
          </div>

          <div>
            <h2 style={heading}>2. How We Use Your Information</h2>
            <p>We use the data strictly to provide and secure the service:</p>
            <ul style={list}>
              <li>Authenticate you with Google Sign-In or Email OTP and keep sessions secure with short-lived access tokens, refresh-token rotation and single-active-device enforcement.</li>
              <li>Verify that attendance happens at the assigned premises using GPS and face matching, and alert owners to exceptions.</li>
              <li>Maintain shift rosters, leave approvals, overtime and salary/payroll ledgers for your organization.</li>
              <li>Send operational notifications such as shift reminders and exception alerts.</li>
              <li>Diagnose issues, prevent fraud or abuse, and meet legal obligations.</li>
            </ul>
            <p style={{ marginTop: "0.75rem" }}>We do not sell your personal data, and we do not use it for advertising.</p>
          </div>

          <div>
            <h2 style={heading}>3. Google Sign-In and Limited Use</h2>
            <p>
              Presence&apos;s use of information received from Google APIs adheres to the{" "}
              <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer" style={link}>
                Google API Services User Data Policy
              </a>
              , including the Limited Use requirements.
            </p>
            <ul style={list}>
              <li>We request only basic profile scopes (email, name and profile picture) needed to create your account and sign you in.</li>
              <li>Google profile data is used only to authenticate your identity and place you in your assigned workspace; it is never used for advertising, credit scoring or data brokering.</li>
              <li>We do not sell or transfer Google user data except to service providers acting on our instructions to operate the service as described below.</li>
              <li>You can revoke Presence&apos;s access at any time in your{" "}
                <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer" style={link}>
                  Google Account permissions
                </a>
                .
              </li>
            </ul>
          </div>

          <div>
            <h2 style={heading}>4. When We Share Data</h2>
            <p>We do not sell personal data. We disclose it only:</p>
            <ul style={list}>
              <li>
                <strong>Within your organization:</strong> owners and managers can view attendance, shifts, leave, payroll and face-verification status for their employees as part of workforce management.
              </li>
              <li>
                <strong>To service providers:</strong> our cloud hosting and database providers (which store app data and encrypted face templates), Google (sign-in and test-build distribution), Ola Maps or the device geocoder (reverse geocoding), and our email provider (OTP and support messages). They may process data only on our instructions.
              </li>
              <li>
                <strong>For legal or safety reasons:</strong> when required by law, or to protect the rights, safety and security of users or the service.
              </li>
              <li>
                <strong>With your direction:</strong> for example, if you ask us to share your records.
              </li>
            </ul>
          </div>

          <div>
            <h2 style={heading}>5. Data Retention and Deletion</h2>
            <p>
              We keep account, attendance and payroll records for as long as your organization uses Presence and as needed for payroll, legal and dispute-resolution purposes. Session records are kept while a session is active and for a limited period afterwards.
            </p>
            <p style={{ marginTop: "0.75rem" }}>
              To request deletion of your account and associated data, email{" "}
              <a href={`mailto:${site.contactEmail}`} style={link}>{site.contactEmail}</a>{" "}
              from the address linked to your account. We will verify the request and delete or anonymise your personal data within 30 days, except where retention is legally required. Your organization administrator can also revoke an employee, which deletes the stored face template.
            </p>
          </div>

          <div>
            <h2 style={heading}>6. Security</h2>
            <p>
              Data is encrypted in transit over HTTPS/TLS. Face embeddings are encrypted at rest before storage, OTP codes are hashed, and access is restricted by organization membership and role. Sessions use short-lived tokens, refresh-token rotation and one-active-device enforcement. No system is completely secure, but we work to protect your information.
            </p>
          </div>

          <div>
            <h2 style={heading}>7. Your Choices and Rights</h2>
            <ul style={list}>
              <li>You can decline location or camera permissions, but attendance verification features will not work.</li>
              <li>You can sign out, revoke a device session, or disconnect your Google account in your Google settings.</li>
              <li>You can ask to access, correct, export or delete your personal data by emailing us.</li>
              <li>Depending on where you live, you may have additional rights under applicable data protection law.</li>
            </ul>
          </div>

          <div>
            <h2 style={heading}>8. Children&apos;s Privacy</h2>
            <p>Presence is a workforce tool for employers and employees. It is not directed at children under 13, and we do not knowingly collect personal data from them.</p>
          </div>

          <div>
            <h2 style={heading}>9. Changes to This Policy</h2>
            <p>
              We may update this policy as the service evolves. The current version is always available at{" "}
              <a href={`${site.url}/privacy`} style={link}>{site.url}/privacy</a>
              , and we will update the &quot;Last updated&quot; date above when we make changes.
            </p>
          </div>

          <div>
            <h2 style={heading}>10. Contact Us</h2>
            <p>For privacy questions, data access or deletion requests, contact:</p>
            <div style={callout}>
              <strong>Presence Privacy Team</strong><br />
              Email: <a href={`mailto:${site.contactEmail}`} style={link}>{site.contactEmail}</a><br />
              Website: <a href={site.url} style={link}>{site.url}</a><br />
              Terms of Service: <a href={`${site.url}/terms`} style={link}>{site.url}/terms</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
