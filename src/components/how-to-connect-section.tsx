import styles from "./how-to-connect-section.module.css";

export function HowToConnectSection() {
  return (
    <section id="how-to-connect" className="section">
      <div className="container">
        <div className="sectionHead">
          <p className="eyebrow">How to Connect</p>
          <h2 className="h2">Sådan bliver du en del af Bifrost</h2>
          <p className="body" style={{ marginTop: 16 }}>
            Bifrost er stadig under opbygning. Sådan hænger det sammen for både spillere og
            spiludviklere, når broen åbner.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <span className={styles.badge}>Kommer snart</span>
            <p className={styles.title}>For spillere</p>
            <p className={styles.text}>
              Med Bifrost-appen får du én global gaming-profil, der følger dig på tværs af de
              spil, der er forbundet til Bifrost — med progression og rewards samlet ét sted.
            </p>
          </div>

          <div className={styles.card}>
            <span className={styles.badge}>Kommer snart</span>
            <p className={styles.title}>For spiludviklere &amp; virksomheder</p>
            <p className={styles.text}>
              Vil du forbinde dit spil til Bifrost-økosystemet gennem Bifrost API&apos;et? Vi
              åbner op for partnerskaber, efterhånden som platformen udvikles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
