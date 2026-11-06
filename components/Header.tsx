"use client";

import { useState } from "react";
import { navLinks, site } from "@/lib/site";
import { ArrowRightIcon, LogoMark, MenuIcon, XIcon } from "./Icons";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="topbar">
        <span className="topbar-dot" aria-hidden="true" />
        <p>
          <strong>Now available for Android.</strong> GPS &amp; Face verified attendance, shift rosters, and payroll in one app.
        </p>
        <a href={site.apkUrl}>
          Download free APK
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
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <XIcon className="icon" /> : <MenuIcon className="icon" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="mobile-nav-overlay" onClick={() => setMobileMenuOpen(false)}>
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
      </header>
    </>
  );
}
