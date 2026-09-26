import Image from "next/image";
import Link from "next/link";
import styles from "./logo.module.css";

export function Logo() {
  return (
    <Link href="/" className={styles.logo} aria-label="Project Bifrost — til forsiden">
      <Image
        src="/images/logo.png"
        alt=""
        width={64}
        height={64}
        className={styles.mark}
        priority
      />
      <span className={styles.word}>
        BIFROST
        <span className={styles.wordSub}>PROJECT</span>
      </span>
    </Link>
  );
}
