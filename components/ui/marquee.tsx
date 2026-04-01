"use client";

import {
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
} from "motion/react";
import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
} from "react";

import { cn } from "@/lib/utils";

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
  durationSeconds?: number;
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  durationSeconds = 28,
  ...props
}: MarqueeProps) {
  const reduceMotion = useReducedMotion();
  const stripRef = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<{ pause: () => void; play: () => void; stop: () => void } | null>(
    null
  );
  const [extent, setExtent] = useState(0);
  const translate = useMotionValue(0);

  const copies = Math.max(2, repeat);

  useLayoutEffect(() => {
    const el = stripRef.current;
    if (!el) return;
    const measure = () => {
      setExtent(vertical ? el.offsetHeight : el.offsetWidth);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [vertical, children]);

  useEffect(() => {
    controlsRef.current?.stop();
    controlsRef.current = null;

    if (extent <= 0 || reduceMotion) {
      translate.set(0);
      return;
    }

    const keyframes = reverse ? [-extent, 0] : [0, -extent];
    translate.set(keyframes[0]);

    const controls = animate(translate, keyframes, {
      duration: durationSeconds,
      repeat: Infinity,
      ease: "linear",
      repeatType: "loop",
    });
    controlsRef.current = controls;

    return () => {
      controls.stop();
      controlsRef.current = null;
    };
  }, [extent, durationSeconds, reverse, reduceMotion, translate]);

  return (
    <div
      {...props}
      className={cn(
        "group overflow-hidden p-2 [--gap:1rem]",
        className
      )}
      onMouseEnter={() => {
        if (pauseOnHover) controlsRef.current?.pause();
      }}
      onMouseLeave={() => {
        if (pauseOnHover) controlsRef.current?.play();
      }}
    >
      <motion.div
        className={cn(
          "flex w-max gap-(--gap)",
          vertical ? "flex-col" : "flex-row"
        )}
        style={{
          x: vertical ? 0 : translate,
          y: vertical ? translate : 0,
        }}
      >
        {Array.from({ length: copies }).map((_, i) => (
          <div
            key={i}
            ref={i === 0 ? stripRef : undefined}
            className={cn(
              "flex shrink-0 justify-around gap-(--gap)",
              vertical ? "flex-col" : "flex-row"
            )}
          >
            {children}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
