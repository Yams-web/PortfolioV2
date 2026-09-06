import { NextRequest, NextResponse } from "next/server";
import { sendContactEmail, type IContactPayload } from "@/lib/mailer";

function isContactPayload(data: unknown): data is IContactPayload {
  if (typeof data !== "object" || data === null) {
    return false;
  }

  const record: Record<string, unknown> = data as Record<string, unknown>;

  return (
    typeof record.name === "string" &&
    record.name.trim().length > 0 &&
    typeof record.email === "string" &&
    record.email.trim().length > 0 &&
    typeof record.message === "string" &&
    record.message.trim().length > 0
  );
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  const body: unknown = await request.json().catch(() => null);

  if (!isContactPayload(body)) {
    return NextResponse.json(
      { error: "Merci de renseigner votre nom, votre email et un message." },
      { status: 400 }
    );
  }

  const payload: IContactPayload = {
    name: body.name,
    email: body.email,
    subject: typeof body.subject === "string" ? body.subject : "",
    message: body.message,
  };

  try {
    await sendContactEmail(payload);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "L'envoi du message a échoué. Merci de réessayer plus tard." },
      { status: 500 }
    );
  }
}
