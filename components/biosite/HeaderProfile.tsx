import Image from "next/image";
import type { ReactNode } from "react";

type HeaderProfileProps = {
  name: string;
  title: string;
  cover: ReactNode;
  avatarSrc: string;
  avatarAlt?: string;
  /** "contain" keeps wide logos fully visible inside the circle. */
  avatarFit?: "cover" | "contain";
};

export default function HeaderProfile({
  name,
  title,
  cover,
  avatarSrc,
  avatarAlt = name,
  avatarFit = "cover",
}: HeaderProfileProps) {
  return (
    <header className="flex flex-col items-center text-center">
      <div className="relative h-60 w-full overflow-hidden">
        {cover}
        {/* The curve's peak (top of this h-10 svg) is where the avatar center sits. */}
        <svg
          aria-hidden
          viewBox="0 0 100 40"
          preserveAspectRatio="none"
          className="absolute inset-x-0 -bottom-px z-10 h-10 w-full fill-neutral-100"
        >
          <path d="M0 40 Q50 -40 100 40 Z" />
        </svg>
      </div>

      {/* -mt-26 = curve height (2.5rem) + half the avatar (4rem). */}
      <div className="relative z-20 -mt-26 size-32 overflow-hidden rounded-full bg-white ring-4 ring-neutral-100">
        <Image
          src={avatarSrc}
          alt={avatarAlt}
          fill
          preload
          sizes="128px"
          className={avatarFit === "contain" ? "object-contain p-2" : "object-cover"}
        />
      </div>

      <h1 className="mt-4 text-[22px] font-bold leading-tight tracking-tight text-neutral-900">
        {name}
      </h1>
      <h2 className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-900">
        {title}
      </h2>
    </header>
  );
}
