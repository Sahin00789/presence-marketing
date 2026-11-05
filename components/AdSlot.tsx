import { site } from "@/lib/site";
import { AdSenseUnit } from "./AdSenseUnit";
import { ArrowRightIcon } from "./Icons";

type AdSlotProps = {
  /** "banner" for inline placements, "card" for the sidebar-style house ad. */
  variant?: "banner" | "card";
  label?: string;
};

/**
 * A labelled advertising placement. When AdSense credentials are configured it
 * renders a real ad unit; otherwise it renders a house ad inviting sponsors, so
 * the page never shows an empty grey box.
 */
export function AdSlot({ variant = "banner", label = "Advertisement", className = "" }: AdSlotProps & { className?: string }) {
  const hasAdSense = Boolean(site.ads.client && site.ads.slot);

  if (hasAdSense) {
    return (
      <aside className={`ad-slot ad-slot-${variant} ${className}`} aria-label={label}>
        <span className="ad-label">{label}</span>
        <AdSenseUnit client={site.ads.client} slot={site.ads.slot} />
      </aside>
    );
  }

  return (
    <aside className={`ad-slot ad-slot-${variant} ${className}`} aria-label={label}>
      <span className="ad-label">{label}</span>
      <div className="house-ad">
        <div className="house-ad-copy">
          <strong>Put your brand in front of growing teams.</strong>
          <p>
            Reach owners and managers who run attendance and payroll every day.
            Banner and newsletter placements are available.
          </p>
        </div>
        <a
          className="btn btn-ghost btn-sm"
          href={`mailto:${site.contactEmail}?subject=Advertising%20on%20presence`}
        >
          Advertise here
          <ArrowRightIcon className="icon-sm" />
        </a>
      </div>
    </aside>
  );
}
