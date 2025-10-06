"use client";

import styles from "@/app/index.module.scss";
import LoginButton from "./LoginButton";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__left}>
        <button type="button" className={styles.header__logo}>
          V
        </button>
        <button type="button" className={styles.header__version}>
          v1
        </button>
      </div>

      <div className={styles.header__right}>
        <button type="button" className={styles.header__docs}>
          Docs
        </button>
        <button type="button" className={styles.header__showcase}>
          Showcase
        </button>
        <div>
          <LoginButton />
        </div>
      </div>
    </header>
  );
}
