import { Frame } from "./frame";
import styles from "./progression-section.module.css";

const FEATURES = [
  "Din progression følger dig fra spil til spil, ikke kun inde i ét enkelt spil.",
  "Rewards, du optjener i et forbundet spil, samles på din Bifrost-profil.",
  "Én identitet, ét fællesskab — uanset hvilket forbundet spil du er i gang med.",
];

export function ProgressionSection() {
  return (
    <section id="progression" className="section">
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.copy}>
            <p className="eyebrow">Progression &amp; rewards</p>
            <h2 className="h2">Progression, der følger dig</h2>
            <p className="body" style={{ marginTop: 16 }}>
              Gennem de spil, der er forbundet til Bifrost, kan du optjene progression og rewards
              til din fælles Bifrost-profil. Din indsats bliver en del af den samme rejse, uanset
              hvilket forbundet spil du spiller lige nu.
            </p>
            <ul className={styles.list}>
              {FEATURES.map((text) => (
                <li key={text} className={styles.listItem}>
                  {text}
                </li>
              ))}
            </ul>
          </div>

          <Frame className={styles.diagram}>
            <div className={styles.games} aria-hidden="true">
              <span className={styles.gamePill}>Spil A</span>
              <span className={styles.gamePill}>Spil B</span>
              <span className={styles.gamePill}>Spil C</span>
            </div>
            <div className={styles.connector} aria-hidden="true" />
            <div className={styles.profileNode}>
              <span className={styles.profileLabel}>Bifrost-profil</span>
              <span className={styles.profileSub}>Progression · Rewards · Identitet</span>
            </div>
          </Frame>
        </div>
      </div>
    </section>
  );
}
