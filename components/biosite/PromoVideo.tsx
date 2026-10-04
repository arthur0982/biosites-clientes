"use client";

import { useEffect, useRef } from "react";

type PromoVideoProps = {
  src: string;
  label: string;
};

export default function PromoVideo({ src, label }: PromoVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  // React sets `muted` only as a DOM property, so browsers that check it before
  // hydration block autoplay; forcing it here lets the muted autoplay start.
  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    video.muted = true;
    video.play().catch(() => {});
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      aria-label={label}
      controls
      playsInline
      muted
      loop
      autoPlay
      preload="metadata"
      className="block h-auto w-full rounded-xl bg-neutral-200 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_4px_14px_rgba(0,0,0,0.07)]"
    />
  );
}
