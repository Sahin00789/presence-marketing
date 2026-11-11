"use client";

import { useEffect, useState } from "react";
import { navLinks, site } from "@/lib/site";
import { ArrowRightIcon, LogoMark, MenuIcon, XIcon } from "./Icons";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Lock background scrolling while the mobile drawer is open.
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [mobileMenuOpen]);

  // Close the drawer with Escape.
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileMenuOpen]);

  return (
    <>
      <div className="topbar">
        <span className="topbar-dot" aria-hidden="true" />
        <p>
          <strong>Now available for Android.</strong> GPS &amp; Face verified attendance, shift rosters, and payroll in one app.
        </p>
        <a href="#demo">
          Try the live demo
          <ArrowRightIcon className="icon-xs" />
        </a>
      </div>

      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#top" aria-label={`${site.name} home`}>
            <LogoMark className="brand-mark" />
            <span className="brand-name">{site.name}</span>
          </a>

          <nav className="site-nav desktop-nav" aria-label="Main">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <a className="btn btn-primary btn-sm header-cta" href={site.apkUrl}>
              Download app
            </a>

            <button
              type="button"
              className="mobile-menu-toggle"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <XIcon className="icon" /> : <MenuIcon className="icon" />}
            </button>
          </div>
        </div>
      </header>

      {/* Rendered outside <header> on purpose: the header's backdrop-filter would
          otherwise become the containing block for this fixed-position overlay
          and trap the drawer inside the 64px header strip. */}
      {mobileMenuOpen && (
        <div
          className="mobile-nav-overlay"
          id="mobile-nav"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="mobile-nav-panel" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-nav-head">
              <a className="brand" href="#top" onClick={() => setMobileMenuOpen(false)}>
                <LogoMark className="brand-mark" />
                <span className="brand-name">{site.name}</span>
              </a>
              <button
                type="button"
                className="mobile-menu-toggle"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <XIcon className="icon" />
              </button>
            </div>

            <nav className="mobile-nav-links">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="mobile-nav-footer">
              <a
                className="btn btn-primary btn-lg w-full"
                href={site.apkUrl}
                onClick={() => setMobileMenuOpen(false)}
              >
                Download APK
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
