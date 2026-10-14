"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { useCart } from "./CartContext";

export default function CartButton() {
  const { count } = useCart();

  return (
    <Link
      href="/shop/cart"
      data-cursor="OPEN"
      aria-label={`Cart, ${count} item${count === 1 ? "" : "s"}`}
      className="relative text-text transition-colors hover:text-accent"
    >
      <ShoppingBag size={20} aria-hidden="true" />
      {count > 0 && (
        <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-accent px-1 text-[10px] font-semibold text-near-black">
          {count}
        </span>
      )}
    </Link>
  );
}
