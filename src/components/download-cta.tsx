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
        {announced ? "Bifrost er endnu ikke klar til download — men broen er ved at blive bygget. Kommer snart." : "Kommer snart"}
      </p>
    </div>
  );
}
