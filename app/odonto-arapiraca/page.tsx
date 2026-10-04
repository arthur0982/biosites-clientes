import type { Metadata } from "next";
import CoverCarousel, { type CoverSlide } from "@/components/biosite/CoverCarousel";
import HeaderProfile from "@/components/biosite/HeaderProfile";
import LinkButton from "@/components/biosite/LinkButton";
import PromoVideo from "@/components/biosite/PromoVideo";
import SocialIcons, { type SocialLink } from "@/components/biosite/SocialIcons";

export const metadata: Metadata = {
  title: "Odonto Arapiraca | Centro odontológico",
  description: "Centro odontológico em Arapiraca. Agende sua avaliação.",
  icons: { icon: "/odonto-arapiraca/icon.png", apple: "/odonto-arapiraca/icon.png" },
};

const WHATSAPP_URL = "https://wa.me/5582999881163";
const MAPS_URL = "https://maps.app.goo.gl/LP5ypWUGtvydSXNh8?g_st=ic";
const INSTAGRAM_URL = "https://www.instagram.com/odontoarapiraca/";

const unsplash = (id: string) =>
  `https://images.unsplash.com/${id}?w=1200&h=720&q=80&auto=format&fit=crop`;

const coverSlides: CoverSlide[] = [
  { src: unsplash("photo-1629909613654-28e377c37b09"), alt: "Consultório odontológico moderno e iluminado" },
  { src: unsplash("photo-1606265752439-1f18756aa5fc"), alt: "Dentista segurando instrumentos odontológicos" },
  { src: unsplash("photo-1598256989800-fe5f95da9787"), alt: "Cadeira odontológica em clínica limpa" },
];

const socials: SocialLink[] = [
  { platform: "whatsapp", href: WHATSAPP_URL },
  { platform: "instagram", href: INSTAGRAM_URL },
  { platform: "maps", href: MAPS_URL },
];

const links = [
  { label: "Agendar Avaliação", href: WHATSAPP_URL },
  { label: "Como Chegar", href: MAPS_URL },
];

export default function OdontoArapiracaPage() {
  return (
    <div className="min-h-dvh bg-neutral-200">
      <main className="mx-auto flex min-h-dvh w-full max-w-md flex-col bg-neutral-100 pb-12 sm:shadow-2xl">
        <HeaderProfile
          name="Odonto Arapiraca"
          title="Centro odontológico"
          cover={<CoverCarousel slides={coverSlides} />}
          avatarSrc="/odonto-arapiraca/logo.png"
          avatarAlt="Logótipo Odonto Arapiraca"
          avatarFit="contain"
        />

        <div className="mt-4">
          <SocialIcons links={socials} />
        </div>

        <nav className="mt-8 flex flex-col gap-3 px-5">
          {links.map((link) => (
            <LinkButton key={link.label} href={link.href}>
              {link.label}
            </LinkButton>
          ))}
        </nav>

        <section className="mx-auto mt-26 w-68">
          <PromoVideo src="/odonto-arapiraca/video-odonto.mp4" label="Vídeo de apresentação da Odonto Arapiraca" />
        </section>
      </main>
    </div>
  );
}
