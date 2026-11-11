"use client";

import { useState } from "react";
import {
  AlertTriangleIcon,
  BuildingIcon,
  CalendarIcon,
  CheckIcon,
  FaceIcon,
  LockIcon,
  MapPinIcon,
  ShieldIcon,
  SmartphoneIcon,
  UserIcon,
  WalletIcon,
  XIcon,
} from "./Icons";

type ExceptionStatus = "ALERT" | "ABSENT" | "HALF_DAY" | "RESUME";
type LeaveStatus = "PENDING" | "APPROVED" | "REJECTED";

export function InteractiveDemo() {
  const [activeTab, setActiveTab] = useState<"owner" | "employee">("owner");
  const [exceptionStatus, setExceptionStatus] = useState<ExceptionStatus>("ALERT");
  const [leaveStatus, setLeaveStatus] = useState<LeaveStatus>("PENDING");

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
          <small>Live Monitor tab: exceptions &amp; leave approvals</small>
        </button>

        <button
          type="button"
          className={`demo-tab ${activeTab === "employee" ? "active" : ""}`}
          onClick={() => setActiveTab("employee")}
        >
          <UserIcon className="icon-sm" />
          <span>Employee View</span>
          <small>Clock In tab: face + GPS clock-in &amp; leave request</small>
        </button>
      </div>

      <div className="demo-stage">
        {activeTab === "owner" ? (
          <div className="demo-view owner-view">
            <div className="demo-header-bar">
              <div>
                <span className="eyebrow eyebrow-sm">Owner · Live Monitor tab</span>
                <h3>Live geofence monitoring &amp; exception resolution</h3>
              </div>
              <span className="pill pill-soft">
                <BuildingIcon className="icon-xs" /> Andheri Branch · 50 m geofence
              </span>
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
                    <small>Shift in progress · 3 consecutive pings outside the premises geofence</small>
                  </div>
                </div>
                <span className="pill pill-warning">Outside Count &gt; 3</span>
              </div>

              <div className="demo-alert-body">
                <div className="employee-info">
                  <span className="emp-avatar">RS</span>
                  <div>
                    <strong>Rohan Sharma</strong>
                    <p>Morning Shift (09:00 – 18:00) · Andheri Branch</p>
                    <small className="geo-ping">Last ping: 340 m outside the 50 m geodesic geofence</small>
                  </div>
                </div>

                <div className="override-actions">
                  <p className="actions-label">Owner Resolution Action (active until shift completes):</p>
                  <div className="action-buttons">
                    <button
                      type="button"
                      className={`btn-action btn-danger ${exceptionStatus === "ABSENT" ? "selected" : ""}`}
                      onClick={() => setExceptionStatus("ABSENT")}
                    >
                      Mark Absent
                    </button>
                    <button
                      type="button"
                      className={`btn-action btn-amber ${exceptionStatus === "HALF_DAY" ? "selected" : ""}`}
                      onClick={() => setExceptionStatus("HALF_DAY")}
                    >
                      Mark Half-Day
                    </button>
                    <button
                      type="button"
                      className={`btn-action btn-green ${exceptionStatus === "RESUME" ? "selected" : ""}`}
                      onClick={() => setExceptionStatus("RESUME")}
                    >
                      Resume Tracking
                    </button>
                  </div>

                  {exceptionStatus !== "ALERT" && (
                    <div className="action-status-msg">
                      <CheckIcon className="icon-xs" />
                      {exceptionStatus === "ABSENT" && (
                        <>Attendance marked <strong>Absent</strong>.</>
                      )}
                      {exceptionStatus === "HALF_DAY" && (
                        <>Attendance marked <strong>Half-Day</strong>.</>
                      )}
                      {exceptionStatus === "RESUME" && (
                        <>Tracking resumed · live pings continue until the shift ends.</>
                      )}
                    </div>
                  )}
                  {exceptionStatus === "ALERT" && (
                    <p className="default-policy-note">
                      * If no action is taken before the shift completes, attendance automatically{" "}
                      <strong>defaults to Present</strong>.
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* LEAVE REQUEST APPROVAL */}
            <div className="demo-leave-box">
              <div className="demo-alert-header">
                <div className="demo-alert-title">
                  <span className="alert-icon-wrap leave-icon-wrap">
                    <CalendarIcon className="icon-sm" />
                  </span>
                  <div>
                    <strong>Leave Request · Owner Approval</strong>
                    <small>Raised by the employee against an assigned shift</small>
                  </div>
                </div>
                <span
                  className={`pill ${
                    leaveStatus === "PENDING"
                      ? "pill-warning"
                      : leaveStatus === "APPROVED"
                        ? "pill-present"
                        : "pill-soft"
                  }`}
                >
                  {leaveStatus}
                </span>
              </div>

              <div className="demo-alert-body">
                <div className="employee-info">
                  <span className="emp-avatar emp-avatar-emerald">AK</span>
                  <div>
                    <strong>Aisha Khan</strong>
                    <p>Morning Shift (09:00 – 18:00) · Mon, 11 Nov</p>
                    <small>Reason: Family function · Leave pay ₹400 / day</small>
                  </div>
                </div>

                <div className="override-actions">
                  <p className="actions-label">Owner Review (approval sets attendance to LEAVE):</p>
                  <div className="action-buttons">
                    <button
                      type="button"
                      className={`btn-action btn-green ${leaveStatus === "APPROVED" ? "selected" : ""}`}
                      onClick={() => setLeaveStatus("APPROVED")}
                    >
                      Approve Leave
                    </button>
                    <button
                      type="button"
                      className={`btn-action btn-danger ${leaveStatus === "REJECTED" ? "selected" : ""}`}
                      onClick={() => setLeaveStatus("REJECTED")}
                    >
                      Reject
                    </button>
                  </div>

                  {leaveStatus === "APPROVED" && (
                    <div className="action-status-msg">
                      <CheckIcon className="icon-xs" /> Attendance marked <strong>LEAVE</strong> · ₹400 posted to the earning ledger.
                    </div>
                  )}
                  {leaveStatus === "REJECTED" && (
                    <div className="action-status-msg action-status-danger">
                      <XIcon className="icon-xs" /> Request rejected · the shift stays scheduled.
                    </div>
                  )}
                  {leaveStatus === "PENDING" && (
                    <p className="default-policy-note">
                      * Pending requests wait for the owner. Only an approved request changes attendance and pay.
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
                  <span className="mini-lbl">Shift creation, assignment &amp; half-day thresholds</span>
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
                <span className="eyebrow eyebrow-sm">Employee · Clock In tab</span>
                <h3>On-device biometric verification &amp; salary ledger</h3>
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
                      <p>Distance: 12 m (inside the 50 m premises geofence)</p>
                      <small>Andheri Branch · Lat/Lng geofence radius verified</small>
                    </div>
                  </div>

                  <div className="check-item check-pass">
                    <SmartphoneIcon className="icon-sm" />
                    <div>
                      <strong>Single Active Device Concurrency</strong>
                      <p>Session token verified via SHA-256 hash in PostgreSQL</p>
                      <small>Signing in elsewhere revokes the previous device session</small>
                    </div>
                  </div>
                </div>

                <div className="sim-clocked-badge">
                  <CheckIcon className="icon-sm" /> Clocked In at 09:02 AM · PRESENT
                </div>

                <div className="sim-leave-row">
                  <span className="sim-leave-label">
                    <CalendarIcon className="icon-xs" /> Leave request · Mon, 11 Nov
                  </span>
                  <span className="pill pill-warning">Pending approval</span>
                </div>
              </div>

              {/* EARNING LEDGER CARD */}
              <div className="ledger-sim-card">
                <div className="sim-header">
                  <WalletIcon className="icon-sm" />
                  <strong>Append-Only Staff Earning Ledger</strong>
                  <span className="pill pill-soft">Ledger tab</span>
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
