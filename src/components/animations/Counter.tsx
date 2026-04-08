"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Counter({
  target,
  suffix = "",
  duration = 2,
  className = "",
}: {
  target: number;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || hasAnimated) return;

    const obj = { value: 0 };

    ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      once: true,
      onEnter: () => {
        setHasAnimated(true);
        gsap.to(obj, {
          value: target,
          duration,
          ease: "power2.out",
          snap: { value: 1 },
          onUpdate: () => {
            if (el) el.textContent = Math.round(obj.value) + suffix;
          },
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [target, suffix, duration, hasAnimated]);

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}
