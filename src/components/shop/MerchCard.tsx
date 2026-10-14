import Link from "next/link";
import MerchArt from "./MerchArt";
import { formatPrice, type MerchProduct } from "@/lib/merch";

export default function MerchCard({ product }: { product: MerchProduct }) {
  return (
    <Link href={`/shop/${product.slug}`} data-cursor="VIEW" className="group block">
      <div className="aspect-square overflow-hidden">
        <MerchArt
          kind={product.kind}
          color={product.colors[0]}
          image={product.image}
          alt={product.name}
          className="transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-heading text-xl font-medium uppercase tracking-tight text-text transition-colors group-hover:text-accent">
            {product.name}
          </h3>
          <p className="mt-1 text-sm text-muted">{product.tagline}</p>
        </div>
        <span className="shrink-0 font-heading text-xs font-medium uppercase tracking-[0.15em] text-accent">
          {formatPrice(product.price)}
        </span>
      </div>
      <div className="mt-3 flex gap-2">
        {product.colors.map((c) => (
          <span
            key={c.name}
            title={c.name}
            className="h-3 w-3 rounded-full border border-white/30"
            style={{ background: c.hex }}
          />
        ))}
      </div>
    </Link>
  );
}
