import Image from "next/image";
import { DiscordIcon, UI_ART, XIcon, YouTubeIcon } from "./ui";
import { DownloadCta } from "./download-cta";
import styles from "./download-section.module.css";

const SOCIAL_ICONS = [DiscordIcon, YouTubeIcon, XIcon];

export function DownloadSection() {
  return (
    <section id="download" className={`section ${styles.section}`}>
      <div className={styles.glow} />
      <div className={`container ${styles.banner}`}>
        <div className={styles.side}>
          <p className={styles.sideEyebrow}>For Honor and Glory</p>
          <p className={styles.sideText}>
            No matter the game, no matter where you play. Bifrost is the bridge.
          </p>
          <DownloadCta />
        </div>

        <Image {...UI_ART.runeLarge} alt="" aria-hidden="true" className={styles.emblem} />

        <div className={styles.side}>
          <p className={styles.sideEyebrow}>Join the Community</p>
          <p className={styles.sideText}>
            Follow along as Bifrost takes shape — news, updates and community channels are coming
            soon.
          </p>
          <div className={styles.socials} aria-hidden="true">
            {SOCIAL_ICONS.map((SocialIcon, i) => (
              <span key={i} className={styles.socialIcon}>
                <SocialIcon />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
