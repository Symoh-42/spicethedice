"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Minus, Plus, X } from "lucide-react";
import MerchArt from "./MerchArt";
import { cartKey, useCart } from "./CartContext";
import { formatPrice, getMerchBySlug } from "@/lib/merch";
import { deliveryMethods, merchOrderSchema, type MerchOrderValues } from "@/lib/schemas";

// Cart lines come from CartContext, not form inputs, so the form validates
// everything except `items`; the API route re-validates the full order.
const detailsSchema = merchOrderSchema.omit({ items: true });
type DetailsValues = Omit<MerchOrderValues, "items">;

export default function CartView() {
  const { items, setQuantity, remove, clear } = useCart();
  const [status, setStatus] = useState<"idle" | "submitting" | "sent" | "error">("idle");

  const lines = items
    .map((item) => ({ item, product: getMerchBySlug(item.slug) }))
    .filter((l) => l.product !== undefined);

  const allPriced = lines.every((l) => l.product!.price !== null);
  const total = lines.reduce((sum, l) => sum + (l.product!.price ?? 0) * l.item.quantity, 0);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DetailsValues>({
    resolver: zodResolver(detailsSchema),
    defaultValues: { deliveryMethod: "Delivery" },
  });

  const onSubmit = async (values: DetailsValues) => {
    setStatus("submitting");
    try {
      const res = await fetch("/api/merch-orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, items }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      clear();
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="border border-accent/40 bg-accent/5 p-8">
        <p className="font-heading text-lg uppercase tracking-tight text-text">Order received.</p>
        <p className="mt-2 text-sm text-muted">
          Thanks for repping Spice Dice! We&rsquo;ll call or email you shortly to confirm your
          order, total and payment.
        </p>
        <Link
          href="/shop"
          className="mt-6 inline-block font-heading text-xs font-medium uppercase tracking-[0.2em] text-text hover:text-accent"
        >
          Back to the shop
        </Link>
      </div>
    );
  }

  if (lines.length === 0) {
    return (
      <div className="border border-white/10 p-10 text-center">
        <p className="font-heading text-lg uppercase tracking-tight text-text">Your cart is empty.</p>
        <Link
          href="/shop"
          className="mt-6 inline-block bg-accent px-8 py-4 font-heading text-xs font-semibold uppercase tracking-[0.2em] text-near-black transition-colors hover:bg-text"
        >
          Shop Merch
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr]">
      <div>
        <ul className="divide-y divide-white/10 border-y border-white/10">
          {lines.map(({ item, product }) => {
            const key = cartKey(item);
            const color = product!.colors.find((c) => c.name === item.color) ?? product!.colors[0];
            return (
              <li key={key} className="flex gap-5 py-6">
                <Link href={`/shop/${product!.slug}`} className="h-24 w-24 shrink-0 md:h-28 md:w-28">
                  <MerchArt kind={product!.kind} color={color} image={product!.image} alt={product!.name} sizes="112px" />
                </Link>
                <div className="flex flex-1 flex-col justify-between gap-3">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-heading text-base font-medium uppercase tracking-tight text-text">
                        {product!.name}
                      </p>
                      <p className="mt-1 text-xs uppercase tracking-widest text-muted">
                        {item.color}
                        {item.size ? ` / ${item.size}` : ""}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => remove(key)}
                      aria-label={`Remove ${product!.name}`}
                      className="text-muted hover:text-accent"
                    >
                      <X size={16} />
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center border border-white/20">
                      <button
                        type="button"
                        onClick={() => setQuantity(key, item.quantity - 1)}
                        aria-label="Decrease quantity"
                        className="p-2 text-text hover:text-accent"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="w-8 text-center text-sm text-text">{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() => setQuantity(key, Math.min(50, item.quantity + 1))}
                        aria-label="Increase quantity"
                        className="p-2 text-text hover:text-accent"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                    <span className="font-heading text-xs uppercase tracking-[0.15em] text-accent">
                      {product!.price === null
                        ? formatPrice(null)
                        : formatPrice(product!.price * item.quantity)}
                    </span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <p className="mt-6 text-sm text-muted">
          {allPriced
            ? `Total: ${formatPrice(total)} (excluding delivery)`
            : "We'll confirm the final price, delivery fee and M-Pesa payment details with you before anything is charged."}
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-8">
        <p className="font-heading text-xs font-medium uppercase tracking-[0.3em] text-accent">
          Your Details
        </p>
        <Field label="Name" error={errors.name?.message}>
          <input {...register("name")} type="text" autoComplete="name" className={inputClass} />
        </Field>
        <Field label="Phone (M-Pesa)" error={errors.phone?.message}>
          <input {...register("phone")} type="tel" autoComplete="tel" placeholder="07XX XXX XXX" className={inputClass} />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <input {...register("email")} type="email" autoComplete="email" className={inputClass} />
        </Field>
        <Field label="Delivery or Pick-up">
          <select {...register("deliveryMethod")} className={inputClass}>
            {deliveryMethods.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Town / Delivery Location" error={errors.location?.message}>
          <input {...register("location")} type="text" autoComplete="address-level2" className={inputClass} />
        </Field>
        <Field label="Notes (optional)">
          <textarea {...register("notes")} rows={3} className={inputClass} />
        </Field>

        <button
          type="submit"
          disabled={status === "submitting"}
          data-cursor="OPEN"
          className="w-full bg-accent px-8 py-4 font-heading text-xs font-semibold uppercase tracking-[0.2em] text-near-black transition-colors hover:bg-text disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : "Place Order Request"}
        </button>

        {status === "error" && (
          <p className="text-sm text-accent" role="alert">
            Something went wrong sending your order. Please try again.
          </p>
        )}
      </form>
    </div>
  );
}

const inputClass =
  "w-full border-b border-white/20 bg-transparent py-3 text-text placeholder:text-muted focus:border-accent focus:outline-none";

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block font-heading text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
        {label}
      </span>
      {children}
      {error && (
        <span className="mt-1 block text-xs text-accent" role="alert">
          {error}
        </span>
      )}
    </label>
  );
}
