import Image from "next/image";
import { Embers } from "./embers";
import { ChevronDownIcon, RuneButton, WindowsIcon } from "./ui";
import styles from "./hero.module.css";

export function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div className={styles.backdrop} />
      <div className={styles.water} aria-hidden="true" />
      <div className={styles.waterReflection} aria-hidden="true" />
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
