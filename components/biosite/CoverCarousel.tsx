"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export type CoverSlide = {
  src: string;
  alt: string;
};

type CoverCarouselProps = {
  slides: CoverSlide[];
  intervalMs?: number;
};

export default function CoverCarousel({ slides, intervalMs = 5000 }: CoverCarouselProps) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (slides.length < 2) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const id = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [slides.length, intervalMs]);

  return (
    <div className="absolute inset-0" aria-roledescription="carrossel">
      {slides.map((slide, index) => {
        const isActive = index === active;
        return (
          <div
            key={slide.src}
            aria-hidden={!isActive}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              preload={index === 0}
              sizes="(max-width: 448px) 100vw, 448px"              className={`object-cover transition-transform duration-[6000ms] ease-out motion-reduce:transition-none ${
                isActive ? "scale-100" : "scale-105"
              }`}
            />
          </div>
        );
      })}
      <div className="absolute inset-0 bg-linear-to-b from-black/10 via-transparent to-transparent" />
    </div>
  );
}
