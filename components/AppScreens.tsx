import {
  BuildingIcon,
  CalendarIcon,
  ChartIcon,
  CheckIcon,
  ClockIcon,
  FaceIcon,
  MapPinIcon,
  ShieldIcon,
  UsersIcon,
  WalletIcon,
} from "./Icons";

type ScreenItem = {
  title: string;
  subtitle: string;
  chip: string;
  icon: typeof ClockIcon;
  tone: "indigo" | "emerald" | "amber" | "violet";
};

const employeeScreens: ScreenItem[] = [
  { title: "Clock In", subtitle: "Face + GPS clock-in, geofence distance and shift timeline", chip: "GPS", icon: ClockIcon, tone: "emerald" },
  { title: "Attendance", subtitle: "Register log with exceptions needing review", chip: "LOG", icon: CalendarIcon, tone: "indigo" },
  { title: "Ledger", subtitle: "Salary payments and whole-rupee earning ledger", chip: "₹", icon: WalletIcon, tone: "emerald" },
  { title: "My Shifts", subtitle: "Weekly 7-day timetable and unwork payments", chip: "WEEK", icon: CalendarIcon, tone: "amber" },
  { title: "Check Biometric", subtitle: "Verify registration and test live face recognition", chip: "FACE", icon: FaceIcon, tone: "violet" },
  { title: "Assigned Overtimes", subtitle: "Approved overtime entries with hours and pay", chip: "OT", icon: ClockIcon, tone: "amber" },
  { title: "Holiday Calendar", subtitle: "Published holidays for your assigned premises", chip: "OFF", icon: CalendarIcon, tone: "violet" },
  { title: "Apply Leave", subtitle: "Raise leave requests and track the owner decision", chip: "LEAVE", icon: CalendarIcon, tone: "indigo" },
  { title: "My Salary", subtitle: "Monthly salary payments and earning breakdown", chip: "PAY", icon: WalletIcon, tone: "emerald" },
  { title: "My Attendance", subtitle: "Personal register log filtered by month", chip: "LOG", icon: CheckIcon, tone: "indigo" },
];

const ownerScreens: ScreenItem[] = [
  { title: "Workforce Directory", subtitle: "Profiles, shift schedules, rates and biometrics", chip: "TEAM", icon: UsersIcon, tone: "indigo" },
  { title: "Live Monitor", subtitle: "Clocked-in staff, geofence status and exceptions", chip: "LIVE", icon: MapPinIcon, tone: "emerald" },
  { title: "Reports", subtitle: "Present, absent and late-arrival summaries", chip: "STATS", icon: ChartIcon, tone: "violet" },
  { title: "Geofence Hub", subtitle: "Add premises and calibrate GPS boundaries", chip: "GEO", icon: BuildingIcon, tone: "emerald" },
  { title: "Roster Schedule", subtitle: "Create shifts with timing and half-day rules", chip: "SHIFT", icon: ClockIcon, tone: "amber" },
  { title: "Leave Desk", subtitle: "Approve or reject employee leave requests", chip: "APPROVE", icon: CalendarIcon, tone: "indigo" },
  { title: "Overtime Console", subtitle: "Review and confirm approved overtime hours", chip: "OT", icon: ClockIcon, tone: "amber" },
  { title: "Holiday Calendar", subtitle: "Publish holidays for one or all premises", chip: "OFF", icon: CalendarIcon, tone: "violet" },
  { title: "Payroll Console", subtitle: "Monthly payroll and employee salary roster", chip: "PAYROLL", icon: WalletIcon, tone: "emerald" },
  { title: "Organization Settings", subtitle: "Org details, branding and security access", chip: "ADMIN", icon: ShieldIcon, tone: "indigo" },
];

function ScreenList({ items }: { items: ScreenItem[] }) {
  return (
    <ul className="screen-list">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <li className="screen-row" key={item.title}>
            <span className={`screen-icon screen-icon-${item.tone}`}>
              <Icon className="icon-sm" />
            </span>
            <span className="screen-copy">
              <strong>{item.title}</strong>
              <small>{item.subtitle}</small>
            </span>
            <span className="screen-chip">{item.chip}</span>
          </li>
        );
      })}
    </ul>
  );
}

export function AppScreens() {
  return (
    <div className="screens-grid">
      <div className="screens-col">
        <div className="screens-col-head">
          <strong>Employee app</strong>
          <span>{employeeScreens.length} screens</span>
        </div>
        <ScreenList items={employeeScreens} />
      </div>

      <div className="screens-col">
        <div className="screens-col-head">
          <strong>Owner workspace</strong>
          <span>{ownerScreens.length} screens</span>
        </div>
        <ScreenList items={ownerScreens} />
      </div>
    </div>
  );
}
