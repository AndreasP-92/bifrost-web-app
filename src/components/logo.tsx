import Image from "next/image";
import Link from "next/link";
import styles from "./logo.module.css";

export function Logo() {
  return (
    <Link href="/" className={styles.logo} aria-label="Project Bifrost — back to homepage">
      <Image
        src="/images/ui/logo-wordmark.png"
        alt="Bifrost"
        width={760}
        height={180}
        className={styles.mark}
        priority
      />
    </Link>
  );
}
