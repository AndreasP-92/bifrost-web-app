import { DownloadCta } from "./download-cta";
import styles from "./download-section.module.css";

export function DownloadSection() {
  return (
    <section id="download" className={`section ${styles.section}`}>
      <div className={styles.glow} />
      <div className={`container ${styles.inner}`}>
        <p className="eyebrow" style={{ justifyContent: "center" }}>
          Vi bygger broen. Sammen.
        </p>
        <h2 className="h2">Download Bifrost</h2>
        <p className="body" style={{ margin: "16px auto 0" }}>
          Bifrost-appen er under udvikling. Følg med, og vær klar, når broen mellem dine spil
          åbner.
        </p>
        <DownloadCta />
      </div>
    </section>
  );
}
