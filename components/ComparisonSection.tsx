import { CheckIcon, XIcon } from "./Icons";

type ComparisonRow = {
  feature: string;
  presence: boolean | string;
  paperRegister: boolean | string;
  hardwareMachine: boolean | string;
  genericHr: boolean | string;
};

const comparisonData: ComparisonRow[] = [
  {
    feature: "Zero Hardware Required",
    presence: true,
    paperRegister: true,
    hardwareMachine: false,
    genericHr: false,
  },
  {
    feature: "50m Geofence Verification",
    presence: true,
    paperRegister: false,
    hardwareMachine: false,
    genericHr: "Add-on fee",
  },
  {
    feature: "On-Device Face Matching (ONNX)",
    presence: true,
    paperRegister: false,
    hardwareMachine: "Uploads raw photo",
    genericHr: "Cloud only",
  },
  {
    feature: "Live Shift GPS Check (~10 min)",
    presence: true,
    paperRegister: false,
    hardwareMachine: false,
    genericHr: false,
  },
  {
    feature: "Single Active Device Enforcement",
    presence: true,
    paperRegister: false,
    hardwareMachine: false,
    genericHr: false,
  },
  {
    feature: "Append-Only Whole ₹ Ledger",
    presence: true,
    paperRegister: false,
    hardwareMachine: false,
    genericHr: false,
  },
  {
    feature: "Owner-Locked Payroll Engine",
    presence: true,
    paperRegister: false,
    hardwareMachine: false,
    genericHr: true,
  },
  {
    feature: "Offline Clock-in Support",
    presence: true,
    paperRegister: true,
    hardwareMachine: "Limited",
    genericHr: false,
  },
];

function RenderCell({ value }: { value: boolean | string }) {
  if (value === true) {
    return (
      <span className="comp-check">
        <CheckIcon className="icon-sm" />
      </span>
    );
  }
  if (value === false) {
    return (
      <span className="comp-cross">
        <XIcon className="icon-sm" />
      </span>
    );
  }
  return <span className="comp-text">{value}</span>;
}

export function ComparisonSection() {
  return (
    <div className="comparison-card-wrap">
      <div className="table-responsive">
        <table className="comparison-table">
          <thead>
            <tr>
              <th className="th-feature">Key Capability</th>
              <th className="th-presence">
                <span className="pill pill-indigo">presence</span>
              </th>
              <th>Paper Register</th>
              <th>Biometric Machine</th>
              <th>Legacy HR SaaS</th>
            </tr>
          </thead>
          <tbody>
            {comparisonData.map((row) => (
              <tr key={row.feature}>
                <td className="td-feature">{row.feature}</td>
                <td className="td-presence">
                  <RenderCell value={row.presence} />
                </td>
                <td>
                  <RenderCell value={row.paperRegister} />
                </td>
                <td>
                  <RenderCell value={row.hardwareMachine} />
                </td>
                <td>
                  <RenderCell value={row.genericHr} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
