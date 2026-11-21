"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/lib/site";
import {
  AndroidIcon,
  ArrowRightIcon,
  ChartIcon,
  DownloadIcon,
  MenuIcon,
  ShieldIcon,
  SmartphoneIcon,
  WalletIcon,
  XIcon,
} from "./Icons";

const menuMeta = {
  "#features": { icon: ChartIcon, hint: "Face, GPS, shifts & payroll" },
  "#demo": { icon: SmartphoneIcon, hint: "Try owner and employee views" },
  "#calculator": { icon: WalletIcon, hint: "Estimate your monthly savings" },
  "#faq": { icon: ShieldIcon, hint: "Answers to common questions" },
} as const;

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();

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
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#top" aria-label={`${site.name} home`}>
            <img src="/presence_logo_120x120.png" alt="" className="brand-mark" />
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
      <AnimatePresence>
        {mobileMenuOpen ? (
          <motion.div
            className="mobile-nav-overlay"
            id="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              className="mobile-nav-panel"
              initial={reduceMotion ? false : { x: "100%" }}
              animate={{ x: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { x: "100%" }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              <span className="mobile-nav-glow" aria-hidden="true" />

              <div className="mobile-nav-head">
                <div className="mobile-nav-brand">
                  <span className="mobile-nav-logo">
                    <img src="/presence_logo_120x120.png" alt="" />
                  </span>
                  <span className="mobile-nav-brand-copy">
                    <strong>{site.name}</strong>
                    <small>Attendance, simplified.</small>
                  </span>
                </div>
                <button
                  type="button"
                  className="mobile-nav-close"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <XIcon className="icon-sm" />
                </button>
              </div>

              <p className="mobile-nav-kicker">Explore</p>
              <nav className="mobile-nav-links" aria-label="Mobile">
                {navLinks.map((link, index) => {
                  const meta = menuMeta[link.href];
                  const Icon = meta.icon;
                  return (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      className="mobile-nav-link"
                      initial={reduceMotion ? false : { opacity: 0, x: 14 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.08 + index * 0.05, duration: 0.25 }}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="mobile-nav-icon">
                        <Icon className="icon-sm" />
                      </span>
                      <span className="mobile-nav-copy">
                        <strong>{link.label}</strong>
                        <small>{meta.hint}</small>
                      </span>
                      <ArrowRightIcon className="icon-sm mobile-nav-arrow" />
                    </motion.a>
                  );
                })}
              </nav>

              <div className="mobile-nav-footer">
                <div className="mobile-nav-cta">
                  <p className="mobile-nav-cta-kicker">
                    <DownloadIcon className="icon-xs" /> Get the app
                  </p>
                  <strong>Run your first verified shift today</strong>
                  <a
                    className="btn btn-primary btn-lg w-full"
                    href={site.apkUrl}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <AndroidIcon className="icon" />
                    Download APK
                  </a>
                  <a
                    className="mobile-nav-secondary"
                    href={site.releasesUrl}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Release notes <ArrowRightIcon className="icon-xs" />
                  </a>
                </div>

                <div className="mobile-nav-legal">
                  <a href="/privacy" onClick={() => setMobileMenuOpen(false)}>Privacy</a>
                  <span aria-hidden="true">·</span>
                  <a href="/terms" onClick={() => setMobileMenuOpen(false)}>Terms</a>
                  <span aria-hidden="true">·</span>
                  <a href={`mailto:${site.contactEmail}`} onClick={() => setMobileMenuOpen(false)}>Contact</a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
