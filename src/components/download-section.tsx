import { DownloadCta } from "./download-cta";
import styles from "./download-section.module.css";

export function DownloadSection() {
  return (
    <section id="download" className={`section ${styles.section}`}>
      <div className={styles.glow} />
      <div className={`container ${styles.inner}`}>
        <p className="eyebrow" style={{ justifyContent: "center" }}>
          We build the bridge. Together.
        </p>
        <h2 className="h2">Download Bifrost</h2>
        <p className="body" style={{ margin: "16px auto 0" }}>
          The Bifrost app is under development. Follow along, and be ready when the bridge
          between your games opens.
        </p>
        <DownloadCta />
      </div>
    </section>
  );
}
