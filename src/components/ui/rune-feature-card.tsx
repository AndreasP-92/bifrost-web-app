import Image from "next/image";
import type { ReactNode } from "react";
import styles from "./rune-feature-card.module.css";

export const FEATURE_CARD_IMAGES = {
  playTogether: "/images/ui/card-play-together.webp",
  compete: "/images/ui/card-compete.webp",
  beRewarded: "/images/ui/card-be-rewarded.webp",
  buildCommunity: "/images/ui/card-build-community.webp",
} as const;

/** Illustrated card with steel rim, icon, title and arrow ("Feature Cards"). */
export function RuneFeatureCard({
  image,
  icon,
  title,
  children,
  href,
  className,
}: {
  image: string;
  icon?: ReactNode;
  title: string;
  children: ReactNode;
  href?: string;
  className?: string;
}) {
  const Tag = href ? "a" : "article";
  return (
    <Tag className={`${styles.card} ${className ?? ""}`} {...(href ? { href } : {})}>
      <div className={styles.media}>
        <Image src={image} alt="" fill sizes="(max-width: 640px) 100vw, 320px" className={styles.image} />
      </div>
      <div className={styles.body}>
        {icon ? <span className={styles.icon}>{icon}</span> : null}
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{children}</p>
        {href ? (
          <span className={styles.arrow} aria-hidden="true">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="m9.5 6 6 6-6 6" />
            </svg>
          </span>
        ) : null}
      </div>
    </Tag>
  );
}
