"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Minus, Plus } from "lucide-react";
import MerchArt from "./MerchArt";
import { useCart } from "./CartContext";
import { formatPrice, type MerchProduct } from "@/lib/merch";
import { cn } from "@/lib/utils";

export default function ProductOptions({ product }: { product: MerchProduct }) {
  const { add } = useCart();
  const [color, setColor] = useState(product.colors[0]);
  const [size, setSize] = useState<string | undefined>(product.sizes?.[2] ?? product.sizes?.[0]);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    add({ slug: product.slug, color: color.name, size, quantity });
    setAdded(true);
  };

  return (
    <div className="grid gap-10 md:grid-cols-2 md:gap-16">
      <div className="aspect-square">
        <MerchArt
          kind={product.kind}
          color={color}
          image={product.image}
          alt={`${product.name} — ${color.name}`}
          sizes="(min-width: 768px) 50vw, 100vw"
        />
      </div>

      <div>
        <h1 className="font-heading text-4xl font-medium uppercase leading-[0.95] tracking-tight text-text md:text-6xl">
          {product.name}
        </h1>
        <p className="mt-4 font-heading text-sm font-medium uppercase tracking-[0.2em] text-accent">
          {formatPrice(product.price)}
        </p>
        <p className="mt-6 text-base text-muted md:text-lg">{product.description}</p>

        <div className="mt-10">
          <p className="mb-3 font-heading text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            Colour — <span className="text-text">{color.name}</span>
          </p>
          <div className="flex gap-3">
            {product.colors.map((c) => (
              <button
                key={c.name}
                type="button"
                onClick={() => {
                  setColor(c);
                  setAdded(false);
                }}
                aria-label={c.name}
                aria-pressed={c.name === color.name}
                className={cn(
                  "h-10 w-10 rounded-full border-2 transition-transform hover:scale-110",
                  c.name === color.name ? "border-accent" : "border-white/20"
                )}
                style={{ background: c.hex }}
              />
            ))}
          </div>
        </div>

        {product.sizes && (
          <div className="mt-8">
            <p className="mb-3 font-heading text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
              Size
            </p>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => {
                    setSize(s);
                    setAdded(false);
                  }}
                  aria-pressed={s === size}
                  className={cn(
                    "min-w-12 border px-4 py-2.5 font-heading text-xs font-medium uppercase tracking-widest transition-colors",
                    s === size
                      ? "border-accent bg-accent text-near-black"
                      : "border-white/20 text-text hover:border-text"
                  )}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="mt-8">
          <p className="mb-3 font-heading text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
            Quantity
          </p>
          <div className="inline-flex items-center border border-white/20">
            <button
              type="button"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              aria-label="Decrease quantity"
              className="p-3 text-text hover:text-accent"
            >
              <Minus size={14} />
            </button>
            <span className="w-10 text-center font-heading text-sm text-text">{quantity}</span>
            <button
              type="button"
              onClick={() => setQuantity((q) => Math.min(50, q + 1))}
              aria-label="Increase quantity"
              className="p-3 text-text hover:text-accent"
            >
              <Plus size={14} />
            </button>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-6">
          <button
            type="button"
            onClick={handleAdd}
            data-cursor="OPEN"
            className="inline-flex items-center gap-3 bg-accent px-8 py-4 font-heading text-xs font-semibold uppercase tracking-[0.2em] text-near-black transition-colors hover:bg-text"
          >
            {added && <Check size={16} aria-hidden="true" />}
            {added ? "Added to Cart" : "Add to Cart"}
          </button>
          {added && (
            <Link
              href="/shop/cart"
              className="font-heading text-xs font-medium uppercase tracking-[0.2em] text-text underline-offset-4 hover:text-accent hover:underline"
            >
              View cart & order
            </Link>
          )}
        </div>

        <ul className="mt-12 space-y-2 border-t border-white/10 pt-8">
          {product.details.map((d) => (
            <li key={d} className="flex items-center gap-3 text-sm text-text/80">
              <span className="h-1 w-1 rounded-full bg-accent" aria-hidden="true" />
              {d}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
