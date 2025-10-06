"use client";

import { useEffect } from "react";
import { animate, hover } from "motion/react";

type Opts = {
  triggerRef: React.RefObject<HTMLElement | null>;
  upRef: React.RefObject<HTMLElement | null>;
  downRef: React.RefObject<HTMLElement | null>;
};

export default function useHoverSwap({ triggerRef, upRef, downRef }: Opts) {
  useEffect(() => {
    const el = triggerRef.current;
    const up = upRef.current;
    const down = downRef.current;
    if (!el || !up || !down) return;

    const cleanup = hover(el, () => {
      animate(
        up,
        { y: [0, 14], opacity: [1, 0] },
        { duration: 0.3, ease: "backOut" }
      );
      animate(
        down,
        { y: [-14, 0], opacity: [0, 1] },
        { duration: 0.3, ease: "backOut" }
      );

      // on hover out
      return () => {
        animate(
          down,
          { y: [0, -14], opacity: [1, 0] },
          { duration: 0.3, ease: "backOut" }
        );
        animate(
          up,
          { y: [14, 0], opacity: [0, 1] },
          { duration: 0.3, ease: "backOut" }
        );
      };
    });

    return () => cleanup?.();
  }, [triggerRef, upRef, downRef]);
}
