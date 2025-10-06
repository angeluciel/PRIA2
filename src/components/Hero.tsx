"use client";

import { useRef } from "react";
import styles from "@/app/index.module.scss";
import useHeroIntro from "@/hooks/useHeroIntro";

export default function Hero() {
  const nameRef = useRef<HTMLHeadingElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);

  useHeroIntro({ nameRef, headingRef });

  return (
    <div className={styles.hero}>
      <div className={styles.hero__top}>
        <div className={styles.hero__text}>
          <h1 className={styles.hero__text__name} ref={nameRef}>
            PRIA.
          </h1>
          <h1 className={styles.hero__text__heading} ref={headingRef}>
            <span>Visualize</span> <span>all</span> <span>your</span>{" "}
            <span>backups</span> <span>on a</span> <span>single,</span>{" "}
            <span>beautiful</span> <span>dashboard.</span>{" "}
          </h1>
        </div>

        <span className={styles.hero__subheading}>
          Connect your endpoints, normalize job data, and surface health,
          failures, and trends — so IT teams can act fast and sleep better.
        </span>
      </div>

      <div className={styles.hero__bottom}>
        <button type="button" className={styles.hero__cta}>
          Get started for free
        </button>
      </div>
      <div className={styles.squareContainer}>
        <div className={styles.square}></div>
      </div>
    </div>
  );
}
