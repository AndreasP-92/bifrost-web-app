"use client";

import { useState } from "react";
import { RuneBadge, RuneButton, WindowsIcon } from "./ui";
import styles from "./download-section.module.css";

export function DownloadCta() {
  const [announced, setAnnounced] = useState(false);

  return (
    <div className={styles.ctaWrap}>
      <RuneButton
        icon={<WindowsIcon />}
        aria-disabled="true"
        onClick={() => setAnnounced(true)}
        className={styles.ctaButton}
      >
        Download Bifrost
      </RuneButton>
      <p role="status" aria-live="polite">
        {announced ? (
          <span className={styles.comingSoonText}>
            Bifrost isn&apos;t ready for download yet — but the bridge is being built. Coming soon.
          </span>
        ) : (
          <RuneBadge tone="soon">Coming soon</RuneBadge>
        )}
      </p>
    </div>
  );
}
