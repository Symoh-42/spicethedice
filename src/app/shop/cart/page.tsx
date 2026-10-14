import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import CartView from "@/components/shop/CartView";

export const metadata: Metadata = {
  title: "Your Cart",
  robots: { index: false },
};

export default function CartPage() {
  return (
    <div className="pt-40 pb-24 md:pt-48 md:pb-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <SectionHeading eyebrow="Merch" lines={["Your Cart"]} />
        <div className="mt-14">
          <CartView />
        </div>
      </div>
    </div>
  );
}
