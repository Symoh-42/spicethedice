import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import ProductOptions from "@/components/shop/ProductOptions";
import MerchCard from "@/components/shop/MerchCard";
import { merch, getMerchBySlug } from "@/lib/merch";

export function generateStaticParams() {
  return merch.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getMerchBySlug(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.description,
    openGraph: { title: product.name, description: product.description },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getMerchBySlug(slug);
  if (!product) notFound();

  const others = merch.filter((m) => m.slug !== product.slug);

  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Link
          href="/shop"
          className="mb-10 inline-flex items-center gap-2 font-heading text-xs font-medium uppercase tracking-[0.2em] text-muted transition-colors hover:text-text"
        >
          <ArrowLeft size={14} aria-hidden="true" />
          All Merch
        </Link>
        <ProductOptions product={product} />

        {others.length > 0 && (
          <div className="mt-28 border-t border-white/10 pt-14">
            <p className="mb-10 font-heading text-xs font-medium uppercase tracking-[0.3em] text-accent">
              More Merch
            </p>
            <div className="grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((m) => (
                <MerchCard key={m.slug} product={m} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
