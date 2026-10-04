import type { ReactNode } from "react";

type LinkButtonProps = {
  href: string;
  children: ReactNode;
};

export default function LinkButton({ href, children }: LinkButtonProps) {
  const isExternal = /^https?:\/\//.test(href);
  return (
    <a
      href={href}
      {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
      className="flex h-12 w-full items-center justify-center rounded-[3px] bg-white px-4 text-center text-[13px] font-semibold text-neutral-900 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_4px_14px_rgba(0,0,0,0.07)] transition duration-200 hover:-translate-y-px hover:shadow-[0_2px_4px_rgba(0,0,0,0.05),0_8px_20px_rgba(0,0,0,0.09)] active:translate-y-0"
    >
      {children}
    </a>
  );
}
