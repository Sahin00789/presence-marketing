import { BuildingIcon, CalendarIcon, MapPinIcon, ShieldIcon } from "./Icons";

const useCases = [
  {
    icon: BuildingIcon,
    title: "Retail Shops & Local Chains",
    subtitle: "Run your whole shop team from one premises workspace.",
    points: [
      "Set one 50m geofence around your shop",
      "Assign weekday shifts with morning & evening timings",
      "Owner gets an instant alert when staff leave the premises mid-shift",
    ],
    tone: "indigo",
  },
  {
    icon: CalendarIcon,
    title: "Warehouses & Factories",
    subtitle: "Coordinate shift rosters, weekly off-days, and overtime tracking.",
    points: [
      "Configure holiday & weekly off-day payment multipliers",
      "Approve overtime before it is worked",
      "Append-only ledger ensures transparent earnings for workers",
    ],
    tone: "emerald",
  },
  {
    icon: ShieldIcon,
    title: "Restaurants & Hospitality",
    subtitle: "Eliminate proxy attendance during split shifts and peak hours.",
    points: [
      "On-device face verification matches face templates in about a second",
      "Single-device restriction stops staff clocking in for friends",
      "Half-day thresholds handle half shifts automatically",
    ],
    tone: "amber",
  },
  {
    icon: MapPinIcon,
    title: "Field & Project Sites",
    subtitle: "Monitor your site team even when connectivity is intermittent.",
    points: [
      "Offline face verification runs locally using ONNX Runtime",
      "Queues attendance locally and syncs when back online",
      "Owner can review exceptions and lock payroll anytime",
    ],
    tone: "indigo",
  },
] as const;

export function UseCasesSection() {
  return (
    <div className="use-cases-grid">
      {useCases.map((uc) => {
        const Icon = uc.icon;
        return (
          <div className="use-case-card" key={uc.title}>
            <span className={`use-case-icon icon-${uc.tone}`}>
              <Icon className="icon-sm" />
            </span>
            <h3>{uc.title}</h3>
            <p className="use-case-sub">{uc.subtitle}</p>
            <ul className="use-case-points">
              {uc.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
