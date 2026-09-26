import { BridgeMotif } from "./icons";
import { Embers } from "./embers";
import styles from "./hero.module.css";

export function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div className={styles.backdrop} />
      <BridgeMotif className={styles.bridge} />
      <Embers className={styles.embers} />
      <div className={styles.veil} />

      <div className={styles.content}>
        <p className="eyebrow">One bridge. One gaming universe.</p>
        <h1 className={`h1 ${styles.title}`}>
          Welcome to <span className="glow">Project Bifrost</span>
        </h1>
        <p className={`lead ${styles.lead}`}>
          In Norse mythology, Bifrost is the bridge that connects the worlds. Project Bifrost is
          our modern take on that bridge — one unified gaming ecosystem, built around one global
          gaming profile that connects players, games and companies.
        </p>

        <div className={styles.actions}>
          <a href="#bifrost" className="btn btnPrimary">
            Explore Bifrost
          </a>
          <a href="#how-to-connect" className="btn btnGhost">
            How to Connect
          </a>
        </div>

        <p className={styles.motto}>
          <span aria-hidden="true">&mdash;</span> Fate chooses those who dare enter the Bifrost.
        </p>
      </div>
    </section>
  );
}
