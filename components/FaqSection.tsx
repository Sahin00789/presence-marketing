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
    q: "How do employees sign in and get added to the organization?",
    a: "The Owner registers the organization and directly adds employees to the premises. Employees can then sign in using Email 6-Digit OTP or Google OAuth 2.0. Unregistered employees cannot self-register.",
  },
  {
    category: "Attendance & GPS",
    q: "How does face verification work, and does it work offline?",
    a: "Face verification runs entirely on-device using ONNX Runtime Mobile with YuNet (face detector with 5 landmark alignment) and SFace (recognizer generating a 128-D embedding vector). It works offline, storing clock-ins in the Room database and syncing when connectivity returns.",
  },
  {
    category: "Security & Privacy",
    q: "Are employee photos stored on any server?",
    a: "No. CameraX captures the camera frame solely to extract a 128-dimensional numerical embedding vector on-device. The raw image frame is discarded immediately and never stored or uploaded to any server.",
  },
  {
    category: "Attendance & GPS",
    q: "What happens if an employee leaves the premises mid-shift?",
    a: "While a shift is active, presence performs periodic GPS checks roughly every 10 minutes. If 3 consecutive pings occur outside the premises 50m geofence, an exception alert appears on the Owner Dashboard. The owner can mark the shift as Absent, Half-Day, or Resume tracking, and those actions stay available until the shift or overtime completes. If no action is taken, attendance defaults to Present.",
  },
  {
    category: "Attendance & GPS",
    q: "How do leave requests and approvals work?",
    a: "Employees raise a leave request against their assigned shift. The owner receives it on the dashboard and approves or rejects it. An approved request automatically marks attendance as LEAVE for that shift and posts the configured leave pay to the earning ledger. Pending or rejected requests never change attendance or pay.",
  },
  {
    category: "Attendance & GPS",
    q: "Can the owner manually correct an employee's attendance?",
    a: "Yes. From the attendance view the owner can set a shift to Absent, Half-Day, Leave or Present with a correction reason. For a live exception on the Owner Dashboard, the available actions are Absent, Half-Day and Resume tracking, and they remain active until the shift or overtime completes.",
  },
  {
    category: "Payroll & Ledger",
    q: "How are earnings calculated and stored?",
    a: "The backend server is authoritative. Shift earnings, holiday pay, off-day rules, and approved overtime write to an append-only staff earning ledger in exact whole Indian Rupees (₹) with zero floating-point drift. At month-end, the owner locks payroll for final payslips and records transactions (UPI, Bank Transfer, Cash).",
  },
  {
    category: "Security & Privacy",
    q: "Can an employee sign in on two phones at once?",
    a: "No. presence enforces a strict single-device concurrency rule for all roles (Owner & Employee). Refresh tokens are SHA-256 hashed in PostgreSQL logged_devices table. Signing in on a new device immediately revokes all prior active device sessions.",
  },
  {
    category: "Setup & Devices",
    q: "How many premises does version 1 support?",
    a: "Version 1 runs a single premises workspace per organization. The owner configures that premises address and its 50m geofence radius, and all employees, shifts and attendance are scoped to it. Only the Organization Owner can update premises settings, configure shift pay rates, lock monthly payroll, and approve ledger adjustments.",
  },
  {
    category: "Setup & Devices",
    q: "Do I need to buy fingerprint scanners or face machines?",
    a: "No extra hardware is needed. presence uses standard Android 8.0+ smartphones with CameraX and GPS, saving tens of thousands of rupees on dedicated hardware devices.",
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
          Have questions? Contact us at{" "}
          <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a> and we&apos;ll help you set up your team.
        </p>
      </div>
    </div>
  );
}
