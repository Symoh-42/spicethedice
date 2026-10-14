// Official Spice Dice merchandise. Product types (caps, t-shirts, thermos)
// are confirmed; prices, colourways and photos have not been supplied yet.
// Leave `price` as null until a real price is confirmed — the shop then shows
// "Price on request" and the order goes in as a request that the team
// confirms (with payment details) by phone/email. Swap `image` in for the
// illustrated mock-ups once real product photos exist.

export type MerchKind = "cap" | "tshirt" | "thermos";

export type MerchColor = {
  name: string;
  hex: string;
  // Colour used for the printed logo on this colourway.
  ink: string;
};

export type MerchProduct = {
  slug: string;
  name: string;
  kind: MerchKind;
  tagline: string;
  description: string;
  details: string[];
  price: number | null;
  colors: MerchColor[];
  sizes?: string[];
  image?: string;
};

const black: MerchColor = { name: "Black", hex: "#111111", ink: "#ef233c" };
const white: MerchColor = { name: "White", hex: "#f2f2f2", ink: "#111111" };
const red: MerchColor = { name: "Red", hex: "#c8102e", ink: "#f5f5f5" };

export const merchKindLabels: Record<MerchKind, string> = {
  cap: "Caps",
  tshirt: "T-Shirts",
  thermos: "Thermos",
};

export const merch: MerchProduct[] = [
  {
    slug: "spice-dice-cap",
    name: "Spice Dice Cap",
    kind: "cap",
    tagline: "Rep the dice, rain or shine.",
    description:
      "Official Spice Dice cap with the logo front and centre. Built for shoots, streams and everything in between.",
    details: ["Embroidered Spice Dice logo", "Adjustable strap", "One size fits most"],
    price: null,
    colors: [black, white, red],
  },
  {
    slug: "spice-dice-tshirt",
    name: "Spice Dice T-Shirt",
    kind: "tshirt",
    tagline: "Wear the movement.",
    description:
      "Official Spice Dice tee — the one you've seen on the channel. Soft, heavy cotton with the Spice Dice print.",
    details: ["Spice Dice front print", "Unisex fit", "Available S – XXL"],
    price: null,
    colors: [black, white, red],
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    slug: "spice-dice-thermos",
    name: "Spice Dice Thermos",
    kind: "thermos",
    tagline: "Keeps it hot. Keeps it cold. Keeps it Spice.",
    description:
      "Insulated Spice Dice thermos flask for long shoot days, studio sessions and road trips.",
    details: ["Stainless steel, double-walled", "Hot & cold drinks", "Spice Dice branded"],
    price: null,
    colors: [black, white],
  },
];

export function getMerchBySlug(slug: string) {
  return merch.find((m) => m.slug === slug);
}

export function formatPrice(price: number | null) {
  return price === null ? "Price on request" : `KSh ${price.toLocaleString("en-KE")}`;
}
