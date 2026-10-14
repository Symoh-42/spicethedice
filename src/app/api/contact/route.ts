import { NextResponse } from "next/server";
import { enquirySchema } from "@/lib/schemas";

// Placeholder handler. Once the Django REST backend exists, this route
// should proxy to POST /api/contact/ there instead of handling the
// enquiry directly.
export async function POST(request: Request) {
  const body = await request.json();
  const parsed = enquirySchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid submission", issues: parsed.error.flatten() },
      { status: 400 }
    );
  }

  console.log("[contact] new enquiry", parsed.data);

  return NextResponse.json({ ok: true });
}
