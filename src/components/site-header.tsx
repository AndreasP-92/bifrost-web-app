"use client";

import { useEffect, useState } from "react";
import { Logo } from "./logo";
import styles from "./site-header.module.css";

const NAV_LINKS = [
  { href: "#bifrost", label: "Bifrost" },
  { href: "#progression", label: "Progression" },
  { href: "#games", label: "Games & API" },
  { href: "#how-to-connect", label: "How to Connect" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.bar}`}>
        <Logo />

        <nav className={styles.navDesktop} aria-label="Primary navigation">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#download" className={`btn btnGhost ${styles.headerCta}`}>
          Download Bifrost
        </a>

        <button
          type="button"
          className={styles.menuButton}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`${styles.bun} ${open ? styles.bunOpenTop : ""}`} />
          <span className={`${styles.bun} ${open ? styles.bunOpenMid : ""}`} />
          <span className={`${styles.bun} ${open ? styles.bunOpenBottom : ""}`} />
        </button>
      </div>

      <div className={`${styles.mobilePanel} ${open ? styles.mobilePanelOpen : ""}`}>
        <nav aria-label="Mobile navigation">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#download" onClick={() => setOpen(false)} className={styles.mobileCta}>
                Download Bifrost
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
