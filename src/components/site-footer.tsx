import { Logo } from "./logo";
import styles from "./site-footer.module.css";

const NAV_LINKS = [
  { href: "#bifrost", label: "Bifrost" },
  { href: "#progression", label: "Progression" },
  { href: "#games", label: "Spil & API" },
  { href: "#how-to-connect", label: "How to Connect" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.top}`}>
        <div>
          <Logo />
          <p className={styles.tagline}>
            I nordisk mytologi er Bifrost broen mellem verdenerne. Project Bifrost er broen mellem
            spillere, spil og virksomheder.
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
      </div>

      <div className={`container ${styles.bottom}`}>
        <span>© {year} Project Bifrost. Alle rettigheder forbeholdes.</span>
        <span>CVR 45801837</span>
      </div>
    </footer>
  );
}
