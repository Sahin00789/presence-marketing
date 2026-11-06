import { CalendarIcon, ChartIcon, CheckIcon, FaceIcon, MapPinIcon, WalletIcon } from "./Icons";

const week = [
  { day: "M", height: 62, tone: "present" },
  { day: "T", height: 78, tone: "present" },
  { day: "W", height: 48, tone: "present" },
  { day: "T", height: 88, tone: "present" },
  { day: "F", height: 70, tone: "present" },
  { day: "S", height: 34, tone: "half" },
  { day: "S", height: 12, tone: "off" },
];

export function PhoneMockup() {
  return (
    <div className="phone-stage">
      <div className="glow glow-indigo" aria-hidden="true" />
      <div className="glow glow-emerald" aria-hidden="true" />

      <div
        className="phone"
        role="img"
        aria-label="presence Android app screen showing YuNet and SFace ONNX face match, FusedLocation 50m geofence, weekday shift roster, and integer rupee salary ledger"
      >
        <div className="phone-notch" aria-hidden="true" />
        <div className="phone-screen">
          <div className="phone-status" aria-hidden="true">
            <span>9:41</span>
            <span className="phone-status-icons">
              <i className="signal" />
              <i className="wifi" />
              <i className="battery" />
            </span>
          </div>

          <div className="app-head">
            <div>
              <p className="app-hello">Good morning, Aisha</p>
              <p className="app-sub">Mon, 4 Nov · Andheri Branch (50m Geofence)</p>
            </div>
            <span className="app-avatar">A</span>
          </div>

          <div className="app-card app-clock">
            <div className="app-clock-top">
              <span className="pill pill-present">
                <CheckIcon className="icon-xs" /> Clocked In · PRESENT
              </span>
              <span className="app-clock-time">09:02 AM</span>
            </div>
            <p className="app-clock-label">Face + GPS Verified</p>
            <div className="app-verify">
              <span className="verify-chip">
                <FaceIcon className="icon-xs" /> YuNet + SFace (128-D)
              </span>
              <span className="verify-chip">
                <MapPinIcon className="icon-xs" /> FusedLocation 12 m
              </span>
            </div>
          </div>

          <div className="app-card app-shift">
            <div className="app-row">
              <span className="app-row-icon">
                <CalendarIcon className="icon-sm" />
              </span>
              <div>
                <p className="app-row-title">Morning Shift (Mon)</p>
                <p className="app-row-sub">09:00 – 18:00 · ₹800 present / ₹400 half-day</p>
              </div>
            </div>
            <span className="pill pill-soft">Active</span>
          </div>

          <div className="app-card app-week">
            <div className="app-week-head">
              <p className="app-row-title">Weekly Attendance</p>
              <span className="app-week-badge">5 Present · 1 Half-Day</span>
            </div>
            <div className="bars">
              {week.map((item, index) => (
                <div className="bar-col" key={`${item.day}-${index}`}>
                  <span className={`bar bar-${item.tone}`} style={{ height: `${item.height}%` }} />
                  <span className="bar-day">{item.day}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="app-card app-earn">
            <span className="app-row-icon app-row-icon-emerald">
              <WalletIcon className="icon-sm" />
            </span>
            <div>
              <p className="app-row-sub">Append-Only Salary Ledger</p>
              <p className="app-earn-value">₹12,400</p>
            </div>
            <span className="app-earn-cta">Payslip ›</span>
          </div>

          <div className="app-tabs" aria-hidden="true">
            <span className="app-tab app-tab-active">
              <ChartIcon className="icon-sm" /> Home
            </span>
            <span className="app-tab">
              <CalendarIcon className="icon-sm" /> Shifts
            </span>
            <span className="app-tab">
              <WalletIcon className="icon-sm" /> Ledger
            </span>
          </div>
        </div>
      </div>

      <div className="float-card float-card-top" aria-hidden="true">
        <span className="float-icon float-icon-emerald">
          <MapPinIcon className="icon-sm" />
        </span>
        <div>
          <strong>Inside 50 m Geofence</strong>
          <small>FusedLocation · Geodesic calculation</small>
        </div>
      </div>

      <div className="float-card float-card-bottom" aria-hidden="true">
        <span className="float-icon float-icon-indigo">
          <FaceIcon className="icon-sm" />
        </span>
        <div>
          <strong>YuNet + SFace ONNX Engine</strong>
          <small>128-D embedding · Raw frame discarded</small>
        </div>
      </div>
    </div>
  );
}
