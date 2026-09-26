import { RunePanel } from "./ui";
import styles from "./progression-section.module.css";

const FEATURES = [
  "Your progression follows you from game to game, not just inside a single game.",
  "Rewards you earn in a connected game are added to your Bifrost profile.",
  "One identity, one community — no matter which connected game you're playing.",
];

export function ProgressionSection() {
  return (
    <section id="progression" className="section">
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.copy}>
            <p className="eyebrow">Progression &amp; rewards</p>
            <h2 className="h2">Progression That Follows You</h2>
            <p className="body" style={{ marginTop: 16 }}>
              Through the games connected to Bifrost, you can earn progression and rewards toward
              your shared Bifrost profile. Your effort becomes part of the same journey, no matter
              which connected game you&apos;re playing right now.
            </p>
            <ul className={styles.list}>
              {FEATURES.map((text) => (
                <li key={text} className={styles.listItem}>
                  {text}
                </li>
              ))}
            </ul>
          </div>

          <RunePanel variant="glow" className={styles.diagram}>
            <div className={styles.games} aria-hidden="true">
              <span className={styles.gamePill}>Game A</span>
              <span className={styles.gamePill}>Game B</span>
              <span className={styles.gamePill}>Game C</span>
            </div>
            <div className={styles.connector} aria-hidden="true" />
            <div className={styles.profileNode}>
              <span className={styles.profileLabel}>Bifrost Profile</span>
              <span className={styles.profileSub}>Progression · Rewards · Identity</span>
            </div>
          </RunePanel>
        </div>
      </div>
    </section>
  );
}
