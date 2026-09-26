import { BridgeMotif } from "./icons";
import styles from "./hero.module.css";

export function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <BridgeMotif className={styles.bridge} />
      <div className={styles.veil} />

      <div className={`container ${styles.content}`}>
        <p className="eyebrow">Én bro. Ét gaming-univers.</p>
        <h1 className="h1">
          Welcome to <span className="glow">Project Bifrost</span>
        </h1>
        <p className={`lead ${styles.lead}`}>
          I nordisk mytologi er Bifrost broen, der forbinder verdenerne. Project Bifrost er vores
          moderne tolkning — ét samlet gaming-økosystem, bygget omkring én global gaming-profil,
          der forbinder spillere, spil og virksomheder.
        </p>

        <div className={styles.actions}>
          <a href="#bifrost" className="btn btnPrimary">
            Udforsk Bifrost
          </a>
          <a href="#how-to-connect" className="btn btnGhost">
            How to Connect
          </a>
        </div>
      </div>
    </section>
  );
}
