"use client";

import { useState } from "react";
import {
  AlertTriangleIcon,
  BuildingIcon,
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
          <small>Multi-premises &amp; overrides</small>
        </button>

        <button
          type="button"
          className={`demo-tab ${activeTab === "employee" ? "active" : ""}`}
          onClick={() => setActiveTab("employee")}
        >
          <UserIcon className="icon-sm" />
          <span>Employee View</span>
          <small>Face + GPS clock-in &amp; ledger</small>
        </button>
      </div>

      <div className="demo-stage">
        {activeTab === "owner" ? (
          <div className="demo-view owner-view">
            <div className="demo-header-bar">
              <div>
                <span className="eyebrow eyebrow-sm">Owner Dashboard</span>
                <h3>Organization Overview</h3>
              </div>
              <div className="premises-selector">
                <span className="selector-label">
                  <BuildingIcon className="icon-xs" /> Filter Premises:
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

            <div className="demo-alert-box">
              <div className="demo-alert-header">
                <div className="demo-alert-title">
                  <span className="alert-icon-wrap">
                    <AlertTriangleIcon className="icon-sm" />
                  </span>
                  <div>
                    <strong>Monitoring Exception Alert</strong>
                    <small>Shift in progress · 3 consecutive pings outside 50 m geofence</small>
                  </div>
                </div>
                <span className="pill pill-warning">Outside Pings &gt; 3</span>
              </div>

              <div className="demo-alert-body">
                <div className="employee-info">
                  <span className="emp-avatar">RS</span>
                  <div>
                    <strong>Rohan Sharma</strong>
                    <p>Morning Shift (09:00 – 18:00) · {selectedPremises === "All Premises" ? "Andheri Branch" : selectedPremises}</p>
                    <small className="geo-ping">Last ping: 340 m outside premises geofence</small>
                  </div>
                </div>

                <div className="override-actions">
                  <p className="actions-label">Owner Action (Active until shift completes):</p>
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
                      Half Day
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
                      <CheckIcon className="icon-xs" /> Status manually updated to: <strong>{alertStatus}</strong>
                    </div>
                  )}
                  {alertStatus === "ALERT" && (
                    <p className="default-policy-note">
                      * If no action is taken before shift completes, attendance automatically <strong>defaults to Present</strong>.
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="demo-stats-grid">
              <div className="demo-mini-card">
                <span className="mini-card-icon icon-emerald">
                  <CheckIcon className="icon-sm" />
                </span>
                <div>
                  <span className="mini-val">18 / 20</span>
                  <span className="mini-lbl">Employees On Shift</span>
                </div>
              </div>
              <div className="demo-mini-card">
                <span className="mini-card-icon icon-indigo">
                  <ClockIcon className="icon-sm" />
                </span>
                <div>
                  <span className="mini-val">10 min</span>
                  <span className="mini-lbl">GPS Ping Interval</span>
                </div>
              </div>
              <div className="demo-mini-card">
                <span className="mini-card-icon icon-amber">
                  <LockIcon className="icon-sm" />
                </span>
                <div>
                  <span className="mini-val">Monthly Payroll</span>
                  <span className="mini-lbl">Locked by Owner</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="demo-view employee-view">
            <div className="demo-header-bar">
              <div>
                <span className="eyebrow eyebrow-sm">Employee Experience</span>
                <h3>On-Device Clock-In &amp; Earning Ledger</h3>
              </div>
              <span className="pill pill-present">
                <ShieldIcon className="icon-xs" /> Single Active Device
              </span>
            </div>

            <div className="employee-demo-grid">
              <div className="clock-sim-card">
                <div className="sim-header">
                  <span className="sim-dot" />
                  <strong>Clock-In Verification</strong>
                </div>

                <div className="sim-checks">
                  <div className="check-item check-pass">
                    <FaceIcon className="icon-sm" />
                    <div>
                      <strong>On-Device Face Verification</strong>
                      <p>ONNX Mobile model match: 99.4% confidence score</p>
                      <small>Camera frame discarded immediately · No cloud raw image upload</small>
                    </div>
                  </div>

                  <div className="check-item check-pass">
                    <MapPinIcon className="icon-sm" />
                    <div>
                      <strong>Premises Geofence Verified</strong>
                      <p>FusedLocation distance: 12 m (within 50 m radius)</p>
                      <small>Andheri Branch · Geodesic distance verified</small>
                    </div>
                  </div>

                  <div className="check-item check-pass">
                    <SmartphoneIcon className="icon-sm" />
                    <div>
                      <strong>Device Session Concurrency</strong>
                      <p>Active device verified via SHA-256 hashed refresh token</p>
                      <small>Prevents double sign-in or proxy clock-ins</small>
                    </div>
                  </div>
                </div>

                <div className="sim-clocked-badge">
                  <CheckIcon className="icon-sm" /> Clocked In at 09:02 AM
                </div>
              </div>

              <div className="ledger-sim-card">
                <div className="sim-header">
                  <WalletIcon className="icon-sm" />
                  <strong>Append-Only Earning Ledger</strong>
                </div>

                <div className="ledger-sim-list">
                  <div className="ledger-item">
                    <span className="l-dot l-present" />
                    <div className="l-info">
                      <strong>Shift · Present</strong>
                      <small>Mon, 4 Nov · 09:00 – 18:00</small>
                    </div>
                    <span className="l-amount">+₹800</span>
                  </div>

                  <div className="ledger-item">
                    <span className="l-dot l-off" />
                    <div className="l-info">
                      <strong>Weekly Off-Day</strong>
                      <small>Sun, 3 Nov · Paid off-day rule</small>
                    </div>
                    <span className="l-amount">+₹400</span>
                  </div>

                  <div className="ledger-item">
                    <span className="l-dot l-overtime" />
                    <div className="l-info">
                      <strong>Approved Overtime</strong>
                      <small>Sat, 2 Nov · 60 min worked</small>
                    </div>
                    <span className="l-amount">+₹250</span>
                  </div>
                </div>

                <div className="ledger-sim-total">
                  <span>Net Ledger Balance</span>
                  <strong>₹1,450 (Whole Rupees)</strong>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
