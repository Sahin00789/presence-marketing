"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/lib/site";
import { MenuIcon, XIcon } from "./Icons";

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
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
            <div className="mobile-nav-head">
              <a className="brand" href="#top" onClick={() => setMobileMenuOpen(false)}>
                <img src="/presence_logo_120x120.png" alt="" className="brand-mark" />
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
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
