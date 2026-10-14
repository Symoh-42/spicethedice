import { NextResponse } from "next/server";
import { merchOrderSchema } from "@/lib/schemas";
import { getMerchBySlug } from "@/lib/merch";

// Placeholder handler, same as /api/contact. Once a backend exists, proxy the
// order there (and send the confirmation SMS/email) instead of logging it.
export async function POST(request: Request) {
  const body = await request.json();
  const parsed = merchOrderSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid order", issues: parsed.error.flatten() },
      { status: 400 }
    );
  }

  for (const item of parsed.data.items) {
    const product = getMerchBySlug(item.slug);
    const validColor = product?.colors.some((c) => c.name === item.color);
    const validSize = product?.sizes ? product.sizes.includes(item.size ?? "") : !item.size;
    if (!product || !validColor || !validSize) {
      return NextResponse.json(
        { error: `Unknown product option: ${item.slug}` },
        { status: 400 }
      );
    }
  }

  console.log("[merch] new order request", parsed.data);

  return NextResponse.json({ ok: true });
}
