"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { ChevronDownIcon } from "./Icons";

const faqs = [
  {
    q: "How are employees added and how do they sign in?",
    a: "The Owner adds employees to the premises workspace. Employees then sign in with a 6-digit Email OTP or Google Sign-In; unregistered users cannot self-register.",
  },
  {
    q: "Does face verification work offline?",
    a: "Yes. YuNet and SFace run on-device with ONNX Runtime Mobile. Clock-ins are queued locally in Room and sync when connectivity returns. Raw camera frames are discarded immediately.",
  },
  {
    q: "Are employee photos stored on a server?",
    a: "No photos are stored. Only the numeric face embedding is sent to our backend, where it is encrypted at rest and used to verify clock-ins. An administrator can revoke and delete the face template at any time.",
  },
  {
    q: "What happens if someone leaves the premises mid-shift?",
    a: "Location is checked roughly every 10 minutes during a shift. Three consecutive pings outside the 50 m geofence raise an owner alert, which can be marked Absent, Half-Day or resumed.",
  },
  {
    q: "How do leave requests and overtime work?",
    a: "Employees request leave against a shift and the Owner approves or rejects it. Approved leave marks attendance as Leave and posts the configured pay. Overtime is booked by the Owner and paid through the same ledger.",
  },
  {
    q: "How are earnings calculated?",
    a: "The backend writes shift pay, holiday pay, off-day rules and approved overtime to an append-only ledger in whole Indian Rupees (₹). At month end the Owner locks payroll and records the disbursement.",
  },
  {
    q: "Can an account be used on two phones at once?",
    a: "No. presence allows one active device session per account. Signing in on a new device revokes the previous session.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="faq-container">
      <div className="faq-accordion-list">
        {faqs.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={item.q} className={`faq-acc-item ${isOpen ? "open" : ""}`}>
              <button
                type="button"
                className="faq-acc-trigger"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
              >
                <strong>{item.q}</strong>
                <ChevronDownIcon className={`icon-sm faq-acc-icon ${isOpen ? "rotate" : ""}`} />
              </button>
              {isOpen ? (
                <div className="faq-acc-content">
                  <p>{item.a}</p>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>

      <div className="faq-footer-note">
        <p>
          Still have questions? Email <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.
        </p>
      </div>
    </div>
  );
}
