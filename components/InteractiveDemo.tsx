"use client";

import { useState } from "react";
import {
  AlertTriangleIcon,
  BuildingIcon,
  CalendarIcon,
  CheckIcon,
  ClockIcon,
  FaceIcon,
  LockIcon,
  MapPinIcon,
  ShieldIcon,
  SmartphoneIcon,
  UserIcon,
  WalletIcon,
} from "./Icons";

export function InteractiveDemo() {
  const [activeTab, setActiveTab] = useState<"owner" | "employee">("owner");
  const [selectedPremises, setSelectedPremises] = useState("All Premises");
  const [alertStatus, setAlertStatus] = useState<"ALERT" | "ABSENT" | "HALF_DAY" | "LEAVE" | "RESUME">("ALERT");

  const premisesList = ["All Premises", "Andheri Branch", "Bandra Store", "Powai Hub"];

  return (
    <div className="demo-card-container">
      <div className="demo-tabs">
        <button
          type="button"
          className={`demo-tab ${activeTab === "owner" ? "active" : ""}`}
          onClick={() => setActiveTab("owner")}
        >
          <BuildingIcon className="icon-sm" />
          <span>Owner View</span>
          <small>Premises oversight, shifts &amp; exception overrides</small>
        </button>

        <button
          type="button"
          className={`demo-tab ${activeTab === "employee" ? "active" : ""}`}
          onClick={() => setActiveTab("employee")}
        >
          <UserIcon className="icon-sm" />
          <span>Employee View</span>
          <small>YuNet + SFace ONNX clock-in &amp; ledger</small>
        </button>
      </div>

      <div className="demo-stage">
        {activeTab === "owner" ? (
          <div className="demo-view owner-view">
            <div className="demo-header-bar">
              <div>
                <span className="eyebrow eyebrow-sm">Owner &amp; Admin Dashboard</span>
                <h3>Organization &amp; Workforce Oversight</h3>
              </div>
              <div className="premises-selector">
                <span className="selector-label">
                  <BuildingIcon className="icon-xs" /> Premises Filter:
                </span>
                <div className="premises-chips">
                  {premisesList.map((p) => (
                    <button
                      key={p}
                      type="button"
                      className={`chip ${selectedPremises === p ? "chip-active" : ""}`}
                      onClick={() => setSelectedPremises(p)}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* LIVE EXCEPTION ALERT */}
            <div className="demo-alert-box">
              <div className="demo-alert-header">
                <div className="demo-alert-title">
                  <span className="alert-icon-wrap">
                    <AlertTriangleIcon className="icon-sm" />
                  </span>
                  <div>
                    <strong>Monitoring Exception Alert</strong>
                    <small>Shift in progress · 3 consecutive pings outside premises geofence</small>
                  </div>
                </div>
                <span className="pill pill-warning">Outside Count &gt; 3</span>
              </div>

              <div className="demo-alert-body">
                <div className="employee-info">
                  <span className="emp-avatar">RS</span>
                  <div>
                    <strong>Rohan Sharma</strong>
                    <p>
                      Morning Shift (09:00 – 18:00) · {selectedPremises === "All Premises" ? "Andheri Branch" : selectedPremises}
                    </p>
                    <small className="geo-ping">Last ping: 340 m outside 50 m geodesic geofence</small>
                  </div>
                </div>

                <div className="override-actions">
                  <p className="actions-label">Owner Resolution Action (Active until shift completes):</p>
                  <div className="action-buttons">
                    <button
                      type="button"
                      className={`btn-action btn-danger ${alertStatus === "ABSENT" ? "selected" : ""}`}
                      onClick={() => setAlertStatus("ABSENT")}
                    >
                      Mark Absent
                    </button>
                    <button
                      type="button"
                      className={`btn-action btn-amber ${alertStatus === "HALF_DAY" ? "selected" : ""}`}
                      onClick={() => setAlertStatus("HALF_DAY")}
                    >
                      Mark Half-Day
                    </button>
                    <button
                      type="button"
                      className={`btn-action btn-blue ${alertStatus === "LEAVE" ? "selected" : ""}`}
                      onClick={() => setAlertStatus("LEAVE")}
                    >
                      Mark Leave
                    </button>
                    <button
                      type="button"
                      className={`btn-action btn-green ${alertStatus === "RESUME" ? "selected" : ""}`}
                      onClick={() => setAlertStatus("RESUME")}
                    >
                      Resume Tracking
                    </button>
                  </div>

                  {alertStatus !== "ALERT" && (
                    <div className="action-status-msg">
                      <CheckIcon className="icon-xs" /> Attendance status updated to: <strong>{alertStatus}</strong>
                    </div>
                  )}
                  {alertStatus === "ALERT" && (
                    <p className="default-policy-note">
                      * Default policy: If no action is taken before shift completes, attendance automatically <strong>defaults to Present</strong>.
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* OWNER METRICS & CONTROLS */}
            <div className="demo-stats-grid">
              <div className="demo-mini-card">
                <span className="mini-card-icon icon-emerald">
                  <CheckIcon className="icon-sm" />
                </span>
                <div>
                  <span className="mini-val">18 / 20 On Shift</span>
                  <span className="mini-lbl">Live Geofence Verified</span>
                </div>
              </div>

              <div className="demo-mini-card">
                <span className="mini-card-icon icon-indigo">
                  <CalendarIcon className="icon-sm" />
                </span>
                <div>
                  <span className="mini-val">Weekday Rosters</span>
                  <span className="mini-lbl">Custom Pay Rules &amp; Half-Day Thresholds</span>
                </div>
              </div>

              <div className="demo-mini-card">
                <span className="mini-card-icon icon-amber">
                  <LockIcon className="icon-sm" />
                </span>
                <div>
                  <span className="mini-val">Owner-Locked Payroll</span>
                  <span className="mini-lbl">Disburse via UPI / Bank / Cash</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="demo-view employee-view">
            <div className="demo-header-bar">
              <div>
                <span className="eyebrow eyebrow-sm">Employee Experience</span>
                <h3>On-Device Biometric Verification &amp; Salary Ledger</h3>
              </div>
              <span className="pill pill-present">
                <ShieldIcon className="icon-xs" /> Single Active Device
              </span>
            </div>

            <div className="employee-demo-grid">
              {/* CLOCK IN VERIFICATION CARD */}
              <div className="clock-sim-card">
                <div className="sim-header">
                  <span className="sim-dot" />
                  <strong>Clock-In Verification Pipeline</strong>
                </div>

                <div className="sim-checks">
                  <div className="check-item check-pass">
                    <FaceIcon className="icon-sm" />
                    <div>
                      <strong>YuNet + SFace ONNX Engine</strong>
                      <p>YuNet 5-landmark alignment → SFace 112x112 crop → 128-D vector</p>
                      <small>Frame discarded immediately · No cloud raw photo storage</small>
                    </div>
                  </div>

                  <div className="check-item check-pass">
                    <MapPinIcon className="icon-sm" />
                    <div>
                      <strong>FusedLocation Geodesic Check</strong>
                      <p>Distance: 12 m (inside 50 m premises geofence)</p>
                      <small>Andheri Branch · Lat/Lng geofence radius verified</small>
                    </div>
                  </div>

                  <div className="check-item check-pass">
                    <SmartphoneIcon className="icon-sm" />
                    <div>
                      <strong>Single Active Device Concurrency</strong>
                      <p>Session token verified via SHA-256 hash in PostgreSQL</p>
                      <small>Signing in elsewhere revokes previous device session</small>
                    </div>
                  </div>
                </div>

                <div className="sim-clocked-badge">
                  <CheckIcon className="icon-sm" /> Clocked In at 09:02 AM · PRESENT
                </div>
              </div>

              {/* EARNING LEDGER CARD */}
              <div className="ledger-sim-card">
                <div className="sim-header">
                  <WalletIcon className="icon-sm" />
                  <strong>Append-Only Staff Earning Ledger</strong>
                </div>

                <div className="ledger-sim-list">
                  <div className="ledger-item">
                    <span className="l-dot l-present" />
                    <div className="l-info">
                      <strong>SHIFT · Present</strong>
                      <small>Mon, 4 Nov · Morning Shift (09:00 – 18:00)</small>
                    </div>
                    <span className="l-amount">+₹800</span>
                  </div>

                  <div className="ledger-item">
                    <span className="l-dot l-off" />
                    <div className="l-info">
                      <strong>WEEKLY_OFF · Paid Off-Day</strong>
                      <small>Sun, 3 Nov · Unworked Payment Rule</small>
                    </div>
                    <span className="l-amount">+₹400</span>
                  </div>

                  <div className="ledger-item">
                    <span className="l-dot l-overtime" />
                    <div className="l-info">
                      <strong>OVERTIME · 60 min Approved</strong>
                      <small>Sat, 2 Nov · Booked by Owner</small>
                    </div>
                    <span className="l-amount">+₹250</span>
                  </div>
                </div>

                <div className="ledger-sim-total">
                  <span>Net Ledger Earnings</span>
                  <strong>₹1,450 (Whole Integer ₹)</strong>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
