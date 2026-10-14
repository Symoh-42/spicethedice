import { NextResponse } from "next/server";
import { projectBriefSchema } from "@/lib/schemas";

// Placeholder handler. Once the Django REST backend exists, this route
// should proxy to POST /api/project-inquiries/ there, storing the
// attachment in real file storage instead of discarding it.
export async function POST(request: Request) {
  const formData = await request.formData();
  const values = Object.fromEntries(
    Array.from(formData.entries()).filter(([key]) => key !== "attachment")
  );

  const parsed = projectBriefSchema.safeParse(values);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid submission", issues: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const attachment = formData.get("attachment");
  console.log("[project-inquiries] new brief", parsed.data, {
    attachment: attachment instanceof File ? attachment.name : null,
  });

  return NextResponse.json({ ok: true });
}
