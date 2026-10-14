// Real content pulled from the Spice Dice YouTube channel
// (https://www.youtube.com/@spicedice6775). View counts are a snapshot taken
// 14 Oct 2026 and will drift — refresh them when re-syncing the channel.

export const channel = {
  name: "Spice Dice",
  handle: "@spicedice6775",
  id: "UChPsa_6CiwtjuJ_ol07ys7w",
  url: "https://www.youtube.com/@spicedice6775",
  subscribeUrl: "https://www.youtube.com/@spicedice6775?sub_confirmation=1",
  subscribers: "1.31K",
  videoCount: 79,
  avatar:
    "https://yt3.googleusercontent.com/HXYnwUZBJUUz_bolAonkrK_lWPUMz56NlPpSC8NbbfHTPdXDi-1k4LyPVwpIOEaBV0obeFiIBQ=s900-c-k-c0x00ffffff-no-rj",
  discord: "https://discord.gg/R7eMkXNQq",
  discordName: "Spice Yoya Clan",
} as const;

export type VideoSeries =
  | "music"
  | "live"
  | "filmmaking"
  | "challenge"
  | "vlog"
  | "tech";

export type YouTubeVideo = {
  id: string;
  title: string;
  series: VideoSeries;
  published?: string;
  views?: number;
  short?: boolean;
  description?: string;
};

export const seriesLabels: Record<VideoSeries, string> = {
  music: "Music",
  live: "Live",
  filmmaking: "Filmmaking",
  challenge: "Ksh 100K Challenge",
  vlog: "Vlogs",
  tech: "Tech",
};

