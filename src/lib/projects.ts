import type { Category } from "./categories";
import { stockImage } from "./media";
import { youtubeThumb } from "./youtube";

export type ProjectMedia = {
  type: "image" | "video";
  src?: string;
  poster?: string;
  alt: string;
};

export type Project = {
  title: string;
  slug: string;
  category: Category[];
  tag: string;
  description: string;
  roles: string[];
  year?: number;
  client?: string;
  thumbnail?: ProjectMedia;
  heroImage?: ProjectMedia;
  gallery?: ProjectMedia[];
  videos?: ProjectMedia[];
  credits: { role: string; name?: string }[];
  // YouTube video IDs (from the Spice Dice channel) embedded on the case study.
  youtube?: { id: string; title: string; vertical?: boolean }[];
  idea?: string;
  process?: string;
  visualLanguage?: string;
  production?: string;
  result?: string;
  featured?: boolean;
};

function projectGallery(slug: string, count: number): ProjectMedia[] {
  return Array.from({ length: count }, (_, i) => ({
    type: "image" as const,
    src: stockImage(`${slug}-gallery-${i}`, 1200, 1500),
    alt: `${slug} — gallery image ${i + 1}`,
  }));
}

function ytMedia(id: string, alt: string): ProjectMedia {
  return { type: "image", src: youtubeThumb(id, "max"), alt };
}

