"use client";

import { useMemo, useState } from "react";
import { site } from "@/lib/site";
import { ChevronDownIcon, SearchIcon } from "./Icons";

type FaqItem = {
  category: "Attendance & GPS" | "Security & Privacy" | "Payroll & Ledger" | "Setup & Devices";
  q: string;
  a: string;
};

const faqItems: FaqItem[] = [
  {
    category: "Setup & Devices",
    q: "How do employees get the app?",
    a: "Download the APK directly from this website or GitHub Releases and install it on any Android 8.0+ smartphone. The owner adds each employee to a premises first; employees then sign in using Email 6-Digit OTP or Google OAuth.",
  },
  {
    category: "Attendance & GPS",
    q: "Does the app work without internet?",
    a: "Yes! On-device face verification runs locally using ONNX Runtime Mobile, allowing clock-ins to be captured offline. Attendance and ledger records are queued locally in Room database and automatically uploaded when connectivity returns.",
  },
  {
    category: "Security & Privacy",
    q: "Are employee photos or camera frames stored?",
    a: "No. CameraX captures the camera frame solely to extract a 128-dimensional numerical embedding on-device. The raw image frame is instantly discarded and never stored or transmitted to any backend server.",
  },
  {
    category: "Attendance & GPS",
    q: "What happens if an employee leaves the premises mid-shift?",
    a: "While a shift is active, the app performs a live location check roughly every 10 minutes. If 3 consecutive outside readings occur, an exception alert is sent to the Owner dashboard. The owner can manually mark attendance as Absent, Half-Day, Leave, or Resume tracking. If no action is taken before shift end, attendance defaults to Present.",
  },
  {
    category: "Payroll & Ledger",
    q: "How is salary calculated and stored?",
    a: "The backend is authoritative. Shift earnings, holiday pay, off-day rules, and approved overtime write directly to an append-only staff earning ledger in exact whole Indian Rupees (₹). There are no floating-point rounding errors. At month-end, the owner locks payroll for final payslips.",
  },
  {
    category: "Security & Privacy",
    q: "Can an employee sign in on two phones at once?",
    a: "No. For all roles, presence enforces a strict single-device concurrency rule. Rotating refresh tokens are SHA-256 hashed in PostgreSQL. Signing in on a new device immediately revokes all previous active sessions.",
  },
  {
    category: "Payroll & Ledger",
    q: "Who can lock monthly payroll?",
    a: "Only the Organization Owner can lock monthly payroll. Owners are high-level administrators (stored via organization owner user ID) and maintain exclusive rights over payroll locking, financial approvals, and premises creation.",
  },
  {
    category: "Setup & Devices",
    q: "Do I need to buy expensive biometric fingerprint or face scanners?",
    a: "Not at all! presence runs on standard Android phones. Every employee or supervisor uses their existing phone camera and GPS, saving tens of thousands of rupees on dedicated hardware.",
  },
];

const categories = ["All", "Attendance & GPS", "Security & Privacy", "Payroll & Ledger", "Setup & Devices"] as const;

export function FaqSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [openIndexes, setOpenIndexes] = useState<Record<number, boolean>>({});

  const filteredFaqs = useMemo(() => {
    return faqItems.filter((item) => {
      const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
      const matchesQuery =
        !searchQuery ||
        item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.a.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  const toggleIndex = (index: number) => {
    setOpenIndexes((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="faq-container">
      <div className="faq-controls">
        <div className="search-input-wrap">
          <SearchIcon className="icon-sm search-icon" />
          <input
            type="text"
            placeholder="Search FAQ questions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="faq-search-input"
          />
        </div>

        <div className="faq-category-chips">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`chip ${selectedCategory === cat ? "chip-active" : ""}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {filteredFaqs.length === 0 ? (
        <div className="faq-empty">
          <p>No questions matching your search.</p>
          <button
            type="button"
            className="btn btn-ghost btn-sm"
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("All");
            }}
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="faq-accordion-list">
          {filteredFaqs.map((item, idx) => {
            const isOpen = openIndexes[idx] ?? false;
            return (
              <div key={item.q} className={`faq-acc-item ${isOpen ? "open" : ""}`}>
                <button
                  type="button"
                  className="faq-acc-trigger"
                  onClick={() => toggleIndex(idx)}
                  aria-expanded={isOpen}
                >
                  <div className="faq-acc-q">
                    <span className="faq-acc-cat">{item.category}</span>
                    <strong>{item.q}</strong>
                  </div>
                  <ChevronDownIcon className={`icon-sm faq-acc-icon ${isOpen ? "rotate" : ""}`} />
                </button>

                {isOpen && (
                  <div className="faq-acc-content">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      <div className="faq-footer-note">
        <p>
          Have more questions? Contact us at{" "}
          <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a> and we&apos;ll answer within 24 hours.
        </p>
      </div>
    </div>
  );
}
