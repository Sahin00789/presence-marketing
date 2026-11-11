import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Terms of Service — ${site.name}`,
  description: `Terms of Service for ${site.name} Employee Attendance & Payroll System`,
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main id="main" className="container" style={{ padding: "4rem 1.5rem", width: "100%", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "700", marginBottom: "1rem" }}>Terms of Service</h1>
        <p style={{ color: "#6b7280", marginBottom: "2.5rem", fontSize: "1.1rem" }}>
          Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
        </p>

        <section style={{ display: "flex", flexDirection: "column", gap: "2rem", lineHeight: "1.8", fontSize: "1.05rem" }}>
          <p>
            By accessing or using <strong>{site.name}</strong> (&quot;Presence&quot;), including our mobile applications, web platform, and APIs, you agree to be bound by these Terms of Service.
          </p>

          <div>
            <h2 style={{ fontSize: "1.75rem", fontWeight: "600", marginBottom: "0.75rem" }}>1. Acceptance of Terms</h2>
            <p>
              If you create an organization or access the service as an Owner or Employee, you represent that you have full authority to bind your business to these terms.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: "1.75rem", fontWeight: "600", marginBottom: "0.75rem" }}>2. Use of Service & Responsibilities</h2>
            <p>
              Presence provides attendance tracking, geofence verification, shift scheduling, and salary ledger tools. Organization Owners are responsible for ensuring that location tracking and biometric verification comply with local labor regulations and employee notice requirements.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: "1.75rem", fontWeight: "600", marginBottom: "0.75rem" }}>3. Account Security & Concurrency</h2>
            <p>
              Each user account is limited to one active device session at a time. Users must maintain the security of their login credentials (Email OTP / Google OAuth) and notify support immediately of any unauthorized account access.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: "1.75rem", fontWeight: "600", marginBottom: "0.75rem" }}>4. Modifications & Availability</h2>
            <p>
              We continuously update and optimize the service. We reserve the right to modify features, perform server maintenance, or update system requirements with reasonable notice.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: "1.75rem", fontWeight: "600", marginBottom: "0.75rem" }}>5. Contact Information</h2>
            <p>
              For any support or legal inquiries, please email us at <a href={`mailto:${site.contactEmail}`} style={{ color: "#4f46e5" }}>{site.contactEmail}</a>.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
