import { CheckIcon, LogoMark } from "./Icons";

const testimonials = [
  {
    quote:
      "We saved over ₹24,000 in our first month alone by eliminating proxy clock-ins across our 3 retail outlets. The on-device face verification is instant and flawless.",
    name: "Vikram Malhotra",
    role: "Owner, Malhotra Garments & Retail",
    premises: "3 Branches · 28 Employees",
  },
  {
    quote:
      "No more calculating hours on Sunday nights or fighting over manual register mistakes. The append-only salary ledger gives both me and my warehouse staff complete peace of mind.",
    name: "Ananya Deshmukh",
    role: "Operations Lead, Apex Logistics",
    premises: "Bandra Warehouse · 45 Employees",
  },
  {
    quote:
      "The 50m GPS geofence alert saved us when field staff were leaving sites early. Now, if someone pings outside 3 times, I get an immediate alert and can override attendance in one tap.",
    name: "Suresh Pillai",
    role: "Managing Partner, Zenith Builders",
    premises: "4 Construction Sites · 60 Employees",
  },
];

export function TestimonialsSection() {
  return (
    <div className="testimonials-grid">
      {testimonials.map((t) => (
        <div className="testimonial-card" key={t.name}>
          <div className="test-head">
            <span className="test-rating">
              ★★★★★
            </span>
            <span className="pill pill-present">
              <CheckIcon className="icon-xs" /> Verified Business
            </span>
          </div>

          <p className="test-quote">&ldquo;{t.quote}&rdquo;</p>

          <div className="test-author">
            <div className="test-avatar">{t.name[0]}</div>
            <div>
              <strong>{t.name}</strong>
              <p>{t.role}</p>
              <small>{t.premises}</small>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
