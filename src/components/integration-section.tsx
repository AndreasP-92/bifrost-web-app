import { ApiIcon, GameIcon } from "./icons";
import styles from "./integration-section.module.css";

export function IntegrationSection() {
  return (
    <section id="games" className="section">
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.panel}>
            <div className={styles.row}>
              <GameIcon className={styles.rowIcon} />
              <div>
                <p className={styles.rowTitle}>Existing games</p>
                <p className={styles.rowText}>
                  Games that already exist can connect to the Bifrost ecosystem and gain access to
                  the shared profile and progression.
                </p>
              </div>
            </div>
            <div className={styles.row}>
              <ApiIcon className={styles.rowIcon} />
              <div>
                <p className={styles.rowTitle}>New games</p>
                <p className={styles.rowText}>
                  New games can be built with Bifrost as an integrated part of the game from the
                  start.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.copy}>
            <p className="eyebrow">Games &amp; API</p>
            <h2 className="h2">Connected Through the Bifrost API</h2>
            <p className="body" style={{ marginTop: 16 }}>
              Both existing and new games can be integrated into the Bifrost ecosystem through the
              Bifrost API. It gives game developers a high-level path to connect their game to the
              shared profile, progression and community around Bifrost — without compromising the
              game&apos;s own identity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
