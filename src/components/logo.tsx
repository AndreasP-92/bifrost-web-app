import Link from "next/link";
import { ValknutMark } from "./icons";
import styles from "./logo.module.css";

export function Logo() {
  return (
    <Link href="/" className={styles.logo} aria-label="Project Bifrost — til forsiden">
      <ValknutMark className={styles.mark} />
      <span className={styles.word}>
        BIFROST
        <span className={styles.wordSub}>PROJECT</span>
      </span>
    </Link>
  );
}
