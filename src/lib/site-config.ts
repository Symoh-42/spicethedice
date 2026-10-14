export const siteConfig = {
  name: "Spice the Dice",
  productionName: "Spice the Dice Productions",
  tagline: "Film. Music. Digital Content. Design.",
  location: "Nairobi, Kenya",
  // No public email/phone has been supplied yet — wire these up once
  // the business shares real contact details. Until then, all enquiries
  // route through the on-site contact form.
  email: "",
  phone: "",
  whatsapp: "",
  url: "https://www.spicethedice.com",
  description:
    "Spice the Dice Productions is the Nairobi-based creative studio behind Spice Dice — music, film direction, music videos, cinematography, live streams, digital content, design and official merch.",
  keywords: [
    "film director Kenya",
    "videographer Nairobi",
    "music video production Kenya",
    "film production Nairobi",
    "creative production Kenya",
    "cinematography Nairobi",
    "video production Kenya",
    "graphic designer Nairobi",
    "VFX Kenya",
    "digital content creator Kenya",
    "music video director Kenya",
  ],
} as const;

export const navLinks = [
  { label: "Work", href: "/work" },
  { label: "Videos", href: "/videos" },
  { label: "Services", href: "/services" },
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const mobileNavLinks = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Videos", href: "/videos" },
  { label: "Shop", href: "/shop" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;
