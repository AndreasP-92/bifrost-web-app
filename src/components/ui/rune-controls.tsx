import type { InputHTMLAttributes, ReactNode, SelectHTMLAttributes } from "react";
import { CheckIcon, ChevronDownIcon, SearchIcon } from "./rune-icons";
import styles from "./rune-controls.module.css";

type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type">;

/** Glowing switch built on a native checkbox ("Misc UI elements"). */
export function RuneToggle({ label, className, ...rest }: InputProps & { label?: ReactNode }) {
  return (
    <label className={`${styles.choice} ${className ?? ""}`}>
      <input type="checkbox" role="switch" className={styles.toggle} {...rest} />
      {label ? <span>{label}</span> : null}
    </label>
  );
}

/** Steel-rimmed square checkbox. */
export function RuneCheckbox({ label, className, ...rest }: InputProps & { label?: ReactNode }) {
  return (
    <label className={`${styles.choice} ${className ?? ""}`}>
      <span className={styles.checkWrap}>
        <input type="checkbox" className={styles.checkbox} {...rest} />
        <CheckIcon className={styles.checkMark} />
      </span>
      {label ? <span>{label}</span> : null}
    </label>
  );
}

/** Round radio with a glowing core. */
export function RuneRadio({ label, className, ...rest }: InputProps & { label?: ReactNode }) {
  return (
    <label className={`${styles.choice} ${className ?? ""}`}>
      <input type="radio" className={styles.radio} {...rest} />
      {label ? <span>{label}</span> : null}
    </label>
  );
}

export function RuneSelect({ className, children, ...rest }: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <span className={`${styles.field} ${className ?? ""}`}>
      <select className={styles.input} {...rest}>
        {children}
      </select>
      <ChevronDownIcon className={styles.fieldIcon} />
    </span>
  );
}

export function RuneSearch({ className, ...rest }: InputProps) {
  return (
    <span className={`${styles.field} ${className ?? ""}`}>
      <input type="search" className={styles.input} {...rest} />
      <SearchIcon className={styles.fieldIcon} />
    </span>
  );
}
