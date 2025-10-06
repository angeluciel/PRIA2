"use client";

import { useEffect } from "react";
import { animate, stagger, spring } from "motion/react";

type Opts = {
  nameRef: React.RefObject<HTMLElement | null>;
  headingRef: React.RefObject<HTMLElement | null>;
};

export default function useHeroIntro({ nameRef, headingRef }: Opts) {
  useEffect(() => {
    const nameEl = nameRef.current;
    const headingEl = headingRef.current;
    if (!nameEl || !headingEl) return;

    const spans = headingEl.querySelectorAll("span");
    if (!spans.length) return;

    const timeline = [
      [
        nameEl,
        { x: [50, 0], opacity: [0, 1] },
        { type: spring, bounce: 0.2, duration: 0.8 },
      ],
      [
        spans,
        { x: [50, 0], opacity: [0, 1], duration: 3 },
        { delay: stagger(0.05) },
      ],
    ] as const;

    const controls = animate(timeline);
    return () => controls.cancel();
  }, [nameRef, headingRef]);
}
