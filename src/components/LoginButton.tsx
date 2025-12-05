"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  animate,
} from "motion/react";
import { interpolate as flubberInterpolate } from "flubber";
import styles from "@/app/index.module.scss";
import useHoverSwap from "@/hooks/useHoverSwap";
import { useRouter } from "next/navigation";

const rightD =
  "M18 0C18 0 12 0 12 4.5C12 9 12.0001 34 12 39C11.9999 44 16 44 16 44L83 40C83 40 90 40 90 33V12C90 6 83 6 83 6L18 0Z";

const leftD =
  "M88.5 4L6.5 0C6.5 0 0 0 0 9V34C0 43 6.5 43 6.5 43L88.5 40.5C88.5 40.5 94 40.5 94 34V9C94 4 88.5 4 88.5 4Z";

const defaultD =
  "M82.5 1C82.5 1 91 1 91 9.5V34.5C91 34.5 91 43 82.5 43H19.5C19.5 43 11 43 11 34.5V9.5C11 9.5 11 1 19.5 1H82.5Z";

export default function LoginButton() {
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const upRef = useRef<HTMLSpanElement | null>(null);
  const downRef = useRef<HTMLSpanElement | null>(null);

  const router = useRouter();

  useHoverSwap({ triggerRef: btnRef, upRef, downRef });

  const progress = useMotionValue(0);
  const d = useMotionValue(defaultD);
  const [hovered, setHovered] = useState(false);

  const interp = useRef(
    flubberInterpolate(leftD, rightD, { maxSegmentLength: 2 })
  ).current;
  const toDefault = useRef(
    flubberInterpolate(leftD, defaultD, { maxSegmentLength: 2 })
  ).current;

  useMotionValueEvent(progress, "change", (v) => {
    if (hovered) d.set(interp(v));
  });

  useEffect(() => {
    const el = btnRef.current;
    if (!el) return;

    const onMove = (e: PointerEvent) => {
      if (!hovered) return;
      const rect = el.getBoundingClientRect();
      const t = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
      progress.set(t);
    };

    const onEnter = () => {
      setHovered(true);
    };

    const onLeave = () => {
      setHovered(false);
      const from = d.get();
      const backInterp = flubberInterpolate(from, defaultD, {
        maxSegmentLength: 2,
      });
      animate(0, 1, {
        duration: 0.5,
        ease: "backOut",
        onUpdate: (v) => d.set(backInterp(v)),
      });
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerenter", onEnter);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerenter", onEnter);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [progress, hovered]);
  return (
    <motion.button
      type='button'
      className={styles.btn}
      ref={btnRef}
      onClick={() => router.push("/session/signup")}
    >
      <span className={styles.btn__text}>
        <span className={styles["btn__text--up"]} ref={upRef}>
          Login
        </span>
        <span className={styles["btn__text--down"]} ref={downRef}>
          Login
        </span>
      </span>

      <div className={styles.btn__background}>
        <svg
          width='94'
          height='44'
          viewBox='0 0 94 44'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          preserveAspectRatio='none'
        >
          <motion.path fill='#5EEAD4' d={d} />
        </svg>
      </div>
    </motion.button>
  );
}
