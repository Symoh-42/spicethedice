import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import MerchCard from "@/components/shop/MerchCard";
import { merch } from "@/lib/merch";

export const metadata: Metadata = {
  title: "Merch Shop",
  description:
    "Official Spice Dice merchandise — caps, t-shirts and thermos flasks. Order online, delivered across Kenya.",
};

export default function ShopPage() {
  return (
    <div className="pt-40 pb-24 md:pt-48 md:pb-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <SectionHeading
          eyebrow="Official Merch"
          lines={["Rep the", "Dice."]}
          description="Caps, tees and thermos flasks — the same gear you see on the channel. Pick your colour and size, send your order, and we'll confirm payment via M-Pesa."
        />
        <div className="mt-16 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {merch.map((product) => (
            <MerchCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
