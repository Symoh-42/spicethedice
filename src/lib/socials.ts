import { channel } from "./youtube";

export type Social = {
  label: string;
  href: string;
};

// TikTok / Instagram / Audiomack handles have not been supplied yet — add
// them here once confirmed. Only links that actually resolve are listed.
export const socials: Social[] = [
  { label: "YouTube", href: channel.url },
  { label: "Discord", href: channel.discord },
];
