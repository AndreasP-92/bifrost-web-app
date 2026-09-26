import Image from "next/image";
import { Embers } from "./embers";
import { ChevronDownIcon, RuneButton, UI_ART, WindowsIcon } from "./ui";
import styles from "./hero.module.css";

export function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div className={styles.backdrop} />
      <Image {...UI_ART.bgLongship} alt="" aria-hidden="true" className={styles.longship} />
      <Embers className={styles.embers} />
      <div className={styles.veil} />

      <div className={styles.content}>
        <h1 className={styles.srOnly}>Project Bifrost — A Global Gaming Platform</h1>

        <p className="eyebrow">Play. Compete. Connect.</p>

        <Image
          src="/images/ui/logo-wordmark.png"
          alt="Bifrost"
          width={760}
          height={180}
          className={styles.wordmark}
          priority
        />

        <p className={styles.subtitle}>A Global Gaming Platform</p>

        <p className={`lead ${styles.lead}`}>
          Bifrost brings your favorite games together in one global profile. Play, compete, earn
          rewards and connect with a worldwide community.
        </p>

        <div className={styles.actions}>
          <RuneButton href="#download" icon={<WindowsIcon />}>
            Download Bifrost
          </RuneButton>
          <RuneButton href="#bifrost" variant="secondary" trailingIcon={<ChevronDownIcon />}>
            Learn More
          </RuneButton>
        </div>
      </div>
    </section>
  );
}
