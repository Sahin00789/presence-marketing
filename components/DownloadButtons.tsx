import { site } from "@/lib/site";
import { DownloadIcon, FirebaseIcon } from "./Icons";

type DownloadButtonsProps = {
  /** Visual emphasis: "light" for dark backgrounds, "dark" for light backgrounds. */
  tone?: "light" | "dark";
  className?: string;
};

export function DownloadButtons({ tone = "dark", className }: DownloadButtonsProps) {
  return (
    <div className={`download-buttons ${className ?? ""}`}>
      <a className={`btn btn-primary btn-lg ${tone === "light" ? "btn-on-dark" : ""}`} href={site.apkUrl}>
        <DownloadIcon className="icon" />
        <span>
          Download APK
          <small>Direct install · latest build</small>
        </span>
      </a>

      <a
        className={`btn btn-secondary btn-lg ${tone === "light" ? "btn-on-dark" : ""}`}
        href={site.firebaseAppUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FirebaseIcon className="icon" />
        <span>
          Google Firebase
          <small>Firebase App Distribution</small>
        </span>
      </a>
    </div>
  );
}
