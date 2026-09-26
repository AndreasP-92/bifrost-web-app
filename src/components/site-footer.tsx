import Image from "next/image";
import { Logo } from "./logo";
import styles from "./site-footer.module.css";

const NAV_LINKS = [
  { href: "#bifrost", label: "Bifrost" },
  { href: "#what-is-bifrost", label: "For Gamers" },
  { href: "#progression", label: "Progression" },
  // { href: "#games", label: "Games & API" }, // temporarily hidden, keep for later reuse
  // { href: "#how-to-connect", label: "How to Connect" }, // temporarily hidden, keep for later reuse
  { href: "#roadmap", label: "Roadmap" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.top}`}>
        <div>
          <Logo />
          <p className={styles.tagline}>
            In Norse mythology, Bifrost is the bridge between worlds. Project Bifrost is the
            bridge between players, games and companies.
          </p>
        </div>

        <nav className={styles.nav} aria-label="Footer navigation">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.medallionWrap}>
          <div className={styles.medallion}>
            <Image
              src="/images/ravens.png"
              alt=""
              aria-hidden="true"
              fill
              sizes="72px"
              className={styles.medallionImage}
            />
          </div>
          <span className={styles.medallionCaption}>Huginn &amp; Muninn</span>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <span>© {year} Project Bifrost. All rights reserved. CVR 45801837</span>

        <span className={styles.legal}>
          <span className={styles.legalLink}>Privacy Policy</span>
          <span aria-hidden="true">|</span>
          <span className={styles.legalLink}>Terms of Service</span>
          <span aria-hidden="true">|</span>
          <span className={styles.legalLink}>Contact</span>
        </span>

        <span className={styles.lang}>
          <span aria-hidden="true">&#127760;</span> English
        </span>
      </div>
    </footer>
  );
}