// Only confirmed project names and credits are listed here. Fields left
// blank (year, client) are unconfirmed and should be filled in as real
// production details become available. Projects with a `youtube` list use
// real footage and thumbnails from the Spice Dice channel; the rest still use
// Lorem Picsum stock imagery as stand-ins until real stills are supplied.
export const projects: Project[] = [
  {
    title: "Wametuzoea",
    slug: "wametuzoe",
    category: ["music"],
    tag: "Official Visualizer",
    year: 2026,
    description:
      "Spice Dice's 2026 single — an official visualizer plus a live studio session, built around performance, energy and visual rhythm.",
    roles: ["Artist", "Production", "Cinematography"],
    thumbnail: ytMedia("i2tTggdXrj8", "Wametuzoea — official visualizer still"),
    heroImage: ytMedia("i2tTggdXrj8", "Wametuzoea — official visualizer still"),
    youtube: [
      { id: "i2tTggdXrj8", title: "Wametuzoea — Official Visualizer" },
      { id: "RWYKQehkDTk", title: "Wametuzoea — Live Studio Session" },
    ],
    credits: [
      { role: "Artist" },
      { role: "Production" },
      { role: "Mix & Master", name: "Young Beat Killer" },
    ],
    idea: "Wametuzoea (Young Kanye West Around Here) — a track that needed visuals carrying the same swagger as the record.",
    production:
      "Released as an official visualizer in September 2026, with a live studio session performance released alongside it.",
    featured: true,
  },
  {
    title: "MISA",
    slug: "misa",
    category: ["music"],
    tag: "Single",
    year: 2026,
    description:
      "MISA — Spice Dice featuring Jackpin Samurai & Maverick Stunnum. Recorded live on stream, released as official audio.",
    roles: ["Artist", "Production"],
    thumbnail: ytMedia("ikGxcC56i0c", "MISA — official audio artwork"),
    heroImage: ytMedia("ikGxcC56i0c", "MISA — official audio artwork"),
    youtube: [
      { id: "ikGxcC56i0c", title: "MISA — Official Audio" },
      { id: "kF3c4dnpYqU", title: "MISA — Live Studio Recording" },
    ],
    credits: [
      { role: "Artist" },
      { role: "Featuring", name: "Jackpin Samurai" },
      { role: "Featuring", name: "Maverick Stunnum" },
    ],
    idea: "A three-way collaboration built for the new wave of Kenyan music.",
    process:
      "The record was cut in a live-streamed studio session, letting the audience watch the song come together in real time.",
    result:
      "Released as official audio in August 2026 — the most-watched release on the channel.",
    featured: false,
  },
  {
    title: "Molo Color Festival",
    slug: "molo-color-festival",
    category: ["content"],
    tag: "Live Performance",
    year: 2026,
    description:
      "Spice Dice live at the Molo Color Festival, streamed in full — plus the 21km bikes & skates ride that got the crew there.",
    roles: ["Performance", "Live Stream", "Content Production"],
    thumbnail: ytMedia("rxXv3yuUWJk", "Spice Dice live at the Molo Color Festival"),
    heroImage: ytMedia("rxXv3yuUWJk", "Spice Dice live at the Molo Color Festival"),
    youtube: [
      { id: "rxXv3yuUWJk", title: "Live at the Molo Color Festival" },
      { id: "kce70w_QQ5s", title: "Molo Stream ft. Jackpin Samurai & Stunnum" },
      { id: "MEdO45RiOgc", title: "21km Bikes & Skates Journey to Molo", vertical: true },
      { id: "zldiIZ77eCw", title: "Soft Talents Festival, Molo", vertical: true },
    ],
    credits: [
      { role: "Performance" },
      { role: "Featuring", name: "Jackpin Samurai" },
      { role: "Featuring", name: "Stunnum" },
    ],
    production:
      "Performed and streamed live, with vertical vlog coverage of the journey and the festival for short-form platforms.",
    featured: false,
  },
  {
    title: "African Filmmaker on a Budget",
    slug: "african-filmmaker-on-a-budget",
    category: ["film", "content"],
    tag: "Short-Form Series",
    description:
      "A behind-the-scenes series showing how real music-video lighting and cinematography get done with a small budget and a lot of ingenuity.",
    roles: ["Cinematography", "Lighting", "Content Production"],
    thumbnail: ytMedia("FCrRylL8y0o", "African Filmmaker on a Budget — behind the scenes"),
    heroImage: ytMedia("FCrRylL8y0o", "African Filmmaker on a Budget — behind the scenes"),
    youtube: [
      { id: "FCrRylL8y0o", title: "African Filmmaker on a Budget", vertical: true },
      { id: "CAACThzrOoI", title: "African Filmmaker on a Budget — Pt 2", vertical: true },
      { id: "smXZH-CsgV8", title: "African Filmmaker on a Budget — Pt 3", vertical: true },
      { id: "FszyqmTKF-w", title: "Indoor lighting for a music video on a budget", vertical: true },
    ],
    credits: [{ role: "Cinematography" }, { role: "Lighting" }],
    idea: "Show that cinematic work doesn't need a cinematic budget.",
    process:
      "Each episode breaks down a real setup — practical lights, improvised rigs and camera tricks — shot vertically for TikTok and YouTube Shorts.",
    result:
      "The channel's most-watched series, with the first episode passing 4.9K views.",
    featured: false,
  },
  {
    title: "Bionic Shiro",
    slug: "bionic-shiro",
    category: ["film", "vfx"],
    tag: "Short Film",
    description:
      "An independent short film combining direction, cinematography and visual effects.",
    roles: ["Direction", "Cinematography", "VFX"],
    thumbnail: {
      type: "image",
      src: stockImage("bionic-shiro-thumb", 1000, 1250),
      alt: "Bionic Shiro — short film still",
    },
    heroImage: {
      type: "image",
      src: stockImage("bionic-shiro-hero", 1920, 1080),
      alt: "Bionic Shiro — short film still",
    },
    gallery: projectGallery("bionic-shiro", 5),
    credits: [
      { role: "Direction" },
      { role: "Cinematography" },
      { role: "VFX" },
    ],
    idea: "A short-form narrative built to push visual effects and cinematography together as one storytelling tool, rather than treating VFX as a post-production add-on.",
    process:
      "Directed and shot with the visual effects work considered from the concept stage, so the final composite work sits inside the story rather than on top of it.",
    visualLanguage:
      "A grounded cinematography style paired with effects work designed to feel embedded in the world of the film, not layered over it.",
    production:
      "An independent production combining direction, cinematography and VFX under one creative lead.",
    result:
      "A short film case study in combining live-action direction with visual effects as a single creative process.",
    featured: false,
  },
  {
    title: "Pondis Podcast",
    slug: "pondis-podcast",
    category: ["design"],
    tag: "Visual Design",
    description:
      "Graphic design and promotional visuals for the Pondis Podcast.",
    roles: ["Graphic Design", "Promotional Visuals"],
    thumbnail: {
      type: "image",
      src: stockImage("pondis-podcast-thumb", 1000, 1250),
      alt: "Pondis Podcast — promotional artwork",
    },
    heroImage: {
      type: "image",
      src: stockImage("pondis-podcast-hero", 1920, 1080),
      alt: "Pondis Podcast — promotional artwork",
    },
    gallery: projectGallery("pondis-podcast", 4),
    credits: [{ role: "Graphic Design" }, { role: "Promotional Visuals" }],
    idea: "Visual identity and promotional assets built to give the podcast a consistent, recognisable presence across platforms.",
    production:
      "Design work covering artwork and promotional graphics for the show.",
    featured: false,
  },
  {
    title: "Pop the Balloon",
    slug: "pop-the-balloon",
    category: ["content"],
    tag: "Entertainment Content",
    description:
      "Pop the Balloon — Spice Edition: an interactive, audience-driven dating-show format run live on stream.",
    roles: ["Content Production"],
    year: 2026,
    thumbnail: ytMedia("_j5YP34pb14", "Pop the Balloon — Spice Edition live stream"),
    heroImage: ytMedia("_j5YP34pb14", "Pop the Balloon — Spice Edition live stream"),
    youtube: [{ id: "_j5YP34pb14", title: "Pop the Balloon — Spice Edition (Live)" }],
    credits: [{ role: "Content Production" }],
    idea: "Content built for an interactive, crowd-driven entertainment format — designed to hold an audience's attention in a live or social setting.",
    production:
      "Produced as social-first entertainment content, built for the platforms it was distributed on.",
    featured: false,
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProject() {
  return projects.find((p) => p.featured) ?? projects[0];
}

export function getRelatedProjects(current: Project, limit = 3) {
  return projects
    .filter(
      (p) =>
        p.slug !== current.slug &&
        p.category.some((c) => current.category.includes(c))
    )
    .slice(0, limit)
    .concat(
      projects.filter(
        (p) =>
          p.slug !== current.slug &&
          !p.category.some((c) => current.category.includes(c))
      )
    )
    .slice(0, limit);
}