export const videos: YouTubeVideo[] = [
  // Music
  {
    id: "i2tTggdXrj8",
    title: "Wametuzoea (Young Kanye West Around Here) — Official Visualizer",
    series: "music",
    published: "2026-09-06",
    views: 302,
    description:
      "The latest sound from Spice Dice. Mixed & mastered by Young Beat Killer.",
  },
  {
    id: "RWYKQehkDTk",
    title: "Wametuzoea — Live Studio Session",
    series: "music",
    published: "2026-08-31",
    views: 183,
  },
  {
    id: "ikGxcC56i0c",
    title: "MISA ft. Jackpin Samurai & Maverick Stunnum — Official Audio",
    series: "music",
    published: "2026-08-16",
    views: 1531,
    description:
      "Spice Dice featuring Jackpin Samurai & Maverick Stunnum. New Kenyan music, 2026.",
  },
  {
    id: "kF3c4dnpYqU",
    title: "MISA — Live Studio Recording ft. Samurai Jackpin & Maverick Stunnum",
    series: "music",
    published: "2026-08-10",
    views: 232,
  },
  {
    id: "uRKuyGIScVI",
    title: "Hurt So Good — a song made with AI",
    series: "music",
  },
  {
    id: "J9nQ2tBbaQ0",
    title: "She Sang This Once… Now Everyone Is Looking for Her",
    series: "music",
    published: "2026-03-25",
    views: 319,
    short: true,
  },

  // Live
  {
    id: "rxXv3yuUWJk",
    title: "Spice Dice live at the Molo Color Festival",
    series: "live",
    published: "2026-08-23",
    views: 448,
  },
  {
    id: "JFstV2LIduw",
    title: "Spice Dice Live Boxing Stream",
    series: "live",
    published: "2026-08-09",
    views: 324,
  },
  {
    id: "_j5YP34pb14",
    title: "Pop the Balloon — Spice Edition (Live)",
    series: "live",
    published: "2026-08-03",
    views: 870,
  },
  {
    id: "kce70w_QQ5s",
    title: "Molo Stream ft. Jackpin Samurai & Stunnum — Full Stream",
    series: "live",
    published: "2026-07-19",
    views: 659,
  },
  {
    id: "Ooz3HrjZBAg",
    title: "The Ultimate Prank on Kenya's Biggest Music Pundit — Bloga Flani",
    series: "live",
  },

  // Filmmaking
  {
    id: "FCrRylL8y0o",
    title: "African Filmmaker on a Budget",
    series: "filmmaking",
    views: 4900,
    short: true,
  },
  {
    id: "CAACThzrOoI",
    title: "African Filmmaker on a Budget — Pt 2",
    series: "filmmaking",
    views: 2300,
    short: true,
  },
  {
    id: "smXZH-CsgV8",
    title: "African Filmmaker on a Budget — Pt 3",
    series: "filmmaking",
    views: 263,
    short: true,
  },
  {
    id: "FszyqmTKF-w",
    title: "Indoor lighting for a music video on a budget",
    series: "filmmaking",
    views: 1200,
    short: true,
  },
  {
    id: "wpxJUx1TtW4",
    title: "Filmmaker in His Element",
    series: "filmmaking",
    views: 1500,
    short: true,
  },

  // Ksh 100,000 in 30 days
  {
    id: "jA3fs0J7kco",
    title: "Day 7 — Making Ksh 100,000 in 30 days",
    series: "challenge",
    published: "2026-10-13",
    short: true,
  },
  {
    id: "J2IbU9QP-pk",
    title: "Day 6 — Making Ksh 100,000 in 30 days",
    series: "challenge",
    published: "2026-10-12",
    short: true,
  },
  {
    id: "31eIL2w2GNk",
    title: "Day 5 — Making Ksh 100,000 in 30 days",
    series: "challenge",
    published: "2026-10-11",
    views: 161,
    short: true,
  },
  {
    id: "IK4y0hayxXA",
    title: "Day 4 — Making Ksh 100,000 in 30 days",
    series: "challenge",
    published: "2026-10-10",
    short: true,
  },

  // Vlogs
  {
    id: "MEdO45RiOgc",
    title: "21km Bikes & Skates Journey to Molo",
    series: "vlog",
    views: 729,
    short: true,
  },
  {
    id: "zldiIZ77eCw",
    title: "Weekly Vertical Vlog — Soft Talents Festival, Molo",
    series: "vlog",
    short: true,
  },
  {
    id: "o8iqIQ4zNPg",
    title: "Tea Farm Highlights",
    series: "vlog",
    views: 522,
    short: true,
  },
  {
    id: "zySyVXHc5AA",
    title: "Birthday Highlights",
    series: "vlog",
    views: 1600,
    short: true,
  },
  {
    id: "M0C_AzYptUQ",
    title: "Recap 2025",
    series: "vlog",
    short: true,
  },
  {
    id: "Fx72_dqr3oI",
    title: "A Lot Has Happened — Life Update",
    series: "vlog",
    published: "2026-03-16",
    views: 142,
  },

  // Tech
  {
    id: "EtnU5cO0VN0",
    title: "Oraimo I12 Wireless Headphones — Unboxing & Review",
    series: "tech",
    views: 1200,
    short: true,
  },
  {
    id: "VX7JScFLz5s",
    title: "Rich Ripple 20000mAh Power Bank Unboxing",
    series: "tech",
    views: 394,
    short: true,
  },
  {
    id: "cXcoq8uEdJA",
    title: "P9 Headphones — Unboxing + First Impressions",
    series: "tech",
    short: true,
  },
];

export const showreelVideoId = "i2tTggdXrj8";

// hq720 is 1280x720 with no letterboxing and exists for every upload on the
// channel; maxresdefault is used for full-bleed hero art.
export function youtubeThumb(id: string, quality: "hq" | "max" = "hq") {
  return `https://i.ytimg.com/vi/${id}/${quality === "max" ? "maxresdefault" : "hq720"}.jpg`;
}

export function youtubeWatchUrl(video: Pick<YouTubeVideo, "id" | "short">) {
  return video.short
    ? `https://www.youtube.com/shorts/${video.id}`
    : `https://www.youtube.com/watch?v=${video.id}`;
}

export function getVideosBySeries(series: VideoSeries) {
  return videos.filter((v) => v.series === series);
}

export function formatViews(views?: number) {
  if (views === undefined) return undefined;
  if (views >= 1000) return `${(views / 1000).toFixed(1).replace(/\.0$/, "")}K views`;
  return `${views} views`;
}
