import nodemailer from "nodemailer";
import type { Transporter } from "nodemailer";

export interface IContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const SMTP_HOST: string | undefined = process.env.SMTP_HOST;
const SMTP_PORT: number = Number(process.env.SMTP_PORT ?? 587);
const SMTP_SECURE: boolean = process.env.SMTP_SECURE === "true";
const SMTP_USER: string | undefined = process.env.SMTP_USER;
const SMTP_PASSWORD: string | undefined = process.env.SMTP_PASSWORD;
const CONTACT_RECIPIENT_EMAIL: string | undefined =
  process.env.CONTACT_RECIPIENT_EMAIL;

let cachedTransporter: Transporter | null = null;

function getTransporter(): Transporter {
  if (cachedTransporter) {
    return cachedTransporter;
  }

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASSWORD) {
    throw new Error(
      "Configuration SMTP manquante : SMTP_HOST, SMTP_USER et SMTP_PASSWORD sont requis."
    );
  }

  cachedTransporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_SECURE,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASSWORD,
    },
  });

  return cachedTransporter;
}

export async function sendContactEmail(
  payload: IContactPayload
): Promise<void> {
  if (!CONTACT_RECIPIENT_EMAIL) {
    throw new Error("CONTACT_RECIPIENT_EMAIL n'est pas configuré.");
  }

  const client: Transporter = getTransporter();
  const subjectLine: string = payload.subject.trim()
    ? payload.subject
    : `Nouveau message de ${payload.name}`;

  await client.sendMail({
    from: SMTP_USER,
    to: CONTACT_RECIPIENT_EMAIL,
    replyTo: payload.email,
    subject: `[Portfolio] ${subjectLine}`,
    text: `Nom : ${payload.name}\nEmail : ${payload.email}\n\n${payload.message}`,
    html: `<p><strong>Nom :</strong> ${payload.name}</p><p><strong>Email :</strong> ${payload.email}</p><p>${payload.message.replace(/\n/g, "<br />")}</p>`,
  });
}
