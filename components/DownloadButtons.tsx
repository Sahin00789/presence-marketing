import { site } from "@/lib/site";
import { ArrowRightIcon, DownloadIcon } from "./Icons";

type DownloadButtonsProps = {
  /** Visual emphasis: "light" for dark backgrounds, "dark" for light backgrounds. */
  tone?: "light" | "dark";
  className?: string;
  /** Adds the inline "See how it works" link. Used only in the hero. */
  howItWorks?: boolean;
};

export function DownloadButtons({
  tone = "dark",
  className,
  howItWorks = false,
}: DownloadButtonsProps) {
  return (
    <div className={`download-buttons ${className ?? ""}`}>
      <a className={`btn btn-primary btn-lg ${tone === "light" ? "btn-on-dark" : ""}`} href={site.apkUrl}>
        <DownloadIcon className="icon" />
        <span>
          Download APK
          <small>Direct install · latest build</small>
        </span>
      </a>

      {howItWorks ? (
        <a className="download-link" href="#how-it-works">
          See how it works
          <ArrowRightIcon className="icon-sm" />
        </a>
      ) : null}
    </div>
  );
}
