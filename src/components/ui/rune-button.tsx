import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { RuneGem } from "./rune-gem";
import { ChevronRightIcon } from "./rune-icons";
import styles from "./rune-button.module.css";

type Variant = "primary" | "secondary" | "accent";
type Size = "md" | "sm";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  /** Icon rendered before the label (e.g. <WindowsIcon />) */
  icon?: ReactNode;
  /** Icon rendered after the label (e.g. <ChevronDownIcon />) */
  trailingIcon?: ReactNode;
  /** Show the glowing gem end caps (default: on for md, off for sm) */
  gems?: boolean;
  children: ReactNode;
};

type AsButton = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type AsLink = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

/**
 * Forged button from the art sheet: steel bevel, pointed ends, glowing gem caps.
 * Renders an <a> when `href` is given, otherwise a <button>.
 */
export function RuneButton(props: AsButton | AsLink) {
  const {
    variant = "primary",
    size = "md",
    icon,
    trailingIcon,
    gems = size === "md",
    children,
    className,
    ...rest
  } = props;

  const cls = [styles.button, styles[variant], styles[size], className].filter(Boolean).join(" ");
  const gemTone = variant === "accent" ? "bronze" : "ice";

  const content = (
    <>
      <span className={styles.shapeGlow} aria-hidden="true">
        <span className={styles.shape} />
      </span>
      {gems ? <RuneGem className={`${styles.gem} ${styles.gemLeft}`} size={28} tone={gemTone} /> : null}
      <span className={styles.label}>
        {icon ? <span className={styles.icon}>{icon}</span> : null}
        {children}
        {trailingIcon ? <span className={styles.icon}>{trailingIcon}</span> : null}
      </span>
      {gems ? <RuneGem className={`${styles.gem} ${styles.gemRight}`} size={28} tone={gemTone} /> : null}
    </>
  );

  if (typeof rest.href === "string") {
    return (
      <a className={cls} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {content}
      </a>
    );
  }

  const { type = "button", ...buttonRest } = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button type={type} className={cls} {...buttonRest}>
      {content}
    </button>
  );
}

/** Round steel "next" button with chevron ("Small buttons / arrows"). */
export function RuneArrowButton({
  direction = "right",
  active = false,
  className,
  "aria-label": ariaLabel = direction === "right" ? "Next" : "Previous",
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement> & { direction?: "left" | "right"; active?: boolean }) {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      className={`${styles.arrow} ${active ? styles.arrowActive : ""} ${className ?? ""}`}
      {...rest}
    >
      <ChevronRightIcon style={direction === "left" ? { transform: "scaleX(-1)" } : undefined} />
    </button>
  );
}
