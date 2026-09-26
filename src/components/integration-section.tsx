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
                <p className={styles.rowTitle}>Eksisterende spil</p>
                <p className={styles.rowText}>
                  Spil, der allerede findes, kan forbindes til Bifrost-økosystemet og få adgang til
                  den fælles profil og progression.
                </p>
              </div>
            </div>
            <div className={styles.row}>
              <ApiIcon className={styles.rowIcon} />
              <div>
                <p className={styles.rowTitle}>Nye spil</p>
                <p className={styles.rowText}>
                  Nye spil kan bygges med Bifrost som en integreret del af spillet fra starten af.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.copy}>
            <p className="eyebrow">Spil &amp; API</p>
            <h2 className="h2">Forbundet gennem Bifrost API</h2>
            <p className="body" style={{ marginTop: 16 }}>
              Både eksisterende og nye spil kan integreres i Bifrost-økosystemet gennem Bifrost
              API&apos;et. Det giver spiludviklere en overordnet vej til at forbinde deres spil til
              den fælles profil, progression og fællesskab omkring Bifrost — uden at det går ud
              over spillets egen identitet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
