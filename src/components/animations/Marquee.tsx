"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function Marquee({
  text,
  speed = 50,
  className = "",
}: {
  text: string;
  speed?: number;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const inner = innerRef.current;
    if (!inner) return;

    const totalWidth = inner.scrollWidth / 2;

    gsap.to(inner, {
      x: -totalWidth,
      duration: totalWidth / speed,
      ease: "none",
      repeat: -1,
    });
  }, [speed]);

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden whitespace-nowrap ${className}`}
    >
      <div ref={innerRef} className="inline-flex">
        {[...Array(4)].map((_, i) => (
          <span
            key={i}
            className="inline-block mx-8 text-6xl md:text-8xl font-bold text-surface-lighter/30 select-none"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
