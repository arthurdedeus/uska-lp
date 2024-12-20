export const FooterSocialIconEnum = {
  X: { src: "x.svg", alt: "X", href: "#" },
  INSTAGRAM: { src: "instagram.svg", alt: "Instagram", href: "#" },
  TIKTOK: { src: "tiktok.svg", alt: "Tiktok", href: "#" },
  YOUTUBE: { src: "youtube.svg", alt: "Youtube", href: "#" },
};

type FooterSocialIconProps = {
  icon: {
    src: string;
    alt: string;
    href: string;
  };
};

export function FooterSocialIcon({ icon }: FooterSocialIconProps) {
  return (
    <a href={icon.href}>
      <img className="text-primary" src={icon.src} alt={icon.alt} />
    </a>
  );
}
