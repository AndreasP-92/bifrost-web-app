"use client";

import { useState } from "react";
import styles from "./download-section.module.css";

export function DownloadCta() {
  const [announced, setAnnounced] = useState(false);

  return (
    <div className={styles.ctaWrap}>
      <button
        type="button"
        className={`btn btnPrimary ${styles.ctaButton}`}
        aria-disabled="true"
        onClick={() => setAnnounced(true)}
      >
        Download Bifrost
      </button>
      <p className={styles.comingSoon} role="status" aria-live="polite">
        {announced
          ? "Bifrost isn't ready for download yet — but the bridge is being built. Coming soon."
          : "Coming soon"}
      </p>
    </div>
  );
}
