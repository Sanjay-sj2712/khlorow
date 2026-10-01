"use client";

/**
 * AnimateOnScroll
 * ---------------
 * Wraps any children and fades/slides them in when the element
 * enters the viewport using IntersectionObserver.
 *
 * Props:
 *   animation  – "fade-up" (default) | "fade-left" | "fade-right" | "fade-in"
 *   duration   – CSS duration string, default "0.7s"
 *   delay      – CSS delay string,    default "0s"
 *   threshold  – 0–1, default 0.15
 *   once       – unobserve after first reveal, default true
 *   style      – extra inline styles on the wrapper div
 *   className  – extra class names on the wrapper div
 *
 * Usage:
 *   <AnimateOnScroll animation="fade-up" delay="0.1s">
 *     <Typography ...>Hello</Typography>
 *   </AnimateOnScroll>
 */

import { useEffect, useRef } from "react";

export default function AnimateOnScroll({
  children,
  animation = "fade-up",
  duration = "0.7s",
  delay = "0s",
  threshold = 0.15,
  once = true,
  style = {},
  className = "",
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.style.animationDuration = duration;
            el.style.animationDelay = delay;
            el.classList.add("khr-visible");
            if (once) observer.unobserve(el);
          } else if (!once) {
            el.classList.remove("khr-visible");
          }
        });
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [animation, duration, delay, threshold, once]);

  return (
    <div
      ref={ref}
      data-anim={animation}
      className={`khr-reveal ${className}`.trim()}
      style={style}
    >
      {children}
    </div>
  );
}
