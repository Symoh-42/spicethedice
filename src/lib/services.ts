export type Service = {
  number: string;
  title: string;
  slug: string;
  headline: string;
  description: string;
  deliverables: string[];
  relatedProjectSlugs: string[];
};

export const services: Service[] = [
  {
    number: "01",
    title: "Film Direction",
    slug: "film-direction",
    headline: "Stories deserve a visual language.",
    description:
      "Creative and narrative direction for short-form and independent film, from concept through to final cut.",
    deliverables: ["Narrative direction", "Shot design", "On-set direction"],
    relatedProjectSlugs: ["bionic-shiro"],
  },
  {
    number: "02",
    title: "Cinematography",
    slug: "cinematography",
    headline: "Every frame has a point of view.",
    description:
      "Camera work built around mood, movement and story — for film, music video and content production.",
    deliverables: ["Camera direction", "Lighting", "Shot composition"],
    relatedProjectSlugs: ["bionic-shiro", "wametuzoe", "african-filmmaker-on-a-budget"],
  },
  {
    number: "03",
    title: "Music Video Production",
    slug: "music-video-production",
    headline: "Turn music into images.",
    description:
      "End-to-end music video production — concept, direction, cinematography and edit, built to carry the energy of the track.",
    deliverables: ["Concept development", "Direction", "Cinematography", "Edit"],
    relatedProjectSlugs: ["wametuzoe", "misa"],
  },
  {
    number: "04",
    title: "Digital Content Production",
    slug: "digital-content-production",
    headline: "Content people stop scrolling for.",
    description:
      "Social-first video production for TikTok, Instagram and short-form platforms — built to be watched, not skipped.",
    deliverables: ["Short-form video", "Social campaigns", "Behind-the-scenes content"],
    relatedProjectSlugs: ["african-filmmaker-on-a-budget", "molo-color-festival"],
  },
  {
    number: "05",
    title: "Entertainment Shows",
    slug: "entertainment-shows",
    headline: "Built for the crowd.",
    description:
      "Interactive and audience-driven entertainment formats produced for live and social distribution.",
    deliverables: ["Format development", "Live production", "Audience-driven content"],
    relatedProjectSlugs: ["pop-the-balloon", "molo-color-festival"],
  },
  {
    number: "06",
    title: "Graphic Design",
    slug: "graphic-design",
    headline: "Every frame needs a strong identity.",
    description:
      "Promotional graphics, artwork and visual identity design for music, podcasts and brands.",
    deliverables: ["Artwork", "Social graphics", "Promotional visuals"],
    relatedProjectSlugs: ["pondis-podcast"],
  },
  {
    number: "07",
    title: "Visual Effects",
    slug: "visual-effects",
    headline: "Reality is only the start.",
    description:
      "Compositing and visual effects work integrated into the production process, not bolted on afterward.",
    deliverables: ["Compositing", "Cinematic effects", "Post-production VFX"],
    relatedProjectSlugs: ["bionic-shiro"],
  },
  {
    number: "08",
    title: "Creative Direction",
    slug: "creative-direction",
    headline: "From concept to final cut.",
    description:
      "Overarching creative direction that ties concept, visuals and production together into one coherent idea.",
    deliverables: ["Concept development", "Visual direction", "Production oversight"],
    relatedProjectSlugs: [],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
