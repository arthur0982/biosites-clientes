import { MapPin, type LucideIcon } from "lucide-react";
import { Facebook, Instagram, Whatsapp } from "./brand-icons";

export type SocialPlatform = "whatsapp" | "facebook" | "instagram" | "maps";

export type SocialLink = {
  platform: SocialPlatform;
  href: string;
};

const ICONS: Record<SocialPlatform, { icon: LucideIcon; label: string }> = {
  whatsapp: { icon: Whatsapp, label: "WhatsApp" },
  facebook: { icon: Facebook, label: "Facebook" },
  instagram: { icon: Instagram, label: "Instagram" },
  maps: { icon: MapPin, label: "Localização" },
};

export default function SocialIcons({ links }: { links: SocialLink[] }) {
  return (
    <ul className="flex items-center justify-center gap-5">
      {links.map(({ platform, href }) => {
        const { icon: Icon, label } = ICONS[platform];
        return (
          <li key={platform}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="block text-neutral-900 transition-opacity hover:opacity-60"
            >
              <Icon size={20} strokeWidth={2} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
