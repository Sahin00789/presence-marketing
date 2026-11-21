import {
  BellIcon,
  BuildingIcon,
  CalendarIcon,
  CheckIcon,
  ClockIcon,
  FaceIcon,
  MapPinIcon,
  MenuIcon,
  WalletIcon,
} from "./Icons";

export function PhoneMockup() {
  return (
    <div className="phone-stage">
      <div className="glow glow-indigo" aria-hidden="true" />
      <div className="glow glow-emerald" aria-hidden="true" />

      <div
        className="phone"
        role="img"
        aria-label="presence Clock In tab showing an assigned geofence premises, live GPS distance, shift time breakdown and earning rates"
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

          <div className="app-toolbar">
            <span className="app-toolbar-menu" aria-hidden="true">
              <MenuIcon className="icon-xs" />
            </span>
            <img src="/presence_logo_120x120.png" alt="" className="app-toolbar-logo" />
            <span className="app-toolbar-copy">
              <strong>Presence</strong>
              <small>Andheri Branch · Employee</small>
            </span>
            <span className="app-toolbar-bell" aria-hidden="true">
              <BellIcon className="icon-xs" />
            </span>
          </div>

          <div className="app-head">
            <div className="app-title-row">
              <strong className="app-title">Clock In</strong>
              <span className="ui-badge ui-badge-success">
                <i aria-hidden="true" /> Shift in Progress
              </span>
            </div>
            <p className="app-sub">Monday, 4 Nov · Shift attendance &amp; GPS</p>
          </div>

          <div className="app-card app-premises">
            <div className="ui-card-head">
              <span className="ui-icon ui-icon-emerald">
                <BuildingIcon className="icon-sm" />
              </span>
              <span className="ui-card-copy">
                <strong>Andheri Branch</strong>
                <small>Assigned Geofence Premises</small>
              </span>
              <span className="ui-badge ui-badge-success ui-badge-tiny">
                <i aria-hidden="true" /> Inside
              </span>
            </div>

            <div className="ui-metrics">
              <div>
                <small>Current Distance</small>
                <strong className="ui-ok">12 m</strong>
              </div>
              <div>
                <small>Allowed Boundary</small>
                <strong>50 m</strong>
              </div>
              <div>
                <small>GPS Accuracy</small>
                <strong className="ui-ok">±4 m</strong>
              </div>
            </div>

            <div className="ui-meter" aria-hidden="true"><span /></div>

            <div className="ui-card-foot">
              <span>18.8792° N, 72.8777° E</span>
              <button type="button" tabIndex={-1}>Update GPS</button>
            </div>
          </div>

          <div className="app-card app-shift-card">
            <div className="ui-card-head">
              <span className="ui-icon ui-icon-indigo">
                <CalendarIcon className="icon-sm" />
              </span>
              <span className="ui-card-copy">
                <strong>Morning Shift</strong>
                <small>Mon, 4 Nov · Scheduled Shift</small>
              </span>
              <span className="ui-badge ui-badge-success ui-badge-tiny">In Progress</span>
            </div>

            <p className="ui-section-label">Time Breakdown</p>
            <div className="ui-time-grid">
              <div><small>Scheduled Window</small><strong>09:00 – 18:00</strong></div>
              <div><small>Clock-In Time</small><strong className="ui-ok">09:02 · On time</strong></div>
              <div><small>Clock-Out Time</small><strong>Pending</strong></div>
              <div><small>Evaluated Status</small><strong className="ui-ok">Present</strong></div>
            </div>

            <p className="ui-section-label">Shift Earning Rates</p>
            <div className="ui-pay-chips">
              <span className="ui-pay-chip active"><small>Present</small><strong>₹800</strong></span>
              <span className="ui-pay-chip"><small>Half-Day</small><strong>₹400</strong></span>
              <span className="ui-pay-chip"><small>Absent</small><strong>₹0</strong></span>
            </div>

            <button type="button" className="ui-clock-out" tabIndex={-1}>
              <CheckIcon className="icon-xs" /> Clock Out
            </button>
          </div>

          <div className="app-tabs" aria-hidden="true">
            <span className="app-tab app-tab-active">
              <ClockIcon className="icon-sm" /> Clock In
            </span>
            <span className="app-tab">
              <CalendarIcon className="icon-sm" /> Attendance
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
          <small>FusedLocation · geodesic distance</small>
        </div>
      </div>

      <div className="float-card float-card-bottom" aria-hidden="true">
        <span className="float-icon float-icon-indigo">
          <FaceIcon className="icon-sm" />
        </span>
        <div>
          <strong>Face Verified Clock-In</strong>
          <small>Encrypted 128-D embedding</small>
        </div>
      </div>
    </div>
  );
}
