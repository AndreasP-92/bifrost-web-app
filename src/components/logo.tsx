import Image from "next/image";
import Link from "next/link";
import styles from "./logo.module.css";

export function Logo() {
  return (
    <Link href="/" className={styles.logo} aria-label="Project Bifrost — back to homepage">
      <Image
        src="/images/ui/logo-wordmark-small.png"
        alt="Bifrost"
        width={434}
        height={120}
        className={styles.mark}
        priority
      />
    </Link>
  );
}
